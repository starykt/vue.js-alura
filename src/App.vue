<template>

<div class="corpo">
  <div class="titulo">
    <h1 class="alinhamento">{{ titulo }}</h1>   <!-- ou <h1 v-text="titulo"> -->
    <div class="filtrar">
      <input type="search" class="filtrar" v-on:input="filtro = $event.target.value" placeholder="Buscar por título">
    </div>
  </div>

  <ul class="lista-fotos">
    <li v-for="foto of fotosComFiltro" class="lista-fotos-itens"> <!-- v-for funciona como um while ou for para passar por cada valor do nosso array -->
                               <!-- foto (é o paramêtro que está passando no img) e fotos (o nome do array) -->
      
      <meu-painel :titulo="foto.titulo">
         <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
      </meu-painel>
      
    </li>

  </ul>

   <!-- o vue não aceita interpolação em atributo
      por isso se utiliza o v-bind: ou só : -->
  
  
</div>


</template>

<script>

import painel from './components/shared/painel/painel.vue'; // importa o componente

export default {
  components: {
    'meu-painel' : painel
  },

  data(){
    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: '' // atualiza e armazena o que é inserido no visual do input de filtrar 
    }
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i'); // 'i' = tanto faz maiúsculo ou minúsculo e RegExp
                                                      // varre as fotos procurando a que tenha o texto do filtro
                                                      // .trim faz ele ignorar espaços vazios.

        // retorna apenas as fotos que condizem com a expressão
        return this.fotos.filter(foto => exp.test(foto.titulo));
        // .test testa se a foto.titulo tem a expressão do exp 

      } else {
        // se o campo estiver vazio, não filtramos, retornamos a lista
        return this.fotos;
      };
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

  .titulo .filtrar {
    border-radius: 10px 15px 10px 15px;
    position: absolute;
    left: 82.5%;
    top: 5%;
    font-size: 14px;
    border-color: rgba(33, 82, 110, 0.452);
    border: 1px;
    color: rgba(33, 82, 110, 0.774);
    }

    .filtrar::placeholder {
      color: rgb(33, 82, 110);
      font-weight: bold;
    }

</style>
