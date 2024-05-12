"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon2();
}
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    likes: Number,
    likesStatus: Boolean
  },
  emits: ["update:likesStatus"],
  setup(__props, { emit }) {
    const props = __props;
    function clickLikes() {
      emit("update:likesStatus", !props.likesStatus);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !__props.likesStatus
      }, !__props.likesStatus ? {
        b: common_vendor.p({
          name: "thumb-up",
          size: "24"
        })
      } : {
        c: common_vendor.p({
          color: "#d81e06",
          name: "thumb-up-fill",
          size: "24"
        })
      }, {
        d: common_vendor.t(__props.likes),
        e: common_vendor.o(clickLikes),
        f: __props.likesStatus ? 1 : ""
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-13d6de01"], ["__file", "D:/study/yingfei/uniapp/贴吧/贴吧/components/likes/index.vue"]]);
wx.createComponent(Component);
