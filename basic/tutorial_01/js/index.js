console.log("I'm not READY!")


document.addEventListener("DOMContentLoaded", () => {
    
    console.log("Loaded Finish!");
    const button = document.getElementById("openMapButton");
    button.addEventListener("click", () => {
        console.log("Hit Hit Hit");
    });

});