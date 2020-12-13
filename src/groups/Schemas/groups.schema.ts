import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Promise } from "mongoose";

export type GroupDocument = group & Document

@Schema()
export class group {
    @Promise()
    name: string
    @Promise({type: Array})
    posts: string
}

export const GroupSchema = SchemaFactory.createForClass(group)