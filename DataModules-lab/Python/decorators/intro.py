# decorator_demo.py
# DECORATORS: A powerful tool for modifying or extending the behaviour
# of functions or methods WITHOUT changing their source code.


# 1. DEFINING A DECORATOR
# A decorator function should take another function as an argument.
def my_decorator(func):
    """
    This is the decorator. It receives the function to be decorated.
    """
    # It should have a wrapper function (inner function).
    def wrapper():
        """
        This wrapper adds extra behaviour before/after calling the
        original function.
        """
        print(">>> Extra behaviour: BEFORE the function runs.")
        # This wrapper must call the passed function.
        func()  # <-- Here we call the original function.
        print(">>> Extra behaviour: AFTER the function runs.")
    # The decorator returns the wrapper (which replaces the original).
    return wrapper

# -------------------------------------------------------------------
# 2. USING A DECORATOR
# To use a decorator, place @<decorator_name> on the line immediately
# BEFORE the function definition.

@my_decorator
def say_hello():
    """A simple function that prints a greeting."""
    print("Hello, world!")

# Now when we call say_hello, the wrapper runs instead.
print("Calling the decorated function:\n")
say_hello()

# Output:
# >>> Extra behaviour: BEFORE the function runs.
# Hello, world!
# >>> Extra behaviour: AFTER the function runs.


# 3. HANDLING FUNCTIONS WITH ARGUMENTS
# To make a decorator work with any function (with any number of
# arguments), we use *args and **kwargs in the wrapper.

def flexible_decorator(func):
    def wrapper(*args, **kwargs):
        print(">>> Before the function (with args).")
        result = func(*args, **kwargs)   # call with all arguments
        print(">>> After the function.")
        return result
    return wrapper

@flexible_decorator
def add(a, b):
    return a + b

@flexible_decorator
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print("\n--- Using a flexible decorator ---")
print("add(3, 5) =>", add(3, 5))
print("greet('Alice') =>", greet("Alice"))
print("greet('Bob', 'Hi') =>", greet("Bob", "Hi"))


# 4. (Optional) PRESERVING METADATA

# Use functools.wraps to keep the original function's name and docstring.

from functools import wraps

def better_decorator(func):
    @wraps(func)   # this copies metadata from func to wrapper
    def wrapper(*args, **kwargs):
        print(">>> Wrapped with metadata preserved.")
        return func(*args, **kwargs)
    return wrapper

@better_decorator
def multiply(x, y):
    """Multiplies two numbers."""
    return x * y

print("\n--- Metadata preserved ---")
print("Function name:", multiply.__name__)   # prints 'multiply', not 'wrapper'
print("Docstring:", multiply.__doc__)

# That's it! Decorators let you add logging, timing, access control,
# caching, and much more without touching the original function code.