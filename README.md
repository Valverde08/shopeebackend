# 🛒 Shopping Cart API - Node.js

Um projeto backend simples em Node.js focado em simular as operações essenciais de um carrinho de compras para um e-commerce. A aplicação disponibiliza serviços básicos para gerenciamento de itens e cálculo de valores, ideal para entender a lógica por trás de um checkout.

## 🚀 Funcionalidades (Services)

A API foi desenhada para realizar as seguintes operações de negócio:

*   **Criar Item (`createItem`):** Simula o registro de um produto disponível no catálogo para ser consumido pelo carrinho.
*   **Adicionar Item (`addItem`):** Insere um novo item ao carrinho de compras ou incrementa a quantidade caso o item já exista.
*   **Remover Item (`removeItem`):** Reduz a quantidade de um item específico no carrinho.
*   **Deletar Item (`deleteItem`):** Remove o item completamente do carrinho, independente da quantidade atual.
*   **Calcular Subtotal (`calculateSubtotal`):** Percorre todos os itens ativos no carrinho e retorna a soma do valor total (preço $\times$ quantidade).

## 🛠️ Tecnologias Utilizadas

*   **Node.js**: Ambiente de execução.
*   *(Adicione aqui outras libs que você usou, como Express, Jest, etc.)*

## 📦 Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
