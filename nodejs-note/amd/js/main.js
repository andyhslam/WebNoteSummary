require.config({
    baseUrl: 'js/', // 基础路径
    paths: {
        module1: 'modules/module1',
        module2: 'modules/module2',
        jquery: 'libs/jquery',
    }
})
require(['module2'], function(module2) {
    module2()
})