import { Schema, model } from 'mongoose';

const todoSchema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
  userId: {type: Schema.Types.ObjectId, required: true, ref: 'User' }
},
{ timestamps: true });

const Todo = model('Todo', todoSchema);

export default Todo;
