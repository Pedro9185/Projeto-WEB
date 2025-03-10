let usuarios = buscarDados("usuarios");

const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("password");

formulario.addEventListener("submit", (ev) => {
  ev.preventDefault();

  let existe = usuarios.some((v) => v.email === email.value);

  if (existe) {
    alert(
      "Esse email já está cadastrado, verifique seu email e tente novamente"
    );

    return;
  }
  const novoUsuario = {
    nome: nome.value,
    email: email.value,
    senha: senha.value,
  };

  usuarios.push(novoUsuario);

  armazenar_dados("usuarios", usuarios);

  formulario.reset();
  alert("Usuario cadastrado");
});

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

function ir_para_login() {
  window.location = `./Login.html`;
}
