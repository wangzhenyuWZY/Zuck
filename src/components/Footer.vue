<template>
    <div class="footer">
        <div class="footopcon">
            <div class="left">
            </div>
            <div class="right">
            </div>
        </div>
        <p>© Copyright 2021 ZUCKMETA </p>
    </div>
</template>
<script>
export default {
  name: 'Header',
  computed: {
    language() {
      
    },
  },
  data() {
    return {
    }
  },
  watch: {
      
  },
  methods: {
      
  },
  created() {
    
  },
}
</script>
<style lang="less" scoped>
.footer{
    position:relative;
    background:#1D1D1D;
   .footopcon{
       width:1100px;
       margin:0 auto;

   }
}
@media screen and (max-width:900px) {
    .footer{
        
    }
}
</style>