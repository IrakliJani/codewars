next              :: Eq a => a -> [a] -> Maybe a
next _    []       = Nothing
next _    [_]      = Nothing
next item (x:y:xs) = if item == x then Just y else next item xs
