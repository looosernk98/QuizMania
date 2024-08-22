
export const Html_Data = [
    {
        question: "What Does HTML Stand For",
        id: 1,
        options: ["hyper text markup language", "home tool markup language", "hyperlinks and text markup language"],
        selected: "",
       
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        id: 2,
        options: ["<break>", "<lb>", "<br>"],
        selected: "",
       
    },
    {
        question: "Choose the correct HTML element to define important text",
        id: 3,
        options: ["<important>", "<strong>", "<i>" , "<b>"],
        selected: "",
    },
    {
        question: "Choose the correct HTML element to define emphasized text",
        id: 4,
        options: ["<em>", "<italic>","<i>"],
        selected: "",

    },
    {
        question: "How can you open a link in a new tab/browser window?",
        id: 5,
        options: ['<a href="url" target="new"', '<a href="url" new', '<a href="url"target="_blank"'],
        selected: "",
      
    },
    {
        question: "How can you make a numbered list?",
        id: 6,
        options: ["<ul>", "<ol>", "<list>", "<dl>"],
        selected: "",
       
    },
    {
        question: "What is the correct HTML for making a checkbox?",
        id: 7,
        options: ['<checkbox>', '<input type="check">', '<input type="checkbox">', '<check>'],
        selected: "",

    },
    {
        question: "How can you make a bulleted list?",
        id: 8,
        options:  ["<ul>", "<ol>", "<list>", "<dl>"],
        selected: "",
      
    },
    {
        question: "What is the correct HTML for making a drop-down list?",
        id: 9,
        options: ['<list>', '<input type="dropdown">', '<input type="list">', '<select>'],
        selected: "",

    },
    {
        question: "An <iframe> is used to display a web page within a web page.",
        id: 10,
        options: ["true", "false", "there iis no such thing as an <iframe>"],
        selected: "",
      
    },
]


export const Css_Data = [
    {
        question: "What does CSS stand for?",
        id: 1,
        options: ["colorfull style sheets", "creative style sheets", "cascading style sheets", "computer style sheets"],
        selected: "",
       
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        id: 2,
        options: ["in the <body> section", "in the <head> section", "at the end of the document"],
        selected: "",
       
    },
    {
        question: "How do you insert a comment in a CSS file?",
        id: 3,
        options: ["// this is a comment //", "/* this is a comment */", " // this is a comment"],
        selected: "",
    },
    {
        question: "Which CSS property controls the text size?",
        id: 4,
        options: ["text-size","font-size","text-style", "font-style"],
        selected: "",

    },
    {
        question: "What is the correct CSS syntax for making all the <p> elements bold?",
        id: 5,
        options: ['<p style = "text-size : bold"','p{text-size:bold}','<p style = "font-size: bold"', 'p{font-weight:bold}'],
        selected: "",
      
    },
    {
        question: "How do you display hyperlinks without an underline?",
        id: 6,
        options: ["a{underline:none}", "a{text-decorattion:none}", "a{decorattion:no-underline}", "a{text-decoration:no-underline}" ],
        selected: "",
       
    },
    {
        question: "How do you select all p elements inside a div element?",
        id: 7,
        options: ["div p", "div.p", "div+p"],
        selected: "",

    },
    {
        question: "What is the default value of the position property?",
        id: 8,
        options: ["relative", "absolute", "fixed", "static"],
        selected: "",
      
    },
    {
        question: "How do you group selectors?",
        id: 9,
        options: ["Separate each selector with a comma", "Separate each selector with a plus sign", "Separate each selector with a space"],
        selected: "",

    },
    {
        question: "How do you make a list that lists its items with squares?",
        id: 10,
        options: [ " list-type: square", " list-style-type: square" , "list: square"],
        selected: "",
      
    },
]

