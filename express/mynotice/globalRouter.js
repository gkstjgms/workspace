import express from "express";
const globalRouter = express();

globalRouter.get('/', (req, res) => {
    res.send("Welcome to SH's notice! - Router");
});

export default globalRouter;