function foo(a, b) {
  if (a === null || b === null) {
    return;
  }
  console.log(a + b);
}

foo(null, 1); // This won't execute the console log