# CSS
![CSS is awesome](https://laughingsquid.com/wp-content/uploads/css-is-awesome-20090407-142244.jpg)


## What is CSS?
Cascading Style Sheets (CSS) are how you style your HTML for presentation. It's both a language and a set of capabilities that allow you to make things look the way you want them do. While most you can accomplish most web styling techniques directly in JavaScript, CSS is structured in a way that helps isolate themes, styles, and even layout from your JavaScript code (behavior) and HTML document (content). It's structured in a way that allows you to conditionally style the elements in your document in a intuitive and logical way, while providing simple techniques for building styles that can work on multiple pages. 

### CSS Basics

![CSS Overview](/images/css/css-overview.png)

The way CSS works is you use **selectors** to select elements in the DOM and apply **properties**.

Each selector can define multiple properties. Child elements inherit properties from their parents, unless overridden by other styles.

### CSS Examples
To start off, here's a few examples of setting a few properties using differt selectors.

#### Set a property
> Set the width of the `<body>` element to 100%.
> ![CSS Body](/images/css/css-examples-body.png)

#### Element type selector
> Give all images a 2-pixel white border around all image.
>![CSS Img](/images/css/css-examples-img.png)

#### Set multiple properties
> Set the background color and border for a specific element with `id=someElement`
> ![CSS Element](/images/css/css-examples-element.png)

### What are CSS properties
Properties are the idividual styles that you set on elements. This could be basics like size, color, and font, or more advanced like layout, transitions, and animations.

### What are CSS selectors
Selectors are how you reference elements in your document. These can be as specific as an individual **element** referenced by ID, a **class** which can apply to multiple elements, or an element **type** which can apply to all elelents of that type. 

````css 

/* Select by type */
div { color: blue }

/* Select by class */
.someClass { color: blue }

/* Select by ID */
#someElement { color: blue }

````

#### Combining selectors
Selectors can be combined or used in a way to select a specific set of elements. Make all the buttons with the `someClass` class blue 

````css 
button.someClass {
    background-color: blue;
}

````

#### Descendent selectors
Descendent selectors all you to grab all the child elements that match a selection.  This example gives all the images that are descendants of .someClass have a blue border.

````css
.someClass img {
    border: 2px blue solid;
}

````

#### Grouped selectors
There's a nice shortcut to group selectors if you want to apply the same property to them. This example makes all link, div, and span elements have blue text.

````css
a, div, span {
    color: blue;
}
````


### What is a pseudo-class
Pseudo-classes allow you to reference an element while it is in a specific state. For example, this is how you change color when someone hovers or clicks on a button. 

````css
button::hover {
    background-color: grey;
}

button::active {
    background-color: blue; 
}
````


## Where can CSS live?
Styles can live in multiple places, from a seperate .css file, to embedded in the head of an HTML file, to defining the styles inline on HTML elements.

### In a CSS file (.css)
Defining styles in a seperate file is ideal because it improves readiblity and allows styles to be applied to multiple pages. Also, multiple stylesheet files can be applied to a single document.

````html
<!-- default.html -->
<head>
    <link rel="stylesheet" type="text/css" href="default.css">
</head> 
````

````css
/* default.css */
body {
    width: 100%;
}
````

### Embedded in an HTML file
Styles can also be defined in the `<head>` tag at the top of an HTML file. 

````html
<!-- default.html -->
<head>
    <style>
        body {
            width: 100%;
        }
    </style>
</head> 
<body> 
    hello world.
</body>
````

### Inline CSS 
Finally, styles can be set directly on an individual element by using the `style` attribute on it. Properties can be set directly without the selector. 

````html
<body style="width:100%;">hello world.</body> 
````
> Note: Many styles can also be set at runtime from JavaScript. This doesn't use CSS syntax but, in most cases, apply the same styles. Example:  `document.body.style.width = 50;` 

## CSS Specificity
Cascading style sheets can be set in multiple ways and places, so what happens if two conflicting styles are set? Which one gets priority?

````html
<!-- default.html -->

<button id="foo">Click me</button>
````

````css
/* foo.css */

button {
    background-color: blue;
}

#foo {
    background-color: red;
}
````
*Which color would the button be?*


### Selector priority

 CSS has a priority that is used to determine which styles are used. 

 1. ID Selector - E.g. `#example`
 2. Class selector - E.g. `.example`
 3. Type selector - E.g. `h1`

 >  Note: Styles that are set directly in JavaScript take priority over cascaded styles

![This part is important](http://image2.spreadshirtmedia.com/image-server/v1/products/20629663/views/1,width=378,height=378,appearanceId=327,version=1440750987/CSS-Important-Declaration.png)

CSS provides a way to override specificity priority by using  `!important`. While powerful, usually it is preferred to use the default priority, or using a more specific selector.

````css
/* foo.css */

button {
    background-color: blue  !important;
}

#foo {
    background-color: red;
}
````
* In this case the button will be blue and override the default priority*


## Common Styling Techniques
> centering horizontally, Make a picture a perfect circle

### color

### background

### border-radius

## layout

### absolute vs. relative positioning

### float:right


### Responsive layouts

### Centering a div on a page

### Flexbox

### Grid

### Fractional Units (fr)

### Percentages (%)

#



## CSS Transitions and CSS Animations
> how are the two different?

## CSS Pre-processors and their purpose

## CSS Methodologies

### OOCSS

### BEM

### SMACSS

## Popular CSS Frameworks (compare/contrast them)

### SASS

## Technical Challenge
> Link to challenge repo after you give your presentation

![css is awesome](http://starecat.com/content/wp-content/uploads/css-can-kill-you-plane-seats-outside-of-a-plane-fail.jpg)