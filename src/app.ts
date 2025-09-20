import cors from "cors";
import morgan from "morgan";
import rateLimit, { ipKeyGenerator } from "express-rate-limit";
import cookieParser from "cookie-parser";
import express from "express";
import { env } from "@/config/env";

const app = express();

app.use(
  cors({
    origin: [env.CLIENT_URL],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));
app.use(cookieParser());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: (req: any) => (req.user ? 1000 : 100), // Limit each IP to 100 requests per windowMs
  message: { error: "Too many requests from this IP, please try again later." },
  legacyHeaders: true,
  standardHeaders: true,
  keyGenerator: (req: any) => ipKeyGenerator(req.ip),
});

app.use(limiter);

export default app;
