// var pizzas = ["Neapolitan Pizza",1000,
// "Chicago Pizza",900,
// "New York-Style Pizza",1000,
// "Sicilian Pizza",950,
// "Greek Pizza",950,
// "California Pizza",1000,
// "Detroit Pizza",850,
// "St. Louis Pizza",1000];

function getbuyid(clicked_id){
    var itemids = {items: clicked_id};
    var itemandPrice = {
        SicilianPizza: ["Sicilian Pizza",950],
        StLouisPizza: ["St. Louis Pizza",1000],
        CaliforniaPizza: ["California Pizza",1000],
        ChicagoPizza: ["Chicago Pizza",900],
        DetroitPizza: ["Detroit Pizza",850],
        GreekPizza: ["Greek Pizza",950],
        NeapolitanPizza: ["Neapolitan Pizza",1000],
        newyork: ["New York-Style Pizza",1000]
    }
    var gotten = itemids.items;
    // confirm(itemandPrice.gotten);
    if(gotten == "SicilianPizza"){
        var confirms = confirm("Name: "+ itemandPrice.SicilianPizza[0] + " "+ "Price: "+itemandPrice.SicilianPizza[1]+ " "+"Quantity" + " " +1);
           if(confirms == true){
               localStorage.setItem("tobebought",1);
               localStorage.setItem("Item",gotten);
               alert("added to cart");
           }else{
               alert("canceled");
           }
    }else if(gotten == "StLouisPizza"){
        var confirms = confirm("Name: "+ itemandPrice.StLouisPizza[0] + " "+ "Price: "+itemandPrice.StLouisPizza[1]+ " "+"Quantity" + " " +1);
           if(confirms == true){
               localStorage.setItem("tobebought",1);
               localStorage.setItem("Item",gotten);
               alert("added to cart");
           }else{
               alert("canceled");
           }
    }else if(gotten == "CaliforniaPizza"){
        var confirms = confirm("Name: "+ itemandPrice.CaliforniaPizza[0] + " "+ "Price: "+itemandPrice.CaliforniaPizza[1]+ " "+"Quantity" + " " +1);
           if(confirms == true){
               localStorage.setItem("tobebought",1);
               localStorage.setItem("Item",gotten);
               alert("added to cart");
           }else{
               alert("canceled");
           }
    }else if(gotten == "ChicagoPizza"){
        var confirms = confirm("Name: "+ itemandPrice.ChicagoPizza[0] + " "+ "Price: "+itemandPrice.ChicagoPizza[1]+ " "+"Quantity" + " " +1);
           if(confirms == true){
               localStorage.setItem("tobebought",1);
               localStorage.setItem("Item",gotten);
               alert("added to cart");
           }else{
               alert("canceled");
           }
    }else if(gotten == "DetroitPizza"){
        var confirms = confirm("Name: "+ itemandPrice.DetroitPizza[0] + " "+ "Price: "+itemandPrice.DetroitPizza[1]+ " "+"Quantity" + " " +1);
           if(confirms == true){
               localStorage.setItem("tobebought",1);
               localStorage.setItem("Item",gotten);
               alert("added to cart");
           }else{
               alert("canceled");
           }
    }else if(gotten == "GreekPizza"){
        var confirms = confirm("Name: "+ itemandPrice.GreekPizza[0] + " "+ "Price: "+itemandPrice.GreekPizza[1]+ " "+"Quantity" + " " +1);
           if(confirms == true){
               localStorage.setItem("tobebought",1);
               localStorage.setItem("Item",gotten);
               alert("added to cart");
           }else{
               alert("canceled");
           }
    }else if(gotten == "NeapolitanPizza"){
        var confirms = confirm("Name: "+ itemandPrice.NeapolitanPizza[0] + " "+ "Price: "+itemandPrice.NeapolitanPizza[1]+ " "+"Quantity" + " " +1);
           if(confirms == true){
               localStorage.setItem("tobebought",1);
               localStorage.setItem("Item",gotten);
               alert("added to cart");
           }else{
               alert("canceled");
           }
    }else{
        var confirms = confirm("Name: "+ itemandPrice.newyork[0] + " "+ "Price: "+itemandPrice.newyork[1]+ " "+"Quantity" + " " +1);
           if(confirms == true){
               localStorage.setItem("tobebought",1);
               localStorage.setItem("Item",gotten);
               alert("added to cart");
           }else{
               alert("canceled");
           }
    }

}