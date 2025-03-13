import { Router } from "express"
import routesProducts from "./product.js"

const router = Router();


router.get("/", function (req, res) {
    res.send("Home")
});


router.use("/products", routesProducts);


export default router