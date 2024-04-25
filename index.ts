#! /usr/bin/env node

import inquirer from "inquirer";

let ans =await inquirer.prompt({
    type : "input",
    name : "words",
    message : "Please enter a scentence"
})

let word_trim = ans.words.trim()
let word_split = word_trim.split(" ")
let word_count = word_split.length

console .log("There are " + word_count + " words in your scentence")
