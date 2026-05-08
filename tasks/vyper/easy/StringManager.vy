# Vyper - Easy

@external
def get_reverse() -> String[100]:
    s: String[100] = "hello"
    result: String[100] = ""
    for i in range(10):
        result = concat(slice(s, i, 1), result)
    return result
