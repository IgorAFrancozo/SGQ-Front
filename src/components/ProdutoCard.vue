<template>
	<div class="product-container">
	  <div class="product-card bordered">
		<div class="product-card__image">
		  <img :src="produto.imagem" alt="Imagem do produto">
		</div>
		<div class="product-card__info">
		  <h2 class="product-card__name">{{ produto.nome }}</h2>
		  <p class="product-card__description">Descrição: {{ produto.descricao }}</p>
		  <p class="product-card__color">Cor: {{ produto.cor }}</p>
		  <div class="product-card__bottom">
			<div class="product-card__price">R$ {{ produto.valor }}</div>
			<div class="button">
			  <div class="button-layer"></div>
			  <button>Experimentar</button>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		produto: {
			type: Object,
			required: true
		}
	},
});

</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(134, 56, 56, 0.1);
  border-radius: 4px;
  padding: 16px;
  height: 190px;
  margin: 30px 14px;
  margin-bottom: 30px;
}

.bordered {
  border: 2px solid #868686;
}

.product-card__image {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	margin-right: 16px;
}

.product-card__image img {
	max-width: 200px;
	max-height: 200px;
}

.product-card__info {
	display: flex;
	margin-left: 40px;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
}

.product-card__name {
	font-size: 18px;
	margin-top: 2px;
	font-weight: bold;
	margin-bottom: 8px;
}

.product-card__description {
	font-size: 14px;
	margin-bottom: 8px;
}

.product-card__color {
	font-size: 14px;
	margin-bottom: 8px;
}

.product-card__bottom {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-start;
	width: 100%;
	margin-top: -10px; /* Ajusta o posicionamento do valor */
}

.product-card__price {
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 54px; /* Diminui o espaçamento inferior do valor */
	margin-right: -6px; /* Ajusta o posicionamento do botão */
	margin-top: -86px; /* Ajusta o posicionamento do valor */
}

.button {
	position: relative;
	height: 37px; /* Ajusta a altura do botão */
	width: 170px; /* Ajusta a largura do botão */
	border-radius: 20px; /* Ajusta o raio do botão */
	overflow: hidden;
	margin-top: 8px; /* Ajusta o espaçamento superior do botão */
	margin-right: -10px; /* Ajusta o posicionamento do botão */
}

.button .button-layer {
	position: absolute;
	height: 100%;
	width: 300%;
	background-image: linear-gradient(135deg, #000000, #43CBFF, #000000, #43CBFF);
	transition: all 0.4s ease;
	border-radius: 20px; /* Ajusta o raio do botão */
}

.button:hover .button-layer {
	left: 0;
}

.button button {
	position: relative;
	height: 100%;
	width: 100%;
	background: none;
	outline: none;
	border: none;
	font-size: 16px;
	font-weight: 600;
	letter-spacing: 1px;
	color: #fff;
}
</style>
