import { v2 as cloudinary } from "cloudinary";

const cloudinaryRes = async (image) => {
  // Configuration
  cloudinary.config({
    cloud_name: "dofrobzyb",
    api_key: "419621476816482",
    api_secret: process.env.NEXT_CLOUDINARY_SECERT_KEY, // Click 'View API Keys' above to copy your API secret
  });

  // Upload an image
  const uploadResult = await cloudinary.uploader
    .upload(image)
    .catch((error) => {
      console.log(error);
    });

  console.log(uploadResult);

  return uploadResult;
};

export { cloudinaryRes };
