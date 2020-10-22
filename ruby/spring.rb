$LOAD_PATH << "#{Gem.dir}/gems/spring-commands-testunit-1.0.1/lib"
#require 'spring-commands-testunit'


Spring.after_fork do
  if ENV['DEBUGGER_STORED_RUBYLIB']
    ENV['DEBUGGER_STORED_RUBYLIB'].split(File::PATH_SEPARATOR).each do |path|
      next unless path =~ /ruby-debug-ide/
      load path + '/ruby-debug-ide/multiprocess/starter.rb'
    end
  end
end
