import express, {Request, Response} from 'express';
import router from './routers/route';
import "dotenv/config";

const app = express()
const port = process.env.PORT;

app.use(express.json());

app.listen(port, () => {
    console.log(`server is running in port : ${port}`)
})

app.use('/app/v1', router);