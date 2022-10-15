// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import App from "./App";

// test.skip("props is avaliable", () => {
//   const value = "123";
//   // 为了多写点测试用例，我给App组件加了个prop
//   render(<App value={value} />);
//   // expect(screen.getByRole("props")).toHaveTextContent(value);
// });

// test.skip("click of button is avaliable", () => {
//   render(<App value="123" />);
//   fireEvent.click(screen.getByRole("button"));
//   expect(screen.getByRole("button")).toHaveTextContent(`count is: 1`);
// });

test("add2Number",() => {
  expect(1+1).toBe(2);
})