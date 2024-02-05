function combineLists(list1, list2) {
  const combinedList = [];
  const maxLength = Math.max(list1.length, list2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < list1.length) {
      combinedList.push(list1[i]);
    }
    if (i < list2.length) {
      combinedList.push(list2[i]);
    }
  }

  return combinedList;
}

// Example usage:
const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];
console.log(combineLists(list1, list2));
