import sqlite3 from "sqlite3"

const pathDb = "src/DB/inventary.db"


const db = new sqlite3.Database(pathDb);


console.log("DB Sqlite3 connect");


export default db