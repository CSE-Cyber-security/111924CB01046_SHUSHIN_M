# Week 2 - Factorial Program

## Problem Statement

Write a Python program to find the factorial of a given number.

## Description

This program accepts a number from the user and calculates its
factorial using a for loop.

The factorial of a number n is:

n! = n × (n-1) × ... × 2 × 1

## Example

Input:
5

Output:
Factorial of 5 = 120

## Python Code

```python
num = int(input("Enter a number: "))

factorial = 1

for i in range(1, num + 1):
    factorial = factorial * i

print("Factorial of", num, "=", factorial)
```

## Output

Factorial of 5 = 120

## Files

* factorial.py - Python program
* README.md - Project documentation
* output.png - Output screenshot
