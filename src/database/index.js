import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl = "mongodb+srv://Cluster46201:muhammadhasnain2024@cluster0.0wjgh82.mongodb.net/"

  mongoose.connect(connectionUrl)
    .then(() => console.log("Blog database connection is successful"))
    .catch((error) => console.log("Error connecting to MongoDB:", error));  
};

export default connectToDB;
