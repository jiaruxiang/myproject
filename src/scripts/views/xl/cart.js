var cartTpl=require("../../template/xl/cart.string");
//装载视图
SPA.defineView("cart",{
	html:cartTpl,
	plugins:["delegated"],
	bindActions:{
		"back":function(){
			this.hide();
		}
	}
});
