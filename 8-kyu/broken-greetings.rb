# http://www.codewars.com/kata/50654ddff44f800200000001/train/ruby

class Person
  def initialize(name)
    @name = name
  end

  def greet(other_name)
    "Hi #{other_name}, my name is #{@name}"
  end
end
