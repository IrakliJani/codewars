# http://www.codewars.com/kata/536c738e49aa8b663b000301

def sum *numbers
  numbers
  .select {|n| n.class == Fixnum }
  .inject :+
end
