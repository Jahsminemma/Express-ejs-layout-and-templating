const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();
const port = 4000;

// static folder
app.use(express.static("public"))
app.use("/css", express.static(__dirname + 'public/css'))
app.use("/js", express.static(__dirname + 'public/js'))
app.use("/images", express.static(__dirname + 'public/images'))


//set template engine
app.use(expressLayout)
app.set('layout', './layouts/full-width') 
app.set("view engine", 'ejs')


//navigation
app.get("/" , (req, res)=>{
    res.render('index', {title:"Homepage"})
});

app.get("/about" , (req, res)=>{
    res.render('about', {title:"About page", layout:"./layouts/sidebar.ejs"})
});


app.listen(port, () => console.log(`server is running on port ${port}`))