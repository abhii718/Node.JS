import { EventEmitter } from "node:events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("Waterfull", () => {
  console.log("Please turn off the motor!");
  setTimeout(() => {
    console.log("Please alert");
  }, 3000);
});
console.log("this is before")
myEmitter.emit("Waterfull");
console.log("this is after")
 // Emit the "Waterfull" event

