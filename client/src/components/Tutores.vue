 <template>
 <div class="ui secondary menu">
    <div class="ui container">
      <div class="left menu">
         <router-link class="item" to="/">
          <h5>INICIO</h5>
        </router-link>
      </div>
      <div class="right menu">
        <router-link class="item" to="/category">
          <h5>Tutores</h5>
        </router-link>
        <a href="https://wa.me/message/O7LFZT6TSRQIC1" class="item" target="_blank"><h5>AGENDAR TUTORÍA</h5></a>
        <router-link class="item" to="/login" v-if="!token">
          <h5>Iniciar Sesión</h5>
        </router-link>

        <template v-if="token">
          <span class="ui item logout" @click="logout">
            <i class="sign-out icon"></i>
          </span>
        </template>
      </div>
    </div>
  </div>
      <img class="logo" src="../assets/logo.png" alt="">
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { getTokenApi, deleteTokenApi } from '../api/token';
import { getCategoriesApi } from '../api/category';
export default {
  name: 'Menu',
  setup() {
    let categories = ref(null);
    const token = getTokenApi();
    const store = useStore();
    onMounted(async () => {
      const response = await getCategoriesApi();
      categories.value = response;
    });
    const logout = () => {
      deleteTokenApi();
      location.replace('/');
    };
    const openCart = () => {
      store.commit('setShowCart', true);
    };
    return {
      token,
      logout,
      categories,
      openCart,
    };
  },
};
</script>

<style lang="scss" scoped>
.ui.menu.secondary {
  background-color: rgba(0,0,0,.4);
  background-image: url('../assets/grado.jpg');
  height: 350px;
  background-position: center;
  background-blend-mode: multiply;
  background-size: cover;
  background-position-y: 1165px;
  .item {
    color: #ffffff;
    &:hover {
      color: #ff0000;
    }
  }
  .menu.left {
    width: 50%;
    margin-bottom: 200px;
    margin-left: 0px;
    .ui.image {
      width: 120px;
    }
  }
  .menu.right {
    width: 50%;
    justify-content: flex-end;
    margin-bottom: 200px;
    .logout,
    .cart {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.logo{
  margin-top: -160px;
  height: 250px;
  margin-left: 80px;
}
</style>