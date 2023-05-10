<template>
  <div>
    <h1>Produtos esportivos</h1>
    <div class="product-list">
      <product-card v-for="produto in produtos" :key="produto.id" :produto="produto" />
    </div>
  </div>
</template>

<script>
import ProdutoCard from '../components/ProdutoCard.vue'
import Produto from '../services/ProdutoDataService'

export default {
  components: {
    'product-card': ProdutoCard
  },
  data() {
    return {
      produtos: []
    }
  },
  mounted() {
    Produto.listarProdutos().then(resposta => {
      console.log(resposta.content)
      this.produtos = resposta.content;
    });
  }
}
</script>

<style scoped>
</style>
