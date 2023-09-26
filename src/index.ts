import express, {Request, Response} from 'express';
import router from './routers/route';
import connection from './dbConfig'
import "dotenv/config";

const app = express()
const port = process.env.PORT;

app.use(express.json());

connection.once("open", () => {
    try {
        console.log("Database connected")
    } catch (error) {
        console.log("something went wrong")
    }
})

app.listen(port, () => {
    console.log(`server is running in port : ${port}`)
})

app.use('/app/v1', router);