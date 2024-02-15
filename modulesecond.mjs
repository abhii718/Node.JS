// this is called ECMAScript mdules (ESM) like this (export word) and this is modern

export function simple() {
  console.log("simple is complex");
  return 45; // if not write then it going to print undefined
}
export default function simple2() { // this going to be return as a default  function
  console.log("simple2 is complex");
}
//and this used in CommonJS modules (CJS)
// module.exports = simple F;
