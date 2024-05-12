<template>
	<view class="publish">
		<up-textarea
			count
			autoHeight 
			adjustPosition
			maxlength="10000"
			v-model="post.content" 
			placeholder="记录美好生活..."></up-textarea>
			<view class="upload" v-if="uploadShow">
				<up-upload
					multiple
					:maxCount="100"
					:fileList="post.images"
					@afterRead="afterRead"
					@delete="deletePic"
				></up-upload>
			</view>
		<view class="bottom">
			<view class="tool">
				 <up-grid
					:border="false"
					col="6">
					<up-grid-item
							v-for="(baseListItem,baseListIndex) in baseList"
							:key="baseListIndex"
							@click="click(baseListIndex)">
						<icon 
							:class="baseListItem.name"
							class="iconfont"/>
						<text class="grid-text">{{baseListItem.title}}</text>
					</up-grid-item>
				</up-grid>
				<up-toast ref="uToastRef" />
			</view>
			<up-button
				class="btn"
				type="primary"  
				color="#d81e06"
				hover-class="none"
				shape="circle" 
				text="发送"></up-button>
		</view>
	</view>
</template>

<script lang="ts" setup name="">
	import { ref,reactive } from 'vue'
		
	let post = reactive({
		content: '',
		images:[],
	})
	const uploadShow = ref(false);
	const baseList = ref([  
		{  
			name: 'icon-tupian',  
			title: '图片'  
		},  
		{  
			name: 'icon-shipin1',  
			title: '视频'  
		},  
		{  
			name: 'icon-biaoqing',  
			title: '表情'  
		},
		{
		  name: 'icon-huati',  
		  title: '标签'  
		},  
		{
		  name: 'icon-zixun',  
		  title: '超话'  
		}, 
	]);  
	  
	// 创建对子组件的引用  
	const uToastRef = ref(null);  
	const list = ref([]);
	// 删除图片
	function deletePic(event) {  
	      // 注意：这里的 event.name 应该是你传递给函数的参数，而不是 event 对象上的属性  
	      const listName = `fileList${event.name}`;  
	      // 假设你有一个方法来获取实际的 fileList（可能是一个 computed 属性或函数）  
	      // 这里为了简单起见，我们直接使用 fileList  
	      post.images.splice(event.index, 1);  
	      list.value.splice(event.index, 1);  
	}  
	  
	    // afterRead 函数  
	async function afterRead(event) {  
	  // 假设 event.file 是一个文件列表  
	  const newFiles = event.file.map((file) => ({  
		...file,  
		status: 'uploading',  
		message: '上传中',  
		// 注意：这里你可能没有 file.url，因为文件是本地文件，你可能需要在上传后获取 URL  
	  }));  
  
	  // 更新 fileList 和 list  
	  post.images = post.images.concat(newFiles);  
	  newFiles.forEach((file) => {  
		// 假设上传后立即设置状态为成功（实际情况可能需要等待上传完成）  
		file.status = 'success';  
		file.message = '';  
		// 如果你有上传后的 URL，可以在这里设置  
		// file.url = result; // result 应该是上传后得到的 URL  
  
		// 将 URL 添加到 list 中（这里假设 file 对象中有一个 url 属性）  
		if (file.url) {  
		  list.value.push(file.url);  
		}  
	  });  
	}  
	
	function click(index){
			console.log(index);
		// if(index == 0){
		// 	// 从相册选择6张图
		// 	uni.chooseImage({
		// 		count: 6,
		// 		success: function (res) {
		// 				const newFiles = res.tempFilePaths.map((file) => ({
		// 						type: 'image',
		// 						url: file,  
		// 						status: 'uploading',  
		// 						message: '上传中',  
		// 						// 注意：这里你可能没有 file.url，因为文件是本地文件，你可能需要在上传后获取 URL  
		// 				}));  
		// 				 post.images = post.images.concat(newFiles);  
		// 				 newFiles.forEach((file) => {
		// 				 		// 假设上传后立即设置状态为成功（实际情况可能需要等待上传完成）  
		// 				 		file.status = 'success';  
		// 				 		file.message = '';  
		// 				 		// 如果你有上传后的 URL，可以在这里设置  
		// 				 		// file.url = result; // result 应该是上传后得到的 URL  
						   
		// 				 		// 将 URL 添加到 list 中（这里假设 file 对象中有一个 url 属性）  
		// 				 		if (file.url) {  
		// 				 		  list.value.push(file.url);  
		// 				 		}  
		// 				 });  
		// 				 uploadShow.value = true;
		// 			}
		// 		});

		// }
	}
	
</script>

<style scoped lang="scss">
	.publish{
		position: relative;
		.upload {
			display: flex;
			padding: 20upx;
			::v-deep .u-upload__wrap{
				gap: 10px; /* 控制间隙 */
			}
			::v-deep .u-upload__wrap__preview{
				flex-basis: calc((100% - 20px)/3); 
				aspect-ratio: 1/1;
				margin: 0;
				.u-upload__wrap__preview__image{
					width: 100% !important;
					height: 100% !important;
				}
				
			}
				
			::v-deep .u-upload__button{
				width: calc((100% - 20px)/3) !important;
				height: auto !important;
				aspect-ratio: 1/1;
				border: 3upx solid red;
				margin: 0;
			}
		}
		.bottom{
			width: 100%;
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			align-items: center;
			background-color: white;
			.tool{
				flex: 2;
				margin: 20upx 0;
				.iconfont{
					font-size: 23px
				}
			}
			.btn{
				width: auto;
				padding: 0 40upx;
			}
		}
	}
	
	
</style>