(function () {

    var bookBtn = document.querySelectorAll(".book-btn");
    var typeFormForm = document.getElementById("typeform-container");

    bookBtn.forEach(function (btn) {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                scrollTo(document.body, typeFormForm.offsetTop, 700);
        });
    });


    function scrollTo(element, to, duration) {
        if (duration <= 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function() {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) return;
            scrollTo(element, to, duration - 10);
        }, 10);
    }

})();