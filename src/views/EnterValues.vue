<template>
  <v-main>
    <v-container fluid>
      <v-col class="d-flex justify-center mt-12">
        <img src="../assets/logo.png" alt="" width="160px" height="160px" />
      </v-col>
      <v-col class="d-flex flex-column justify-center align-center mt-12">
        <h1 class="mb-6 text-center">Введите показатели в поля:</h1>
      </v-col>
      <v-form ref="formPhone" @submit.prevent="sendValues">
        <v-text-field
          v-model="topP"
          rounded
          outlined
          placeholder="Верхнее давление"
          required
          class="pt-0"
          color="#474D52"
          type="number"
        ></v-text-field>

        <v-text-field
          v-model="botP"
          rounded
          outlined
          placeholder="Нижнее давление"
          required
          class="pt-0"
          color="#474D52"
          type="number"
        ></v-text-field>

        <v-text-field
          v-model="puls"
          rounded
          outlined
          placeholder="Пульс"
          required
          class="pt-0"
          color="#474D52"
          type="number"
        ></v-text-field>
        <v-btn
          color="#FF0020"
          class="white--text"
          type="submit"
          width="100%"
          rounded
        >
          Отправить измерения
        </v-btn>
      </v-form>
      <v-col class="d-flex justify-center"> </v-col>
    </v-container>
  </v-main>
</template>

<script>
// import axios from '@/service/axios';

export default {
  name: "EnterValues",
  data() {
    return {
      topP: null,
      botP: null,
      puls: null,
    };
  },
  methods: {
    sendValues() {},
  },
};
</script>
