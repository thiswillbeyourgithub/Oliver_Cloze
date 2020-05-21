<!-- add  this line where you want the button to appear
you can add it several times
I put it at the top and at the bottom of my temlate to make it easier to click on mobile -->
<div class="biggerButtonOnlyOnMobile">
    <button id="show_button" onclick="resetClozes();" class="biggerButtonOnlyOnMobile">Reset</button>
    <button id="show_button" onclick="revealOne();" class="biggerButtonOnlyOnMobile">&nbsp&nbsp&nbsp&nbsp Reveal one &nbsp&nbsp&nbsp&nbsp</button>
</div>



<!-- Code for "cloze one by one"
     credits due to (at least! ) : iTraveller, /u/AnkingMed, /u/BlueGreenMagick, glume
-->


<script>
// reveals cloze one by one
var shortcutToReveal = ['n','ù'];
var shortcutToReset = ['N','%'];

aFade = 100, qFade = 75; // loads less fast to  fix the color being the wrong one
	const clozes = [...document.querySelectorAll(".cloze")];

    // use regular cloze instead of "cloze one by one" when there is only one cloze deletion ->
       if(clozes.length <= 1) {
           // don't show the buttons if there is only one cloze
           document.getElementById("show_button").style.display = "none";
       }; 
    if (clozes.length > 1) {
        const cloze_color = window.getComputedStyle(clozes[0]).color;
        const cloze_bg_color = window.getComputedStyle(clozes[0]).backgroundColor;
        clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_color;
            var imgs = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].style.visibility = "hidden";
            }
            item.addEventListener("click", () => {
                item.style.backgroundColor = cloze_bg_color;
                var imgs = item.getElementsByTagName("img");
                for (var i = 0; i < imgs.length; i++) {
                  imgs[i].style.visibility = "visible";
                }
            });
        });

        // "is included in" function, from stack overflow
        function include(arr, obj) {
          for (var i = 0; i < arr.length; i++) {
            if (arr[i] == obj) return true;
          }
        }
        document.addEventListener("keydown", (event) => {
            if (include(shortcutToReveal, event.key)) { revealOne(); };
            if (include(shortcutToReset, event.key)) { resetClozes(); };
        });

const revealOne = function() {
    clozes.slice(0).some((item) => {   
                    if (item.style.backgroundColor != cloze_bg_color) {
                        item.style.backgroundColor = cloze_bg_color;
                        var imgs = item.getElementsByTagName("img");
                        for(var i = 0; i < imgs.length; i++){ 
                            imgs[i].style.visibility = "visible";
                        };
                        return true;
                    }
                })
        };
const resetClozes = function() {
    clozes.slice(0).forEach((item) => {
            item.style.backgroundColor = cloze_color;
            var imgs = item.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].style.visibility = "hidden";
            }
    });
}
};
</script>


