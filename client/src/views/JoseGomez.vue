<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
  <TutoresLayouts>
<div class="ui three column grid">
  <div class="column">
    <div class="ui segment">
      <img class="img" src="../assets/t2.jpg" alt="">
    </div>
  </div>
</div>
<div class="info">
<h2>Jose Gómez</h2>
<h3>Tutor</h3>
<a href="https://www.linkedin.com/in/tutor1/" target="_blank"><img class="linkedin" src="../assets/linkedin.png" alt=""></a>
<p>Profesional en física (9 semestre) de la Universidad Nacional de Colombia. Experiencia de 4 años como profesor particular de matemáticas, física e inglés a nivel de bachillerato y universitario. Dominio de temas en álgebra, trigonometría, cálculo diferencial, cálculo integral y vectorial. Física mecánica, electromagnética y moderna.</p>
<div class="ui threaded comments">
  <h3 class="ui dividing header">Reseñas</h3>
  <div class="comment">
    <a class="avatar">
      <img src="../assets/t1.png">
    </a>
    <div class="content">
      <a class="author">Sergio Andres</a>
      <div class="metadata">
        <span class="date">09 de octubre a las 5:42PM</span>
      </div>
      <div class="text">
        Exelente tutora 
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
  </div>
  <div class="comment">
    <a class="avatar">
      <img src="../assets/t1.png">
    </a>
    <div class="content">
      <a class="author">Daniela Sanchez</a>
      <div class="metadata">
        <span class="date">09 de octubre a las 8:30PM</span>
      </div>
      <div class="text">
        <p>Muy recomendada, pude aclarar todas mis dudas con su tutoria</p>
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
    <div class="comments">
      <div class="comment">
        <a class="avatar">
          <img src="../assets/t1.png">
        </a>
        <div class="content">
          <a class="author">Fabian Torres</a>
          <div class="metadata">
            <span class="date">11 de octubre a las 7:17AM</span>
          </div>
          <div class="text">
            Recomendadisima
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="comment">
    <a class="avatar">
      <img src="../assets/t1.png">
    </a>
    <div class="content">
      <a class="author">Juan David</a>
      <div class="metadata">
        <span class="date">12 de octubre a las 4:53PM</span>
      </div>
      <div class="text">
        Daniela tenias razon sin duda me gusto la manera en que explica :)
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
  </div>
  <form class="ui reply form">
    <div class="field">
      <textarea></textarea>
    </div>
    <div class="ui blue labeled submit icon button">
      <i class="icon edit"></i> Add Reply
    </div>
  </form>
</div>
</div>
  </TutoresLayouts>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import TutoresLayouts from '../layouts/TutoresLayouts.vue';
import Product from '../components/Product.vue';
import { getCategoriesApi, getProductsCategory } from '../api/product';
export default {
  name: 'Category',
  components: {
    TutoresLayouts,
    Product,
  },
  watch: {
    $route(to, from) {
      this.getProduts(to.params.category);
    },
  },
  setup() {
    let products = ref(null);
    const { params } = useRoute();
    onMounted(() => {
      getProduts(params.category);
    });
    const getProduts = async (category) => {
      const response = await getProductsCategory(category);
      products.value = response;
    };
    return {
      getProduts,
      products,
    };
  },
};
</script>

<style lang="scss" scoped>
.ui.segment{
  border: none;
}

.ui.three.column.grid{
  background: white;
  margin-left: 400px;
  margin-right: 0px;
  margin-top: -105px;
  width: 890px;
  padding-bottom: 20px;
}

.column img{
  height: 240px;
  margin-left: 0%;
}

.info h2 {
  margin-left: -30px;
  text-align: center;
  color: rgb(22, 103, 196);
  
}
.info h3 {
  margin-left: 520px;
  margin-top: -15px;
}
.linkedin {
  width: 50px;
  margin-left: 518px;
  margin-bottom: 30px;
  margin-top: 20px;
}
.info p {
  text-align: justify;
  margin-left: 125px;
  width: 900px;
  margin-bottom: 40px;
}
.ui.dividing.header {
  text-align-last: center;
  margin-right: 60px;
}
.ui.blue.labeled.submit.icon.button{
  margin-bottom: 40px;
}
</style>
