"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_up_avatar2 = common_vendor.resolveComponent("up-avatar");
  _easycom_up_avatar2();
}
const _easycom_up_avatar = () => "../../uni_modules/uview-plus/components/u-avatar/u-avatar.js";
if (!Math) {
  (_easycom_up_avatar + Likes)();
}
const Likes = () => "../likes/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let commentList = common_vendor.reactive([
      {
        avatar: "https://img.zcool.cn/community/01795058158d43a84a0d304f64b44d.png@2o.png",
        user_name: "张三",
        content: "今天，塞尔维亚又成为首个同中国共同构建命运共同体的欧洲国家，充分体现了中塞关系的战略性、特殊性和高水平。",
        create_time: "2022-12-03 23:07",
        publish_address: "河南",
        likes_count: 13,
        likesStatus: true
      },
      {
        avatar: "https://img.zcool.cn/community/01795058158d43a84a0d304f64b44d.png@2o.png",
        user_name: "李四",
        content: "充分体现了中塞关系的战略性、特殊性和高水平。",
        create_time: "2022-01-01 11:24",
        publish_address: "江苏",
        likes_count: 1,
        likesStatus: false
      }
    ]);
    function clickReplies() {
      console.log("回复评论");
    }
    function clickLikes(newStatus) {
      comment.likesStatus = newStatus;
      if (newStatus) {
        comment.likes_count += 1;
      } else {
        comment.likes_count -= 1;
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(commentList), (comment2, k0, i0) => {
          return {
            a: "05fcfa07-0-" + i0,
            b: common_vendor.p({
              src: comment2.avatar
            }),
            c: common_vendor.t(comment2.user_name),
            d: common_vendor.t(comment2.content),
            e: common_vendor.t(comment2.create_time),
            f: common_vendor.t(comment2.publish_address),
            g: "05fcfa07-1-" + i0,
            h: common_vendor.p({
              likes: comment2.likes_count,
              likesStatus: comment2.likesStatus
            })
          };
        }),
        b: common_vendor.o(clickReplies),
        c: common_vendor.o(clickLikes)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-05fcfa07"], ["__file", "D:/study/yingfei/uniapp/贴吧/贴吧/components/comment/index.vue"]]);
wx.createComponent(Component);
