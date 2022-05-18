<template>
  <div :class="{ curtido : mostrar }">
  <i :class="{ 'lni lni-heart-filled' : mostrar, 'lni lni-heart' : !mostrar }"></i>
       <button @click="curtida()">♡</button>
        <h1 v-if="mostrar"><img :src="imagem"/></h1>
        <button @click="Coments()">()</button>
         <h1 v-if="most"><img :src="text" /></h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            mostrar:true,
            most:true,
        }
    },
    props:{
      imagem:String,
      text:String
    },
    methods:{
        curtida(){
            this.mostrar=!this.mostrar;
        },
        Coments(){
            this.most=!this.most;
        }
    }
}
</script>

<style scoped>
    .lni-heart-filled{
        color: red;
    }
</style>