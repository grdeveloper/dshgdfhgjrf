(function (window) {
    function toggleClassName(trg, cls) {
        trg.classList.toggle(cls);
    }

    function addRolls(els, cls) {
        for(var i = 0; i < els.length; i++){
            els[i].classList.add(cls);
        }
    }

    function removeRolls(els, cls) {
        for(var i = 0; i < els.length; i++){
            els[i].classList.remove(cls);
        }
    }

    function showHeader( head, headClass, viewPoint) {

        var windowDot = window.pageYOffset;
        if(windowDot > viewPoint){

            head.classList.add(headClass);
            head.style.zIndex = "5";
            addRolls(roll1, 'black-color');
            addRolls(headerLang, 'gray-lang');

        }else{

            head.classList.remove(headClass);
            removeRolls(roll1, 'black-color');
            removeRolls(headerLang, 'gray-lang');

        }

    }

    var typed = new Typed('.element', {
        strings : ["our wonderful guest house."],
        typeSpeed : 150,
        backDelay : 300,
        loop : true,
        smartBackspace: true
    });

    var counter = 0;

    function showDisplay(el) {
        var windowScroll = window.pageYOffset;

        if(windowScroll < counter){
            el.style.top = '0';
        }else{
            el.style.top = '';
        }
        counter = windowScroll;
    }

    function nameTitle() {
        var x = document.getElementById("block");
        document.onmousemove = function (event) {
            x.style.position = "fixed";
            x.style.left = event.clientX + 15 + "px";
            x.style.top = event.clientY + 15 + "px";
        };
    }

    var roll = document.getElementsByClassName("header-lines")[0];
    var roll1 = roll.getElementsByTagName("span");
    var body = document.body;
    var img = document.querySelector(".logoImg");
    var sliderMenu = document.getElementsByClassName("slide-menu")[0];

    var scrollButton = document.getElementsByClassName("header-scroll")[0];
    var button = scrollButton.getElementsByTagName("button")[0];
    var div = document.getElementsByClassName("fixed-header-start")[0];

    var divHeight = div.offsetTop;
    var fixedHeader = document.getElementsByClassName('header')[0];
    var headerLangBlog = fixedHeader.querySelector('.header-lang');
    var headerLang = headerLangBlog.querySelectorAll('a');

    var argArray = [roll1[0], roll1[1], roll1[2], body, sliderMenu, img, headerLangBlog, fixedHeader];
    var classes = ["first-span", "middle-span", "last-span", "body-overflow", "slider-down", "no-display", "no-display", "trans"];

    nameTitle();

    roll.addEventListener('click', function () {
        for(var i = 0; i < argArray.length; i++){
            toggleClassName(argArray[i], classes[i]);
        }
    });

    button.addEventListener('click', function go() {
        div.scrollIntoView({'behavior' : 'smooth', 'block' : 'start'});
    });

    window.addEventListener('scroll', function () {
        showHeader(fixedHeader, 'drop', divHeight);
    });

    window.addEventListener('scroll', function () {
        showDisplay(fixedHeader);
    });

    var d = document.querySelector(".maps");

    function initMap() {
        var options = {
            zoom: 8,
            center: {lat: 40.151986, lng: 44.483105}
        };
        var map = new google.maps.Map(d, options);
    }

    var options = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(d, options);

    function success(position) {
        var loc = new google.maps.LatLng(position.coords.latitude,
            position.coords.longitude);
        map.setCenter(loc);
        var label = new google.maps.InfoWindow();
        label.setContent("You are here!");
        label.setPosition(loc);
        label.open(map);
    }

    function error(err) {
        initMap();
    }

    params = {
        enableHighAccuracy: true,
        timeout: 10000
    };

    navigator
        .geolocation
        .getCurrentPosition(success, error, params);


})(window);



