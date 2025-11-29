Descrição do Projeto

Este projeto demonstra como consumir uma API pública de filmes utilizando o framework Angular. A aplicação se conecta à Studio Ghibli API, uma API aberta que fornece informações detalhadas sobre filmes, diretores e descrições.
Os dados são exibidos em uma lista simples e dinâmica no frontend.

Por que Angular foi utilizado

Angular foi escolhido por ser um framework robusto e opinativo, oferecendo uma estrutura completa para aplicações web escaláveis. Entre suas principais vantagens:

Arquitetura baseada em módulos e componentes.

Injeção de dependência nativa, facilitando o consumo de APIs.

HttpClient integrado ao framework.

Uso de TypeScript, garantindo segurança e manutenção de código.

Padrões sólidos e adequados para projetos acadêmicos e profissionais.

A escolha de Angular permite demonstrar boas práticas desde um projeto simples até aplicações complexas.

O que o código faz

Cria um serviço Angular responsável por se conectar à API de filmes.

Realiza requisição HTTP GET via HttpClient.

Fornece os dados ao componente principal.

Renderiza uma lista de filmes exibindo:

Título

Diretor

Descrição

O código serve como um exemplo objetivo e funcional de integração entre Angular e APIs externas.

Como instalar e executar o projeto
1. Pré-requisitos

Certifique-se de ter instalado:

Node.js (versão 18 ou superior)

Angular CLI globalmente

npm install -g @angular/cli

2. Clonar o projeto (ou mover os arquivos)

Se estiver usando Git:

git clone <url-do-seu-repositorio>


Entre no diretório:

cd nome-do-projeto

3. Instalar dependências

Dentro da pasta do projeto, execute:

npm install


Este comando instala todas as dependências necessárias do Angular.

4. Executar o servidor de desenvolvimento
ng serve


Ou, para abrir automaticamente no navegador:

ng serve --open


O projeto ficará disponível em:

http://localhost:4200/


API utilizada

Studio Ghibli API
Endpoint utilizado:

https://ghibliapi.vercel.app/films
