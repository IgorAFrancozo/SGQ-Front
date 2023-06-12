import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 7000,
});

export default {
    listarProdutos: async () => {
        try {
            const resposta = await http.get("produtos");
            return resposta.data;
        } catch (error) {
            console.error("Erro ao listar produtos:", error);
            throw error;
        }
    },

    listarProdutosInativos: async () => {
        try {
            const respostaInativos = await http.get("produtos/inativos");
            return respostaInativos.data;
        } catch (error) {
            console.error("Erro ao listar produtos:", error);
            throw error;
        }
    },

    obterProduto: async (id) => {
        try {
            const resposta = await http.get(`produtos/${id}`);
            return resposta.data;
        } catch (error) {
            console.error("Erro ao obter o produto:", error);
            throw error;
        }
    },

    editarProduto: async (id, produto) => {
        try {
            const resposta = await http.put(`produtos/${id}`, produto);
            console.log(resposta);
            return alert("Produto atualizado com sucesso!");
        } catch (error) {
            console.log("Erro ao editar o produto:", error);
        }
    },

    excluirProduto: async (id) => {
        try {
            await http.delete(`produtos/${id}`);
        } catch (error) {
            console.error("Erro ao excluir o produto:", error);
            throw error;
        }
    },

    salvarProduto: async (produto) => {
        try {
            const produtoComImagemBase64 = {
                ...produto,
                imagem: produto.imagem.split(",")[1], // Obtém apenas o conteúdo em base64, excluindo o prefixo "data:image/jpeg;base64,"
            };
            const resposta = await http.post("produtos", produtoComImagemBase64);
            console.log(resposta);
            return alert("Produto cadastrado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar o produto:", error);
            throw error;
        }
    },
};