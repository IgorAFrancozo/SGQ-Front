<template>
    <form v-on:submit="cadastrarProduto">
		<h2 class="title">Adicionar Produto</h2>
        <div class="product-form caixa-texto">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" placeholder="Ex: Tênis Nike" name="nome" required v-model="nomeRef">
        </div>
        <div class="caixa-descricao">
            <label for="descricao">Descrição:</label>
            <textarea id="descricao" name="descricao" placeholder="Diga como é esse produto" required
                v-model="descricaoRef"></textarea>
        </div>
        <div class="caixa-texto">
            <label for="categoria">Categoria:</label>
            <select id="categoria" name="categoria" required v-model="categoriaRef">
                <option value="" disabled selected>Selecione uma categoria</option>
                <option value="CALCADOS">Calçados</option>
                <option value="ACESSORIOS">Acessórios</option>
                <option value="ROUPAS">Roupas</option>
            </select>
        </div>
        <div class="caixa-texto">
            <label for="cor">Cor:</label>
            <input type="text" id="cor" placeholder="Ex: Azul" name="cor" required v-model="corRef">
        </div>
        <div class="caixa-texto">
            <label for="tamanho">Tamanho:</label>
            <input type="text" id="tamanho" placeholder="Ex: 28" name="tamanho" required v-model="tamanhoRef">
        </div>
        <div class="caixa-texto">
            <label for="quantidade">Quantidade:</label>
            <input type="number" id="quantidade" placeholder="Ex: 3" name="quantidade" min="1" required
                v-model="quantidadeRef">
        </div>
        <div class="caixa-texto">
            <label for="valor">Valor:</label>
            <input type="number" id="valor" placeholder="Ex: R$150,00" name="valor" min="1" step="0.01" required
                v-model="valorRef">
        </div>

        <button type="submit">Cadastrar</button>
    </form>
</template>
  
<script>
import { defineComponent, ref } from 'vue';
import produtoDataService from '@/services/produtoDataService.js';
export default defineComponent({
    setup() {
        const cadastrarProduto = async () => {
            try {
                // Obtem os dados do formulário usando o sistema de referências do Vue 3
                const nome = nomeRef.value;
                const descricao = descricaoRef.value;
                const cor = corRef.value;
                const tamanho = tamanhoRef.value;
                const quantidade = parseInt(quantidadeRef.value);
                const valor = parseFloat(valorRef.value);
                const categoria = categoriaRef.value;

                // Cria um objeto com os dados do produto
                const produto = {
                    nome,
                    descricao,
                    cor,
                    tamanho,
                    quantidade,
                    valor,
                    categoria
                };

                // Chama o método salvarProduto do serviço de dados do produto
                await produtoDataService.salvarProduto(produto);


            } catch (error) {
                alert('Erro: ' + error)
                console.error('Erro ao cadastrar o produto:', error);
            }
        };

        // Cria as referências reativas para os elementos do formulário
        const nomeRef = ref('');
        const descricaoRef = ref('');
        const corRef = ref('');
        const tamanhoRef = ref('');
        const quantidadeRef = ref(0);
        const valorRef = ref(0);
        const categoriaRef = ref('');

        return {
            cadastrarProduto,
            nomeRef,
            descricaoRef,
            corRef,
            tamanhoRef,
            quantidadeRef,
            valorRef,
            categoriaRef
        };
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

.caixa-descricao textarea {
    width: 100%;
    background: #fbfbfbc4;
    height: 100px;
    margin: 0 !important;
    padding: 5px;
    border: 0.9px solid #dddddd;
    border-radius: 7px;
}

.title {
	margin-bottom: 30px;
}

.caixa-texto input,
.caixa-texto select {
    width: 100%;
    background: #fbfbfbc4;
    height: 40px;
    margin: 0 !important;
    padding: 5px;
    border: 0.9px solid #dddddd;
    border-radius: 7px;
}

.caixa-texto label,
.caixa-descricao label {
    font-family: sans-serif;
    font-size: 15px;
    margin-bottom: 8px;
    color: #3E3E3E;
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