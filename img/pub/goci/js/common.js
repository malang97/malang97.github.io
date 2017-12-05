(function($){
  $(document).ready(function(){
    $('body').css({
      'margin-top' :  '50px',
      'opacity' : '0'
    });
    $('body').animate({
      'margin-top' : '0',
      'opacity' : '1'
    });
    $( window ).resize(function() {
      if($(window).width() < 480){
        $('header').css('left','-250px');
        $('section').css('padding','0');
        console.log('480이하');
      }else{
        $('header').css('left', '0');
        console.log('480이상');
      }
    });

    //메뉴 오픈
    $('.micon').click(function(){
      $('.popup').css('display','block');
      $('header').animate({'left': '0'});

      $('.popup').click(function(){
        $('header').animate({'left':'-250px'});
        $('.popup').css('display','none');
      })
    })
    $('.exit').click(function(){
      $('header').animate({'left':'-250px'});
      $('.popup').css('display','none');
    })
    //개인 회원 로그인
    $('.individualB').click(function(){
      sessionStorage.setItem("state", "individual");
      console.log(sessionStorage.state);
    })
    //사업자 회원 로그인
    $('.businessB').click(function(){
      sessionStorage.setItem("state", "business");
      console.log(sessionStorage.state);
    })
    $('.loginB').click(function(){
      $id = $('#id').val();
      console.log($id);
    })
    //로그아웃 시
    $('nav .logout').click(function(){
      sessionStorage.removeItem("state");
      localStorage.removeItem("test");
      localStorage.removeItem("test2");
      localStorage.removeItem("list");
      $('nav .login').css('display','block');
      $('nav .logout').css('display','none');
      console.log('logout');
    })
    $('.menu-top .logout .logoutB').click(function(){
      sessionStorage.removeItem("state");
      localStorage.removeItem("test");
      localStorage.removeItem("test2");
      localStorage.removeItem("list");
      $('nav .login').css('display','block');
      $('nav .logout').css('display','none');
      console.log('logout');
    })
    //개인 회원 로그인 시
    if(sessionStorage.state == 'individual'){
      $('.business').css('display','none');
      $('.individual').css('display','block');
      $('nav .logout').css('display','block');
      $('nav .login').css('display','none');
    }
    //사업자 회원 로그인 시
    if(sessionStorage.state == 'business'){
      $('.business').css('display','block');
      $('.individual').css('display','none');
      $('nav .logout').css('display','block');
      $('nav .login').css('display','none');
      $('section>nav').css('backgroundColor' , '#ffc52e')
      $('.depth1>li>a').css({
        'backgroundColor' : '#ffc52e',
        'color' : '#ffeec0'
      });
      //메뉴 오버 시
      $('nav .depth2>li').find('a').hover(function(){
        $(this).css('color' , '#ffc52e')
      },function(){
        $(this).css('color' , '#b97665')
      })
    }
    //인증번호
    $('li.phone').eq(0).find('button').click(function(){
      $('li.phone').eq(0).find('.confirm').css('display','block');
    })
    $('li.phone').eq(1).find('button').click(function(){
      $('li.phone').eq(1).find('.confirm').css('display','block');
    })
    //탈퇴 시
    $('.leaveB').click(function(){
      sessionStorage.removeItem("state");
      $('nav .login').css('display','block');
      $('nav .logout').css('display','none');
      console.log('leave');
    })
    //기부 완료 시
    $('.main02 .complete_pop .popB').click(function(){
      $date = $('.main02 .content2 #userdate').val();
      $place = $('.main02 .content2 input[type=radio]:checked').val();
      localStorage.setItem("test", "a");
      localStorage.setItem("place", $place);
      localStorage.setItem("date", $date);
      console.log(localStorage.place);
      console.log(localStorage.test);
    })

    //수거 완료 시
    $('.main02 .business .completeB').click(function(){
      localStorage.setItem("test2", "a");
    })
    //게시글작성
    $('#Pf_complete').click(function(){
      $datas = $('#formWrapper form p #usertext').val();
      $code = $('#formWrapper form select option:selected').val();
/*       $datas = $('#formWrapper form p #usertext').val(); */
      localStorage.setItem("list", "a");//변수이름, 값
      localStorage.setItem("datas", $datas);
      localStorage.setItem("code", $code);
/*       localStorage.setItem("datas", $datas); */
      console.log($datas);
    })

  });
})(jQuery);
