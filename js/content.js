require.config({
	urlArgs: '',//添加版本号后缀
　　paths: {
	    'swiper': 'lib/swiper.min',
　　　　}
　　});
require(['swiper'],function(){

	var $body       = $('body'),
		$commentBtn = $('#commentBtn'),
		$comment    = $('#comment'),
		$cancel	    = $comment.find('.cancel'),
		$secondMsg  = $('.second-Msg'),
		$zan        = $('#zan'),
		$iconmax	= $('.icon-max'),
		$msgList    = $('#msgList'),
		$share		= $('#share'),
	 	$zhezhao    = $('#zhezhao'),
	 	$closeShareLayer = $('#closeShareLayer'),
	 	$shareLayer = $('#shareLayer');
	$commentBtn.on('click',function(){
		$comment.toggle();
	});	
	$('.cancel').on('click',function(){
		$(this).parents('.comment').hide();
	});
	$('.cancel').on('click',function(){
		$(this).parents('.comment').hide();
	});
	$msgList.on('mouseover','.time-box',function(){
		$(this).find('.icon-reply').show();
		$(this).find('.icon-flag').show();
	});
	$msgList.on('mouseout','.time-box',function(){
		$(this).find('.icon-reply').hide();
		$(this).find('.icon-flag').hide();
	});
	$msgList.on('click','.icon-reply',function(){
		$(this).parents('dl').siblings('.comment').show();
	});
	$zan.on('click',function(){
		$zan.toggleClass('icon-zan-after');
		if($zan.hasClass('icon-zan-after')){
			var num = parseInt($zan.text());
			$zan.text(++num);
		}else{
			var num = parseInt($zan.text());
			$zan.text(--num);
		}
	});

	//弹出图片浏览器
	
	$iconmax.on('click',function(){
		$(window).scrollTop(0);
		disable_scroll(); //禁用鼠标滚动
		var liData = $(this).parents('.area').find('textarea.hide').val(); 
			dom = '<div class="kv pc">'
				+    '<div id="swiper" class="swiper-container">'
				+        '<div class="swiper-wrapper">'
				+			liData
				+        '</div>'
				+        '<div class="swiper-pagination"></div>'
				+        '<div class="swiper-button-next"></div>'
				+        '<div class="swiper-button-prev"></div>'
				+    	 '<span id="mini" class="icon-mini"></span>'
				+    '</div>'
				+'</div>';
		$body.append(dom);
		var swiper = new Swiper('#swiper', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        spaceBetween: 30
	    });
	});
	var kvWrap =  new Swiper('#kvWrap', {
		//pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		autoplayDisableOnInteraction : false,
		autoplay : 3000,
		loop : 1
	});
	$(document).on('click','#mini',function(){
		$('.kv').remove();
		enable_scroll();//恢复鼠标事件
	});
	//禁用鼠标
	var keys = [37, 38, 39, 40];

	function preventDefault(e) {
	    e = e || window.event;
	    if (e.preventDefault)
	        e.preventDefault();
	    e.returnValue = false;
	}

	function keydown(e) {
	    for (var i = keys.length; i--;) {
	        if (e.keyCode === keys[i]) {
	            preventDefault(e);
	            return;
	        }
	    }
	}

	function wheel(e) {
	    preventDefault(e);
	}

	function disable_scroll() {
	    if (window.addEventListener) {
	        window.addEventListener('DOMMouseScroll', wheel, false);
	    }
	    window.onmousewheel = document.onmousewheel = wheel;
	    document.onkeydown = keydown;
	}

	function enable_scroll() {
	    if (window.removeEventListener) {
	        window.removeEventListener('DOMMouseScroll', wheel, false);
	    }
	    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
	}


	//转发分享代码
	 $share.on('click',function(){
	 	$shareLayer.addClass('show').siblings().removeClass('show');
	 	$zhezhao.fadeIn();
	 });
	 $closeShareLayer.on('click',function(){
	 	$shareLayer.removeClass('show');
	 	$zhezhao.fadeOut();
	 });
	 $zhezhao.on('click',function(){
	 	$zhezhao.fadeOut();
		$('#tipLayer').hide();
		$('#jbLayer').hide();
	 	$shareLayer.removeClass('show');
	 	$wapPayLayer.removeClass('show');
		$('.bottom-fixed').show();
	 });



	 // 支付部分 
	 /*PC部分*/
	 var $payPc  = $('#payPc');
	 // 一期弹层特效
	 $payPc.on('click',function(){
	 	var payPcDom = '<div class="pay-layer pc">\
	 						<span class="close icon-close"></span>\
							<div class="wx-code"></div>\
							<p>请使用微信扫一扫切换到移动微信端进行支持</p>\
						</div>';
		 $body.append(payPcDom);
		 var close = $('.pay-layer').find('.close');
		 $(window).scrollTop(0);
		 disable_scroll(); //禁用鼠标滚动
		 close.on('click',function(){
		 	 $('.pay-layer').remove();
		 	 enable_scroll(); //启用鼠标滚动
		 })
	 });
	 // 二期弹层特效
	 // $payPc.on('click',function(){
	 // 	//pc端的支付弹层；
	 // 	var html =  '<div id="pcPayLayer" class="pc-pay-layer pc">\
		// 				<div class="wrap">\
		// 					<span id="closePcPayLayer" class="icon-close"></span>\
		// 					<dl class="pay-style">\
		// 						<dt class="row-t">支付方式</dt>\
		// 						<dd>\
		// 							<label for="wxPay"><input type="radio" id="wxPay" name="pay"><img src="images/wx_pay.jpg" alt=""></label>\
		// 							<label for="zfbPay"><input type="radio" id="zfbPay"  name="pay"><img src="images/zfb_pay.jpg" alt=""></label>\
		// 						</dd>\
		// 					</dl>\
		// 					<dl class="amount-money">\
		// 						<dt>选择金额</dt>\
		// 						<dd><span><i>1</i>元</span><span><i>10</i>元</span><span><i>50</i>元</span><span><i>1</i>元</span><span><i>10</i>元</span><span><i>50</i>元</span></dd>\
		// 					</dl>\
		// 					<p class="gray">或</p>\
		// 					<dl class="diy-amount">\
		// 						<dt>直接输入</dt>\
		// 						<dd><label class="num on"><span>其他</span><input type="text" placeholder="0.1~2000"><i>元</i><b></b></label><a href="" class="btn btn-primary">立即支付</a></dd>\
		// 					</dl>\
		// 				</div>\
		// 			</div>'
		// 	$body.append(html);
		// 	$('#closePcPayLayer').on('click',function(){
		// 		$('#pcPayLayer').remove();
		// 	});	
	 // })
	 // wap部分
	 $wapPayLayer =  $('#wapPayLayer'),
	 $label       = $wapPayLayer.find('label'),
	 $li          = $wapPayLayer.find('li'),
	 $txBtn = $('#txBtn');
	 $txBtn.on('click',function(){
	 	$zhezhao.fadeIn();
	 	$wapPayLayer.addClass('show');
	 });
	 $wapPayLayer.on('click','li, label',function(){
	 	$label.removeClass('on');
	 	$li.removeClass('on');
	 	$(this).addClass('on');
	 });
	 $wapPayLayer.on('click','.close',function(){
	 	$zhezhao.fadeOut();
	 	$wapPayLayer.removeClass('show');
	 });
	 function showReport(){
	 	var html = '<div id="reportLayer" class="pay-layer pc">\
						<div class="msg-box">\
							<span class="icon-close close"></span>\
							<h3>为什么举报这条评论或回复？</h3>\
							<div class="rep-list">\
								<label><input type="radio">广告营销</label>\
								<label><input type="radio">淫秽色情</label>\
								<label><input type="radio">广告营销</label>\
								<label><input type="radio">淫秽色情</label>\
								<label><input type="radio">广告营销</label>\
								<label><input type="radio">淫秽色情</label>\
								<label><input type="radio">广告营销</label>\
								<label><input type="radio">淫秽色情</label>\
								<label><input type="radio">广告营销</label>\
								<label><input type="radio">淫秽色情</label>\
							</div>\
						</div>\
					</div>';
			$(window).scrollTop(0);
			disable_scroll(); //禁用鼠标滚动
			$body.append(html);
			$('#reportLayer').find('.close').on('click',function(){
				$('#reportLayer').remove();
				enable_scroll(); //启用鼠标滚动
			});
			
	 }
	 // 举报
	 $(document).on('click','.icon-flag',function(){
	 	showReport();
	 });
	 //提交评论层
	 function subPinglun(){
	 	var html = '<div id="pinglunLayer" class="pay-layer pc">\
						<span class="close icon-close"></span>\
						<div class="pinglun-con">\
							<img src="images/photo.jpg">\
							<h2>无敌开心合理</h2>\
							<p>你的支持收到了哦，谢谢！</p>\
							<div class="txt-con">\
								<textarea name="" id="" placeholder="既然支持了TA就留下点鼓励的话语吧……"></textarea>\
							</div>\
							<a href="" class="btn btn-primary">提交评论</a>\
						</div>\
					</div>';
		$(window).scrollTop(0);
		disable_scroll(); //禁用鼠标滚动
		$body.append(html);
		$('#pinglunLayer').find('.close').on('click',function(){
			$('#pinglunLayer').remove();
			enable_scroll(); //启用鼠标滚动
		});
	 }
	 // subPinglun();
	 //手机端评论层
	 $('#showPlLayer').on('click',function(){
	 	$('#wapPlLayer').addClass('show');
	 })
	 $('#wapPlLayer .close').on('click',function(){
	 	$('#wapPlLayer').removeClass('show');
	 });
	 $msgList.on('click','.icon-reply',function(){
		 $('.bottom-fixed').hide();
		 $zhezhao.fadeIn();
		 $('#tipLayer').show();
	 });
	$('#tipLayer').on('click','.cancel',function(){
		$('#tipLayer').hide();
		$zhezhao.fadeOut();
		$('.bottom-fixed').show();
	});
	$('#tipLayer').on('click','#wapReply',function(){
		$('#tipLayer').hide();
		$zhezhao.fadeOut();
		$('.bottom-fixed').show();
		$('#wapPlLayer').addClass('show');
	});
	$('#tipLayer').on('click','#wapJb',function() {
		$zhezhao.fadeIn();
		$('#jbLayer').show();
		$('#tipLayer').hide();
	});

	$('#jbLayer').on('click','li',function(){
		$(this).addClass('on').siblings().removeClass('on');
	});

	$('#jbLayer').on('click','.close',function(){
		$('#jbLayer').hide();
		$('.bottom-fixed').show();
		$zhezhao.fadeOut();
	});

	$(document).on('click','#conToggle',function(){
		$(this).toggleClass('on');
		$('#content').toggleClass('height-auto');
	});


	// 百度分享代码
	window._bd_share_config = {
		common : {
			bdText : '自定义分享内容',	
			bdDesc : '自定义分享摘要',	
			bdUrl  : '自定义分享url地址', 	
			bdPic  : '自定义分享图片'
		},
		share : [{
			"bdSize" : 16
		}]
	}
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];



});


