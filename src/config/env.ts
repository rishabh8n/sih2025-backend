import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/myapp",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
  NODE_ENV: process.env.NODE_ENV || "development",
  REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",
  ACCESS_TOKEN_SECRET:
    process.env.ACCESS_TOKEN_SECRET || "your_access_token_secret",
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY || "1h",
  REFRESH_TOKEN_SECRET:
    process.env.REFRESH_TOKEN_SECRET || "your_refresh_token_secret",
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY || "30d",
  PASSWORD_RESET_TOKEN_SECRET:
    process.env.PASSWORD_RESET_TOKEN_SECRET ||
    "your_password_reset_token_secret",
  PASSWORD_RESET_TOKEN_EXPIRY: process.env.PASSWORD_RESET_TOKEN_EXPIRY || "1h",
  EMAIL_VERIFICATION_TOKEN_SECRET:
    process.env.EMAIL_VERIFICATION_TOKEN_SECRET ||
    "your_email_verification_token_secret",
  EMAIL_VERIFICATION_TOKEN_EXPIRY:
    process.env.EMAIL_VERIFICATION_TOKEN_EXPIRATION || "1h",
  RESEND_API_KEY: process.env.RESEND_API_KEY || "your_resend_api_key",
};
