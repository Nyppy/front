<template>
  <v-main>
    <v-container fluid class="doctor-main pt-16">
      <v-row class="doctor-main__content ">
        <v-col class="doctor-main__side">
          <div class="doctor-main__menu">
            <div
              v-for="item in menuItems"
              :key="item.message"
              class="doctor-main__menu-item"
              v-on:click="changewindow(item.message)"
              v-bind:class="{ 'doctor-main__menu-item--active': item.show }"
            >
              <p>
                {{ item.message }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col class="doctor-main__window">
          <div v-if="menuItems[0].show" class="doctor-main__profile">
            <div class="profile__info">
              <img src="../../assets/userpic.png" alt="">
              <div class="profile__name">
                <h3>{{doctor.name}} {{doctor.surname}}</h3>
                <p>{{doctor.specialisation}}</p>
              </div>
            </div>
          </div>
          <div v-if="menuItems[1].show" class="doctor-main__patients">
               <div class="patients__info">
                 <h3>Ваши пациенты:</h3>
                 <h3>{{doctor.patients.length}}</h3>
              </div>
              <div class="patients__items">
                  <div v-for="item in doctor.patients" :key="item.SNILS" class="patients__item">
                    <div class="patients__num">
                      <h4>
                        {{doctor.patients.indexOf(item) + 1 }}
                      </h4>
                    </div>
                    <div class="patients__name">
                      <p>{{item.name}}</p>
                      <p>{{item.surname}}</p>
                    </div>
                  <div class="patients__snils">
                      <p> <b>СНИЛС</b> </p>
                      <p>{{item.SNILS}}</p>
                    </div>
                    <div class="patients__phone">
                      <p> <b>Телефон</b> </p>
                      <p>{{item.number}}</p>
                    </div>
                  </div>
                  
                </div>       
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
// import axios from '@/service/axios';

export default {
  name: "DoctorMain",
  data() {
    return {
      doctor:{
        name: 'Иван',
        surname: 'Иванов',
        specialisation: 'Кардиолог',
        patients: [
          {name: "Сергей", 
           surname: "Сергеев",
           SNILS:"123-456-789 00",
           number:88005553535,
          },
          {name: "Сергей", 
           surname: "Сергеев",
           SNILS:"123-456-789 00",
           number:88005553535,
          },
          {name: "Сергей", 
           surname: "Сергеев",
           SNILS:"123-456-789 00",
           number:88005553535,
          },
          {name: "Сергей", 
           surname: "Сергеев",
           SNILS:"123-456-789 00",
           number:88005553535,
          },
          {name: "Сергей", 
           surname: "Сергеев",
           SNILS:"123-456-789 00",
           number:88005553535,
          },
        ]
      },
      menuItems: [
        { message: "Профиль", show: true },
        { message: "Пациенты", show: false },
        { message: "Выйти", show: false },
        { message: "Добавить пользователя", show: false }
      ],
    };
  },
  methods: {
    changewindow(msg) {
      for (let i = 0; i < this.menuItems.length; i++) {
        if (msg === this.menuItems[i].message) {
          this.menuItems[i].show = true;
        } else {
          this.menuItems[i].show = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.doctor-main{
  width: 100%;
  max-width: 1200px;
  /* height: 500px; */
  --main-bg-color-item: #ffffffcc;
  --main-bg-color-gradient: linear-gradient(45deg, rgba(255, 45, 45, 0.5), rgba(40, 40, 255, 0.5));
}

.doctor-main__content {
  width: 100%;
  height: 100%;
  justify-content: space-between;
}

.doctor-main__side{
  max-width:19%;
  background: var(--main-bg-color-gradient);
  height: 300px;
  border-radius: 5px;
  padding: 10px 5px;
}

.doctor-main__window {
  max-width: 79%;
  background: var(--main-bg-color-gradient);
  height: 100%;
  border-radius: 5px;
  /* padding-top: 10px; */
  padding: 10px 0px 0px 0px;
  min-height: 500px;
}

.doctor-main__menu-item {
  padding: 2px 5px;
  background-color: var(--main-bg-color-item);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
  text-align: center;
  cursor: pointer;
  transition: 0.5s;
}

.doctor-main__menu-item:hover {
  background-color: #ddddddbb;
}

.doctor-main__menu-item--active {
  background-color: #bdbdbdbb;
}

.doctor-main__patients {
  width: 100%;
  /* height: 100%; */
  /* background-color: #ffffff; */
}

.doctor-main__profile {
  width: 100%;

  background-color: var(--main-bg-color-item);
}

.profile__info{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding: 16px 6px;
}

.profile__info img{
  max-width: 50px;
  width: auto;
}

.v-application p {
  margin-bottom: 0px;
}
.profile__name{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.patients__info{
    background-color: var(--main-bg-color-item);
    padding: 16px 9px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}

.patients__items{
  margin: 22px 0px;
}

.patients__item{
  background-color: var(--main-bg-color-item);
  padding: 16px 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 16px;
  margin-bottom: 6px;
  border-radius: 5px;
  cursor: pointer;
}

.patients__name{

}



</style>
