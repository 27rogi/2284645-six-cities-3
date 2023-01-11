
import typegoose, { getModelForClass, defaultClasses, Ref } from '@typegoose/typegoose';
import { UserEntity } from '../user/user.entity.js';

const { prop, modelOptions } = typegoose;

export interface CommentEntity extends defaultClasses.Base { }

@modelOptions({
  schemaOptions: {
    collection: 'comments'
  }
})
export class CommentEntity extends defaultClasses.TimeStamps {
  @prop({ minlength: 5, maxlength: 1024, required: true })
  public text!: string;

  @prop({ required: true })
  public createdDate!: Date;

  @prop({ required: true, min: 1, max: 5 })
  public rating!: number;

  @prop({
    ref: UserEntity,
    required: true,
    default: [],
    _id: false
  })
  public authorId!: Ref<UserEntity>[];
}

export const CommentModel = getModelForClass(CommentEntity);