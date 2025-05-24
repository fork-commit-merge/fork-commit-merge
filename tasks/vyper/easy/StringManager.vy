# @version ^0.4.0
# A simple Vyper contract to set, get, and delete a string.
# Storage: a single string with max length 100

my_string: public(String[100])

@deploy
@payable
def __init__():
    # Initialize with empty string (default)
    self.my_string = ""

@external
def set_string(new_str: String[100]):
    """
    Set the stored string to `new_str`.
    """
    self.my_string = new_str

@external
@view
def get_string() -> String[100]:
    """
    Get the current stored string.
    """
    return self.my_string

@external
def delete_string():
    """
    Delete the string and reset it to an empty string.
    """
    self.my_string = ""