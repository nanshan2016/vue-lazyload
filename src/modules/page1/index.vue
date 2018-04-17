<template>
    <div>
      <Home></Home>
    </div>
</template>
<script>
    import Home from '@/components/containers/home'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            Home
        }
    }
</script>
