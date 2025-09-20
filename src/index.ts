import { connectDB } from "@/config/db";
import { redis } from "@/config/redis";
import app from "./app";
import { env } from "@/config/env";

connectDB().then(async () => {
  try {
    redis.on("connecting", () => {
      console.log("Connecting to Redis...");
    });

    redis.on("connect", () => {
      console.log("Connected to Redis");
    });

    redis.on("error", (err) => {
      console.error("Redis error occurred:", err);
    });

    await redis.connect();

    app.on("error", (err) => {
      console.error("Error occurred:", err);
    });
    app.listen(env.PORT, () => {
      console.log(`Server is running on port ${env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
});
