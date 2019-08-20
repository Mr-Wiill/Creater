const template = `
    <div id="wrapper" ref="wrap">
        <div class="list">
            <div class="header">
                <ul>
                    <li v-for="(col,index) in columns" :key="index" :style="{width: col.width}">{{col.title}}</li>
                </ul>
            </div>
            <div class="body" ref="body">
                <ul v-for="(item, index) in data" :key="index">
                    <li v-for="col in columns" 
                        :key="col.field" 
                        :style="{width: col.width}">
                        <div v-if="col.code" class="company">
                            <span class="name">{{item[col.field]}}</span>
                            <span class="code">{{item[col.code]}}</span>
                        </div>
                        <span v-else>{{item[col.field]}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
`

Vue.component('stock-table', {
    template : template,
    props:['data', 'columns'],
    data(){
        return{
            rows:[],
            firstCols:[],
            secondCols:[]
        }
    },
    mounted(){
        this.actionFn()
    },
    watch:{
        data(){
            this.actionFn()
        }
    },
    methods: {
        actionFn(){
            if (this.data.length<=0)return
            this.$nextTick(()=>{
                this.rows = [...this.$refs.wrap.querySelectorAll('#wrapper ul')]
                this.firstCols = this.rows.map(el=>el.querySelectorAll('li')[0])
                this.secondCols = this.rows.map(el=>el.querySelectorAll('li')[1])
                this.setListOffset()
                this.initSroll()
            })
        },

        // 第一列横向滚动悬浮
        setFistColSus(e){
            e.x<0
            ? this.firstCols.forEach(el => el.style.left = `${Math.abs(e.x)}px`)    // 横向滚动
            : this.firstCols.forEach(el=> el.style.left = '')        // 还原
        },

        // 设置list宽（横向滚动要求）
        setListOffset(){
            let w = 0
            let list = this.$refs.wrap.querySelectorAll('.list')[0]
            this.rows[0].querySelectorAll('li').forEach(ele => w+=(ele.offsetWidth+4));
            list.style.width = `${w}px`
            this.secondCols.forEach((el,index)=>el.style.marginLeft=this.firstCols[index].offsetWidth+'px')
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
                    pullUpLoad: {
                        threshold: 5
                    },
                    mouseWheel: {    // pc端同样能滑动
                        speed: 50,
                        invert: false
                    },
                    useTransition:false  // 防止iphone微信滑动卡顿
                })
            } else {
                this.BScroll.refresh()
            }
            this.BScroll.on("scroll", this.setFistColSus);
        }
    },
})