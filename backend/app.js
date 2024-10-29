const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const fileUpload = require("express-fileupload");


dotenv.config({ path: './config/config.env' })

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))



app.use(fileUpload({
    useTempFiles: true,
}));

app.use(cors({
    origin: process.env.FRONT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))





const User = require('./routes/UserRoutes')
const Job = require('./routes/JobRoutes')
const Application = require('./routes/ApplicationRoutes')
const Admin = require('./routes/AdminRoutes')
const errorMiddleware = require('./middlewares/error')

app.use("/api/v1", User)
app.use("/api/v1", Job)
app.use("/api/v1", Application)
app.use("/api/v1", Admin)

app.get("/", (req, res) => {
    res.json("I am working")
})

//for any unwanted error
app.use(errorMiddleware);

module.exports = app;