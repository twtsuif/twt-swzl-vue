<template>
  <body>
  <footer>
    <!-- 底部栏 -->
    <div class="box" @click="toHome">
      <div class="tu1"></div>
      <div class="zi1">招领</div>
    </div>
    <div class="box" @click="showCreate=true">
      <div class="tu2"></div>
    </div>
    <div class="box" @click="toMyInfo">
      <div class="tu3"></div>
      <div class="zi2">我的</div>
    </div>
  </footer>
  <transition name="opacity">
    <div id="createBox" v-if="showCreate">
      <Create/>
    </div>
  </transition>
  </body>
</template>

<script>
import Create from "../views/Create.vue";

export default {
  name: 'bottom',
  components: {
    Create
  },
  data() {
    return {
      showCreate: false,
    }
  },
  methods: {
    fatherMethod() {
      this.showCreate = false
    },
    toMyInfo: function () {
      this.$router.push('/MyInfo')
    },
    toHome: function () {
      this.$router.push('/Home')
    }
  },
}
</script>

<style scoped lang="css">

#createBox {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  z-index: 999;
}

body {
  margin: 0;
  width: 100%;
  /* overflow-x: hidden; */
}

footer {
  width: 100%;
  margin: 0;
  height: 125px;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  background-color: white;
  position: fixed;
  bottom: -62px;
  box-shadow: 6px 5px 15px rgba(40, 40, 40, 0.5);
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100px;

}

.tu1 {
  width: 30px;
  height: 30px;
  background: url("../assets/images/zhaoling.png");
  background-size: 100% 100%;
  margin-top: 15px;
}

.tu2 {
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 10px;
  background: url("../assets/images/dajiahao.png");
  background-size: 100% 100%;
}

.tu3 {
  width: 30px;
  margin-top: 15px;
  height: 32px;
  background: url("../assets/images/wode.png");
  background-size: 100% 100%;

}

.zi1 {
  color: #589788;
  height: 100%;
  font-size: 0.9rem;
  font-weight: Bold;
  text-align: center;
}

.zi2 {
  color: #CDCDCD;
  height: 100%;
  font-size: 0.9rem;
  font-weight: Bold;
  text-align: center;
}
</style>
