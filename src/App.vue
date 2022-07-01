<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
import axios from "axios";

//axios.get('https://yourbackend.io/users/all').then(posts => {
///   this.posts = posts;
//});
export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    this.chamar();
    this.listar();
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
        .then((respostaL) => {
          console.log(respostaL.data);
        })
        .catch((erroL) => {
          console.log(erroL);
        });
    },
  },
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
