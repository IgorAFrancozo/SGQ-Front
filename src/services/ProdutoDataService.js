import axios from 'axios';

const http = axios.create({
	baseURL: 'http://localhost:8080/',
	headers: {
		"Content-Type": "application/json"
	}
});

export default {
  listarProdutos: async () => {
    try {
      const resposta = await http.get('produtos');
      return resposta.data;
    } catch (error) {
      console.error('Erro ao listar produtos:', error);
      throw error;
    }
  },

  salvarProduto: async (produto) => {
    try {
      const resposta = await http.post('produtos', produto);
      return alert("Produto Cadastrado com Sucesso !" + resposta.data);
    } catch (error) {
      console.error('Erro ao salvar o produto:', error);
      throw error;
    }
  },
};
