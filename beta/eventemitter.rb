class EventEmitter
  def initialize
    @events = Hash.new { |hash, key| hash[key] = [] }
  end

  def on event, &block
    @events[event] << block
  end

  def trigger event
    @events[event].each { |value| value.call }
  end
end
