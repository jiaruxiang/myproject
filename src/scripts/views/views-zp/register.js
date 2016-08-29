var registerTpl=require("../../template/tem-zp/register.string");

/*装载视图*/
SPA.defineView("register",{
	//装载模板
	html:registerTpl,
	//跳转到登录页面
	 plugins:["delegated"],
  // 绑定tap
	  bindActions: {
	    'back': function () {
	      this.hide();
	    }
	  },
  
   
	
	// 绑定事件
	bindEvents:{
		'show':function(){
			//获取焦点和失去焦点
			var arr=["请输入手机号","请输入密码","验证码不能为空"]
			var tipArr=["手机号输入有误，请重新输入","密码输入有误，请重新输入","验证码不匹配，请重新输入"]
			var wArr=[];//存入输入错误的数组
			var Regs = {
	 				userName:/^1[34578]\d{9}$/,
	 				pwdWord:/[a-zA-Z0-9]/
 				}
			var ok1=false;
   			var ok2=false;
   			var ok3=false;
   			var arryan=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','0'];
			//用户名和密码获取焦点的事件
			$(".fous").focus(function(){
			$(this).next().show();
			$("footer div").removeClass("yo-tip2");
			$(".fous").next().removeClass("botChang");
			$(this).next().addClass("botChang");
			}).blur(function(){
				if($(this).val()!==""){
					$(this).next().hide();
				}else{
					$(this).next().show();
				}
			});
			//用户名失去焦点，进行正则的判断
			$(".fous").eq(0).blur(function(){
				if(Regs.userName.test($(this).val())){
					ok1=true;
				}else{
					ok1=false;
					wArr.push(0);//如果用户名不正确，就push数组的第一项
				}
			})
			//密码失去焦点，进行正则的判断
			$(".fous").eq(1).blur(function(){
				if(Regs.pwdWord.test($(this).val())&&$(this).val().length >= 6 && $(this).val().length <=14){
					ok2=true;
				}else{
					ok2=false;
					wArr.push(1);//如果密码不正确，就push数组的第二项
				}
			});
			//验证验证码
			$(".fous").eq(2).blur(function(){
				if($(this).val()==$(".sec-bor0 b").text()){
					ok3=true;
				}else{
					ok3=false;
					wArr.push(2);
				}
			});
			//点击获取验证码
			$(".sec-bor0 b").on('tap',function(){
				var str="";
		    	while(str.length<4){
		    		var iNum=parseInt(Math.random()*100);
		    		while(iNum>32){
						iNum=parseInt(Math.random()*100)
					}
		    		str+=arryan[iNum];
		    	}
    			$(this).text(str.toUpperCase()).addClass("changeB")
			});
			//点击注册时，进行验证
			$("#but").on('tap',function(){
				var narr=[];//定义一个空数组，用来存放用户名、密码、验证码为空的数量
				$(".fous").each(function(i){
					if($(".fous").eq(i).val()==""){
						narr.push(i);
					}
				})
				if(narr.length>0){
					$("footer div").html(arr[narr[0]]).addClass("yo-tip2");
				}
				//如果不为空并且用户名，密码都为真，则请求ajax判断
				if(narr.length==0){
						if(ok1&&ok2&&ok3){
							var user=$("#user").val();
							 $.ajax({
                				url:"http://datainfo.duapp.com/shopdata/getuser.php",
               				 	dataType:"jsonp",
				                data:{
				                    userID:user
				                },
				                success:function(data){
				                    if(data==0){
				                       alert("注册成功！");
				                    }else{
				                    	alert("手机号已被注册！");
				                    }
				                }
           				 	})
						}else{
							//如果不为真，则显示相应的提示信息
					
							$("footer div").html(tipArr[wArr[0]]).addClass("yo-tip2");
							
						}
				}	  

			})
		}
	}
	
});
