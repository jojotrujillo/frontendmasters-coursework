# Python is a dynamic language, not strongly typed so the variable type can change at any time

Since there are no type hints in Python, variable naming is extremely important to describe what type of value the variable is holding.
# naming-conventions
For more info on Python naming conventions, refer to PEP8: https: // peps.python.org/pep-0008/
Brandon Rhoades' talk on Pythonic variable naming conventions: https: // www.youtube.com/watch?v = YklKUuDpX5c


x = 42
x = "Hello"
# The previous is valid Python code
print(f"x was 42 but was reassigned a string: {x}")

# The Null type equivalent in Python is None
y = None
print(f"y is None: {y}, so you won't see this message.")

print(f"type(x): {type(x)}")
print(f"type(y): {type(y)}")
