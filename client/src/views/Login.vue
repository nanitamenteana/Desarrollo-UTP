<template>

  <BasicLayouts>
    <div class="login">
      <h1>Iniciar sesión</h1>
      <form class="ui form" @submit.prevent="login">
        <div class="field user">
          <label for="">Email o nombre de usuario</label>
          <input
            type="text"
            placeholder="usuario o email"
            v-model="formData.identifier"
            :class="{ error: formError.identifier }"
          />
        </div>
        <div class="field pass">
          <label for="">Contraseña</label>
          <input
            type="password"
            placeholder="***********"
            v-model="formData.password"
            :class="{ error: formError.password }"
          />
        </div>
        <button
          type="submit"
          class="ui button fluid primary"
          :class="{ loading }"
        >
          Ingresar
        </button>
        <router-link class="acount" to="/register"> Crear una cuenta </router-link>
      </form>
    </div>
  </BasicLayouts>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import * as Yup from 'yup';
import BasicLayouts from '../layouts/BasicLayouts.vue';
import { loginApi } from '../api/user';
import { setTokenApi, getTokenApi } from '../api/token';
export default {
  name: 'Login',
  components: {
    BasicLayouts,
  },
  
  setup() {  
    let formData = ref({});
    let formError = ref({});
    let loading = ref(false);
    const router = useRouter();
    const token = getTokenApi();
    onMounted(() => {
      if (token) return router.push('/');
    });
    const schemaForm = Yup.object().shape({
      identifier: Yup.string().required(true),
      password: Yup.string().required(true),
    });
    const login = async () => {
      formError.value = {};
      try {
        await schemaForm.validate(formData.value, { abortEarly: false });
        try {
          const response = await loginApi(formData.value);
          if (!response?.jwt) throw 'El usuario o contraseña no son validos';
          setTokenApi(response.jwt);
          router.push('/');
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
        });
        
      }
    };
    return {
      formData,
      formError,
      loading,
      login,
    };
  },
};
</script>

<style lang="scss" scoped>
.login{
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: -38%;
  width: 380px;
  background: rgb(255, 255, 255);
  border-radius: 0px;
  margin-bottom: 125px;
  box-shadow: 2px 2px 5px #999 ;
}

.login h1{
  text-align: center;
  margin-top: 15px;
  padding: 30px 0;
  font-weight: 800;
  font-size: 40px;
}

.field.user{
  position: relative;
  border-left: px solid #adadad;
  margin: 30px 0;
  padding-left: 40px;
  padding-right: 40px;
}

.field.user label{
  position: absolute;
  top: 50%;
  left: 5px;
  color: #000000;
  transform: translateY(-50%);
  font-size: 16px;
  top: -15px;
  margin-bottom: 25px;
  padding-left: 40px;
  padding-right: 0px;
}

.field.pass{
  position: relative;
  border-left: px solid #adadad;
  margin: 30px 0;
  padding-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
}

.field.pass label{
  position: absolute;
  top: 50%;
  left: 5px;
  color: #000000;
  transform: translateY(-50%);
  font-size: 16px;
  top: -15px;
  padding-top: 60px;
  padding-left: 40px;
  padding-right: 0px;
}

.ui.button.fluid.primary{
  width: 60%;
  height: 50px;
  border: 0px solid;
  background: #2a88c7;
  box-shadow: 2px 2px 5px #999;
  filter: shadow(color=#999999, direction=135, strength=2);
  border-radius: 0px;
  font-size: 20px;
  color: #e9f4fb;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  margin-bottom: 10px;
  margin-left: 75px;
}
.acount{
  margin-left: 130px;
  padding-top: 15px;
  font-size: 16px;
}
</style>
