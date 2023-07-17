const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../db/db');

function createUser() {
  return `
  CREATE TABLE user(
    user_uid UUID NOT NULL PRIMARY KEY,
    f_name VARCHAR(50) NOT NULL,
    l_name VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    password VARCHAR(300) NOT NULL
    gender VARCHAR(6) NOT NULL,
    dob DATE NOT NULL,
  )
  `
}
/*
  currentUser has to be a joined table from user
  user = [image: {"png":'someLink',"webp":'someLink'}, "username": "bader"]
  beside currentUser //? comments => should contain user
  make comments for each article =>
  comments = [{id, content, createdAt, score, user, replies}, more of same]
*/
// create table car(
//   car_uid UUID NOT NULL PRIMARY KEY,
//   make VARCHAR(100) NOT NULL,
//   model VARCHAR(100) NOT NULL,
//   price NUMERIC(19, 2) NOT NULL CHECK(price > 0)
// );
// create table person(
//   person_uid UUID NOT NULL PRIMARY KEY,
//   first_name VARCHAR(50) NOT NULL,
//   last_name VARCHAR(50) NOT NULL,
//   email VARCHAR(255),
//   gender VARCHAR(6) NOT NULL,
//   date_of_birth DATE NOT NULL,
//   country_of_birth VARCHAR(50) NOT NULL,
//   car_uid UUID REFERENCES car(car_uid),
//   UNIQUE(car_uid),
//   UNIQUE(email)
// );

module.exports = pool;