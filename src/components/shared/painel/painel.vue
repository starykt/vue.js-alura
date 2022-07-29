<template>

      <div class="painel">
        <h2 class="painel-titulo">{{ titulo }}</h2>
          <slot class="painel-conteudo">       <!-- com <slot> ele entende que tem algo a ser inserido
                                                entre as tags do componente-->
          </slot>
      </div>

</template>

<script>

export default {

    props: ['titulo'] // diz que o componente tem uma abertura para passar esse valor
}

</script>

<style>

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