# HTML

## What is a Markup Language?
"HTML" stands for **H**yper**T**ext **M**arkup **L**anguage.

Unlike a scripting or programming language that uses scripts to perform functions, **a markup language uses <*tags*> to identify content.** 

Here is an example of an HTML tag:

```<p> I'm a paragraph. </p>```

### The Web Structure

The ability to code using HTML is essential for any web professional. Acquiring this skill should be the starting point for anyone who is learning how to create content for the web. 

### Modern Web Design
- **HTML**: Structure
- **CSS**: Presentation
- **JavaScript**: Behavior
- **PHP or similar**: Backend
- **CMS**: Content Management

## Anatomy of an HTML document

### The <*html*> Tag
Although various versions have been released over the years, HTML basics remain the same. 

The structure of an HTML document has been compared with that of a sandwich. As a sandwich has two slices of bread, the HTML document has opening and closing HTML tags. 

These tags, like the bread in a sandwich, surround everything else:
```
<html>
…
</html>
```
### Head and Body

#### The <*head*> Tag
Immediately following the opening HTML tag, you'll find the **head** of the document, which is identified by opening and closing head tags. 

The head of an HTML file contains all of the **non-visual elements** that help make the page work.
```
<html>
 <head>…</head>
</html>
```
#### The <*body*> Tag

The **body** tag follows the head tag.
All visual-structural elements are contained within the body tag. 

Headings, paragraphs, lists, quotes, images, and links are just a few of the elements that can be contained within the body tag.
**Basic HTML Structure:**
```
<html>
 <head>
 </head>
 <body>
 </body>
</html>
```
### What is in an element? and their purpose
#### HTML Elements
HTML documents are made up of HTML elements.

An HTML **element** is written using a **start tag** and an **end tag**, with the **content** in between.

HTML documents consist of nested HTML elements. In the example below, the body **element** includes the <*p*> tags, the <*br /*> tag, and the content, "This is a paragraph".
```
<html>
 <head>
  <title>first page</title>
 </head>
 <body> 
  <p>This is a paragraph <br /></p>
 </body>
</html>
```
#### The <*title*> Tag
To place a title on the tab describing the web page, add a **<*title*> element** to your head section:
```
<html>
 <head>
  <title>First Page</title>
 </head>
 <body>
  This is a line of text. 
 </body>
</html>
```
The title element is important because it describes the page and is used by search engines.

## Common Element Attributes
> What is the difference between id and class?

An "Id" is unique, and you can use only one with that name on your page. A "class" can be assigned to different elements, and you can have two or more elements with the same class on your page. "Id" is more specific when you style elements because of its priority. If you use same styles (font-size, for example) to the same element with id (20px) and class (10px), the font-size of id will be used.

(If you validate your HTML code, this mistake will be shown. It works, but it is not correct! This is obvious when you use JavaScript or jQuery. You won't be able to select elements and make something with them if two or more elements have the same Ids.)

## Elements Tags
### Common ones
> div, h1, h2, img, input, form, etc. Talk about their use.

### Less Common ones
> figure, address, hr, etc. Talk about why they exist.

## DOM - Relationship between HTML and Javascript
> Brief discussion on the DOM, how is it created? (parsing of DOM Tree)

### "Document Object Model"

### Inheritance
Inheritance refers to the way properties flow through the page. A child element will usually take on the characteristics of the parent element unless otherwise defined. 

**For example:**
```
<html>
 <head>
  <style>
  body {
   color: green;
   font-family: Arial;
  }
  </style>
 </head>
 <body> 
  <p>
   This is a text inside the paragraph. 
  </p>
 </body>
</html>
```
Since the paragraph tag (child element) is inside the body tag (parent element), it takes on any styles assigned to the body tag.

## Web Component
> a little history

> Browser support

### Templates

### Custom Elements

### Shadow DOM

### Imports

## Technical Challenge
> Link to challenge after you give your presentation (Maybe ask people to create a web component, give them the requirement of how it should look and behave) OR (maybe provide them with a scenario and ask them to create a site that is accessibly by a screenreader) OR (create an [AMP](https://www.ampproject.org/) site.)

## Resources
* [less common tags](https://code.tutsplus.com/articles/10-rare-html-tags-you-really-should-know--net-3908)