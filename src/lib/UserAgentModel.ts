import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import mongoose from "mongoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "chipasuseragent",
  },
  options: {
    allowMixed: 0,
  },
})
class Visit {
  @prop()
  timestamp: Date;

  @prop()
  utm_params: Record<string, string>;

  @prop()
  entry_point: string;

  @prop()
  device: Record<string, any>;

  @prop()
  os: Record<string, any>;

  @prop()
  browser: Record<string, any>;
}

export class ChipasUserAgent {
  @prop()
  _id: string;

  @prop({ type: () => [Visit] })
  visits: Visit[];
}

export const ChipasUserAgentModel =
  mongoose.models.ChipasUserAgent || getModelForClass(ChipasUserAgent);
