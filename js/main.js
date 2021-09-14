$(function(){
    var winW=$(window).width();
    if(winW >= 1000){
        //fullpage
        $('#fullpage').fullpage({
            menu:'#menu',
            anchors:['INTRO','PROFILE','','WEB','','RESPONSIVE','','MOBILE','','EDITORIAL','CONTACT'],
            navigation:true,
            navigationPosition:'left',
            navigationTooltips:['INTRO','PROFILE #1','PROFILE #2','WEBPAGE DESIGN','WEBPAGE DESIGN','RESPONSIVE','RESPONSIVE','MOBILE','MOBILE','EDITORIAL','EDITORIAL','CONTACT ME'],
            showActiveTooltip:true,
            afterLoad:function(anchorLink, index, direction){
            //     //4번째 section, 6번째 section , 8번째 section의 메뉴는 분홍글자, 11번째 section의 메뉴는 흰색글자
            //     if(index==2 || index==4 || ){
            //         $('header nav ul li a').addClass('active');
            //     }else{
            //         $('header nav ul li a').removeClass('active');
            //     }
            // }
                if(index==2){
                    $('header .hor-line').removeClass('active');
                    $('.s3 .box > div').addClass('active');
                    $('.s3 .box .verti-line').addClass('active');
                    // $('.s5 .box .swiper').addClass('active');
                    //1초 기다렸다가 barAnimation 함수 호출
                    setTimeout(barAnimation, 1000);
                    $('header nav ul li a').css('color','#202040');
                    $('.s5 .box .swiper').removeClass('active');
                    $('.s7 .box .box-in').removeClass('active');
                    $('.s9 .box .swiper').removeClass('active');
                }
                //3번째 section에서 자식 컨텐츠에 active 설정
                if(index==3){
                    $('header .hor-line').removeClass('active');
                    $('.s3 .box > div').addClass('active');
                    $('.s3 .box .verti-line').addClass('active');
                    // $('.s5 .box .swiper').addClass('active');
                    //1초 기다렸다가 barAnimation 함수 호출
                    setTimeout(barAnimation, 1000);
                    $('header nav ul li a').css('color','#202040');
                    $('.s5 .box .swiper').removeClass('active');
                    $('.s7 .box .box-in').removeClass('active');
                    $('.s9 .box .swiper').removeClass('active');
                }
                if(index==4){
                    $('header .hor-line').addClass('active');
                    $('.s3 .box > div').removeClass('active');
                    $('.s3 .box .verti-line').removeClass('active');
                    setTimeout(barStop, 100);
                    $('header nav ul li a').css('color','#ff6565');
                    $('.s5 .box .swiper').removeClass('active');
                    $('.s7 .box .box-in').removeClass('active');
                    $('.s9 .box .swiper').removeClass('active');
                }
                if(index==5){
                    $('header .hor-line').removeClass('active');
                    $('.s5 .box .swiper').addClass('active');
                    $('header nav ul li a').css('color','#202040');
                    $('.s7 .box .box-in').removeClass('active');
                    $('.s9 .box .swiper').removeClass('active');
                }
                if(index==6){
                    $('header .hor-line').addClass('active');
                    $('.s5 .box .swiper').removeClass('active');
                    $('header nav ul li a').css('color','#ff6565');
                    $('.s7 .box .box-in').removeClass('active');
                    $('.s9 .box .swiper').removeClass('active');
                }
                if(index==7){
                    $('header .hor-line').removeClass('active');
                    $('.s5 .box .swiper').removeClass('active');
                    $('header nav ul li a').css('color','#202040');
                    $('.s7 .box .box-in').addClass('active');
                    $('.s9 .box .swiper').removeClass('active');
                }
                if(index==8){
                    $('header .hor-line').addClass('active');
                    $('.s5 .box .swiper').removeClass('active');
                    $('header nav ul li a').css('color','#ff6565');
                    $('.s7 .box .box-in').removeClass('active');
                    $('.s9 .box .swiper').removeClass('active');
                }
                if(index==9){
                    $('header .hor-line').removeClass('active');
                    $('.s5 .box .swiper').removeClass('active');
                    $('.s7 .box .box-in').removeClass('active');
                    $('.s9 .box .swiper').addClass('active');
                    $('header nav ul li a').css('color','#202040');
                    $('.s10 .box .content > div ul li').removeClass('active');
                }
                if(index==10){
                    $('header .hor-line').removeClass('active');
                    $('.s5 .box .swiper').removeClass('active');
                    $('.s7 .box .box-in').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s9 .box .swiper').removeClass('active');
                    $('.s10 .box .content > div ul li').addClass('active');
                    $('.s10 .box .content > div ul li').each(function(){
                        //var second=Math.random(); //0~1사이의 실수, 랜덤으로 나옴
                        var second=$(this).index()*0.2  //순서대로 나옴
                        $(this).css('transition-delay', second+'s');
                    });
                    $('header nav ul li a').css('color','#202040');

                        
                }
                if(index==11){
                    $('header .hor-line').addClass('active');
                    $('.s5 .box .swiper').removeClass('active');
                    $('header nav ul li a').css('color','#fff');
                    $('.s7 .box .box-in').removeClass('active');
                }
            }
        });

    }
    //skillbar animation
    function barAnimation(){
        $(".bar").each(function(){
            $(this).find(".bar-inner").animate({
              width: $(this).attr("data-width")
            },2000)
        });
    }
    function barStop(){
        $(".bar").each(function(){
            $(this).find(".bar-inner").animate({
              width: 0
            },2000)
        });
    }
    //swiper
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    //tab menu
    $('.content .edit').fadeIn();
    $('.content .art').hide();
    $('.s10 .box .tab-btn .event-btn').click(function(){
        $(this).addClass('active');
        $('.s10 .box .tab-btn .art-btn').removeClass('active');
        $('.content .edit').fadeIn();
        $('.content .art').hide();
    });
    $('.s10 .box .tab-btn .art-btn').click(function(){
        $(this).addClass('active');
        $('.s10 .box .tab-btn .event-btn').removeClass('active');
        $('.content .edit').hide();
        $('.content .art').fadeIn();
    });
 

    //popup gallery
    var imgBtn1=$('.s10 .box .edit ul li .edit-des a');
    var imgBtn2=$('.s10 .box .art ul li .art-des a');
    var gallTotal=$('.s10 .box .edit ul li').length;
    var popup=$('.popup');
    var container=$('.popup .container');
    var gallNum=0;
    var gall_sw=0;
    imgBtn1.click(function(e){
        e.preventDefault();
        var attr=$(this).attr('href');
        gall_sw=0;
        galleryShow(attr);
    });
    imgBtn2.click(function(e){
        e.preventDefault();
        var attr=$(this).attr('href');
        gall_sw=1;
        galleryShow(attr);
    });
    //popup gallery prev btn
    $('.popup .prev').click(function(){
        gallNum--;
        if(gallNum < 1 ) { gallNum=gallTotal; }
        container.empty();
        if(gall_sw==0){
            container.append('<img src="img/event-'+gallNum+'.png">');
        }else{
            container.append('<img src="img/art-'+gallNum+'.png">');
        }
    });

    //popup gallery next btn
    $('.popup .next').click(function(){
        gallNum++;
        if(gallNum > gallTotal) { gallNum=1;}
         
        container.empty();
        if(gall_sw==0){
            container.append('<img src="img/event-'+gallNum+'.png">');
        }else{
            container.append('<img src="img/art-'+gallNum+'.png">');
        }
    });
    //popup gallery close
    $('.close').click(function(){
        popup.css('display','none');
        //container 안의 내용 비움
        container.empty();
    });

    function galleryShow(attr){
        //마우스로 클릭한 a태그의 href속성 값을 가져와서 attr변수에 저장
        //<img src="img/event-1.png"> 문장을 완성해서 container 영역에 자식객체로 추가시킴
        container.append('<img src="'+attr+'">');
        popup.css('display','block');
        //클릭한 a태그의 조상객체 중 li의 인덱스 번호를 가져와서 변수에 저장
        gallNum=$(this).parents('li').index()+1;
        console.log(gallNum);
    }
});
