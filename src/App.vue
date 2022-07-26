<template>

<div>
  <h1>{{ titulo }}</h1>   <!-- ou <h1 v-text="titulo"> -->
    
  <img :src="foto.url" :alt="titulo.url"> <!-- o vue não aceita interpolação em atributo
                                                           por isso se utiliza o v-bind: ou só : -->
</div>


</template>

<script>

export default {
  data(){
    return {
      titulo: 'Alurapic',
      foto:{
        url: 'https://i.pinimg.com/564x/d5/3f/f1/d53ff1e5e45113fe77a362b7086f4ea7.jpg',
        titulo: 'Cachorro'
      }
    }
  }
}

</script>

<style>

</style>
