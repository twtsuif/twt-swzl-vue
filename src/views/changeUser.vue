<template>
  <div id="root">
    <div id="header">
      <div>
        <div class="return" @click="$router.go(-1)"></div>
        <div class="header-message">用户名修改</div>
        <div class="saveBtn" @click="saveFn">确定</div>
      </div>
    </div>
    <div id="mainBox">
      <div class="inputBarBox">
        <input placeholder="用户名修改" id="inputBar" type="text" v-model="inputVal">
      </div>
    </div>
  </div>
</template>

<script>
import {updateUserInfo} from "@/api/user";
import {upload} from "@/api/upload";

export default {
  data() {
    return {
      user: {
        avatar: "",
        username: "",
        password: "",
      },
      inputVal: '',
    };
  },
  created() {
    this.user.username = this.$store.state.userInfo.username;
    this.user.avatar = this.$store.state.userInfo.avatar;
  },
  methods: {
    saveFn() {
      this.$store.state.userInfo.username_temp = this.inputVal;
      this.$router.go(-1)
    },
    addImage(e) {
      let formData = new FormData();
      Array.from(e.target.files).map((item) => {
        formData.append("file", item);
      });
      upload(formData).then((res) => {
        this.user.avatar = res.data
      });
    },
    // 更新头像前检查图片
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 10MB!");
      }
      return isJPG && isLt2M;
    },
    // 更新用户按钮
    updateUser() {
      //请求后端更新请求
      updateUserInfo(this.user).then((res) => {
        if (res.state === 200) {
          // 修改vuex的状态信息
          this.user.password = ''
          this.$store.state.userInfo = this.user;

          // 弹窗修改成功 并返回用户
          this.$message({
            type: "success",
            message: `修改成功`,
          })
          this.$router.go(-1);
        }
      });
    },
  }
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
  padding: 24px 20px 0;
  position: relative;

}

#header > div {
  width: 100%;
  height: 30px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
}

.header-message {
  font-weight: Bold;
  font-size: 1.3rem;
  color: rgb(108, 176, 154);
  font-family: SourceHanSansCN-Bold, serif;
}

.saveBtn {
  font-size: 13px;
  color: rgb(114, 174, 153);
}
</style>