<template>
	<form v-on:submit="cadastrarAdmin">
		<h1 class="titulo">Cadastro de Admin:</h1>
		<br />
		<div class="admin-form">
			<label for="nome">Nome:</label>
			<input type="text" id="nome" placeholder="Nome do admin" name="nome" required v-model="nomeRef" />
		</div>
		<div>
			<label for="email">Login:</label>
			<input type="text" id="email" placeholder="Email" name="login" required v-model="loginRef" />
		</div>
		<div>
			<label for="senha">Senha:</label>
			<input type="password" id="senha" name="senha" required v-model="senhaRef" />
		</div>
		<button type="submit">Cadastrar</button>
	</form>
</template>
  
<script>
import { defineComponent, ref } from 'vue';
import AdminService from '@/services/adminDataService.js';

export default defineComponent({
	setup() {
		// Cria as referências reativas para os elementos do formulário
		const nomeRef = ref('');
		const loginRef = ref('');
		const senhaRef = ref('');

		const cadastrarAdmin = async () => {
			try {
				// Obtem os dados do formulário usando o sistema de referências do Vue 3
				const nome = nomeRef.value;
				const login = loginRef.value;
				const senha = senhaRef.value;

				// Cria um objeto com os dados do admin
				const admin = {
					nome,
					login,
					senha,
				};

				// Chama o método salvarAdmin do serviço de dados do admin
				await AdminService.salvarAdmin(admin);
			} catch (error) {
				alert('Erro: ' + error);
				console.error('Erro ao cadastrar o admin:', error);
			}
		};

		return {
			cadastrarAdmin,
			nomeRef,
			loginRef,
			senhaRef,
		};
	},
});
</script>

<style>
form {
	max-width: 70vw;
	max-height: 70vh;
	margin: 0 auto;
	margin-bottom: 60px !important;

}

form div {
	margin-bottom: 15px;
}

label {
	display: block;
	font-weight: bold;
}

input[type="text"],
input[type="password"],
textarea,
select {
	width: 65%;
	padding: 5px;
	border: 2px solid #868686; /* Adicionando a borda personalizada */
	border-radius: 4px;
}

input[type="password"],
textarea,
select {
	width: 45%;
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

h1.titulo {
	margin-bottom: 25px !important;
	text-align: center;
}
</style>
