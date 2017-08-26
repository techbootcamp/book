# HTML

## What is a Markup Language?
"HTML" stands for **H**yper**T**ext **M**arkup **L**anguage.

Unlike a scripting or programming language that uses scripts to perform functions, **a markup language uses <*tags*> to identify content.** 

Here is an example of an HTML tag:

```html
<p> I'm a paragraph. </p>
```

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
```html
<html>
…
</html>
```
### Head and Body

#### The <*head*> Tag
Immediately following the opening HTML tag, you'll find the **head** of the document, which is identified by opening and closing head tags. 

The head of an HTML file contains all of the **non-visual elements** that help make the page work.
```html
<html>
 <head>…</head>
</html>
```
#### The <*body*> Tag

The **body** tag follows the head tag.
All visual-structural elements are contained within the body tag. 

Headings, paragraphs, lists, quotes, images, and links are just a few of the elements that can be contained within the body tag.
**Basic HTML Structure:**
```html
<html>
 <head>
 </head>
 <body>
 </body>
</html>
```

### HTML Elements
HTML documents are made up of HTML elements.

An HTML **element** is written using a **start tag** and an **end tag**, with the **content** in between.

HTML documents consist of nested HTML elements. In the example below, the body **element** includes the <*p*> tags, the <*br /*> tag, and the content, "This is a paragraph".
```html
<html>
 <head>
  <title>First Page</title>
 </head>
 <body> 
  <p>This is a paragraph <br /></p>
 </body>
</html>
```
#### The <*title*> Tag
To place a title on the tab describing the web page, add a **<*title*> element** to your head section:
```html
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
### Common elements:
> div, h1, h6, img, input, form, etc. Talk about their use.

### **Headings Are Important**

Headings are defined with the <*h1*> to <*h6*> tags.
<*h1*> defines the most important heading. <*h6*> defines the least important heading.

**Search engines use the headings to index the structure and content of your web pages.**
Users skim your pages by its headings. It is important to use headings to show the document structure.

<*h1*> headings should be used for main headings, followed by <*h2*> headings, then the less important <*h3*>, and so on.

**Note:** Use HTML headings for headings only. Don't use headings to make text **BIG** or **bold.**

### **The lang Attribute**
The spoken language of the document can be declared in the <*html*> tag.

The language is declared with the **lang** attribute.
Declaring a language is important for accessibility applications (screen readers) and search engines:
```html
<!DOCTYPE html>
<html lang="en-US">
<body>
...
</body>
</html> 
```
The first two letters specify the language (en). If there is a dialect, use two more letters (US).

### **The img Attribute**
HTML images are defined with the **<*img*>** tag.
The filename of the source (**src**), and the size of the image (**width** and **height**) are all provided as attributes:
```html
<img src="w3schools.jpg" width="104" height="142"> 
``` 
The image size is specified in pixels: width="104" means 104 screen pixels wide.

### **The div**
The **<*div*>** tag defines a "division," or a section in an HTML document.

[]

## Less Common Tags

### [10 Rare HTML Tags:](https://code.tutsplus.com/articles/10-rare-html-tags-you-really-should-know--net-3908)
1. cite
2. optgroup
3. acronym
4. address
5. delete/insert
6. label
7. fieldset
8. abbr
9. rel
10. wbr

## DOM - Relationship between HTML and Javascript
> Brief discussion on the DOM, how is it created? (parsing of DOM Tree)

### "Document Object Model"

### Inheritance
Inheritance refers to the way properties flow through the page. A child element will usually take on the characteristics of the parent element unless otherwise defined. 

**For example:**
```html
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

## Web Components
> A little history: https://www.upwork.com/hiring/development/web-components/



**Web Components** are the **latest set of standards** currently being added to HTML and the DOM by the **W3C**. Web Components expand the functionality of HTML elements with a set of web platform APIs that support the creation of custom elements. These standards can be categorized into **four main specifications** that can be used independently or together with any JavaScript framework or library compatible with HTML, making it easier to build a website:

### 1. HTML Imports
Imports make it easier to import HTML documents into other documents.
### 2. HTML Templates
Templates allow you to create sections of the DOM within a tag that can remain inert at page load, but be called on later at runtime.
### 3. Shadow DOM
The Shadow DOM provides encapsulation of JavaScript, CSS, and templating so that your web component code remains modular and separated from the rest of the DOM.
### 4. Custom Elements
These are APIs for building your own HTML elements.

The goal of these new features is to simplify web development by providing low-level APIs that allow developers to build complex web applications from custom made elements. Calling upon these new elements will be as simple as invoking a pair of custom HTML tags.

> Browser support

Naturally, that additional functionality means Web Components will only work on modern browsers that support the new standards. See [this chart](https://www.webcomponents.org/) for a list of browsers and which components they support.

## Technical Challenge
>Game Idea Generator:
>
>[- Source code](https://github.com/SarahSexton/GameGen)
>
>[- Demo page](https://sarahsexton.github.io/GameGen/)
>
>[- CodePen](https://codepen.io/anon/pen/oeygXR)
>
Two-part Challenge: 
1. Remove jQuery dependency 
2. Improve Mobile Responsiveness

## Resources
* [10 Less common tags](https://code.tutsplus.com/articles/10-rare-html-tags-you-really-should-know--net-3908)
* [An Introduction to Web Components](https://www.upwork.com/hiring/development/web-components/)
* [Web Components browser support](https://www.webcomponents.org/)
* [W3schools HTML](https://www.w3schools.com/)