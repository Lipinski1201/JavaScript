class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];


    }

    salvar() {
        let produto = this.lerDados();

        if(this.validaCampos(produto)) {
            this.adicionar(produto);
            

        }

       console.log()



    }

    listaTabela() {
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayProdutos.length; i++ ) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor= tr.insertCell();
            let td_acoes = tr.insertCell();
        }
    }

    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++;

    }

    lerDados() {
        let produto = {}


        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;

        return produto;

 
    }

    validaCampo(produto) {
        let msg = '';


        if (produto.nomeProduto == '') {
            msg += '- Informe o Nome do Produto \n';

        }
        if (produto.preco == '') {
            msg += '- Informe o Preço do Produto \n';

        }
        if(msg != ''){
            alert(msg);
            return false
        }
        return true;

    }

    cancelar() {


    }
}

var produto = new Produto();


