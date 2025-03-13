import modelProduct from "../models/Product.js";

class controllerProducts {
    //Obtener todos los productos
    static async getProducts (req, res) {
        try {
            const products = await modelProduct.findAll();
            res.send(products).status(200)
        } catch (error) {
            res.send("Error al Obtener los productos").status(500);
            console.log(error)
        }
    }

    //Obtener un solo productos
    static async getProduct (req, res) {
        try {
            const product = await modelProduct.findById(req.params);
            res.send(product).status(200)
        } catch (error) {
            res.send("Error al Obtener el producto").status(500);
            console.log(error)
        }
    }

    //Crear un  producto
    static async createProduct (req, res) {
        try {
            const newProduct = req.body;
            const response = await modelProduct.create(newProduct);
            res.send(response).status(200)
        } catch (error) {
            res.send("Error al Crear el producto").status(500);
            console.log(error)
        }
    }


    //Acyualizar un producto
    static async updateProduct (req, res) {
        try {
            const editProduct = req.body;
            const response = await modelProduct.update(editProduct);
            res.send(response).status(200)
        } catch (error) {
            res.send("Error al Crear el producto").status(500);
            console.log(error)
        }
    }

    //Eliminar un  producto
    static async deleteProduct (req, res) {
        try {
            const response = await modelProduct.delete(req.params);
            res.send(response).status(200)
        } catch (error) {
            res.send("Error al Eliminar el producto").status(500);
            console.log(error)
        }
    }
}


export default controllerProducts;