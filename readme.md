## What to install

* Install git - `brew install git`
* [Oh My Zsh!](https://github.com/robbyrussell/oh-my-zsh)
* Install node.js - `brew install node`
* Install Vundle - https://github.com/gmarik/Vundle.vim#quick-start
* Install ack - http://betterthangrep.com/ - `brew install ack`
* Install ctags - http://ctags.sourceforge.net/ - `brew install ctags`
* (optional) MacVim - `brew install macvim`
* Run the steps listed here: https://github.com/b4winckler/macvim/wiki/Troubleshooting#for-zsh-users
* `gem install rcodetools` - This is for using [vim-ruby-xmpfilter](https://github.com/t9md/vim-ruby-xmpfilter)
* Install the fonts in the `fonts` directory and make sure you terminal window is using them
* (optional) `brew install tmux`
* (optional) `brew install reattach-to-user-namespace`
* Configure ctags following this: http://tbaggery.com/2011/08/08/effortless-ctags-with-git.html

## Commands to execute

1. `ln -s ~/dotfiles/vim/gvimrc ~/.gvimrc`
3. `ln -s ~/dotfiles/vim/vimrc ~/.vimrc`
3. `ln -s ~/dotfiles/vim/snippets ~/.vim/snippets`
4. `ln -s ~/dotfiles/zsh/zshrc ~/.zshrc`
4. `ln -s ~/dotfiles/zsh/zshenv ~/.zshenv`
5. `ln -s ~/dotfiles/git/gitignore_global ~/.gitignore_global`
6. `ln -s ~/dotfiles/git/git_template ~/.git_template`
7. `ln -s ~/dotfiles/ctags/ctags ~/.ctags`
8. `ln -s ~/dotfiles/zsh/mstarkman.zsh-theme ls ~/.oh-my-zsh/themes`
9. `ln -s ~/dotfiles/irb/irbrc ~/.irbrc`
10. `ln -s ~/dotfiles/irb/pryrc ~/.pryrc`
11. `ln -s ~/dotfiles/gem/gemrc ~/.gemrc`
12. `ln -s ~/dotfiles/tmux/tmux.conf ~/.tmux.conf`
13. `ln -s ~/dotfiles/tmux/tmuxline.conf ~/.tmuxline.conf`
14. `ln -s ~/dotfiles/ack/ackrc ~/.ackrc`
15. `ln -s ~/dotfiles/ruby/spring.rb ~/.spring.rb`
16. Launch vim and run `:PluginInstall` to load the vundle plugins

## iTerm2 color scheme

[Solarized](https://github.com/altercation/solarized/tree/master/iterm2-colors-solarized)

## Getting VIM to work with RBENV, Ruby and Zsh

[https://github.com/dotphiles/dotzsh#mac-os-x](https://github.com/dotphiles/dotzsh#mac-os-x)

## Install RBENV

1. https://github.com/rbenv/rbenv
2. https://github.com/rbenv/rbenv-default-gems
3. After installing RBENV, run this to make sure the proper gems get installed
    `ln -s ~/dotfiles/ruby/default-gems ~/.rbenv/default-gems`

