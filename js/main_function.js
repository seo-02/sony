$(function(){
    let idx=0;
    const $gnb = $('.gnb');
    const $lnb = $('.lnb>li>a');
    const $gnb_bg = $('.gnb_bg');
    
    $('.logo>a').on('click',function(evt){
        evt.preventDefault();
        $('html,body').stop().animate({
            scrollTop:0
        })
    });
 
    $gnb.on('mouseover',function(evt){
        evt.preventDefault();
        $gnb_bg.stop().animate({
            top:80
        },200)
        $('.lnb').stop().slideDown();
        // $('.gnb > li > a::after').show();
    })

    $gnb.on('mouseout',function(evt){
        evt.preventDefault();
        $gnb_bg.stop().animate({
            top:-500
        },200)
        $('.lnb').stop().slideUp(50);
    })


    //visual
    const $visual = $('.visual');
    const $visualSlide = $('.visual > .slide-container > .slide');
    const $VSLbtn = $('.visual > .slide-container > .slides-cs .left')
    const $VSRbtn = $('.visual > .slide-container > .slides-cs .right')
    
    // $(window).on('load resize',function(){
    //     $visual.height($(window).height());
    // })
    $VSLbtn.on('click',function(evt){
        evt.preventDefault();

        if(idx>0){
            idx--;
        }else{
            idx=4;
        }
        $visualSlide.stop().animate({
            left:-1920 * 4
        },400,function(){
            // if(idx<4){
            // }
            $('.visual > .slide-container > .slide').find('li').last().prependTo($visualSlide);
            $visualSlide.css({
                left:-1920 * 5
            })
        });
    });
    
    $VSRbtn.on('click',function(evt){
        evt.preventDefault();
        
        if(idx<4){   
            idx++;
        }else{
            idx=0
        }
        $visualSlide.stop().animate({
            left:-1920*6
        },400,function(){
            // if(idx===5){
            //     // $visualSlide.stop().animate({
            //     //     left:-1920*6
            //     // })
            // }
            $('.visual > .slide-container > .slide').find('li').first().appendTo($visualSlide);
            $visualSlide.css({
                left:-1920 * 5
            });
        });
        // $('.visual > .slide-container > .slide').eq(idx+1).find('p').slideDown(500);
        console.log(idx)
        $('.visual > .slide-container > .page-count > p > span').text(idx+1)
    });
    
    //자동재생
    $(window).on('load',function(){
        play = setInterval(()=>{
            $VSRbtn.trigger('click')
        },7000)
    })

    //section.visual-two
    const $vtlSlide =$('.visual-two > .vt-left > .vtl-slide-container > .vtl-slide');
    $(' .visual-two > .vt-next').on('click',function(evt){
        evt.preventDefault();

        if(idx<3){
        idx++;
        }else{
            idx=0;
        }

        $vtlSlide.stop().animate({
            left:-960
        },function(){
            $('.visual-two > .vt-left > .vtl-slide-container > .vtl-slide >p').first().appendTo($vtlSlide);
            $vtlSlide.css({left:0});
        })        

        $('.vtr-slide > ul').stop().animate({
            left:-550
        },function(){
            $('.vtr-slide > ul>li').first().appendTo($('.vtr-slide > ul'));
            $('.vtr-slide > ul').css({left:0})
        })
        const $vtrSlide = $('.vtr-slide > ul > li');
        $vtrSlide.eq(1).find('a').addClass('on');
        $vtrSlide.eq(1).siblings().find('a').removeClass('on');
        // $vtrSlide.find('a');

    })


    //section.event
    const $eventPrevBtn = $('.event > .event-top > .event-slide > .vtr-slides-btn > .prev');
    const $eventNextBtn = $('.event > .event-top > .event-slide > .vtr-slides-btn > .next');
    const $esContainer = $('.event > .event-top > .event-slide > .es-container >ul')
    $eventPrevBtn.on('click',function(evt){
        evt.preventDefault();
        
        if(idx>0){
            idx--;
        }else{
            idx=3;
        }
        $esContainer.stop().animate({
            left:0
        },function(){
            $esContainer.find('li').last().prependTo($esContainer);
            $esContainer.css({
                left:-400
            })
        });
    });
    
    $eventNextBtn.on('click',function(evt){
        evt.preventDefault();

        if(idx<3){
            idx++;
        }else{
            idx=0;
        }
        $esContainer.stop().animate({
            left:-800
        },400,function(){
            $esContainer.find('li').first().appendTo($esContainer);
            $esContainer.css({left:-400});
            $esContainer.find('p').css({
                // paddingTop: 10,
                textAlign: 'center',
                fontSize: 24,
                cursor: 'text'
            });
            $esContainer.find('span').css({
                color: 'grey',
                fontSize: 16,
                fontWeight: 500
            });
        });

    });
    

    //aside
    const $plus = $('aside > .option > p.plus > a');
    const $option = $('aside > .option > .opt-sub');

    $(window).on('scroll',function(){
        const scrollTop = $(this).scrollTop()
        if(scrollTop>$('.head-con').offset().top){
            $('aside').css({display:'block'});
        }else{
            $('aside').css({display:'none'});
        }

        const view = (scrollTop + $(this).height()) -$('footer').offset().top;
        if (view>0) {
            $('aside > .option').css({
                marginBottom : view
            });
        }else{
            $('aside > .option').css({
                marginBottom: 0
            });
        }
    });

    $plus.on('click',function(evt){
        evt.preventDefault();
        if($(this).parent().hasClass('on')){
            $plus.parent().css({
                transform:'rotate(0)'
            }).removeClass('on');
            $option.stop().hide(200);
        }else{
            $(this).parent().css({
                transform:'rotate(45deg)'
            }).addClass('on');
            $option.stop().show(200);
        }

        // if($(window).scrollTop()===0){
        //     $plus.parent().css({
        //         transform:'rotate(0)'
        //     })
        // }

    });

    $('aside > .option > .opt-sub > p.pageup').on('click',function(evt){
        evt.preventDefault();

        $('html,body').stop().animate({
            scrollTop:0
        })
        $plus.parent().css({
            transform:'rotate(0)'
        }).removeClass('on');
        $option.stop().hide(200);
    })

});

