# Vyper - Easy
# A simple contract to set, get, and delete a string

stored_string: public(String[100])

@external
def set_string(new_string: String[100]):
    """
    Set a new string value.
    """
    self.stored_string = new_string


@view
@external
def get_string() -> String[100]:
    """
    Get the currently stored string.
    """
    return self.stored_string


@external
def delete_string():
    """
    Delete the stored string (reset to empty).
    """
    self.stored_string = ""
