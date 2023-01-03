const { validationResult } = require("express-validator/check");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "First content",
        imageUrl: "images/jerry.png",
        creator: {
          name: "Shubh",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ message: "Validation failed", errors: errors.array() });
  }
  const title = req.body.title;

  const content = req.body.content;
  //createpost in db
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      _id: new Date().getTime(),
      title: title,
      content: content,
      creator: { name: "Shubham" },
      createdAt: new Date(),
    },
  });
};
