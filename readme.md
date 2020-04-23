## What to install

* Install git - `brew install git`
* [Oh My Zsh!](https://github.com/robbyrussell/oh-my-zsh)
* Install [asdf](https://asdf-vm.com/#/core-manage-asdf-vm)
* Install Plug - https://github.com/junegunn/vim-plug#unix
* Install ack - http://betterthangrep.com/ - `brew install ack`
* Install ctags - http://ctags.sourceforge.net/ - `brew install ctags`
* Configure ctags following this: http://tbaggery.com/2011/08/08/effortless-ctags-with-git.html
* Install [JetBrains Mono](https://www.jetbrains.com/lp/mono/) font

## Commands to execute

1. `ln -s ~/dotfiles/vim/gvimrc ~/.gvimrc`
3. `ln -s ~/dotfiles/vim/vimrc ~/.vimrc`
3. `ln -s ~/dotfiles/vim/snippets ~/.vim/snippets`
4. `ln -s ~/dotfiles/zsh/zshrc ~/.zshrc`
4. `ln -s ~/dotfiles/zsh/zshenv ~/.zshenv`
5. `ln -s ~/dotfiles/git/gitignore_global ~/.gitignore_global`
6. `ln -s ~/dotfiles/git/git_template ~/.git_template`
7. `ln -s ~/dotfiles/ctags/ctags ~/.ctags`
8. `ln -s ~/dotfiles/zsh/mstarkman.zsh-theme ~/.oh-my-zsh/themes`
8. `ln -s ~/dotfiles/zsh/shades-of-purple.zsh-theme ~/.oh-my-zsh/themes`
9. `ln -s ~/dotfiles/irb/irbrc ~/.irbrc`
10. `ln -s ~/dotfiles/irb/pryrc ~/.pryrc`
11. `ln -s ~/dotfiles/gem/gemrc ~/.gemrc`
14. `ln -s ~/dotfiles/ack/ackrc ~/.ackrc`
15. `ln -s ~/dotfiles/ruby/spring.rb ~/.spring.rb`
16. `ln -s ~/dotfiles/ruby/default-gems ~/.default-gems`
17. `ln -s ~/dotfiles/asdf/asdfrc ~/.asdfrc`
18. Launch vim and run `:PlugInstall` to load the Plug plugins
19. `git config --global core.excludesfile '~/.gitignore_global'`

## iTerm2 color scheme

[Solarized](https://github.com/altercation/solarized/tree/master/iterm2-colors-solarized)
[Shades of Purple](https://github.com/ahmadawais/Shades-of-Purple-iTerm2)

