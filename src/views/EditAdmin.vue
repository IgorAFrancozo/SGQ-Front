<template>
	<form v-on:submit="editarAdmin">
		<div class="admin-form">
			<label for="nome">Nome:</label>
			<input type="text" id="nome" name="nome" required v-model="nomeRef" />
		</div>
		<div>
			<label for="email">Login:</label>
			<input type="text" id="email" name="login" required v-model="loginRef" />
		</div>
		<div>
			<label for="senha">Senha:</label>
			<input type="password" id="senha" name="senha" required v-model="senhaRef" />
		</div>
		<button type="submit">Salvar</button>
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
  