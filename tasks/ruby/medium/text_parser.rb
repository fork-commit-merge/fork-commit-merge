# Ruby - Medium

# TODO: Implement the text parser requested in the issue
# text_parser.rb

def analyze_text(file_path)
    lines = File.readlines(file_path)
    total_lines = lines.length
    total_words = lines.join(' ').split.length
    total_characters = lines.join.length
  
    puts "Total lines: #{total_lines}"
    puts "Total words: #{total_words}"
    puts "Total characters: #{total_characters}"
  end
  
  def most_frequent_words(file_path)
    words = File.read(file_path).downcase.scan(/\w+/)
    word_counts = Hash.new(0)
  
    words.each { |word| word_counts[word] += 1 }
  
    sorted_word_counts = word_counts.sort_by { |word, count| -count }
    top_five_words = sorted_word_counts.take(5).to_h
  
    puts "5 Most Frequent Words: #{top_five_words}"
  end
  
  def longest_lines(file_path)
    lines = File.readlines(file_path)
    sorted_lines = lines.sort_by { |line| -line.length }
    longest_three_lines = sorted_lines.take(3)
  
    puts "3 Longest Lines:"
    longest_three_lines.each { |line| puts line.strip }
  end

  def handle_file_error(file_path)
    puts "Error: Unable to read the file #{file_path}"
  end
  
  if ARGV.length != 1
    puts "Usage: ruby text_parser.rb <file_path>"
  else
    file_path = ARGV[0]
  
    begin
      analyze_text(file_path)
      most_frequent_words(file_path)
      longest_lines(file_path)
    rescue Errno::ENOENT, Errno::EACCES
      handle_file_error(file_path)
    end
  end
  
