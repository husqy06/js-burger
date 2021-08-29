var btnCalculate = document.getElementById("calculate");

btnCalculate.addEventListener("click",
    function() {

        var cheese = document.getElementById("cheese");
        var egg = document.getElementById("egg");
        var mustard = document.getElementById("mustard");
        var tomato = document.getElementById("tomato");
        var lettuce = document.getElementById("lettuce");
        var ketchup = document.getElementById("ketchup");

        //imposto il prezzo base di 5 dollari
        var price = 5;
        document.getElementById("price").innerHTML ="$" + price;

        //imposto il prezzo di ogni aggiunta
        if(cheese.checked == true) {
            var cheesePrice = 1.5;
        }else{
            cheesePrice = 0;
        }

        if(egg.checked == true) {
            var eggPrice = 2;
        }else{
            eggPrice = 0;
        }

        if(mustard.checked == true) {
            var mustardPrice = 0.5;
        }else{
            mustardPrice = 0;
        }

        if(tomato.checked == true) {
            var tomatoPrice = 1;
        }else{
            tomatoPrice = 0;
        }

        if(lettuce.checked == true) {
            var lettucePrice = 1;
        }else{
            lettucePrice = 0;
        }

        if(ketchup.checked == true) {
            var ketchupPrice = 0.5;
        }else{
            ketchupPrice = 0;
        }

        //vedo se e' inserito un codice sconto
        var couponUser = document.getElementById("coupon-codex").value;
        var coupon = "12345ABCDEF";
        if (coupon = couponUser) {
            var sconto = 2;
        }else {
            sconto = 0;
        }

        //Compongo il prezzo totale
        var totalPrice = (price + cheesePrice + eggPrice + mustardPrice + tomatoPrice + ketchupPrice + lettucePrice) - sconto;

        document.getElementById("price").innerHTML ="$" + totalPrice;
    }
)