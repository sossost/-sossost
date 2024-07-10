import * as ReactDOM from 'react-dom';
import { useOverlay } from './useOverlay';

const OVERLAY_ID = 'overlay-container';

export const OverlayRenderer = () => {
	const currentOverlay = useOverlay();

	if (!currentOverlay) {
		return null;
	}

	const OverlayComponent = currentOverlay.overlay;
	const props = currentOverlay.props;

	return ReactDOM.createPortal(
		<OverlayComponent
			overlayKey={currentOverlay.overlayKey}
			resolve={currentOverlay.resolve}
			reject={currentOverlay.reject}
			{...props}
		/>,
		window.document.getElementById(OVERLAY_ID)!,
	);
};
