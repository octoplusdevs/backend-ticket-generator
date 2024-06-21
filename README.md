### DESCRIÇÃO
Gerador tickets servirá pra nos permitir gerar tickets e links automáticos 
para serem compartilhado nas redes
sociais.
Basicamente o usuário entra na aplicação informa o seu nome, email, area de atuação e carrega
uma foto de perfil.
é gerado um ticket e um link para ele compartilhar nas redes sociais.


### Requisitos Funcionais
- Deve ser possível cadastrar
  - Nome
  - E-mail
  - Área de atuação
  - Foto de perfil
- Deve ser possível gerar ticket;
  - Cada ticket deve ter um identificador único
  - Apenas deve ser gerado um ticket para cada usuário
- Deve ser possivel gerar link do ticket;
  - O sistema deve gerar um link único para cada usuário
  - O link deve ser fácil de compartilhar nas redes sociais(S.E.O) 
- Deve validar os campos
  - O e-mail
  - foto de perfil deve estar no formato (jpg, png)
- Deve ser possível qualquer pessoa visitar o link
  - Nome
  - Foto de perfil
  - Área de atuação
 
### Requisitos Não-Funcionais

- Desempenho
  - O sistema deve gerar o ticket e link no máximo 5s após o envio dos dados
- Usabilidade
  - A interface do usuário deve ser simples, fácil e interativo
  - O sistema responsivo e funcionar em todos os dispositivos móveis
- Segurança
  - O sistema deve proteger contra ataques comuns(SQL Injection, XSS)
  - O sistema deve armazenar de forma segura os dados do usuário
  - O sistema deve ser a prova de bots
- Disponibilidade
  - O sistema deve estar disponível apenas quando temos eventos
- Escalabilidade
  - O sistema deve suportar até 1000 pessoas ao mesmo tempo.
- Tecnologias
  - O sistema deverá usar as seguintes tecnologias para o backend: 
     - Linguagem com PHP
     - Framework Laravel
     - Postman para documentar a API
     - O bakcend deverá usar o MongoDB
     - Arquitetura MVC
     - Restfull API
     - CI/CD
     - Testes unitários
  - O sistema deveŕa usar as seguintes tecnologias para o frontend:
    - React.JS com vite
    - Typescript
    - Tailwindcss
    - React Hook Form + ZOD ou Yup
    - ReactQuery + Axios para consumo de API
    - Eslint para formatar o código
    - CI/CD
    - Testes unitários
    - 

### Regras de Negócio
- Unicidade de E-mail
  - Cada e-mail deve ser único no sistema.
- Nome
  - Deve ser obrigatório informar no mínimo um nome e no máximo dois
  - Cada nome deve ter no mínimo 2 caracteres
  - Cada nome deve ter no máximo 12 caracteres
  - O nome deve conter apenas letras
- Formato da foto de perfil
  - A foto deve ser no formato (jpg ou png)
  - O tamanho máximo da foto de perfil deve ser de 1MB
- Validade do Link
  - o link gerado ver ser válido até o dia do evento + 1 dia
- Área de atuação
  - O usuário não deve digitar a área
  - O sistema disponibiliza a lista de áreas de atuação
- Notificações ou feedback
  - o sistema deve retornar uma confirmação para o usuário com uma modal.
  - o sistema pode enviar uma confirmação para o usuário por email.
  - o sistema pode enviar notificações para o usuário quando o seu link for acessado.
- Compartilhamente dos dados
  - Informações sensíveis, como email, não devem ser exibidos.
  - Ao compoartilhar o link nas redes sociais, apenas devem ser partilhado os dados:
    - Nome
    - Foto de perfil
    - Áŕea de atuação
   
    
### Fluxo de Uso
1 - Cadastro
  - Usuário acessa a página de cadastro
  - Preenche o formulário com:
    - Nome
    - Email
    - Áre de atuação
    - Foto de perfil
  - Submete o formulário
2 - Geração do ticket e Link
    - Sistema valida os dados
    - Sistema gera o ticket e o link referente para o usuário
    - Sistema exibe o link e permite compartilhar para as redes sociais(X, Linkedin, Facebook)
3 - Visualização do ticket
    - Qualquer pessoa pode acessar o link e visualizar o ticket do usuário referente ao ticket.
4 - Compartilhamento
    - Usuário pode compartilhar o link gerado para as redes sociais
5 - Baixar o ticket
    - Usuário pode baixar o ticket gerado como uma imagem no formato jpg
