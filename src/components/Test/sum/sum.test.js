import { expect, test } from "vitest";
import sum from "./sum";

test("Testing my App Component Structure:" , () => {
    expect(sum(10 , 10)).toBe(20);   
});

test("Testing my App Component Structure:" , () => {
    expect(sum(20 , 10)).toBe(30);   
})