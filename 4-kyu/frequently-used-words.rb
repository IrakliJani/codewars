# http://www.codewars.com/kata/51e056fe544cf36c410000fb/train/ruby

def top_3_words(text)
  text
  .gsub(/[^A-Za-z ']+/, '')
  .split(/\s+/)
  .inject(Hash.new 0) { |v, w| v[w.downcase] += 1; v }
  .sort_by { |w, c| c }
  .reverse
  .map { |v, k| v }
  .reject(&:empty?)
  .select { |e| e =~ /\w/i } 
  .first(3)
end
