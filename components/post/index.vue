<template>
	<view class="post">
		<view class="header">
			<view class="author-infor">
				<up-avatar :src="post.avatar"></up-avatar>
				<text class="author">{{post.author}}</text>
			</view>
			<text class="time">{{post.time}}</text>
		</view>
		<view class="center">
			<view class="title">
				<text>{{post.title}}</text>
			</view>
			<view class="content">
				<text>{{post.text}}</text>
			</view>
			<view class="images">
				<template v-for="img in post.images" key="index">
					<img :src="img" alt="图片" />
				</template>
			</view>
		</view>
		<view class="bottom">
			<span class="views">
				{{post.views}}
				<up-icon name="eye" size="24"></up-icon>
			</span>
			<span
				class="views" 
				@click="clickFavor">
				{{post.favorites}}
				<up-icon
					v-show="!post.favorStatus"
					name="star" 
					size="24"></up-icon>
				<up-icon
					v-show="post.favorStatus"
					name="star-fill" 
					color="#ffb853"
					size="24"></up-icon>
			</span>
			<span class="views">
				{{post.replies}}
				<up-icon name="chat" size="24"></up-icon>
			</span>
			<span 
				class="views" 
				@click="clickLikes"
				:class="{ 'active': post.likesStatus }">
				{{post.likes}}
				<up-icon
					v-show="!post.likesStatus"
					name="thumb-up" 
					size="24"></up-icon>
				<up-icon
					v-show="post.likesStatus"
					color="#d81e06"
					name="thumb-up-fill" 
					size="24"></up-icon>
			</span>
		</view>
		
	</view>
</template>

<script lang="ts" name="Post" setup>
	import { reactive } from 'vue';
	let post = reactive({
		avatar:'https://img.zcool.cn/community/01ee3758158d4ba84a0d304fbe062e.png@1280w_1l_2o_100sh.png',
		author:'我是作者',
		time:'2021-12-24 14:29',
		title:'我是文章标题',
		text: '我是文章内容，这是一篇关于宇宙探索的文章，它将带领读者深入了解宇宙的起源和结构。',
		images: [
		  'https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain',
		  'https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain',
		  'https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain',
		  'https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain',
		],
		views:132,
		favorites:43,
		replies:12,
		likes:200,	
		favorStatus:false,
		likesStatus:false,
	})
	function clickFavor(){		
		if(!post.favorStatus){
			post.favorites += 1;
			post.favorStatus = !post.favorStatus;
		}
		else{
			post.favorites -= 1;
			post.favorStatus = !post.favorStatus;
		}
	}
	function clickLikes(){
		if(!post.likesStatus){
			post.likes += 1;
			post.likesStatus = !post.likesStatus;
		}
		else{
			post.likes -= 1;
			post.likesStatus = !post.likesStatus;
		}
	}
	
</script>

<style scoped lang="scss">
	.post{
		padding: 20upx;
		border: 2upx solid red;
		border-radius: 20upx;
		.header{
			display: flex;
			align-items: center;
			justify-content: space-between;
				
			.author-infor{
				display: flex;
				align-items: center;
				.author{
					margin-left: 10upx;
				}
			}
			.time{
				font-size: 25upx;
				color: $uni-text-color-placeholder;
			}
		}
		.center{
				
			.title{
				font-weight: 700;
				margin: 20upx 0;
			}
			.content{
				margin: 20upx 0;
			}
			.images{
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 15upx;
				img{
					width: 100%;
					// height: 100%;
					border-radius: 20upx;
				}
			}
		}
		
		.bottom{
			display: flex;
			justify-content: space-around;
			margin-top: 20upx;
			.views{
				display: flex;
				align-items: center;
			}
			.active{
				color: $primary;
			}
		}
	}
</style>