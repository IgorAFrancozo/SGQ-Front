import { http } from './config';

export default {
	listarProdutos: async () => {
		let resposta = await http.get('produtos')
		return resposta.data;
	}
}