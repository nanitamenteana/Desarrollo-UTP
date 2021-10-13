<template>
  <BasicLayouts>
    <div class="register">
      <h1>Registro de usuario</h1>
      <form class="ui form" @submit.prevent="register">
        <div class="field user">
          <label for="">Nombre de usuario</label>
          <input
            type="text"
            placeholder="Usuario"
            v-model="formData.username"
            :class="{ error: formError.username }"
          />
        </div>
        <div class="field email">
          <label for="">Correo electrónico</label>
          <input
            type="text"
            placeholder="Example@hotmail.com"
            v-model="formData.email"
            :class="{ error: formError.email }"
          />
        </div>
        <div class="field pass">
          <label for="">Contraseña</label>
          <input type="password" placeholder="*********" v-model="formData.password" :class="{ error: formError.password }"/>
        </div>

        <button
          type="submit"
          class="ui button fluid primary"
          :class="{ loading }"
        >
          Crear cuenta
        </button>
        <router-link class="acount" to="/login">
        Iniciar sesión
      </router-link>
      </form>
    </div>
</BasicLayouts>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import * as Yup from 'yup';
import BasicLayouts from '../layouts/BasicLayouts.vue';
import { registerApi } from '../api/user';
import { getTokenApi } from '../api/token';
export default {
  name: 'Register',
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
      if (token) router.push('/');
    });
    const schemaForm = Yup.object().shape({
      username: Yup.string().required(true),
      email: Yup.string()
        .email(true)
        .required(true),
      password: Yup.string().required(true),
    });
    const register = async () => {
      formError.value = {};
      loading.value = true;
      try {
        await schemaForm.validate(formData.value, { abortEarly: false });
        try {
          const response = await registerApi(formData.value);
          router.push('/login');
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
        });
      }
      loading.value = false;
    };
    return {
      formData,
      register,
      formError,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped>
.register{
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: -50%;
  width: 450px;
  background: rgb(255, 255, 255);
  border-radius: 0px;
  margin-bottom: 125px;
  box-shadow: 2px 2px 5px #999 ;
}

.register h1{
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

.field.user{
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
  padding-right: 40px;
}

.field.email{
  position: relative;
  border-left: px solid #adadad;
  margin: 30px 0;
  padding-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
}

.field.email label{
  position: absolute;
  top: 50%;
  left: 5px;
  color: #000000;
  transform: translateY(-50%);
  font-size: 16px;
  top: -15px;
  margin-bottom: 25px;
  padding-top: 50px;
  padding-left: 40px;
  padding-right: 40px;
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
  padding-right: 40px;
}

.ui.button.fluid.primary{
  width: 80%;
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
  margin-left: 45px;
}
.acount{
  margin-left: 180px;
  padding-top: 15px;
  font-size: 16px;
}
</style>
