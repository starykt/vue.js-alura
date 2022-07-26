<template>

<div>
  <h1>{{ titulo }}</h1>   <!-- ou <h1 v-text="titulo"> -->

  <ul>
    <li v-for="foto of fotos"> <!-- v-for funciona como um while ou for para passar por cada valor do nosso array -->
                               <!-- foto (é o paramêtro que está passando no img) e fotos (o nome do array) -->

      <img :src="foto.url" :alt="foto.titulo">
    </li>

  </ul>

   <!-- o vue não aceita interpolação em atributo
      por isso se utiliza o v-bind: ou só : -->
  
  
</div>


</template>

<script>

export default {
  data(){
    return {
      titulo: 'Alurapic',
      fotos: [
        {
        url: 'https://i.pinimg.com/564x/d5/3f/f1/d53ff1e5e45113fe77a362b7086f4ea7.jpg',
        titulo: 'Cachorro'
        },

        {
        url: 'https://i.pinimg.com/564x/6f/a4/77/6fa477ff84a59abe2f7d07f13099326c.jpg',
        titulo: 'Gatinho'
        }
      ]   
    }
  }
}

</script>

<style>

</style>
