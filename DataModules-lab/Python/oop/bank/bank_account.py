# ================================================================
# BankAccount - Object-Oriented Programming Example
# ================================================================

"""
OOP Principles Applied:
1. Encapsulation: Data (balance, name, account_no) is kept inside the class
   and accessed via methods (getters/setters).
2. Abstraction: Complex logic (deposit validation, withdrawal checks) is hidden
   inside methods; the user just calls deposit(amount).
3. Inheritance (future): This class can be extended to SavingsAccount, etc.
4. Polymorphism (future): Could override methods to have different behaviors.
"""

# Features to implement:
# - Create account (done via __init__)
# - Deposit money
# - Withdraw money
# - Check account balance
# - Show full account details


class BankAccount:
    """
    A simple bank account class that supports deposits, withdrawals,
    balance inquiry, and displaying account details.
    """

    def __init__(self, name, balance, account_no):
        """
        Constructor (initializer) - called when a new object is created.
        Sets up the initial state of the account.

        Parameters:
        - name (str): Account holder's full name
        - balance (float): Initial balance (should be >= 0)
        - account_no (str): Unique account identifier
        """
        self.name = name
        self.balance = balance
        self.account_no = account_no
        # Note: In a real system, you'd validate that balance >= 0
        # and account_no is unique.

    # ---------- Getter Methods ----------
    def get_balance(self):
        """
        Getter for the balance.
        This provides read-only access to the balance without exposing
        the internal variable directly.
        Returns:
            float: The current balance.
        """
        return self.balance

    # ---------- Setter / Action Methods ----------
    def deposit(self, amount):
        """
        Adds the specified amount to the account balance.
        Validates that the amount is positive.

        Parameters:
            amount (float): The amount to deposit.
        """
        if amount > 0:
            self.balance += amount
            print(f"Deposited ${amount:.2f}. New balance: ${self.balance:.2f}")
        else:
            print("Error: Deposit amount must be positive.")

    def withdrawal(self, amount):
        """
        Withdraws the specified amount from the account balance.
        Checks that:
        1. The amount is positive.
        2. There are sufficient funds.

        Parameters:
            amount (float): The amount to withdraw.
        """
        if amount > 0:
            if amount <= self.balance:
                self.balance -= amount
                print(f"Withdrew ${amount:.2f}. New balance: ${self.balance:.2f}")
            else:
                print("Error: Insufficient funds.")
        else:
            print("Error: Withdrawal amount must be positive.")

    def show_account_details(self):
        """
        Displays all account details in a readable format.
        This is a convenience method that prints the account information.
        """
        print("______" * 3)          # Separator for readability
        print("ACCOUNT DETAILS")
        print(f"Account Holder:  {self.name}")
        print(f"Account Number:  {self.account_no}")
        print(f"Current Balance: ${self.balance:.2f}")
        print("______" * 3)


# ================================================================
# Example usage (if this script is run directly)
# ================================================================

if __name__ == "__main__":
    # Create two sample accounts
    account1 = BankAccount("Alice Muthoni", 1500.00, "ACC-1001")
    account2 = BankAccount("Bob Kamau", 500.00, "ACC-1002")

    # Show initial details
    print("\n=== Initial Accounts ===")
    account1.show_account_details()
    account2.show_account_details()

    # Perform transactions
    print("\n=== Transactions ===")
    account1.deposit(250.00)        # Deposit
    account1.withdrawal(100.00)     # Withdrawal
    account1.withdrawal(2000.00)    # Should fail (insufficient funds)

    # Check balance using getter
    print(f"\nBalance from getter: ${account1.get_balance():.2f}")

    # Show updated details
    print("\n=== Updated Account ===")
    account1.show_account_details()

    # Demonstrate encapsulation: Direct access is possible but discouraged.
    # The balance can still be changed directly (Python doesn't enforce privacy),
    # but using methods is the OOP way to ensure validation and consistency.
    # Example: account1.balance = 9999  # Would bypass deposit/withdrawal logic.