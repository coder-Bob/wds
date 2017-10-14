
	// wap站图片上传
	function showPreview(source) {

		if(window.FileReader) {

			var fileList = source.files;

			//console.log(fileList)

			for(var i=0;i<fileList.length;i++){

				(function(i){

					var file=fileList[i];

					if(!/image\/\w+/.test(file.type)){

						alert('您选择的'+file.name+'不是图片');

						return

					}

					var fr = new FileReader();

					fr.onloadend = function(e) {

						var img=new Image

						img.src=this.result;

						img.onload=function(){

							//创建html

							var para=document.createElement('li');
								para.className='item';

							var node=document.createElement('div');

								node.className='child';

							var bar=document.createElement('div');

								bar.className='bar clearfix';

								bar.innerHTML="<span class='del icon-close'></span>";

							if(file.size>512000){
								alert('图片上传失败，上传图片不能大于500kb')
							}else{

								// node.innerHTML="<div class='loading'><span></span></div><div class='shadow'></div>";

							}

							para.appendChild(node);

							para.appendChild(bar);

							para.appendChild(img);

							document.getElementById('imgList').appendChild(para);

							//删除功能

							$(bar).find('.del').click(function(){

								$(this).parents('.item').remove();	

							});

							//旋转功能

							var deg=0;

							$(bar).find('.rotate').click(function(){

								$(this).parents('.item').find('img').css('transform','rotate('+(deg+=90)+'deg)');	

							});


						}

					};

					fr.readAsDataURL(file);	

				})(i)	

			}

		}else{
			alert('您的浏览器不支持FileReader')
		}
	}

	$('#xyShow').on('click',function(){
		$('#xyLayer').addClass('show');
	});
	$('#xyBack').on('click',function(){
		$('#xyLayer').removeClass('show');
	});
	$('#agreeBtn').on('click',function(){
		$('#xyLayer').removeClass('show');
		$('#xyShow').find('input').prop('checked','true');
	});
	//pc端图片上传
	function uploadImgPc(dom){
		var $imgListPc = $('#imgListPc'),
			dataUrl    = 'images/photo.jpg',	// 这里请使用ajax上传冰返回图片路径赋值给dataurl
			dataDom    = '<li><img src="'+dataUrl+'"><i class="del icon-close"></i></li>'; 
		$imgListPc.append(dataDom);
	}
	$(document).on('click','.del',function(){
		$(this).parent('li').remove();
	});