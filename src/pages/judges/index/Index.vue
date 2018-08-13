<template>
  <div class="judges-index-container-box">
    <span>{{$t("message.hello")}}</span>
    <el-button @click="changeLang">改变语言</el-button>
  </div>
</template>
<script>
import { Button } from "element-ui"
import { initComponentKey, swithLan } from "../../../util/index"
export default {
  components: {
    ...initComponentKey({ Button })
  },
  data() {
    return {};
  },
  methods: {
    changeLang() {
      swithLan(this)
    }
  }
}
</script>
<style lang="less">
</style>
