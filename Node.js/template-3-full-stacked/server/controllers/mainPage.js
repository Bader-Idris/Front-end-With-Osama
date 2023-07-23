const path = require('path');
const parentDir = path.dirname(__dirname);
const grandparentDir = path.dirname(parentDir);
const clientDIR = `${path.resolve(grandparentDir) + '/client'}`;

const { json } = require('express');

const getUsers = (req, res) => {
  res.sendFile(`${clientDIR}/index.html`,
    { headers: { 'Content-Type': 'text/html' } });
};
module.exports = {
  getUsers
}