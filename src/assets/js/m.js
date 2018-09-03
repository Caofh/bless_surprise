(function() {
    var html = document.documentElement;
    var setFontSize = function() {
        var width = document.documentElement.clientWidth || document.getBoundingClientRect().width;
        html.style.fontSize = width / 10 + 'px';
        width = null;
    };
    setFontSize();
    window.addEventListener('resize',function(){
        setFontSize();
    })
    window.addEventListener('orientationchange', function() {
        setFontSize();
    });
})();