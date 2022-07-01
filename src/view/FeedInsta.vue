<template>
    <div class="flex">
        <PostInsta 
         nome="maria"
         imagem="https://www.bing.com/images/search?view=detailV2&ccid=cMw3NsC3&id=676E20594E5E12A984F781818A0E1E481ABF9E37&thid=OIP.cMw3NsC3mQxAAFiUcz2EYwHaE8&mediaurl=https%3a%2f%2f3.bp.blogspot.com%2f-v45yi_6_U_g%2fTwTnB-iN6KI%2fAAAAAAAABgA%2fxeDL8q20LUw%2fs1600%2fLavigne_2011-0147.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.70cc3736c0b7990c40005894733d8463%3frik%3dN56%252fGkgeDoqBgQ%26pid%3dImgRaw%26r%3d0&exph=1067&expw=1600&q=Fotos+pessoas&simid=608016306907799229&form=IRPRST&ck=C4B9C1DD1D3573EEDE3B865EB4FAD77E&selectedindex=0&ajaxhist=0&ajaxserp=0&first=1&tsc=ImageHoverTitle"
         legenda="ola"
         fotoId="https://www.bing.com/images/search?view=detailV2&ccid=7VThHu2V&id=F75AF60507AB316109CEA4ADF0F65D5F6A69B62F&thid=OIP.7VThHu2VS76jFvN5_5gnlgHaEW&mediaurl=https%3a%2f%2fimages.hivisasa.com%2f1200%2fIt9Rrm02rE20.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.ed54e11eed954bbea316f379ff982796%3frik%3dL7Zpal9d9vCtpA%26pid%3dImgRaw%26r%3d0&exph=705&expw=1200&q=Fotos+pessoas&simid=608028895455693019&FORM=IRPRST&ck=FD709EB581B073E6622AC3038689300B&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0"
         ></PostInsta>
    
    <i class="lni lni-heart-filled"></i>
    </div>
</template>
<script>
import PostInsta from '@/components/PostInsta.vue' 

export default {
name: 'FeedInsta',
 components: {
    PostInsta
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
        "fotoId":"land.jpg",
        "descricao": "esse é o post 2"
    }

]
    }
  }
  }
  
</script>