document.getElementById('slider').addEventListener('slide', function(e) {
	// console.log(e);
	var idx = e.detail.slideNumber;
	// console.log(idx);
	var ids;
if (e.detail.slideNumber === 0) {
	// $(".mui-slider-group .mui-scroll").removeClass("mui-scroll1");
	// $(".mui-slider-group .mui-scroll").eq(e.detail.slideNumber).addClass("mui-scroll1");
	// var ss = $(".mui-slider-group .mui-scroll").eq(e.detail.slideNumber).attr("loads");
	// if (ss == "1") {
	// 	ids = true;
	// }else{
	// 	ids = false;
	// };
	// var ss = $(".mui-slider-group .mui-scroll").eq(e.detail.slideNumber).attr("loads","2");
}else if (e.detail.slideNumber === 1) {
	$(".mui-slider-group .mui-scroll").removeClass("mui-scroll1");
	$(".mui-slider-group .mui-scroll").eq(e.detail.slideNumber).addClass("mui-scroll1");
	var ss = $(".mui-slider-group .mui-scroll").eq(e.detail.slideNumber).attr("loads");
	if (ss == "1") {
		ids = true;
	}else{
		ids = false;
	};
	var ss = $(".mui-slider-group .mui-scroll").eq(e.detail.slideNumber).attr("loads","2");
}else if (e.detail.slideNumber === 2) {
	$(".mui-slider-group .mui-scroll").removeClass("mui-scroll1");
	$(".mui-slider-group .mui-scroll").eq(e.detail.slideNumber).addClass("mui-scroll1");
	var ss = $(".mui-slider-group .mui-scroll").eq(e.detail.slideNumber).attr("loads");
	if (ss == "1") {
		ids = true;
	}else{
		ids = false;
	};
	var ss = $(".mui-slider-group .mui-scroll").eq(e.detail.slideNumber).attr("loads","2");
}

	mui.init();
		(function($) {
			//阻尼系数
			var deceleration = mui.os.ios?0.003:0.0009;
			$('.mui-scroll-wrapper').scroll({
				bounce: false,
				indicators: true, //是否显示滚动条
				deceleration:deceleration
			});

			$.ready(function() {
				//循环初始化所有下拉刷新，上拉加载。

				$.each(document.querySelectorAll('.mui-slider-group .mui-scroll1'), function(index, pullRefreshEl) {
					var selfs = this;
					console.log(selfs);
					$(pullRefreshEl).pullToRefresh({
						down: {
							// auto: true,
							callback: function() {
								var self = this;
								setTimeout(function() {
									var ul = self.element.querySelector('.mui-table-view');
									ul.innerHTML="";
									ul.insertBefore(createFragment(ul, idx, 5, true), ul.firstChild);
									self.endPullDownToRefresh();
								}, 1000);
							}

						},
						up: {
							auto: ids,
							callback: function() {
								var self = this;
								setTimeout(function() {
									var ul = self.element.querySelector('.mui-table-view');
									ul.appendChild(createFragment(ul, idx, 2));
									self.endPullUpToRefresh();
								}, 1000);
							}
						}
					});
				});

				var createFragment = function(ul, index, count, reverse) {
					var length = ul.querySelectorAll('li').length;
					var fragment = document.createDocumentFragment();
					var li;
					
					li = document.createElement('li');
					li.className = 'mui-table-view-cell';

					if (index == 0 ) {
						mui.ajax('../shuju1.json',{
							data:{
								username:'username',
								password:'password'
							},
							dataType:'json',//服务器返回json格式数据
							type:'post',//HTTP请求类型
							timeout:10000,//超时时间设置为10秒；
							headers:{'Content-Type':'application/json'},	
							async:false,              
							success:function(data){		
								// 服务器返回响应，根据响应结果，分析是否登录成功；					
                   					for(var i = 0; i < data.lists.length; i++){
					                li.innerHTML +=`<div class="licon">
										<div class="litop">
											<img class="tx" src="../../images/u=2225728396,4156654611&fm=26&gp=0.jpg" alt="">
											<div class="litop_mz">
												<img src="../../images/sex.png" alt="">
												<h1>我的名字哈哈哈哈</h1>
												<p class="times"><var>1</var>小时前</p>
											</div>												
										</div>
										<div class="licons">
											<img class="licontu" src="../../images/banner.png" alt="">
											<div class="liconn">
												<h1>撒来得及阿卡时间段拉客坚实的龙卡金士顿</h1>
												<p>是空间安徽的卡技术的卡合适的框架</p>
											</div>
											<div class="libottom">
												<img class="upvote" src="../../images/upvote.png" alt="">
												<img class="reply" src="../../images/reply.png" alt="">
											</div>
										</div>											
									</div>`;
					            	};							           
							},
							error:function(xhr,type,errorThrown){
								//异常处理；
								console.log(type);
							}
						});
					}else if(index == 1){
						mui.ajax('../shuju2.json',{
							data:{
								username:'username',
								password:'password'
							},
							dataType:'json',//服务器返回json格式数据
							type:'post',//HTTP请求类型
							timeout:10000,//超时时间设置为10秒；
							headers:{'Content-Type':'application/json'},	
							async:false,              
							success:function(data){		
								// 服务器返回响应，根据响应结果，分析是否登录成功；
									
                   					for(var i = 0; i < data.lists.length; i++){
					                li.innerHTML +=`<div class="licon">
										<div class="litop">
											<img class="tx" src="../../images/u=2225728396,4156654611&fm=26&gp=0.jpg" alt="">
											<div class="litop_mz">
												<img src="../../images/sex.png" alt="">
												<h1>我的名字哈哈哈哈</h1>
												<p class="times"><var>1</var>小时前</p>
											</div>												
										</div>
										<div class="licons">
											<img class="licontu" src="../../images/banner.png" alt="">
											<div class="liconn">
												<h1>撒来得及阿卡时间段拉客坚实的龙卡金士顿</h1>
												<p>是空间安徽的卡技术的卡合适的框架</p>
											</div>
											<div class="libottom">
												<img class="upvote" src="../../images/upvote.png" alt="">
												<img class="reply" src="../../images/reply.png" alt="">
											</div>
										</div>											
									</div>`;
					            	};							           
							},
							error:function(xhr,type,errorThrown){
								//异常处理；
								console.log(type);
							}
						});
					}else if(index == 2){
						mui.ajax('../shuju3.json',{
							data:{
								username:'username',
								password:'password'
							},
							dataType:'json',//服务器返回json格式数据
							type:'post',//HTTP请求类型
							timeout:10000,//超时时间设置为10秒；
							headers:{'Content-Type':'application/json'},	
							async:false,              
							success:function(data){		
								// 服务器返回响应，根据响应结果，分析是否登录成功；
									
                   					for(var i = 0; i < data.lists.length; i++){
					                li.innerHTML +=`<div class="licon">
										<div class="litop">
											<img class="tx" src="../../images/u=2225728396,4156654611&fm=26&gp=0.jpg" alt="">
											<div class="litop_mz">
												<img src="../../images/sex.png" alt="">
												<h1>我的名字哈哈哈哈</h1>
												<p class="times"><var>1</var>小时前</p>
											</div>												
										</div>
										<div class="licons">
											<img class="licontu" src="../../images/banner.png" alt="">
											<div class="liconn">
												<h1>撒来得及阿卡时间段拉客坚实的龙卡金士顿</h1>
												<p>是空间安徽的卡技术的卡合适的框架</p>
											</div>
											<div class="libottom">
												<img class="upvote" src="../../images/upvote.png" alt="">
												<img class="reply" src="../../images/reply.png" alt="">
											</div>
										</div>											
									</div>`;
					            	};							           
							},
							error:function(xhr,type,errorThrown){
								//异常处理；
								console.log(type);
							}
						});
					};						
						fragment.appendChild(li);
				
					return fragment;
				};
			});
		})(mui);
	});



