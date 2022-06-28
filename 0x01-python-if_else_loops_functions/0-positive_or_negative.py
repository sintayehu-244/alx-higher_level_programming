#!/usr/bin/python3
import random
number = random.randint(-10, 10)
if number > 0:
        print(number,"posative")
elif number == 0:
        print(number,"zero")
else:
        print(number,"negative")
