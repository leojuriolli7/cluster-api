const { GraphQLString } = require("graphql");
const { User, Post } = require("../models");
const { createJWT } = require("../util/auth");
const { PostType } = require("./types");

const register = {
  type: GraphQLString,
  description: "Register a new user and returns a token",
  args: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString },
  },
  async resolve(_, args) {
    const { username, email, password, displayName } = args;

    const user = new User({
      username,
      email,
      password,
      displayName,
    });

    await user.save();

    const token = createJWT({
      _id: user._id,
      username: user.username,
      email: user.email,
    });

    return token;
  },
};

const login = {
  type: GraphQLString,
  description: "Login a user and return a token",
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(_, args) {
    const user = await User.findOne({ email: args.email }).select("+password");

    console.log(user);

    if (!user || args.password !== user.password)
      throw new Error("Invalid Credentials");

    const token = createJWT({
      _id: user._id,
      username: user.username,
      email: user.email,
    });

    return token;
  },
};

const createPost = {
  type: PostType,
  description: "Create a new post",
  args: {
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  },
  async resolve(_, args) {
    const post = new Post({
      title: args.title,
      body: args.body,
      authorId: "62d73ebf6f2b3fa4a6e9b541",
    });

    return post;
  },
};

module.exports = {
  register,
  login,
  createPost,
};
