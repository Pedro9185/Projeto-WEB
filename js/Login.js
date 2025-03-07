let usuarios = buscarDados("usuarios");

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  const encontrarUsuario = usuarios.find(
    (v) => v.email === email && v.senha === senha
  );

  if (!encontrarUsuario) {
    alert("Email ou Senha incorretos ou não existem");
  } else {
    armazenar_dados("usuarioLogado", encontrarUsuario);
    window.location = `./Home.html`;
  }
});

function ir_para_pag_cadastrar() {
  window.location = "./Cadastrar.html";
}

function armazenar_dados(chave, valor) {
  const dados = JSON.stringify(valor);
  localStorage.setItem(chave, dados);
}

function buscarDados(chave) {
  const dadosJSON = localStorage.getItem(chave);
  if (dadosJSON) {
    try {
      const dadosConvertidos = JSON.parse(dadosJSON);
      // Garante que o valor retornado seja um array
      return Array.isArray(dadosConvertidos) ? dadosConvertidos : [];
    } catch (e) {
      console.error("Erro ao converter dados do localStorage:", e);
      return [];
    }
  } else {
    return [];
  }
}
