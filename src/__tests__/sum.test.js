import { sum } from "../components/sum";
test("Function should calculate the sum of two numbers",() => {
    const result = sum(3,4) // call the function
    expect(result).toBe(7) // assertion provided by jest. I
    })