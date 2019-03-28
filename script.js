$(".hah").click(function(){
    var power = $(".power").val();
    var age = $(".age").val();


if(power === "running" && age<=21){
    $(".result").text("You are flash.");
    $(".flash").show();
    $(".arrow").hide();
    $(".supergirl").hide();
    $(".superman").hide();
}else if(power === "running" && age>=21){
    $(".result").text("You are arrow.");
    $(".arrow").show();
    $(".flash").hide();
    $(".supergirl").hide();
    $(".superman").hide();
}else if(power === "flying" && age<=21){
    $(".result").text("You are superman.");
    $(".superman").show();
    $(".flash").hide();
    $(".arrow").hide();
    $(".supergirl").hide();
}else if(power === "flying" && age >=21){
    $(".result").text("You are supergirl.");
    $(".supergirl").show();
    $(".flash").hide();
    $(".arrow").hide();
    $(".superman").hide();
}else{
    $(".result").text("try again");
    $(".tryagain").show();
}

});




