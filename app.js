//jshint esversion:6

posts = []

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require('lodash');

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hi, I'm dayan and I'm the developer of this website 💫. I love creating new things and not only in programming, that's why I bring my creativity to music playing the violin or art with landscape painting 🎨. I also love helping people get motivated to code and that's why I created my channel to share my experience and motivate us 💻!I hope you get to know me a little more now. 🌈";
const contactContent = "Well, if you are interested in contacting or knowing a little more about my work 💜, I leave you my social networks. I really hope to see you there! 👀";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/',(req,res)=>{
  res.render('home',{tetx1:homeStartingContent, posts: posts })
})

app.get('/about',(req,res)=>{
  res.render('about',{tetx1:aboutContent })
})
app.get('/contact',(req,res)=>{
  res.render('contact',{tetx1:contactContent })
})

app.get('/compose',(req,res)=>{

  res.render('compose',{tetx1:contactContent })
})

app.post('/compose',(req,res)=>{
  const post = {
    title : req.body.postTitle,
    body : req.body.postBody
  }
  posts.push(post)
  res.redirect('/')
})

app.get('/posts/:blog',(req,res)=>{
  for(post of posts)
  {
    if(_.kebabCase(req.params.blog) == _.kebabCase(post.title)){
      res.render('post',{title:post.title,body: post.body})
    }
  }
   

})










app.listen(3000, function() {
  console.log("Server started on port 3000");
});
