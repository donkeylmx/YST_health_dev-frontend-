<template>
  <div id="center">
    <yd-flexbox direction="vertical">
    </yd-flexbox>   
  </div>

</template>
<script>
// import login from '@/components/loginAll/loginContent.vue'
// import register from '@/components/loginAll/resContent.vue'
export default {
    name:'Center',
    components:{

    },
     data() {
              return {         
                infomation:'23',   
              };
},
      mounted(){
        this.axios.get('/user/')
        .then(body => {
          this.infomation = body.data;
        })
        .catch(function(error) {
           // eslint-disable-next-line
          console.log(error);
                        });
      this.inffo();
      },
      methods:{
        inffo(){
          this.axios.post('/user/gender', {
            gender:2,
          })
          .then(body =>{
            // eslint-disable-next-line 
            console.log(body.data);
          })
          .catch(function (error) {
            // eslint-disable-next-line
          console.log(error);
          })
        }
      }
           
}
</script>
<style>
</style>
