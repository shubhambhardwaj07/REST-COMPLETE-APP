exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "first", content: "first content" }],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //createpost in db
  res.status(201).json({
    message: "Post created successfully!",
    post: { id: new Date().getTime(), title: title, content: content },
  });
};
