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


