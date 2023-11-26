function showSalary(users, age) {
  let newArr = users.filter((user) => user.age <= age);
  let lastIndex = newArr.length - 1;
  let resultString = '';

  newArr.forEach((element, index) => {
    tmpString = `${element.name}, ${element.balance}`;

    resultString += index < lastIndex ?
      tmpString + '\n' : tmpString + '';

  });
  console.log(resultString);
  return resultString;
}


let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 24,
  "name": "Petya Petrov",
  "gender": "male",
};

let user2 = {
  "balance": "$1,435.65",
  "picture": "https://placehold.it/32x32",
  "age": 22,
  "name": "Kolya Sidirov",
  "gender": "male",
};

let user3 = {
  "balance": "$411.65",
  "picture": "https://placehold.it/32x32",
  "age": 33,
  "name": "Vasya Pupkin",
  "gender": "male",

};
let user4 = {
  "balance": "$411.65",
  "picture": "https://placehold.it/32x32",
  "age": 43,
  "name": "Vasya Pupkin2",
  "gender": "male",
};
let user5 = {
  'balance': '$1,825.65',
  'picture': 'https://placehold.it/32x32',
  'age': 41,
  'name': 'Golden Branch',
  'gender': 'male',
  'greeting': 'Hello, Golden Branch! You have 7 unread messages.',
  'favouriteFruit': 'banana'
};

// Массив пользователей
let users = [user1, user2, user3, user4, user5];

showSalary2(users, 40);
