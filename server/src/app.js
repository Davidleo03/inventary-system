import express from "express"
import { config } from "dotenv";
import router from "./routes/main.js"
import cors from "cors"

config()


app.use(cors());

const port = process.env.PORT || 3000;

const app = express();

app.use(router)


app.listen(port, () => console.log(`Server Running on port ${port}`))










