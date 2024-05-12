"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_up_tabs2 = common_vendor.resolveComponent("up-tabs");
  _easycom_up_tabs2();
}
const _easycom_up_tabs = () => "../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
if (!Math) {
  (Search + _easycom_up_tabs + Post)();
}
const Search = () => "../../components/search/index.js";
const Post = () => "../../components/post/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const list = common_vendor.reactive([
      { name: "关注" },
      { name: "推荐" },
      { name: "话题" }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          disabled: true,
          disabledColor: "#F5F5F5"
        }),
        b: common_vendor.p({
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4978fed5"], ["__file", "D:/study/yingfei/uniapp/贴吧/贴吧/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
