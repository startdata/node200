let namespaceA = (function(){
    let privateVariable = '비공개 변수';
    return {
        publicApi: function (){
            console.log(privateVariable+ '를 접근할 수 있다.');
        }
    }
})();

namespaceA.publicApi();