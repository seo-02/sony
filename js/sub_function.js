$(function(){
    
    $('a').on('click',function(evt){
        evt.preventDefault();
    });
    const $gnb = $('.gnb');
    const $lnb = $('.lnb>li>a');
    const $gnb_bg = $('.gnb_bg');
    let idx=0;
    
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

    $(window).on('scroll',function(){
        const scrollTop = $(window).scrollTop();

        if(scrollTop>=0){
            $('header').css({
                position:'fixed',
                top:0,
                left:'50%',
                marginLeft:'-50%'
            });
            $('.visual').css({marginTop:80})
        }else{
            $('header').css({
                position:'relative',
                margin:0
            })
        }
    });


    //visual
    const $visual = $('section.visual > .visual-con > .slide');

    const $prevbtn = $('section.visual > .visual-con > .prev > a');
    const $nextbtn = $('section.visual > .visual-con > .next > a');
    
    $nextbtn.on('click',function(){
        if(idx<9){
            idx++;
        }else{
            idx=0;
        }
        $visual.stop().animate({
            left:1920 * -10
        },400,function(){
            $('section.visual > .visual-con > .slide').children().first().appendTo($visual);
            $visual.css({left:1920 * -9});
        });
        $('section.visual > .visual-con > .count >.all>.change').text(idx+1+' ');
    });

    $prevbtn.on('click',function(){
        if(idx>0){
            idx--;
        }else{
            idx=9;
        }
        $visual.stop().animate({
            left:1920 * -8
        },400,function(){
            $('section.visual > .visual-con > .slide').children().last().prependTo($visual);
            $visual.css({left:1920 * -9});
        });
        $('section.visual > .visual-con > .count >.all>.change').text(idx+' ');
    })
});

