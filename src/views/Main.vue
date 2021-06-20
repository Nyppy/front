<template>
  <div class="bg-gray">
    <v-container fluid>
      <Header/>

      <v-col
        class="pa-0 mt-2"
      >
        <v-card
          elevation="2"
          class="pa-2"
          color="#fff"
        >
          <div class="mb-4 color-gray">
            <v-icon color="#2cab2c">mdi-chart-areaspline-variant</v-icon>
            График показаний
          </div>

          <div class="d-flex justify-space-between">
            <v-icon
              color="#FF0020"
              size="120"
            >
              mdi-cards-heart
            </v-icon>

            <v-sparkline
              :value="middleCountData.test"
              :labels="labels"
              color="#31383D"
              padding="24"
              height="120px"
              label-size="20"
              stroke-linecap="round"
              smooth
            ></v-sparkline>
          </div>
        </v-card>
      </v-col>

      <div class="d-flex justify-space-between mt-4">
        <v-col
          class="pa-0 pr-2"
          cols="6"
        >
          <v-card
            elevation="2"
            class="pa-2 d-flex justify-space-between flex-column"
            height="200px"
          > 
            <h4 class="color-gray pa-0">
              <v-icon color="#2cab2c">mdi-information</v-icon>
              Индекс Альговера
            </h4>

            <div class="text-center mt-4 mb-4 circle ma-auto">
              {{indexA}}
            </div>

            <span class="text-center">{{indexAText}}</span>
          </v-card>
        </v-col>

        <v-col
          class="pa-0 pl-2"
          cols="6"
        >
          <v-card
            elevation="2"
            class="pa-2 d-flex justify-space-between flex-column"
            height="200px"
          > 
            <h4 class="color-gray pa-0">
              <v-icon color="#2cab2c">mdi-comment</v-icon>
              Показания
            </h4>

            <div class="text-center mt-4 mb-4 circle ma-auto">
              {{data.up}} / {{data.down}}
            </div>

            <span class="text-center">{{status}}</span>
          </v-card>
        </v-col>
      </div>

        <v-col
          class="pa-0 mt-4"
        >
        <v-card
          elevation="2"
          class="pa-2 d-flex justify-space-between flex-column"
          min-height="100px"
        > 
          <h4 class="color-gray pa-0">
            <v-icon color="#2cab2c">mdi-pill</v-icon>
            Лекарства
          </h4>

          <PillData
            name="Таблетка 1"
            count="1 штука"
            time="Утром"
          />

          <PillData
            name="Таблетка 2"
            count="1 штука"
            time="Утром"
          />

          <PillData
            name="Таблетка 3"
            count="1 штука"
            time="Вечером"
          />
        </v-card>
      </v-col>

      <v-bottom-navigation
        :value="value"
        color="primary"
        absolute
        class="d-flex justify-space-between"
      >
        <v-btn>
          <h4 class="subtitle-1">Главная</h4>

          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn @click="toggleTimelineModal">
          <h4 class="subtitle-1">Журнал</h4>

          <v-icon>mdi-book-open-variant</v-icon>
        </v-btn>

        <v-btn>
          <h4 class="subtitle-1">Сообщения</h4>

          <v-icon>mdi-doctor</v-icon>
        </v-btn>

        <v-btn @click="toggleInfoModal">
          <h4 class="subtitle-1">Информация</h4>

          <v-icon>mdi-information-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-container>

    <Timeline
      v-if="flag_timeline"
    />

    <Info
      v-if="flag_info"
    />
  </div>
</template>

<script>
// import axios from '@/service/axios';
import Header from '@/components/Header.vue';

import Timeline from '@/components/TimeLine.vue';
import Info from '@/components/Info.vue';

import PillData from '@/components/PillData.vue';

export default {
  name: 'Login',
  data() {
    return {
      value: 1,
      labels: [
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб',
        'Вс'
      ],
      value: [
        1,2,10,2,5,0,7
      ],
      flag_timeline: false,
      flag_info: false,
      data: {
        up: 120,
        down: 80
      },
      temp_user_data: [
        {
          up: 122,
          down: 85
        },
        {
          up: 130,
          down: 80
        },
        {
          up: 100,
          down: 98
        },
        {
          up: 120,
          down: 90
        },
        {
          up: 120,
          down: 90
        },
        {
          up: 120,
          down: 90
        }
      ]
    }
  },
  components: {
    Header,
    Timeline,
    Info,
    PillData
  },
  computed: {
    middleCountData() {
      let up = [];
      let down = [];
      let test = [];

      for(let el of this.temp_user_data) {
        up.push(el.up);
        down.push(el.down);
        test.push(el.up / el.down)
      }

      return {
        up,
        down,
        test
      };
    },
    indexA() {
      return  (this.data.down / this.data.up).toFixed(1);
    },
    indexAText() {
      const data = this.indexA;

      if (data <= 0.7) {
        return 'Норма';
      } else if (data >= 0.8 && data <= 0.9) {
        return '1-я стадия';
      } else if (data >= 0.9 && data <= 1.2) {
        return '2-я стадия';
      } else if (data >= 1.3) {
        return '3-я стадия';
      }
    },
    status() {
      const data = this.data;

      if (data.up > 180 && data.down > 110) {
        return 'Гипертензия 3 степени';
      } else if ((data.up >= 160 && data.up <= 179) && (data.down >= 100 && data.down <= 109)) {
        return 'Гипертензия 2 степени';
      } else if ((data.up >= 160 && data.up <= 179) && (data.down >= 100 && data.down <= 109)) {
        return 'Гипертензия 2 степени';
      } else if ((data.up >= 140 && data.up <= 159) && (data.down >= 90 && data.down <= 99)) {
        return 'Гипертензия 1 степени';
      } else if ((data.up >= 139 && data.up <= 130) && (data.down >= 89 && data.down <= 85)) {
        return 'Высокое';
      } else if (data.up <= 130 && data.down <= 84) {
        return 'Норма';
      } else if (data.up <= 120 && data.down <= 80) {
        return 'Низкое';
      }  
    },
  },
  methods: {
    toggleTimelineModal() {
      this.flag_timeline = !this.flag_timeline;
    },
    toggleInfoModal() {
      this.flag_info = !this.flag_info;
    },
    average(items) {
      let sum = 0;
      let count = items.length;

      for (i=0; i<count; i++) {
        sum += items[i];
      }
      return sum/count;
    }
  }
}
</script>

<style scoped>
.border-white {
  border-radius: 4px;
}
.bg-image {
  height: 168px;
  border-radius: 4px;
  background-image: url('../assets/User.png');
  background-position: 20px 28px;
  background-size: 76%;
}
.color-text {
  color: #FF0020;
}
.bg-gray {
  background: #E5E5E5;
  height: 100vh;
}
.color-gray {
  color: #31383D;
}
.circle {
  width: 100px;
  height: 100px;
  border: 3px solid #FF0020;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  color: #31383D;

  border-bottom-left-radius: 100px !important;
  border-bottom-right-radius: 100px !important;
}
</style>