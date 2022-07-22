var botaoCalcular = document.querySelector("#botao-calcular");
botaoCalcular.addEventListener("click" , function(event){
    event.preventDefault();   
    //PAREDE 1    
    var parede1 = new Object ()
        parede1.altura = document.querySelector("#parede1-altura").value;
        parede1.largura = document.querySelector("#parede1-largura").value;
        parede1.portas = document.querySelector("#parede1-portas").value;
        parede1.janelas = document.querySelector("#parede1-janelas").value;
        parede1.areaParede = calcularAreaParede(parede1.altura, parede1.largura);
        parede1.areaPortas = calcularAreaPortas(parede1.portas);
        parede1.areaJanelas = calcularAreaJanelas(parede1.janelas);
        parede1.areaAberturas = calcularAreaAberturas(parede1.areaPortas, parede1.areaJanelas);
        parede1.areaPintura = calcularAreaPintura (parede1.areaParede, parede1.areaAberturas); 
    
    var parede1AreaValida = validaAreaParede(parede1.areaParede);
    var parede1AreaAberturasValida = validaAreaAberturas(parede1.areaParede, parede1.areaAberturas); 
    var parede1AlturaValida = validaAlturaParedeComPorta(parede1.portas, parede1.altura);
    //Incluir mensagens de erro no html para o usuário.
    if(parede1AreaValida == false){
        console.log("Erro: a área da parede 1 é inválida (menor de 1m² ou maior que 50m²), confira as medidas inseridas.");
    };
    if (parede1AreaAberturasValida == false){
        console.log("Erro: a área das aberturas da parede 1 excede 50% da área da parede, confira as medidas inseridas.");
    };
    if (parede1AlturaValida == false){
        console.log("Erro: a altura da parede 1 é insuficiente para conter uma porta, confira as medidas inseridas.");
    };

    //PAREDE 2
    var parede2 = new Object ()
        parede2.altura = document.querySelector("#parede2-altura").value;
        parede2.largura = document.querySelector("#parede2-largura").value;
        parede2.portas = document.querySelector("#parede2-portas").value;
        parede2.janelas = document.querySelector("#parede2-janelas").value;
        parede2.areaParede = calcularAreaParede(parede2.altura, parede2.largura);
        parede2.areaPortas = calcularAreaPortas(parede2.portas);
        parede2.areaJanelas = calcularAreaJanelas(parede2.janelas);
        parede2.areaAberturas = calcularAreaAberturas(parede2.areaPortas, parede2.areaJanelas);
        parede2.areaPintura = calcularAreaPintura (parede2.areaParede, parede2.areaAberturas); 
    
    var parede2AreaValida = validaAreaParede(parede2.areaParede);
    var parede2AreaAberturasValida = validaAreaAberturas(parede2.areaParede, parede2.areaAberturas); 
    var parede2AlturaValida = validaAlturaParedeComPorta(parede2.portas, parede2.altura);
    //Incluir mensagens de erro no html para o usuário.
    if(parede2AreaValida == false){
        console.log("Erro: a área da parede 2 é inválida (menor de 1m² ou maior que 50m²), confira as medidas inseridas.");
    };
    if (parede2AreaAberturasValida == false){
        console.log("Erro: a área das aberturas da parede 2 excede 50% da área da parede, confira as medidas inseridas.");
    };
    if (parede2AlturaValida == false){
        console.log("Erro: a altura da parede 2 é insuficiente para conter uma porta, confira as medidas inseridas.");
    };

    //PAREDE 3
    var parede3 = new Object ()
    parede3.altura = document.querySelector("#parede3-altura").value;
    parede3.largura = document.querySelector("#parede3-largura").value;
    parede3.portas = document.querySelector("#parede3-portas").value;
    parede3.janelas = document.querySelector("#parede3-janelas").value;
    parede3.areaParede = calcularAreaParede(parede3.altura, parede3.largura);
    parede3.areaPortas = calcularAreaPortas(parede3.portas);
    parede3.areaJanelas = calcularAreaJanelas(parede3.janelas);
    parede3.areaAberturas = calcularAreaAberturas(parede3.areaPortas, parede3.areaJanelas);
    parede3.areaPintura = calcularAreaPintura (parede3.areaParede, parede3.areaAberturas); 

    var parede3AreaValida = validaAreaParede(parede3.areaParede);
    var parede3AreaAberturasValida = validaAreaAberturas(parede3.areaParede, parede3.areaAberturas); 
    var parede3AlturaValida = validaAlturaParedeComPorta(parede3.portas, parede3.altura);
    //Incluir mensagens de erro no html para o usuário.
    if(parede3AreaValida == false){
    console.log("Erro: a área da parede 3 é inválida (menor de 1m² ou maior que 50m²), confira as medidas inseridas.");
    };
    if (parede3AreaAberturasValida == false){
    console.log("Erro: a área das aberturas da parede 3 excede 50% da área da parede, confira as medidas inseridas.");
    };
    if (parede3AlturaValida == false){
    console.log("Erro: a altura da parede 3 é insuficiente para conter uma porta, confira as medidas inseridas.");
    };
    
    //PAREDE 4
    var parede4 = new Object ()
        parede4.altura = document.querySelector("#parede4-altura").value;
        parede4.largura = document.querySelector("#parede4-largura").value;
        parede4.portas = document.querySelector("#parede4-portas").value;
        parede4.janelas = document.querySelector("#parede4-janelas").value;
        parede4.areaParede = calcularAreaParede(parede4.altura, parede4.largura);
        parede4.areaPortas = calcularAreaPortas(parede4.portas);
        parede4.areaJanelas = calcularAreaJanelas(parede4.janelas);
        parede4.areaAberturas = calcularAreaAberturas(parede4.areaPortas, parede4.areaJanelas);
        parede4.areaPintura = calcularAreaPintura (parede4.areaParede, parede4.areaAberturas); 
    
    var parede4AreaValida = validaAreaParede(parede4.areaParede);
    var parede4AreaAberturasValida = validaAreaAberturas(parede4.areaParede, parede4.areaAberturas); 
    var parede4AlturaValida = validaAlturaParedeComPorta(parede4.portas, parede4.altura);
    //Incluir mensagens de erro no html para o usuário.
    if(parede4AreaValida == false){
        console.log("Erro: a área da parede 4 é inválida (menor de 1m² ou maior que 50m²), confira as medidas inseridas.");
    };
    if (parede4AreaAberturasValida == false){
        console.log("Erro: a área das aberturas da parede 4 excede 50% da área da parede, confira as medidas inseridas.");
    };
    if (parede4AlturaValida == false){
        console.log("Erro: a altura da parede 4 é insuficiente para conter uma porta, confira as medidas inseridas.");
    };

    //CÁCULO DE TODAS AS PAREDES
    if (parede1AreaValida == true && parede1AreaAberturasValida == true && parede1AlturaValida == true){
        console.log(parede1);
        var parede1Valida = true;
    };
    
    if (parede2AreaValida == true && parede2AreaAberturasValida == true && parede2AlturaValida == true){
        console.log(parede2);
        var parede2Valida = true;
    };

    if (parede3AreaValida == true && parede3AreaAberturasValida == true && parede3AlturaValida == true){
        console.log(parede3);            
        var parede3Valida = true;
    };
    if (parede4AreaValida == true && parede4AreaAberturasValida == true && parede4AlturaValida == true){
        console.log(parede4);
        var parede4Valida = true;
    };
    if (parede1Valida == true && parede2Valida == true && parede3Valida == true && parede4Valida == true){
        var AreaTotalPintura = calcularAreaTotalPintura(parede1.areaPintura, parede2.areaPintura , parede3.areaPintura , parede4.areaPintura);
        var quantidadeTinta = calcularQuantidadeTinta(AreaTotalPintura);
        //Incluir no html para o usuário.
        console.log(AreaTotalPintura);
        console.log(quantidadeTinta);
        console.log(calcularQuantidadeLatas(quantidadeTinta));
    };
});

