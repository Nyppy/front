<template>
  <v-main>
    <v-container fluid class="doctor-registry">
      <v-col class=" d-flex justify-center mt-12">
        <img src="../../assets/logo.png" alt="" width="160px" height="160px" />
      </v-col>
      <v-col class="d-flex justify-center">
        <h1>
            Регистрация для врача
        </h1>
      </v-col>
        <v-form ref="formDoctor" v-model="valid" @submit.prevent="regDoctor">
              <v-text-field
                v-model="phone"
                :rules="[rules.phone]"
                name="phone"
                rounded
                outlined
                placeholder="Номер телефона"
                required
                class="pt-0"
                color="#474D52"
              ></v-text-field>



              <v-text-field
                v-model="password"
                :rules="[rules.required]"
                :type="flag_show_pass ? 'text' : 'password'"
                name="pass"
                outlined
                rounded
                class="pt-0"
                placeholder="Пароль"
                color="#474D52"
                @click:append="flag_show_pass = !flag_show_pass"
              ></v-text-field>

              <v-switch
                v-model="flag_show_pass"
                label="Показать пароль"
                class="pt-0 mt-0"
              ></v-switch>

              <v-btn
                :disabled="!valid"
                color="#FF0020"
                class="mt-4 white--text"
                width="100%"
                type="submit"
                rounded
              >
                Войти
              </v-btn>
            </v-form>

      <div class="doctor-registry__remindpas recovery-pass mt-6">
        <router-link to="recovery-pass-doctor">Забыли пароль?</router-link>
      </div>
    </v-container>
  </v-main>
</template>

<script>
// import axios from '@/service/axios';

export default {
  name: "DoctorReg",
  data() {
    return {
      phone: null,
      password: null,
      valid: false,
      rules: {
        required: (value) => !!value || "Обязательное поле.",
        phone: (value) => {
          const pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$$/;
          return pattern.test(value) || "Некорректный номер";
        },
      },
    }
  },
  methods: {
      regDoctor(){}
  },
};
</script>

<style scoped>
.doctor-registry{
    max-width: 600px;
}

.doctor-registry__remindpas a{
    text-decoration: none;
    text-align: center;
}

.doctor-registry__remindpas {
    text-align: center;
}
</style>