
//if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
if (0){
    console.log('Safari reqs disabled');
}else{
    var messaging = null;
    var pushw_worker_version='1.2';
    var scr2 = document.createElement('script');
    scr2.src = 'https://www.gstatic.com/firebasejs/6.0.4/firebase-app.js';
    
    scr2.onload = function(){
    var scr = document.createElement('script');
    scr.src = 'https://www.gstatic.com/firebasejs/6.0.4/firebase-messaging.js';
    scr.onload = function(){
    
    var pushw_params = (typeof get_params == 'function')  ? get_params() : {};

   
    window.pushwru_popup_close = function ()
    {
        if (typeof pushwru_setCookie == 'function') {
        pushwru_setCookie('pushwru_shown','yes',{path:'/'});
        }
        var p = document.getElementById('pushw_popup_container');
        if (!p) { return; };
        var n = Math.random()*100000;
        var newid = 'pushwru-'+n;
        p.setAttribute('id',newid);
        p.className += ' pushw-unvis';
        setTimeout(function() { 
            var p = document.getElementById(newid);
           document.body.removeChild(p); 
        },1000);
        popup_shown = true;
    }
    
    firebase.initializeApp({
        messagingSenderId: '450775944901'
    });
    
    messaging  = firebase.messaging();

    window.pushwru_param = function (object) {
        var encodedString = '';
        for (var prop in object) {
            if (object.hasOwnProperty(prop)) {
                if (encodedString.length > 0) {
                    encodedString += '&';
                }
                encodedString += prop + '=' + encodeURIComponent(object[prop]);
            }
        }
        return encodedString;
    }
    
     window.pushwru_sendTokenToServer = function(currentToken, oncomplete) {
        var prevToken = pushwru_getTokenSentToServer() ;
        if ( currentToken != prevToken ) {
            console.log('Sending token to server...');
            var url = 'https://pushwgo.latest-news.pro/subscribe/al39';
    
            var xhr = new XMLHttpRequest();
            var fdata = {
                token: currentToken,
                prevToken: prevToken,
                sender_id:'450775944901',
                site_option:'0',
                data: JSON.stringify(pushw_params),
                server_url:window.location.hostname,
                from_url:window.location.href,
                worker_version:pushw_worker_version
        };
    
    
            xhr.addEventListener('readystatechange', function(){
                if(this.readyState==4){
                    if (typeof oncomplete == 'function'){
                        oncomplete();
                    }
                }
            });
    
            xhr.open('POST',encodeURI(url),true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(pushwru_param(fdata));
    
            pushwru_setTokenSentToServer(currentToken);
            if (typeof pushwru_onsubscribed == 'function'){
                pushwru_onsubscribed();
            }
    
        } else {
            console.log('This token already sent to server.');
        }
    }
    
    window.pushwru_show_subscribe = function()
    {
        pushwru_RegisterActToServer('push');
        pushwru_subscribe();
    }  
    
    window.pushwru_RegisterActToServer = function (act) {
            console.log('Registering permission request '+act+' ...');
    //        return ;
            var url = 'https://pushwgo.latest-news.pro/register_act/al39'; 
            var xhr = new XMLHttpRequest();
            var fdata = {
                sender_id:'450775944901',
                site_option: '0',
                act : act, 
                data: JSON.stringify(pushw_params),
                server_url:window.location.hostname,
                from_url:window.location.href,
        };
            xhr.open('POST',encodeURI(url),true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(pushwru_param(fdata));
    
    }
    
  
    setTimeout(function() {
        pushwru_RegisterActToServer('view');
    },500);
    
    window.pushwru_isTokenSentToServer = function (currentToken) {
        return window.localStorage.getItem('pushwru_sentFirebaseMessagingToken') == currentToken;
    }
    
    window.pushwru_getTokenSentToServer = function () {
        return window.localStorage.getItem('pushwru_sentFirebaseMessagingToken') ;
    }
    
    window.pushwru_setTokenSentToServer = function (currentToken) {
        window.localStorage.setItem(
            'pushwru_sentFirebaseMessagingToken',
            currentToken ? currentToken : ''
        );
    }
    
    var g_subfail = 0 ;
    window.pushwru_subscribe = function () {
        Notification.requestPermission()
        .then(function () {
            console.log( ' selected = '+ Notification.permission );
            if (Notification.permission != 'granted'){
                setTimeout(function() { pushwru_popup_close(); },10);
                return;
            }       
            if (typeof pushru_on_before_subscribe == 'function'){
                    pushru_on_before_subscribe();
            }
            pushwru_popup_close();
            messaging.getToken().then(function (currentToken) {
                console.log(currentToken);
                if (currentToken) {
                    console.warn('Token received - ', currentToken);
                    pushwru_sendTokenToServer(currentToken, function(){});
                    setTimeout( function(){
                        if (typeof pushru_on_subscribed == 'function'){
                                pushru_on_subscribed( currentToken ? true : false );
                        }
                    },100);
                } else {
                    console.warn('Failed to get token.');
                    pushwru_setTokenSentToServer(false);
                }
            }).catch(function (err) {
            	console.warn('Error happened when receiving token. RESUBSCRIBE...', err);
                if (typeof pushru_on_subscribe_fail == 'function' && g_subfail == 0){
                    pushru_on_subscribe_fail();
                }
                g_subfail ++ ;
                if (g_subfail>5){ return; }
                setTimeout(function() {
    		    pushwru_subscribe();
		},500);

            });
        })
        .catch(function (err) {
            console.log( ' selected = '+ Notification.permission );
            console.warn('Failed to get permission for notifications.', err);
            pushwru_popup_close();
            if (typeof pushru_on_subscribe_deny == 'function'){
                pushru_on_subscribe_deny(  );
            }
        });
    }
    
    if ('Notification' in window) {
        messaging = firebase.messaging();
        if (Notification.permission === 'granted') {
                    pushwru_subscribe();
        }
        else if (Notification.permission === 'default') {
            console.log ( 'default, ask' );
    
    
        } 
        else {
        }
    }
    
    }
    document.head.appendChild(scr);
    }
    
    document.head.appendChild(scr2);
    
    
    }
    