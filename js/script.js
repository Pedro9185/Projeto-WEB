sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('show')
}

function obterSaudacao() {
    const horaAtual = new Date().getHours();
    let mensagem;
    
    if (horaAtual >= 5 && horaAtual < 12) {
        mensagem = "Bom dia!";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        mensagem = "Boa tarde!";
    } else {
        mensagem = "Boa noite!";
    }
    
    document.getElementById("saudacao").textContent = mensagem;
}
window.onload = obterSaudacao;

function menuToggle() {
    const toggleMenu = document.getElementById('userMenu');
    toggleMenu.classList.toggle("active");
  }