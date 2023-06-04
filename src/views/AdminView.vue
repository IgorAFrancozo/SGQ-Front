<template>
    <div class="container">
        <h2>Administração:</h2>
        <br />
        <router-link to="/admin/cadastrarProduto" id="nomeBranco" class="nav-link active">
            <button class="btn btn-primary">Adicionar Produto</button>
        </router-link>
        <br />
        <router-link to="/admin/cadastrarAdmin" id="nomeBranco" class="nav-link active">
            <button class="btn btn-primary">Adicionar Novo Admin</button>
        </router-link>

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
    <div class="form-style" v-for="admin in admins" :key="admin.id">
        <div class="form-actions">
            <h5 class="text">Nome: {{ admin.nome }}</h5>
            <p class="text">Email: {{ admin.email }}</p>
            <p class="password">Senha: {{ admin.senha }}</p>
            <button class="btn btn-primary" @click="editarAdmin(admin)">Editar</button>
            <button class="btn btn-danger" @click="excluirAdmin(admin.id)">Excluir</button>
        </div>
    </div>
</template>
  
<script>
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import Produto from '../services/ProdutoDataService';
import Admin from '../services/AdminDataService';

export default defineComponent({
  setup() {
    const router = useRouter();
    const produtos = ref([]);
    const admins = ref([]);

    const carregarProdutos = async () => {
      try {
        const resposta = await Produto.listarProdutos();
        produtos.value = resposta.content;
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    };

    const carregarAdmins = async () => {
      try {
        const resposta = await Admin.listarAdmins();
        admins.value = resposta.content;
      } catch (error) {
        console.error('Erro ao carregar admins:', error);
      }
    };

    const editarProduto = (produto) => {
      router.push(`/admin/editar/produto/${produto.id}`);
    };

    const editarAdmin = (admin) => {
      router.push(`/admin/editar/admin${admin.id}`);
    };

    const excluirProduto = async (produtoId) => {
      try {
        await Produto.excluirProduto(produtoId);
        alert("Produto excluído com sucesso!");
        // Recarregar a lista de produtos após excluir
        await carregarProdutos();
      } catch (error) {
        console.error("Erro ao excluir o produto:", error);
      }
    };

    const excluirAdmin = async (adminId) => {
      try {
        await Admin.excluirAdmin(adminId);
        alert("Admin excluído com sucesso!");
        // Recarregar a lista de admins após excluir
        await carregarAdmins();
      } catch (error) {
        console.error("Erro ao excluir o admin:", error);
      }
    };

    onMounted(carregarProdutos);
    onMounted(carregarAdmins);

    return {
      produtos,
      admins,
      editarProduto,
      excluirProduto,
      editarAdmin,
      excluirAdmin,
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