<template>

<div class="corpo">
  <div class="titulo">
    <h1 class="centralizar">{{ titulo }}</h1>   <!-- ou <h1 v-text="titulo"> -->
  </div>

  <ul class="lista-fotos">
    <li v-for="foto of fotos" class="lista-fotos-itens"> <!-- v-for funciona como um while ou for para passar por cada valor do nosso array -->
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
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 95%;
    margin: 0 auto;
    background-color: rgba(168, 167, 167, 0.301);
    border-radius: 0px 40px 80px 0px;
  }

  .centralizar {
    text-align: center;
  }

  .titulo {
    border-radius: 0px 15px 10px 15px;
    background-color: rgba(100, 100, 100, 0.301); 
    width: 20%;
    color: rgb(33, 82, 110);
    }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-itens {
    display: inline-block;
    padding: 5%;
    
  }

</style>
