import mongoose from 'mongoose'

type User = {
  email: string
  password: string
  name: string
  createdAt: Date
}

const Users = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model<User>('Users', Users)