mui.init();
// mui('.mui-scroll1').pullRefresh().enablePullupToRefresh();//启用上拉加载
(function($) {
	//阻尼系数
	var deceleration = mui.os.ios?0.003:0.0009;
	$('.mui-scroll-wrapper').scroll({
		bounce: false,
		indicators: true, //是否显示滚动条
		deceleration:deceleration
	});

	$.ready(function() {
		//循环初始化所有下拉刷新，上拉加载。

		$.each(document.querySelectorAll('.mui-slider-group .mui-scroll1'), function(index, pullRefreshEl) {
			var selfs = this;
			// console.log(selfs);

			$(pullRefreshEl).pullToRefresh({
				down: {
					// auto: true,

					callback: function() {
						var self = this;
						setTimeout(function() {
							var ul = self.element.querySelector('.mui-table-view');
							ul.innerHTML="";
							ul.insertBefore(createFragment(ul, index, 5, true), ul.firstChild);
							self.endPullDownToRefresh();
						}, 1000);
					}

				},
				up: {
					auto: true,

					callback: function() {
						var self = this;

						setTimeout(function() {
							var ul = self.element.querySelector('.mui-table-view');
							ul.appendChild(createFragment(ul, index, 2));
							self.endPullUpToRefresh();
						}, 1000);
					}
				}
			});
		});

		var createFragment = function(ul, index, count, reverse) {
			var length = ul.querySelectorAll('li').length;
			var fragment = document.createDocumentFragment();
			var li;
			
			li = document.createElement('li');
			li.className = 'mui-table-view-cell';

			if (index == 0 ) {
				mui.ajax('../shuju1.json',{
					data:{
						username:'username',
						password:'password'
					},
					dataType:'json',//服务器返回json格式数据
					type:'post',//HTTP请求类型
					timeout:10000,//超时时间设置为10秒；
					headers:{'Content-Type':'application/json'},	
					async:false,              
					success:function(data){		
						// 服务器返回响应，根据响应结果，分析是否登录成功；					
           					for(var i = 0; i < data.lists.length; i++){
			                li.innerHTML +=`<div class="licon">
										<div class="litop">
											<img class="tx" src="../../images/u=2225728396,4156654611&fm=26&gp=0.jpg" alt="">
											<div class="litop_mz">
												<img src="../../images/sex.png" alt="">
												<h1>我的名字哈哈哈哈</h1>
												<p class="times"><var>1</var>小时前</p>
											</div>												
										</div>
										<div class="licons">
											<img class="licontu" src="../../images/banner.png" alt="">
											<div class="liconn">
												<h1>撒来得及阿卡时间段拉客坚实的龙卡金士顿</h1>
												<p>是空间安徽的卡技术的卡合适的框架</p>
											</div>
											<div class="libottom">
												<img class="upvote" src="../../images/upvote.png" alt="">
												<img class="reply" src="../../images/reply.png" alt="">
											</div>
										</div>											
									</div>`
			            	};							           
					},
					error:function(xhr,type,errorThrown){
						//异常处理；
						console.log(type);
					}
				});
			}

				
				fragment.appendChild(li);
		
			return fragment;
		};
	});
})(mui);