<template>
	<form v-on:submit="cadastrarProduto">
		<div class="product-form">
			<label for="nome">Nome:</label>
			<input type="text" id="nome" name="nome" required v-model="nomeRef">
		</div>
		<div>
			<label for="descricao">Descrição:</label>
			<textarea id="descricao" name="descricao" required v-model="descricaoRef"></textarea>
		</div>
		<div>
			<label for="cor">Cor:</label>
			<input type="text" id="cor" name="cor" required v-model="corRef">
		</div>
		<div>
			<label for="tamanho">Tamanho:</label>
			<input type="text" id="tamanho" name="tamanho" required v-model="tamanhoRef">
		</div>
		<div>
			<label for="quantidade">Quantidade:</label>
			<input type="number" id="quantidade" name="quantidade" min="1" required v-model="quantidadeRef">
		</div>
		<div>
			<label for="valor">Valor:</label>
			<input type="number" id="valor" name="valor" min="1" step="0.01" required v-model="valorRef">
		</div>
		<div>
			<label for="categoria">Categoria:</label>
			<select id="categoria" name="categoria" required v-model="categoriaRef">
				<option value="" disabled selected>Selecione uma categoria</option>
				<option value="CALCADOS">Calçados</option>
				<option value="ACESSORIOS">Acessórios</option>
				<option value="ROUPAS">Roupas</option>
			</select>
		</div>
		<div>
			<label for="imagem">Imagem:</label>
			<input type="file" id="imagem" name="imagem" accept="image/*" @change="tratadorImagem">
		</div>

		<button type="submit">Cadastrar</button>
	</form>
</template>

<script>
import { defineComponent, ref } from 'vue';
import produtoDataService from '../services/ProdutoDataService';

export default defineComponent({
  setup() {
    const nomeRef = ref('');
    const descricaoRef = ref('');
    const corRef = ref('');
    const tamanhoRef = ref('');
    const quantidadeRef = ref(0);
    const valorRef = ref(0);
    const categoriaRef = ref('');
    const imagemRef = ref(null);

    const tratadorImagem = (event) => {
      try {
        const file = event.target.files[0];

        if (file) {
          const reader = new FileReader();

          reader.onload = () => {
            try {
              console.log(reader.result);
              alert('my file: ' + reader.result);
              imagemRef.value = reader.result;
            } catch (error) {
              console.error('Erro ao tratar a imagem:', error);
            }
          };

          reader.onerror = (error) => {
            console.error('Error:', error);
          };

          reader.readAsDataURL(file);
        } else {
          console.error('Arquivo inválido.');
        }
      } catch (error) {
        console.error('Erro ao ler o arquivo:', error);
      }
    };

    const cadastrarProduto = async () => {
      try {
        const nome = nomeRef.value;
        const descricao = descricaoRef.value;
        const cor = corRef.value;
        const tamanho = tamanhoRef.value;
        const quantidade = parseInt(quantidadeRef.value);
        const valor = parseFloat(valorRef.value);
        const categoria = categoriaRef.value;
        const imagem = imagemRef.value;

        const produto = {
          nome,
          descricao,
          cor,
          tamanho,
          quantidade,
          valor,
          categoria,
          imagem
        };

        // Chama o método salvarProduto do serviço de dados do produto
        await produtoDataService.salvarProduto(produto);
      } catch (error) {
        alert('Erro: ' + error);
        console.error('Erro ao cadastrar o produto:', error);
      }
    };

    return {
      tratadorImagem,
      cadastrarProduto,
      nomeRef,
      descricaoRef,
      corRef,
      tamanhoRef,
      quantidadeRef,
      valorRef,
      categoriaRef,
      imagemRef
    };
  }
});
</script>

<style>
form {
	max-width: 70vw;
	max-height: 70vh;
	margin: 0 auto;
}

form div {
	margin-bottom: 15px;
}

label {
	display: block;
	font-weight: bold;
}

input[type="text"],
textarea,
select {
	width: 100%;
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 4px;
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
</style>