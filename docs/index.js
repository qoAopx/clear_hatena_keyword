(function () {
    window.addEventListener('DOMContentLoaded', function () {
        while (document.getElementsByClassName('keyword').length > 0) {
            Array.prototype.forEach.call(document.getElementsByClassName('keyword'), function (e) {
                console.log(e);
                var nn = document.createTextNode(e.innerHTML);
                e.parentNode.replaceChild(nn, e);
            });
        }
    });
})();