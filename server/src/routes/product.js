import { Router } from "express"
import controllerProducts from "../controllers/Product.js";


const routesProducts = Router();



routesProducts.get("/", controllerProducts.getProducts);

routesProducts.get("/:id", controllerProducts.getProduct);

routesProducts.post("/create", controllerProducts.createProduct);

routesProducts.post("/update", controllerProducts.updateProduct);

routesProducts.get("/delete/:id", controllerProducts.deleteProduct);






export default routesProducts

