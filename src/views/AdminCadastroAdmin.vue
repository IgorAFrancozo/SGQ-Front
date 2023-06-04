<template>
    <form v-on:submit="cadastrarAdmin">
        <div class="admin-form">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required v-model="nomeRef">
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="text" id="nome" name="nome" required v-model="emailRef">
        </div>
        <div>
            <label for="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required v-model="senhaRef">
        </div>
        <button type="submit">Cadastrar</button>
    </form>
</template>
  
<script>
import { defineComponent, ref } from 'vue';
import adminDataService from '@/services/adminDataService.js';

export default defineComponent({
    setup() {
        const cadastrarAdmin = async () => {
            try {
                // Obtem os dados do formulário usando o sistema de referências do Vue 3
                const nome = nomeRef.value;
                const email = emailRef.value;
                const senha = parseInt(senhaRef.value);

                // Cria um objeto com os dados do admin
                const admin = {
                    nome,
                    email,
                    senha,
                };

                // Chama o método salvarAdmin do serviço de dados do admin
                await adminDataService.salvarAdmin(admin);

            } catch (error) {
                alert('Erro: ' + error)
                console.error('Erro ao cadastrar o admin:', error);
            }
        };

        // Cria as referências reativas para os elementos do formulário
        const nomeRef = ref('');
        const emailRef = ref('');
        const senhaRef = ref('');

        return {
            cadastrarAdmin,
            nomeRef,
            emailRef,
            senhaRef,
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

input[type="text"],
textarea,
select {
    width: 45%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
input[type="password"],
textarea,
select {
    width: 35%;
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