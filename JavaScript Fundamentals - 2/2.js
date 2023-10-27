function calculateTotalValue(...args) {
    console.log(args.reduce((acc, curr) => acc + curr, 0));
  }
  
calculateTotalValue(125,20,30);
  
  
  