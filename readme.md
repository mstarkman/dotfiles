## What to install

- Install git - `brew install git`
- [Oh My Zsh!](https://github.com/robbyrussell/oh-my-zsh)
- Install [asdf](https://asdf-vm.com/#/core-manage-asdf-vm)
- Install Plug - https://github.com/junegunn/vim-plug#unix
- Install [JetBrains Mono](https://www.jetbrains.com/lp/mono/) font
- Install [The Silver Searcher](https://github.com/ggreer/the_silver_searcher) - `brew install the_silver_searcher`
- Install [fzf](https://github.com/junegunn/fzf#using-homebrew)

## Commands to execute

1. `ln -s ~/dotfiles/vim/gvimrc ~/.gvimrc`
2. `ln -s ~/dotfiles/vim/vimrc ~/.vimrc`
3. `ln -s ~/dotfiles/vim/snippets ~/.vim/snippets`
4. `ln -s ~/dotfiles/zsh/zshrc ~/.zshrc`
5. `ln -s ~/dotfiles/zsh/zshenv ~/.zshenv`
6. `ln -s ~/dotfiles/git/gitignore_global ~/.gitignore_global`
7. `ln -s ~/dotfiles/git/git_template ~/.git_template`
8. `ln -s ~/dotfiles/ctags/ctags ~/.ctags`
9. `ln -s ~/dotfiles/zsh/mstarkman.zsh-theme ~/.oh-my-zsh/themes`
10. `ln -s ~/dotfiles/zsh/custom/mutagen-compose ~/.oh-my-zsh/custom/plugins`
11. `ln -s ~/dotfiles/zsh/shades-of-purple.zsh-theme ~/.oh-my-zsh/themes`
12. `ln -s ~/dotfiles/zsh/starship.toml ~/.config`
13. `ln -s ~/dotfiles/irb/irbrc ~/.irbrc`
14. `ln -s ~/dotfiles/irb/pryrc ~/.pryrc`
15. `ln -s ~/dotfiles/gem/gemrc ~/.gemrc`
16. `ln -s ~/dotfiles/ack/ackrc ~/.ackrc`
17. `ln -s ~/dotfiles/ruby/spring.rb ~/.spring.rb`
17. `ln -s ~/dotfiles/ruby/default-gems ~/.default-gems`
19. `ln -s ~/dotfiles/asdf/asdfrc ~/.asdfrc`
20. Launch vim and run `:PlugInstall` to load the Plug plugins
21. Launch vim and run `:CocInstall coc-solargraph` to add ruby code completion
22. `git config --global core.excludesfile '~/.gitignore_global'`

## iTerm2 color scheme

[Solarized](https://github.com/altercation/solarized/tree/master/iterm2-colors-solarized)
[Shades of Purple](https://github.com/ahmadawais/Shades-of-Purple-iTerm2)
