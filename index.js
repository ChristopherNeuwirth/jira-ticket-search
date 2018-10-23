#!/usr/bin/env node --harmony

"use strict";

let path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '.env')
});

const program = require("commander"),
  opn = require("opn"),
  pkg = require("./package.json");

let searchFunction = ticket => {

  if (!process.env.BASEURL) {
    console.error("⚙️  Please specify the base url in .env file.");
    console.log("Rename sample.env to .env and add the base url to your jira.");
    process.exit(1);
  }

  if (ticket.Command) {
    console.log("🔖 Please specify the ticket you want to open.");
    process.exit(1);
  }

  opn(`${process.env.BASEURL}${ticket}`);
  process.exit(0);
};

program.version(pkg.version).action(searchFunction);
program.parse(process.argv);