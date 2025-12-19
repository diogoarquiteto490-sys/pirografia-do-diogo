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
const quadros = [
  { titulo: "Quadro 1", imagem: "quadro1.jpg", descricao: "Descrição detalhada do Quadro 1. Altere este texto para personalizar." },
  { titulo: "Quadro 2", imagem: "quadro2.jpg", descricao: "Descrição detalhada do Quadro 2. Altere este texto para personalizar." },
  { titulo: "Quadro 3", imagem: "quadro3.jpg", descricao: "Descrição detalhada do Quadro 3. Altere este texto para personalizar." },
  { titulo: "Quadro 4", imagem: "quadro4.jpg", descricao: "Descrição detalhada do Quadro 4. Altere este texto para personalizar." },
  { titulo: "Quadro 5", imagem: "quadro5.jpg", descricao: "Descrição detalhada do Quadro 5. Altere este texto para personalizar." },
  { titulo: "Quadro 6", imagem: "quadro6.jpg", descricao: "Descrição detalhada do Quadro 6. Altere este texto para personalizar." },
  { titulo: "Quadro 7", imagem: "quadro7.jpg", descricao: "Descrição detalhada do Quadro 7. Altere este texto para personalizar." },
  { titulo: "Quadro 8", imagem: "quadro8.jpg", descricao: "Descrição detalhada do Quadro 8. Altere este texto para personalizar." },
  { titulo: "Quadro 9", imagem: "quadro9.jpg", descricao: "Descrição detalhada do Quadro 9. Altere este texto para personalizar." },
  { titulo: "Quadro 10", imagem: "quadro10.jpg", descricao: "Descrição detalhada do Quadro 10. Altere este texto para personalizar." },
  { titulo: "Quadro 11", imagem: "quadr11.jpg", descricao: "Descrição detalhada do Quadro 11. ATENÇÃO: O nome do ficheiro é 'quadr11.jpg'." },
  { titulo: "Quadro 12", imagem: "quadro12.jpg", descricao: "Descrição detalhada do Quadro 12. Altere este texto para personalizar." },
  { titulo: "Quadro 13", imagem: "quadro13.jpg", descricao: "Descrição detalhada do Quadro 13. Altere este texto para personalizar." },
  { titulo: "Quadro 14", imagem: "quadro14.jpg", descricao: "Descrição detalhada do Quadro 14. Altere este texto para personalizar." },
  { titulo: "Quadro 15", imagem: "quadro15.jpg", descricao: "Descrição detalhada do Quadro 15. Altere este texto para personalizar." },
  { titulo: "Quadro 16", imagem: "quadro16.jpg", descricao: "Descrição detalhada do Quadro 16. Altere este texto para personalizar." },
  { titulo: "Quadro 17", imagem: "quadro17.jpg", descricao: "Descrição detalhada do Quadro 17. Altere este texto para personalizar." },
  { titulo: "Quadro 18", imagem: "quadro18.jpg", descricao: "Descrição detalhada do Quadro 18. Altere este texto para personalizar." },
  { titulo: "Quadro 19", imagem: "quadro19.jpg", descricao: "Descrição detalhada do Quadro 19. Altere este texto para personalizar." },
  { titulo: "Quadro 20", imagem: "quadro20.jpg", descricao: "Descrição detalhada do Quadro 20. Altere este texto para personalizar." },
  { titulo: "Quadro 21", imagem: "quadro21.jpg", descricao: "Descrição detalhada do Quadro 21. Altere este texto para personalizar." },
  { titulo: "Quadro 22", imagem: "quadro22.jpg", descricao: "Descrição detalhada do Quadro 22. Altere este texto para personalizar." },
  { titulo: "Quadro 23", imagem: "quadro23.jpg", descricao: "Descrição detalhada do Quadro 23. Altere este texto para personalizar." },
  { titulo: "Quadro 24", imagem: "quadro24.jpg", descricao: "Descrição detalhada do Quadro 24. Altere este texto para personalizar." },
  { titulo: "Quadro 25", imagem: "quadro25.jpg", descricao: "Descrição detalhada do Quadro 25. Altere este texto para personalizar." },
  { titulo: "Quadro 26", imagem: "quadro26.jpg", descricao: "Descrição detalhada do Quadro 26. Altere este texto para personalizar." },
  { titulo: "Quadro 27", imagem: "quadro27.jpg", descricao: "Descrição detalhada do Quadro 27. Altere este texto para personalizar." },
  { titulo: "Quadro 28", imagem: "quadro28.jpg", descricao: "Descrição detalhada do Quadro 28. Altere este texto para personalizar." },
  { titulo: "Quadro 29", imagem: "quadro29.jpg", descricao: "Descrição detalhada do Quadro 29. Altere este texto para personalizar." },
  { titulo: "Quadro 30", imagem: "quadro30.jpg", descricao: "Descrição detalhada do Quadro 30. Altere este texto para personalizar." }
];

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
