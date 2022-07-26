#!/usr/bin/python3
"""queens puzzl

    """

import sys


def checkQueen(queens, queen):
    """Check array queen
    """
    for x, y in queens:
        if y == queen[1]:
            return False
        if abs((y - queen[1]) / (x - queen[0])) == 1:
            return False
    return True


def placeQueen(n, queens, solutions):
    """localizate place of queen
    """
    if len(queens) == n:
        for q in queens:
            solutions.append(q)

        return
    x = len(queens)
    for y in range(n):
        queen = [x, y]
        if checkQueen(queens, queen):
            queens.append(queen)
            placeQueen(n, queens, solutions)
            queens.pop()


def validate_args():
    """Validate value input
    """
    if len(sys.argv) != 2:
        print('Usage: nqueens N')
        sys.exit(1)
    try:
        n = int(sys.argv[1])
    except ValueError:
        print('N must be a number')
        sys.exit(1)
    if n < 4:
        print('N must be at least 4')
        sys.exit(1)
    return n


def main():
    """define program main
    """
    n = validate_args()
    queens = []
    solutions = []
    placeQueen(n, queens, solutions)

    arrayaux = []

    cont = 0
    for m in solutions:
        cont += 1
        arrayaux.append(m)
        if cont == n:
            cont = 0
            print(arrayaux)
            arrayaux = []


if __name__ == '__main__':
    main()
