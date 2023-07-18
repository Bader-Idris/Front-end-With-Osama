const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../db/db');



function createUser() {
  return `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  CREATE TABLE user(
    user_uid UUID NOT NULL PRIMARY KEY,
    f_name VARCHAR(50) NOT NULL,
    l_name VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    password VARCHAR(300) NOT NULL
    gender VARCHAR(6) NOT NULL,
    dob DATE NOT NULL);
  `
}
/*
  currentUser has to be a joined table from user
  user = [image: {"png":'someLink',"webp":'someLink'}, "username": "bader"]
  beside currentUser //? comments => should contain user
  make comments for each article =>
  comments = [{id, content, createdAt, score, user, replies}, more of same]
*/
// sql
// CREATE TABLE users(
//   user_id SERIAL PRIMARY KEY,
//   username VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL,
//   --other user - related columns
// );
//  CREATE TABLE comments(
//   comment_id SERIAL PRIMARY KEY,
//   post_id INT NOT NULL,
//   user_id INT NOT NULL,
//   content TEXT NOT NULL,
//   created_at TIMESTAMP DEFAULT NOW(),
//   FOREIGN KEY(post_id) REFERENCES posts(id),
//   FOREIGN KEY(user_id) REFERENCES users(user_id)
// );
//  CREATE TABLE categories(
//   category_id SERIAL PRIMARY KEY,
//   category_name VARCHAR(255) NOT NULL
// );
//  CREATE TABLE postcategories(
//   post_id INT NOT NULL,
//   category_id INT NOT NULL,
//   FOREIGN KEY(post_id) REFERENCES posts(id),
//   FOREIGN KEY(category_id) REFERENCES categories(category_id)
// );

module.exports = pool;