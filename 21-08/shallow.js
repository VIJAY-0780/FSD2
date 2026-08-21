const original = { a: 1, b: { x: 10 } };

// Shallow copy using spread
const shallow = { ...original };

shallow.b.x = 99;

console.log(original.b.x); // 99 (changed!)
