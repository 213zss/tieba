<template>
	<view class="search">
		<up-input
			:disabled="props.disabled"
			:disabledColor="props.disabledColor"
			border="none"
			placeholder="前置图标"
			prefixIcon="search"
			shape="circle"
			:customStyle="{padding:'15rpx',backgroundColor:'#F5F5F5'}"
			prefixIconStyle="font-size: 22px;color: #909399"
		></up-input>
	</view>
	
	
</template>

<script lang="ts" name="" setup>
	import { defineProps } from 'vue'
	const props = defineProps({  
      disabled: {  
        type: Boolean,  
        default: false // 设置默认值  
      },  
      disabledColor: {  
        type: String,  
        default: 'red' // 设置默认值  
      }  
	})
</script>


<style lang="scss" scoped>
	.search{
		background-color: white;
		padding: 0 30upx;
	}	
</style>