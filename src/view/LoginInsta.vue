<template>
    <div class="Login">
       <label>
        Usuario:
        <input placeholder="nome de usuario ou email">
       </label>
       <label>
        Senha:
        <input placeholder="senha de login">
       </label>
        
            <router-link to="/post">Ir para Feed</router-link>
      

        <h1>Teste de rotas</h1>
        <router-link to="/">Go to About</router-link>
        
         </div>
</template>
<script>
export default {
name: 'LoginInsta',
}
</script>