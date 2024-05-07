$(document).ready(function ($) {
    "use strict";


    var book_table = new Swiper(".book-table-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var team_slider = new Swiper(".team-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    jQuery(".filters").on("click", function () {
        jQuery("#menu-dish").removeClass("bydefault_show");
    });
    $(function () {
        var filterList = {
            init: function () {
                $("#menu-dish").mixItUp({
                    selectors: {
                        target: ".dish-box-wp",
                        filter: ".filter",
                    },
                    animation: {
                        effects: "fade",
                        easing: "ease-in-out",
                    },
                    load: {
                        filter: ".all, .cake, .cookie, .drink",
                    },
                });
            },
        };
        filterList.init();
    });

    jQuery(".menu-toggle").click(function () {
        jQuery(".main-navigation").toggleClass("toggled");
    });

    jQuery(".header-menu ul li a").click(function () {
        jQuery(".main-navigation").removeClass("toggled");
    });

    gsap.registerPlugin(ScrollTrigger);

    var elementFirst = document.querySelector('.site-header');
    ScrollTrigger.create({
        trigger: "body",
        start: "30px top",
        end: "bottom bottom",

        onEnter: () => myFunction(),
        onLeaveBack: () => myFunction(),
    });

    function myFunction() {
        elementFirst.classList.toggle('sticky_head');
    }

    var scene = $(".js-parallax-scene").get(0);
    var parallaxInstance = new Parallax(scene);


});


jQuery(window).on('load', function () {
    $('body').removeClass('body-fixed');

    //activating tab of filter
    let targets = document.querySelectorAll(".filter");
    let activeTab = 0;
    let old = 0;
    let dur = 0.4;
    let animation;

    for (let i = 0; i < targets.length; i++) {
        targets[i].index = i;
        targets[i].addEventListener("click", moveBar);
    }

    // initial position on first === All 
    gsap.set(".filter-active", {
        x: targets[0].offsetLeft,
        width: targets[0].offsetWidth
    });

    function moveBar() {
        if (this.index != activeTab) {
            if (animation && animation.isActive()) {
                animation.progress(1);
            }
            animation = gsap.timeline({
                defaults: {
                    duration: 0.4
                }
            });
            old = activeTab;
            activeTab = this.index;
            animation.to(".filter-active", {
                x: targets[activeTab].offsetLeft,
                width: targets[activeTab].offsetWidth
            });

            animation.to(targets[old], {
                color: "#0d0d25",
                ease: "none"
            }, 0);
            animation.to(targets[activeTab], {
                color: "#fff",
                ease: "none"
            }, 0);

        }

    }
});
// let user = document. querySelector ('.user');
// document. querySelector ('#user-icon'). onclick = () =>{
//     user. classList. toggle('active');
// }
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  let openShopping = document.querySelector('.header-cart');
  let closeShopping = document.querySelector('.closeShopping');
  let list = document.querySelector('.list');
  let listCard = document.querySelector('.listCard');
  let bodycart = document.querySelector('.bodycart');
  let total = document.querySelector('.total');
  let quantity = document.querySelector('.cart-number');
  
  openShopping.addEventListener('click', ()=>{
      bodycart.classList.add('active');
  })
  closeShopping.addEventListener('click', ()=>{
      bodycart.classList.remove('active');
  })
  
  let products = [
      {
          id: 1,
          name: 'Chocolate Cake And Coffee Whip',
          image: 'cake/c1.PNG',
          type:'cake',
          price: 600
      },
      {
          id: 2,
          name: 'Extreme Blizzard',
          image: 'cake/c10.PNG',
          type:'cake',
          price: 700
      },
      {
          id: 3,
          name: 'Cocoa Butter Cream',
          image: 'cake/c18.PNG',
          type:'cake',
          price: 620
      },
      {
          id: 4,
          name: 'Vanilla Choco Flakes Cherry Top',
          image: 'cake/c2.PNG',
          type:'cake',
          price: 650
      },
      {
          id: 5,
          name: 'Crunchy Caramelized',
          image: 'cake/c6.PNG',
          type:'cake',
          price: 650
      },
      {
          id: 6,
          name: 'Almond Crumble zchoc',
          image: 'cake/c4.PNG',
          type:'cake',
          price: 500
      },
      {
          id: 7,
          name: 'Mix fruit red velved',
          image: 'cake/c3.PNG',
          type:'cake',
          price: 620
      },
      {
          id: 8,
          name: 'Black Forest',
          image: 'cake/c5.PNG',
          type:'cake',
          price: 600
      },
      {
          id: 9,
          name: 'Crunchy Caramelized',
          image: 'cake/c6.PNG',
          type:'cake',
          price: 650
      },
      {
          id: 10,
          name: 'Tropical Fruit',
          image: 'cake/c7.PNG',
          type:'cake',
          price: 590
      },
      {
          id: 11,
          name: 'Strawberry Cheesecake-Piece',
          image: 'cake/c11.PNG',
          type:'cake',
          price: 89
      },
      {
          id: 12,
          name: 'Peanut Choco-Piece',
          image: 'cake/c21.PNG',
          type:'cake',
          price: 89
      },
      {
          id: 13,
          name: 'Strawberry Milk Cream-Piece',
          image: 'cake/c22.PNG',
          type:'cake',
          price: 79
      },
      {
          id: 14,
          name: 'Pecan Pie Vanilla Ice Cream-Piece',
          image: 'cake/c24.PNG',
          type:'cake',
          price: 99
      },
      {
          id: 15,
          name: 'Chocolate Mousse-Piece',
          image: 'cake/c25.PNG',
          type:'cake',
          price: 99
      },
      {
          id: 16,
          name: 'Raspberry Cheesecake-Piece',
          image: 'cake/c27.PNG',
          type:'cake',
          price: 109
      },
      {
          id: 17,
          name: 'Biscoff Cheesecake-Piece',
          image: 'cake/c28.PNG',
          type:'cake',
          price: 109
      },
      {
          id: 18,
          name: 'Red Raspberry-Piece',
          image: 'cake/c30.PNG',
          type:'cake',
          price: 119
      },
      {
          id: 19,
          name: 'Raisin Cupcake',
          image: 'cake/c31.PNG',
          type:'cake',
          price: 69
      },
      {
          id: 20,
          name: 'Heavy Chocolate Cupcake',
          image: 'cake/c34.PNG',
          type:'cake',
          price: 109
      },
      {
          id: 21,
          name: 'Mint Pink Cupcake',
          image: 'cake/c35.PNG',
          type:'cake',
          price: 109
      },
      {
          id: 22,
          name: 'Black Pink Cupcake',
          image: 'cake/c37.PNG',
          type:'cake',
          price: 500
      },
      {
          id: 23,
          name: 'Almond Crumble Choc',
          image: 'cake/c3.PNG',
          type:'cake',
          price: 500
      }
    //   ------cookie------
      ,
      {
          id: 24,
          name: 'Almond Cookie',
          image: 'cookie/co1.PNG',
          type:'cookie',
          price: 20
      }
      ,
      {
          id: 25,
          name: 'Christmas Cookies',
          image: 'cookie/co2.PNG',
          type:'cookie',
          price: 100
      },
      {
          id: 26,
          name: 'Gingerbread Cookies',
          image: 'cookie/co3.PNG',
          type:'cookie',
          price: 100
      },
      {
          id: 27,
          name: 'Mint Chip Cookies',
          image: 'cookie/co4.PNG',
          type:'cookie',
          price: 20
      },
      {
          id: 28,
          name: 'Choc Chip Cookies',
          image: 'cookie/co5.PNG',
          type:'cookie',
          price: 90
      },
    //   -----drink-----
      {
          id: 29,
          name: 'Orange Juice',
          image: 'drink/1.PNG',
          type:'drink',
          price: 60
      },
      {
          id: 30,
          name: 'Watermalon Juice',
          image: 'drink/2.PNG',
          type:'cake',
          price: 60
      },
      {
          id: 31,
          name: 'Lime Juice',
          image: 'drink/3.PNG',
          type:'drink',
          price: 60
      },
      {
          id: 32,
          name: 'Strawberry Banana Smoothie',
          image: 'drink/4.PNG',
          type:'drink',
          price: 70
      },
      {
          id: 33,
          name: 'Grapfruit Juice',
          image: 'drink/6.PNG',
          type:'drink',
          price: 60
      },
      {
          id: 34,
          name: 'Strawberry Soda',
          image: 'drink/10.PNG',
          type:'drink',
          price: 40
      },
      {
          id: 35,
          name: 'Orange With Apple Juice',
          image: 'drink/7.PNG',
          type:'drink',
          price: 60
      },
      {
          id: 36,
          name: 'Irish coffee',
          image: 'drink/5.PNG',
          type:'drink',
          price: 40
      },
      {
          id: 37,
          name: 'Brown Sugar Bubble',
          image: 'drink/8.PNG',
          type:'drink',
          price: 90
      },
      {
          id: 38,
          name: 'Cola-Glass',
          image: 'drink/9.PNG',
          type:'drink',
          price: 20
      },
      {
          id: 39,
          name: 'Pomegranate Juice',
          image: 'drink/11.PNG',
          type:'drink',
          price: 70
      },
      {
          id: 40,
          name: 'Tropical Island Juice',
          image: 'drink/13.PNG',
          type:'drink',
          price: 80
      },
      {
          id: 41,
          name: 'Strawberry Giwi Juice',
          image: 'drink/14.PNG',
          type:'drink',
          price: 70
      },
      {
          id: 42,
          name: 'Cocacola Zero Sugar-Can',
          image: 'drink/16.PNG',
          type:'drink',
          price: 16
      }
  ];
  let listCards  = [];
  function initApp(){
      products.forEach((value, key) =>{
          let newDiv = document.createElement('div');
        //   newDiv.classList.add('item');
          newDiv.innerHTML = `
          <div class="dish-box-wp">
          <img src="image/${value.image}">
          <div class="dist-title"><h3 class="h3-title">${value.name}</h3></div>
          <div class="price">${value.price.toLocaleString()}฿</div>
          <button class="dish-add-btn" onclick="addToCard(${key})">+</button>
          </div>`;
          list.appendChild(newDiv);
      })
  }
  initApp();
  function addToCard(key){
      if(listCards[key] == null){
          // copy product form list to list card
          listCards[key] = JSON.parse(JSON.stringify(products[key]));
          listCards[key].quantity = 1;
      }
      reloadCard();
  }
  function reloadCard(){
      listCard.innerHTML = '';
      let count = 0;
      let totalPrice = 0;
      listCards.forEach((value, key)=>{
          totalPrice = totalPrice + value.price;
          count = count + value.quantity;
          if(value != null){
              let newDiv = document.createElement('li');
              newDiv.innerHTML = `
                  <div><img src="image/${value.image}"/></div>
                  <div>${value.name}</div>
                  <div>${value.price.toLocaleString()}฿</div>
                  <div>
                      <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                      <div class="count">${value.quantity}</div>
                      <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                  </div>`;
                  listCard.appendChild(newDiv);
          }
      })
      total.innerText = totalPrice.toLocaleString();
      quantity.innerText = count;
  }
  function changeQuantity(key, quantity){
      if(quantity == 0){
          delete listCards[key];
      }else{
          listCards[key].quantity = quantity;
          listCards[key].price = quantity * products[key].price;
      }
      reloadCard();
  }

//   $(document).ready(function(){
//     $("#search").focus(function() {
//       $(".header-search-form").addClass("border-searching");
//       $("button").addClass("si-rotate");
//     });
//     $("#search").blur(function() {
//       $(".header-search-form").removeClass("border-searching");
//       $("button").removeClass("si-rotate");
//     });
//     $("#search").keyup(function() {
//         if($(this).val().length > 0) {
//           $(".go-icon").addClass("go-in");
//         }
//         else {
//           $(".go-icon").removeClass("go-in");
//         }
//     });
//     $(".go-icon").click(function(){
//       $(".header-search-form").submit();
//     });
// });