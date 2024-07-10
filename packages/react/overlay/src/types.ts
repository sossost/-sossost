export type SetStateFunction = (prev: number) => number;
export type FlagState = [number, (updateFunction: SetStateFunction) => void];
export type Listener = () => void;

export type OverlayProps<T = {}> = {
	overlayKey: string;
	resolve?: (value: unknown) => void;
	reject?: (reason: unknown) => void;
} & T;

export type OverlayType<T = {}> = (props: OverlayProps<T>) => any;

export type OverlayStackItem<T = {}> = {
	overlayKey: string;
	overlay: OverlayType<T>;
	resolve: (value: unknown) => void;
	reject: (reason: unknown) => void;
	props: Omit<OverlayProps<T>, 'resolve' | 'reject' | 'overlayKey'>;
};

export type OverlayStack<T = {}> = OverlayStackItem<T>[];

export type ReactOverlayElement = React.ReactElement<
	OverlayProps & { key: string }
>;
