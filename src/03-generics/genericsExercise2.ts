{
  // Example 1: generics with arrow functions
  const returnWhatIPassIn = <T>(t: T): T => {
    return t;
  };
  
  // compared to normal functions
  function identity<IdType>(t: IdType): IdType {
    return t
  }
  
  const one = returnWhatIPassIn(1);
  console.log(one)
  const kevin = returnWhatIPassIn("kevin");
  console.log(kevin)
  
  // Example 2: restricting to only include strings
  
  const returnWhatIPassIn2 = <T extends string>(t: T): T => {
    return t;
  };
}