"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  const _easycom_up_tabs2 = common_vendor.resolveComponent("up-tabs");
  (_easycom_up_button2 + _easycom_up_tabs2)();
}
const _easycom_up_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_up_tabs = () => "../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
if (!Math) {
  (_easycom_up_button + _easycom_up_tabs + Post)();
}
const Post = () => "../../components/post/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let circle = common_vendor.reactive({
      avatar: "https://wx4.sinaimg.cn/thumb180/0070c57xly8hlbrmwmts7j30s90s9n27.jpg",
      //圈子头像
      circle_name: "曹恩齐",
      //圈子名
      views_count: "1332",
      //浏览量
      posts_count: "12",
      //帖子数量
      fans_count: "34254",
      //粉丝数量
      hotness: "1235"
      //热度
    });
    const list = common_vendor.reactive([
      { name: "帖子" },
      { name: "详情" },
      { name: "公告通知" }
    ]);
    function clickFollow() {
      console.log("关注");
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(circle).avatar,
        b: common_vendor.unref(circle).avatar,
        c: common_vendor.t(common_vendor.unref(circle).circle_name),
        d: common_vendor.o(($event) => clickFollow()),
        e: common_vendor.p({
          type: "primary",
          size: "small",
          color: "#d81e06",
          ["hover-class"]: "none",
          shape: "circle",
          text: "关注"
        }),
        f: common_vendor.t(common_vendor.unref(circle).views_count),
        g: common_vendor.t(common_vendor.unref(circle).posts_count),
        h: common_vendor.t(common_vendor.unref(circle).fans_count),
        i: common_vendor.p({
          list,
          lineWidth: "30",
          lineColor: "#d81e06",
          activeStyle: {
            color: "#330c06",
            fontWeight: "bold",
            transform: "scale(1.05)"
          },
          inactiveStyle: {
            color: "#606266",
            transform: "scale(1)"
          },
          itemStyle: "padding-left: 15px; padding-right: 15px; height: 34px;"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9955a71f"], ["__file", "D:/study/yingfei/uniapp/贴吧/贴吧/pages/circleDetail/index.vue"]]);
wx.createPage(MiniProgramPage);
