
var mineTem = require('../template/mine.string');

SPA.defineView('mine',{
	html:mineTem,
	//跳转到登录页面
	 plugins: ['delegated'],
  // 绑定tap
  bindActions: {
    'goto.Login': function (el) {
      SPA.open('Login');
    }
  }
});
