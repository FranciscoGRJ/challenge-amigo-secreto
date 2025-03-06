let amigos = [];

function getFriendFromInput() {
  let friend = document.getElementById("amigo").value;
  return friend;
}

function clearInput() {
  document.getElementById("amigo").value = "";
}

function agregarAmigo() {
  let friend = getFriendFromInput();
  if (friend !== "") {
    if (amigos.includes(friend)) {
      alert("El amigo ya se encuentra en la lista");
      clearInput();
      return;
    } else {
      amigos.push(friend);
      clearInput();
      showFriendList();
    }
  } else {
    alert("Ingrese el nombre de un amigo");
  }
}

function showFriendList() {
  listID = document.getElementById("listaAmigos");
  listID.innerHTML = ""; //Clear the list
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(amigos[i]));
    listID.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos !== "") {
    let randomPosition = Math.floor(Math.random() * amigos.length);
    let randomFriend = amigos[randomPosition];
    listID = document.getElementById("listaAmigos");
    listID.innerHTML = ""; //Clear the list
    document.getElementById("resultado").innerHTML =
      "El amigo secreto es: " + randomFriend;
  } else {
    alert("No hay amigos en la lista");
  }
}
