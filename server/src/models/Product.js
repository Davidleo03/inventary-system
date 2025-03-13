import db from "../DB/db.js"

class modelProduct {
    //Obetener todos los producttos
    static findAll () {
        return new Promise(function(resolve, reject) {
            db.all("SELECT * FROM Products", function(err, rows) {
                if(err) return reject(err);
                return resolve(rows)
            })
        })

    }
    
    //Obetener un solo producto
    static findById ({ id }) {
        return new Promise(function(resolve, reject) {
            db.all("SELECT * FROM Products WHERE id = ?",[id], function(err) {
                if(err) return reject(err); 
                if(rows.length == 0) {
                    return reject("No se ha encontrado ningun producto con la id " + id)
                } 
                return resolve(rows[0])
            })
        })

    }

    //Crear un producto
    static create ({ name, stock, pu }) {
        return new Promise(function(resolve, reject) {
            db.run("INSERT INTO Products (name, stock, pu) VALUES(?, ?, ?)",
                [name, stock, pu], 
                function(err) {
                if(err) return reject(err); 
                return resolve("Producto Creado Correctamente")
            })
        })

    }

     //Actualizar un producto
    static update ({id, name, stock, pu }) {
        return new Promise(function(resolve, reject) {
            db.run("UPDATE Products SET name = ?, stock = ?, pu = ? WHERE id = ?",
                [name, stock, pu, id], 
                function(err) {
                if(err) return reject(err); 
                return resolve("Producto Actualizado Correctamente")
            })
        })

    }

     //Eliminar un producto
    static delete ({ id }) {
        return new Promise(function(resolve, reject) {
            db.run("DELETE FROM Products WHERE id = ?",
                [id], 
                function(err) {
                if(err) return reject(err); 
                return resolve("Producto Eliminado Correctamente")
            })
        })

    }
}

export default modelProduct;