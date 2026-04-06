import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class UserDocument {
  @Prop({ required: true, trim: true })
  firstName: string;

  @Prop({ trim: true })
  lastName: string;

  @Prop({ required: true, trim: true, unique: true })
  email: string;

  @Prop({ required: true, min: 5, max: 10 })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
