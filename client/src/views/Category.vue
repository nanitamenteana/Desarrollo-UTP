<template>
  <TutoresLayouts>
    <div class="ui grid">
      <div
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product.id"
      >
        <Product :product="product" />
      </div>
    </div>
         <div class="box">
      <h1>Tutores</h1>
      <p>Ordenar por:</p>
<nav id="menu_gral">
  <ul>
      <li><a href="#">Materias <i class="angle down icon"></i></a>
        <ul>
	        <li><a href="#matematicas">Matematicas</a></li>
	        <li><a href="#sociales">Ciencias Sociales</a></li>
	        <li><a href="#diseño">Diseño Grafico</a></li>
          <li><a href="#informatica">Informática</a></li>
        </ul>
    </li>
  </ul>
</nav>

<div class="materia">
  <div id="matematicas">
  <h3>Matemáticas</h3>
  </div>
</div>
<div class="ui three column grid">
  <div class="column">
    <div class="ui segment">
      <img class="img" src="../assets/t1.jpg" alt="">
      <router-link class="item" to="/MariaHernandez">
      <h4>Maria Hernadez</h4>
      </router-link>
      <p>Materia en la que asiste <br> Semestre que cursa <br> Especialidad.</p>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
      <img  class="img" src="../assets/t2.jpg" alt="">
      <router-link class="item" to="/JoseGomez">
      <h4>Jose Gómez</h4>
      </router-link>
      <p>Materia en la que asiste <br> Semestre que cursa <br> Especialidad.</p>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
      <img  class="img" src="../assets/t3.jpg" alt="">
      <router-link class="item" to="/AndreaGonzalez">
      <h4>Andrea González</h4>
      </router-link>
      <p>Materia en la que asiste <br> Semestre que cursa <br> Especialidad.</p>
    </div>
  </div>
</div>
<div class="materia">
  <div id="sociales">
  <h3>Ciencias Sociales</h3>
  </div>
  </div>
<div class="ui three column grid">
  <div class="column">
    <div class="ui segment">
      <img class="img" src="../assets/t4.jpg" alt="">
      <router-link class="item" to="/KarlaFlorez">
      <h4>Karla Florez</h4>
      </router-link>
      <p>Materia en la que asiste <br> Semestre que cursa <br> Especialidad.</p>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
      <img  class="img" src="../assets/t5.jpg" alt="">
      <router-link class="item" to="/LuisHerrera">
      <h4>Luis Herrera</h4>
      </router-link>
      <p>Materia en la que asiste <br> Semestre que cursa <br> Especialidad.</p>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
      <img  class="img" src="../assets/t6.jpg" alt="">
      <router-link class="item" to="/EstebanReyes">
      <h4>Esteban Reyes</h4>
      </router-link>
      <p>Materia en la que asiste <br> Semestre que cursa <br> Especialidad.</p>
    </div>
  </div>
</div>
<div class="materia">
  <div id="diseño">
  <h3>Diseño Grafico</h3>
  </div>
  </div>
<div class="ui three column grid">
  <div class="column">
    <div class="ui segment">
      <img class="img" src="../assets/t7.jpg" alt="">
      <h4>David Triana</h4>
      <p>Materia en la que asiste <br> Semestre que cursa <br> Especialidad.</p>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
      <img  class="img" src="../assets/t8.jpg" alt="">
      <h4>Pablo Vasquez</h4>
      <p>Materia en la que asiste <br> Semestre que cursa <br> Especialidad.</p>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
      <img  class="img" src="../assets/t9.jpg" alt="">
      <h4>Eduardo Pérez</h4>
      <p>Materia en la que asiste <br> Semestre que cursa <br> Especialidad.</p>
    </div>
  </div>
</div>
<div class="materia">
  <div id="informatica">
  <h3>Informática</h3>
  </div>
  </div>
<div class="ui three column grid">
  <div class="column">
    <div class="ui segment">
      <img class="img" src="../assets/t10.jpg" alt="">
      <h4>Laura Morales</h4>
      <p>Materia en la que asiste <br> Semestre que cursa <br> Especialidad.</p>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
      <img  class="img" src="../assets/t11.jpg" alt="">
      <h4>Daniel Torres</h4>
      <p>Materia en la que asiste <br> Semestre que cursa <br> Especialidad.</p>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
      <img  class="img" src="../assets/t12.jpg" alt="">
      <h4>Jessica Cortés</h4>
      <p>Materia en la que asiste <br> Semestre que cursa <br> Especialidad.</p>
    </div>
  </div>
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
.box{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: -90%;
  width: 1290px;
  height: 2200px;
  background: rgb(255, 255, 255);
  border-radius: 0px;
  margin-bottom: 125px;
  box-shadow: 2px 2px 5px #999 ;
  padding-bottom: 0px;
  margin-top: 1010px;
}
.box h1{
  text-align: left;
  margin-left: 40px;
  padding: 30px 0;
  font-weight: 800;
  font-size: 40px;
}
.box p{
  text-align: right;
  margin-right: 145px;
  padding:  30px 0;
  font-size: 17px;
  margin-top: -105px;
}

.materia{
  margin-left: 40px;
  margin-top: 50px;
  margin-bottom: 10px;
}

.ui.segment{
  border: none;
}

.ui.three.column.grid{
  background: white;
  margin-left: 0px;
  margin-right: 0px;
}

.column img{
  height: 240px;
  margin-left: 20%;
}

.column h4{
  margin-left: 140px;
  margin-top: 10px;
  margin-bottom: 8px;
}

.column p{
  margin-top: -35px;
  text-align-last: center;
  margin-right: -15px;
}

* {
    margin: 0;
    border: o none;
    padding: 0;
    color: black;
}
#menu_gral {
    width: 40%;
    margin: 1.5rem auto;
    text-align-last: center;
    margin: 0;
    padding: 0;
    border: o none;
    position: relative;
    margin-left: 950px;
    margin-top: -60px;
}
#menu_gral ul {
    list-style-type: none; 
    text-align: center;
    font-size: 0;
}
#menu_gral > ul li {
    display: inline-block;
    width: 25%;
    position: relative;
    background: #ffffff00;
}
#menu_gral li a {
    display: block;
    text-decoration: none;
    font-size: 1rem;
    line-height: 2.8rem;
    color: rgb(0, 0, 0);
}
#menu_gral li:hover a, #menu_gral li a:focus {
    background: #ffffff00;
    color: rgb(0, 0, 0);
}

#menu_gral li ul {
    position: absolute;
    width: 0;
    overflow: hidden;
}
#menu_gral li:hover ul, #menu_gral li:focus ul {
    width: 100%;
    background:  #bbb;
}
#menu_gral li li {
    display: block;
    width: 100%;
}
#menu_gral li:hover li a, #menu_gral li:focus li a {
    font-size: .9rem;
    line-height: 20px;
    border-top: 1px solid #e5e5e5;
    background: rgb(255, 255, 255);
}
#menu_gral li li a:hover, #menu_gral li li a:focus {
    background: #03a6f8; 
}
</style>
