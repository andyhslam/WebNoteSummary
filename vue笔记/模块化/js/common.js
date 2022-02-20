var module2 = (function(module1) {
    var arr = [4, 5, 6]

    function setArr(param) {
        arr = param
    }

    function getArr() {
        return arr
    }
    return { setArr, getArr, changeBg: module1.changeBg }
})(module1)