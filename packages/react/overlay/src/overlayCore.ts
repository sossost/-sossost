import {
	FlagState,
	Listener,
	OverlayProps,
	OverlayStack,
	OverlayType,
} from './types';

class Overlay {
	private flagState: FlagState;
	private overlayStack: OverlayStack = [];
	private listeners: Listener[] = [];

	constructor(flagState: FlagState) {
		this.flagState = flagState;
	}

	private updateState() {
		const [_, setFlag] = this.flagState;
		setFlag((prev) => prev + 1);
	}

	subscribe(listener: Listener): () => void {
		this.listeners.push(listener);
		return () => {
			this.listeners = this.listeners.filter((l) => l !== listener);
		};
	}

	private notifyListeners() {
		this.listeners.forEach((listener) => listener());
	}

	get currentOverlay() {
		return this.overlayStack[this.overlayStack.length - 1];
	}

	private handleOverlayResolution(
		overlayKey: string,
		resolver: (value: unknown) => void,
		value: unknown,
	) {
		resolver(value);
		this.overlayStack = this.overlayStack.filter(
			({ overlayKey: _overlayKey }) => overlayKey !== _overlayKey,
		);
		this.updateState();
		this.notifyListeners();
	}

	clear() {
		while (this.overlayStack.length) {
			this.pop();
		}
		this.updateState();
		this.notifyListeners();
	}

	pop() {
		this.currentOverlay.reject(
			`Close overlay: ${this.currentOverlay.overlayKey}`,
		);
		this.overlayStack.pop();
		this.updateState();
		this.notifyListeners();
	}

	remove(overlayKey: string, reason: unknown = `Close overlay: ${overlayKey}`) {
		const overlayIndex = this.overlayStack.findIndex(
			(overlay) => overlay.overlayKey === overlayKey,
		);
		if (overlayIndex !== -1) {
			this.overlayStack[overlayIndex].reject(reason);
			this.overlayStack.splice(overlayIndex, 1);
			this.updateState();
			this.notifyListeners();
		}
	}

	push(
		overlayKey: string,
		overlay: OverlayType,
		props: Omit<OverlayProps, 'resolve' | 'reject' | 'overlayKey'>,
	) {
		return new Promise((resolve, reject) => {
			this.overlayStack.push({
				overlayKey,
				overlay,
				props,
				resolve: (value: unknown) =>
					this.handleOverlayResolution(overlayKey, resolve, value),
				reject: (reason: unknown) =>
					this.handleOverlayResolution(overlayKey, reject, reason),
			});
			this.updateState();
			this.notifyListeners();
		});
	}
}

type SetStateFunction = (prevState: number) => number;

let flag = 1;
const setFlag = (updateFunction: SetStateFunction | number) => {
	if (typeof updateFunction === 'function') {
		flag = (updateFunction as SetStateFunction)(flag);
	} else {
		flag = updateFunction;
	}
};

const flagState: [number, React.Dispatch<React.SetStateAction<number>>] = [
	flag,
	setFlag as React.Dispatch<React.SetStateAction<number>>,
];

export const overlayCore = new Overlay(flagState);
