#!/usr/bin/env node --harmony
'use strict';

const program = require('commander'),
      opn     = require('opn'),
      pkg     = require('./package.json');


let searchFunction = (ticket) => {
  if (ticket.Command) {
    console.log('🔖 Please specify the ticket you want to open.');
    process.exit(1);
  }

  opn(`https://atlassianp01.web.porsche.biz/jira/browse/${ticket}`);
  process.exit(0);
}

program
  .version(pkg.version)
  .action(searchFunction);
program.parse(process.argv);
