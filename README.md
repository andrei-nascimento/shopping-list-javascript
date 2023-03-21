# 🛒😸 Add to Cat - Lista de compras compartilhada (Web App)

A aplicação "Add To Cat" é um trocadilho de "Add to Cart", sendo uma lista de compras coletiva entre determinadas pessoas com temática felina.
O projeto foi desenvolvido em Javascript puro, utilizando CSS para estilização do layout. Pode ser usado também em dispositivos mobile já que possui responsividade.
O banco de dados escolhido foi o Firebase por ser simples, funcional e pela atualização dos dados em tempo real.

A ideia para construção do app veio de um curso de Firebase que realizei na plataforma Scrimba. Ótima opção para estudantes de tecnologia.

Acesso ao app: https://add-to-cat.netlify.app/

## Funcionamento

O app é bem intuitivo e possui apenas um botão que adiciona o item digitado na lista.
Para remover algum item da lista basta clicar ou tocar duas vezes no próprio item.

Caso o usuário tente adicionar algum item sem ter digitado nada no campo de input, será apresentada uma mensagem de erro solicitando o nome do produto.
A biblioteca utilizada para realizar essa tarefa se chama "SweetAlert".

Em situações em que a lista está vazia, um texto é exibido na tela dizendo que não há itens registrados. 

## Imagens

Tela principal:

![add-to-cat-img-pq](https://user-images.githubusercontent.com/76922943/226735324-6a84f345-3310-4030-9717-4f7d3e774044.png)

Mensagem de erro:

![add-to-cat-error-img-pq](https://user-images.githubusercontent.com/76922943/226735587-47c02cc8-15dc-4be9-84d4-8b004988590d.png)

## Features

- Criar tela de cadastro e login com a intenção de proteger os dados da aplicação.
- Criar uma variável de ambiente que "esconda" o link do banco de dados, podendo ser editado apenas pelo dono da aplicação.
