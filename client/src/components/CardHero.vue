<template>
    <div class="grid-item">
      <div class="grid-item-wrapper">
          <div class="grid-item-container">
            <div class="grid-image-top ">
              <img :src="`${hero.img.path}.${hero.img.extension}`"/>
            </div>
            <div class="grid-item-content">
                <span class="item-title">{{ hero.name }}</span>
            </div>
          </div>
      </div>
    </div>
</template>
<script>

export default {
  name: 'CardHero',
  props: ['hero'],
}
</script>
<style>
.is-loading img, .is-loading .item-title {
    display: none;
}
.is-loading .grid-image-top {
	background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
	border-radius: 5px;
	background-size: 200% 100%;
	animation: 1.5s shine linear infinite;
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
 
</style>
