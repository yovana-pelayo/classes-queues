const { Stack, Queue } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack([1]);
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  // add more tests here...
});

describe("Queue Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack([1]);
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  // add more tests here...
});
