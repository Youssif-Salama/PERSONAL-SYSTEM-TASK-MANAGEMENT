import express from "express";
import cors from "cors";
import dbConnection from "../connection/db.connection.js";

export function bootstrap() {
    const app = express();
    app.use(express.json());
    app.use(cors())
    const port = 10000;
    dbConnection.then(() => {
        app.use((error, req, res, next) => {
            res.status(error.status || 500).json({ "message": error.message });
        })
        app.listen(port, () => {
            console.log({ dbConnectionMessage: "server is running" });
        })
    }).catch((error) => {
        console.error({ dbConnectionErrorMessage: error });
    })
}
