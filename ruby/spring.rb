$LOAD_PATH << "#{Gem.dir}/gems/spring-commands-testunit-1.0.1/lib"
require 'spring-commands-testunit'


Spring.after_fork do
  if ENV['DEBUGGER_STORED_RUBYLIB']
    starter = ENV['BUNDLER_ORIG_RUBYOPT'][2..-1]
    load(starter + '.rb')
  end
end
