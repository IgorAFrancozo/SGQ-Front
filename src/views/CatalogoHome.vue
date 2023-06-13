<template>
  <div>
    <h1 class="titulo">Catálogo:</h1>
    <br>
    <div class="product-list">
      <product-card v-for="produto in produtos" :key="produto.id" :produto="produto" />
    </div>
  </div>
</template>

<script>
import ProdutoCard from '../components/ProdutoCard.vue';
import Produto from '../services/ProdutoDataService';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    'product-card': ProdutoCard,
  },
  data() {
    return {
      produtos: [],
    };
  },
  mounted() {
    Produto.listarProdutos().then(resposta => {
      console.log(resposta.content);
      this.produtos = resposta.content;
    });
  },
});
</script>

<style scoped>
.titulo {
	margin-top: 100px;
	text-align: center;
}
</style>
