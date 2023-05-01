if ('Notification' in window) {
    var pushw_site_option = (typeof getOption == 'function')  ? getOption() : { site_option: 0 };
    var pushw_args = {}
    let pushw_script_tag = document.getElementById('pushwscript');
    let pushw_query = pushw_script_tag.src.replace(/^[^\?]+\??/,'');
    let pushw_vars = pushw_query.split("&");
    for (let i=0; i<pushw_vars.length; i++) {
        let pair = pushw_vars[i].split("=");
        pushw_args[pair[0]] = decodeURI(pair[1]).replace(/\+/g, ' ');
    }
    
    var scr = document.createElement('script');
    if ( pushw_args.site == undefined){
        console.log('subscribe.js: site param required') ;
    }else{
    if ( pushw_site_option.site_option != 0 || ('site_option' in pushw_args && pushw_args.site_option !=0)) {
        scr.src = 'https://'+pushw_args.site+'.scripts.news-host.pw/firebase_subscribe3.php?' + pushw_query;
    }else{
        scr.src = 'https://cf.just-news.pro/js/fcmjsgo/'+pushw_args.site+'.fcmsubscribe.js?'+pushw_query;
    }
    scr.onload=function(){
        var pwtimer = setInterval(function(){
            try {
                pushwru_show_subscribe();
                clearInterval(pwtimer);
                } catch(e) {};
            },100 );
            
    }
    document.head.appendChild(scr);
    }
    }