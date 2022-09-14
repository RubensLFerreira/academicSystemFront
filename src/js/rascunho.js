const url = "http://localhost:8080/cursos";

const cursosContainer = document.querySelector("#cursos-container");

// Get all posts
async function getAllCursos() {
  const courseItem = document.querySelector(".course-item");
  const courseTitle = document.querySelector(".course-item-title");
  const courseDuration = document.querySelector(".course-item-duration");
  const courseArea = document.querySelector(".course-area");
  const courseLink = document.querySelector(".course-link");
  const response = await fetch(url);

  console.log(response);

  const data = await response.json();

  console.log(data);

  data.map((curso) => {
    // const courseItem = document.createElement("div");
    // const courseTitle = document.createElement("h2");
    // const courseArea = document.createElement("p");
    // const courseDuration = document.createElement("p");
    // const courseLink = document.createElement("a");

    courseTitle.innerText = "Nome do curso: " + curso.nome;
    courseArea.innerText = "Área: " + curso.area;
    courseDuration.innerText = "Carga horária: " + curso.duracao;
    courseLink.innerText = "Visualizar curso";
    courseLink.setAttribute("href", `/curso.html?id=${curso.id}`);

    div.appendChild(courseTitle);
    div.appendChild(courseArea);
    div.appendChild(courseDuration);
    div.appendChild(courseLink);
    cursosContainer.appendChild(courseItem);
  });
}

getAllCursos();
