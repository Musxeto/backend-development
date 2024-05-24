import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
const registerUser = asyncHandler(async (req, res) => {
  //GET USER DETAILS FROM FRONT END
  //VALIDATION - NOT EMPTY
  //CHECK IF USER ALREADY EXISTS
  // CHECK FOR IMAGES, AVATAR
  //-> UPLOAD THEM TO CLOUDINARY AVATAR
  //CREATE USER OBJECT - CREATE ENTRY IN DB
  // REMOVE PASSWORD AND REFRESH TOKEN FIELD
  // check for user creation
  // return res

  const { fullname, email, username, password } = req.body;
  console.log("email:", email);
  if ([fullname, email, username, password].some((field) => !field?.trim())) {
    throw new ApiError(400, "All fields are required");
  }
  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with Email or Username already exists");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(404, "Avatar uis required");
  }

  User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage.url || "",
    email,
    username: username.toLowercase(),
  });
});

export { registerUser };
