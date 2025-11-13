import { TrafficeLightProps } from "../types/core";

export default function TrafficLightItem({ type, isActive }: TrafficeLightProps) {
    return <div className={`light ${type} ${isActive ? 'active' : ''}`} style={{ position: "relative" }}>
        {isActive && <div className={`light ${type} ${isActive ? 'active' : ''}`} style={{
            position: "absolute",
            left: 0,
            right: 0,
            filter: "blur(10px)"
        }} />}
    </div>
}