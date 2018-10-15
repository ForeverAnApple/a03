async function bong() {
    $("#cat").attr("src", "img/bongo2.png");
    console.log("BONG!");
    setTimeout(function(){
        $("#cat").attr("src", "img/bongo1.png");
        console.log("Finished BONG!");
    }, 250);
}
