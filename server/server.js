import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import mongoose from "mongoose";
import { config } from "dotenv";
import todoRoutes from "./routes/todo.route.js";

const app = express();
const PORT = 5500;

// CONFIGURATION
config();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

// ROUTES
app.use("/", todoRoutes);

// MONGODB SETUP
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the DB.");
    app.listen(PORT, () => {
        console.log(`Server running on PORT : ${PORT}`);
    })
}).catch((error) => console.log(`error: ${error}`));