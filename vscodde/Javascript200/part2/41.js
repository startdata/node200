if (true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}
console.log(functionScopeValue); // global
console.log(blockScopeValue); //ReferenceError = 블록안에서만 접근가능하기 때문에