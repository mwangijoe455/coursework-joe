# Example variables
X = 10            # Integer
y = 3.14          # Float
Z = "Hello"       # String
a = True          # Boolean (True/False)
b = [1, 2, 3, 4]  # List (mutable, by value)
C = {1, 2, 3}     # Set
d = (1, 2, 3)     # Tuple (immutable)
e = {"key": "value"}  # Dictionary (like JS object)

# Determining the types
print("X is ", X, "Its type ", type(X))   # <class 'int'>
print(f"Y is {y} its type is {type(y)}")  # <class 'float'>
print(type(Z))   # <class 'str'>
print(type(a))   # <class 'bool'>
print(type(b))   # <class 'list'>
print(type(C))   # <class 'set'>
print(type(d))   # <class 'tuple'>
print(type(e))   # <class 'dict'>