// test for touch events support and if not supported, attach .no-touch class to the HTML tag.
 
if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += " no-touch";
    }
    
 // signature pad stuff
    
    var signaturePad = new SignaturePad(document.getElementById("signature-pad"), {
      backgroundColor: "rgba(255, 255, 255, 0)",
      penColor: "rgb(0, 0, 0)"
    });
    var cancelButton = document.getElementById("clear");
    
    cancelButton.addEventListener("click", function(event) {
      signaturePad.clear();
    });
    