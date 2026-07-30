import { MeshGradientSVG } from './ui/shader-svg';

const MouseTrackerWidget = () => {
  return (
    <div className="fixed-mesh-widget" title="Live Eye Radar Tracker">
      <div className="mesh-widget-header">
        <span className="tracker-dot"></span>
        <span className="tracker-title">LIVE_EYE // RADAR</span>
      </div>
      <div className="mesh-widget-body">
        <MeshGradientSVG />
      </div>
    </div>
  );
};

export default MouseTrackerWidget;
