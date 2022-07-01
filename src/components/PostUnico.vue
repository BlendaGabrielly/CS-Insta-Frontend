<template>
<div class="card">
      <div class="card-header bg-transparent">
        <div class="mariadb">
          <img class="perfil" :src="post.imagem" alt="" />

          <h3 class="username">{{ post.nome }}</h3>
        </div>

        <i class="lni lni-more-alt"></i>
      </div>
      <div class="card-body">
        <img :src="post.imagem" alt="Pessoa" />
        <div class="overlay" :class="{ exibir: mostrar }">
          <img src="coracao.png" alt="" />
        </div>
      </div>
      <div class="card-footer bg-transparent">
         <i
        @click="curtida()"
        :class="{ 'lni lni-heart-filled': like, 'lni lni-heart': !like }"
      ></i>
        <p class="descricao">{{post.legenda}}</p>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
             like: false,
      mostrar: false,
        }
    },
    props:{
        post: Object
    },
    methods:{
        curtida() {
      this.like = !this.like;

      if (this.like == true) {
        this.mostrar = !this.mostrar;
        setTimeout(() => {
          this.mostrar = !this.mostrar;
        }, 800);
      }
    },
    }
}
</script>