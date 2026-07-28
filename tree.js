import { Cocobase } from "cocobase";

const db = new Cocobase();

function getAllProperties(obj, level = 0, seen = new WeakSet()) {
  if (obj === null || seen.has(obj)) return;
  seen.add(obj);

  const indent = '  '.repeat(level);
  const props = new Set();

  // own property names
  Object.getOwnPropertyNames(obj).forEach(p => props.add(p));
  // symbol properties
  Object.getOwnPropertySymbols(obj).forEach(p => props.add(p));
  
  // prototype properties
  const proto = Object.getPrototypeOf(obj);
  if (proto) {
    Object.getOwnPropertyNames(proto).forEach(p => props.add(p));
  }

  for (const p of props) {
    console.log(indent + p);
    try {
      const val = obj[p];
      if (typeof val === 'object' && val !== null) {
        getAllProperties(val, level + 1, seen);
      }
    } catch {}
  }
}

getAllProperties(db);
