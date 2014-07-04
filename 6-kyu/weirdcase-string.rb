# http://www.codewars.com/kata/52b757663a95b11b3d00062d/train/ruby

def weirdcase string
  string
  .split(' ')
  .map do |word|
    word
    .split('')
    .each_with_index
    .map {|c, i| if i.even? then c.upcase else c.downcase end }
    .join
  end
  .join(' ')
end
