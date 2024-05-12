"use strict";
const common_vendor = require("../../common/vendor.js");
const common_classify_data = require("../../common/classify.data.js");
if (!Array) {
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  _easycom_up_button2();
}
const _easycom_up_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (Search + _easycom_up_button)();
}
const Search = () => "../../components/search/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let menu = common_vendor.reactive({
      tabbar: common_classify_data.classifyData,
      scrollTop: 0,
      //tab标题的滚动条位置
      currentMenu: 0,
      // 预设当前项的值
      menuHeight: 0,
      // 左边菜单的高度
      menuItemHeight: 0,
      // 左边菜单item的高度
      currentType: 0
    });
    async function switchMenu(index) {
      if (index == menu.currentMenu)
        return;
      menu.currentMenu = index;
      if (menu.menuHeight == 0 || menu.menuItemHeight == 0) {
        try {
          const menuHeightResult = await getElRectPromise("scroll-view");
          menu.menuHeight = menuHeightResult.height;
          const menuItemHeightResult = await getElRectPromise("tab-item");
          menu.menuItemHeight = menuItemHeightResult.height;
          menu.scrollTop = index * menu.menuItemHeight + menu.menuItemHeight / 2 - menu.menuHeight / 2;
        } catch (error) {
          console.error("Error getting element rect:", error);
        }
      }
    }
    function getElRectPromise(elClass) {
      return new Promise((resolve, reject) => {
        const query = common_vendor.index.createSelectorQuery();
        query.select("." + elClass).boundingClientRect((res) => {
          if (res) {
            resolve(res);
          } else {
            reject(new Error("Element not found with class: " + elClass));
          }
        }).exec();
      });
    }
    function switchType(index) {
      console.log(index);
      if (index == menu.currentType)
        return;
      menu.currentType = index;
    }
    function clickFollow(index) {
      console.log(index);
    }
    function gotoDetail(index) {
      console.log(index);
      common_vendor.index.navigateTo({
        url: "/pages/circleDetail/index"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(menu).tabbar, (list, index, i0) => {
          return {
            a: common_vendor.t(list.name),
            b: common_vendor.n(common_vendor.unref(menu).currentMenu == index ? "tab-item-active" : ""),
            c: index,
            d: index,
            e: common_vendor.o(($event) => switchMenu(index), index)
          };
        }),
        b: common_vendor.unref(menu).scrollTop,
        c: common_vendor.f(common_vendor.unref(menu).tabbar, (list, index, i0) => {
          return common_vendor.e({
            a: common_vendor.unref(menu).currentMenu == index
          }, common_vendor.unref(menu).currentMenu == index ? {
            b: common_vendor.f(list.child, (item, index2, i1) => {
              return {
                a: common_vendor.t(item.name),
                b: common_vendor.n(common_vendor.unref(menu).currentType == index2 ? "type-title-active" : ""),
                c: index2,
                d: common_vendor.o(($event) => switchType(index2), index2)
              };
            }),
            c: common_vendor.f(list.child, (item, index2, i1) => {
              return {
                a: common_vendor.f(item.child, (i, k2, i2) => {
                  return common_vendor.unref(menu).currentType == index2 ? {
                    a: i.img,
                    b: common_vendor.t(i.display_name),
                    c: common_vendor.t(i.hotness),
                    d: common_vendor.t(i.fans_count),
                    e: common_vendor.o(($event) => clickFollow(i), index2),
                    f: "d2fcc30d-1-" + i0 + "-" + i1 + "-" + i2,
                    g: common_vendor.p({
                      type: "primary",
                      size: "small",
                      color: "#d81e06",
                      plain: true,
                      hairline: true,
                      ["hover-class"]: "none",
                      shape: "circle",
                      text: "关注"
                    }),
                    h: common_vendor.o(($event) => gotoDetail(i), index2)
                  } : {};
                }),
                b: common_vendor.unref(menu).currentType == index2,
                c: index2,
                d: index2
              };
            })
          } : {}, {
            d: index
          });
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d2fcc30d"], ["__file", "D:/study/yingfei/uniapp/贴吧/贴吧/pages/circle/index.vue"]]);
wx.createPage(MiniProgramPage);
