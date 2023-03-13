<template>
  <div id="root">
    <div id="header">
      <div>
        <div class="return" @click="$router.go(-1)"></div>
        <div class="header-message">密码修改</div>
        <div class="saveBtn" @click="saveFn">确认</div>
      </div>
    </div>
    <div id="mainBox">
      <div class="inputBarBox">
        <input placeholder="密码修改" id="inputBar" type="password" v-model="inputVal">
      </div>
    </div>
  </div>
</template>

<script>
import {updateUserInfo} from "@/api/user";

export default {
  data() {
    return {
      user: {
        avatar: "",
        username: "",
        password: "",
        id: "",
      },
      inputVal: '',
    };
  },
  methods: {
    saveFn() {
      this.$store.state.userInfo.password = this.inputVal;
      this.$router.go(-1);
    },
    // 更新用户按钮
    updateUser() {
      //请求后端更新请求
      updateUserInfo(this.user).then((res) => {
        if (res.state === 200) {
          // 修改vuex的状态信息
          this.user.password = ''
          this.$store.state.userInfo = this.user;

          //弹窗修改成功 并返回用户
          this.$message({
            type: "success",
            message: `修改成功`,
          })
          setTimeout(() => {
            this.$router.go(-1);
          }, 500)
        }
      });
    },
  },
  created() {
    this.user.avatar = this.$store.state.userInfo.avatar;
    this.user.id = this.$store.state.userInfo.id;
    this.user.username = this.$store.state.userInfo.username;
    this.user.token = this.$store.state.userInfo.token
  },
};
</script>


<style scoped lang="css">
.inputBarBox {
  height: 60px;
  padding: 20px;
}

#inputBar {
  width: 100%;
  height: 30px;
  outline-style: none;
  border: 0;
  border-bottom: solid 2px #ccc;
  background-color: unset;
}


#root {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
}

#header {
  background-color: white;
  padding-top: 24px;
  position: relative;

}

#header > div {
  width: 100%;
  height: 30px;
  padding: 10px 0;
}

#mainBox {
  flex: 1;
}

#mainBox > :nth-child(1) {
  margin-top: 10px;
}

.return {
  height: 30px;
  width: 30px;
  background: url("../assets/images/lvsejiantou.png") center center / 38% no-repeat;
  position: absolute;
  left: 0;
}

.header-message {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  font-weight: Bold;
  font-size: 1.3rem;
  color: rgb(108, 176, 154);
  font-family: SourceHanSansCN-Bold, serif;
}

.saveBtn {
  position: absolute;
  right: 12px;
  font-size: 13px;
  color: rgb(114, 174, 153);
}
</style>