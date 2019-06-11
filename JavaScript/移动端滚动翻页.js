//滚动分页
var scrollPage = function(callback){
	$(window).scroll(function(){
	    var scrollTop = $(this).scrollTop();                    //滚动条距离顶部的高度
	    var scrollHeight = $(document).height();                //当前页面的总高度
	    var clientHeight = $(this).height();                    //当前可视的页面高度
	    if(scrollTop + clientHeight >= scrollHeight - 100){     //距离顶部+当前高度 >=文档总高度 即代表滑动到底部 注：-50 上拉加载更灵敏
	        callback();     // 翻页回调
	    }
	});
}