(ns add-numbers.core)

(defn add-numbers
  "Adds any number of numeric arguments together."
  [& nums]
  (reduce + 0 nums))
