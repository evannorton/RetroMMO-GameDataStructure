import { Definition } from "./Definition";

export interface NoiseDefinition extends Definition {
  readonly audioSourceSlug: string;
}
