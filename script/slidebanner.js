 $(function(){
 var swiper = new Swiper('.slide ', {
    speed: 3000,// 슬라이드가 넘어가는 시간
	  autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
	    pagination: {//블릿 버튼
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  
  
    var swiper = new Swiper('.slide2 ', {
      speed: 2000,// 슬라이드가 넘어가는 시간
      autoplay: {
          delay: 2500,//자동으로 넘어가기 전 머무르는 시간
          disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {//진행 바
          el: ".swiper-pagination",
          type: "progressbar",
        },
      });
});