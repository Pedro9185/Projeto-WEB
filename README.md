# Projeto Web
Implementação de algumas páginas web utilizando HTLM, CSS e JAVASCRIPT da disciplina de DESENVOLVIMENTO PARA WEB do curso de Análise e Desenvolvimento de Sistemas da UFCA

O projeto se baseia em um Sistema de RH de pequeno porte

# Versão Live utilizando GitHub Pages:
Você pode acessar o site pelo link:
[Sistema TopRh](https://pedro9185.github.io/Projeto-WEB/)<br>

# Telas Principais implementadas:
- Página inicial com apresentação do sistema
- Página de Login e Cadastro de usuários
- Página Dashboard do sistema
- Página Sobre com informações da equipe
# Funcionalidades Principais implementadas:
- Página Inicial com apresentação do sistema e cards interativos
- Login e Cadastro do usuario salvando dados no localStorage 
- validação dos campos de login e feedback para o usuario caso ele não esteja cadastrado ou o email ou senha estiverem incorretos
- validação dos campos de cadastro e feedback para o usuario caso as senhas não sejam iguais ou se já houver um email já cadastrado
- validação na pag home para não deixar o usuario acessar a pagina home sem ter um usuario logado
- Responsividade: Adaptações para diferentes tamanhos de telas utilizando media queries:
	- 1024px,768px,55px,425px,320px
- Menu de navegação lateral responsível e retrátil para telas menores
- Saudação para  o usuário logado baseado na hora do dia
- Logout

# Contratos de Comunicação - Sistema Top RH

## 1. Contrato para Login

### Requisição
```json
{
  "email": "usuario@exemplo.com",
  "senha": "senha123"
}
```

### Resposta de Sucesso
```json
{
  "status": 200,
  "mensagem": "Login realizado com sucesso",
  "dados": {
    "nome": "Nome do Usuário",
    "email": "usuario@exemplo.com"
  }
}
```

### Resposta de Erro
```json
{
  "status": 401,
  "mensagem": "Email ou senha incorretos ou não existem",
  "erro": "CREDENCIAIS_INVALIDAS"
}
```

## 2. Contrato para Cadastro de Usuário

### Requisição
```json
{
  "nome": "Nome Completo",
  "email": "novousuario@exemplo.com",
  "senha": "senha123"
}
```

### Resposta de Sucesso
```json
{
  "status": 201,
  "mensagem": "Usuário cadastrado com sucesso",
  "dados": {
    "nome": "Nome Completo",
    "email": "novousuario@exemplo.com"
  }
}
```

### Resposta de Erro (email já cadastrado)
```json
{
  "status": 409,
  "mensagem": "Esse email já está cadastrado, verifique seu email e tente novamente",
  "erro": "EMAIL_JA_EXISTE"
}
```

### Resposta de Erro (senha inválida)
```json
{
  "status": 400,
  "mensagem": "A senha não pode ser menor que 6 digitos",
  "erro": "SENHA_INVALIDA"
}
```

### Resposta de Erro (senhas não coincidem)
```json
{
  "status": 400,
  "mensagem": "As senhas não coincidem",
  "erro": "SENHAS_DIFERENTES"
}
```

## Desenvolvedores
[Lucas Araujo](https://github.com/lal28)<br>
[Pedro Henrique](https://github.com/Pedro9185)<br>
[Maria Mikaelle Andrade](https://github.com/Mikaelle27)<br>

## Projeto
**Ferramentas Utilizadas:**
Para prototipação e ícones:
[Figma](https://www.figma.com/)<br>
Para desenvolvimento do código:
[Visual Studio Code](https://code.visualstudio.com/)
