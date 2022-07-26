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
      fotos: []   
    }
  },

  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
    .then(resp => resp.json()) // pega o retorno da API e tranforma em .json
    .then(fotos => this.fotos = fotos, err => console.log(err)); // pega as fotos do .json e 
                                                                 // tranforma no modelo do data()
  }
}

</script>

<style>

</style>
