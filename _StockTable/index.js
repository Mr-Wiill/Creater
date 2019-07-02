const StockTable = `
<div id="stocklist" ref="stocklist" v-cloak @scroll="transverseSroll">
    <div class="list">
        <ul class="row">
            <li v-for="(item,index) in fields" :key="index" :class="'col_'+index">{{item}}</li>
        </ul>
        <ul class="row" v-for="item in list" :key="item.product">
            <li v-for="(val,field) in fields" :key="field">
                {{item[field] ? item[field] : '-'}}
            </li>
        </ul>
    </div>
</div>
`

Vue.component('stock-table', {
    template : StockTable,
    props:['list', 'fields'],
    data() {
        return {
            firstCols:[],
            rows:[],
            isFloat: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.portraitScroll)
        this.rows = [...this.$refs.stocklist.querySelectorAll('.row')]
        this.firstCols = this.rows.map(el=>el.querySelectorAll('li')[0])
        this.setAutoWidth()
        this.setSecondColsMargin()
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.portraitScroll)
    },
    watch:{
        list(){
            this.setAutoWidth()
        }
    },
    methods: {
        // 纵向滚动
        portraitScroll(){
            let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
            let topHeader = document.body.scrollHeight - this.$refs.stocklist.offsetHeight
            scrollTop >= topHeader ? this.isFloat = true : this.isFloat = false
            if (this.isFloat) {
                this.rows[0].style.position = 'fixed'
                this.rows[1].style.marginTop = `${this.rows[0].offsetHeight}px`
            } else{
                this.rows[0].style.position = ''
                this.rows[1].style.marginTop = 0
                this.rows[0].style.transform = ''
                this.firstCols[0].style.transform = ''
            }
        },

        // 横向滚动
        transverseSroll(){
            if (!this.isFloat) return
            let scrollLeft = this.$refs.stocklist.scrollLeft
            this.rows[0].style.transform = `translateX(${-scrollLeft}px)`
            this.firstCols[0].style.transform = `translateX(${scrollLeft}px)`
        },

        // 第二列添加左边距
        setSecondColsMargin(){
            let secondCols = this.rows.map(el=>el.querySelectorAll('li')[1])
            secondCols.forEach((el,index) => el.style.marginLeft = `${this.firstCols[index].offsetWidth}px`)
        },

        // 宽度自适应
        setAutoWidth(){             
            let maxColWidth = {}     // 列宽为最宽元素的宽度 
            let header_li = this.rows[0].querySelectorAll('li');
            header_li.forEach((h_col, i) => maxColWidth[i] = h_col.offsetWidth);
            for (let j = 1; j < this.rows.length; j++) {
                let cols = this.rows[j].querySelectorAll('li');
                cols.forEach((r_col, index) => {
                    r_col.offsetWidth > maxColWidth[index] ? maxColWidth[index]=r_col.offsetWidth : ''
                });
            }
            header_li.forEach((h_col, i) => h_col.style.width=maxColWidth[i]+'px');
            for (let j = 1; j < this.rows.length; j++) {
                let cols = this.rows[j].querySelectorAll('li');
                cols.forEach((r_col, index) => {
                    r_col.style.width = maxColWidth[index]+'px'
                });
            }
        },
    }
})