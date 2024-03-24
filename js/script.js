$(document).ready(function(){
    // example 1 
    $('#hide').on('click',function(){
        $('#text').hide(1000);
    });
    $('#show').on('click',function(){
        $('#text').show(1000);
    });
    // example 2
    $('#fade-in').on('click',function(){
        $('#fadeIn-1').fadeIn();
        $('#fadeIn-2').fadeIn(1000);
        $('#fadeIn-3').fadeIn(2000);
    })
    // example 3
    $('#fade-out').on('click',function(){
        $('#fadeOut-1').fadeOut(2000);
        $('#fadeOut-2').fadeOut(1000);
        $('#fadeOut-3').fadeOut();
    })
    // example 4
    $('#slideDown').on('click',function(){
        $('#slideDownText').slideDown(1000);
    })
    // example 5
    $('#animate').on('click',function(){
        $('#animate-circle').animate({left: '1000px'},3000);
    })
    // example 6
    $('#slideDown-h2').on('click',function(){
        $('#slideDownStopText').slideDown(5000);
    })
    $('#slideStop').on('click', function(){
        $('#slideDownStopText').stop();
    })
    // example 7 
    $('#callback-btn').on('click',function(){
        $('.callbackText').hide(1000, function(){
            alert("the text is hiden now");
        })
    })
    // example 8 
    $('#slideUp-btn').on('click',function(){
        $('#SlideUpDown').slideUp(1000).slideDown(1000);
    })
    // example 9
    $('#creat').on('click',function(){
        $('#olCreat').append('<li>Append Item</li>');
    })
    // example 10 
    $('#prepend').on('click',function(){
        $('#olPrepend').prepend('<p style="color:red; margin:0; font-weight:700">This is prepend text</p>');
    })
    // example 11 
    $('#before-btn').on('click', function(){
    $('#before-img').before('<i style="margin-right:20px; font-weight:500;">before text</i>');
    })
    // example 12 
    $('#after-btn').on('click', function(){
    $('#after-img').after('<i style="margin-left:20px; font-weight:500;">after text</i>');
    })
    // example 13 
    $('#remove').on('click', function(){
        $('#removeText').remove();
    })
    // example 14
    $('.remove-li').on('click',function(){
        $(this).hide();
    })
    // example 15
    $('#toggle-btn').on('click',function(){
        $('#toggleText').toggle();
    })
    // example 16
    $('#color-btn').on ('click',function(){
        $('.colorText').css({'color': 'red'});
    })
    // example 17
    $('#s-animetion').on('click',function(){
        $('.clearQueueBox').animate({height:'150px'},1000);
        $('.clearQueueBox').animate({width:'200px'},1000);
    })
    $('#e-amimetion').on('click', function(){
        $('.clearQueueBox').stop();
    })
    // example 18
    $('#slideToggle-btn').on('click',function(){
        $('#slideToggleText').slideToggle(1000);
    })
    // example 19 
    $('#input-btn').on('click',function(){
        alert('value : '+$('#input').val());
    })
    // example 20 
    $('#href-btn').on('click',function(){
        alert($('#hrefText').attr('href'));
    })
    // example 21 
    $('#h-btn').on('click',function(){
        $('#h-text').hide(1000);
    });
    $('#s-btn').on('click',function(){
        $('#h-text').show(1000);
    });
    // example 22
    $('#fade-in-btn').on('click',function(){
        $('#fadeInText-1').fadeIn();
        $('#fadeInText-2').fadeIn(1000);
        $('#fadeInText-3').fadeIn(2000);
    })
    // example 23
    $('#fade-out-btn').on('click',function(){
        $('#fadeOutText-1').fadeOut(5000);
        $('#fadeOutText-2').fadeOut(3000);
        $('#fadeOutText-3').fadeOut(1000);
    })
     // example 24
     $('#slideDown-btn').on('click',function(){
        $('#slideDownTextId').slideDown(1000);
    })
     // example 25
     $('#animate-btn').on('click',function(){
        $('#animate-circle-id').animate({left: '500px'},5000);
    })
    // example 26
    $('#slideDown-Id').on('click',function(){
        $('#slideDownStopTextId').slideDown(5000);
    })
    $('#slideStop-btn').on('click', function(){
        $('#slideDownStopTextId').stop();
    })
    // example 27 
    $('#callback-btn-Id').on('click',function(){
        $('.callbackTextId').hide(1000, function(){
            alert("the text is hiden now");
        })
    })
    // example 28 
    $('#slideUp-btn-Id').on('click',function(){
        $('#SlideUpDownId').slideUp(1000).slideDown(1000);
    })
    // example 29
    $('#creat-btn').on('click',function(){
        $('#olCreatId').append('<li>Append Item</li>');
    })
    // example 30 
    $('#prepend-btn').on('click',function(){
        $('#olPrependId').prepend('<p style="color:blue; margin:0; font-weight:700">This is prepend text</p>');
    })
     // example 31 
     $('#before-btn-id').on('click', function(){
        $('#before-img-id').before('<i style="margin-right:20px; font-weight:500;">before text</i>');
    })
    // example 32 
    $('#after-btn-id').on('click', function(){
        $('#after-img-id').after('<i style="margin-left:20px; font-weight:500;">after text</i>');
    })
    // example 33 
    $('#remove-btn').on('click', function(){
        $('#removeTextId').remove();
    })
    // example 34
    $('.remove-li-item').on('click',function(){
        $(this).hide();
    })
     // example 35
     $('#toggle-btn-id').on('click',function(){
        $('#toggleTextId').toggle();
    })
     // example 16
     $('#color-btn-id').on ('click',function(){
        $('.colorTextId').css({'color': 'lightgreen'});
    })
    // example 37
    $('#s-animetion-btn').on('click',function(){
        $('.clearQueueBoxId').animate({height:'150px'},2000);
        $('.clearQueueBoxId').animate({width:'200px'},2000);
    })
    $('#e-amimetion-btn').on('click', function(){
        $('.clearQueueBoxId').stop();
    })
    // example 38
    $('#slideToggle-btn-id').on('click',function(){
        $('#slideToggleTextId').slideToggle(1000);
    })
    // example 39 
    $('#input-btn-id').on('click',function(){
        alert('value : '+$('#inputId').val());
    })
    // example 40 
    $('#href-btn-id').on('click',function(){
        alert($('#hrefTextId').attr('href'));
    })
    // example 41 
    $('#fadeTo').on('click', function(){
        $('#fadeToBox-1').fadeTo("slow", 0.3);
        $('#fadeToBox-2').fadeTo("slow", 0.4);
        $('#fadeToBox-3').fadeTo("slow", 0.7);
    })
    // example 42 
    $('#empty-btn').on('click',function(){
        $('.jquery-box').empty()
    })
    // example 43
    $('#addClass-btn').on('click',function(){
        $('#addClass').toggleClass('purple')
    })
    // example 44 
    $('#resize-btn').on('click',function(){
        $('#resize-box').width(800).height(300)
    })
    // example 45
    $('.remove-li-itemId').on('click',function(){
        $(this).hide();
    })
     // example 46
     $('#creat-btn-id').on('click',function(){
        $('#olCreatText').append('<li>Append Item</li>');
    })
    // example 47
    $('#prepend-btn-id').on('click',function(){
        $('#olPrependText').prepend('<li style="color:green; margin:0; font-weight:700">This is prepend text</li>');
    })
     // example 48 
     $('#empty-btn-id').on('click',function(){
        $('.resize').empty()
    })
     // example 49
    $('#resize-btn-id').on('click',function(){
        $('#resize-boxId').width(800).height(300)
    })
     // example 50 
     $('#fadeTo-btn').on('click', function(){
        $('#fadeToBoxId-1').fadeTo("slow", 0.15);
        $('#fadeToBoxId-2').fadeTo("slow", 0.4);
        $('#fadeToBoxId-3').fadeTo("slow", 0.7);
    })
})