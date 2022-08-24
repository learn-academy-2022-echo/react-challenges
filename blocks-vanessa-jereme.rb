# Write a loop that prints the numbers 1 to 20.

# number_printer = 1
#     while number_printer < 21
#         p number_printer
#         number_printer = number_printer+1
#     end

# Write a loop that prints the numbers 1 to 20 using a different approach than previously used.

# empty_array = []

# also_number_printer = 1
#     while also_number_printer < 21
#         empty_array << also_number_printer
#         also_number_printer = also_number_printer + 1
#     end

# p empty_array

# Write a loop that prints only even numbers from 20 to 0.
# array = []

def only_evens range
    range.map do |value|
        if value.even?
           p value
        end
    end
end

only_evens (0..20).reverse_each
# p array

# Create a method that takes in an array of numbers and returns a new array with all the numbers multiplied by 5.

nums_array = [1, 2, 3, 4, 5, 6]

mult_five = nums_array.map do |number|
    number * 5
end

p mult_five

# Create a method that takes in an array of lowercase words and capitalizes all of the words, permanently modifying the original array.

word_array = ["banana", "apple", "peach", "nectarine"]

capitalize = word_array.map do |word|
    word.capitalize!
end

p capitalize

# Create a method that takes in an array of numbers and returns the largest number in the array.

def largest_num value
    value.max()
end

p largest_num(nums_array)

# Create a method that takes in an array of numbers and returns the smallest number in the array.

def smallest_num value
    value.min()
end

p smallest_num(nums_array)

# Create a method that takes in an array of numbers and returns only the odd numbers sorted from least to greatest.



# Create a method that takes in an array of strings and returns all the strings in reverse casing. All uppercased letters should be returned lowercased and all lowercased letters should be returned uppercased.
# Create a method that takes in an array of words and returns all the words that start with a particular letter. Ex) Given the array ['Apple', 'Avocado', 'Banana', 'Mango'] and the letter 'a' the method should return ['Apple', 'Avocado']. With the same method, given the letter 'm' should return ['Mango'].
# FIZZBUZZ
# Write a method that prints the numbers from 1 to 100. For multiples of three print Fizz instead of the number, for multiples of five print Buzz instead of the number, for numbers that are multiples of both three and five print FizzBuzz, for all other numbers print the number.