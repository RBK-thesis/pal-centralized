////// this is just a try for an api
const creatServer = require("http").createServer;
const url = require("url");
const axios = require("axios");
const chalk = require("chalk");
const config = require("./config");

const headers = {
  "Contant-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET"
};

const decodeParams = serarchParams =>
  Array.from(serarchParams.keys()).reduce(
    (acc, key) => ({ ...acc, [key]: serarchParams.get(key) }),
    {}
  );

const server = creatServer((req, res) => {
    const requestURL = url.parse(req.url);
    const decodeParams = decodeParams(new URLSearchParams(requestURL.search));
})
