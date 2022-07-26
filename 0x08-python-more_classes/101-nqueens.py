#!/usr/bin/python3
"""
Program that solves the N queens problem
"""


from sys import argv

if __name__ == "__main__":
    if len(argv) != 2:
        print("Usage: nqueens N")
        exit(1)
    if argv[1].isdigit() is False:
        print("N must be a number")
        exit(1)
    n = int(argv[1])
    if n < 4:
        print("N must be at least 4")
        exit(1)

    sol = []

    for row in range(n):
        sol.append([row, -1])

    def reset(i):
        """reset the way of solution if failure"""
        for row in range(i, n):
            sol[row][1] = -1

    def check_column(j):
        """check if the column is already taken"""
        for i in range(n):
            if j == sol[i][1]:
                return True
        return False

    def validation(i, j):
        """check column and diagonal"""
        if (check_column(j)):
            return False
        row = 0
        while(row < i):
            if abs(sol[row][1] - j) == abs(row - i):
                return False
            row += 1
        return True

    def recursive(i):
        """backtracking to find solutions"""
        for j in range(n):
            reset(i)
            if validation(i, j):
                sol[i][1] = j
                if (i == n - 1):
                    print(sol)
                else:
                    recursive(i + 1)

    recursive(0)
