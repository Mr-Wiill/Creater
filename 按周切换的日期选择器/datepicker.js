const template = 
    `<div class="date">
        <!-- 年份 月份 -->
        <div class="picker">
            <div class="picker-btn" @click="pickerHandle">
                <span>{{currentYear}}年{{currentMonth<10 ? '0'+currentMonth : currentMonth}}月</span>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>
            <span class="today" @click="today">返回今日</span>
        </div>
        <!-- 星期 -->
         <div class="date-list">
            <ul class="weekdays">
               <li>日</li> <li>一</li> <li>二</li> <li>三</li> <li>四</li> <li>五</li> <li>六</li> 
            </ul>
            <!-- 日期 -->
            <ul class="days">
                <template v-for="(day, index) in days">
                    <li @click="pick(day)" v-if="day.getMonth()+1 == currentMonth"
                        :key="index" 
                        :class="{'is-active':day.getDate()==selectedDay}"
                        >{{day.getDate()}}</li>
                    <li v-else class="other-month" 
                        :key="index" 
                        :class="{'is-active':day.getDate()==selectedDay}"
                        @click="pick(day)"
                        >{{day.getDate()}}</li>
                </template>
            </ul>
            <span class="pre-btn" @click="weekPre"><van-icon name="arrow-left" size=".25rem"/></span>
            <span class="nex-btn" @click="weekNext"><van-icon name="arrow" size=".25rem"/></span>
        </div>
    </div>
    `

Vue.component('date-picker',{
    template: template,
    props: ['time'],
    data () {
        return {
            currentYear: 1970,      // 年份
            currentMonth: 1,        // 月份
            currentDay: 1,          // 日期
            currentWeek: 1,         // 星期
            days: [],
            selectedDay: this.currentDay,
            activeDay: 1
        }
    },
    watch:{
        time(){
            this.pick(this.time)
        }
    },
    methods:{
        // 返回今日
        today(){
            this.pick(new Date())
        },

        // 当前选择日期
        pick (date) {
            const d = new Date(date)
            this.initData(d)
            this.selectedDay = this.activeDay = d.getDate()
            this.$emit('change', this.formatDate(d.getFullYear(), d.getMonth() + 1, d.getDate()))
        },

        // 选择日期
        pickerHandle(){
            this.$emit('picker')
        },

        // 初始化
        initData(cur) {
            let date = ''
            cur ? date = new Date(cur) : date = new Date()
            this.currentDay = date.getDate()            // 今日日期 几号
            this.currentYear = date.getFullYear()       // 当前年份
            this.currentMonth = date.getMonth() + 1     // 当前月份
            this.currentWeek = date.getDay()            // 1...6,0  // 星期几

            const str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay)       // 今日日期 年-月-日
            this.days.length = 0
            // 获取本周日期，周日排第一个
            for (let i = this.currentWeek; i >= 0; i -= 1) {        // 当日之前的日期
                const d = new Date(str)
                d.setDate(d.getDate() - i)
                this.days.push(d)
            }
            for (let i = 1; i <= 6 - this.currentWeek; i += 1) {    // 当日之后的日期
                const d = new Date(str)
                d.setDate(d.getDate() + i)
                this.days.push(d)
            }
        },

        // 格式化
        formatDate (year, month, day) {
            const y = year
            let m = month
            if (m < 10) m = `0${m}`
            let d = day
            if (d < 10) d = `0${d}`
            return `${y}-${m}-${d}`
        },

        // 上个星期
        weekPre () {
            const d = this.days[0]          // 如果当期日期是7号或者小于7号
            d.setDate(d.getDate() - 6)
            this.initData(d)
            this.setActive()
        },
    
        // 下个星期
        weekNext () {
            const d = this.days[6]          // 如果当期日期是7号或者小于7号
            d.setDate(d.getDate() + 6)
            this.initData(d)
            this.setActive()
        },

        // 设置选中
        setActive(){
            let isCurrent = this.currentMonth == (new Date()).getMonth()+1
            isCurrent ? this.selectedDay = this.activeDay : this.selectedDay = '';
        }
    }
})