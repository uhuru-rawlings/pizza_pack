const increments = () =>{
    var curentQuantity = parseInt(document.getElementById("itemquantity").innerText);
    var currentPrice = parseInt(document.getElementById("price1").innerText);
    var totalPrice = document.getElementById("tottla1").value = currentPrice;

    if(curentQuantity == 1 || curentQuantity <= 4){
        document.getElementById("itemquantity").innerText = curentQuantity + 1;
    }
    document.getElementById("tottla1").value = (curentQuantity + 1) * totalPrice;
}
const decrements = () =>{
    var curentQuantity = parseInt(document.getElementById("itemquantity").innerText);
    var currentPrice = parseInt(document.getElementById("price1").innerText);
    var totalPrice = document.getElementById("tottla1").innerText = currentPrice;

    if(curentQuantity >= 1){
        if(curentQuantity == 0){
            curentQuantity = 0;
            document.getElementById("tottla1").innerText = 0;
        }else{
            var newcurentQuantity = document.getElementById("itemquantity").innerText = curentQuantity - 1;
            document.getElementById("tottla1").value = (newcurentQuantity - 1) * totalPrice;
        }
    }
}
// second item
const increments1 = () =>{
    var curentQuantity = parseInt(document.getElementById("itemquantity2").innerText);
    var currentPrice = parseInt(document.getElementById("price2").innerText);
    var totalPrice = document.getElementById("tottla2").innerText = currentPrice;

    if(curentQuantity == 1 || curentQuantity <= 4){
        document.getElementById("itemquantity2").innerText = curentQuantity + 1;
    }
    document.getElementById("tottla2").value = (curentQuantity + 1) * totalPrice;
}
const decrements1 = () =>{
    var curentQuantity = parseInt(document.getElementById("itemquantity2").innerText);
    var currentPrice = parseInt(document.getElementById("price2").innerText);
    var totalPrice = document.getElementById("tottla2").innerText = currentPrice;

    if(curentQuantity >= 1){
        if(curentQuantity == 0){
            curentQuantity = 0;
            document.getElementById("tottla2").innerText = 0;
        }else{
            var newcurentQuantity = document.getElementById("itemquantity2").innerText = curentQuantity - 1;
            document.getElementById("tottla2").value = (newcurentQuantity - 1) * totalPrice;
        }
    }
}
// thirditem
const increments2 = () =>{
    var curentQuantity = parseInt(document.getElementById("itemquantity3").innerText);
    var currentPrice = parseInt(document.getElementById("price3").innerText);
    var totalPrice = document.getElementById("tottla3").innerText = currentPrice;

    if(curentQuantity == 1 || curentQuantity <= 4){
        document.getElementById("itemquantity3").innerText = curentQuantity + 1;
    }
    document.getElementById("tottla3").value = (curentQuantity + 1) * totalPrice;
}
const decrements2 = () =>{
    var curentQuantity = parseInt(document.getElementById("itemquantity3").innerText);
    var currentPrice = parseInt(document.getElementById("price3").innerText);
    var totalPrice = document.getElementById("tottla3").innerText = currentPrice;

    if(curentQuantity >= 1){
        if(curentQuantity == 0){
            curentQuantity = 0;
            document.getElementById("tottla3").innerText = 0;
        }else{
            var newcurentQuantity = document.getElementById("itemquantity3").innerText = curentQuantity - 1;
            document.getElementById("tottla3").value = (newcurentQuantity - 1) * totalPrice;
        }
    }
}
// fouth
const increments3 = () =>{
    var curentQuantity = parseInt(document.getElementById("itemquantity4").innerText);
    var currentPrice = parseInt(document.getElementById("price4").innerText);
    var totalPrice = document.getElementById("tottla4").innerText = currentPrice;

    if(curentQuantity == 1 || curentQuantity <= 4){
        document.getElementById("itemquantity4").innerText = curentQuantity + 1;
    }
    document.getElementById("tottla4").value = (curentQuantity + 1) * totalPrice;
}
const decrements3 = () =>{
    var curentQuantity = parseInt(document.getElementById("itemquantity4").innerText);
    var currentPrice = parseInt(document.getElementById("price4").innerText);
    var totalPrice = document.getElementById("tottla4").innerText = currentPrice;

    if(curentQuantity >= 1){
        if(curentQuantity == 0){
            curentQuantity = 0;
            document.getElementById("tottla4").innerText = 0;
        }else{
            var newcurentQuantity = document.getElementById("itemquantity4").innerText = curentQuantity - 1;
            document.getElementById("tottla4").value = (newcurentQuantity - 1) * totalPrice;
        }
    }
}
// fifth
const increments4 = () =>{
    var curentQuantity = parseInt(document.getElementById("itemquantity5").innerText);
    var currentPrice = parseInt(document.getElementById("price5").innerText);
    var totalPrice = document.getElementById("tottla5").innerText = currentPrice;

    if(curentQuantity == 1 || curentQuantity <= 4){
        document.getElementById("itemquantity5").innerText = curentQuantity + 1;
    }
    document.getElementById("tottla5").value = (curentQuantity + 1) * totalPrice;
}
const decrements4 = () =>{
    var curentQuantity = parseInt(document.getElementById("itemquantity5").innerText);
    var currentPrice = parseInt(document.getElementById("price5").innerText);
    var totalPrice = document.getElementById("tottla5").innerText = currentPrice;

    if(curentQuantity >= 1){
        if(curentQuantity == 0){
            curentQuantity = 0;
            document.getElementById("tottla5").innerText = 0;
        }else{
            var newcurentQuantity = document.getElementById("itemquantity5").innerText = curentQuantity - 1;
            document.getElementById("tottla5").value = (newcurentQuantity - 1) * totalPrice;
        }
    }
}
// sixth
const increments5 = () =>{
    var curentQuantity = parseInt(document.getElementById("itemquantity6").innerText);
    var currentPrice = parseInt(document.getElementById("price6").innerText);
    var totalPrice = document.getElementById("tottla6").innerText = currentPrice;

    if(curentQuantity == 1 || curentQuantity <= 4){
        document.getElementById("itemquantity6").innerText = curentQuantity + 1;
    }
    document.getElementById("tottla6").value = (curentQuantity + 1) * totalPrice;
}
const decrements5 = () =>{
    var curentQuantity = parseInt(document.getElementById("itemquantity6").innerText);
    var currentPrice = parseInt(document.getElementById("price6").innerText);
    var totalPrice = document.getElementById("tottla6").innerText = currentPrice;

    if(curentQuantity >= 1){
        if(curentQuantity == 0){
            curentQuantity = 0;
            document.getElementById("tottla6").innerText = 0;
        }else{
            var newcurentQuantity = document.getElementById("itemquantity6").innerText = curentQuantity - 1;
            document.getElementById("tottla6").value = (newcurentQuantity - 1) * totalPrice;
        }
    }
}
// seventh
const increments6 = () =>{
    var curentQuantity = parseInt(document.getElementById("itemquantity7").innerText);
    var currentPrice = parseInt(document.getElementById("price7").innerText);
    var totalPrice = document.getElementById("tottla7").innerText = currentPrice;

    if(curentQuantity == 1 || curentQuantity <= 4){
        document.getElementById("itemquantity7").innerText = curentQuantity + 1;
    }
    document.getElementById("tottla7").value = (curentQuantity + 1) * totalPrice;
}
const decrements6 = () =>{
    var curentQuantity = parseInt(document.getElementById("itemquantity7").innerText);
    var currentPrice = parseInt(document.getElementById("price7").innerText);
    var totalPrice = document.getElementById("tottla7").innerText = currentPrice;

    if(curentQuantity >= 1){
        if(curentQuantity == 0){
            curentQuantity = 0;
            document.getElementById("tottla7").innerText = 0;
        }else{
            var newcurentQuantity = document.getElementById("itemquantity7").innerText = curentQuantity - 1;
            document.getElementById("tottla7").value = (newcurentQuantity - 1) * totalPrice;
        }
    }
}
// eighth
const increments7 = () =>{
    var curentQuantity = parseInt(document.getElementById("itemquantity8").innerText);
    var currentPrice = parseInt(document.getElementById("price8").innerText);
    var totalPrice = document.getElementById("tottla8").innerText = currentPrice;

    if(curentQuantity == 1 || curentQuantity <= 4){
        document.getElementById("itemquantity8").innerText = curentQuantity + 1;
    }
    document.getElementById("tottla8").value = (curentQuantity + 1) * totalPrice;
}
const decrements7 = () =>{
    var curentQuantity = parseInt(document.getElementById("itemquantity8").innerText);
    var currentPrice = parseInt(document.getElementById("price8").innerText);
    var totalPrice = document.getElementById("tottla8").innerText = currentPrice;

    if(curentQuantity >= 1){
        if(curentQuantity == 0){
            curentQuantity = 0;
            document.getElementById("tottla8").innerText = 0;
        }else{
            var newcurentQuantity = document.getElementById("itemquantity8").innerText = curentQuantity - 1;
            document.getElementById("tottla8").value = (newcurentQuantity - 1) * totalPrice;
        }
    }
}

