<template>
  <div>
      <button @click="clicar()">clique</button>
       <h1 v-if="mostrar">{{ texto }}</h1>
      </div>
</template>

<script>
export default {
    data(){
        return{
            mostrar:true,
        }
    },
    props:{
      texto:String,
    },
    methods:{
        clicar(){
            this.mostrar=!this.mostrar;
        }
    }
}
</script>