export const Javascript_Data =  [

    {
        question: "Inside which HTML element do we put the JavaScript?",
        id: 1,
        options: ["<javascript>", "<scripting>", "<js>", "script"],
        selected: "",
       
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        id: 2,
        options: ['<script src="xxx.js">','<script href="xxx.js">','<script name="xxx.js">'],
        selected: "",
       
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        id: 3,
        options: ["the <head> section", "both the <head> section and <body> section", "the <body> section"],
        selected: "",
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        id: 4,
        options: ['alert("hello world")', 'mesgBox("hello world")', 'mesg("hello world")', 'alertBox("hello world")'],
        selected: "",

    },
    {
        question: "How do you find the number with the highest value of x and y?",
        id: 5,
        options: ["Math.ceil(x,y)", "top(x,y)", "Math.max(x,y)", "ceil(x,y)"],
        selected: "",
      
    },
    {
        question: "How to write an IF statement in JavaScript?",
        id: 6,
        options: ["if i = 5","if i == 5 then","if i = 5 then","if (i == 5)"  ],
        selected: "",
       
    },
    {
        question: "How can you add a comment in a JavaScript?",
        id: 7,
        options: ["'This is a comment","//This is a comment"," <!--This is a comment-->"],
        selected: "",

    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        id: 8,
        options: ["onmouseover","onchange","onmouseclick","onclick"  ],
        selected: "",
      
    },
    {
        question: "How to insert a comment that has more than one line?",
        id: 9,
        options: ["  <!--This comment has more than one line-->", " /*This comment has more than one line*/  ", " //This comment has more than one line//"],
        selected: "",

    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element below?  <p id="demo">This is a demonstration.</p>',
        id: 10,
        options: ['document.getElement("p").innerHTML = "Hello World!"',
            'document.getElementById("demo").innerHTML = "Hello World!"', 
            '#demo.innerHTML = "Hello World!"',
            'document.getElementByName("p").innerHTML = "Hello World!"'],
        selected: "",
      
    },
]

export const React_Data =  [
    {
        question: "What is the correct command to create a new React project?",
        id: 1,
        options: ["npx create-react-app","npm create-react-app myReactApp", "npm create-react-app", "npx create-react-app myReactApp "],
        selected: "",
       
    },
    {
        question: 'What does myReactApp refer to in the following command? "npx create-react-app myReactApp"  A reference to an existing app',
        id: 2,
        options: ["The name you want to use for the new app","The directory to create the new app in","The type of app to create"],
        selected: "",
       
    },
    {
        question: "React component names must begin with an uppercase letter.",
        id: 3,
        options: ["True" ,"False"],
        selected: "",
       
    },
    {
        question: "What is a common use case for ref?",
        id: 4,
        options: ["To refer to a function","To bind the function","To directly access a DOM node","To refer to another JavaScript file"],
        selected: "",
    },
    {
        question: "What is the correct syntax to import a Component from React?",
        id: 5,
        options: ["import [ Component ] from 'react'","import React.Component from 'react'","import { Component } from 'react'","import Component from 'react'"],
        selected: "",

    },
    {
        question: "Which of the following is NOT a rule for React Hooks?",
        id: 6,
        options: ["Hooks can only be called inside React Function components","Hooks can be called in Class or Function components","Hooks cannot be conditional","Hooks can only be called at the top level of a component"],
        selected: "",
      
    },

    {
        question: "A copy of the 'real' DOM that is kept in memory is called what?",
        id: 7,
        options: ["React DOM", "DOM", "Virtual DOM", "Shadow DOM"],
        selected: "",

    },
    {
        question: "Which operator can be used to conditionally render a React component?",
        id: 8,
        options: ["??", "::", "&&", "||"],
        selected: "",
      
    },
    {
        question: "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
        id: 9,
        options: ["id", "key", "data", "index"],
        selected: "",

    },
    {
        question: "What tool does React use to compile JSX?",
        id: 10,
        options: ["React DOM", "Babel", "React Router", "JSX Compiler"],
        selected: "",
      
    },
]
