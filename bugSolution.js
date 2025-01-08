function foo(a, b) {
  console.log((a ?? 0) + (b ?? 0));
}

foo(null, 1); // Output: 1
foo(1, null); // Output: 1
foo(null, null); // Output: 0
foo(1, 2); // Output: 3