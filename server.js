import express from "express";

const app = express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import morgan from 'morgan'

//db and authenticateUSer
import connectDB from "./db/connect.js";

//Routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'
 
import {dirname} from 'path'
import { fileURLToPath } from "url";
import path from "path";

// Security Packages
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import cookieParser from "cookie-parser";

//middleware
import notFoundMiddleWare from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from './middleware/auth.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

if (process.env.NODE_ENv !== 'production') {
    app.use(morgan('dev'))
}
app.use(express.static(path.resolve(__dirname,'./client/build')))
app.use(express.json())
app.use(cookieParser())
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());


app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to JobHunt Server....' })
})
app.get('/api/v1', (req, res) => {
    res.json({ msg: 'Welcome to API Server....' })
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./client/build','index.html'))
})

app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on PORT ${port}...`)
        });
    } catch (error) {
        console.log(error);

    }
}
start()