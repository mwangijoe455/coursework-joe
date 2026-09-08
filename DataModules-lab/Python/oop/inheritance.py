# Inheritance
# Can extend a class using another class.
# -> a class inherits methods and properties of another class.
# -> DRY (Don't Repeat Yourself)

# --- Parent Class (Base Class) ---
class Shape:
    """Base class for all shapes"""
    
    def __init__(self, name):
        self.shape_name = name
    
    def area(self):
        """To be overridden by child classes"""
        raise NotImplementedError("Subclasses must implement area()")
    
    def perimeter(self):
        """To be overridden by child classes"""
        raise NotImplementedError("Subclasses must implement perimeter()")
    
    def get_info(self):
        """Returns basic shape information"""
        return f"Shape: {self.shape_name}"


# --- Child Class (Subclass) ---
class Rectangle(Shape):
    """Rectangle inherits from Shape"""
    
    def __init__(self, length, width):
        super().__init__("Rectangle")  # Call parent constructor
        self.length = length
        self.width = width
    
    def area(self):
        """Calculate area of rectangle"""
        area = self.length * self.width
        print(f"For rectangle of length {self.length} and width {self.width}, area: {area}")
        return area
    
    def perimeter(self):
        """Calculate perimeter of rectangle"""
        perimeter = 2 * (self.length + self.width)
        print(f"For rectangle of length {self.length} and width {self.width}, perimeter: {perimeter}")
        return perimeter


# --- Child Class (Subclass) ---
class Square(Rectangle):
    """Square inherits from Rectangle"""
    
    def __init__(self, side):
        super().__init__(side, side)  # Call Rectangle constructor
        self.shape_name = "Square"  # Override the shape name
    
    def area(self):
        """Calculate area of square (overrides Rectangle's area)"""
        area = self.length * self.width
        print(f"For square of side {self.length}, area: {area}")
        return area
    
    def perimeter(self):
        """Calculate perimeter of square (overrides Rectangle's perimeter)"""
        perimeter = 4 * self.length
        print(f"For square of side {self.length}, perimeter: {perimeter}")
        return perimeter


# --- Alternative: Triangle Class ---
class Triangle(Shape):
    """Triangle inherits from Shape"""
    
    def __init__(self, side_a, side_b, side_c):
        super().__init__("Triangle")
        self.side_a = side_a
        self.side_b = side_b
        self.side_c = side_c
    
    def area(self):
        """Calculate area using Heron's formula"""
        s = (self.side_a + self.side_b + self.side_c) / 2
        area = (s * (s - self.side_a) * (s - self.side_b) * (s - self.side_c)) ** 0.5
        print(f"For triangle with sides {self.side_a}, {self.side_b}, {self.side_c}, area: {area:.2f}")
        return area
    
    def perimeter(self):
        """Calculate perimeter of triangle"""
        perimeter = self.side_a + self.side_b + self.side_c
        print(f"For triangle with sides {self.side_a}, {self.side_b}, {self.side_c}, perimeter: {perimeter}")
        return perimeter


# --- Example Usage ---
if __name__ == "__main__":
    print("=" * 40)
    print("INHERITANCE DEMO")
    print("=" * 40)
    
    # Create shapes
    r1 = Rectangle(length=20, width=10)
    s1 = Square(side=10)
    t1 = Triangle(side_a=3, side_b=4, side_c=5)
    
    # Use the shapes
    print("\n--- Rectangle ---")
    print(f"Name: {r1.shape_name}")
    print(f"Info: {r1.get_info()}")
    r1.area()
    r1.perimeter()
    
    print("\n--- Square ---")
    print(f"Name: {s1.shape_name}")
    print(f"Info: {s1.get_info()}")
    s1.area()
    s1.perimeter()
    
    print("\n--- Triangle ---")
    print(f"Name: {t1.shape_name}")
    print(f"Info: {t1.get_info()}")
    t1.area()
    t1.perimeter()
    
    print("\n" + "=" * 40)
    print("Inheritance in Action:")
    print(f"Is Rectangle a Shape? {isinstance(r1, Shape)}")  # True
    print(f"Is Square a Shape? {isinstance(s1, Shape)}")     # True
    print(f"Is Triangle a Shape? {isinstance(t1, Shape)}")   # True
    print(f"Is Rectangle a Square? {isinstance(r1, Square)}") # False
    print(f"Is Square a Rectangle? {isinstance(s1, Rectangle)}") # True