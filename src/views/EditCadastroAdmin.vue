<template>
    <form v-on:submit="editarAdmin">
	        <div class="product-form">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required v-model="admin.nome">
        </div>
        <div>
            <label for="email">Email:</label>
            <textarea id="email" name="email" required v-model="admin.email"></textarea>
        </div>
        <div>
            <label for="senha">Senha:</label>
            <input type="text" id="senha" name="senha" required v-model="admin.senha">
        </div>
        <button type="submit">Editar</button>
    </form>
</template>

<script>
import { defineComponent } from 'vue';
import adminDataService from '@/services/adminDataService.js';

export default defineComponent({
  data() {
    return {
      adminId: null,
      admin: {
        id: null,
        nome: '',
        email: '',
        senha: null,
      }
    };
  },
  mounted() {
    this.adminId = this.$route.params.id;
    this.carregarAdmin();
  },
  methods: {
    async carregarAdmin() {
      try {
        this.admin = await adminDataService.obterAdmin(this.adminId);
      } catch (error) {
        console.error('Erro ao carregar o admin:', error);
      }
    },
    async editarAdmin() {
      try {
        await adminDataService.editarAdmin(this.adminId, this.admin);
        alert('Admin atualizado com sucesso!');
      } catch (error) {
        console.error('Erro ao editar o admin:', error);
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