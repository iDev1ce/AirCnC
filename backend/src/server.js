/*
    => server.js vai ser o código incial que vai inicializar o servidor
    => importar o express (biblioteca que o projeto depende)
*/

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');


/* 
    => criacao da aplicação
*/
const app = express();

mongoose.connect('mongodb+srv://juan-riquelme:j12345678@omnistack-w1c3z.gcp.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



/* 
    => rota do usuario

    get(agr[0], arg[1]) 
        arg[0] - rota do usuario 
            ex:. app.get('/') - é como ele estivesse ouvindo a informação de quando o usuário acessar
                                apenas localhost:3333/ 

        -------------------------------------------------------------------------------------------

        arg[1] - função
                    pode-se usar um arrow-function que vai receber dois argumentos
                ex:. app.get('/', (req, res)) = {}); 

            req representa a requisição (request), vai pegar qualquer tipo de parametro
            que o usuario esteja enviando na requisicao
                ex:. rota de fechamento de compras, o req pega informacoes
                        como quais itens estavam no carrinho, qtd de produtos,
                        valor do frete. ele recebe todos os parametros que o usuario envia
            
            res representa uma resposta para a requisição. todo request necessita de um response
            res tem vários tipos de métodos para respostas como o send(),
            ele envia uma mensagem.


    quando se acessa um site, ele tem varias rotas ex:. /contato, /produtos, etc


                *   res: representa a resposta que enviaremos a requisição. Toda requisição tem uma resposta, por esse motivo, 
                *   passamos um return na res com o método send, que envia uma mensagem. Temos vários métodos além do send,
                *   geralmente utilizamos o json, já que estamos fazendo uma API e json é o método padrão de troca de dados
                *   na aplicação. O método json recebe um objeto json ou um array.

--------------------------------------------------------------------------------------------------

    Pode-se utilizar os métodos:
    GET, POST, PUT, DELETE, etc. 

    Porém os mais importantes em uma API REST são: GET, POST, PUT, DELETE

        GET - Será utilizado quando for necessário buscar informações do backend 
            navegadores por padrão fazem uma requisição GET, logo, é preciso de outra ferramenta para
            testar outras rotas que estão utilizando outras rotas que não estão utilizando o GET
            ferramenta: Insomnia
            ex:. listagem dos usuários

                    * => Quando efetuamos uma rota do tipo get podemos pegar informações da query string
                    *      utilizando a propriedade query da requisição. ex: req.query.query_param
                    *      Geralmente utilizamos query params para filtrar algo, já que é comum
                    *      expor os filtros na url da rota
                    * 
                    * => Quando efetuamos uma rota do tipo post ou put podemos pegar informação como 
                    *      parâmetro da rota, ex: localhost:3333/users/50. Na hora de passarmos a rota
                    *      para o método de requisição utilizado colocamos "/users/:id", dessa forma,
                    *      o id se tornaria um parâmetro da url. Para pegarmos essa informação
                    *      utilizamos a propriedade params da requisição e logo em seguida passamos o 
                    *      parâmetro que queremos da url. ex: req.params.id  

        ------------------------------------------------------------------------------------------------
        POST - Será utilizado quando for necessário criar uma nova informação no backed
            rotas do tipo POST não é possível executar pelo navegador
            ex:. fazer um cadastro de usuário

        PUT - Será utilziado quando for necessário editar informações do backend
            ex:. alterar informações de um usuário

        DELETE - Será utilizado quando for necessário deletar informações do backend

        BOA PRÁTICA -- SEMPRE COLOCAR EM INGLES E EM PLURAL O NOME DAS ROTAS


        /*
         *  req.query == Acessar query params (para filtros)
         *  req.params == Acessar route params (para edição, delete)
         *  req.body == Acessar corpo da requisição (para criação, edição)
         */

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

//app.get('/users/', (req, res) => {

/*
    * => Podemos pegar informação da query string quando fizermos uma rota do tipo get
    *       utilizando a propriedade query da requisição. ex: req.query.query_param
    * 
    * => Geralmente utilizamos query params para filtrar algo, já que é plausível
    *       expor os filtros na url da rota
*/

    //return res.send('Hello World');
    //return res.json({ id: req.params.id });
//});

/* 
    => atribuição da porta que será executada a aplicação
        Ex.: localhost:3333
*/
app.listen(3333);

/*
    Para inicialização do servidor, utilizar o comando node src/server.js 
*/

// Sequelize (Como utilizar NodeJS com MySQL)