
<!-- 诊疗记录 -->
<template>
<div class="MedicalRecord">
    <yd-layout>
        <yd-navbar slot="navbar" title="诊疗记录">
            <router-link to="/customerCenter" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>
        </yd-navbar>
        <div class="MedicalRecord_main clearfix">
            <div class="MedicalRecord_main_log" v-for="(order,index) in orders" :key="order.id">
                <p>{{order.createTime}}</p>
                <P>{{order.diagnose}}</P>
                <button type="button" @click="enter('MedicalDetail',index)">查看详情</button>
            </div>
        </div>
    </yd-layout>
</div>

</template>
<script>
export default {
    /* eslint-disable no-console */
    name:'MedicalRecord',
    data(){ 
        return{
            orders:{
            }
        }
    },
    mounted(){
        this.getAlog();
    },
    computed:{
    },
    methods:{
        enter(page,data) {
            //console.log(this.$data.orders[0]);
            this.$router.push({
                name:page,
                params:{
                    orders:this.orders[data].odering,
                    history:this.orders[data].history,
                    guest:this.orders[data].guest,
                    store:this.orders[data].store,
                    access:this.orders[data].access,
                    exterior:this.orders[data].exterior,
                    self:this.orders[data].self,
                    diagnose:this.orders[data].diagnose,
                    hospital:this.orders[data].hospital,
                    solution:this.orders[data].solution,
                    state:this.orders[data].state,
                    createTime:this.orders[data].createTime,
                    updateTime:this.orders[data].updateTime,
            }})
        },
        getAlog(){
            var _this = this;            
            _this.axios.get("/api/diagnosis/user/"+window.localStorage.getItem('YST_ID'), {
        })
        .then(function (response) {
            let sum = 0;
            let jsonData = JSON.stringify(response.data.diagnoses);// 转成JSON格式
            let result = JSON.parse(jsonData);// 转成JSON对象
            _this.orders = result;
            while(_this.orders[sum]){//对createTime进行修改
                let xx = _this.orders[sum].createTime;
                xx=xx.substring(0,xx.indexOf(".")).replace(/T/g," ")
                _this.orders[sum].createTime = xx;
                sum++;
            }
            console.log(_this.orders[0].history);
        })
        .catch(function (error) {
            console.log(error);
        })
        }

    },
}
</script>
<style>

.MedicalRecord .yd-navbar{
    height: 1rem !important;
}
.MedicalRecord_main{
    padding-top: 1.2rem;
}
.MedicalRecord_main_log{
    height: 2rem;
    width: 100%;
    margin-bottom: 0.1rem;
    padding: 0.1rem;
    border: 1px black solid;
}
.MedicalRecord_main_log button{
    position: relative;
    width: 20%;
    height: 30%;
    top: 0.6rem;
    left: 78%;
    border: 1px black solid;
}
</style>