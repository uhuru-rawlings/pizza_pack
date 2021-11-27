var Objects = {
    SicilianPizza: ["Sicilian Pizza","false",950],
    StLouisPizza: ["St. Louis Pizza","false",1000],
    CaliforniaPizza: ["California Pizza","false",1000],
    ChicagoPizza: ["Chicago Pizza","false",900],
    DetroitPizza: ["Detroit Pizza","false",850],
    GreekPizza: ["Greek Pizza","false",950],
    NeapolitanPizza: ["Neapolitan Pizza","false",1000],
    newyork: ["New York-Style Pizza","false",1000]
};
var storeditems = localStorage.getItem("StoredItems");
if(storeditems){

} else{
    localStorage.setItem("StoredItems",Objects);
}

function getbuyid(clicked_id){
    // localStorage.setItem("StoredItems",Objects);
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
             var Item1 = ["Sicilian Pizza",950];
             localStorage.setItem("Item1",Item1);
             alert("added to cart");
           }else{
               alert("canceled");
           }
    }else if(gotten == "StLouisPizza"){
        var confirms = confirm("Name: "+ itemandPrice.StLouisPizza[0] + " "+ "Price: "+itemandPrice.StLouisPizza[1]+ " "+"Quantity" + " " +1);
           if(confirms == true){
               var Item2 = ["St. Louis Pizza",1000];
               localStorage.setItem("Item2",Item2);
               alert("added to cart");
           }else{
               alert("canceled");
           }
    }else if(gotten == "CaliforniaPizza"){
        var confirms = confirm("Name: "+ itemandPrice.CaliforniaPizza[0] + " "+ "Price: "+itemandPrice.CaliforniaPizza[1]+ " "+"Quantity" + " " +1);
           if(confirms == true){
               var Item3 = ["California Pizza",1000];
               localStorage.setItem("Item3",Item3);
               alert("added to cart");
           }else{
               alert("canceled");
           }
    }else if(gotten == "ChicagoPizza"){
        var confirms = confirm("Name: "+ itemandPrice.ChicagoPizza[0] + " "+ "Price: "+itemandPrice.ChicagoPizza[1]+ " "+"Quantity" + " " +1);
           if(confirms == true){
               var Item4 = ["Chicago Pizza",900];
               localStorage.setItem("Item4",Item4);
               alert("added to cart");
           }else{
               alert("canceled");
           }
    }else if(gotten == "DetroitPizza"){
        var confirms = confirm("Name: "+ itemandPrice.DetroitPizza[0] + " "+ "Price: "+itemandPrice.DetroitPizza[1]+ " "+"Quantity" + " " +1);
           if(confirms == true){
               var Item5 = ["Detroit Pizza",850];
               localStorage.setItem("Item5",Item5);
               alert("added to cart");
           }else{
               alert("canceled");
           }
    }else if(gotten == "GreekPizza"){
        var confirms = confirm("Name: "+ itemandPrice.GreekPizza[0] + " "+ "Price: "+itemandPrice.GreekPizza[1]+ " "+"Quantity" + " " +1);
           if(confirms == true){
               var Item6 = ["Greek Pizza",950];
               localStorage.setItem("Item6",Item6);
               alert("added to cart");
           }else{
               alert("canceled");
           }
    }else if(gotten == "NeapolitanPizza"){
        var confirms = confirm("Name: "+ itemandPrice.NeapolitanPizza[0] + " "+ "Price: "+itemandPrice.NeapolitanPizza[1]+ " "+"Quantity" + " " +1);
           if(confirms == true){
               var Item7 = ["Neapolitan Pizza",1000];
               localStorage.setItem("Item7",Item7);
               alert("added to cart");
           }else{
               alert("canceled");
           }
    }else{
        var confirms = confirm("Name: "+ itemandPrice.newyork[0] + " "+ "Price: "+itemandPrice.newyork[1]+ " "+"Quantity" + " " +1);
           if(confirms == true){
               var Item8 = ["New York-Style Pizza",1000];
               localStorage.setItem("Item8",Item8);
               alert("added to cart");
           }else{
               alert("canceled");
           }
    }



}