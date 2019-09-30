<!-- 诊疗详细细节 -->
<template>
    <div class="medicaldetail_main">
        <yd-layout>
        <yd-navbar slot="navbar" title="诊疗详细记录">
            <router-link to="/MedicalRecord" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>
        </yd-navbar>
        <div class="medicaldetail_main_detlia">
            {{Customer}}
        </div>
        </yd-layout>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    name:'MedicalDetail',
    data(){
        return{
           Customer:{
               odering:this.$router.params.ording
           }
        }
    },
    mounted(){
        console.log(this.data);
    }
}
    
</script>
<style>
.medicaldetail_main{
    
}
</style>
