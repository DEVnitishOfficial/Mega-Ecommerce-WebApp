import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'

const userSchema = new Schema(
  {
    firstName: {
        type: String,
        required: [true, "user name is Required"],
        custom_minLength: [5, "Name must be at least 5 characters"],
        custom_maxLength: [50, "Name must be less than 50 characters"],
        trim: true,
        lowercase: true,
    },
    lastName: {
      type: String,
      required: true,
      lowerCase: true,
      trim: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minLength: [8, "password must be at lest eight character"],
        select: false,
    },
    email: {
        type: String,
        required: [true, "user email is required"],
        unique: true,
        lowercase: true,
        unique: [true, "already registered"],
        match: [
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "please entre a valid email address(db)",
        ],
    },
    avatar: {
        public_id: {
          type: String,
        },
        secure_url: {
          type: String,
        },
      },
    role: {
      type: String,
      enum: ["USER", "ADMIN"], // enum → enumeration(means,consists of a set of distinct named values.)
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next){
    if(!this.isModified("password")){
        return next()
    }
    this.password = await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect() = async function (password){
    return await bcrypt.compare(this.password,password)
}

userSchema.methods.generateAccessToken() = async function (){
    return jwt.sign(
        {
      _id: this._id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
      }
    );
  },
  userSchema.methods.generateForgotPasswordToken = function(){
    const forgotToken = crypto.randomBytes(20).toString('hex')
    this.forgotPasswordToken = crypto
    .createHash('sha256')
    .update(forgotToken)
    .digest('hex');

    this.forgotPasswordExpiry = Date.now() + 15 * 60 * 1000 // 15 min

    return forgotToken

  }

export const User = mongoose.model("User", userSchema);
