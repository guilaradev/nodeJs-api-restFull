# Criando uma API REST FULL em Node.JS

## Criando nossa estrutura 
 - ```npm init -y ```
 ou 
 ``` yarn init -y ```

## Estrutura de Pastas  
 - ./api/ => Contém nosso código da api.
 - ./api/controllers/ => Contém todos controladores da api.
 - ./api/data/ => Contém nossos mocks.
 - ./api/routes/ => Contém as rotas da api.
 - ./config/ => Contém as configurações do servidor.
 - ./package.json => Listagem das dependências do projeto.

Além do **_express_** vamos precisar de outros pacotes para nos auxiliar nesse projeto.

### Nodemon 
   - Monitorar nosso servidor para que não seja necessário restartar o projeto sempre que houver mudanças.
      - > _Dica: para restartar a aplicação com nodemon ligado no terminal, é só digitar “rs”._
   
**Importante**: Usem o nodemon somente em dev, em produção existem outros pacotes como PM2, Forever, criarei um post sobre PM2 e Forever.

### Body Parser
   - O body-parser é um middleware capaz de converter o body da requisição para vários formatos. Um desses formatos é **json**, exatamente o que queremos.

### Config
   - Este pacote config nos permite organizar a configuração da nossa aplicação e estender em qualquer arquivo.

## Instalação de pacotes

```npm i -g nodemon@1.19.4 && npm i --save express@4.17.1 && npm i --save body-parser@1.19.0 && npm i --save config@3.2.3``` 
   - _Dica: a flag “i” significa “install” e o “— save” para gravar o pacote no nosso arquivo package.json._

Toda rota nova, tem que importar no express? isso é pouco produtivo, então optaremos por utilizara o **consign**
   - ``` npm i consign@0.1.6 --save ```
   

## Vamos Rodar a API?
Agora que temos tudo instalado para rodar o projeto, para você poder rodar ele use o seguinte comando:
   - ``` nodemon server.js ```

Eu indico o uso do **Postman** para poder visualizar melhor as requisições da API