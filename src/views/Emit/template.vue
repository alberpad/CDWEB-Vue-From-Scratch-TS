<template>
  <div>
    <h2>Emitir eventos con Vuejs 2</h2>
    <p @click="$emit('showCarBrand', carBrand)">Pulsa para emitir evento a la instancia ROOT de Vue</p>
  </div>
</template>
