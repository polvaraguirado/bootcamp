function caraocruz (){
    const numerorandom=(Math.round(Math.random()))
    return numerorandom
}
const resultadomoneda = caraocruz();

if (resultadomoneda === 0){

    console.log('Ha salido cruz')
    
}
    else{

    console.log('Ha salido cara')
}


