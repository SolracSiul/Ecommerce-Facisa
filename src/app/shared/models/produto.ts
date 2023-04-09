export class Produto {
    constructor(
        public id?: number,
        public nome_produto?: string,
        public url_foto_produto?: string,
        public estoque?:number,
        public preco?: number
    ){}
}
