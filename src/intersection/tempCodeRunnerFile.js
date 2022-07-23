const difference = (array = [], values = []) => {
    const newArray = [];
    array.forEach((element) => {
      if (!newArray.includes(element)) {
        newArray.push(element);
      }
    });
    return newArray.filter((element) => values.includes(element));
  };
console.log(difference([2, 1, 2, 3, 3, 3], [4, 8, 9,2,1]));