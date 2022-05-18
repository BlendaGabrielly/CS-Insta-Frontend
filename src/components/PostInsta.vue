<template>
<body>
    <header>
        <div class="container">
            <img src="Iporagram.png" alt="Iporágram">
        </div>
    </header>
<div class="card " >
    <div class="card-header bg-transparent ">
        <div class="mariadb">
            <img class="perfil" :src="fotoId" alt="">

            <h3 class="username">{{nome}}</h3>
        </div>
        

        <i class="lni lni-more-alt"></i>
    </div>
    <div class="card-body ">
        <img :src="fotoId" alt="Pessoa">
        <div class="overlay">
            <img src="coracao.png" alt="">
            
        </div>
    </div>
    <div class="card-footer bg-transparent">
        
        <div class="icon">
            <i class="lni lni-heart"></i>
            <i class="lni lni-heart-filled"></i>
        </div>

        <p class="descricao">Olá esse post</p>
    </div>
  </div>
</body>
</template>

<script>
export default {
     data(){
        return{
            mostrar:true,
        }
    },
    props:{
      nome:String,
      imagem:String,
      legenda:String,
      fotoId:String
      
    },
    methods:{
        clicar(){
            this.mostrar=!this.mostrar;
        }
    }
}
</script> 

<style>
body{
    background: #f9f9f9;
}

header{
    padding: 30px;
    background: #fff;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
}
header img{
    max-height: 30px;
}

.container{
    max-width: 960px;
}
.card{    
    margin: 20px 0px;
}
.card-header{
    display: flex;
    justify-content: space-between;
    background: #fff;
}
.card-body{
    padding: 0;
    position: relative;
}
.card-header i{
    display: flex;
    align-items: center;

}
.card-body .overlay{
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

.card-body .overlay img{
    width: 25%;
}

.card-body .overlay.exibir{
    opacity: 1;
}

.card-body>img{
    width: 100%
}
.perfil{
    border-radius: 50%; 
    width:50px;
    height:50px;
}
.mariadb{
    display: flex;
    align-items: center;
}
.card-footer{
    background: #fff;
}

.card-footer i{
    font-size: 1.3rem;
}

.card:not(.curtido) .lni-heart-filled{
    display: none;
}

.card.curtido .lni-heart{
    display: none;
}

.card.curtido .lni-heart-filled{
    display: initial;
    color: red;
}
</style>