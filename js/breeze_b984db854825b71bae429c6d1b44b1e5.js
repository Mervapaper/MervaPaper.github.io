
var sbi_js_exists=void 0!==sbi_js_exists;sbi_js_exists||(!function($){function a(){this.feeds={},this.options=sb_instagram_js_options}function b(a,b,c){this.el=a,this.index=b,this.settings=c,this.minImageWidth=0,this.imageResolution=150,this.resizedImages={},this.needsResizing=[],this.outOfPages=!1,this.page=1,this.isInitialized=!1}function c(a,b){$.ajax({url:sbiajaxurl,type:"post",data:a,success:b})}a.prototype={createPage:function(a,b){void 0!==sb_instagram_js_options.ajax_url&& void 0===window.sbiajaxurl&&(window.sbiajaxurl=sb_instagram_js_options.ajax_url),(void 0===window.sbiajaxurl|| -1===window.sbiajaxurl.indexOf(window.location.hostname))&&(window.sbiajaxurl=location.protocol+"//"+window.location.hostname+"/wp-admin/admin-ajax.php"),$("#sbi-builder-app").length&& void 0===window.sbiresizedImages&&$(".sbi_resized_image_data").length&& void 0!==$(".sbi_resized_image_data").attr("data-resized")&&0===$(".sbi_resized_image_data").attr("data-resized").indexOf('{"')&&(window.sbiresizedImages=JSON.parse($(".sbi_resized_image_data").attr("data-resized")),$(".sbi_resized_image_data").remove()),$(".sbi_no_js_error_message").remove(),$(".sbi_no_js").removeClass("sbi_no_js"),a(b)},createFeeds:function(a){a.whenFeedsCreated($(".sbi").each(function(e){$(this).attr("data-sbi-index",e+1);var a=$(this),d=void 0!==a.attr("data-sbi-flags")?a.attr("data-sbi-flags").split(","):[],j=void 0!==a.attr("data-options")?JSON.parse(a.attr("data-options")):{};d.indexOf("testAjax")> -1&&(window.sbi.triggeredTest=!0,c({action:"sbi_on_ajax_test_trigger"},function(a){console.log("did test")}));var f,g,h,k={cols:a.attr("data-cols"),colsmobile:void 0!==a.attr("data-colsmobile")&&"same"!==a.attr("data-colsmobile")?a.attr("data-colsmobile"):a.attr("data-cols"),colstablet:void 0!==a.attr("data-colstablet")&&"same"!==a.attr("data-colstablet")?a.attr("data-colstablet"):a.attr("data-cols"),num:a.attr("data-num"),imgRes:a.attr("data-res"),feedID:a.attr("data-feedid"),postID:"undefind"!=typeof a.attr("data-postid")?a.attr("data-postid"):"unknown",shortCodeAtts:a.attr("data-shortcode-atts"),resizingEnabled:-1===d.indexOf("resizeDisable"),imageLoadEnabled:-1===d.indexOf("imageLoadDisable"),debugEnabled:d.indexOf("debug")> -1,favorLocal:d.indexOf("favorLocal")> -1,ajaxPostLoad:d.indexOf("ajaxPostLoad")> -1,gdpr:d.indexOf("gdpr")> -1,overrideBlockCDN:d.indexOf("overrideBlockCDN")> -1,consentGiven:!1,locator:d.indexOf("locator")> -1,autoMinRes:1,general:j};window.sbi.feeds[e]=(f=this,g=e,h=k,new b(f,g,h)),window.sbi.feeds[e].setResizedImages(),window.sbi.feeds[e].init();var i=jQuery.Event("sbiafterfeedcreate");i.feed=window.sbi.feeds[e],jQuery(window).trigger(i)}))},afterFeedsCreated:function(){$(".sb_instagram_header").each(function(){var a=$(this);a.find(".sbi_header_link").on("mouseenter mouseleave",function(b){switch(b.type){case"mouseenter":a.find(".sbi_header_img_hover").addClass("sbi_fade_in");break;case"mouseleave":a.find(".sbi_header_img_hover").removeClass("sbi_fade_in")}})})},encodeHTML:function(b){if(void 0===b)return"";var a=b.replace(/(>)/g,"&gt;"),a=a.replace(/(<)/g,"&lt;");return(a=a.replace(/(&lt;br\/&gt;)/g,"<br>")).replace(/(&lt;br&gt;)/g,"<br>")},urlDetect:function(a){return a.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)}},b.prototype={init:function(){var b,a=this;a.settings.consentGiven=a.checkConsent(),$(this.el).find(".sbi_photo").parent("p").length&&$(this.el).addClass("sbi_no_autop"),$(this.el).find("#sbi_mod_error").length&&$(this.el).prepend($(this.el).find("#sbi_mod_error")),this.settings.ajaxPostLoad?this.getNewPostSet():this.afterInitialImagesLoaded();var c=(b=0,function(a,c){clearTimeout(b),b=setTimeout(a,c)});jQuery(window).on("resize",function(){c(function(){a.afterResize()},500)}),$(this.el).find(".sbi_item").each(function(){a.lazyLoadCheck($(this))})},initLayout:function(){},afterInitialImagesLoaded:function(){this.initLayout(),this.loadMoreButtonInit(),this.hideExtraImagesForWidth(),this.beforeNewImagesRevealed(),this.revealNewImages(),this.afterNewImagesRevealed()},afterResize:function(){this.setImageHeight(),this.setImageResolution(),this.maybeRaiseImageResolution(),this.setImageSizeClass()},afterLoadMoreClicked:function(a){a.find(".sbi_loader").removeClass("sbi_hidden"),a.find(".sbi_btn_text").addClass("sbi_hidden"),a.closest(".sbi").find(".sbi_num_diff_hide").addClass("sbi_transition").removeClass("sbi_num_diff_hide")},afterNewImagesLoaded:function(){var a=$(this.el),b=this;this.beforeNewImagesRevealed(),this.revealNewImages(),this.afterNewImagesRevealed(),setTimeout(function(){a.find(".sbi_loader").addClass("sbi_hidden"),a.find(".sbi_btn_text").removeClass("sbi_hidden"),b.maybeRaiseImageResolution()},500)},beforeNewImagesRevealed:function(){this.setImageHeight(),this.maybeRaiseImageResolution(!0),this.setImageSizeClass()},revealNewImages:function(){var a=$(this.el);a.find(".sbi-screenreader").each(function(){$(this).find("img").remove()}),"function"==typeof sbi_custom_js&&setTimeout(function(){sbi_custom_js()},100),this.applyImageLiquid(),a.find(".sbi_item").each(function(a){jQuery(this).find(".sbi_photo").on("mouseenter mouseleave",function(a){switch(a.type){case"mouseenter":jQuery(this).fadeTo(200,.85);break;case"mouseleave":jQuery(this).stop().fadeTo(500,1)}})}),setTimeout(function(){jQuery("#sbi_images .sbi_item.sbi_new").removeClass("sbi_new");var b=10;a.find(".sbi_transition").each(function(){var a=jQuery(this);setTimeout(function(){a.removeClass("sbi_transition")},b),b+=10})},500)},lazyLoadCheck:function(a){if(a.find(".sbi_photo").length&&!a.closest(".sbi").hasClass("sbi-no-ll-check")){var b=this.getImageUrls(a),c=void 0!==b[640]?b[640]:a.find(".sbi_photo").attr("data-full-res");!(!this.settings.consentGiven&&c.indexOf("scontent")> -1)&&a.find(".sbi_photo img").each(function(){c&& void 0!==$(this).attr("data-src")&&$(this).attr("data-src",c),c&& void 0!==$(this).attr("data-orig-src")&&$(this).attr("data-orig-src",c),$(this).on("load",function(){!$(this).hasClass("sbi-replaced")&&$(this).attr("src").indexOf("placeholder")> -1&&($(this).addClass("sbi-replaced"),c&&($(this).attr("src",c),$(this).closest(".sbi_imgLiquid_bgSize").length&&$(this).closest(".sbi_imgLiquid_bgSize").css("background-image","url("+c+")")))})})}},afterNewImagesRevealed:function(){this.listenForVisibilityChange(),this.sendNeedsResizingToServer(),this.settings.imageLoadEnabled||$(".sbi_no_resraise").removeClass("sbi_no_resraise");var a=$.Event("sbiafterimagesloaded");a.el=$(this.el),$(window).trigger(a)},setResizedImages:function(){$(this.el).find(".sbi_resized_image_data").length&& void 0!==$(this.el).find(".sbi_resized_image_data").attr("data-resized")&&0===$(this.el).find(".sbi_resized_image_data").attr("data-resized").indexOf('{"')?(this.resizedImages=JSON.parse($(this.el).find(".sbi_resized_image_data").attr("data-resized")),$(this.el).find(".sbi_resized_image_data").remove()):void 0!==window.sbiresizedImages&&(this.resizedImages=window.sbiresizedImages)},sendNeedsResizingToServer:function(){var a=this,d=$(this.el);if(a.needsResizing.length>0&&a.settings.resizingEnabled){var g=$(this.el).find(".sbi_item").length,h=void 0!==a.settings.general.cache_all&&a.settings.general.cache_all,b="";if(void 0!==d.attr("data-locatornonce")&&(b=d.attr("data-locatornonce")),$("#sbi-builder-app").length){if(void 0!==window.sbiresizeTriggered&&window.sbiresizeTriggered)return;window.sbiresizeTriggered=!0}var e={action:"sbi_resized_images_submit",needs_resizing:a.needsResizing,offset:g,feed_id:a.settings.feedID,atts:a.settings.shortCodeAtts,location:a.locationGuess(),post_id:a.settings.postID,cache_all:h,locator_nonce:b},f=function(c){var b=c;for(var d in"object"!=typeof c&&0===c.trim().indexOf("{")&&(b=JSON.parse(c.trim())),a.settings.debugEnabled&&console.log(b),b)b.hasOwnProperty(d)&&(a.resizedImages[d]=b[d]);a.maybeRaiseImageResolution(),setTimeout(function(){a.afterResize()},500),$("#sbi-builder-app").length&&(window.sbiresizeTriggered=!1)};c(e,f)}else if(a.settings.locator){var b="";void 0!==d.attr("data-locatornonce")&&(b=d.attr("data-locatornonce"));var e={action:"sbi_do_locator",feed_id:a.settings.feedID,atts:a.settings.shortCodeAtts,location:a.locationGuess(),post_id:a.settings.postID,locator_nonce:b},f=function(a){};c(e,f)}},loadMoreButtonInit:function(){var a=$(this.el),b=this;a.find("#sbi_load .sbi_load_btn").off().on("click",function(){b.afterLoadMoreClicked(jQuery(this)),b.getNewPostSet()})},getNewPostSet:function(){var b=$(this.el),a=this;a.page++;var d="";void 0!==b.attr("data-locatornonce")&&(d=b.attr("data-locatornonce"));var e={action:"sbi_load_more_clicked",offset:b.find(".sbi_item").length,page:a.page,feed_id:a.settings.feedID,atts:a.settings.shortCodeAtts,location:a.locationGuess(),post_id:a.settings.postID,current_resolution:a.imageResolution,locator_nonce:d};c(e,function(d){var c=d;"object"!=typeof d&&0===d.trim().indexOf("{")&&(c=JSON.parse(d.trim())),a.settings.debugEnabled&&console.log(c),a.appendNewPosts(c.html),a.addResizedImages(c.resizedImages),a.settings.ajaxPostLoad?(a.settings.ajaxPostLoad=!1,a.afterInitialImagesLoaded()):a.afterNewImagesLoaded(),c.feedStatus.shouldPaginate?a.outOfPages=!1:(a.outOfPages=!0,b.find(".sbi_load_btn").hide()),$(".sbi_no_js").removeClass("sbi_no_js")})},appendNewPosts:function(b){var a=$(this.el);a.find("#sbi_images .sbi_item").length?a.find("#sbi_images .sbi_item").last().after(b):a.find("#sbi_images").append(b)},addResizedImages:function(a){for(var b in a)this.resizedImages[b]=a[b]},setImageHeight:function(){var a=$(this.el),c=a.find(".sbi_photo").eq(0).innerWidth(),d=this.getColumnCount(),b=a.find("#sbi_images").innerWidth()-a.find("#sbi_images").width(),e=b/2;sbi_photo_width_manual=a.find("#sbi_images").width()/d-b,a.find(".sbi_photo").css("height",c),a.find(".sbi-owl-nav").length&&setTimeout(function(){var b=2;a.find(".sbi_owl2row-item").length&&(b=1);var c=a.find(".sbi_photo").eq(0).innerWidth()/b;c+=parseInt(e)*(2+(2-b)),a.find(".sbi-owl-nav div").css("top",c)},100)},maybeRaiseSingleImageResolution:function(a,n,f){var c=this,d=c.getImageUrls(a),e=a.find(".sbi_photo img").attr("src"),h=150,i=a.find("img").get(0),j=e===window.sbi.options.placeholder?1:i.naturalWidth/i.naturalHeight,f=void 0!==f&&f;if(!(a.hasClass("sbi_no_resraise")||a.hasClass("sbi_had_error")||a.find(".sbi_link_area").length&&a.find(".sbi_link_area").hasClass("sbi_had_error"))){if(d.length<1){a.find(".sbi_link_area").length&&a.find(".sbi_link_area").attr("href",window.sbi.options.placeholder.replace("placeholder.png","thumb-placeholder.png"));return}(a.find(".sbi_link_area").length&&a.find(".sbi_link_area").attr("href")===window.sbi.options.placeholder.replace("placeholder.png","thumb-placeholder.png")||!c.settings.consentGiven)&&a.find(".sbi_link_area").attr("href",d[d.length-1]),void 0!==d[640]&&a.find(".sbi_photo").attr("data-full-res",d[640]),$.each(d,function(a,b){b===e&&(h=parseInt(a),f=!1)});var b=640;switch(c.settings.imgRes){case"thumb":b=150;break;case"medium":b=320;break;case"full":b=640;break;default:var k=Math.max(c.settings.autoMinRes,a.find(".sbi_photo").innerWidth()),l=c.getBestResolutionForAuto(k,j,a);switch(l){case 320:b=320;break;case 150:b=150}}if(b>h||e===window.sbi.options.placeholder||f){if(c.settings.debugEnabled){var m=e===window.sbi.options.placeholder?"was placeholder":"too small";console.log("rais res for "+e,m)}var g=d[b].split("?ig_cache_key")[0];if(e!==g&&(a.find(".sbi_photo img").attr("src",g),a.find(".sbi_photo").css("background-image",'url("'+g+'")')),h=b,"auto"===c.settings.imgRes){var o=!1;a.find(".sbi_photo img").on("load",function(){var f=$(this),i=f.get(0).naturalWidth/f.get(0).naturalHeight;if(1e3!==f.get(0).naturalWidth&&i>j&&!o){switch(c.settings.debugEnabled&&console.log("rais res again for aspect ratio change "+e),o=!0,k=a.find(".sbi_photo").innerWidth(),l=c.getBestResolutionForAuto(k,i,a),b=640,l){case 320:b=320;break;case 150:b=150}b>h&&(g=d[b].split("?ig_cache_key")[0],f.attr("src",g),f.closest(".sbi_photo").css("background-image",'url("'+g+'")')),("masonry"===c.layout||"highlight"===c.layout)&&($(c.el).find("#sbi_images").smashotope(c.isotopeArgs),setTimeout(function(){$(c.el).find("#sbi_images").smashotope(c.isotopeArgs)},500))}else if(c.settings.debugEnabled){var m=o?"already checked":"no aspect ratio change";console.log("not raising res for replacement  "+e,m)}})}}a.find("img").on("error",function(){if($(this).hasClass("sbi_img_error"))console.log("unfixed error "+$(this).attr("src"));else{if($(this).addClass("sbi_img_error"),!($(this).attr("src").indexOf("media/?size=")> -1||$(this).attr("src").indexOf("cdninstagram")> -1||$(this).attr("src").indexOf("fbcdn")> -1)&&c.settings.consentGiven){if("undefined"!==$(this).closest(".sbi_photo").attr("data-img-src-set")){var a=JSON.parse($(this).closest(".sbi_photo").attr("data-img-src-set").replace(/\\\//g,"/"));void 0!==a.d&&($(this).attr("src",a.d),$(this).closest(".sbi_photo").css("background-image","url("+a.d+")"),$(this).closest(".sbi_item").addClass("sbi_had_error").find(".sbi_link_area").attr("href",a[640]).addClass("sbi_had_error"))}}else{c.settings.favorLocal=!0;var a=c.getImageUrls($(this).closest(".sbi_item"));void 0!==a[640]&&($(this).attr("src",a[640]),$(this).closest(".sbi_photo").css("background-image","url("+a[640]+")"),$(this).closest(".sbi_item").addClass("sbi_had_error").find(".sbi_link_area").attr("href",a[640]).addClass("sbi_had_error"))}setTimeout(function(){c.afterResize()},1500)}})}},maybeRaiseImageResolution:function(b){var a=this,c=!a.isInitialized;$(a.el).find(void 0!==b&& !0===b?".sbi_item.sbi_new":".sbi_item").each(function(b){!$(this).hasClass("sbi_num_diff_hide")&&$(this).find(".sbi_photo").length&& void 0!==$(this).find(".sbi_photo").attr("data-img-src-set")&&a.maybeRaiseSingleImageResolution($(this),b,c)}),a.isInitialized=!0},getBestResolutionForAuto:function(d,a,e){(isNaN(a)||a<1)&&(a=1);var b=10*Math.ceil(d*a/10),c=[150,320,640];if(e.hasClass("sbi_highlighted")&&(b*=2),-1===c.indexOf(parseInt(b))){var f=!1;$.each(c,function(c,a){a>parseInt(b)&&!f&&(b=a,f=!0)})}return b},hideExtraImagesForWidth:function(){if("carousel"!==this.layout){var a=$(this.el),b=void 0!==a.attr("data-num")&&""!==a.attr("data-num")?parseInt(a.attr("data-num")):1,c=void 0!==a.attr("data-nummobile")&&""!==a.attr("data-nummobile")?parseInt(a.attr("data-nummobile")):b;480>$(window).width()||"mobile"===window.sbi_preview_device?c<a.find(".sbi_item").length&&a.find(".sbi_item").slice(c-a.find(".sbi_item").length).addClass("sbi_num_diff_hide"):b<a.find(".sbi_item").length&&a.find(".sbi_item").slice(b-a.find(".sbi_item").length).addClass("sbi_num_diff_hide")}},setImageSizeClass:function(){var a=$(this.el);a.removeClass("sbi_small sbi_medium");var d=a.innerWidth(),e=parseInt(a.find("#sbi_images").outerWidth()-a.find("#sbi_images").width())/2,c=this.getColumnCount(),b=(d-e*(c+2))/c;b>120&&b<240?a.addClass("sbi_medium"):b<=120&&a.addClass("sbi_small")},setMinImageWidth:function(){$(this.el).find(".sbi_item .sbi_photo").first().length?this.minImageWidth=$(this.el).find(".sbi_item .sbi_photo").first().innerWidth():this.minImageWidth=150},setImageResolution:function(){if("auto"===this.settings.imgRes)this.imageResolution="auto";else switch(this.settings.imgRes){case"thumb":this.imageResolution=150;break;case"medium":this.imageResolution=320;break;default:this.imageResolution=640}},getImageUrls:function(d){var c=JSON.parse(d.find(".sbi_photo").attr("data-img-src-set").replace(/\\\//g,"/")),a=d.attr("id").replace("sbi_","");if(this.settings.consentGiven||this.settings.overrideBlockCDN||(c=[]),void 0!==this.resizedImages[a]&&"video"!==this.resizedImages[a]&&"pending"!==this.resizedImages[a]&&"error"!==this.resizedImages[a].id&&"video"!==this.resizedImages[a].id&&"pending"!==this.resizedImages[a].id){if(void 0!==this.resizedImages[a].sizes){var b=[];void 0!==this.resizedImages[a].sizes.full&&(c[640]=sb_instagram_js_options.resized_url+this.resizedImages[a].id+"full.jpg",b.push(640)),void 0!==this.resizedImages[a].sizes.low&&(c[320]=sb_instagram_js_options.resized_url+this.resizedImages[a].id+"low.jpg",b.push(320)),void 0!==this.resizedImages[a].sizes.thumb&&(b.push(150),c[150]=sb_instagram_js_options.resized_url+this.resizedImages[a].id+"thumb.jpg"),this.settings.favorLocal&&(-1===b.indexOf(640)&&b.indexOf(320)> -1&&(c[640]=sb_instagram_js_options.resized_url+this.resizedImages[a].id+"low.jpg"),-1===b.indexOf(320)&&(b.indexOf(640)> -1?c[320]=sb_instagram_js_options.resized_url+this.resizedImages[a].id+"full.jpg":b.indexOf(150)> -1&&(c[320]=sb_instagram_js_options.resized_url+this.resizedImages[a].id+"thumb.jpg")),-1===b.indexOf(150)&&(b.indexOf(320)> -1?c[150]=sb_instagram_js_options.resized_url+this.resizedImages[a].id+"low.jpg":b.indexOf(640)> -1&&(c[150]=sb_instagram_js_options.resized_url+this.resizedImages[a].id+"full.jpg")))}}else(void 0===this.resizedImages[a]|| void 0!==this.resizedImages[a].id&&"pending"!==this.resizedImages[a].id&&"error"!==this.resizedImages[a].id)&&this.addToNeedsResizing(a);return c},getAvatarUrl:function(a,c){if(""===a)return"";var b=this.settings.general.avatars,c=void 0!==c?c:"local";return"local"===c?void 0!==b["LCL"+a]&&1===parseInt(b["LCL"+a])?sb_instagram_js_options.resized_url+a+".jpg":void 0!==b[a]?b[a]:"":void 0!==b[a]?b[a]:void 0!==b["LCL"+a]&&1===parseInt(b["LCL"+a])?sb_instagram_js_options.resized_url+a+".jpg":""},addToNeedsResizing:function(a){-1===this.needsResizing.indexOf(a)&&this.needsResizing.push(a)},applyImageLiquid:function(){var b,c,d,a,e=$(this.el);(b=b||{VER:"0.9.944"}).bgs_Available=!1,b.bgs_CheckRunned=!1,function(a){a.fn.extend({sbi_imgLiquid:function(c){this.defaults={fill:!0,verticalAlign:"center",horizontalAlign:"center",useBackgroundSize:!0,useDataHtmlAttr:!0,responsive:!0,delay:0,fadeInTime:0,removeBoxBackground:!0,hardPixels:!0,responsiveCheckTime:500,timecheckvisibility:500,onStart:null,onFinish:null,onItemStart:null,onItemFinish:null,onItemError:null},function(){if(!b.bgs_CheckRunned){b.bgs_CheckRunned=!0;var c=a('<span style="background-size:cover" />');a("body").append(c),function(){var d=c[0];if(d&&window.getComputedStyle){var a=window.getComputedStyle(d,null);a&&a.backgroundSize&&(b.bgs_Available="cover"===a.backgroundSize)}}(),c.remove()}}();var d=this;return this.options=c,this.settings=a.extend({},this.defaults,this.options),this.settings.onStart&&this.settings.onStart(),this.each(function(g){function h(){function d(){f.data("sbi_imgLiquid_error")||f.data("sbi_imgLiquid_loaded")||f.data("sbi_imgLiquid_oldProcessed")||(e.is(":visible")&&f[0].complete&&f[0].width>0&&f[0].height>0?(f.data("sbi_imgLiquid_loaded",!0),setTimeout(l,g*c.delay)):setTimeout(d,c.timecheckvisibility))}if(f.data("oldSrc")&&f.data("oldSrc")!==f.attr("src")){var b=f.clone().removeAttr("style");return b.data("sbi_imgLiquid_settings",f.data("sbi_imgLiquid_settings")),f.parent().prepend(b),f.remove(),(f=b)[0].width=0,void setTimeout(h,10)}return f.data("sbi_imgLiquid_oldProcessed")?void l():(f.data("sbi_imgLiquid_oldProcessed",!1),f.data("oldSrc",f.attr("src")),a("img:not(:first)",e).css("display","none"),e.css({overflow:"hidden"}),f.fadeTo(0,0).removeAttr("width").removeAttr("height").css({visibility:"visible","max-width":"none","max-height":"none",width:"auto",height:"auto",display:"block"}),f.on("error",i),f[0].onerror=i,d(),void k())}function k(){(c.responsive||f.data("sbi_imgLiquid_oldProcessed"))&&f.data("sbi_imgLiquid_settings")&&(c=f.data("sbi_imgLiquid_settings"),e.actualSize=e.get(0).offsetWidth+e.get(0).offsetHeight/1e4,e.sizeOld&&e.actualSize!==e.sizeOld&&l(),e.sizeOld=e.actualSize,setTimeout(k,c.responsiveCheckTime))}function i(){f.data("sbi_imgLiquid_error",!0),e.addClass("sbi_imgLiquid_error"),c.onItemError&&c.onItemError(g,e,f),j()}function l(){var i,k,l,m,a,b,n,o,d=0,h=0,p=e.width(),q=e.height();void 0===f.data("owidth")&&f.data("owidth",f[0].width),void 0===f.data("oheight")&&f.data("oheight",f[0].height),c.fill===p/q>=f.data("owidth")/f.data("oheight")?(i="100%",k="auto",l=Math.floor(p),m=Math.floor(p*(f.data("oheight")/f.data("owidth")))):(i="auto",k="100%",l=Math.floor(q*(f.data("owidth")/f.data("oheight"))),m=Math.floor(q)),a=c.horizontalAlign.toLowerCase(),n=p-l,"left"===a&&(h=0),"center"===a&&(h=.5*n),"right"===a&&(h=n),-1!==a.indexOf("%")&&(a=parseInt(a.replace("%",""),10))>0&&(h=n*a*.01),b=c.verticalAlign.toLowerCase(),o=q-m,"left"===b&&(d=0),"center"===b&&(d=.5*o),"bottom"===b&&(d=o),-1!==b.indexOf("%")&&(b=parseInt(b.replace("%",""),10))>0&&(d=o*b*.01),c.hardPixels&&(i=l,k=m),f.css({width:i,height:k,"margin-left":Math.floor(h),"margin-top":Math.floor(d)}),f.data("sbi_imgLiquid_oldProcessed")||(f.fadeTo(c.fadeInTime,1),f.data("sbi_imgLiquid_oldProcessed",!0),c.removeBoxBackground&&e.css("background-image","none"),e.addClass("sbi_imgLiquid_nobgSize"),e.addClass("sbi_imgLiquid_ready")),c.onItemFinish&&c.onItemFinish(g,e,f),j()}function j(){g===d.length-1&&d.settings.onFinish&&d.settings.onFinish()}var c=d.settings,e=a(this),f=a("img:first",e);return f.length?(f.data("sbi_imgLiquid_settings")?(e.removeClass("sbi_imgLiquid_error").removeClass("sbi_imgLiquid_ready"),c=a.extend({},f.data("sbi_imgLiquid_settings"),d.options)):c=a.extend({},d.settings,function(){var f={};if(d.settings.useDataHtmlAttr){var g=e.attr("data-sbi_imgLiquid-fill"),a=e.attr("data-sbi_imgLiquid-horizontalAlign"),c=e.attr("data-sbi_imgLiquid-verticalAlign");("true"===g||"false"===g)&&(f.fill=Boolean("true"===g)),void 0===a||"left"!==a&&"center"!==a&&"right"!==a&& -1===a.indexOf("%")||(f.horizontalAlign=a),void 0===c||"top"!==c&&"bottom"!==c&&"center"!==c&& -1===c.indexOf("%")||(f.verticalAlign=c)}return b.isIE&&d.settings.ieFadeInDisabled&&(f.fadeInTime=0),f}()),f.data("sbi_imgLiquid_settings",c),c.onItemStart&&c.onItemStart(g,e,f),void(b.bgs_Available&&c.useBackgroundSize?(-1===e.css("background-image").indexOf(encodeURI(f.attr("src")))&&e.css({"background-image":'url("'+encodeURI(f.attr("src"))+'")'}),e.css({"background-size":c.fill?"cover":"contain","background-position":(c.horizontalAlign+" "+c.verticalAlign).toLowerCase(),"background-repeat":"no-repeat"}),a("a:first",e).css({display:"block",width:"100%",height:"100%"}),a("img",e).css({display:"none"}),c.onItemFinish&&c.onItemFinish(g,e,f),e.addClass("sbi_imgLiquid_bgSize"),e.addClass("sbi_imgLiquid_ready"),j()):h())):void i()})}})}(jQuery),c=b.injectCss,d=document.getElementsByTagName("head")[0],a=document.createElement("style"),a.type="text/css",a.styleSheet?a.styleSheet.cssText=c:a.appendChild(document.createTextNode(c)),d.appendChild(a),"function"==typeof e.find(".sbi_photo").sbi_imgLiquid&&e.find(".sbi_photo").sbi_imgLiquid({fill:!0})},listenForVisibilityChange:function(){var a,b,c,d=this;a=jQuery,b={callback:function(){},runOnLoad:!0,frequency:100,sbiPreviousVisibility:null},(c={}).sbiCheckVisibility=function(b,a){if(jQuery.contains(document,b[0])){var e=a.sbiPreviousVisibility,d=b.is(":visible");a.sbiPreviousVisibility=d,null==e?a.runOnLoad&&a.callback(b,d):e!==d&&a.callback(b,d),setTimeout(function(){c.sbiCheckVisibility(b,a)},a.frequency)}},a.fn.sbiVisibilityChanged=function(d){var e=a.extend({},b,d);return this.each(function(){c.sbiCheckVisibility(a(this),e)})},"function"==typeof $(this.el).filter(":hidden").sbiVisibilityChanged&&$(this.el).filter(":hidden").sbiVisibilityChanged({callback:function(a,b){d.afterResize()},runOnLoad:!1})},getColumnCount:function(){var c=$(this.el),a=this.settings.cols,d=this.settings.colsmobile,e=this.settings.colstablet,b=a;return sbiWindowWidth=window.innerWidth,c.hasClass("sbi_mob_col_auto")?(sbiWindowWidth<640&&parseInt(a)>2&&7>parseInt(a)&&(b=2),sbiWindowWidth<640&&parseInt(a)>6&&11>parseInt(a)&&(b=4),sbiWindowWidth<=480&&parseInt(a)>2&&(b=1)):sbiWindowWidth>480&&sbiWindowWidth<=800?b=e:sbiWindowWidth<=480&&(b=d),parseInt(b)},checkConsent:function(){if(this.settings.consentGiven||!this.settings.gdpr)return!0;if("undefined"!=typeof CLI_Cookie)null!==CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME)&&(null!==CLI_Cookie.read("cookielawinfo-checkbox-non-necessary")&&(this.settings.consentGiven="yes"===CLI_Cookie.read("cookielawinfo-checkbox-non-necessary")),null!==CLI_Cookie.read("cookielawinfo-checkbox-necessary")&&(this.settings.consentGiven="yes"===CLI_Cookie.read("cookielawinfo-checkbox-necessary")));else if(void 0!==window.cnArgs){var a=("; "+document.cookie).split("; cookie_notice_accepted=");if(2===a.length){var c=a.pop().split(";").shift();this.settings.consentGiven="true"===c}}else void 0!==window.cookieconsent?this.settings.consentGiven="allow"===function(e){for(var c=e+"=",d=window.document.cookie.split(";"),a=0;a<d.length;a++){var b=d[a].trim();if(0==b.indexOf(c))return b.substring(c.length,b.length)}return""}("complianz_consent_status"):void 0!==window.Cookiebot?this.settings.consentGiven=Cookiebot.consented:void 0!==window.BorlabsCookie&&(this.settings.consentGiven=window.BorlabsCookie.checkCookieConsent("instagram"));var b=jQuery.Event("sbicheckconsent");return b.feed=this,jQuery(window).trigger(b),this.settings.consentGiven},afterConsentToggled:function(){if(this.checkConsent()){var a=this;a.maybeRaiseImageResolution(),setTimeout(function(){a.afterResize()},500)}},locationGuess:function(){var a=$(this.el),b="content";return a.closest("footer").length?b="footer":a.closest(".header").length||a.closest("header").length?b="header":(a.closest(".sidebar").length||a.closest("aside").length)&&(b="sidebar"),b}},window.sbi_init=function(){window.sbi=new a,window.sbi.createPage(window.sbi.createFeeds,{whenFeedsCreated:window.sbi.afterFeedsCreated})}}(jQuery),jQuery(document).ready(function($){void 0===window.sb_instagram_js_options&&(window.sb_instagram_js_options={font_method:"svg",resized_url:location.protocol+"//"+window.location.hostname+"/wp-content/uploads/sb-instagram-feed-images/",placeholder:location.protocol+"//"+window.location.hostname+"/wp-content/plugins/instagram-feed/img/placeholder.png"}),void 0!==window.sb_instagram_js_options.resized_url&& -1===window.sb_instagram_js_options.resized_url.indexOf(location.protocol)&&("http:"===location.protocol?window.sb_instagram_js_options.resized_url=window.sb_instagram_js_options.resized_url.replace("https:","http:"):window.sb_instagram_js_options.resized_url=window.sb_instagram_js_options.resized_url.replace("http:","https:")),sbi_init(),$("#cookie-notice a").on("click",function(){setTimeout(function(){$.each(window.sbi.feeds,function(a){window.sbi.feeds[a].afterConsentToggled()})},1e3)}),$("#cookie-law-info-bar a").on("click",function(){setTimeout(function(){$.each(window.sbi.feeds,function(a){window.sbi.feeds[a].afterConsentToggled()})},1e3)}),$(".cli-user-preference-checkbox").on("click",function(){setTimeout(function(){$.each(window.sbi.feeds,function(a){window.sbi.feeds[a].settings.consentGiven=!1,window.sbi.feeds[a].afterConsentToggled()})},1e3)}),$(window).on("CookiebotOnAccept",function(a){$.each(window.sbi.feeds,function(a){window.sbi.feeds[a].settings.consentGiven=!0,window.sbi.feeds[a].afterConsentToggled()})}),$(document).on("cmplzAcceptAll",function(a){$.each(window.sbi.feeds,function(a){window.sbi.feeds[a].settings.consentGiven=!0,window.sbi.feeds[a].afterConsentToggled()})}),$(document).on("cmplzRevoke",function(a){$.each(window.sbi.feeds,function(a){window.sbi.feeds[a].settings.consentGiven=!1,window.sbi.feeds[a].afterConsentToggled()})}),$(document).on("borlabs-cookie-consent-saved",function(a){$.each(window.sbi.feeds,function(a){window.sbi.feeds[a].settings.consentGiven=!1,window.sbi.feeds[a].afterConsentToggled()})})}))
;