define(['module1', 'jquery'], function(module1, $) {
    console.log(module1);
    $(function() {
        $(document.body).css('background', 'red')
    })
    return function() {
        console.log('syq');
    }
})