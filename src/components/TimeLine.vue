<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    color="#70a3fc"
  >
    <v-card>
      <v-toolbar
        dark
        color="#00D17D"
      >
        <v-btn
          icon
          dark
          @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Журнал</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-col
        v-if="!flag_add"
      >
        <v-btn
          color="#FF0020"
          class="mt-4 white--text"
          width="100%"
          type="submit"
          rounded
          @click="addToggle"
        >
          Добавить показания
        </v-btn>
      </v-col>

      <v-col class="pt-0" v-if="flag_add">
        <div class="d-flex justify-space-beetwen">
          <v-text-field
            v-model="up"
            outlined
            placeholder="Верхнее показание"
            rounded
            required
            hide-details
            type="number"
            color="#474D52"
            class="mr-2 mt-4"
          ></v-text-field>

          <v-text-field
            v-model="down"
            outlined
            placeholder="Нижнее показание"
            rounded
            required
            hide-details
            type="number"
            color="#474D52"
            class="ml-2 mt-4"
          ></v-text-field>
        </div>

        <v-text-field
          v-model="info"
          outlined
          placeholder="Жалобы"
          rounded
          required
          hide-details
          type="text"
          color="#474D52"
          class="mt-4"
        ></v-text-field>

        <v-text-field
          v-model="comment"
          outlined
          placeholder="Комментарий"
          rounded
          required
          hide-details
          type="text"
          color="#474D52"
          class="mt-4"
        ></v-text-field>

        <v-btn
          color="#FF0020"
          class="mt-4 white--text"
          width="100%"
          type="submit"
          rounded
          @click="addElem"
        >
          Добавить показания
        </v-btn>

      </v-col>
      
      <v-timeline
        dense
        clipped
      >

        <v-timeline-item
          color="grey"
          icon-color="grey lighten-2"
          small

          v-for="item in data"
          :key="item.id"
        >
          <div class="d-flex justify-space-between align-center">
            <v-col cols="8" class="d-flex flex-column">
              <span style="color: #ff0020;">Показатель: {{item.up}} / {{item.down}}</span>
              <span>{{item.comment}}</span>
            </v-col>
            <v-col
              class="text-right pa-0 pr-8"
              cols="4"
            >
              {{item.time}}
            </v-col>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Timeline',
  data () {
    return {
      notifications: false,
      sound: true,
      widgets: false,

      flag_add: false,

      up: null,
      down: null,
      info: null,
      comment: null,
      time: '11:20',

      data: [
        {
          up: 120,
          down: 80,
          comment: 'Все хорошо',
          info: null,
          time: '20:10'
        },
        {
          up: 120,
          down: 80,
          comment: 'Все хорошо',
          info: null,
          time: '18:10'
        },
        {
          up: 120,
          down: 80,
          comment: 'Все хорошо',
          info: null,
          time: '15:10'
        },
        {
          up: 120,
          down: 80,
          comment: 'Все хорошо',
          info: null,
          time: '11:10'
        },
      ],
    }
  },
  methods: {
    addToggle() {
      this.flag_add = !this.flag_add;
    },
    addElem() {
      this.data.push(
        {
          up: this.up,
          down: this.down,
          comment: this.comment,
          info: this.info,
          time: this.time
        }
      )

      this.up = null;
      this.down = null;
      this.comment = null;
      this.info = null;
      this.time = null;

      this.addToggle()
    }
  },
  computed: {
    dialog: {
      get() {
        return this.$parent.flag_timeline;
      },
      set() {
        this.$parent.flag_timeline = !this.$parent.flag_timeline;
      }
    }
  }
}
</script>

<style>

</style>