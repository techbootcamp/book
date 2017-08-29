# Javascript Language Features

Javascript is an object-oriented and functional language.

## Types
Javascript has no classes.  However it has two types:

### Primative Types
Simple data types

* Boolean (`true` or `false`)
* null (`null`)
* undefined (`undefined`)
* number (`100` or `12.2`)
* string (`'hello'`)
* Symbol (in ES2015)

```eval-js
let oldName = 'St Clair'
let newName = oldName

newName = 'Luo'
oldName
```

### Reference Types
Reference Types are objects.  An object is simply an unordered list of properties consisting with a name and a value.  The value can be of either type (Primative or Reference).

```eval-js
let bot1 = {
    name: 'Optimus Prime',
    greet: function () {
        return 'hi'
    }
}
let bot2 = bot1

bot2.name = 'Bumblebee'

bot1
```

## Functions

### Defining a function in Javascript

**Declaration:**

```js
function greet() {
    return 'hello my name is Hao'
}
```

**Function Expression:**
```js
var greet = function () {
    return 'hello my name is Hao'
}
```

### What's the difference?
Declarations are named functions, and function expressions can be anonymous functions.

Declarations are hoisted to the top of the function

```eval-js
greet()

function greet() {
    return 'hello my name is Hao'
}
```

As oppose to:
```eval-js
anotherGreet()

var anotherGreet = function () {
    return 'hello my name is Hao'
}
```

Function Expressions can't be hoisted because the the function can only be called or referenced through a variable.

### Javascript is a functional language

Functions are treated as first-class citizens, which means they can do things like other types.  

Functions can:
* be assigned to variables
* be parameters of another function
* be created and returned from another function
* have properties on the function like a regular class

In fact, functions are just objects.  The only difference between a "function" and a regular object (ie `{name: 'Kevin'}`),is that a function can be evoked (or called). 

#### Function Overloading

Javascript **cannot** overload a function based on differing function signatures like you can with Java.

```eval-js
function haosGreet (name) {
    return 'hello ' + name
}

function haosGreet () {
    return 'good morning!'
}

```

#### Functions in an object (and `this` keyword)
Remember functions can be defined/created anywhere.  So let's create one in an object
```eval-js
var gabby = {
    name: 'Gabby',
    coffeeLeft: 5,
    coffeeConsumed:0,
    drinkCoffee: function () {
        this.coffeeLeft--
        this.coffeeConsumed++
        return this.name + ' drank some coffee'
    }
}
```

```eval-js
var kevin = {
    name: 'Kevin',
    coffeeLeft: 5,
    coffeeConsumed: 0
}

// Can Kevin steal gabby's coffee by copying the way she drinks?
kevin.drink = gabby.drinkCoffee

```

Now what if gabby's `drinkCoffee` function is not even in an object?

```eval-js
var standaloneDrinkCoffee = gabby.drinkCoffee

// what happens if this function is called?
```

`this` keyword is the context of which the function is evoked.  When you evoke a function as a object method, like so `gabby.drinkCoffee()`, the context is implied as being gabby.  When you evoke the function outside of the object, it loses its context. 

> Sidenote: There is also another way you can use the context, but let's see how to explicitly set the context.

### `bind` and `call` function methods

> Note: Remember functions are just objects which can have any kind of properties, and properties can other functions.  So functions can have other functions.

```eval-js
var gabbyDrinksCoffee = standaloneDrinkCoffee.bind(gabby)
// gabbyDrinksCoffee()
```

Or you can immediately evoke the function with an explicit context

```eval-js
standaloneDrinkCoffee.call(gabby)
```

### A function inside of a function inside of an object
![](/images/js-features/js-swanson.jpg)
```eval-js
var ron = {
    name: 'Ron',
    coffeeLeft: 3,
    coffeeConsumed: 0,
    drinkCoffee: function () {
        function sendAlert () {
            return this.name + ', you drank too much coffee'
        }

        this.coffeeLeft--
        this.coffeeConsumed++
        if (this.coffeeLeft == -1) {
          return sendAlert()
        } 
        return this.name + ' drank some coffee'
    }
}

ron.drinkCoffee()
ron.drinkCoffee()
ron.drinkCoffee()

// ron.drinkCoffee()
// how would you fix the issue?
```

This is the other way you'd lose the context of a function.  

### arrow functions


## Javascript is a Object Oriented Language
![](/images/js-features/js-drew-everything.jpg)

There is no classes in Javascript.  Everything is an object (except for primitive types).  So how can you make a new instance of something based on another thing?

Javascript uses constructors and prototypes.

### Constructors

Constructors are simply javascript functions.  As conventions, constructor functions are usually capitalized.

you create a new instance by using the `new` keyword.

```eval-js
function Water() {
    this.caffineLevel = 0
    this.temperature = 0
    this.heatUp = function () {
        this.temperature = 50
    }
}

var kevinsWater = new Water()
var gabbysWater = new Water()
var paulsWater = new Water()

kevinsWater.heatUp()

// is kevinsWater.heatUp the same function as gabbysWater.heatUp?

```

### `prototype` property on a constructor function

Whatever is in the `prototype` object, automatically gets shared across all of the instanciated objects. 

```eval-js
function SmartWater() {
    this.caffineLevel = 0
    this.temperature = 0
}

SmartWater.prototype.heatUp = function () {
    this.temperature = 60
}

var kevinsSmartWater = new SmartWater()
var gabbysSmartWater = new SmartWater()

kevinsSmartWater.heatUp === gabbysSmartWater.heatUp
```

You can dynamically change the behaviors of the a defined type.

```eval-js
kevinsSmartWater.heatUp()

// console.log('kevins water temp pre change', kevinsSmartWater.temperature)

SmartWater.prototype.heatUp = function () {
    this.temperature = 100
}

kevinsSmartWater.heatUp()

// console.log('kevins water temp after change', kevinsSmartWater.temperature)

gabbysSmartWater.heatUp()

// console.log('gabbys water temp after change', gabbysSmartWater.temperature)

```

### Inheritances

Javascript uses prototypes to create a **prototypal chain** which produces its inheritance structure.

* Every function has an property named `prototype` (as we saw in the previous section).  
* Every object has a `[[prototype]]` object on it (usually named `__proto__`, but not a spec standard).

### When you create a function...

Everytime you create a function, Javascript puts an object in the `prototype` property onto that function.
This `prototype` property object has a property called `constructor` which references back to the function.

```eval-js
function Park(name) {
    this.name = name
}

// Park.prototype
```

This `prototype` property object in the function is referenced in the `[[prototype]]` property of its instance objects.

```eval-js
var grantPark = new Park('Grant')

var proto = Object.getPrototypeOf(grantPark)
var proto2 = grantPark.__proto__

// how is this proto related to Park?

```

### Object Inheritance

### Constructor Inheritance

## ES6 Features
That was a lot of information.. and you have to understand a lot about how Javascript works to create a simple "class"-like construct.  Also `this` is often a pain point of development when you have to use `call` or `bind` all the time.

### `class` keyword


### arrow functions
