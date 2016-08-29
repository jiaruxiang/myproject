/**
 * Created by Administrator on 2016/8/20.
 */
var indexZone1=require("../../template/jrx-string/zone-1.string");
SPA.defineView('zone-1', {
    html: indexZone1,
    plugins:["delegated"],
    bindActions:{
    	"back":function(){
    		this.hide();
    	}
    }
})