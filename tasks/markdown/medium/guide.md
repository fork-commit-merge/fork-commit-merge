> # Markdown guide



## Headings
    # this is an <h1> tag
	## This is an <h2> tag
	###This is an <h3> tag
	####This is an <h4> tag
	#####This is an <h5> tag
	######This is an <h6> tag
			   
			   
## Lists
#### <font color="Green">Ordered Lists</font>
> Ordered (numbered) lists use regular numbers, followed by periods, as list markers:
			
	1.Fork
	2.Commit
	3.Merge



#### <font color="Green">Unordered Lists</font>
> Unordered (bulleted) lists use asterisks, pluses, and hyphens (`*`, `+`, and `-`) as list markers. These three markers are interchangeable.

	+Fork
	+Commit
	+Merge
#### <font color="Blue">Output</font>

+ Fork
+ Commit
+  Merge



#### <font color="Green"> Nested Lists </font>
>In nested lists, you can create a hierarchy of items. Each main list item is marked with a hyphen (`-`) and may have sub-lists that use the same marker for nesting. The sub-lists can be further indented to represent multiple levels of hierarchy, making it easy to organize and structure information in a nested fashion.	

		
```
- Asia
  1. India
     - Delhi
  2. Japan
  3. China
- Africa
  1. Kenya
     - Nairobi
     - Mombasa
  2. Morocco
     - Rabat
  3. Mali
     - Bamako
     - Timbuktu

```
#### <font color="Blue">Output</font>
- Asia
  1. India
     - Delhi
  2. Japan
  3. China
- Africa
  1. Kenya
     - Nairobi
     - Mombasa
  2. Morocco
     - Rabat
  3. Mali
     - Bamako
     - Timbuktu

## Links

#### <font color="Green"> Inline Links </font>
>-   Use square brackets  `[]`  for the link text and parentheses  `()`  for the URL
```
[Visit GitHub](https://github.com/nikohoffren)
```
>#### <font color="Blue">Output</font>
>[Visit GitHub](https://github.com/nikohoffren)



#### <font color="Green"> Reference Links </font>

>Define the link reference at the bottom of the document using square brackets `[]`, followed by a colon `:`, and then specify the URL. In the text, use the reference link in square brackets.


```
Kanye [West][1] created [Graduation][2]
[1]: https://en.wikipedia.org/wiki/Kanye_West
[2]: https://en.wikipedia.org/wiki/Graduation_(album)
```


>#### <font color="Blue">Output</font>
Kanye [West][1] created [Graduation][2]
>[1]: https://en.wikipedia.org/wiki/Kanye_West
>[2]: https://en.wikipedia.org/wiki/Graduation_(album)

#### <font color="Green"> Auto Links </font>

```
URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).
```
#### <font color="Blue">Output</font>
URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).


## Images

`![Alt Text](https://i.imgur.com/3fFxyyt.png)`


#### <font color="Blue">Output</font>
![Alt Text](https://i.imgur.com/3fFxyyt.png)




## Code and Syntax Highlighting

	Indenting by 4 spaces will turn an entire paragraph into a code block.
	


#### <font color="Green"> Inline Links </font>

>	Inline `code` has `back-ticks around` it.

Inline `code` has `back-ticks around` it.


#### <font color="Green"> Syntax Highlighting </font>
			```javascript
	var s = "JavaScript syntax highlighting";
	alert(s);
```
 ```python
s = "Python syntax highlighting"
print s
```
 
```
No language indicated, so no syntax highlighting. 
```

#### <font color="Blue">Output</font>

```javascript
var s = "Fork-commit-merge";
alert(s);
```
 
```python
s = "Fork-commit-merge"
print s
```
 
```
No language was indicated, so no syntax highlighting
```


## Tables

>Tables in Markdown allow you to present structured data with columns and rows. You can create tables using simple syntax that includes pipes (`|`) to separate columns and hyphens (`-`) to define headers.
>Colons can be used to align columns.
>- There must be at least 3 dashes separating each header cell.
>- The outer pipes (|) are optional
>- You can also use inline Markdown.
```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

#### <font color="Blue">Output</font>


| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


>You can use formatting within the table


	| Markdown | Less  | Pretty |
	| -------   | ----- | ------- |
	| *fork*     | `commit` | **merge** |
	| 1             | 2           | 3 |

#### <font color="Blue">Output</font>

| Markdown | Less  | Pretty |
| -------   | ----- | ------- |
| *fork*     | `commit` | **merge** |


## Emphasis
>Emphasis in Markdown allows you to highlight and add significance to certain parts of your text. It can be achieved through italics, bold, or a combination of both.
>
```
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

#### <font color="Blue">Output</font>

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~


## Horizontal Ruling	
	---
	Hyphens
	***
	Asterisks
	___
	Underscores


#### <font color="Blue">Output</font>


---

Hyphens

***

Asterisks

___

Underscores


