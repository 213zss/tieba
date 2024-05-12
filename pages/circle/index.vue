<template>
	<view class="circle">
		<!-- 搜索栏 -->
		<Search/>
		<view class="tab">
			<!-- 左侧菜单栏 -->
			<scroll-view scroll-y scroll-with-animation class="tab-menu scroll-view" :scroll-top="menu.scrollTop">
				<view 
					class="tab-item"
					:class="[menu.currentMenu==index ? 'tab-item-active' : '']"
					v-for="(list,index) in menu.tabbar" 
					:key="index" 
					:data-current="index" 
					@tap.stop="switchMenu(index)">
					<text>{{list.name}}</text>
				</view>
			</scroll-view>
			<!-- 右侧栏目 -->
			<block v-for="(list,index) in menu.tabbar" :key="index">
				<scroll-view scroll-y class="right-box" v-if="menu.currentMenu==index">
					<!-- 上方类型选择 -->
					<view class="type-menu">
						<view 
							class="type-title"
							:class="[menu.currentType==index ? 'type-title-active' : '']"
							 v-for="(item,index) in list.child" 
							 :key="index" 
							 @click="switchType(index)"> 
								{{item.name}}
						</view>
					</view>
					<!-- 具体类型 -->
					<block  v-for="(item,index) in list.child" :key="index">
						<view v-for="i in item.child" :key="index">
							<view class="item-container" v-if="menu.currentType==index" @click="gotoDetail(i)">
								<view class="item-container-left">
									<image  class="item-image" :src="i.img" mode="scaleToFill"></image>
									<view class="item-infor">
										<view class="item-name">{{i.display_name}}</view>
										<view class="item-hot">{{i.hotness}}热度 {{i.fans_count}}粉丝</view>
									</view>
								</view>
								<view class="item-follow" >
									<!-- <button 
										size="mini" 
										type="primary" 
										style="color:#d81e06;borderColor:#d81e06;border-radius: 50rpx;"
										plain="true"
										hairline="true" 
										hover-class="none" 
										@click="clickFollow(i)">关注</button> -->
									<up-button 
										@click="clickFollow(i)"
										type="primary"  
										size="small" 
										color="#d81e06"  
										:plain="true" 
										:hairline="true" 
										hover-class="none"
										shape="circle" text="关注"></up-button>
								</view>
								
							</view>
						</view>
					</block>
				</scroll-view>
			</block>
		</view>
	</view>
	
</template>

<script lang="ts" name="" setup>
	import Search from '../../components/search/index.vue'
	import classifyData from "../../common/classify.data.js";
	import { reactive,getCurrentInstance } from 'vue'
	
	let menu = reactive({
		tabbar: classifyData,
		scrollTop: 0, //tab标题的滚动条位置
		currentMenu: 0, // 预设当前项的值
		menuHeight: 0, // 左边菜单的高度
		menuItemHeight: 0, // 左边菜单item的高度
		currentType: 0,
	})
	
	// 点击左边的栏目切换
	async function switchMenu(index) {
		if(index == menu.currentMenu) return ;
		menu.currentMenu = index;
		// 如果为0，意味着尚未初始化
		if(menu.menuHeight == 0 || menu.menuItemHeight == 0) {
			try {  
			      // 使用 async/await 等待两个 Promise 完成  
			      const menuHeightResult = await getElRectPromise('scroll-view');  
			      menu.menuHeight = menuHeightResult.height;  
			      const menuItemHeightResult = await getElRectPromise('tab-item');  
			      menu.menuItemHeight = menuItemHeightResult.height;  
			      // 将菜单活动项垂直居中  
			      menu.scrollTop = index * menu.menuItemHeight + menu.menuItemHeight / 2 - menu.menuHeight / 2;  
			    } 
			catch (error) {  
			      console.error('Error getting element rect:', error);  
			    }  
		}
	}
	// 获取一个目标元素的高度
	function getElRectPromise(elClass) {  
	  return new Promise((resolve, reject) => {  
	    const query = uni.createSelectorQuery();  
	    query.select('.' + elClass).boundingClientRect(res => {  
	      if (res) {  
	        // 如果找到了元素，解析 Promise  
	        resolve(res);  
	      } else {  
	        // 如果没有找到元素，拒绝 Promise  
	        reject(new Error('Element not found with class: ' + elClass));  
	      }  
	    }).exec();  
	  });  
	}  
	// 选择类型
	function switchType(index) {
		console.log(index);
		if(index == menu.currentType) return ;
		menu.currentType = index;
	}
	
	function clickFollow(index){
		console.log(index);
	}
	function gotoDetail(index){
		console.log(index);
		uni.navigateTo({
			url:'/pages/circleDetail/index'
		})
	}
	
</script>

<style lang="scss" scoped>
	.circle {
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
		.tab {
			flex: 1;
			display: flex;
			overflow: hidden;
			font-size: 25upx;
			.tab-menu {
				width: 20%;
				height: 100%;
				.tab-item {
					height: 80upx;
					background: #f6f6f6;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #444;
					line-height: 1;
				}
				
				.tab-item-active {
					position: relative;
					color: #000;
					background: #fff;
				}
				
				.tab-item-active::before {
					content: "";
					position: absolute;
					border-left: 4px solid $primary;
					height: 32upx;
					left: 5upx;
					top: 23upx;
					border-radius: 10upx;
				}
			}
			.right-box {
				width: 80%;
				background-color: white;
				overflow: hidden auto;
				
				.type-menu {
					padding: 20upx 0 20upx 20upx;
					background-color: white;
					border-radius: 8upx;
					display: flex;
					overflow-x: auto; /* 当内容超出容器宽度时显示滚动条 */  
					flex-wrap: nowrap; /* 不允许子元素换行 */  
					white-space: nowrap;
					.type-title {
						border: 2upx solid #eee;
						padding: 10upx 20upx;
						border-radius: 50rpx;
						margin-right: 20px;
					}
					.type-title-active{
						border: 2upx solid $primary;
						color: $primary;
					}
				}
				.item-container {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 20upx 0 20upx 20upx;
					border-bottom: 1upx solid #eee;
					.item-container-left {
						display: flex;
						align-items: center;
						.item-image {
							width: 100upx;
							height: 100upx;
							border-radius: 20upx;
							margin-right: 20upx;
						}
						.item-infor{
							.item-name{
								font-size: 28upx;
								font-weight: 500;
							}
							.item-hot{
								color: $text;
								margin-top: 10upx;
							}
						}
					}
					.item-follow{
						margin-right: 40upx;
					}
						
					
				}
			}
			
		}
	}

	


	
	
	
	
	
	
	
	
	
	
	// .item-menu-name {
	// 	font-weight: normal;
	// 	font-size: 24upx;
	// 	color: $u-main-color;
	// }
	
	
	// .thumb-box {
	// 	width: 33.333333%;
	// 	display: flex;
	// 	align-items: center;
	// 	justify-content: center;
	// 	flex-direction: column;
	// 	margin-top: 20upx;
	// }
	
	// .item-menu-image {
	// 	width: 120upx;
	// 	height: 120upx;
	// }
</style>
