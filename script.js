

function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }

  function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  }

  let arr = [2,3,4,5,6,7]