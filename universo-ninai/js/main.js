function renderHistorias(seccionId, historias) {
function renderHistorias(seccionId, historias) {
  const contenedor = document.getElementById(`lista-${seccionId}`);
  if (!contenedor) return;
  contenedor.innerHTML = "";
  historias.forEach(historia => {
    const div = document.createElement("div");
    div.className = "historia";
    div.innerHTML = `<h3>${historia.titulo}</h3><p>${historia.resumen}</p>`;
    contenedor.appendChild(div);
  });
}

// Conexión al archivo PHP que consulta MySQL
fetch("http://localhost/universo-ninai/historias.php")
  .then(response => response.json())
  .then(data => {
    renderHistorias("ultimas", data.ultimas);
    renderHistorias("top", data.top);
    renderHistorias("recomendadas", data.recomendadas);
  })
  .catch(error => console.error("Error al cargar historias:", error));

// Datos en caso de que la conexión falle
  const baseDeDatos = {
ultimas: [
  { titulo: "Infinite Game"},
  { titulo: "Entre páginas e historias"},
  { titulo: "Tom & Elaine: Desde que te conoc I"}
],

top: [
  { titulo: "La luz del Rey"},
  { titulo: "Dayan Denali"},
  { titulo: "El gorrión y la mujer del mar"}
],

recomendadas: [
  { titulo: "Entre páginas e historias"},
  { titulo: "Infinite Game"},
]
};
// Intentar cargar datos desde el servidor
fetch("http://localhost/universo-ninai/archivosPHP/historias.php")
  .then(response => response.json())
  .then(data => {
    console.log("Datos recibidos:", data);
    renderHistorias("ultimas", data.ultimas);
    renderHistorias("top", data.top);
    renderHistorias("recomendadas", data.recomendadas);
  })
  .catch(error => {
    console.error("Error al cargar historias:", error);
    renderHistorias("ultimas", baseDeDatos.ultimas);
    renderHistorias("top", baseDeDatos.top);
    renderHistorias("recomendadas", baseDeDatos.recomendadas);
  });
}  const contenedor = document.getElementById(`lista-${seccionId}`);
  if (!contenedor) return;
  contenedor.innerHTML = "";
  historias.forEach(historia => {
    const div = document.createElement("div");
    div.className = "historia";
    div.innerHTML = `<h3>${historia.titulo}</h3><p>${historia.resumen}</p>`;
    contenedor.appendChild(div);
  });

// Conexión al archivo PHP que consulta MySQL
fetch("http://localhost/universo-ninai/historias.php")
  .then(response => response.json())
  .then(data => {
    renderHistorias("ultimas", data.ultimas);
    renderHistorias("top", data.top);
    renderHistorias("recomendadas", data.recomendadas);
  })
  .catch(error => console.error("Error al cargar historias:", error));

// Datos en caso de que la conexión falle
const baseDeDatos = {
  ultimas: [
    { titulo: "Infinite Game"},
    { titulo: "Entre páginas e historias"},
    { titulo: "Tom & Elaine: Desde que te conoc I"}
  ],

  top: [
    { titulo: "La luz del Rey"},
    { titulo: "Dayan Denali"},
    { titulo: "El gorrión y la mujer del mar"}
  ],

  recomendadas: [
    { titulo: "Entre páginas e historias"},
    { titulo: "Infinite Game"},
  ]
};

// Intentar cargar datos desde el servidor
fetch("http://localhost/universo-ninai/archivosPHP/historias.php")
  .then(response => response.json())
  .then(data => {
    console.log("Datos recibidos:", data);
    renderHistorias("ultimas", data.ultimas);
    renderHistorias("top", data.top);
    renderHistorias("recomendadas", data.recomendadas);
  })
  .catch(error => {
    console.error("Error al cargar historias:", error);
    renderHistorias("ultimas", baseDeDatos.ultimas);
    renderHistorias("top", baseDeDatos.top);
    renderHistorias("recomendadas", baseDeDatos.recomendadas);
  });