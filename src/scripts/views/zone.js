var indexZone=require("../template/zone.string");
var scroll = require('../utils/scroll.js');
SPA.defineView('zone',{
    html:indexZone,

    plugins: [
        'delegated',    //这个东西，很重要 也很强势
        {
        name: 'avalon',
        options: function(vm) {
            vm.zonelist = [];
        }
    }],
    //绑定单击事件
    bindActions:{
        'goto.zone-1':function(){
            SPA.open('zone-1');
        }
    },


    //绑定视图事件
    bindEvents:{
        'show':function(){


            var vm = this.getVM();

            $.ajax({
                url:'/mock/jrx-mock/zone.json',
                type:'get',
                data:{},
                success:function(res){
                    vm.zonelist=res.spaces;
                    console.log(res.spaces[0].thumb)
                }

            })
        }
    }

})

