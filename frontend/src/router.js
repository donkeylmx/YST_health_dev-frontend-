import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'YST_Home',
      //重定向到首页
      redirect: { name: 'Home' },
      // 首页
      component: () => import('./views/Home.vue'),
      children: [
        {
          //首页推荐
          path: '/one',
          name: 'Home',
          component: () => import('./views/homePage/1.vue'),
        },
        {
          // 搜索
          path: '/two',
          name: 'two',
          component: () => import('./views/homePage/2.vue'),
        },
        {
          path: '/physician',
          name: 'physician',
          component: () => import('./views/homePage/3.vue'),
        },
        {
          path: '/store',
          name: 'store',
          component: () => import('./views/homePage/3_store.vue'),
        },
        {
          //用户中心
          path: '/Center',
          name: 'Center',
          component: () => import('./views/homePage/Center.vue')
        },


        // 诊疗记录（顾客）
        {
          path: '/MedicalRecord',
          name: 'MedicalRecord',
          component: () => import('./views/CenterPage/Customer/MedicalRecord.vue'),
        },
      ]
    },
    //新建店铺
    {
      path:'/NewStore',
      name:'NewStore',
      component:() =>import('./views/StorePage/NewStore.vue'),
    },
    //我的店铺
    {
      path:'/MyStore',
      name:'MyStore',
      component:() =>import('./views/StorePage/MyStore.vue'),
    },
    //我的技师
    {
      path:'/MyPhysician',
      name:'MyPhysician',
      component:() =>import('./views/StorePage/MyPhysician.vue'),
    },
    //个人资料
    {
      path: '/PersonInfo',
      name: 'PersonInfo',
      component: () => import('./views/CenterPage/Customer/PersonInfo.vue'),
    },
    //用户权限管理
    {
      path: '/Access',
      name: 'Access',
      component: () => import('./views/CenterPage/UserAccess.vue'),
    },
    //用户诊断记录
    {
      path: '/Diagnosis',
      name: 'Diagnosis',
      component: () => import('./views/CenterPage/Diagnosis.vue'),
    },
    //新增诊断记录
    {
      path: '/AddDiagnosis',
      name: 'AddDiagnosis',
      component: () => import('./views/CenterPage/AddDiagnosis.vue'),
    },
    //用户服务记录
    {
      path: '/Items',
      name: 'Items',
      component: () => import('./views/CenterPage/Serving.vue'),
    },

    //诊疗详细记录（顾客）
    {
      path: '/MedicalDetail',
      name: 'MedicalDetail',
      component: () => import('./views/CenterPage/Customer/MedicalDetail.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/loginPage/Login.vue'),
      children: [
        {
          path: '/login',
          name: 'loginPage',
          component: () => import('./views/loginPage/Customer/login.vue'),
        },
        {
          path: '/registr',
          name: 'registrPage',
          component: () => import('./views/loginPage/Customer/registr.vue'),
          children: [
            {
              path: '/registr',
              name: 'registrPage_1',
              component: () => import('./views/loginPage/Customer/registr_1.vue'),
            },
            {
              path: '/registrPinfo',
              name: 'registrPage_2',
              component: () => import('./views/loginPage/Customer/registr_2.vue'),
            },
          ]
        },
        {
          path: '/technician',
          name: 'technicianPage',
          component: () => import('./views/loginPage/Technician/login.vue')
        },
        {
          path: '/manager',
          name: 'managerPage',
          component: () => import('./views/loginPage/Manager/login.vue')
        },
      ]
    },
    //商铺的服务项目信息，跳转，技师选择，购买服务确认页面
    {
      path: '/product',
      name: 'product',
      component: () => import('./views/BusinessPage/product.vue')
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: () => import('./views/BusinessPage/reservation.vue')
    },
    {
      path: '/physicianSelect',
      name: 'physicianSelect',
      component: () => import('./views/BusinessPage/physician.vue')
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: () => import('./views/BusinessPage/purchase.vue')
    },

  ]
})
