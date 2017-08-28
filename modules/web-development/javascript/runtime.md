# Engines, runtimes, and you: A behind-the-scenes look at how Javascript Javascripts

Let's take a look at how the browser works to turn `const code = 'javascript';` into the meaningful array of wiggling electrons that makes up your favorite website.

## The Javascript engine

Javascript is hard. But if it makes you feel better, your computer doesn't understand Javascript, either. **Javascript engines** are programs that convert Javascript source code into something your computer can understand and execute. Modern browsers contain Javascript engines. So does Node.js.

### A brief history of the Javascript engine

### Interpreted or compiled?

### Optimization

### Comparing V8 and Chakra

## The Javascript runtime

Ask 10 people for a definition of "Javascript runtime," and you're likely to get 10 different answers. Developers aren't always consistent in what exactly they mean when they say runtime, so let's disambiguate a bit...

### Defining "at runtime"

When we say that some bit of Javascript is compiled *at runtime,* we mean that it's compiled immediately before being run. This is in contrast to, for example, a C++ program in which the entirety of the source code is compiled but not run, resulting in an executable file that can then execute at some later time. OK, cool; that makes sense.

### Defining "a Javascript runtime"

When someone talks about a *Javascript runtime,* they might be referring to one or more of the following:
 - the Javascript engine (*e.g.,* V8)
 - a piece of software that contains a Javascript engine (*e.g.,* Node.js or Chrome)
 - services carried out (by a browser, for instance) during runtime such as garbage collection or event queueing
 - the actual pointers and memory allocated during runtime services (*e.g.,* the call stack and heap)
 - objects made available (by a browser, for instance) during runtime such as `window`

These terms seem to confuse everyone. Even Mozilla, Google, and Microsoft define "Javascript runtime" in surprisingly different terms in their own documentation. Seriously?!

### So, what's the takeaway?

## The good stuff: What the browser actually does with your Javascript

### Heap and call stack

### Garbage collection, optimization, and other fun tasks

### Web APIs, callback queue, and event loop

### Render queue

### See it all in action with Loupe
Philip Roberts created a browser tool called [Loupe](http://latentflip.com/loupe/) to help visualize exactly how source code, the call stack, Web APIs, callback queue, and render queue interoperate. It's really cool! You can try it out by visiting [http://latentflip.com/loupe/](http://latentflip.com/loupe/). I recommend clicking the Loupe icon at the top left and increasing the delay to about 2000 ms and enabling render simulation. Once you've done that, click "Save & Run" to kick off the script. You can click the "Click me!" button to trigger click events. Watch them move between Web API handling, the queue, and the stack.

## Technical challenge

### Part 1

### Part 2
As we learned today, V8 and ChakraCore take advantage of blended interpretation/compilation, including a first pass that compiles to machine code. In theory, you should be able to write some simple Javascript, pass it through one of these engines, and get some assembly or bytecode out the other end. Right? Let's try it out!

Up until now, we've been talking about V8 in the browser (Chrome). But for our purposes,getting at V8 via Node.js will be the easiest way to dive in and look at some bytecode.

1. Make sure you have Node.js version 8.3 or higher installed. (Run `node --version` to check. If you need to upgrade for Windows, use the MSI installed from the [Node website](http://www.nodejs.org).)

2. Create a new file on your machine called `test.js`, and paste in the following Javascript code:
```javascript
function incrementX(obj) {
    return 1 + obj.x;
} 
incrementX({x: 42});
```

3. At the Node command prompt, cd into the folder where `test.js` is located, and run `node --print-bytecode test.js`. You'll see lots of text whirring by. Give it 2 minutes or so to finish.

4. Once it's complete, scroll up a few hundred lines. You're looking for a bit of printout that begins with the following:
    
    ```
    [generating bytecode for function: incrementX]
    Parameter count 2
    Frame size 8
    ```

5. The code that follows is the bytecode for the function `incrementX` that appears in `test.js`. Awesome! The middle column shows 1s and 0s (in hexidecimal notation for ease of reading), and the column on the right shows bytecode, which is pretty darn close to what the machine code or assembly would look like.

6. Take a look at [Understanding V8's bytecode](https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775), an article that actually goes through the code you entered into to `test.js` line by line to explain how the values are loaded in the accumulator, moved to different registers, and made to undergo various operations. See if you can match up the explanations of each line of bytecode with the output you generated. (Note that this article uses an older version of Node, so some of the output and vector designations will look a little different.) Finally, take a moment to observe patterns in the hexidecimal number column. Notice how both references to register 0 contain an `0xFA`? See how the number 5 is represented as `0x05`? So cool! <3

7. Make some changes to your `test.js` file. Write a little more Javascript: try adding a `console.log()` or working with strings or including multiple named or anonymous functions. Rerun `node --print-bytecode test.js` and see if you can understand the bytecode that is generated.

### Part 3
Write a blog post, tweet, or tell a friend about what you learned!

## Resources
* [Article] [Concurrency model and event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
* [Article] [Events, concurrency, and Javascript](https://danmartensen.svbtle.com/events-concurrency-and-javascript)
* [Article] [Understanding V8's bytecode](https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775)
* [Wiki] [ChakraCore architecture overview](https://github.com/Microsoft/ChakraCore/wiki/Architecture-Overview)
* [Wiki] [V8](https://github.com/v8/v8/wiki)
* [Video] [Help, I'm stuck in an event loop](https://vimeo.com/96425312)
