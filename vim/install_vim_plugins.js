#!/usr/bin/env node

'use strict';

var fs = require('fs');
var spawn = require('child_process').spawn;

var plugins = [
  'kchmck/vim-coffee-script.git',
  'Lokaltog/vim-powerline.git',
  'tpope/vim-rails.git',
  'bronson/vim-trailing-whitespace.git',
  'mattn/zencoding-vim.git',
  'tpope/vim-surround.git',
  't9md/vim-ruby-xmpfilter.git',
  'vim-ruby/vim-ruby.git',
  'nelstrom/vim-textobj-rubyblock.git',
  'kana/vim-textobj-user.git',
  'tpope/vim-rake.git',
  'tpope/vim-bundler.git',
  'digitaltoad/vim-jade.git',
  'moll/vim-node.git',
];

var logDataBuffer = function(dataBuffer) {
  console.log(dataBuffer.toString());
};

var each = function(arr, callback) {
  for (var i = 0, l = arr.length; i < l; i ++) {
    callback(arr[i]);
  }
};

each(plugins, function(plugin) {
  var pluginName = /\w+\/(.+).git/.exec(plugin)[1];
  var destinationPath = process.env.HOME + "/.janus/" + pluginName;

  fs.exists(destinationPath, function(exists) {
    var cmdArgs, cmd;

    console.log("Processing " + plugin + "...");

    if (exists) {
      cmdArgs = ["--git-dir=" + destinationPath + "/.git", "pull", "origin", "master"];
    }
    else {
      cmdArgs = ["clone", "https://github.com/" + plugin, destinationPath];
    }

    cmd = spawn("git", cmdArgs);

    cmd.stdout.on('data', function(data) {
      console.log("[" + plugin + "] " + data);
    });

    cmd.stderr.on('data', function(data) {
      console.log("[" + plugin + " - error] " + data);
    });
  });
});

