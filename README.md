# JavaScript Nullish Coalescing Operator Unexpected Behavior

This repository demonstrates an unexpected behavior when using the nullish coalescing operator (??) within a conditional statement.  The return statement within the conditional will prevent further code from executing. This can lead to subtle bugs if you are expecting the coalescing operator to resolve a nullish value and then have other operations done.

## Bug
The `foo` function is expected to log the sum of `a` and `b`, but it doesn't when one of the arguments is `null` because of the early exit of the function.

## Solution
The solution involves restructuring the logic to ensure that the sum is calculated and logged even if one argument is null.  We can use a default value provided via the nullish coalescing operator in the `console.log` directly.