<template>
  <yd-layout>
    <yd-navbar slot="navbar"
               title="消费记录">
      <router-link to="#"
                   slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <yd-tab v-model="tab2"
            :callback="fn"
            :prevent-default="false"
            :item-click="itemClick">
      <yd-tab-panel v-for="select in selects"
                    :key="select.label"
                    :label="select.label">{{select.content}}</yd-tab-panel>
    </yd-tab>
    <div class="content">
      <ul id=""
          class="">
        <li class="card"
            v-for="(item, index) in items"
            :key="item.id">
          <p class="img"> <img src="http://www.w3school.com.cn/i/eg_tulip.jpg"
                 alt=""></p>
          <p>{{index}}{{item.data}}</p>
          {{item.technician}}
          {{item.serve}}
          {{item.stats}}

        </li>
      </ul>
    </div>
  </yd-layout>
</template>

<script>
export default {
  name: "Record",
  components: {},
  data() {
    return {
      Customer: "001",
      tab2: 0,
      selects: [
        { label: "已完成", content: "aaaaaaaaaaa" },
        { label: "未完成", content: "bbbbbbbbbbb" },
        { label: "正在进行", content: "ccccccccccc" },
      ],
      items: [
        {
          data: "2019-4-10",
          time: "18:00-20:00",
          technician: "Lee",
          serve: "按摩",
          stats: "已完成",
          img: "商品图片"
        },
        {
          data: "2019-4-10",
          time: "18:00-20:00",
          technician: "Lee",
          serve: "按摩",
          stats: "正在进行",
          img: "商品图片"
        },
        {
          data: "2019-4-10",
          time: "18:00-20:00",
          technician: "Lee",
          serve: "按摩",
          stats: "已预约",
          img: "商品图片"
        }
      ]
    };
  },
  methods: {
    fn(label, key) {
      /* eslint-disable */
      console.log(label, key);
    },
    itemClick(key) {
      this.$dialog.loading.open("数据加载中");
      setTimeout(() => {
        this.tab2 = key;
        this.$dialog.loading.close();
        this.items[key].content =
          "新内容【key:" + key + "】新内容_" + new Date().getTime();
      }, 200);
    }
  }
};
</script>
<style>
.content {
  height: 100%;
  width: 100%;
}
.content ul {
  height: auto;
}
.card {
  height: auto;
  border: 1px solid;
  border-radius: 5px;
  background: #989b9ba4;
}
.img {
  height: auto;
  width: 100%;
}
.img img {
  height: 160px;
}
</style>

