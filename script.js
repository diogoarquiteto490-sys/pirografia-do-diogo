/* ENTRAR */
document.getElementById("entrar").onclick = () => {
  document.getElementById("capa").style.display = "none";
  document.getElementById("site").classList.remove("hidden");
};

/* SEPARADORES */
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.onclick = () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  };
});

/* VOLTAR AO MENU */
document.querySelectorAll(".voltar-menu").forEach(btn => {
  btn.onclick = () => {
    contents.forEach(c => c.classList.remove("active"));
    tabs.forEach(t => t.classList.remove("active"));
  };
});

/* QUADROS */
const quadros = Array.from({ length: 30 }, (_, i) => {
  // Correção para o nome do ficheiro 'quadr11.jpg' que está incorreto no repositório
  const index = i + 1;
  const imagem = index === 11 ? `quadr11.jpg` : `quadro${index}.jpg`;
  
  return {
    titulo: `Quadro ${index}`,
    imagem: imagem,
    descricao: `Descrição detalhada do quadro ${index}.`
  };
});

const lista = document.getElementById("listaQuadros");
const modal = document.getElementById("modal");

quadros.forEach(q => {
  const img = document.createElement("img");
  img.src = q.imagem;
  img.alt = q.titulo;
  img.onclick = () => abrirModal(q);
  lista.appendChild(img);
});

/* MODAL */
function abrirModal(q) {
  document.getElementById("modalTitulo").innerText = q.titulo;
  document.getElementById("modalImg").src = q.imagem;
  document.getElementById("modalDesc").innerText = q.descricao;
  modal.classList.remove("hidden");
}

document.querySelector(".close").onclick = () => {
  modal.classList.add("hidden");
};

modal.onclick = e => {
  if (e.target === modal) modal.classList.add("hidden");
};

/* VOLTAR PARA A CAPA */
document.getElementById("voltarCapa").onclick = () => {
  document.getElementById("site").classList.add("hidden");
  document.getElementById("capa").style.display = "flex";
  
  // Limpar separadores e conteúdo ativo
  contents.forEach(c => c.classList.remove("active"));
  tabs.forEach(t => t.classList.remove("active"));
};
