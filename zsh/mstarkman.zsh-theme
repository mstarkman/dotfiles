# Yay! High voltage and arrows!

ZSH_THEME_GIT_PROMPT_PREFIX="%{$reset_color%}%{$fg[green]%}"
ZSH_THEME_GIT_PROMPT_SUFFIX="%{$reset_color%} "
ZSH_THEME_GIT_PROMPT_DIRTY="%{$fg[yellow]%}⚡%{$reset_color%}"
ZSH_THEME_GIT_PROMPT_CLEAN=""

PROMPT='%{$fg[magenta]%}%n%{$reset_color%}%{$fg[cyan]%}@%{$reset_color%}%{$fg[yellow]%}%m%{$reset_color%}%{$fg[blue]%} r$(asdf current ruby | head -n 1 | awk '"'"'{FS=" ";print $2}'"'"')%{$reset_color%}%{$fg[red]%}:%{$reset_color%}%{$fg[blue]%}n$(asdf current nodejs | awk '"'"'{FS=" ";print $2}'"'"')%{$reset_color%}%{$fg[red]%}:%{$reset_color%}%{$fg[cyan]%}%0~%{$reset_color%}%{$fg[red]%}|%{$reset_color%}$(git_prompt_info)
%{$fg[cyan]%}⇒%{$reset_color%}  '
PS1=$PROMPT

