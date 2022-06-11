var module1 = (function($) {
    var arr = [1, 2, 3]
    console.log($);

    function setArr(param) {
        arr = param
    }

    function getArr() {
        return arr
    }

    function changeBg(color) {
        // document.body.style.background = color;
        $(function() {
            $(document.body).css('background', color);
        })
    }
    return { setArr, getArr, changeBg }
})(jQuery)