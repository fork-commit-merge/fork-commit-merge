# Vyper - Easy

storedString: public(String[100])

@external
def __init__():
    self.storedString = ""

    # Function to set a new string
@external
def set(newString: String[100]):
    self.storedString = newString

    # Function to get the current string
@external
@view
def get() -> String[100]:
    return self.storedString

    # Function to delete the string and reset it to an empty string
@external
def delete():
    self.storedString = ""
