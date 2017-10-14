require.config({
	urlArgs: '',//添加版本号后缀
　　paths: {
	    'swiper': 'lib/swiper.min',
　　　　}
　　});
require(['swiper'],function(){
	 // kv图
	 var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        autoplayDisableOnInteraction : false,
	        autoplay : 3000,
	        loop : 1
	    });
	 var swiperHorizontal = new Swiper('#swiperHorizontal', {
	        slidesPerView: 1.1,
	        spaceBetween: 10,
	        freeMode: true
	    });
	 var $objClass 	 = $('#objClass'),
	 	 $filterList = $('#filterList'),
	 	 $objLayer	 = $('#objLayer'),
	 	 $closeLayer = $('#closeLayer'),
	 	 $share		 = $('#share'),
	 	 $zhezhao    = $('#zhezhao'),
	 	 $closeShareLayer = $('#closeShareLayer'),
	 	 $shareLayer = $('#shareLayer'),
	 	 $filter     = $('#objT').find('.filter');
	//项目分类弹层
	 $objClass.on('click',function(event){
	 	event.stopPropagation();
	 	$objClass.find('b').toggleClass('icon-up-row');
	 	$filterList.toggle();
	 	$zhezhao.toggle();
	 	$objLayer.toggleClass('show');
	 });
	 $(document).on('click',function(){
	 	$objClass.find('b').removeClass('icon-up-row');
	 	$filterList.hide();
	 });
	 $closeLayer.on('click',function(){
	 	$objLayer.removeClass('show');
	 	$objClass.find('b').removeClass('icon-up-row');
	 	$filterList.hide();
	 	$zhezhao.fadeOut();
	 });
	 $objLayer.on('click','li',function(){
		 $closeLayer.trigger('click');
		 $objClass.text($(this).text());
	 });
	 $filter.on('click',function(){
	 	$filter.removeClass('on').find('b').removeClass('icon-down');
	 	$(this).addClass('on').find('b').addClass('icon-down');
	 });
	 //分享弹层
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
	 	$filterList.hide();
	 	$shareLayer.removeClass('show');
	 	$objLayer.removeClass('show');
	 	$objClass.find('b').removeClass('icon-up-row');
	 	$filter.removeClass('on').find('b').removeClass('icon-down');
	 });

	 // 头部显示退出按钮
	 $(document).on('mouseover','#userLogin',function(){
	 	$(this).addClass('on');
	 });
	 $(document).on('mouseleave','#userLogin',function(){
	 	$(this).removeClass('on');
	 });
});
