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
            loadingFinish: false
        }
    },
    mounted() {
        this.$nextTick(_=>{
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
            let body = document.querySelectorAll('#wrapper .body')[0]
            if (scrollTop > clientHeight-listHeight){
                header.style.position = 'fixed'
                header.style.boxShadow = '0 0 .05rem #eee'
            } else {
                header.style.position = 'static'
                header.style.boxShadow = 'none'
            }
        },

        // 设置company悬浮
        setFistColSus(e){
            let scrollLeft = document.getElementById('wrapper').scrollLeft
            let scrollHeader = document.querySelectorAll('#wrapper .header')[0];
            let header = this.$refs.wrap.querySelectorAll('.header li')
            let rows = this.$refs.wrap.querySelectorAll('.body .row')
            scrollHeader.style.left = -scrollLeft+'px'
            if (scrollLeft > 0){
                header[0].style.position = 'fixed'
                console.log(header[0].offsetWidth)
                header[1].style.marginLeft = header[0].offsetWidth
                for (const row of rows) {
                    let cols = row.querySelectorAll('li')
                    cols[0].style.position = 'fixed'
                    cols[1].style.marginLeft = cols[0].offsetWidth
                }
            } else {
                header[0].style.position = 'static'
                header[1].style.marginLeft = 0
                for (const row of rows) {
                    let cols = row.querySelectorAll('li')
                    cols[0].style.position = 'static'
                    cols[1].style.marginLeft = 0
                }
            }

        },

    },
})