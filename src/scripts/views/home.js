var homeTpl=require("../template/home.string");
var scroll = require('../utils/scroll.js');
/*装载视图*/
SPA.defineView("home",{
	//装载模板
	html:homeTpl, 
	
	plugins:[
		"delegated",
		{
			name:"avalon",
			options:function(vm){
				vm.banner=[];
				vm.duli=[];
				//vm.jingxuan=[];
			}
		}
	],
	//跳转到列表页和详情页
	bindActions:{
		'goList': function (el, data) {
		    SPA.open('list', {
		        param: {
		          id: data.id
		        }
		    });
		},
		"goDetail":function(el, data){
			SPA.open("detail",{
				param:{
					imgurl:data.imgurl,
					title:data.title
				}
			});
		},
		"goCart":function(){
			SPA.open("cart",{
				
			});
		}
	},
	bindEvents:{
		"show":function(){
			//获取vm
			var vm=this.getVM();
			//ajax拉取banner数据
			$.ajax({
				url:"/api/banner.php",
				type:"get",
				data:{
					type:"banner"
				},
				success:function(data){
					vm.banner=data.banner;
					//banner-swiper
					var swiperBanner=new Swiper("#banner-swiper",{
						loop:true,
						pagination : '.swiper-pagination',
						autoplay:2000
					});
				}
				
			});
			//goods-swiper
			var swiperGoods=new Swiper("#goods-swiper",{
				loop:false,
				onSlideChangeStart:function(swiper){
					var index=swiper.activeIndex;
					$(".tab li").eq(index).addClass("active").siblings().removeClass("active");
				}
			});
			$(".tab li").on("tap",function(){
				$(this).addClass("active").siblings().removeClass("active");
				swiperGoods.slideTo($(this).index())
			})
			//ajax拉取独立组数据
			$.ajax({
				url:"/api/duli.php",
				type:"get",
				data:{
					type:"more",
					pageNum:1
				},
				success:function(data){
					vm.duli=data.products;
				}
			});
			//ajax拉取精选组数据
			$.ajax({
				url:"/api/duli.php",
				type:"get",
				data:{
					type:"more",
					pageNum:1
				},
				success:function(data){
					vm.jingxuan=data.products;
					
				}
			});
			// scroll
	        scroll({
	        	eleHeadAndFoot:$('#home-scroll'),
		        scroll: this.widgets.myScroll,
		        vm: vm,
		        objRefreshAjax:{
					url:"/api/duli.php",
					type:"get",
					data:{
						type:"refresh",
						pageNum:1
					},
					success:function(data){
						vm.duli = data.products.concat(vm.duli);
					}
				},
				objMoreAjax:{
					url:"/api/duli.php",
					type:"get",
					data:{
						type:"more",
						pageNum:1
					},
					success:function(data){
						vm.duli=data.products;
						
					}
				}
		    })
		}
	}
	
});