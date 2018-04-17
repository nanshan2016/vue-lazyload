<template>
    <div>
      <JobList></JobList>
    </div>
</template>
<script>
    import JobList from '@/components/containers/joblist'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            JobList
        }
    }
</script>
