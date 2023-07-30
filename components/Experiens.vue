<template>
  <div>
    <h2 class="title">Experiens</h2>
    <!-- 
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label> -->

    <div class="custom-container parent-block">
      <ul class="time-block">
        <li class="time-segment" v-for="item in timeArray" :key="item.year" :style="{ height: item.height }">
          <div class="time-line"></div>
          <div class="time-dot" v-if="item.isVisibleYear">{{ item.year }}</div>
        </li>
      </ul>
      <div class="cards-container">
        <ul class="educations-container">
          <li class="card" :style="{ top: '0', height: '180px' }">
            <h5 class="education-title">
              Ивановский государственный энергетический университет им. В.И.
              Ленина
            </h5>
            <p class="education-speciality">
              Информатики и вычислительной техники, Управление и информатика в
              технических системах
            </p>
          </li>
        </ul>
        <ul class="work-container">
          <li class="card" :style="{ top: 'calc(180px)', height: '260px' }">
            <h5 class="company-title">
              МУ "Управление административными зданиями и транспортом"
            </h5>
            <p class="company-position">Системный администратор</p>
          </li>
          <li class="card" :style="{ top: 'calc(180px + 260px + 5px)', height: '80px' }">
            <h5 class="company-title">VladIT</h5>
            <p class="company-position">FrontEnd разработчик</p>
          </li>
          <li class="card" :style="{
            top: 'calc(180px + 260px + 5px + 80px + 5px)',
            height: '140px',
          }">
            <h5 class="company-title">Involta</h5>
            <p class="company-position">FrontEnd разработчик</p>
          </li>
          <li class="card" :style="{
            top: 'calc(180px + 260px + 5px + 80px + 5px + 140px + 5px)',
            height: '215px',
          }">
            <h5 class="company-title">СО "ЕЭС"</h5>
            <p class="company-position">FrontEnd разработчик</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const timeArray = ref([
  {
    year: 2017,
    height: '100px',
    isVisibleYear: false,
  },
  {
    year: 2018,
    height: '150px',
    isVisibleYear: true,
  },
  {
    year: 2019,
    height: '100px',
    isVisibleYear: true,
  },
  {
    year: 2020,
    height: '150px',
    isVisibleYear: true,
  },
  {
    year: 2021,
    height: '150px',
    isVisibleYear: true,
  },
  {
    year: 2022,
    height: '150px',
    isVisibleYear: true,
  },
  {
    year: 2023,
    height: '90px',
    isVisibleYear: true,
  },
])
</script>


<style lang="scss">
.parent-block {
  position: relative;
  /* display: grid;
	grid-template-columns: auto 3em auto;
	grid-template-rows: repeat(auto-fill, 200px);; */
  /* padding-bottom: 150px; */
}

.time-block {}

.time-segment {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 250px;
}

.time-line {
  width: 20px;
  height: 100%;
  border: 2px solid #fdfdfd;
  border-color: #fdfdfd;
  background-color: #181824;

  .time-segment:first-child & {
    border-top: none;
  }

  .time-segment:last-child & {
    border-bottom: none;
  }
}

.time-dot {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4em;
  height: 4em;
  padding: 0.5em;
  border-radius: 15px;
  border: 2px solid #fdfdfd;
  background-color: #1d1d25;
  font-weight: bold;
  box-shadow: 0 0 0px 4px #181824;
  color: #fdfdfd;
}

.card {
  position: absolute;
  min-width: 35%;
  max-width: 45%;
  padding: 1em 1.5em;
  background-color: #13131d;
  border-radius: 15px;
  color: #fdfdfd;
  transition: transform 0.3s;
  box-shadow: 0 0 0px 2px #181824;
  cursor: pointer;

  &:hover {
    z-index: 6;
    transform: scale(1.065);
  }

  .educations-container & {
    right: calc(50% + 15px);
    transform-origin: center right;

    &:first-child {
      border-radius: 0 0 15px 15px;
      transform-origin: top right;
    }
  }

  .work-container & {
    left: calc(50% + 15px);
    transform-origin: center left;

    &:last-child {
      border-radius: 15px 15px 0 0;
      transform-origin: bottom left;
    }
  }

  .company-title,
  .education-title {
    margin: 0 0 0.5em;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .company-position {
    margin: 0 0 0.5em;
    font-size: 1.1rem;
    font-weight: bold;
  }

  .education-speciality {
    margin-bottom: 0.5em;
    font-size: 1rem;
    font-style: italic;
  }
}



.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #2196F3;
}

input:focus+.slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
