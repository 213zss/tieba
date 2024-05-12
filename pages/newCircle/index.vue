<template>
	<view class="circle">
		<view class="circle-name">
			<view class="title">圈子名称</view>
				
			
			 <up-input
			    placeholder="请输入圈子名称"
			    border="surround"
			    v-model="circle.circle_name"
			    @change="change"
			  ></up-input>
		</view>
		<view class="first_category">
			<view class="title">圈子分类</view>
			
			
		</view>
		<view class="circle-description">
			<view class="title">圈子简介</view>
			
			<up-textarea
				adjustPosition
				maxlength="10000"
				v-model="circle.circle_description" 
				placeholder="填写简介,帮助用户更了解你的话题"></up-textarea>
		</view>
		<up-button 	
			color="#d81e06"
			type="primary" 
			shape="circle" 
			text="创建圈子"></up-button>
		<up-divider text="创建规则"></up-divider>
		<up-text class="text" type="info" size="14" text="1.名称不超过32个字符，限汉字、字母、数字和下划线"></up-text>
		<up-text class="text" type="info" size="14" text="2.已满18周岁且在创建时完成身份验证和手机号绑定的用户申请超话后可立即开通，自动成为该超话主持人"></up-text>
		<up-text class="text" type="info" size="14" text="3.未满18周岁用户申请超话需人工审核，超话开通后无法成为该超话主持人"></up-text>
		<up-text class="text" type="primary" size="14" text="查看详细创建规则>"  align="center" href="https://www.uviewui.com" ></up-text>
	</view>
</template>

<script lang="ts" setup name="">
import { reactive } from 'vue'
	
let circle = reactive({
	circle_name:'',
	circle_description:'',
	first_category:'',
	second_category:'',
})
	
function change(){
}
</script>

<style scoped lang="scss">
		
	.circle{
		background-color: white;
		padding: 30upx;
			
		.title{
			margin-bottom: 20upx;
		}	
		.first_category{
			margin: 30upx 0;
		}
		.text{
			padding-bottom: 20upx;
		}
	}
</style>