import { ajaxRequest } from "./ajax.js";
import { methods } from "./constants.js";
$(document).ready(function() {
    $(".sidebarButton").mouseover(function(){
        $(this).removeClass('socialite-small')
    });
    $(".sidebarButton").mouseleave(function(){
        $(this).addClass('socialite-small')
    });

    var slideList=Array.from($(".mySlide"));
    let currentIndexSlide = 0, nextIndexSlide=1;
    function showSlide() {
        $(slideList[currentIndexSlide]).removeClass('show');
        $(slideList[nextIndexSlide]).addClass('show');
        currentIndexSlide=nextIndexSlide;
        if (currentIndexSlide<slideList.length-1) {
            nextIndexSlide++;
        }
        else {nextIndexSlide=0};
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
    $('#next').click(showSlide());
    $('#pre').click(preSlide());
    showSlide();
    setInterval(showSlide,5000);
    const getRequest = ajaxRequest(methods.get,'https://dummyjson.com/products',{'limit':12});
    getRequest.then(
        function(products){
            products.products.forEach(product => {
                $('#listProducts').append(`<div class="col-3">
                <a href="../product/product.html?productId=${product.id}">
                  <img
                    src="${product.thumbnail}"
                    alt="">
                    ${product.title}
                </a>
                <p>Price: ${product.price}$</p>
              </div>`)
            }); 
        }   
    );
    $(document).scroll(function() {
        if(window.pageYOffset>55){
            $('.navbar').addClass('scrolldown');
        }
        else {
            $('.navbar').removeClass('scrolldown');
        }
    })
})
