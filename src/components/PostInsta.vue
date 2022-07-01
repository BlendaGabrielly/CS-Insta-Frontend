<template>
  <body>
    <PostUnico v-for="post in posts" :key="post.id" :post="post" />
  </body>
</template>

<script>
import axios from "axios";
import PostUnico from "./PostUnico.vue";

export default {
  name: "PostInsta",
  components:{
    PostUnico
  },
  data() {
    return {     
      posts:null
    };
  },
  created() {
    this.chamar();
    this.listar();
  },
  props: {
    nome: String,
    imagem: String,
    legenda: String,
    fotoId: String,
  },
  methods: {
  
    chamar() {
      axios
        .post("http://127.0.0.1:8000/api/criar", {
          nome: "maria",
          imagem:
            "5393980ecb8d7146c69970d337f9e2e715140a1ce8d8347a98fb13d610b2a960",
          legenda: "Hello",
        })
        .then((resposta) => {
          console.log(resposta.data);
        })
        .catch((erro) => {
          console.log(erro);
        });
    },

    listar() {
      axios
        .get("http://127.0.0.1:8000/api/listar")
        .then((resposta) => {
          this.posts=resposta.data;
          console.log(resposta.data);
        })
        .catch((erroL) => {
          console.log(erroL);
        });
    },
  },
};
</script> 

<style>
body {
  background: #f9f9f9;
}

header {
  padding: 30px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
}
header img {
  max-height: 30px;
}

.container {
  max-width: 960px;
}
.card {
  margin: 20px 0px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  background: #fff;
}
.card-body {
  padding: 0;
  position: relative;
}
.card-header i {
  display: flex;
  align-items: center;
}
.card-body .overlay {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  transition: 1s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-body .overlay img {
  width: 25%;
}

.card-body .overlay.exibir {
  opacity: 1;
}

.card-body > img {
  width: 100%;
}
.perfil {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.mariadb {
  display: flex;
  align-items: center;
}
.card-footer {
  background: #fff;
}

.card-footer i {
  font-size: 1.3rem;
}



.card.curtido .lni-heart {
  display: none;
}

.card.curtido .lni-heart-filled {
  display: initial;
  color: red;
}
</style>