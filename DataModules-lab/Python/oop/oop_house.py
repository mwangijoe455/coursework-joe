class House:
    bedrooms=3
    bathrooms=2
    floors = 1
    area=120
    owner=""
    location=""
    architect="KIMANI"

# is constructor
def __init__(self,owner,location):
    print("Class house created. initializer called")
    self.owner=owner
    self.location=location

def config(self,owner,location):
    print("Config method has run")
    self.owner=owner
    self.location=location

def print_self(self):
    #this <the object itself>: self<object>
    print(self)
    print(self.__dict__) #dictionary <print all properties>

#When access object properties use dot notation
#Bracket notation is for dictionary

#method . config ->
# print self
#Instance class -> create an object from a class
marline_house=House(owner="Marcine",location="Kikuyu")
# marline_house.__init__()
# marline_house.owner="Marcine"
# marline_house.location="Kikuyu"
#marline_house.config(owner="Marcine",location="Kikuyu")
print("Marines House Owner {marline_house,owner}")
print("Marines Location {marline_house,location}")
print(f"Marines House Bedrooms {marline_house.bedrooms}")
print(f"Marines House Bathrooms {marline_house.bathrooms}")
print(f"Marines House Designers {marline_house.floors}")
print(f"Marines House Bedrooms {marline_house.area}")
print(f"Marines House Designers {marline_house.architect}")
print(f"Marines house {marline_house.self}")
print(f"End of print marines")

daniel_house=House(owner="Daniel","location="Muranga") # init_
# daniel_house.owner="Daniel"
# daniel_house.location="Muranga"
#daniel_house.config(owner="Daniel","location="Muranga")
print(f"Daniels House Owner {daniel_house.owner}")
print(f"Daniels Location {daniel_house.location}")
print(f"Daniels House Bedrooms {daniel_house.bedrooms}")
print(f"Daniels House Bathroom {daniel_house.bathrooms}")
print(f"Daniels House Floors {daniel_house.floors}")
print(f"Daniels House Area {daniel_house.area}")
print(f"Daniels House Designer{daniel_house.architect}")
print(f"Printing daniels house")
daniel_house.print_self()
print(f"End of print marines")