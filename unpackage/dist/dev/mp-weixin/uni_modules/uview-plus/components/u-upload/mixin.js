"use strict";
require("../../libs/function/index.js");
const mixinUp = {
  watch: {
    // 监听accept的变化，判断是否符合个平台要求
    // 只有微信小程序才支持选择媒体，文件类型，所以这里做一个判断提示
    accept: {
      immediate: true,
      handler(val) {
      }
    }
  }
};
exports.mixinUp = mixinUp;