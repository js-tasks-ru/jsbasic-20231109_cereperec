function makeFriendsList(friends) {
  const ul = document.createElement('ul');
  document.body.append(ul);
  friends.forEach(friend => {
    ul.innerHTML += `<li style="list-style-type:none">${friend.firstName} ${friend.lastName}</li>`;
  });
  return ul;
}
