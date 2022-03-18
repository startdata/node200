class ProductWithCode {
    static get Code_PREFIX(){
        return "PRODUCT-"
    }

    constructor(id){
        this.id
        this.code = ProductWithCode.Code_PREFIX + id;
    }
}

const product1 = new ProductWithCode('001');
console.log(ProductWithCode.Code_PREFIX);
console.log(product1.code);