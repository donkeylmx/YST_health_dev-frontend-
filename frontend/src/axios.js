/* eslint-disable no-console */
import axios from 'axios'


//对外接口
// export function request({method, url, params}){
//   if(method == 'Get'){
//       return get(url, params);
//   }else if(method == 'Post'){
//       return post(url, params);
//   }
// }

// // 封装get方法
// function get(url, params){
//   return new Promise((resolve, reject) =>{
//       axios.get(url, params).then(res =>{
//           resolve(res.data);
//       }).catch(err =>{
//           reject(err.data);
//       })
//   });

// }

// 封装post方法
// function post(url, params){
//   return new Promise((resolve, reject) =>{
//       axios.post(url, QS.stringify(params)).then(res =>{
//           resolve(res.data);
//       }).catch(err =>{
//           reject(err.data);
//       })
        
//   });
// }
  const http = {

    //get所有预约数据(json-server)
    // getAllYuyue(){
    //   return new Promise((resolve,reject) =>{
    //     axios.get("http://localhost:8081/yuyue",{})
    //     .then(res => {
    //       resolve(res.data);
    //     }).catch(err =>{
    //       reject(err.data);
    //     })
    //   })
    // },
    // postYuyue(data){
    //   return new Promise((resolve,reject) =>{
    //     axios.post("http://localhost:8081/yuyue",{
    //       data,
    //     })
    //     .then(res => {
    //       resolve(res.data);
    //     }).catch(err =>{
    //       reject(err.data);
    //     })
    //   })
    // },
    //添加预约信息
    addReservation(user,physician,store,time){
      return new Promise((resolve,reject) =>{
        axios.post("api/reservation/add?guest="+user+"&physician="+physician+"&store="+store+"&period="+time,{})
        .then(res => {
          resolve(res.data);
        }).catch(err =>{
          reject(err.data);
        })
      });    
    },

    //获取我和店铺的距离
    getlatitude(lng,lat){
      return new Promise((resolve,reject) =>{
        axios.post("sapi/latitude?lng="+lng+"&lat="+lat+"&distance=99999999",{})
        .then(res => {
          resolve(res.data);
        }).catch(err =>{
          reject(err.data);
        })
      });    
    },
    //根据地址搜索百度地图uid
    searchuid(access){
      return new Promise((resolve,reject) =>{
        axios.get("v2/search?query="+access+"&region=杭州&output=json&ak=sIuRqyyUgupzoEl2ke2olwGzgx8xtnCB",{})
        .then(res => {
          resolve(res.data);
        }).catch(err =>{
          reject(err);
        })
      });       
    },
    //通过用户权限码创建店铺
    addStore(data){
      console.log(data);
      return new Promise((resolve,reject) =>{
        axios.post("api/store/add",{
          accesscode: data.accesscode,
          address: data.address,
          closeTime: data.closeTime,
          openTime: data.openTime,
          information: data.information,
          latitude: data.latitude, //定位信息
          message: data.message, //报错消息
          name: data.name,
          phone: data.phone,
        })
        .then(res => {
          resolve(res.data);
        }).catch(err =>{
          reject(err.data);
        })
      });    
    },
    //获取用户权限码下的店铺信息
    getStore(access){
      return new Promise((resolve,reject) =>{
        axios.post("api/store/access?accesscode="+access,{})
        .then(res => {
          resolve(res.data);
        }).catch(err =>{
          reject(err.data);
        })
      });    
    },
    //根据店铺的uuid删除店铺
    del_store(uuid){
      return new Promise((resolve,reject) =>{
        axios.post("api/store/delete/uuid?uuid="+uuid,{})
        .then(res => {
          resolve(res.data);
        }).catch(err =>{
          reject(err.data);
        })
      });      
    },
    //根据任意权限码获取相关用户的uuid
    getUser_access(access){
      return new Promise((resolve,reject) =>{
        axios.get("api/access/code/"+access,{})
        .then(res => {
          resolve(res.data);
        }).catch(err =>{
          reject(err.data);
        })
      });      
    },
    //根据店铺uuid获取店铺的所有技师权限码
    getPhysician(uuid){
      return new Promise((resolve,reject) =>{
        axios.get("api/physician/store/"+uuid,{})
        .then(res => {
          resolve(res.data);
        }).catch(err =>{
          reject(err.data);
        })
      });      
    },
    //店铺模糊查找
    getStoreName(store){
      return new Promise((resolve,reject) =>{
        axios.post("api/store/name?name="+store,{})
        .then(res => {
          resolve(res.data);
        }).catch(err =>{
          reject(err.data);
        })
      });
    },
    //电话号码查找用户
    getDictionary(){
      return new Promise((resolve,reject) =>{
        axios.get("api/dictionary/",{})
        .then(res => {
          resolve(res.data);
        }).catch(err =>{
          reject(err.data);
        })
      });
    },
    //根据账号查找用户
  getUserAccount(account){
    return new Promise((resolve,reject) =>{
      axios.post("api/user/account?account=" + account,{})
      .then(res => {
        resolve(res.data);
      }).catch(err =>{
        reject(err.data);
      })
    });
  },
  //UUid查找用户
  getUser(uuid){
    return new Promise((resolve,reject) =>{
      axios.get("api/user/find/" + uuid,{})
      .then(res => {
        resolve(res.data);
      }).catch(err =>{
        reject(err.data);
      })
    })
  },
  //查询所有店铺信息
  getAllStore(){
    return new Promise((resolve,reject) =>{
      axios.get("api/store/", {})
      .then(res =>{
        resolve(res.data);
      }).catch(err =>{
        reject(err.data)
      })
    })
  },
  // 根据uuid查找用户权限
  getAccess(uuid){
    return new Promise((resolve,reject) =>{
      axios.get("api/access/user/" + uuid, {})
      .then(res =>{
        resolve(res.data);
      }).catch(err =>{
        reject(err.data)
      })
    })
  },
  getUserServe(uuid){
    return new Promise((resolve,reject) =>{
      axios.get('api/serving/user/'+ uuid, {})
      .then(res =>{
        resolve(res.data);
      }).catch(err =>{
        reject(err.data);
      })
    })
  },
  getUserDiagnosis(uuid){
    return new Promise((resolve,reject) =>{
      axios.get('api/diagnosis/user/'+ uuid, {})
      .then(res =>{
        resolve(res.data);
      }).catch(err =>{
        reject(err.data);
      })
    })
  },
  //新增权限
  AddUserAccess(account,type){
    return new Promise((resolve,reject) =>{
      axios.post('api/access/create?user='+account+'&type='+type, {})
      .then(res =>{
        resolve(res.data);
      }).catch(err =>{
        reject(err.data);
      })
    })
  },
}

export default http;

