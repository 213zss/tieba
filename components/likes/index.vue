<template>
	<span 
		class="views" 
		@click="clickLikes"
		:class="{ 'active': likesStatus }">
		<up-icon
			v-if="!likesStatus"
			name="thumb-up" 
			size="24"></up-icon>
		<up-icon
			v-else
			color="#d81e06"
			name="thumb-up-fill" 
			size="24"></up-icon>
		{{likes}}
	</span>
</template>

<script lang="ts" setup name="">
	import { defineProps,defineEmits } from 'vue'

	const props = defineProps({  
	likes: Number,  
	likesStatus: Boolean  
	});  
	const emit = defineEmits(['update:likesStatus'])
	
	function clickLikes() {  
	  emit('update:likesStatus', !props.likesStatus)  
	} 
</script>

<style scoped lang="scss">
	.views{
		display: flex;
		align-items: center;
	}
</style>