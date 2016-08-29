var detailTpl=require("../../template/xl/detail.string");
//装载视图
SPA.defineView("detail",{
	html:detailTpl,
	plugins:["delegated",
		{
			name: 'avalon',
		    options: function (vm) {
		        vm.imgurl = "";
		        vm.title="";
		    }
		}
	],
	bindActions:{
		"back":function(){
			this.hide();
		}
	},
	bindEvents:{
		'show':function(){
			var vm=this.getVM();
			console.log(this.param.imgurl)
			vm.imgurl=this.param.imgurl;
			vm.title=this.param.title;
			 // swiper
	      var mySwiper = new Swiper('#shop-swiper', {
	        loop: false,
	        onSlideChangeStart: function(swiper){
	          var index = swiper.activeIndex;
	          $('.miao span').eq(index).addClass('spanAct').siblings().removeClass('spanAct');
	        }
	      });
	      $('.miao span').on('tap', function () {
	        mySwiper.slideTo($(this).index());
	      });
	      
		}
	}
});
