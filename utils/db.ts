import mongoose from "mongoose";

type IConnect = {
  isConnected: boolean;
};

const connection: IConnect = {
  isConnected: false, // Initialize to false
};

export async function connectDb() {
  if (connection.isConnected) {
    console.log("Already connected to the database.");
    return;
  }

  // Check existing connections
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState === 1;

    if (connection.isConnected) {
      console.log("Using previous connection to the database.");
      return;
    }

    await mongoose.disconnect();
  }
  // Connect to the database
  const db = await mongoose.connect(process.env.DB_URL as string);
  console.log("New connection to the database.");
  connection.isConnected = db.connections[0].readyState === 1; // Set to true if connected
}

export async function disconnectDb() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false; // Set to false after disconnection
      console.log("Disconnected from the database.");
    } else {
      console.log("Not disconnecting from the database in development.");
    }
  }
}