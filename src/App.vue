<template>

<div class="corpo">
  <div class="titulo">
    <h1 class="alinhamento">{{ titulo }}</h1>   <!-- ou <h1 v-text="titulo"> -->
  </div>

  <ul class="lista-fotos">
    <li v-for="foto of fotos" class="lista-fotos-itens"> <!-- v-for funciona como um while ou for para passar por cada valor do nosso array -->
                               <!-- foto (é o paramêtro que está passando no img) e fotos (o nome do array) -->
      <div class="painel">
        <h2 class="painel-titulo">{{ foto.titulo }}</h2>

          <div class="painel-conteudo">
            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
          </div>

      </div>
      
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

  .alinhamento {
    text-align: left;
    margin-left: 5px;
  }

  .titulo {
    border-radius: 0px 15px 10px 15px;
    background-color: rgba(100, 100, 100, 0.301); 
    width: 100%;
    color: rgb(33, 82, 110);
    }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-itens {
    display: inline-block;
    padding: 5%;
  }

  .imagem-responsiva {
    width: 100%;
  }

  /* estilo do painel */ 

   .painel {
    padding: 0 auto;
    border: solid 2px rgba(168, 167, 167, 0.301);
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px black;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px rgba(100, 100, 100, 0.301);
    background: rgba(33, 82, 110, 0.623);
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
    color: rgb(33, 82, 110);
  }

</style>
