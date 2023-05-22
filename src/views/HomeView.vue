<template>
  <div>
    <h2 id="catalogo">Catálogo</h2>
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
#catalogo {
  margin-top: 10px;
  margin-left: 15px;
}
</style>
