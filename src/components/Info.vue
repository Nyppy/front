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
        <v-toolbar-title>Информация</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <h3 class="mt-4 ml-4">Уровень артериального давления</h3>

      <div class="border ml-2 mr-2 pt-2 pb-2 pl-4 pr-4 mt-4 text-left">
        Для оценки уровня артериального давления во всем мире
        используется единая классификация Всемирной Организации Здравоохранения,
        принятая в 1999 году. При неоднократном попадании уровня давления в желтый
        или красный сектор обязательно обратитесь к врачу!
      </div>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left subtitle-1 black--text">
                Верхнее
              </th>
              <th class="text-left subtitle-1 black--text">
                Нижнее
              </th>
              <th class="text-left subtitle-1 black--text">
                Категория
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in desserts"
              :key="item.name"
            >
              <td>
                <v-icon :color="item.color">mdi-checkbox-blank-circle</v-icon>
                {{ item.sys }}
              </td>
              <td>{{ item.dia }}</td>
              <td>{{ item.disease }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <h3 class="mt-4 ml-4">Индекс Альговера</h3>

      <div class="border ml-2 mr-2 pt-2 pb-2 pl-4 pr-4 mt-4 text-left">
        Шоковый индекс Альговера (ШИА)используется для определения объема кровопотери.
        Он вычисляется как отношение частоты пульса (ЧСС) к уровню систолического артериального давления (САД).
        При привышении индекса более 0.7 обязательно обратитесь к врачу!
      </div>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left subtitle-1 black--text">
                Индекс Альговера
              </th>
              <th class="text-left subtitle-1 black--text">
                Категория
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in indexA"
              :key="item.name"
            >
              <td>{{ item.index }}</td>
              <td>{{ item.category }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <v-col>
        <v-btn
          color="#FF0020"
          class="mt-4 white--text"
          width="100%"
          type="submit"
          rounded
        >
          Обратится к врачу
        </v-btn>
      </v-col>

    </v-card>
  </v-dialog>
</template>

<script>
export default {
  sys: 'Info',
  data () {
    return {
      notifications: false,
      sound: true,
      widgets: false,

      desserts: [
        {
          sys: '> 180',
          dia: '> 110',
          category: 'Гипертензия 3 степени',
          color: '#df4d4d'
        },
        {
          sys: '160 - 179',
          dia: '100 - 109',
          category: 'Гипертензия 2 степени',
          color: '#df4d4d'
        },
        {
          sys: '140 - 159',
          dia: '90 - 99',
          category: 'Гипертензия 1 степени',
          color: '#df4d4d'
        },
        {
          sys: '130 - 139',
          dia: '85 - 89',
          category: 'Высокое',
          color: '#a0df88'
        },
        {
          sys: '< 130',
          dia: '< 84',
          category: 'Норма',
          color: '#6fd04a'
        },
        {
          sys: '< 120',
          dia: '< 80',
          category: 'Низкое',
          color: '#6fd04a'
        } 
      ],
      indexA: [
        {
          index: '< 0.7',
          category: 'Норма'
        },
        {
          index: '0.8 - 0.9',
          category: '1-я стадия'
        },
        {
          index: '0.9 - 1.2',
          category: '2-я стадия'
        },
        {
          index: '> 1.3',
          category: '3-я стадия'
        }
      ]
    }
  },
  computed: {
    dialog: {
      get() {
        return this.$parent.flag_info;
      },
      set() {
        this.$parent.flag_info = !this.$parent.flag_info;
      }
    }
  }
}
</script>

<style>
.border {
  border: 1px solid #31383d;
  border-radius: 3px;
}
</style>