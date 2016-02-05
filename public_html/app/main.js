System.register(['angular2/platform/browser', './componente1'], function(exports_1) {
    var browser_1, componente1_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (componente1_1_1) {
                componente1_1 = componente1_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(componente1_1.MiComponente);
        }
    }
});
//# sourceMappingURL=main.js.map