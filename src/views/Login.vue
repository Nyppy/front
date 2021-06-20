<template>
  <v-main>
    <v-container fluid>
      <v-col class="d-flex justify-center mt-12">
        <img src="../assets/logo.png" alt="" width="160px" height="160px" />
      </v-col>

      <v-tabs fixed-tabs left class="mt-12" color="#FE0036">
        <v-tab>Номер</v-tab>
        <v-tab>СНИЛС</v-tab>

        <v-tab-item>
          <v-container fluid>
            <v-form ref="formPhone" v-model="valid" @submit.prevent="authPhone">
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
          </v-container>
        </v-tab-item>

        <v-tab-item>
          <v-container fluid>
            <v-form
              ref="formPhone"
              v-model="valid"
              @submit.prevent="authGosUslugi"
            >
              <v-text-field
                v-model="snils"
                outlined
                placeholder="Снилс"
                rounded
                required
                type="number"
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
                type="submit"
                width="100%"
                rounded
              >
                Войти
              </v-btn>
            </v-form>
          </v-container>
        </v-tab-item>
      </v-tabs>
      <v-col class="d-flex justify-center">
        <v-btn
          color="#FF0020"
          class="white--text"
          type="submit"
          width="100%"
          rounded
        >
          Войти через госуслуги
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-center">
        <router-link
          class="registry__button text-decoration-none"
          to="/registry"
        >
          <v-btn
            color="#FF0020"
            class="white--text"
            type="submit"
            width="100%"
            rounded
          >
            Регистрация
          </v-btn>
        </router-link>
      </v-col>
      <div class="recovery-pass">
        <router-link to="recovery-pass">Забыли пароль?</router-link>
      </div>
    </v-container>
  </v-main>
</template>

<script>
// import axios from '@/service/axios';

export default {
  name: "Login",
  data() {
    return {
      snils: null,

      phone: null,
      password: null,

      phone: null,
      sms_code: null,

      flag_show_pass: false,

      valid: false,

      flag_send_message: false,

      rules: {
        required: (value) => !!value || "Обязательное поле.",
        phone: (value) => {
          const pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$$/;
          return pattern.test(value) || "Некорректный номер";
        },
      },
    };
  },
  methods: {
    authPhone() {
      this.$router.push('/main');
    },
    authGosUslugi() {
      this.$router.push('/main');
    },
    auth(data) {},
    sendMessage() {},
    recoveryPass() {},
  },
};
</script>

<style scoped>
.container {
  height: 100%;
}
.recovery-pass {
  padding: 0 12px 0 12px;
  text-align: center;
}

.recovery-pass a {
  color: #00000099;
  text-decoration: none;
}

.registry__button {
  width: 100%;
}
</style>
