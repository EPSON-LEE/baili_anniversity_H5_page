


window.onload = load;

var img_first = './img/first-page/';
var loading_page = './img/loading-page/';
var prize_page = './img/prize-page/';
var rule_page = './img/rule-page/';
var share = './img/share/';
var transport_failed_page = './img/transport-failed-page/';

var bar;
var post;


function changePage(){
    post = document.getElementById("load");
    post.style.display = "none";
}

function load(){
    bar = document.getElementById('bar');
    startLoading();
}


function loadDom(){

    var imgTag = document.getElementsByTagName("img");
    for(var i in imgTag){
        if(imgTag[i].id == "load-cloud" || imgTag[i].id == "static-page" || imgTag[i].id == "load-bg"){

        }else {
            if(imgTag[i].dataset) {
                console.log(imgTag[i].dataset.src);
                imgTag[i].src = imgTag[i].dataset.src;
            }
        }
    }
}
function startLoading() {
     manifest = [
        {src:  './css/style.css'},
        {src:  './css/idangerous.swiper.css'},

        {src:  'js/idangerous.swiper.min.js'},
        {src:  'js/preloadjs-0.6.1.min.js'},

        {src:  img_first + 'ad.png'},
        {src:  img_first + 'cd.png'},
        {src:  img_first + 'cd-space.png'},
        {src:  img_first + 'finish-button.png'},
        {src:  img_first + 'left-bottom-cloud.png'},
        {src:  img_first + 'left-cloud.png'},
        {src:  img_first + 'right-middle-cloud.png'},
        {src:  img_first + 'school-flower.png'},
        {src:  img_first + 'start-press-button.png'},
        {src:  img_first + 'static.png'},

        {src:  loading_page + 'cloud.png'},
        {src:  loading_page + 'loading.png'},
        {src:  loading_page + 'static.png'},


        {src:  prize_page + 'bg.jpg'},
        {src:  prize_page + 'cd.png'},
        {src:  prize_page + 'left-bottom.png'},
        {src:  prize_page + 'right-bottom.png'},
        {src:  prize_page + 'right-top.png'},
        {src:  prize_page + 'shadow.png'},
        {src:  prize_page + 'showBoard.png'},
        {src:  prize_page + 'space.png'},
        {src:  prize_page + 'tips-bottom.png'},
        {src:  prize_page + 'tips-top.png'},

        {src:  rule_page + 'rule.png'},

        {src:  share + '1.png'},
        {src:  share + '2.png'},
        {src:  share + '3.png'},
        {src:  share + '4.png'},
        {src:  share + '5.png'},
        {src:  share + '6.png'},
        {src:  share + 'left-bottom.png'},
        {src:  share + 'left-middle.png'},
        {src:  share + 'left-top.png'},
        {src:  share + 'right-bottom.png'},
        {src:  share + 'right-two.png'},
        {src:  share + 'static.png'},

        {src:  transport_failed_page + 'left-middle.png'},
        {src:  transport_failed_page + 'right-bottom.png'},
        {src:  transport_failed_page + 'right-top.png'},
        {src:  transport_failed_page + 'tips-top.png'},
        {src:  transport_failed_page + 'trans-faile.png'}

    ];

    var preload;

    preload = new createjs.LoadQueue(false);
    preload.setMaxConnections(30);
    preload.on("progress", handleProgress);
    preload.on("complete", handleComplete);
    preload.loadManifest(manifest);

    function handleComplete(event) {
        bar.style.width = '26.5%';
        loadDom();
        changePage();
        event.preventDefault();
    }
    function handleProgress(event) {
        var progress = event.progress;
        bar.style.width = progress * 20 +'%';
    }
}
