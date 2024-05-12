<template>
	<view class="header">
		<view class="header-bg">
			<img :src="circle.avatar" alt="" />
		</view>
		<view class="header-content">
			<image class="circle-avatar" :src="circle.avatar" mode="aspectFill"></image>
			<view class="header-right">
				<view class="circle-title">
					<view class="circle-name">{{circle.circle_name}}</view>
					<view class="circle-follow" >
						<up-button 
							@click="clickFollow()"
							type="primary"  
							size="small" 
							color="#d81e06"
							hover-class="none"
							shape="circle" 
							text="关注"></up-button>
					</view>
				</view>
				<view class="circle-infor">
					<view class="infor-num">
						{{circle.views_count}}浏览
					</view>
					<view class="infor-num">
						{{circle.posts_count}}帖子
					</view>
					<view class="infor-num">
						{{circle.fans_count}}粉丝
					</view>
				</view>
			</view>
		</view>
		
	</view>
	<view class="tabs">
		<up-tabs
		    :list="list"
		    lineWidth="30"
		    lineColor="#d81e06"
		    :activeStyle="{
		        color: '#330c06',
		        fontWeight: 'bold',
		        transform: 'scale(1.05)'
		    }"
		    :inactiveStyle="{
		        color: '#606266',
		        transform: 'scale(1)'
		    }"
		    itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
		>
		</up-tabs>
	</view>
	<Post/>
</template>

<script lang="ts" setup name="">
	import Post from '../../components/post/index.vue'
	import { reactive } from 'vue'
	let circle = reactive({
		avatar:'https://wx4.sinaimg.cn/thumb180/0070c57xly8hlbrmwmts7j30s90s9n27.jpg',//圈子头像
		circle_name:'曹恩齐',//圈子名
		views_count:'1332',//浏览量
		posts_count:'12',//帖子数量
		fans_count:'34254',//粉丝数量
		hotness:'1235',//热度
	})
	const list = reactive([
	    { name: '帖子' },  
	    { name: '详情' },  
	    { name: '公告通知' },  
	]);  
	
		
	function clickFollow(){
		console.log('关注');
	}
</script>

<style scoped lang="scss">
	
	.header{
		overflow: hidden;
		.header-bg{
			position: relative;
			filter: blur(80upx);
		}
		.header-bg img{
			width: 100%;
			object-fit: cover;
			max-height: 300upx;
		}
			
		.header-content{
			position: absolute;
			top: 20upx;
			display: flex;
			align-items: center;
			padding: 50upx 30upx;
			color: white;
			.circle-avatar{
				width: 180upx;
				height: 180upx;
				margin-right: 20upx;
			}
			.header-right{	
					
				.circle-title{
					display: flex;
					justify-content: space-between;
					margin-bottom: 40upx;
					.circle-name{
						font-weight: bold;
						font-size: 40upx;
					}
					
					
				}
				.circle-infor{
					display: flex;
					margin-right: 20upx;
					.infor-num{
						margin-right: 10upx;
						font-size: 25upx;
					}
					
				}
			}
		}
		
}
	.tabs{
		background-color: white;
		margin-bottom: 20upx;
	}
</style>