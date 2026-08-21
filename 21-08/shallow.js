const p1 = { 
    a: 1,
    b: 
      { 
        length: 2,
        x: 3

      }
 };

// Shallow copy using spread
const p2 = { ...p1 };

p2.b.x = 99;
console.log(p2); // 99
console.log(p1.b.x); // 99 (changed!)
