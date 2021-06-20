<template>
  <v-main>
    <v-container fluid>
      <v-col class="d-flex justify-center mt-12">
        <img src="../assets/logo.png" alt="" width="160px" height="160px" />
      </v-col>

      <v-container fluid>
        <v-col class="d-flex flex-column justify-center align-center mt-12">
          <h1 class="mb-6">Регистрация</h1>
          <p class="mb-6">Введите свои данные</p>
        </v-col>

        <v-form ref="formPhone" v-model="valid" @submit.prevent="authPhone">
          <v-text-field
            v-model="phone"
            :rules="[rules.phone]"
            rounded
            outlined
            placeholder="Номер телефона"
            required
            class="pt-0"
            color="#474D52"
          ></v-text-field>

          <v-text-field
            v-model="snils"
            rounded
            outlined
            placeholder="СНИЛС"
            required
            class="pt-0"
            color="#474D52"
            type="number"
          ></v-text-field>

          <v-text-field
            v-model="date"
            rounded
            outlined
            placeholder="Дата рождения"
            required
            class="pt-0"
            color="#474D52"
            type="date"
          ></v-text-field>

          <v-text-field
            v-model="surname"
            rounded
            outlined
            placeholder="Фамилия"
            required
            class="pt-0"
            color="#474D52"
            type="text"
          ></v-text-field>

          <v-text-field
            v-model="name"
            rounded
            outlined
            placeholder="Имя"
            required
            class="pt-0"
            color="#474D52"
            type="text"
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

          <v-text-field
            v-model="password2"
            :rules="[rules.required]"
            :type="flag_show_pass ? 'text' : 'password'"
            name="pass"
            outlined
            rounded
            class="pt-0"
            placeholder="Повторите пароль"
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
            Зарегистрироваться
          </v-btn>
        </v-form>
      </v-container>
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios';

export default {
  name: "Registry",
  data() {
    return {
      valid: false,
      password: null,
      password2: null,
      surname: null,
      phone: null,
      snils: null,
      date: null,
      name: null,
      flag_show_pass: false,
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
      axios.post('http://94.228.118.80:8000/api/View_Patient_signup', {
        'first_name': 'Test',
        'last_name': 'Test',
        'gender': 'test',
        'age': '1',
        'address': 'qeqweqwe',
        'mobile': '1231231231',
        'snils': '123123123',
      }).then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
};
</script>
