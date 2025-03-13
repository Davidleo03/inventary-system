import express from "express"
import { config } from "dotenv";
import router from "./routes/main.js"
import cors from "cors"

const app = express();

config()

const port = process.env.PORT || 3000;

app.use(cors());

app.use(router)


app.listen(port, () => console.log(`Server Running on port ${port}`))










