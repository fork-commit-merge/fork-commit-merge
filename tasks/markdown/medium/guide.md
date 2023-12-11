<!-- Markdown - Medium -->

# Markdown Guide

## Headers

Markdown uses # (hash symbols) to create headers. The number of **#** symbols used determines the level of the header. There are six levels of headers, from **#** for the largest header to **######** for the smallest header. Here's an example:

```
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
```
The more # symbols we use, the smaller the header becomes. There should always be a space between the **#** symbol and the header text.

## Lists

Lists in Markdown is used to create organized and structured content by presenting information in an itemized format. Markdown supports both ordered lists and unordered lists.

### Unordered Lists
Unordered lists are created using asterisks *, plus +, or hyphens - followed by a space.

```
* Item 1
* Item 2
* Item 3
```

### Ordered Lists
Ordered lists are created using numbers followed by a period and a space.
```
1. First item
2. Second item
3. Third item
```

### Nested Lists
Nested lists are created in Markdown by indenting the items using spaces or tabs.

```
* Main item
  * Subitem 1
  * Subitem 2
    * Sub-subitem
* Another main item

```

### Task Lists (GitHub Flavored Markdown)

GitHub Flavored Markdown supports task lists, allowing one to create lists with checkboxes.

```
- [x] Task 1
- [ ] Task 2
- [ ] Task 3
```

## Links
Links in Markdown is used to create clickable references to web pages, other sections within the same document, or even email addresses.

### Inline Links
Inline links are created using square brackets [] for the link text followed by parentheses () for the URL.

```
[Link text](URL)
```

### Reference Links

Reference links is used to define a URL separately and then use that reference throughout the document.

```
[Link text][reference]
[reference]: URL
```
### Inline URLs

An URL can also be directly embedded into the Markdown without any link text, which will display the URL as the link.

```
<URL>
```

### Links with Titles
A Title attribute to a link can be added, which displays a tooltip when the user hovers over the link. Titles are added using quotes after the URL, preceded by a space.

```
[Link text](URL "Title")
```

### Email Links

Markdown also supports creating email links using the **mailto: protocol**.

```
[email address](mailto:email@example.com)

```

## Images

Markdown supports embedding images in the document, enhancing the visual presentation of the content.

### Inline Images

Inline images are inserted using an exclamation mark !, followed by square brackets [] for alternative text, and parentheses () containing the path or URL of the image.

```
![Alt text](image_path_or_URL)
```
### Images with Titles

Similar to links, a title can be added to an image as a tooltip that appears when the user hovers over it. Titles are added after the image path, preceded by a space and enclosed in quotes.

```
![Alt text](image_path_or_URL "Title")
```

### Local Images

If the image is stored locally within the project or directory, a relative path can be provided to the image file.

```
![Alt text](path_to_image_file)
```

### Resizing Images
Markdown itself doesn't provide a way to directly resize images, but some platforms or Markdown processors support HTML attributes for resizing images.

```
<img src="image_path_or_URL" alt="Alt text" width="300" height="200">

```

## Code Blocks
Code blocks in Markdown allows one to display code snippets or programming-related content in a visually distinct format to the user.

### Inline Code
Inline code is used for short snippets within a sentence or paragraph. It's denoted by wrapping text in backticks (`).

```
Use backticks to highlight `inline code`.

```

### Fenced Code Blocks

Fenced code blocks are used for displaying larger sections of code or multiple lines. They start and end with triple backticks (```) and can specify the programming language for syntax highlighting.

<pre>
```language
// Code goes here
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
</pre>

### Indentation for Inline Code

For inline code within a paragraph, use a single backtick at the beginning and end of the code snippet.

```
Use `single backticks` for inline code.

```

## Tables

Markdown tables consist of columns and rows. Columns are separated by pipes |, and the first row typically contains headers, which are separated by hyphens - to differentiate them from the content.

```
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Content 1| Content 2| Content 3|
| Content 4| Content 5| Content 6|

```
### Aligning Table Columns

Columns can be aligned by using colons **:** within the header separator row.

```
| Left-aligned | Center-aligned | Right-aligned |
| :------------|:--------------:| -------------:|
| Text         |    Text        |        Text   |

```
- Use **:** on the left side for left-aligning content.
- Use **:** on the right side for right-aligning content.
- Use **:** on both sides for center-aligning content.


### Multiline Cells

Markdown supports multiline content within cells by using line breaks with additional pipes | to indicate new lines within the cell.

```
| Column 1 | Column 2                |
| -------- | ----------------------- |
| Line 1   | Line 1<br/>Line 2<br/>Line 3 |

```


