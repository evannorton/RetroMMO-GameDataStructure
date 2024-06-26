import { Color } from "../Color";
import { Definition } from "./Definition";

export interface SkinColorDefinition extends Definition {
  readonly characterCustomizeOrder?: number;
  readonly color1: Color;
  readonly color2: Color;
}
