function time(data,obj){
					for(var k = 0;k < data.length;k++){
					var datee = new Date();
				
					var setdate = new Date(Number(data[k].year)
										   ,Number(data[k].month)
										   ,Number(data[k].day)
										   ,Number(data[k].hours)
										   ,Number(data[k].min)
										   ,Number(data[k].sec));
					var remainTime = setdate - datee;
					var day = Math.floor(remainTime / 1000 / 60 / 60 / 24 );
					var hours = Math.floor(remainTime / 1000 / 60 / 60 % 24 );
					var min = Math.floor(remainTime / 1000 / 60 % 60);
					var sec = Math.floor(remainTime / 1000 % 60);
					$(obj).eq(k).html(
										  '<span class="day"><i>'+day+'</i>天</span>'+
										  '<span class="day"><i>'+hours+'</i>小时</span>'+
										  '<span class="day"><i>'+min+'</i>分</span>'+
										  '<span class="day"><i>'+sec+'</i>秒</span>'
													   )
					}
					}
			$(function(){
				$(function(){
			$.ajax({
			type:"get",
			url:"goodmessage.json",
			success:function(data){
				var html = '';
				for(var i = 0;i < data.length;i++){
					html +='<div class="singlegood"><a href="#" class="singlegooda"><img class="img1" src=' +data[i].img1+ '><img class="img2" src='+data[i].img2+'><p>'+data[i].intro+'</p><span class="singlegoods1">￥<span class="singlegoods1-1">'+data[i].pricenow+'</span><span class="singlegoods1-2">'+data[i].pricepre+'</span></span></a></div>'
				}
				$('.goodmessage').html(html);
			},
			async:true
		});
			var onoff = true;
			$('.show-hide').find('a').click(function(){
				if(onoff){
					$(this).html('收起');
					$('.hide').removeClass('hide')
					onoff = false;}
				else{
					$(this).html('更多');
					for(var ii = 4;ii < 7;ii++){
					$('.attrbute-1').eq(ii).addClass('hide')
					}
					onoff = true;}
				})
			$('.good-selectdiv').click(
				function(){
					$(this).siblings('div').attr('class','good-selectdiv')
					$(this).attr('class','good-selectdivb')
				}
			)
			})
				$.ajax({
					
					type:"get",
					url:"data.json",
					success:function(data){
						var html = '';
						for(var i = 0;i<data.length;i++){
							var arr = eval(data[i].name);
							for(var j = 0 ;j < arr.length;j++){
							html += "<a class='hidemenu-4a' href='goods.html'>"+arr[j]+"</a>"
							}
							$('.hidemenu-4').eq(i).html(html);
							html = '';
							$('.hidemenu-4a').hover(function(){
					$(this).css('color','red');
				},function(){
					$(this).css('color','#5e5e5e');
				})
						}
						
					},
					async:true
					
				});
			$.ajax({
				type:"get",
				url:"good.json",
				success:function(data){
					var html = '';
					for(var j = 0; j < $('.ul2').find('li').length;j++){
					for(var i = 0;i < data.length;i++ ){
						if( i == j){
						html += '<img src='+data[i].target+'>'+'<span class="gooddsc1">'+data[i].descript1+'</span>'+'<span class="gooddsc2">'+data[i].descript2+'</span>'+'<span class="price">'+data[i].price+'</span>'
					}
						}
					$('.ul2').find('.ul2a').eq(j).html(html+'<span class="remainTime">'+'</span>')
					
					
					html = '';}
				time(data,'.remainTime');
				setInterval(function(){ time(data,'.remainTime')},1000);
				},
				async:true
			});
				$.ajax({
					type:"get",
					url:"data2.json",
					success:function(data){
						var html = '';
						for(var i = 0;i < data.length;i++){
							for(var j = 0;j < $('.ul3a').length;j++){
								if( i == j){
							html +='<img src='+data[i].target+'>'
									+'<p class="ul3ap">'+data[i].descript1
									+'<span>'+data[i].price+'</span>'
									+'</p>'+'<span class="remainTime2"></span>'
									}
								}
							$('.ul3a').eq(i).html(html);
							html = ''
						}
						time(data,'.remainTime2');
						setInterval(function(){
							time(data,'.remainTime2')
						},1000)
					},
					
					async:true
				});
				$.ajax({
					type:"get",
					url:"banner.json",
					success:function(data){
						var flag = true;
						var num = 0;
						var timer = null;
						var html = '';
						for(var i = 0; i < data.length;i++){
							for(var j = 0; j < $('.banner_div').length;j++){
								if(i == j){
									$('.banner_divp').eq(i).css('background','url('+data[i].img+') center')	
								}
							}
						}
						$('.banner_div').eq(0).attr('class','banner_divshow').find('.banner_divp').css('opacity','1').delay(3750).animate({opacity:0.5},500)
						$('.banner_point').find('i').eq(0).css('background-color','#d70057').css('opacity','1')
//						$('.banner_divshow').delay(3500).animate({opacity:0.5},500);
						timer = setInterval(function(){
							$('.banner_divp').stop(true,true);
							num++;
							tab();
							}
						,4000)
						$('.banner_point').find('i').click(function(){
							if(flag)
							{
							flag =  false;
							$('.banner_divp').stop(true,true);
							num = $(this).index();
							tab();
							}
							flag =  true;
						})
						$('.rightAr').click(function(){
							if(flag){
							flag =  false;
							$('.banner_divp').stop(true,true);
							num++;
							tab();
							}
							flag = true;
						})
						$('.leftAr').click(function(){
							if(flag){
							flag =  false;
							$('.banner_divp').stop(true,true);
							num--;
							tab();
							}
							flag = true;
						})
						
							function tab(){
							$('.banner_div').eq(num).attr('class','banner_divshow').find('.banner_divp').stop(true,true)
							$('.banner_divshow').attr('class','banner_div')
							$('.banner_div').eq(num).attr('class','banner_divshow').find('.banner_divp').animate({opacity:1},500,'linear').delay(3000).animate({opacity:0.5},500,'linear')
							$('.banner_point').find('i').eq(num).css('background-color','#d70057').css('opacity','1')
							$('.banner_point').find('i').eq(num).siblings('i').css('background-color','black').css('opacity','0.4')
							if(num >= 4){
							 	num = -1}
							else if(num <= -1){
								num = 4;
							}
							
							}
							
					}	
					
				});
				
				$('.head-M-T-message').hover(function(){
					$(this).attr("class","onover");
					$(this).find('div').css('display','block')
					$(this).find('span').css('color','red');
					$(this).next('span').css('color','#F2F2F2');
					$(this).prev('span').css('color','#F2F2F2');
				},function(){
					$(this).attr("class","head-M-T-message");
					$('.afterover').css('display','none');
					$(this).find('span').css('color','#D9D9D9')
					$(this).next('span').css('color','#D9D9D9');
					$(this).prev('span').css('color','#D9D9D9');
				})
				$('.head-M-T-bag').find('a').hover(function(){
					$(this).css('color','red');
					
				},function(){
					$(this).css('color','black');
				
				});
				$('.normala').hover(function(){
					$(this).css('color','#d70057');
					var num =$('.normala').index(this)
					$('.hidemenu').css('display','none');
					$('.hidemenu').eq(num).css('display','inline').on('mouseleave',
					function(){
						$('.hidemenu').css('display','none');
					});
				},function(){
					$(this).css('color','white');
				});
				$('.head-M-M').on('mouseover',function(){
					$('.hidemenu').css('display','none');
				})
				$('.ul2').find('a').hover(function(){
					$(this).attr('class','ul2a1')
				},function(){
					$(this).attr('class','ul2a')
				})
				$('.ul3').find('a').hover(function(){
					$(this).attr('class','ul3a1')
				},function(){
					$(this).attr('class','ul3a')
				})
					
				
			})