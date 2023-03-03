const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()

    function readygo()
    {
      console.log("ready go");
    }
mongoose.connect('mongodb://127.0.0.1:27017/Userdatabase', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

    function readygo()
    {
      console.log("ready go");
    }
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})

    function readygo()
    {
      console.log("ready go");
    } 
app.use('/articles', articleRouter)

app.listen(5000,()=>{
  console.log("server is running");
}
)