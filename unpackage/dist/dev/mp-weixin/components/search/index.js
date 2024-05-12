"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_up_input2 = common_vendor.resolveComponent("up-input");
  _easycom_up_input2();
}
const _easycom_up_input = () => "../../uni_modules/uview-plus/components/u-input/u-input.js";
if (!Math) {
  _easycom_up_input();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    disabled: {
      type: Boolean,
      default: false
      // 设置默认值  
    },
    disabledColor: {
      type: String,
      default: "red"
      // 设置默认值  
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          disabled: props.disabled,
          disabledColor: props.disabledColor,
          border: "none",
          placeholder: "前置图标",
          prefixIcon: "search",
          shape: "circle",
          customStyle: {
            padding: "15rpx",
            backgroundColor: "#F5F5F5"
          },
          prefixIconStyle: "font-size: 22px;color: #909399"
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bcaca87a"], ["__file", "D:/study/yingfei/uniapp/贴吧/贴吧/components/search/index.vue"]]);
wx.createComponent(Component);
