const template = `
    <div id="wrapper" ref="wrap">
        <div class="list">
            <slot/>
        </div>
    </div>
`

Vue.component('stock-table', {
    template : template,
    mounted() {
        this.$nextTick(_=>{
            window.addEventListener('scroll',this.setHeadereSus)
            this.setBodyAutoWidth()
            this.setListOffset()
            this.initSroll()
        })
    },
    beforeDestroy() {
        window.removeEventListener('scroll',this.setHeadereSus)
    },
    methods: {
        // body宽度等于header宽度
        setBodyAutoWidth(){
            let header = this.$refs.wrap.querySelectorAll('.header li')
            let rows = this.$refs.wrap.querySelectorAll('.body .van-cell')
            for (const row of rows) {
                let cols = row.querySelectorAll('.row li')
                header.forEach((ele,index) => {
                    if (cols.length<=0) return
                    let padding = getComputedStyle(ele, false)['padding']
                    cols[index].style.width=`${ele.offsetWidth}px`
                    cols[index].style.padding = padding
                });
            }
        },
        
        // 设置header悬浮
        setHeadereSus(e){
            let clientHeight = document.body.clientHeight
            let listHeight = this.$refs.wrap.offsetHeight;
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let header = document.querySelectorAll('#wrapper .header')[0];
            let body = document.querySelectorAll('#wrapper .body')[0]
            if (scrollTop > clientHeight-listHeight){
                header.style.position = 'absolute'
                header.style.top = `${scrollTop-(clientHeight-listHeight)}px`
                header.style.boxShadow = '0 0 .5rem #eee'
            } else {
                header.style.position = 'static'
                header.style.top = 0
                header.style.boxShadow = 'none'
            }
        },

        // 设置company悬浮
        setFistColSus(e){
            let header = this.$refs.wrap.querySelectorAll('.header li')
            let rows = this.$refs.wrap.querySelectorAll('.body .row')
            for (const row of rows) {
                let cols = row.querySelectorAll('li')
                if (e.x<0) {
                    [header[0], cols[0]].forEach(ele => {
                        ele.style.position = 'absolute'
                        ele.style.left = Math.abs(e.x)+'px'
                    });
                    [header[1], cols[1]].forEach( ele=>ele.style.marginLeft = ele.offsetWidth+'px' )
                } else {
                    [header[0], cols[0]].forEach(ele => {
                        ele.style.position = 'static'
                        ele.style.left = 0
                    });
                    [header[1], cols[1]].forEach( ele=>ele.style.marginLeft = 0 )
                }
            }
        },

        // 设置list宽（横向滚动要求）
        setListOffset(){
            let w = 0
            let list = this.$refs.wrap.querySelectorAll('.list')[0]
            let header = this.$refs.wrap.querySelectorAll('.header li')
            header.forEach(ele => w+=(ele.offsetWidth+4));
            list.style.width = `${w}px`
        },

        // 初始化better-scroll
        initSroll(){
            if (!this.BScroll) {
                this.BScroll = new BScroll(this.$refs.wrap, {
                    scrollX: true,
                    scrollY: false,
                    click: true,
                    bounce: false,
                    probeType: 3,
                    preventDefault: false,
                    //下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
                    //这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
                    pullUpLoad: {
                        threshold: 5
                    },
                    mouseWheel: {    // pc端同样能滑动
                        speed: 20,
                        invert: false
                    },
                    useTransition:false  // 防止iphone微信滑动卡顿
                })
            } else {
                this.BScroll.refresh()
            }
            this.BScroll.on("scroll", this.setFistColSus);
            /* this.BScroll.on("pullingUp", ()=>{
                console.log('加载ajax数据');
                this.BScroll.finishPullUp();     //可以多次执行上拉刷新
            }); */
        }
    },
})