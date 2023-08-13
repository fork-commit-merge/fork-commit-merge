<!-- Markdown - Medium -->

# Markdown Guide

## Headers
Headers are used to create section titles or headings in your markdown content. They are created using "#" symbols, with the number of "#" symbols indicating the header level. For example:

```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

## Lists

Lists are used to create ordered (numbered) and unordered (bulleted) lists. You can create unordered lists with "-" or "*", and ordered lists with numbers. For example:

```
- Item 1
- Item 2
  - Subitem 1
  - Subitem 2
1. First Item
2. Second Item
```

## Links

Links are used to create clickable hyperlinks in your markdown content. You can create them using square brackets for the link text and parentheses for the URL. For example:

```
[Visit Github](https://github.com/)
```

## Images

Images can be inserted using the same syntax as links, but with an exclamation mark before the square brackets. This includes alternative text for the image in case it cannot be displayed. For example:

```
![Alt Text](image.jpg)
```

## Code Blocks

Code blocks are used to display code or programming-related content. You can create them by wrapping the code with triple backticks (). Optionally, you can specify the programming language for syntax highlighting after the opening backticks. For example:

<pre>
```python
def greet():
    print("Hello, world!")
```
</pre>

## Tables

Tables can be created using pipes "|" to separate columns and hyphens "-" to separate the header row from the content. You can also use colons to control text alignment within columns. For example:

```
| Header 1 | Header 2 |
|----------|----------|
| Content 1| Content 2|