import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const result = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
      { folder: "uploads" }
    );

    return res.status(200).json({
      success: true,
      imageUrl: result.secure_url
    });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
