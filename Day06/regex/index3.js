const a = /ca+t/; // a가 1개이상 포함
a.test("my new caaaaat");

const b = /ca?t/; // a가 optional[있어도되고 없어도되고]
b.test("my new ct");

const c = /ca{2}t/; // a가 반드시 2개만 포함
c.test("my new caaat"); // false

const d = /ca{2,}t/; // a가 반드시 2개 이상 포함
d.test("my new caaat"); // true

const e = /ca{2,4}t/; // a가 반드시 2개,3개,4개 중에 포함
d.test("my new caaat"); // true
