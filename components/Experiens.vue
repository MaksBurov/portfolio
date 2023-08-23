<template>
  <div>
    <h2 class="title">Experiens</h2>

    <button @click="() => test(null)">test</button>

    <div class="custom-container parent-block">
      <ul class="time-block">
        <li
          class="time-segment"
          v-for="year in timelineArray"
          :key="year"
          :style="{
            height: `${(dataByYears.get(year)?.heightPerMonth ?? 0.5) * 12}em`,
          }"
          @click="() => test(dataByYears.get(year))"
        >
          <div class="time-line"></div>
          <div class="time-dot">{{ year }}</div>

          <div
            v-for="item in dataByYears.get(year)?.data"
            :key="item.id"
            :class="'card  card--'+item.type"
            :style="getStyles(item)"
          >
            <h5 class="education-title" v-if="!!item.name">
              {{ item.name }}
            </h5>
            <p class="education-speciality">
              {{ item.position }}
            </p>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const data =  [
  {
    id: "educ1",
    type: "education",
    name: "Ивановский государственный энергетический университет им. В.И. Ленина",
    position:
      "Информатики и вычислительной техники, Управление и информатика в технических системах",
    dateStart: "09.2014",
    dateEnd: "08.2018",
  },
  {
    id: "educ2",
    type: "education",
    // name: "School",
    position: "Vue для начинающих",
    dateStart: "11.2020",
    dateEnd: "12.2020",
  },
  {
    id: "work1",
    type: "work",
    name: 'МУ "Управление административными зданиями и транспортом"',
    position: "Системный администратор",
    dateStart: "08.2018",
    dateEnd: "09.2020",
  },
  {
    id: "work2",
    type: "work",
    name: "VladIT",
    position: "FrontEnd разработчик",
    dateStart: "09.2020",
    dateEnd: "01.2021",
  },
  {
    id: "work3",
    type: "work",
    name: "Involta",
    position: "FrontEnd разработчик",
    dateStart: "01.2021",
    dateEnd: "01.2022",
  },
  {
    id: "work4",
    type: "work",
    name: 'СО "ЕЭС"',
    position: "FrontEnd разработчик",
    dateStart: "01.2022",
    dateEnd: "UNTIL_NOW",
  },
];

const timelineArray = ref([]);
let minYear = data[0].dateStart.split(".")[1];
let maxYear = data[0].dateEnd.split(".")[1];

const dataByYears = computed(() => {
  const years = new Map();

  const getHeight = (start, end) => {
    const [monthStart, yearStart] = start.split(".");
    const [monthEnd, yearEnd] = end?.split(".");

    if (yearStart === yearEnd) {
      if (monthEnd - monthStart > 2) return 1;
      if (monthEnd - monthStart === 2) return 1.5;
      return 1.5;
    } else if (yearEnd - yearStart === 1) {
      if (12 - monthStart + +monthEnd > 2) return 1;
      if (12 - monthStart + +monthEnd === 2) return 1.5;
    } else return 0.5;
  };

  for (const ExperiensItem of data) {
    const year = ExperiensItem.dateStart.split(".")[1];

    if (!years.has(year)) {
      years.set(year, {
        heightPerMonth: getHeight(
          ExperiensItem.dateStart,
          ExperiensItem.dateEnd
        ),
        data: [ExperiensItem],
      });

      minYear = Math.min(minYear, +year);
      maxYear = Math.max(maxYear, ExperiensItem.dateEnd !== "UNTIL_NOW" ? +ExperiensItem.dateEnd.split(".")[1] : new Date().getFullYear());
    } else {
      const yearValue = years.get(year);
      const newHeight = getHeight(
        ExperiensItem.dateStart,
        ExperiensItem.dateEnd
      );
      years.set(year, {
        heightPerMonth: Math.max(yearValue.heightPerMonth, newHeight),
        data: [...yearValue.data, ExperiensItem],
      });
    }
    //key
  }

  const tempArr = [];
  for (let n = minYear; n <= maxYear; n++) {
    tempArr.push(n.toString());
  }
  timelineArray.value = tempArr;

  return years;
});

function test(year) {
  console.log("dataByYears", this.dataByYears.get("2018"));
}

function getStyles(data) {
  const styles = {};

  styles.top = `calc(${
    ((data.dateStart.split(".")[0] - 1) / 12) * 100
  }% + 4px)`;

  if (data.type === "education") styles.right = "calc(50% + 20px)";
  else styles.left = "calc(50% + 20px)";

  const [monthStart, yearStart] = data.dateStart.split(".");
  const [monthEnd, yearEnd] = data.dateEnd !== "UNTIL_NOW" ? data.dateEnd.split(".") : [new Date().getMonth().toString(), new Date().getFullYear().toString()];
  console.log(monthEnd, yearEnd)
  let height = 0;

  if (yearStart === yearEnd) {
    height =
      height +
      this.dataByYears.get(yearStart)?.heightPerMonth *
        (monthEnd - monthStart + 1);
  } else {
    for (let year = +yearStart; year <= +yearEnd; year++) {
      if (year === +yearStart) {
        height =
          height +
          this.dataByYears.get(yearStart)?.heightPerMonth *
            (12 - monthStart + 1);
      } else if (year === +yearEnd) {
        height =
          height +
          (this.dataByYears.get(yearEnd)?.heightPerMonth ?? 0.5) * (monthEnd - 1);
      } else {
        height =
          height +
          (this.dataByYears.get(year.toString())?.heightPerMonth ?? 0.5) * 12;
      }
    }
  }

  styles.height = `calc(${height}em - 8px)`;

  return styles;
}
</script>

<style lang="scss">
.parent-block {
  position: relative;
}

.time-block {
}

.time-segment {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
}

.time-line {
  width: 20px;
  height: 100%;
  border: 2px solid var(--color-text-primary);
  background-color: var(--color-bg-primary);

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
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4em;
  height: 4em;
  padding: 0.5em;
  border-radius: 15px;
  border: 2px solid var(--color-text-primary);
  background-color: var(--color-bg-secondary);
  font-weight: bold;
  box-shadow: 0 0 0px 4px var(--color-bg-primary);
  color: var(--color-text-primary);
}

.card {
  position: absolute;
  z-index: 1;
  min-width: 35%;
  max-width: 45%;
  padding: 0.5em 1.5em;
  background-color: var(--color-bg-secondary);
  border-radius: 15px;
  color: var(--color-text-primary);
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    z-index: 6;
    transform: scale(1.065);
  }

  &--education {
    transform-origin: center right;

  }
  &--work {
    transform-origin: center left;
  }


  .company-title,
  .education-title {
    margin: 0 0 0.5em;
    font-size: 1.2rem;
    font-weight: bold;
  }


  .education-speciality {
    margin: 0 0 0.5em;
    font-size: 1rem;
    font-style: italic;
  }
}


.tempContainer {
  position: absolute;
  top: 0;
  z-index: 500;
  width: 50px;
  height: 100%;
}
.tempLine {
  position: absolute;
  width: 50px;
  height: 2px;
  background: red;
}
</style>
