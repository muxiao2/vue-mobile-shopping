<template>
    <div>
        <vue-preview :slides="thumbList" @close="handleClose"></vue-preview>
    </div>
</template>

<script>

export default {
   data() {
       return {
            id: this.$route.params.id,
            // 图片详情
            photoInfo: [],
            // 缩略图
            thumbList: []
       }
   },
   created() {
       this.getThumbs()
   },
   methods: {
        //缩略图
        getThumbs() {
           this.$axios.get('/api/getthumimages/' + this.id)
            .then(result => {
                if(result.data.status === 0) {
                    // 循环每个图片数据，补全msrc和图片宽高
                    result.data.message.forEach(item => {
                        item.msrc = item.src
                        item.w = 600
                        item.h = 600
                    })
                    this.thumbList = result.data.message
                }
            })
       },
       handleClose() {
           console.log('close event');
       },
   },
}
</script>

<style scoped>

</style>