## What to install

* [Oh My Zsh!](https://github.com/robbyrussell/oh-my-zsh)
* [Janus](https://github.com/carlhuda/janus)
* [Janus Pre-requisites](https://github.com/carlhuda/janus)
* MacVim - `brew install macvim`
* Run the steps listed here: https://github.com/b4winckler/macvim/wiki/Troubleshooting#for-zsh-users
* [vim-powerline](https://github.com/Lokaltog/vim-powerline)
* `gem install rcodetools` - This is for using [vim-ruby-xmpfilter](https://github.com/t9md/vim-ruby-xmpfilter)
* `brew install tmux`
* `gem install tmuxinator`
* [tmux-powerline](https://github.com/erikw/tmux-powerline)
    * `git clone https://github.com/erikw/tmux-powerline.git ~/tmux-powerline`
    * Follow other installation instructions
* `brew install reattach-to-user-namespace`

## Commands to execute

1. `ln -s ~/dotfiles/vim/gvimrc.after ~/.gvimrc.after`
2. `ln -s ~/dotfiles/vim/vimrc.before ~/.vimrc.before`
3. `ln -s ~/dotfiles/vim/vimrc.after ~/.vimrc.after`
4. `ln -s ~/dotfiles/zsh/zshrc ~/.zshrc`
5. `ln -s ~/dotfiles/zsh/mstarkman.zsh-theme ls ~/.oh-my-zsh/themes`
6. `ln -s ~/dotfiles/irb/irbrc ~/.irbrc`
7. `ln -s ~/dotfiles/gem/gemrc ~/.gemrc`
7. `ln -s ~/dotfiles/tmux/tmux.conf ~/.tmux.conf`
7. `ln -s ~/dotfiles/tmux/tmux-powerlinerc ~/.tmux-powerlinerc`

## iTerm2 color scheme

[Solarized](https://github.com/altercation/solarized/tree/master/iterm2-colors-solarized)

## Getting VIM to work with RBENV, Ruby and Zsh

[https://github.com/dotphiles/dotzsh#mac-os-x](https://github.com/dotphiles/dotzsh#mac-os-x)
