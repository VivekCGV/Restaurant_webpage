$(document).ready(()=>{

  //  responsive menu Toggle--
    $(".menuToggle .menuI").click(()=>{
        // $(".menuToggle ul").show()
        $(".menuToggle ").addClass('toggled')
        // console.log("hii")
    })
    $(".menuToggle .exitMenu,.menulistAnchor").click(()=>{
        // $(".menuToggle ul").hide()
        $(".menuToggle ").removeClass('toggled')
    })
    
    
//   onScroll navigation color change--
    $(window).scroll(function(){
        if ($(this).scrollTop() > 80) {
           $('nav').addClass('newClass');
        } else {
           $('nav').removeClass('newClass');
        }
    });


    //  menu Filter--
    var btns = $('.filter--menu').click(function() {
        
        if (this.id == 'all') {
          $('#parent > .menu__card').fadeIn(800);
        } else {
          var $el = $('.' + this.id).fadeIn(2000);
          $('#parent > .menu__card').not($el).hide();
        }
        btns.removeClass('filter__active');
        $(this).addClass('filter__active');
      })


      // booking gallery--
      const initializeImageSlider = () => {
        const images_list = [
            {
                "url": "https://html-generator.com/uploads/images/2023/10/13/89474TQVXMBL4Z7.jpg",
                "alt": "",
                "name": "89474TQVXMBL4Z7.jpg",
                "link": ""
            },
            {
                "url": "https://html-generator.com/uploads/images/2023/10/13/460742_JX0_7ZH8.jpg",
                "alt": "",
                "name": "460742_JX0_7ZH8.jpg",
                "link": ""
            },
            {
                "url": "https://html-generator.com/uploads/images/2023/10/13/8235745B51PUSEX.jpg",
                "alt": "",
                "name": "8235745B51PUSEX.jpg",
                "link": ""
            },
            {
                "url": "https://html-generator.com/uploads/images/2023/10/13/020278V964WOVM9.jpg",
                "alt": "",
                "name": "020278V964WOVM9.jpg",
                "link": ""
            }
                ];
            
                let slider_id = document.querySelector("#hcg-slider-1");
            
                // append all images
                let dots_div = "";
                let images_div = "";
                for (let i = 0; i < images_list.length; i++) {
                    // if no link without href="" tag
                    let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
                    images_div += '<a'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:flex"':'')+'>'+
                                    
                                    '<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
                                 '</a>';
                    dots_div += '<a href="#" class="hcg-slide-dot'+(i === 0 ? ' dot-active':'')+'" data-id="'+i+'"></a>';
                }
                slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
                slider_id.querySelector(".dot_cont").innerHTML = dots_div;
            
                let slide_index = 0;
            
                const images = slider_id.querySelectorAll(".hcg-slides");
                const dots = slider_id.querySelectorAll(".hcg-slide-dot");
                const showSlides = () => {
                    if (slide_index > images.length-1) {
                        slide_index = 0;
                    }
                    if (slide_index < 0) {
                        slide_index = images.length-1;
                    }
                    for (let i = 0; i < images.length; i++) {
                        images[i].style.display = "none";
                        dots[i].classList.remove("dot-active");
                        if (i == slide_index) {
                            images[i].style.display = "flex";
                            dots[i].classList.add("dot-active");
                        }
                    }
                }
            
                const dot_click = event => {
                    event.preventDefault();
                    slide_index = event.target.dataset.id;
                    showSlides();
                }
            
                for (let i = 0; i < dots.length; i++) {
                    dots[i].addEventListener("click", dot_click, false);
                }
                // auto play
                setInterval(() => {
                    slide_index++;
                    showSlides();
                }, 3000);
      };
      initializeImageSlider();

    //   ourTeam slider
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
})