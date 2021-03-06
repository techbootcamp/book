# Contribute Guide

## Getting started (Local gitbook)
1. `git clone https://github.com/techbootcamp/book.git`
2. `yarn global add gitbook-cli` or `npm install gitbook-cli -g`
3. `cd book`
4. `yarn` or `npm install`
5. `gitbook update`
6. `gitbook serve`
7. go to `localhost:4000`

## Some features you can include in this gitbook
Check the markdown of this page to see the source

**Youtube videos**

{% youtube %} 
https://www.youtube.com/watch?v=8aGhZQkoFbQ"
{% endyoutube %}

**Mermaid Diagrams (helpful for flow or process diagrams)**
See [the Official Mermaid website](http://knsv.github.io/mermaid/) on how to use this cool tool.
```graph
 graph TD;
   A-->B;
   A-->C;
   B-->D;
   C-->D;
```

**Language Syntax Highlighting (using Prism)**
```js
const apiUrl = 'http://numbersapi.com/random/year?json'
const requestRandomNumberFact = fetch(apiUrl).then((res) => res.json())
requestRandomNumberFact
  .then((fact) => {
    console.log(fact.text)
  })
```

**REPL JS using klipse**
```eval-js
//This section is interactive/editable

function greet() {
  return 'Welcome to Tech Bootcamp!'
}

greet()
// You will see the last return below
```
See [Klipse](https://github.com/viebel/klipse)

## Publishing the Gitbook
1. `git add .`
2. Commit your changes with `git commit -m "<YOUR COMMIT MESSAGE>"`
3. `git push`
4. Travis will build your changes and build the gitbook and do a `git push --force` on the `gh-pages` branch.  This way you don't have to worry about merge conflicts :D
5. Wait a minute and go to the [Gitbook](https://techbootcamp.github.io/book/) to see your change.
6. If you don't see your change, disable your cache [See how on chrome here](https://stackoverflow.com/a/36339076/812436) and refresh with your devtool open. OR you can try holding `shift` and click refresh.
