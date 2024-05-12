<template>
	<div class="comment-container">
		<view>评论</view>
		<div class="comment" v-for="comment in commentList" key="index">
			<up-avatar :src="comment.avatar"></up-avatar>
			<view class="comment-right">
				<view>{{comment.user_name}}</view>
				<view class="comment-content">{{comment.content}}</view>
				<view class="comment-bottom">
					<view>
						<text>{{comment.create_time}}</text>
						<text class="dot">·</text>
						<text>{{comment.publish_address}}</text>
						<text class="replies" @click="clickReplies">回复</text>
					</view>
					<Likes
						:likes="comment.likes_count" 
						:likesStatus="comment.likesStatus"
						@update:likesStatus="clickLikes"/>
				</view>
				
			</view>
		</div>
	</div>
</template>

<script lang="ts" setup name="">
	import Likes from '../likes/index.vue'
	import { reactive} from 'vue'
		
	let commentList = reactive([
		{
			avatar:'https://img.zcool.cn/community/01795058158d43a84a0d304f64b44d.png@2o.png',
			user_name:'张三',
			content:'今天，塞尔维亚又成为首个同中国共同构建命运共同体的欧洲国家，充分体现了中塞关系的战略性、特殊性和高水平。',
			create_time:'2022-12-03 23:07',
			publish_address:'河南',
			likes_count:13,
			likesStatus:true,
		},
		{
			avatar:'https://img.zcool.cn/community/01795058158d43a84a0d304f64b44d.png@2o.png',
			user_name:'李四',
			content:'充分体现了中塞关系的战略性、特殊性和高水平。',
			create_time:'2022-01-01 11:24',
			publish_address:'江苏',
			likes_count:1,
			likesStatus:false,
		},
	])
	
	
	
	// 回复评论	
	function clickReplies(){
		console.log('回复评论');
	}
	// 点赞评论
	function clickLikes(newStatus:boolean){
		comment.likesStatus = newStatus;
		if(newStatus){
			comment.likes_count += 1;
		}
		else{
			comment.likes_count -= 1;
		}
	}
</script>

<style scoped lang="scss">
	.comment-container{
		background-color: white;
		padding: 30upx;
		.comment{
			display: flex;
			color: $text;
			font-size: 25upx;
			margin-top: 15upx;
			.comment-right{
				margin-left: 30upx;
				
				.comment-content{
					color: #000;
					font-size: 32upx;
					margin: 15upx 0;
				}
				
				.comment-bottom{
					display: flex;
					justify-content: space-between;
					align-items: center;
						
					.dot{
						margin: 0 10upx;
						font-size: 20upx;
						font-weight: bold;
					}
						
					.replies{
						margin-left: 10upx;
					}
				}
			}
		}
	}
</style>