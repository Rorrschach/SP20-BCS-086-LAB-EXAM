const router = require("express").Router();
const Post = require("../models/Posts.js");

router.get("/add-post", function (req, res, next) {
  res.render("main/add-post");
});

router.post("/add-post", function (req, res, next) {
  const post = new Product();

  post.title = req.body.post_title;
  post.body = req.body.post_body;

  Post.save(function (err) {
    if (err) throw err;
    res.redirect("/add-post");
  });
});

router.get("/posts/:page", function (req, res, next) {
  const perPage = 9;
  const page = req.params.page || 1;

  Post.find({})
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec(function (err, posts) {
      Post.count().exec(function (err, count) {
        if (err) return next(err);
        res.render("main/post", {
          posts: posts,
          current: page,
          pages: Math.ceil(count / perPage),
        });
      });
    });
});
router.get("/", function (req, res, next) {
  res.render("index");
});
module.exports = router;
