const StockTable = `
<div id="stocklist" ref="stocklist" v-cloak @scroll="setFistColSus">
    <div class="wrapper">
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
            rows:[]
        }
    },
    mounted() {
        this.rows = [...this.$refs.stocklist.querySelectorAll('.row')]
        this.firstCols = this.rows.map(el=>el.querySelectorAll('li')[0])
        this.setAutoWidth()
    },
    watch:{
        list(){
            this.setAutoWidth()
        }
    },
    methods: {
        // 宽度自适应
        setAutoWidth(){         
            let maxColWidth = {}     
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

        // 第一列浮动
        setFistColSus(){
            let scrollLeft = document.getElementById('stocklist').scrollLeft
            this.firstCols.forEach(el=>el.style.transform = `translateX(${scrollLeft}px)`)
        }
    }
})