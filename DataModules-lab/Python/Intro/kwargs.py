# testing kwargs
# List of kwargs
# The list of kwargs
# kwargs = dictionary
# list all the kwargs

def myKwargs(**kwargs):
    print("Kwargs is ", type(kwargs))
    print(kwargs)
    # print("b is", kwargs["b"])

# Scenario a=23,b=30 => {a:23,b:30}
# myKwargs(a=23,b=30,c=40)  # kwargs->{"a":23,"b":30}

# scenario bno 3
# name="Samson" email="Samson@gmail.com"
# myKwargs({"name":"Samson",})  # This would cause an error
myKwargs(name="Samson", email="SamSam.com", dict={"a": "a"})  # Fixed dictionary literal

def area_rectangle(length, width):
    area = length * width
    print(f"For rectangle with length {length} and Width {width} area is {area}")

# option 1: call directly with positional args
area_rectangle(5, 2)          # args

width = 4
length = 39
area_rectangle(width, length) # positional args (order matters)

# option 2: keyword arguments
area_rectangle(width=width, length=length)  # KwARGS

# option 3: pass literal keyword args
area_rectangle(width=10, length=55)         # matches parameter names
area_rectangle(width=10, length=55)         # duplicate call (fine)
# area_rectangle(40)                        # would error – missing width