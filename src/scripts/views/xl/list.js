var list=require("../../template/xl/list.string");
/*装载视图*/
SPA.defineView("list",{
	//装载模板
	html:list,
	plugins: [
	    'delegated', 
	    {
	      	name: 'avalon',
	      	options: function (vm) {
	        	vm.list = [];
	        	vm.name="";
	      	}
	    }
	],
	bindActions: {
	    'back': function () {
	      this.hide();
	    },
	    "goDetail":function(el,data){
	    	SPA.open("detail",{
	    		param:{
	    			imgurl:data.imgurl,
					title:data.title
	    		}
	    	});
	    }
	},
	bindEvents: {
    'show': function () {
      var that = this;
      var vm = this.getVM();
      $.ajax({
        url: '/api/list.php',
        type: 'get',
        data: {
          id: that.param.id
        },
        success: function (res) {
        	
          vm.list = res.products;
          vm.name=res.name;
        }
      })
    }
  }
	
})