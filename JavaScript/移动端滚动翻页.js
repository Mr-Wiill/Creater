function scrollNextPage(callback){
	//真实内容的高度
	let pageHeight = Math.max(document.body.scrollHeight,document.body.offsetHeight);
	//视窗的高度
	let viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
	//隐藏的高度
	let scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	if(pageHeight - viewportHeight - scrollHeight < 20){	//如果满足触发条件，执行
		callback()
	}
}

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
