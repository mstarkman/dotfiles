# support Compose v2
(( ${+commands[mutagen-compose]} )) && mccmd='mutagen-compose'

alias mco="$mccmd"
alias mcb="$mccmd build"
alias mce="$mccmd exec"
alias mcps="$mccmd ps"
alias mcrestart="$mccmd restart"
alias mcrm="$mccmd rm"
alias mcr="$mccmd run"
alias mcstop="$mccmd stop"
alias mcup="$mccmd up"
alias mcupb="$mccmd up --build"
alias mcupd="$mccmd up -d"
alias mcdn="$mccmd down"
alias mcl="$mccmd logs"
alias mclf="$mccmd logs -f"
alias mcpull="$mccmd pull"
alias mcstart="$mccmd start"
alias mck="$mccmd kill"

unset mccmd
