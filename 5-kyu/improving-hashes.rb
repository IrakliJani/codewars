# http://www.codewars.com/kata/52c974a26e511108a70001cf/train/ruby

class Hash
  def method_missing(m, *args, &block)
    self[m] || self[m.to_s] || raise
  end
end
