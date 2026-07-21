# Data Modules Lab: Merge Users - Complete Guide

1. [Introduction](#introduction)
2. [Why We Need Each Component](#why-we-need-each-component)
3. [Deep Dive: require()](#deep-dive-require)
4. [Deep Dive: datejs](#deep-dive-datejs)
5. [Deep Dive: JSON](#deep-dive-json)
6. [Deep Dive: fs (File System)](#deep-dive-fs-file-system)
7. [Deep Dive: Jest Testing](#deep-dive-jest-testing)
8. [Deep Dive: module.exports](#deep-dive-moduleexports)
9. [Complete Code with Explanations](#complete-code-with-explanations)
10. [How Everything Works Together](#how-everything-works-together)

---

## Introduction

### What Are We Building?

We're building a JavaScript function that merges multiple arrays of usernames into one array and adds a date stamp.

### Why This Matters

This is a fundamental programming task:
- Companies merge user databases
- Teams combine member lists
- Events aggregate attendees
- APIs return data that needs combining

### The Tools We Use

| Tool | Purpose |
|------|---------|
| **Node.js** | Run JavaScript outside the browser |
| **npm** | Manage packages (like datejs) |
| **datejs** | Format dates easily |
| **Jest** | Test our code |
| **JSON** | Store data in a readable format |
| **fs** | Read/write files |

---

## Why We Need Each Component

### 1. Why `require()`?

**What is require()?**

`require()` is how Node.js imports code from other files or libraries.

```javascript
// Without require: Everything in one file
//Huge, unmanageable file

// With require: Code is organized
// Clean, modular code
const datejs = require('datejs');    // Import library
const { combineUsers } = require('./index'); // Import our own code