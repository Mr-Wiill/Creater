const StockTable = `
    <div id="wrapper" ref="wrap" v-cloak>
        <div class="list">
            <van-list class="header">
                <van-cell>
                <ul>
                    <li v-for="(item,index) in fields" :key="index" :class="'col_'+index">{{item}}</li>
                </ul>
                </van-cell>
            </van-list>
            <van-list class="body" v-show="loadingFinish">
                <van-cell class="row"
                    v-for="item in list"
                    :key="item.product"
                >
                    <ul>
                        <li v-for="(val,field) in fields" :key="field">
                        {{item[field] ? item[field] : '-'}}
                    </li>
                    </ul>
                </van-cell>
            </van-list>
        </div>
    </div>
`

Vue.component('stock-table', {
    template : StockTable,
    props:['list', 'fields'],
    data() {
        return {
            loadingFinish: false,
            colsTop:[]
        }
    },
    mounted() {
        this.$nextTick(_=>{
            setTimeout(_=>{
                this.getColsOffsetTop()
            },10)
            window.addEventListener('scroll',this.setHeadereSus)
            document.getElementById('wrapper').addEventListener('scroll', this.setFistColSus)
            this.setBodyAutoWidth()
            this.setListOffset()
        })
    },
    watch:{
        list(){
            this.setBodyAutoWidth()
            this.setListOffset()
            // this.initSroll()
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll',this.setHeadereSus)
        document.getElementById('wrapper').removeEventListener('scroll', this.setFistColSus)
    },
    methods: {
        // 设置list宽（横向滚动要求）
        setListOffset(){
            let w = 0
            let list = this.$refs.wrap.querySelectorAll('.list')[0]
            let header = this.$refs.wrap.querySelectorAll('.header li')
            header.forEach(ele => w+=ele.offsetWidth);
            list.style.width = `${w}px`
        },

        // body宽度等于header宽度
        setBodyAutoWidth(){
            let header = this.$refs.wrap.querySelectorAll('.header li')
            let rows = this.$refs.wrap.querySelectorAll('.body .row')
            for (const row of rows) {
                let cols = row.querySelectorAll('.row li')
                header.forEach((ele,index) => {
                    if (cols.length<=0) return
                    let padding = getComputedStyle(ele, false)['padding']
                    cols[index].style.width=`${ele.offsetWidth}px`
                    cols[index].style.padding = padding
                });
            }
            this.loadingFinish = true
        },
        
        // 设置header悬浮
        setHeadereSus(e){
            let clientHeight = document.body.clientHeight
            let listHeight = this.$refs.wrap.offsetHeight;
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let header = document.querySelectorAll('#wrapper .header')[0];
            let body = this.$refs.wrap.querySelectorAll('.body')[0]
            if (scrollTop > clientHeight-listHeight){
                header.style.position = 'fixed'
                header.style.boxShadow = '0 0 .05rem #eee'
                body.style.marginTop = header.offsetHeight+'px'
            } else {
                header.style.position = 'static'
                header.style.boxShadow = 'none'
                body.style.marginTop = 0
            }

            let rows = this.$refs.wrap.querySelectorAll('.body .row')
            let _header = this.$refs.wrap.querySelectorAll('.header li')
            // let scrollLeft = document.getElementById('wrapper').scrollLeft
            if (this.colsTop[0]-scrollTop<=0) {
                _header[0].style.top = 0
            } else {
                _header[0].style.top = `${this.colsTop[0]-scrollTop}px`
            }
            
            for (let index = 0; index < rows.length; index++) {
                let cols = rows[index].querySelectorAll('li')
                cols[0].style.top = `${this.colsTop[index+1]-scrollTop}px`
            }
            // console.log(scrollTop)
            // this.setFistColSus()
        },

        // 设置company悬浮
        setFistColSus(e){
            let scrollLeft = document.getElementById('wrapper').scrollLeft
            let scrollHeader = document.querySelectorAll('#wrapper .header')[0];
            let header = this.$refs.wrap.querySelectorAll('.header li')
            let rows = this.$refs.wrap.querySelectorAll('.body .row')
            scrollHeader.style.left = -scrollLeft+'px'
            for (const row of rows) {
                let cols = row.querySelectorAll('li')
                if (scrollLeft > 0) {
                    [header[0], cols[0]].forEach(ele => ele.style.position = 'fixed');
                    // [header[0], cols[0]].forEach(ele => {
                    //     ele.style.position = 'absolute'
                    //     ele.style.left = scrollLeft+'px'
                    // })
                    header[1].style.marginLeft = header[0].offsetWidth+'px'
                    cols[1].style.marginLeft = cols[0].offsetWidth+'px'
                } else {
                    [header[0], cols[0]].forEach(ele => ele.style.position = 'static');
                    // [header[0], cols[0]].forEach(ele => {
                    //     ele.style.position = 'static'
                    //     ele.style.left = 0
                    // })
                    [header[1], cols[1]].forEach( ele=>ele.style.marginLeft = 0 )
                }
            }
        },

        // 获取第一列的初始纵坐标
        getColsOffsetTop(){
            let rows = this.$refs.wrap.querySelectorAll('.body .row')
            let header = this.$refs.wrap.querySelectorAll('.header li')
            this.colsTop.push(this.getTop(header[0]))
            header[0].style.top = this.getTop(header[0])
            console.log(header[0].get)
            for (const row of rows) {
                let cols = row.querySelectorAll('li')
                this.colsTop.push(this.getTop(cols[0]))
                cols[0].style.top = this.getTop(cols[0])
            }
        },

        // 获取元素纵坐标
        getTop(e){
            var offset=e.offsetTop;
            if(e.offsetParent!=null) offset+=this.getTop(e.offsetParent);
            return offset;
        }

    },
})