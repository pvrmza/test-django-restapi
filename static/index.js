
var jwt = localStorage.getItem("jwt");
if (jwt == null) {
  window.location.href = './login.html'
}
var username = localStorage.getItem("username");


function traeIncidentes() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://127.0.0.1:8000/incidente/");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.setRequestHeader("Authorization", "Token "+jwt);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(JSON.parse(this.responseText));
      const objects = JSON.parse(this.responseText);
      if (objects["results"]) {
        //listaIncidentes(objects.results);
        datos = (objects.results);
        let table = document.querySelector("table");
        let data = Object.keys(datos[0]);
        generateTableHead(table, data);
        generateTable(table, datos);

      }
    }
  };
}


function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}


function logout() {
  localStorage.removeItem("jwt");
  localStorage.removeItem("username");
  window.location.href = './login.html'
}

traeIncidentes()