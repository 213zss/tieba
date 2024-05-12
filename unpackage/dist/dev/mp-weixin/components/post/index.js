"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_up_avatar2 = common_vendor.resolveComponent("up-avatar");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  (_easycom_up_avatar2 + _easycom_up_icon2)();
}
const _easycom_up_avatar = () => "../../uni_modules/uview-plus/components/u-avatar/u-avatar.js";
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_up_avatar + _easycom_up_icon + Likes)();
}
const Likes = () => "../likes/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let post = common_vendor.reactive({
      avatar: "https://img.zcool.cn/community/01ee3758158d4ba84a0d304fbe062e.png@1280w_1l_2o_100sh.png",
      user_name: "我是作者",
      create_time: "2021-12-24 14:29",
      content: "我是文章内容，这是一篇关于宇宙探索的文章，它将带领读者深入了解宇宙的起源和结构。",
      images: [
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain",
        "https://img.zcool.cn/community/019a8f5cb02b25a801208f8b964015.jpg@1280w_1l_2o_100sh.jpg",
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain",
        "https://ts1.cn.mm.bing.net/th/id/R-C.aff84861ed5c394f0d306a7abf647594?rik=Dewav%2ffaudbY3g&riu=http%3a%2f%2f96845.com%2fuploads%2fallimg%2f230205%2f1-230205112324F8.jpg&ehk=p4xQpEN9rwKAYl8F2bUXV9elXYgGgKW2QEs%2fSjCS5xo%3d&risl=&pid=ImgRaw&r=0",
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain",
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain",
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain"
      ],
      views_count: 132,
      favorites_count: 43,
      replies_count: 12,
      likes_count: 200,
      favorStatus: false,
      likesStatus: false
    });
    function previewImage(src) {
      common_vendor.index.previewImage({
        urls: post.images,
        // 需要预览的图片http链接列表  
        current: src,
        // 当前显示图片的http链接  
        success: function(res) {
          console.log("成功");
        },
        fail: function(err) {
          console.log("失败");
        }
      });
    }
    function goToDetail() {
      if (getCurrentPages().length == 1) {
        common_vendor.index.navigateTo({
          url: `/pages/postDetail/index`
        });
      }
    }
    function clickFavor() {
      if (!post.favorStatus) {
        post.favorites += 1;
        post.favorStatus = !post.favorStatus;
      } else {
        post.favorites -= 1;
        post.favorStatus = !post.favorStatus;
      }
    }
    function clickLikes(newStatus) {
      post.likesStatus = newStatus;
      if (newStatus) {
        post.likes += 1;
      } else {
        post.likes -= 1;
      }
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          src: common_vendor.unref(post).avatar
        }),
        b: common_vendor.t(common_vendor.unref(post).user_name),
        c: common_vendor.t(common_vendor.unref(post).create_time),
        d: common_vendor.t(common_vendor.unref(post).content),
        e: common_vendor.f(common_vendor.unref(post).images, (img, index, i0) => {
          return {
            a: img,
            b: index,
            c: common_vendor.o(($event) => previewImage(img), index)
          };
        }),
        f: common_vendor.o(goToDetail),
        g: common_vendor.p({
          name: "eye",
          size: "24"
        }),
        h: common_vendor.t(common_vendor.unref(post).views_count),
        i: !common_vendor.unref(post).favorStatus
      }, !common_vendor.unref(post).favorStatus ? {
        j: common_vendor.p({
          name: "star",
          size: "24"
        })
      } : {
        k: common_vendor.p({
          name: "star-fill",
          color: "#ffb853",
          size: "24"
        })
      }, {
        l: common_vendor.t(common_vendor.unref(post).favorites_count),
        m: common_vendor.o(clickFavor),
        n: common_vendor.p({
          name: "chat",
          size: "24"
        }),
        o: common_vendor.t(common_vendor.unref(post).replies_count),
        p: common_vendor.o(clickLikes),
        q: common_vendor.p({
          likes: common_vendor.unref(post).likes_count,
          likesStatus: common_vendor.unref(post).likesStatus
        })
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b66ce035"], ["__file", "D:/study/yingfei/uniapp/贴吧/贴吧/components/post/index.vue"]]);
wx.createComponent(Component);
