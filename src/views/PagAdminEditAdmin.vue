<template>
	<form v-on:submit="editarAdmin">
		<h1 class="titulo">Edição de Admin:</h1>
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
		<button type="submit"></button>
	</form>
</template>
  
<script>
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AdminService from '@/services/adminDataService.js';

export default defineComponent({
	setup() {
		const router = useRouter();
		const nomeRef = ref('');
		const loginRef = ref('');
		const senhaRef = ref('');

		const editarAdmin = async () => {
			try {
				const nome = nomeRef.value;
				const login = loginRef.value;
				const senha = senhaRef.value;

				const admin = {
					nome,
					login,
					senha,
				};

				const adminId = router.currentRoute.value.params.id;
				await AdminService.editarAdmin(adminId, admin);
				alert('Admin atualizado com sucesso!');
				router.push('/admin');
			} catch (error) {
				alert('Erro: ' + error);
				console.error('Erro ao editar o admin:', error);
			}
		};

		const carregarAdmin = async () => {
			try {
				const adminId = router.currentRoute.value.params.id;
				const admin = await AdminService.obterAdmin(adminId);
				nomeRef.value = admin.nome;
				loginRef.value = admin.login;
				senhaRef.value = admin.senha;
			} catch (error) {
				console.error('Erro ao carregar o admin:', error);
			}
		};

		onMounted(async () => {
			await carregarAdmin();
		});

		return {
			editarAdmin,
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
