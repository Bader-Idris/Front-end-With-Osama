const statusCode = require('http-status-codes');
const express = require('express')
const path = require('path');
const parentDir = path.dirname(__dirname);

const getUsers = (req, res) => {//statusCode.OK
  res.status(200).sendFile(parentDir + '/public/index.html',
    { headers: { 'Content-Type': 'text/html' } });
}

module.exports = {
  getUsers
}