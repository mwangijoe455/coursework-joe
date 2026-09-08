# bank.py

# Abstractions.
# Bank Class →
# deposits, withdrawal,
# show account.
# getter and setter. →
# → easy to scale function <understanding>

# Features:
# - Login account
# - Create account
# - Deposit
# - Withdrawal
# - Account balance


class BankAccount:
    def __init__(self, name, balance, account_no):
        self.name = name
        self._balance = balance
        self.account_no = account_no

    # Getter - data i read
    @property
    def balance(self):
        print("Somebody tried to read John's balance")
        return self._balance

    # Setter - to control updates
    @balance.setter
    def balance(self, value):
        if not isinstance(value, (int, float)):
            print("Ensure you pass a number for new balance")
            return
        if value < 0:
            print("Ensure new balance must not be less than 0")
            return
        self._balance = value

    # Deposit method
    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            print(f"Deposited ${amount}. New balance: ${self._balance}")
        else:
            print("Deposit amount must be positive.")

    # Withdrawal method
    def withdrawal(self, amount):
        if amount > 0:
            if amount <= self._balance:
                self._balance -= amount
                print(f"Withdrew ${amount}. New balance: ${self._balance}")
            else:
                print("Insufficient funds.")
        else:
            print("Withdrawal amount must be positive.")

    def show_account_details(self):
        print(f"Owner {self.name}")
        print(f"Balance {self.balance}")
        print(f"Account No {self.account_no}")


# Create John's account
john = BankAccount(name="John Mwangi", balance=0, account_no="223344223")

# Print John's balance (will trigger the getter message)
print("John balance ", john.balance)

# Show full account details
john.show_account_details()

# Demonstrating the setter
john.balance = 1000
print(f"After setting balance: ${john.balance}")

# Trying to set invalid balance
john.balance = -500  # Will trigger the error message
john.balance = "not a number"  # Will trigger the type error message

# Inheritance (future feature)
# class SavingsAccount(BankAccount):
#     pass