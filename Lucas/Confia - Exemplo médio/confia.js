
function pegadinhaTrigger() {
    var pegadinhaContainer = document.getElementById("pegadinha");
    pegadinhaContainer.style.display = "block";
    setTimeout(function() {
        pegadinhaContainer.style.display = "none";
        alert("Boa sorte na procura de estágio pequeno gafanhoto...");
    }, 5000);
}