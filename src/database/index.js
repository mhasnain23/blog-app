import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl = process.env.MONGODB_URL;

  if (!connectionUrl) {
    console.error("MONGODB_URL is not defined in environment variables.");
    return;
  }

  try {
    await mongoose.connect(connectionUrl);
    console.log("Blog database connection is successful");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToDB;
