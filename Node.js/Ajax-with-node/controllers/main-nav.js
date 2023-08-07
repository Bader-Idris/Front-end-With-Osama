const express = require('express');
const path = require('path');
const parentDir = path.dirname(__dirname);

const getUserPrompt = (req, res) => {
  res.sendFile(parentDir + '/public/user-prompt.html',
    { headers: { 'Content-Type': 'text/html' } });
}
const postUserPrompt = async (req, res) => {
  const { fname, lname } = await req.body;
  console.log(fname, lname)
  res.send(`Hello ${fname + " " + lname}`);
}
const downloadPage = (req, res) => {
  res.sendFile(parentDir + '/public/download-file.html');
}
const postDownloadPage = async (req, res) => {
  const filePath = parentDir + '/public/2nd-brain.pdf';
  res.download(filePath);
}
const projectsPage = (req, res) => {
  res.status(200).sendFile(parentDir + '/public/projects.html');
}

const getBitoForm =  (req, res) => {
  res.status(200).sendFile(parentDir + '/public/form-by-bito.html');
}

const bitoForm = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  console.log(req.body)
  // try sending it to PG DB
  console.log("Received data:", name, email);

  res.json({ message: "Data received successfully!" });
};

module.exports = {
  getUserPrompt,
  postUserPrompt,
  downloadPage,
  postDownloadPage,
  projectsPage,
  getBitoForm,
  bitoForm
}