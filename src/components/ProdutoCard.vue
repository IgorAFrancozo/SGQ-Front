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
			
<template>
	<div class="product-container">
		<div class="product-card">
			<div class="product-card__image">
				<img :src="produto.image" alt="Imagem do produto">
			</div>
			<div class="product-card__info">
				<h2 class="product-card__name">{{ produto.nome }}</h2>
				<p class="product-card__description">{{ produto.descricao }}</p>
				<p class="product-card__color">{{ produto.cor }}</p>
				<p class="product-card__price">R$ {{ produto.valor }}</p>
			</div>
			<div class="button">
				<div class="button-layer"></div>
				<button>Experimentar</button>
			</div>
		</div>
	</div>
</template>
  
<style scoped>
.product-card .button {
	position: relative;
	height: 50px;
	width: 100%;
	border-radius: 25px;
	margin-top: 30px;
	overflow: hidden;
}

.product-card .button .button-layer {
	position: absolute;
	height: 100%;
	width: 300%;
	background-image: linear-gradient(135deg, #000000, #43CBFF, #000000, #43CBFF);
	transition: all 0.4s ease;
	border-radius: 25PX;
}

.product-card .button:hover .button-layer {
	left: 0;
}

.product-card .button button {
	position: relative;
	height: 100%;
	width: 100%;
	background: none;
	outline: none;
	border: none;
	font-size: 18px;
	font-weight: 600;
	letter-spacing: 1px;
	color: #fff;
}

.product-card__image {
	display: block;
	align-items: center;
	justify-content: center;
}

.product-card__image img {
	max-width: 200px;
	max-height: 200px;
}

.product-card__info {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

}

.product-card__name {
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 8px;
}

.product-card__description {
	font-size: 14px;
	margin-bottom: 8px;
}

.product-card__price {
	font-size: 18px;
	font-weight: bold;
}

.product-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.product-card {
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	align-self: center;
	justify-content: space-between;
	background-color: #fff;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	padding: 16px;
	height: 270px;
	margin: 30px 14px;
	margin-bottom: 30px;
}

@media (min-width: 768px) {
	.product-card {
		width: calc(33.33% - 16px);
	}
}

@media (min-width: 480px) {
	.product-card {
		width: calc(52% - 16px);
	}
}

@media (max-width: 479px) {
	.product-card {
		width: 90%;
	}
}
</style>
  