# Week 3 - Fibonacci Series Program

## Problem Statement

Write a Python program to print the Fibonacci series for n terms.

## Description

This program accepts the number of terms from the user and prints the
Fibonacci series using a for loop.

The Fibonacci series is a sequence in which each number is obtained
by adding the previous two numbers.

For example:

0, 1, 1, 2, 3, 5, 8

## Example

Input:
7

Output:
Fibonacci Series:
0 1 1 2 3 5 8

## Python Code

```python
n = int(input("Enter the number of terms: "))

a = 0
b = 1

print("Fibonacci Series:")

for i in range(n):
    print(a, end=" ")
    a, b = b, a + b
```

## Output

Fibonacci Series:
0 1 1 2 3 5 8

## Files

* fibonacci.py - Python program
* README.md - Project documentation
* output.png - Output screenshot
