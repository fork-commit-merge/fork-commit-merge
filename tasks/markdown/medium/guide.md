<!-- Markdown - Medium -->

# Markdown Guide

Markdown is a lightweight markup language that allows you to format plain text documents easily. It's widely used for creating documents, notes, and even web pages. In this guide, we'll cover all the essential aspects of Markdown formatting.

## Headers

Headers are used to create titles and headings in your document. Markdown supports six levels of headers:

# Header 1: This is an h1
## Header 2: This is an h2
### Header 3: This is an h3
#### Header 4: This is an h4
##### Header 5: This is an h5
###### Header 6: This is an h6
...

## Lists

Markdown supports both ordered (numbered) and unordered (bulleted) lists:

Unordered List:
* Item 1
    * nested item 1
* Item 2
* Item 3
Ordered List:
1. Item 1
    1. nested item 1
    1. nested item 2
2. Item 2
3. Item 3
...

## Links

To create a hyperlinks in Markdown we can using inline and reference-style links:

Inline Link:
[Example Website](https://www.example.com/)

Reference-style link:
[1]: https://www.example.com "Example Website"

This is an [example][1] of a reference-style link.

...

## Images

You can embed images in your Markdown document:

This is an image ![alt text](image_url)
...

## Code Blocks

Markdown allows you to include code snippets in your document:

This is a code

```python
def functionname(name):
    print(f"Hello,{name}!")
```
...

## Tables

Create tables in Markdown using pipes and hyphens for headers:

| Header 1 | Header 2 |
| -------- | -------- |
| Row 1    | Data 1   |
| Row 2    | Data 2   |
...
