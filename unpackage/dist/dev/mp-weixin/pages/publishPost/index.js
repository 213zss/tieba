"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_up_textarea2 = common_vendor.resolveComponent("up-textarea");
  const _easycom_up_upload2 = common_vendor.resolveComponent("up-upload");
  const _easycom_up_grid_item2 = common_vendor.resolveComponent("up-grid-item");
  const _easycom_up_grid2 = common_vendor.resolveComponent("up-grid");
  const _easycom_up_toast2 = common_vendor.resolveComponent("up-toast");
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  (_easycom_up_textarea2 + _easycom_up_upload2 + _easycom_up_grid_item2 + _easycom_up_grid2 + _easycom_up_toast2 + _easycom_up_button2)();
}
const _easycom_up_textarea = () => "../../uni_modules/uview-plus/components/u-textarea/u-textarea.js";
const _easycom_up_upload = () => "../../uni_modules/uview-plus/components/u-upload/u-upload.js";
const _easycom_up_grid_item = () => "../../uni_modules/uview-plus/components/u-grid-item/u-grid-item.js";
const _easycom_up_grid = () => "../../uni_modules/uview-plus/components/u-grid/u-grid.js";
const _easycom_up_toast = () => "../../uni_modules/uview-plus/components/u-toast/u-toast.js";
const _easycom_up_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_up_textarea + _easycom_up_upload + _easycom_up_grid_item + _easycom_up_grid + _easycom_up_toast + _easycom_up_button)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let post = common_vendor.reactive({
      content: "",
      images: []
    });
    const baseList = common_vendor.ref([
      {
        name: "icon-tupian",
        title: "图片"
      },
      {
        name: "icon-shipin1",
        title: "视频"
      },
      {
        name: "icon-biaoqing",
        title: "表情"
      },
      {
        name: "icon-huati",
        title: "标签"
      },
      {
        name: "icon-zixun",
        title: "超话"
      }
    ]);
    const uToastRef = common_vendor.ref(null);
    common_vendor.ref([]);
    function click(index) {
      if (index == 0) {
        common_vendor.index.chooseImage({
          count: 6,
          success: function(res) {
            console.log(JSON.stringify(res.tempFilePaths));
          }
        });
      }
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => common_vendor.unref(post).content = $event),
        b: common_vendor.p({
          count: true,
          autoHeight: true,
          adjustPosition: true,
          maxlength: "10000",
          placeholder: "记录美好生活...",
          modelValue: common_vendor.unref(post).content
        })
      }, {}, {
        f: common_vendor.f(baseList.value, (baseListItem, baseListIndex, i0) => {
          return {
            a: common_vendor.n(baseListItem.name),
            b: common_vendor.t(baseListItem.title),
            c: baseListIndex,
            d: "076cafdd-3-" + i0 + ",076cafdd-2"
          };
        }),
        g: common_vendor.o(click),
        h: common_vendor.p({
          border: false,
          col: "6"
        }),
        i: common_vendor.sr(uToastRef, "076cafdd-4", {
          "k": "uToastRef"
        }),
        j: common_vendor.p({
          type: "primary",
          color: "#d81e06",
          ["hover-class"]: "none",
          shape: "circle",
          text: "发送"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-076cafdd"], ["__file", "D:/study/yingfei/uniapp/贴吧/贴吧/pages/publishPost/index.vue"]]);
wx.createPage(MiniProgramPage);
