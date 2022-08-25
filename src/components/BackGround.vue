<template>
  <div class="glide z-0">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide w-full h-100v object-cover first"></li>
        <li class="glide__slide w-full h-100v object-cover second"></li>
        <li class="glide__slide w-full h-100v object-cover third"></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.first {
  background: url("https://images.pexels.com/photos/2083166/pexels-photo-2083166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
  background-size: cover;
}
.second {
  background: url("https://images.pexels.com/photos/2131790/pexels-photo-2131790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
  background-size: cover;
}
.third {
  background: url("https://images.pexels.com/photos/2855113/pexels-photo-2855113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
  background-size: cover;
}
.glide,
.glide__track {
  width: 100% !important;
  margin: 0 !important;
  height: 100vh !important;
}

.glide__slides {
  transform: translate3d(0, 0, 0) !important;
  width: 100% !important;
  margin: 0 !important;
  height: 100vh !important;
}
.glide__slide {
  width: 100%;
  opacity: 0;
  z-index: 0;
  position: absolute;
  margin: 0 !important;
  top: 0;
  left: 0;
  transition: opacity 0.6s ease;
  height: 100vh;
}

.glide__slide.glide__slide--active {
  opacity: 1;
  z-index: 1;
}
</style>
