var LoginTpl=require("../../template/tem-zp/Login.string");

/*装载视图*/
SPA.defineView("Login",{
	//装载模板
	html:LoginTpl,
	 // 定义插件
	 
//跳转到登录页面
	 plugins: ['delegated'],
  // 绑定tap
  bindActions: {
    'goto.register': function (el) {
      SPA.open('register');
    },
    'back': function () {
      this.hide();
    }
  },
  
	bindEvents:{
		'show':function(){
			//用户名和密码获取焦点的事件
			$(".fous").focus(function(){
			$(this).next().show();
			$("#footer div").removeClass("yo-tip3");
			$(".fous").next().removeClass("botChang");
			$(this).next().addClass("botChang");
			}).blur(function(){
				if($(this).val()!==""){
					$(this).next().hide();
				}else{
					$(this).next().show();
				}
			});
			$("#secSub").on("tap",function(){
		        var user1=$("#user").val();
		        var pass1=$("#pass").val();
		        $.ajax({
		            url:"http://datainfo.duapp.com/shopdata/userinfo.php",
		            data:{
		                status:"login",
		                userID:user1,
		                password:pass1
		            },
		            success:function(data){
		                if(data==0){
		                $("#footer div").html("用户名不存在！").addClass("yo-tip3");
		                }else if(data==2){
		                	$("#footer div").html("密码输入有误!").addClass("yo-tip3");
		                }else{
		                    alert("登录成功！")
		                }
		            }
		        })
    		})
		}
	}
});