function showSalary(users, age) {
  let newArr = users.filter((user) => user.age <= age);
  return newArr.map((element, index)=> {
    let tempString = `${element.name}, ${element.balance}`;
    let lastIndex = newArr.length - 1;
    return index < lastIndex ? tempString + '\n' : tempString;
  }).join('');
}
