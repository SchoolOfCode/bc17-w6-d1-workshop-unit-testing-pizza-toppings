//  import `test` and `expect` functions from Vitest
//  import the `sum` function from sum.js
//  create a bare bones test
//  run Vitest to check that it detects and passes the new test
//  inside the test:
//      call the sum function with operator: 5 and 7
//      assert that the value returned is 12

import { test, expect } from "vitest";
import calculate from "./calculator";

// test to see if calculator can add

test("Using calculator to add 5 and 7 which equals 12", () => {
  expect(calculate("+", 5, 7)).toBe(12);
});

test("Using calculator to subtract 1 from 5, equals 4", () => {
  expect(calculate("-", 5, 1)).toBe(4);
});

test("Using calculator to multiplay 2 by 5, equals 10", () => {
  expect(calculate("*", 2, 5)).toBe(10);
});

test("Using calculator to divide 10 by 1, equals 10", () => {
  expect(calculate("/", 10, 1)).toBe(10);
});

test("Using calculator to square 2, equals 4", () => {
  expect(calculate("sq", 2, 5)).toBe(4);
});

test("expect an error as the operator is not supported", () => {
  expect(() => calculate("🍕", 10, 1)).toThrowError('operator');
});
//calculate('🍕', -41414, 2); // should throw an error since '🍕' is not a supported operator