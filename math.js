const add = (a, b) => {
    return a + b;
  };
  const sub = (a, b) => {
    return a - b;
  };
  const multiply = (a, b) => {
    return a * b;
  };
  const divide = (a, b) => {
    return a / b;
  };
  const rem = (a, b) => {
    return a % b;
  };
  
  const oddEven = (num) => {
    if (num % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  };
  export { add, sub, multiply, divide, rem, oddEven };