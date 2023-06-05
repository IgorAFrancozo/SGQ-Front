<template>
    <form v-on:submit="editarProduto">
        <div class="product-form">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required v-model="produto.nome">
        </div>
        <div>
            <label for="descricao">Descrição:</label>
            <textarea id="descricao" name="descricao" required v-model="produto.descricao"></textarea>
        </div>
        <div>
            <label for="cor">Cor:</label>
            <input type="text" id="cor" name="cor" required v-model="produto.cor">
        </div>
        <div>
            <label for="tamanho">Tamanho:</label>
            <input type="text" id="tamanho" name="tamanho" required v-model="produto.tamanho">
        </div>
        <div>
            <label for="quantidade">Quantidade:</label>
            <input type="number" id="quantidade" name="quantidade" min="1" required v-model="produto.quantidade">
        </div>
        <div>
            <label for="valor">Valor:</label>
            <input type="number" id="valor" name="valor" min="1" step="0.01" required v-model="produto.valor">
        </div>
        <div>
            <label for="categoria">Categoria:</label>
            <select id="categoria" name="categoria" required v-model="produto.categoria">
                <option value="" disabled selected>Selecione uma categoria</option>
                <option value="CALCADOS">Calçados</option>
                <option value="ACESSORIOS">Acessórios</option>
                <option value="ROUPAS">Roupas</option>
            </select>
        </div>
        <button type="submit">Editar</button>
    </form>
</template>

<script>
import { defineComponent } from 'vue';
import produtoDataService from '@/services/produtoDataService.js';

export default defineComponent({
  data() {
    return {
      produtoId: null,
      produto: {
        id: null,
        nome: '',
        descricao: '',
        cor: '',
        tamanho: '',
        quantidade: null,
        valor: null,
        categoria: ''
      }
    };
  },
  mounted() {
    this.produtoId = this.$route.params.id;
    this.carregarProduto();
  },
  methods: {
    async carregarProduto() {
      try {
        this.produto = await produtoDataService.obterProduto(this.produtoId);
      } catch (error) {
        console.error('Erro ao carregar o produto:', error);
      }
    },
    async editarProduto() {
      try {
        await produtoDataService.editarProduto(this.produtoId, this.produto);
        alert('Produto atualizado com sucesso!');
      } catch (error) {
        console.error('Erro ao editar o produto:', error);
      }
    }
  }
});
</script>


<style>
form {
    max-width: 70vw;
    max-height: 70vh;
    margin: 0 auto;
}

form div {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
}

input[type="text"],
textarea,
select {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    background-color: #136bdd;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0033be;
}
</style>