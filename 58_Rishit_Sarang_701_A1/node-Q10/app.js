console.log(" Current Directory (__dirname):", __dirname);
console.log(" Current File (__filename):", __filename);

setTimeout(() => {
  console.log(" This message is shown after 2 seconds (using setTimeout)");
}, 2000);

let count = 0;
const interval = setInterval(() => {
  count++;
  console.log(` setInterval execution count: ${count}`);
  if (count === 3) {
    clearInterval(interval);
    console.log(" Interval cleared after 3 times");
  }
}, 3000);

console.log("\nProcess Information:");
console.log(" Node.js Version:", process.version);
console.log(" Platform:", process.platform);
console.log(" Process ID:", process.pid);
console.log(" Current Working Directory:", process.cwd());
