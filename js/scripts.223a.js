window.ds={};var ds=window.ds;!function($,window,document){ds.goTo=function(e,targetLinkCategory,url,duration){if(e.metaKey||e.ctrlKey)window.open(url,"_blank"),"activeElement"in document&&document.activeElement.blur();else{var $menu=$(".menu-wrapper");$menu.find('a[href="'+targetLinkCategory+'"]').addClass("active"),$menu.find('a[href!="'+targetLinkCategory+'"]').removeClass("active"),$("html, body").velocity("scroll",{duration:duration,easing:"easeOutSine",complete:function(){$("body").addClass("fade-out-content"),$(".main-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){menuItemHasBeenClicked=!0,window.location.href=url})}})}},ds.contactFormPrintResult=function(formObj,text,type){$(".contact-form-status",formObj).text(text),"success"==type?formObj.removeClass("form-sending").removeClass("form-error").addClass("form-sent"):formObj.removeClass("form-sending").addClass("form-error")},ds.loadAddThis=function(){$.ajax({url:"//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-55212f455ceec544",dataType:"script",cache:!0,success:function(){$("body").addClass("addthis-ready")}})},ds.loadLightbox=function(){$.extend(!0,$.magnificPopup.defaults,{tClose:"Sluiten",tLoading:"Laden...",gallery:{tPrev:"Vorige",tNext:"Volgende",tCounter:"%curr% van %total%"},image:{tError:"De afbeelding kon niet worden geladen."},ajax:{tError:"De inhoud kon niet worden geladen."}}),$(".lightbox").magnificPopup({delegate:"figure",type:"image",closeOnContentClick:!1,closeBtnInside:!1,showCloseBtn:!1,mainClass:"mfp-with-zoom mfp-img-mobile",gallery:{enabled:!0},image:{verticalFit:!0,titleSrc:function(item){return""}},zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(element){return element.find("img")}}}),$("body").hasClass("slider-loaded")&&($.magnificPopup.instance.next=function(){ds.carousel.trigger("next.owl.carousel"),$.magnificPopup.proto.next.call(this)},$.magnificPopup.instance.prev=function(){ds.carousel.trigger("prev.owl.carousel"),$.magnificPopup.proto.prev.call(this)})},ds.loadPhotoslider=function(){ds.carousel=$(".owl-carousel"),ds.carousel.owlCarousel({loop:!1,margin:0,nav:!1,singleItem:!0,items:1,lazyLoad:!0,lazyFollow:!1,mouseDrag:!1,animateIn:"zoomIn",animateOut:"fadeOutDown",smartSpeed:300,onInitialized:ds.sliderLoaded})},ds.sliderLoaded=function(){$("body").addClass("slider-loaded")},ds.fadeInTracks=function(){var timeout=80,$tracks=$(".track",".tracks");$tracks.each(function(index){var $track=$(this);setTimeout(function(){$track.addClass("fade-in")},timeout*index)})},ds.searchOnGitHub=function(term){var path="blog/";$.getJSON("https://api.github.com/search/code?q="+escape(term)+"+in%3Afile+repo%3ADaanScholten%2FDaanScholten.github.io+extension%3Ahtml+path%3A/"+path,function(data){var items=[];$.each(data.items,function(key,val){val.path!=path+"index.html"&&items.push("/"+val.path)}),console.log(items)})},ds.loadSCWidgetAPI=function(){}}(window.jQuery,window,document),function(){for(var method,noop=function(){},methods=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],length=methods.length,console=window.console=window.console||{};length--;)method=methods[length],console[method]||(console[method]=noop)}();var app;!function(){app=angular.module("app",["plangular"]).config(function(plangularConfigProvider){plangularConfigProvider.clientId="b4a382f16b1d7f1438296d68f66b04ed"}).directive("onLastRepeat",function(){return function(scope,element,attrs){scope.$last&&setTimeout(function(){scope.$emit("onRepeatLast",element,attrs)},1)}}).controller("fadeInWhenDone",function($scope){$scope.$on("onRepeatLast",function(scope,element,attrs){ds.fadeInTracks()})}).controller("trackArtwork",function($scope){$scope.artwork=function(originalURL){return originalURL?originalURL.replace("large","t500x500"):void 0}})}();var ds=window.ds,twigTemplates={};if($("body").css("display","none"),$.cookie("daanscholtennlaccess"))$("body").css("display","block");else{var getAccess=prompt("Deze site is onder constructie en is afgesloten voor publiek.","");"abracadabra"==getAccess?($.cookie("daanscholtennlaccess","granted",{expires:7,path:"/"}),$("body").css("display","block")):window.close()}var isSafari=/constructor/i.test(window.HTMLElement);isSafari&&$("body").addClass("is-safari"),function($,window,document){var menuItemHasBeenClicked=!1;$(function(){function refreshMenuPosition(){$(".menu-wrapper-wrapper").css("height",$(".menu-wrapper").height()),menuPosition=$(".header-wrapper").height()}function stickyMenuState(){$(window).scrollTop()+1>menuPosition?$("body").addClass("menu-fixed").removeClass("menu-static"):$("body").addClass("menu-static").removeClass("menu-fixed")}function callRefreshMenuPosition(){window.requestAnimationFrame(refreshMenuPosition)}setTimeout(function(){$("body").removeClass("fade-out-content")},40),ds.loadSCWidgetAPI(),ds.loadPhotoslider(),ds.loadLightbox(),Modernizr.svg||$('img[src*="svg"]').attr("src",function(){return $(this).attr("src").replace(".svg",".png")});var menuPosition;callRefreshMenuPosition(),$(window).on("resize",callRefreshMenuPosition),$(window).on("scroll",stickyMenuState),stickyMenuState(),$(document.links).filter(function(){var has_target=_.isString($(this).attr("target")),is_external=this.hostname!=window.location.hostname;return is_external&&!has_target}).attr("target","_blank"),$(document).on("click touch","a[target!=_blank]:not(.no-fade)",function(e){e.preventDefault();var targetLinkCategory,$that=$(this),targetLink=$(this).attr("href"),currentPage=window.location.pathname,isAddThisLink=!1;$that.attr("class")&&$that.attr("class").indexOf("addthis")>-1&&(isAddThisLink=!0),"/"!=currentPage&&"/"==currentPage.slice(-1)&&(currentPage=currentPage.slice(0,currentPage.length-1)),targetLinkCategory="/"+targetLink.split("/")[1],menuItemHasBeenClicked||currentPage==targetLink||isAddThisLink||(0!=$(window).scrollTop()?ds.goTo(e,targetLinkCategory,$that.attr("href"),300):ds.goTo(e,targetLinkCategory,$that.attr("href"),0))})})}(window.jQuery,window,document);var validation,formSending=!1;$(function(){function sendContactForm(){var $name=$('[name="name"]',$form),$email=$('[name="email"]',$form),$tel=$('[name="tel"]',$form),$message=$('[name="message"]',$form),to="info@daanscholten.nl";return $form.removeClass("form-error"),$.ajax({type:"POST",url:"https://mandrillapp.com/api/1.0/messages/send.json",data:{key:"RrgEGMPYlBUZsIWLcsp6yA",message:{from_email:"no-reply@daanscholten.nl",from_name:"Contactformulier inzendingen",headers:{"Reply-To":$email.val()},subject:"Nieuwe contactformulier inzending",text:"Naam: "+$name.val()+"\nE-mail: "+$email.val()+"\nTel: "+$tel.val()+"\n\nBericht:\n"+$message.val(),to:[{email:to,name:"Daan Scholten",type:"to"}]}}}).done(function(response){formSending=!1,"sent"==response[0].status?($.ajax({type:"POST",url:"https://mandrillapp.com/api/1.0/messages/send.json",data:{key:"RrgEGMPYlBUZsIWLcsp6yA",message:{from_email:to,from_name:"Daan Scholten",headers:{"Reply-To":to},subject:"Bedankt voor uw bericht",text:"Beste "+$name.val()+",\n\nBedankt voor uw bericht via het contactformulier op http://www.daanscholten.nl/.\nUw bericht is in goede orde ontvangen. U krijgt van mij zo snel mogelijk een reactie.\n\nMet vriendelijke groet,\nDaan Scholten",to:[{email:$email.val(),name:$name.val(),type:"to"}]}}}),ds.contactFormPrintResult($form,"Bedankt voor uw bericht!","success")):(formSending=!1,ds.contactFormPrintResult($form,"Er heeft zich een fout voorgedaan.","fail"))}).fail(function(response){formSending=!1,ds.contactFormPrintResult($form,"Er heeft zich een fout voorgedaan.","fail")}),!1}$form=$(".contact-form"),validation=$form.validate({rules:{name:{required:!0},email:{required:!0,email:!0},tel:{required:!0},message:{required:!0}},messages:{name:{required:""},email:{required:"",email:""},tel:{required:""},message:{required:""}},errorClass:"invalid",validClass:"valid",focusInvalid:!0,onfocusout:function(element){this.element(element)},submitHandler:function(form){1!=formSending&&($form.addClass("form-sending"),formSending=!0,sendContactForm())}})}(window.jQuery,window,document));