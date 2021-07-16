<template>
<div class="container">
   <div class="grid-row">
      <CardHero v-for="(hero, i) in marvel" :key="i" :hero="hero" :class="{ 'is-loading': loading }" />
   </div>
   <div class="grid-column centred">
      <div class="pagination">
         <button @click="prev" :disabled="offset === 0" :loading="loading">prev</button>
         <button @click="next" :disabled="marvel.length !== limit" :loading="loading">next</button>
      </div>
      <div class="grid-item">
         <p class="centred"> Page: {{ page }}</p>
      </div>
   </div>
</div>
</template>
<script>
import CardHero from "../components/CardHero.vue"
export default {
  name: 'Home',
  components: {
    CardHero
  },
  data() {
    return {
      loading: false,
      marvel: [],
      msgError: null,
      limit: 10,
      offset: 0
    }
  },
  computed: {
    page () {
      return this.offset / this.limit + 1
    }
  },
  methods: {
    async getOrganization (limit= 10, offset=0) {
        let url = `/api/getCharacters?limit=${limit}&offset=${offset}`
        let res = await fetch(url)
        if (res.ok) {
            let text = await res.text()
            return {data: JSON.parse(text), status: true}
        } else {
            return  {data: `HTTP error: ${res.status}`, status: false}
        }
    },
    async setData() {
      this.loading = true
      const {data, status} = await this.getOrganization(this.limit, this.offset)
      if (status) {
        this.marvel = data
      } else {
        this.msgError = data
      }
      this.loading = false
    },
    async next() {
      this.offset +=  this.limit
      await this.setData()
    },
    async prev() {
      this.offset -=  this.limit
      await this.setData()
    }
  },
  async created() {
    const {data, status} = await this.getOrganization()
    if (status) {
      this.marvel = data
    } else {
      this.msgError = data
    }
  }
}
</script>
<style lang="scss">
:root {
  --bg-level-1: radial-gradient(circle, rgba(52,10,16,1) 0%, rgba(79,17,17,1) 45%, rgba(52,10,16,1) 100%);
  --darkred: rgb(52,10,16);
  --text-color: #D5E1EF;
  --black: black;
}
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");

body {
  color: var(--text-color);
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  background: var(--darkred);
  background: var(--bg-level-1)
}

.container {
  max-width: 1335px;
  margin: 0 auto;
}

.grid-column {
  display: flex;
  flex-direction: column;
}

.grid-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
.centred {
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
.grid-item {
  height: 320px;
  flex-basis: 20%;
  -ms-flex: auto;
  width: 259px;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
}

.grid-item-wrapper {
  -webkit-box-sizing: initial;
  -moz-box-sizing: initial;
  box-sizing: initial;
  background: var(--black);
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  -webkit-transition: padding 0.15s cubic-bezier(0.4,0,0.2,1), margin 0.15s cubic-bezier(0.4,0,0.2,1), box-shadow 0.15s cubic-bezier(0.4,0,0.2,1);
  transition: padding 0.15s cubic-bezier(0.4,0,0.2,1), margin 0.15s cubic-bezier(0.4,0,0.2,1), box-shadow 0.15s cubic-bezier(0.4,0,0.2,1);
  position: relative;
}

.grid-item-container {
  height: 100%;
  width: 100%;
  position: relative;
}

.grid-image-top {
  height: 80%;
  background: -webkit-gradient(linear,left top, left bottom,from(#007DB8),to(#00447C));
  background: -webkit-linear-gradient(#007DB8,#00447C);
  background: -o-linear-gradient(#007DB8,#00447C);
  background: linear-gradient(#000000, #041d54);
}
.grid-image-top img {
  width: 80%;
  height: 80%;
  padding: 25px;
}

.grid-item-content {
  padding: 12px;
}

.item-title {
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  margin-bottom: 18px;
  display: block;
  text-align: center;
}

.item-category {
  text-transform: uppercase;
  display: block;
  margin-bottom: 20px;
  font-size: 14px;
}

.grid-item:hover .grid-item-wrapper {
  padding: 2% 2%;
  margin: -2% -2%;
}

.pagination button {
  width: 150px;
  height: 37px;
  background: var(--black);
  margin: 0 3px;
  border: 0;
  color: var(--text-color);
  cursor: pointer;
}

.pagination button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

@media(max-width: 1333px) {
  .grid-item {
    flex-basis: 33.33%;
  }
}

@media(max-width: 1073px) {
   .grid-item {
    flex-basis: 33.33%;
  }
}

@media(max-width: 815px) {
  .grid-item {
    flex-basis: 50%;
  }
}

@media(max-width: 555px) {
  .grid-item {
    flex-basis: 100%;
  }
}
</style>