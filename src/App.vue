<script setup>
import { RouterView } from 'vue-router'
import Cabecalho from './components/Cabecalho.vue';
import Rodape from './components/Rodape.vue';
</script>

<template>
	<div class="container">
		<Cabecalho/>
		<RouterView />
		<Rodape />
	</div>
</template>

<style scoped>
.container{
 margin-bottom: 0px;
 margin-top: 0px;
}
</style>
