// IIFE -- Immediately Invoked Function Expression
(function(){

    function start()
    {
console.log("App started...");
    }
    window.addEventListener("load",start);

})();
document.getElementById("nextBtn").addEventListener("click", check, false);