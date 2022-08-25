<template>
    <div class="w-full h-100v absolute z-50 flex flex-col justify-center items-center space-y-4">
        <h1 class="font-Josefin text-4xl lg:text-6xl text-center w-full">Creemos soluciones juntos</h1>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
</template>
<style scoped>
.lds-ellipsis {
  display: flex;
  justify-items: center;
  align-content: center;
  align-items: center;
  padding: 0;
  padding-left: 24px;
  margin: 0;
  position: relative;
  width: 100px;
  height: 100px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: rgb(57, 113, 252);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>