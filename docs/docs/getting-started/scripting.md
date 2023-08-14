---
sidebar_position: 2
---

# Scripting
If you are here, it means that you have installed successfully `analscript`!  
In this chapter we will write our first script.

## .anal Extension
`analscript` files use the preferred .anal extension.
In order to write an `analscript`, you need first to learn its grammar.  
The grammar is basically composed by two simple keywords: 🍑🍆.  
These two are the so called anal characters and they're needed in order to write your first program.  

## Logic Behind
The logic behind `analscript` is simple: every single character can be represented by its `ASCII` code.  
In `analscript` we can simply multiply that code with the sequence of characters that we have seen before.  
This will make us one actual character.  
So basically, if you would create a simple Hello World program, you'd have only to repeat this process for every character in the two words.  

## Hello World
Let's start by creating an `hello.anal` file:
```bash
touch hello.anal
```

Then, with our preferred text editor or IDE, we can start writing the Hello World script following the logic explained earlier:
```
🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆 🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆 🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆 🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆 🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆 🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆 🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆 🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆 🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆 🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆 🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆🍑🍆
```

## Something Missing?
If you find issues with the documentation or have suggestions on how to improve the documentation or the project in general, please file an issue for us on `GitHub`.
