import { Schema,model } from 'mongoose';

// Document interface
interface User {
  name: string;
  // password: string;

}

// Schema
const schema = new Schema<User>({
  name: { type: String, required: true },
  // password: { type: String, required: true },

});

const UserModel = model<User>('User', schema);
export default UserModel



// import { Schema, model, connect } from 'mongoose';

// // 1. Create an interface representing a document in MongoDB.
// interface IUser {
//   name: string;
//   email: string;
//   avatar?: string;
// }

// // 2. Create a Schema corresponding to the document interface.
// const userSchema = new Schema<IUser>({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   avatar: String
// });

// // 3. Create a Model.
// const User = model<IUser>('User', userSchema);