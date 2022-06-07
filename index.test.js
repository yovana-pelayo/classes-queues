const { Stack, Queue } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack([1]);
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  // add more tests here...
  it('should display initial list', () => {
    const stack = new Stack([1, 4, 6, 7]);
    expect(stack.showList).toEqual([1, 4, 6, 7])
  })

  it('should remove from the last added item', () => {
    const stack = new Stack([5, 4, 3, 2, 1])
    stack.push(6);
    stack.pop(); 
    stack.pop();
    stack.pop();
    expect(stack.showList).toEqual([3, 2, 1])
  })
});

describe("Queue Class", () => {
  it("queue ", () => {
    const stack = new Stack([1]);
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  // add more tests here...
});
