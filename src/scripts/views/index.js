var indexTpl=require("../template/index.string");
/*装载视图*/
SPA.defineView("index",{
	//装载模板
	html:indexTpl,
	//定义插件
	plugins:["delegated"],
	//装载子视图
	modules:[{
		name:"content",
		container:"#content",
		views:["home","zone","mine"],
		defaultTag:"home"
	}],
	bindActions:{
		switch:function(el,data){
			this.modules.content.launch(data.name);
			$("footer li").eq($(el.el).index()).addClass("active").siblings().removeClass("active");
		}
	}
});
