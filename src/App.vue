<template>
  <div id="app">
    <div class="flex">

   
    <PostInsta
    v-for="post in postagens" :key="post.id"
    :nome="post.nome"
    :legenda="post.legenda"
    :fotoId="post.fotoId"/>
    <hr/>
    <InteracaoInsta
    imagem="coracao.png"
    text="Ola"/>
    <i class="lni lni-heart-filled"></i>
    <hr/>
    </div>
  </div>
</template>

<script>
import PostInsta from './components/PostInsta.vue'
import InteracaoInsta from'./components/InteracaoInsta.vue'
//import axios from "axios";

export default {
  name: 'App',
  components: {
    PostInsta,
    InteracaoInsta,
  },

  data(){
    return {
      postagens: [
    {
        "nome":"jorge",
        "fotoId":"land.jpg",
        "descricao": "esse é o post 1"
    },
    {
        "nome":"gabrielaa",
        "fotoId":"landscape.jpg",
        "descricao": "esse é o post 2"
    }

]
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
