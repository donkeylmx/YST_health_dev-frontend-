/* eslint-disable no-unused-vars */
/* eslint-disable */ 
const Api = {
    yuyue:{
        time:'',
        account:'',
        store:'',
        status:'',
    },
    getItem(data){
        let time = data;
        let thisTime = [];
        const Tweek = ['Mon','Tue','Wed',"Thu","Fri","Sat","Sun"];
        const Tmonth = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let Tsum = 0;
        while(Tsum<Tweek.length){
            if(data[0] === Tweek[Tsum]){
                time[0] = Tsum+1;
                Tsum = 0;
                break;
            }
            Tsum++;
        };
        Tsum = 0;
        while(Tsum<Tmonth.length){
            if(data[1] === Tmonth[Tsum]){
                time[1] = Tsum+1;
                Tsum = 0;
                break;
            }
            Tsum++;
        }
        // if(data[0] === 'Sat'){
        //     time[0] = 6;
        // }
        // if(data[1] === 'May'){
        //     time[1] = 5;
        // }
        
        console.log(time);


        let sum = 0 ;
        let day = time[2]
        let reWeek = time[0];
        let monthday = 31;
        let weekday = ['周日','周一','周二','周三','周四','周五','周六',];
        if(data[1] === '4'|'6'|'9'|'11'){
            monthday = 30;
        }
        if(data[1] === '2'){
            monthday = 28;
        }
        console.log(thisTime);
        while(sum < 14){
            if(day > monthday){
                data[1]++;
                day = 1;
            }
            thisTime.push({
                day:data[1] + '-'+ day,
                xinqi:weekday[(reWeek)%7],
            })
            // thisTime[sum].day = data[1] + '-'+ day;
            sum++;
            day++;
            reWeek++;
        }
        return thisTime;
    },
    getTimeSelect(){
        let xfm = new Date().toString().split(' ');
        xfm = xfm[4].split(':')
        return[
            {time:'8:00~9:00',status:this.Status(xfm[0],8),},
            {time:'9:00~10:00',status:this.Status(xfm[0],9),},
            {time:'10:00~11:00',status:this.Status(xfm[0],10),},
            {time:'11:00~12:00',status:this.Status(xfm[0],11),},
            {time:'12:00~13:00',status:this.Status(xfm[0],12),},
            {time:'13:00~14:00',status:this.Status(xfm[0],13),},
            {time:'14:00~15:00',status:this.Status(xfm[0],14),},
            {time:'15:00~16:00',status:this.Status(xfm[0],15),},
            {time:'16:00~17:00',status:this.Status(xfm[0],16),},
            {time:'17:00~18:00',status:this.Status(xfm[0],17),},
            {time:'18:00~19:00',status:this.Status(xfm[0],18),},
            {time:'19:00~20:00',status:this.Status(xfm[0],19),},
        ]
    },
    Status(data1,data2){
        if(data1<data2){
            return 1;
        }
        else{
            return 0;
        }
    }
}
export default Api;
