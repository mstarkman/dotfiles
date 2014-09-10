#!/usr/bin/env node

'use strict';

var fs = require('fs');
var spawn = require('child_process').spawn;

var plugins = [
  'altercation/vim-colors-solarized.git',
  'bling/vim-airline.git',
  'tpope/vim-fugitive.git',
  'airblade/vim-gitgutter.git',
  'scrooloose/syntastic.git',
  'moll/vim-node.git',
  'mileszs/ack.vim.git',
  'edsono/vim-matchit.git',
  'scrooloose/nerdcommenter.git',
  'terryma/vim-multiple-cursors.git',
  'ervandew/supertab.git',
  'tomtom/tlib_vim.git',
  'MarcWeber/vim-addon-mw-utils.git',
  'garbas/vim-snipmate.git',
  'honza/vim-snippets.git',
  'skalnik/vim-vroom.git',
  'kchmck/vim-coffee-script.git',
  'tpope/vim-rails.git',
  't9md/vim-ruby-xmpfilter.git',
  'vim-ruby/vim-ruby.git',
  'nelstrom/vim-textobj-rubyblock.git',
  'kana/vim-textobj-user.git',
  'tpope/vim-rake.git',
  'tpope/vim-bundler.git',
  'tpope/vim-surround.git',
  'kien/ctrlp.vim.git',
  'benmills/vimux.git',
  'edkolev/tmuxline.vim.git',
  'cakebaker/scss-syntax.vim.git',
  'mattn/emmet-vim.git',
  'slim-template/vim-slim'
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
  var destinationPath = process.env.HOME + "/.vim/bundle/" + pluginName;

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

