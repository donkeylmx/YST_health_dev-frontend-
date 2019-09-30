
<template>
    <div class="diagnosis_main">

            <yd-navbar title="服务记录">
      <router-link to="/Center"
                   slot="left">
        <yd-navbar-back-icon />
      </router-link>
    </yd-navbar>
    <div class="">{{diagnosis}}</div>
    </div>
</template>
<script>
/* eslint-disable no-console */
export default {
    name:'Diagonsis',
    data(){
        return{
            user:'',
            diagnosis:'',
        }
    },
    mounted(){
        this.http.getUserDiagnosis(window.localStorage.getItem('YST_ID'))
        .then(res =>{
            this.diagnosis = res;
            console.log(this.diagnosis)
        })
        .catch(err =>{
            console.log(err);
        });
    },
    methods:{

    }
}
</script>
<style>
    
</style>