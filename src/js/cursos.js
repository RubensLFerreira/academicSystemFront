const cursosContainer = document.querySelector("#cursos-container");

const url = "http://localhost:8080/cursos";

async function consultaCursos() {
  const response = await fetch(url);
  const cursos = await response.json();
  exibirCursos(cursos);
}

function exibirCursos(cursos) {
  cursos.forEach((curso) => {
    const novoCurso = `
    <div class="course-item">
      <div class="card">
        <div class="card-header">
          <h2 class="course-item-title">${curso.nome}</h2>
        </div>

        <div class="card-body">
          <p class="course-area"><b>Categoria:</b> ${curso.area}</p>
          <p class="course-item-duration"><b>Carga horaria:</b> ${curso.duracao}</p>
        </div>

        <div class="card-footer">
          <a href="/${curso.id}" class="link">
            <button class="btn btn-primary">Mais informações!</button>
          </a>
        </div>
      </div>
    </div>
  </div>
    `;
    cursosContainer.innerHTML = cursosContainer.innerHTML + novoCurso;
  });
}

consultaCursos();
