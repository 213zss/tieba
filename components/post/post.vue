<template>
	<view class="post">
		1121313
		<up-avatar :src="post.avatar"></up-avatar>
	</view>
</template>

<script lang="ts" name="" setup>
import { reactive } from 'vue'
let post = reactive({
	avatar:'https://img.zcool.cn/community/01ee3758158d4ba84a0d304fbe062e.png@1280w_1l_2o_100sh.png',
	author:'我是作者',
	time:'2021-12-24 14:29',
	title:'我是文章标题',
	content: {
	    text: "我是文章内容，这是一篇关于宇宙探索的文章，它将带领读者深入了解宇宙的起源和结构。",
	    images: [
	      "https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain",
	      "https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain"
	    ]
	  },
	
	
})
</script>

<style scoped>

</style>