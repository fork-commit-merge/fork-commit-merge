export const LIGHT_COLORS = {
    RED: "red",
    YELLOW: "yellow",
    GREEN: "green"
} as const;

export type LightColor = typeof LIGHT_COLORS[keyof typeof LIGHT_COLORS];

export interface TrafficeLightProps {
    type: LightColor,
    isActive: boolean
}