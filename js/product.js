import { ajaxRequest } from "./ajax.js";
import { methods } from "./constants.js";
import { findGetParameter } from "./helper.js";
$(document).ready(function () {
    $(".sidebarButton").mouseover(function () {
        $(this).removeClass('socialite-small')
    });
    $(".sidebarButton").mouseleave(function () {
        $(this).addClass('socialite-small')
    });

    var slideList = Array.from($(".mySlide"));
    let currentIndexSlide = 0, nextIndexSlide = 1;
    function showSlide() {
        $(slideList[currentIndexSlide]).removeClass('show');
        $(slideList[nextIndexSlide]).addClass('show');
        currentIndexSlide = nextIndexSlide;
        if (currentIndexSlide < slideList.length - 1) {
            nextIndexSlide++;
        }
        else { nextIndexSlide = 0 };
    }
    function preSlide(){
        console.log(111);
        $(slideList[currentIndexSlide]).removeClass('show');
        $(slideList[nextIndexSlide]).addClass('show');
        currentIndexSlide=nextIndexSlide;
        if (currentIndexSlide>0) {
            nextIndexSlide--;
        }
        else {nextIndexSlide=slideList.length-1};
    }
    $('#next').click(showSlide);
    $('#pre').click(preSlide);
    showSlide();
    setInterval(showSlide, 5000);
    $(document).scroll(function () {
        if (window.pageYOffset > 55) {
            $('.navbar').addClass('scrolldown');
        }
        else {
            $('.navbar').removeClass('scrolldown');
        }
    })
    const getRequest = ajaxRequest(methods.get, 'https://dummyjson.com/products/' + findGetParameter('productId'));
    getRequest.then(function (product) {
        $('#title').text(`${product.title}`);
        $('#productPhoto').append(`<img src="${product.thumbnail}" alt="test">`);
        product.images.forEach(pic => {
            $('#productThumbs').append(`<li class="thumbnailItem">
            <img src="${pic}" alt="test">
            </li>`)
        });
        $('#brand').text(`Thương hiệu: ${product.brand} | Loại: ${product.category}`);
        $('#cost').text(`${product.price}$`)
    })
})
