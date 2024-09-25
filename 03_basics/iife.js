// Immediately Invoked Function Expressions (IIFE)
// Used for safety from Global Scope pollution

// Named IIFE
(function connectDb(dbName) {
  console.log(`DB CONNECTED: ${dbName}`);
})("DDB123");

// Unnamed IIFE
((dbName) => {
  console.log(`DB CONNECTED: ${dbName}`);
})("MONGODB123");
