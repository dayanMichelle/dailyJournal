//jshint esversion:6

let espacio = '...'

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require('lodash');
const { default: mongoose } = require("mongoose");

const homeStartingContent = "Hello and welcome to this space where you can let your imagination run wild, tell about your day and experiences or let off steam 📑.This place is yours, and I would like to tell you why you should write daily. 🌈\"It helps us recognize our emotions. It improves our ability to understand what we feel, which is known as emotional intelligence. We relieve worries or obsessive thoughts by relieving anxiety and stress symptoms. We learn to see problems from other perspectives\"✨ Try it!.";
const aboutContent = "Hi, I'm Dayan and I'm the developer of this website 💫. I love creating new things and not only in programming, that's why I bring my creativity to music playing the violin or art with landscape painting 🎨. I also love helping people get motivated to code and that's why I created my channel to share my experience and motivate us 💻!I hope you get to know me a little more now. 🌈";
const contactContent = "Well, if you are interested in contacting or knowing a little more about my work 💜, I leave you my social networks. I really hope to see you there! 👀";

const app = express();

//Conexion a la base de datos
mongoose.connect('mongodb://localhost:27017/blog')

const postSchema = {
  title: String,
  post: String
}
const Post = mongoose.model('post', postSchema)

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
  Post.find({}, (err, results) => {
    if (results.length >= 1) {
      res.render('home', { tetx1: homeStartingContent, posts: results, espacio: espacio })
    }
  })

})

app.get('/about', (req, res) => {
  res.render('about', { tetx1: aboutContent })
})
app.get('/contact', (req, res) => {
  res.render('contact', { tetx1: contactContent })
})

app.get('/compose', (req, res) => {

  res.render('compose', { tetx1: contactContent })
})

app.post('/compose', (req, res) => {
  const post = new Post({
    title: req.body.postTitle,
    post: req.body.postBody
  })

  Post.insertMany(post, (err) => {
    if (!e) {
      res.redirect('/')
    }
  })

})

app.get('/posts/:postId', (req, res) => {
 
})










app.listen(3000, function () {
  console.log("Server started on port 3000");
});
