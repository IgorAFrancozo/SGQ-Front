<template>
    <div class="product-card" style="align-items: center; justify-content: center;">
      <div class="product-card__image">
        <img :src="produto.image" alt="Imagem do produto">
      </div>
      <div class="product-card__info">
        <h2 class="product-card__name">{{ produto.nome }}</h2>
        <p class="product-card__description">{{ produto.descricao }}</p>
        <p class="product-card__price">R$ {{ produto.valor}}</p>
      </div>
      <div class="button">
        <div class="button-layer"></div>
        <button>Experimentar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      produto: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .product-card .button{
  position: relative;
  height: 50px;
  width: 100%;
  border-radius: 25px;
  margin-top: 30px;
  overflow: hidden;
}
.product-card .button .button-layer{
  position: absolute;
  height: 100%;
  width: 300%;
  left: -100%;
  background-image: linear-gradient(135deg,#000000, #43CBFF,#000000, #43CBFF );
  transition: all 0.4s ease;
  border-radius: 25PX;
}
.product-card .button:hover .button-layer{
  left: 0;
}
.product-card .button button{
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
  .product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 16px;
  height: 300px;
  width: 100%;
  max-width: 400px;
  margin: 20px 0px;
}

.product-card__image {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card__image img {
  max-width: 100%;
  max-height: 100%;
}

.product-card__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
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

@media (min-width: 768px) {
  .product-card {
    max-width: 270px;
    height: 400px;
    margin: 16px;
  }
}

@media (min-width: 1024px) {
  .product-card {
    max-width: 290px;
    height: 400px;
    margin: 16px;
  }
}

@media (min-width: 1280px) {
  .product-card {
    max-width: 310px;
    height: 500px;
    margin: 16px;
  }
} 

  </style>
  