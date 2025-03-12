import express from "express";
import path from 'path'
import routes from "./router/todo_router"

const app = express()
const PORT = 3000

app.set('views',path.join(__dirname,'view'))
app.set("view engine", "ejs")

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))


app.use('/',routes)

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
})