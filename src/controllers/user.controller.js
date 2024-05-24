import asyncHandler from "../utils/asyncHandler.js";

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
});

export { registerUser };
