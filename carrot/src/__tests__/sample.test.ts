import { expect, test } from 'vitest';

function sum(a: number, b: number): number {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
test('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(0);
});
test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
});
test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
});
test('adds -2 + -3 to equal -5', () => {
    expect(sum(-2, -3)).toBe(-5);
});
