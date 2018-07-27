console.log("STARTING APP");

setTimeout(()=> {
  console.log("CALLBACK RAN");
}, 2000);

setTimeout(()=> {
  console.log("CALLBACK NUMBER 2");
}, 0);
console.log("ENDING APP");
