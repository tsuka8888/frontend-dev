function hello(callBack){
    console.log('hello ' + callBack());
}

function getName(){
    return 'Code Mafia';
}

hello(getName);