//funções que calculam as áreas da parede, das aberturas e da pintura.
function calcularAreaParede (altura, largura){
    var areaParede = altura * largura;
    return areaParede;
}

function calcularAreaPortas (portas) {
   var areaPortas = portas * 1.52;
    return areaPortas;
}

function calcularAreaJanelas (janelas) {
    var areaJanelas = janelas * 2.4;
    return areaJanelas;
}

function calcularAreaAberturas (areaPortas , areaJanelas){
    var areaAberturas = areaPortas + areaJanelas;
    return areaAberturas;
}

function calcularAreaPintura (areaParede, areaAberturas){
    areaPintura = areaParede - areaAberturas;
    return areaPintura;
}

//validações das medidas inseridas: área min e max da parede, área max das aberturas, altura min de parede com porta.
function validaAreaParede (areaParede){
    if (areaParede < 1 || areaParede > 50){
        return false;
    }else{
        return true;
    }
}

function validaAreaAberturas (areaParede, areaAberturas){
    if (areaAberturas > (areaParede*0,5)){
        return false;
    }else{
        return true;
    }
}

function validaAlturaParedeComPorta (numeroPortas, alturaParede){
    if(numeroPortas > 0){
        if(alturaParede < 2.2){
            return false;
        }else{
            return true;
        }
    }else{
        return true;
    }
}

//funções para calcular a quantidade de tinta e de latas.
function calcularAreaTotalPintura (parede1AreaPintura, parede2AreaPintura, parede3AreaPintura, parede4AreaPintura) {
    var areaTotalPintura = parede1AreaPintura + parede2AreaPintura + parede3AreaPintura + parede4AreaPintura;
    return areaTotalPintura;
}

function calcularQuantidadeTinta(areaTotalPintura){
    var quantidadeTinta = areaTotalPintura / 5;
    return quantidadeTinta;
}

function calcularQuantidadeLatas(quantidadeTinta){ 
    var latas = new Object; 
    latas.grande = 0;
    latas.media = 0;
    latas.pequena = 0;
    latas.mini = 0;

    while (quantidadeTinta >= 18){
        latas.grande++;
        quantidadeTinta = quantidadeTinta - 18;
    }
    while (quantidadeTinta >= 3.6){
        latas.media++;
        quantidadeTinta = quantidadeTinta - 3.6;
    }
    while (quantidadeTinta >= 2.5){
        latas.pequena++;
        quantidadeTinta = quantidadeTinta - 2.5;
    }
    while (quantidadeTinta > 0){
        latas.mini++;
        quantidadeTinta = quantidadeTinta - 0.5;
    }
    return latas;
}