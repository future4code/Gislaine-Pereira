import dotenv from "dotenv";
import { AddressInfo } from 'net';
import express from "express";
import { userRouter } from './routes/userRouter';
import { bandaRouter } from './routes/bandaRouter';
import { showRouter } from './routes/showrouter';
import cors from "cors";

if(process.env.NODE_ENV !== "serverless"){
    dotenv.config();
}
    
const app = express();
app.use(cors({
    origin:true
}))
app.use(express.json());

app.use("/user", userRouter);

app.use("/banda", bandaRouter);

app.use("/show", showRouter);

export default app;

if (process.env.NODE_ENV !== "serverless") {
    const server = app.listen(3000, () =>{
        if(server){
            const adress = server.address() as AddressInfo;
            console.log(`Servidor rodando em http://localhost:${adress.port}`);
        }else{
            console.error(`Falha ao rodar o servidor.`)
        }
    })
}
