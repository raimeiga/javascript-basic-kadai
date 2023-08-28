
    $(window).on('load',function(){
        console.log('loadイベントが発生しました');
    });

    $(window).on('scroll',function(){
        const scroollValue = document.scrollingElement.scrollTop
        if(scroollValue > 10){
            console.log('scrollイベントが発生しました');
        }
    });