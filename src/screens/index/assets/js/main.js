$(document).ready(() => {

    $(".new").click(() => {
        location.href = "../main/flatpad.html"
    })

    var efl = true;
    var speed = 300;

    setInterval(() => {

        if(efl) {

            $(".efl").css({
                opacity: "0"
            });

            efl = false;

        } else {

            $(".efl").css({
                opacity: "1"
            });

            efl = true;

        }

    }, speed);

    $(".openfile").click(() => {

        $(".file").trigger("click");

        document.getElementById("file")
        .addEventListener('change', () => {

            var fr = new FileReader();

            fr.onload = function () {
                localStorage.setItem('data', fr.result);
                
                location.href = `../main/flatpad.html#${fr.result}`;
            }

            fr.readAsText(document.getElementById("file").files[0]);

        });
    });

})