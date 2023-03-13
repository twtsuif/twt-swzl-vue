<template>
  <body id="root">
  <div class="top">
    <div class="top1"></div>
    <div class="top2">新建帖子</div>
  </div>
  <div class="middle">
    <div class="middle1"></div>

    <transition name="move1" appear>
      <div id="mid1" class="middle2" v-show="aniShow" @click="toCreatePost">
        <div class="tu">
          <div class="tu1"></div>
        </div>
        <div class="zi">招领帖</div>
      </div>
    </transition>

    <div class="middle3"></div>

    <transition name="move2" appear>
      <div id="mid2" class="middle2" v-show="aniShow" @click="toCreateAsk">
        <div class="tu">
          <div class="tu2"></div>
        </div>
        <div class="zi">寻物帖</div>
      </div>
    </transition>

    <div class="middle1"></div>
  </div>
  <div class="bottom">
    <transition name="rotate" appear>
      <div class="bottom2" v-show="aniShow" id="bigBtn" @click="toHome"></div>
    </transition>
  </div>
  </body>
</template>

<script>
export default {
  name: 'create',
  data() {
    return {
      aniShow: true,
    }
  },
  methods: {
    toCreatePost() {
      this.$router.push('/CreatePost')
    },
    toCreateAsk() {
      this.$router.push('/CreateAsk')
    },
    toHome() {
      this.aniShow = false
      document.getElementById('root').style.opacity = '0'
      setTimeout(() => {
        this.$parent.fatherMethod();
      }, 1000)
    }
  },
}
</script>

<style scoped lang="css">
#mid1 {
  top: 32%;
}

#mid2 {
  top: 50%;
}

#bigBtn {
  transform: rotate(90deg);
}

body {
  background-color: #EEEEEE;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -20px;
  width: 100vw;
  height: 100vw;
  margin: 0;
  transition: opacity 1s;
}

.top1 {
  background-color: white;
  height: 30px;
}

.top2 {
  background-color: white;
  height: 50px;
  font-weight: Bold;
  font-size: 1.3rem;
  text-align: center;
  color: #589788;
  font-family: SourceHanSansCN-Bold, serif;
}

.middle {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.middle1 {
  height: 100px;
}

.middle2 {
  background-color: #FEFCFC;
  height: 90px;
  width: 310px;
  border-radius: 150px;
  box-shadow: 5px 5px 15px rgba(41, 40, 40, 0.3);
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
}

.zi {
  color: #4E4E4E;
  font-family: SourceHanSansCN-Medium, serif;
  font-size: 1.5rem;
  width: 400px;
  height: 200px;
  margin-left: 40px;
  line-height: 200px;
}

.tu {
  background-color: rgb(244, 244, 244);
  margin-left: 30px;
  border-radius: 50px;
  width: 140px;
  height: 60px;
}

.tu1 {
  background: url("../assets/images/zhaolingtie.png");
  background-size: 100% 100%;
  margin-left: 16px;
  margin-top: 15px;
  width: 30px;
  height: 30px;
}

.tu2 {
  background: url("../assets/images/xunwutie.png");
  background-size: 100% 100%;
  margin-left: 16px;
  margin-top: 15px;
  width: 30px;
  height: 30px;
}

.middle3 {
  height: 50px;
}

.bottom {
  background-color: #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bottom2 {
  height: 70px;
  width: 70px;
  position: fixed;
  bottom: 0;
  background: #EEEEEE url("../assets/images/chahao.png");
  background-size: 100% 100%;
}

</style>
