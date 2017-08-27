# Async

## Single Threaded
> What does that mean in Javascript?
Only one call stack and one event loop!
+ Event loop watches the callback queue and the call stack
+ If the call stack is empty, and there is something in the callback queue, the event loop puts the callback function in the call stack.  

## What does it mean by synchronous and asynchronous?
> A demo in the browser on what happens when you run ajax synchronously or have a long running synchronous operation in Javascript.
TODO

## Why did Ryan Dahl choose Javascript for Node?
TODO: embed video http://bit.ly/original-nodejs 
Start at time TODO

We're taught I/O with this:

```javascript
puts("Enter your name: ");
var name = gets();
puts("Name: " + name);
```

We're taught to demand input and do nothing until we have it.  

Code like

```javascript
puts("Enter your name: ");
gets(function (name) {
    puts("Name: " + name);
});
```

is rejected as too complicated.  

Short answer: Ryan was convinced that depending on the leaky abstraction layer of context switching in multiple threads is not good.  

TODO: pics from slides?  
![Alt text](/img/file.jpg)

## Callbacks



## Promises
A promise is a value that guarantees a future value.  

In Javascript ES6, a promise is an object that has a `then` method on it.  When instantiating a promise object, it takes in a function that has 2 callback parameters (`resolve` and `reject`).  

TODO:
> What does your `then` method produce, when you `return` a promise in the `then` resolve function?
> For example: `aPromise.then((resolvedValue) => { return new Promise((resolve) => resolve('foo') ) })`

## Generators
> What does a generator function return when you call it?
TODO

## async/await
> Relationship between async/await and Promises and Generators
TODO

## Technical Challenge
> Link to challenge (TODO)

# Resources
* [Article on generators and async/await](https://davidwalsh.name/es6-generators)
* [Original Talk on NodeJS by Ryan Dahl](https://www.youtube.com/watch?v=ztspvPYybIY)
* [Event loop explained by Philip Roberts](http://bit.ly/eventloop-explained)
* [Explaining async code samples by Hao Luo](https://github.com/howlowck/explaining-async)
