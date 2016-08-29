// pullToRefresh
module.exports = function (opt) {
  // var myScroll = this.widgets.myScroll;
  var pageNum=1;
  var n=1;
  var myScroll = opt.scroll;
  var topSize = 35;
	
  var ele = opt.eleHeadAndFoot;
  var head = ele.find('.head img'),
      topImgHasClass = head.hasClass('up');
  var foot = ele.find('.foot img'),
      bottomImgHasClass = head.hasClass('down');

  myScroll.on('scroll', function () {
    var y = this.y,
    maxY = this.maxScrollY - y;
    if (y >= 0) {
      $('.head').show();
      !topImgHasClass && head.addClass('up');
      return '';
    }
    if (maxY >= 0) {
      $('.foot').show();
      !bottomImgHasClass && foot.addClass('down');
      return '';
    }
  });

  myScroll.on('scrollEnd', function () {
    if (this.y >= -topSize && this.y < 0) {
      myScroll.scrollTo(0, -topSize);
      head.removeClass('up');
    } else if (this.y >= 0) {
      head.attr('src', '/img/xl/ajax-loader.gif');
      // ajax下拉刷新数据
			
      $.ajax({
        url: opt.objRefreshAjax.url,
        type: opt.objRefreshAjax.type,
        data: opt.objRefreshAjax.data,
        success: function (res) {
          opt.objRefreshAjax.success(res);
        }
      })
      myScroll.scrollTo(0, -topSize);
      head.removeClass('up');
      head.attr('src', '/img/xl/arrow.png');
      if(n>1){
				return;
			};
			n++;
    }

    var maxY = this.maxScrollY - this.y;
    var self = this;
    if (maxY > -topSize && maxY < 0) {
      myScroll.scrollTo(0, self.maxScrollY + topSize);
      foot.removeClass('down')
    } else if (maxY >= 0) {
      foot.attr('src', '/img/xl/ajax-loader.gif');
      // ajax上拉加载数据
      pageNum++;
      if(pageNum>4){
      	myScroll.refresh();
        myScroll.scrollTo(0, self.y + topSize);
        foot.removeClass('down');
        foot.attr('src', '/img/xl/arrow.png');
      	return;
      }
      $.ajax({
        url: opt.objMoreAjax.url,
        type: opt.objMoreAjax.type,
        data: {
        	type:"more",
        	pageNum:pageNum
        },
        success: function (res) {
          opt.vm.duli.pushArray(res.products);

          myScroll.refresh();
          myScroll.scrollTo(0, self.y + topSize);
          foot.removeClass('down');
          foot.attr('src', '/img/xl/arrow.png');
        }
      });
    }
  });
};
