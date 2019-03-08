import express from 'express';
import mangoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import server from "./graphql/schema";

const mongoose = mangoose;
mongoose.connect("mongodb://localhost:27017/ngshop", { useNewUrlParser: true });

const app = express();
server.applyMiddleware({ app });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});
