<template>
	<Search disabled disabledColor="#F5F5F5"/>
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
			@change="changeType"
		>
		</up-tabs>
	</view>
	<Post/>
	<Post/>
	<Post/>
	    
	
</template>

<script lang="ts" name="Home" setup>
	import Search from '../../components/search/index.vue'
	import Post from '../../components/post/index.vue'
	import { onMounted, reactive } from 'vue'
	const list = reactive([  
	    { name: '关注' },  
	    { name: '推荐' },  
	    { name: '话题' },  
	]);  
	
		
	function changeType(index){
		console.log(index);
		
	}		
		function get(){
			uni.login({
			    provider: 'weixin',
			    success: function (loginRes) {
			        // 登录成功
			        uni.getUserInfo({
			            provider: 'weixin',
			            success: function(info) {
			                // 获取用户信息成功, info.authResult保存用户信息
							console.log(info);
			            }
			        })
			    },
			    fail: function (err) {
			        // 登录授权失败
			        // err.code是错误码
			    }
			});


		}
	
</script>

<style scoped lang="scss">
	.tabs{
		background-color: white;
	}
	
</style>
