<template>
    <div class="container">
        <h2>Administração</h2>
        <br />
        <router-link to="/admin/cadastrar" id="nomeBranco" class="nav-link active">
            <button class="btn btn-primary">Adicionar Produto</button>
        </router-link>
        <br />

        <div class="form-style" v-for="produto in produtos" :key="produto.id">
            <div class="form-actions">
                <h5 class="text">Produto: {{ produto.nome }}</h5>
                <p class="text">Cor: {{ produto.cor }}</p>
                <p class="text">Tamanho: {{ produto.tamanho }}</p>
                <p class="text">Valor: {{ produto.valor }}</p>
                <p class="text">Quantidade: {{ produto.quantidade }}</p>
                <button class="btn btn-primary" @click="editarProduto(produto)">Editar</button>
                <button class="btn btn-danger" @click="excluirProduto(produto.id)">Excluir</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import Produto from '../services/ProdutoDataService';

export default defineComponent({
    setup() {
        const router = useRouter();
        const produtos = ref([]);

        const carregarProdutos = async () => {
            try {
                const resposta = await Produto.listarProdutos();
                produtos.value = resposta.content;
            } catch (error) {
                console.error('Erro ao carregar produtos:', error);
            }
        };

        const editarProduto = (produto) => {
            router.push(`/admin/editar/${produto.id}`);
        };

        const excluirProduto = (produtoId) => {
            // Lógica para excluir o produto
        };

        onMounted(carregarProdutos);

        return {
            produtos,
            editarProduto,
            excluirProduto,
        };
    },
});
</script>

<style scoped>
.text {
    margin: 7px;
}

.form-style {
    justify-content: start;
    background-color: #f8f8f8;
    padding: 7px;
    margin: 2px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-actions {
    display: flex;
    justify-content: flex-start;
}

.btn {
    position: relative;
    margin-left: 7px;
}

.btn-primary {
    background-color: #007bff;
    color: #ffffff;
}

.btn-danger {
    background-color: #dc3545;
    color: #ffffff;
}

.btn {
    padding: 6px 12px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-weight: bold;
}
</style>