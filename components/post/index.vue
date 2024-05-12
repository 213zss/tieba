<template>
	<view class="post">
		<view @click="goToDetail">
			<view class="header">
				<view class="author-infor">
					<up-avatar :src="post.avatar"></up-avatar>
					<text class="author">{{post.user_name}}</text>
				</view>
				<text class="time">{{post.create_time}}</text>
			</view>
			<view class="center"> 
				<view class="content">
					<!-- <up-text :lines="2" :text="post.content"></up-text> -->
					<up-text :text="post.content"></up-text>
				</view>
				<view class="images">
					<view 
						:class="{ 'fold': index >= maxVisibleIndex }"  
						v-for="(img, index) in post.images" 
						:key="index" 
						@click="previewImage(img)"> 
						<image :src="img" mode="aspectFill" class="image"/>
					</view>
				</view>
			</view>
		</view>
		
		<view class="bottom">
			<span class="views">
				<up-icon name="eye" size="24"></up-icon>
				{{post.views_count}}
			</span>
			<span
				class="views" 
				@click="clickFavor">
				<up-icon
					v-if="!post.favorStatus"
					name="star" 
					size="24"></up-icon>
				<up-icon
					v-else
					name="star-fill" 
					color="#ffb853"
					size="24"></up-icon>
				{{post.favorites_count}}
			</span>
			<span class="views">
				<up-icon name="chat" size="24"></up-icon>
				{{post.replies_count}}
			</span>
			<!-- <span 
				class="views" 
				@click="clickLikes"
				:class="{ 'active': post.likesStatus }">
				{{post.likes}}
				<up-icon
					v-if="!post.likesStatus"
					name="thumb-up" 
					size="24"></up-icon>
				<up-icon
					v-else
					color="#d81e06"
					name="thumb-up-fill" 
					size="24"></up-icon>
			</span> -->
			<Likes 
				:likes="post.likes_count" 
				:likesStatus="post.likesStatus"
				@update:likesStatus="clickLikes"/>
		</view>
		
	</view>
</template>

<script lang="ts" name="Post" setup>
	import Likes from '../../components/likes/index.vue';
	import {ref, reactive, toRefs } from 'vue';
	let maxVisibleIndex = ref(9);
	let post = reactive({
		avatar:'https://img.zcool.cn/community/01ee3758158d4ba84a0d304fbe062e.png@1280w_1l_2o_100sh.png',
		user_name:'我是作者',
		create_time:'2021-12-24 14:29',
		content: '我是文章内容，这是一篇关于宇宙探索的文章，它将带领读者深入了解宇宙的起源和结构。关于uview-plus的取名来由，首字母u来自于uni-app首字母，uni-app是基Vuejs，Vue和View(延伸为UI、视图之意)同音，同时view组件uni-app中最础最重要的组件，故取名uview-plus，表达源于uni-app和Vue之意，同时在此也对它示感谢。',
		images: [
		  'https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain',
		  'https://img.zcool.cn/community/019a8f5cb02b25a801208f8b964015.jpg@1280w_1l_2o_100sh.jpg',
		  'https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain',
		  'https://ts1.cn.mm.bing.net/th/id/R-C.aff84861ed5c394f0d306a7abf647594?rik=Dewav%2ffaudbY3g&riu=http%3a%2f%2f96845.com%2fuploads%2fallimg%2f230205%2f1-230205112324F8.jpg&ehk=p4xQpEN9rwKAYl8F2bUXV9elXYgGgKW2QEs%2fSjCS5xo%3d&risl=&pid=ImgRaw&r=0',
		  'https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain',
		  'https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain',
		  'https://img.zcool.cn/community/019a8f5cb02b25a801208f8b964015.jpg@1280w_1l_2o_100sh.jpg',
		  'https://ts1.cn.mm.bing.net/th/id/R-C.aff84861ed5c394f0d306a7abf647594?rik=Dewav%2ffaudbY3g&riu=http%3a%2f%2f96845.com%2fuploads%2fallimg%2f230205%2f1-230205112324F8.jpg&ehk=p4xQpEN9rwKAYl8F2bUXV9elXYgGgKW2QEs%2fSjCS5xo%3d&risl=&pid=ImgRaw&r=0',
		  'https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain',
		  'https://ts1.cn.mm.bing.net/th/id/R-C.aff84861ed5c394f0d306a7abf647594?rik=Dewav%2ffaudbY3g&riu=http%3a%2f%2f96845.com%2fuploads%2fallimg%2f230205%2f1-230205112324F8.jpg&ehk=p4xQpEN9rwKAYl8F2bUXV9elXYgGgKW2QEs%2fSjCS5xo%3d&risl=&pid=ImgRaw&r=0',
		  'https://img.zcool.cn/community/019a8f5cb02b25a801208f8b964015.jpg@1280w_1l_2o_100sh.jpg',
		  'https://tse1-mm.cn.bing.net/th/id/OIP-C.duz6S7Fvygrqd6Yj_DcXAQHaF7?rs=1&pid=ImgDetMain',
		],
		views_count:132,
		favorites_count:43,
		replies_count:12,
		likes_count:200,	
		favorStatus:false,
		likesStatus:false,
	})
		
	function previewImage(src){
		uni.previewImage({  
			urls: post.images, // 需要预览的图片http链接列表  
			current: src, // 当前显示图片的http链接  
			success: function (res) {  
			  // 预览成功  
			  console.log('成功');
			},  
			fail: function (err) {  
			  // 预览失败  
			  console.log('失败');
			}  
		  });  
	}
	function goToDetail(){
			
		if(getCurrentPages().length==1){
			uni.navigateTo({
				url: `/pages/postDetail/index`
			})
		}
		
	}
	function clickFavor(){		
		if(!post.favorStatus){
			post.favorites_count += 1;
			post.favorStatus = !post.favorStatus;
		}
		else{
			post.favorites_count -= 1;
			post.favorStatus = !post.favorStatus;
		}
	}
	// function clickLikes(){
	// 	if(!post.likesStatus){
	// 		post.likes += 1;
	// 		post.likesStatus = !post.likesStatus;
	// 	}
	// 	else{
	// 		post.likes -= 1;
	// 		post.likesStatus = !post.likesStatus;
	// 	}
	// 	// console.log(post.likesStatus);
	// }
	function clickLikes(newStatus:boolean){
		post.likesStatus = newStatus;
		if(newStatus){
			post.likes_count += 1;
		}
		else{
			post.likes_count -= 1;
		}
	}
	
</script>

<style scoped lang="scss">
	.post{
		margin-bottom: 15upx;
		padding: 30upx;
		padding-bottom: 10upx;
		border-radius: 20upx;
		background-color: #fff;
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
				color: $text;
			}
		}
		.center{
			.content{
				padding: 20upx 0;
				font-size: 30upx
			}
			.images{
				display: grid;
				grid-template-columns: repeat(3,1fr);
				gap: 20upx;
				.image{
					width: 100%;
					height: auto;
					aspect-ratio: 1 / 1;
					 
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