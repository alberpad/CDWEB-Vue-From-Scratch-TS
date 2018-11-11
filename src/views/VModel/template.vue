<template>
  <div>
    <h2>Trabajando con vmodel</h2>
    <!-- v-focus es una directiva creada en el curso -->
    <input type="text" v-model="framework" v-focus/>
    <p>El framework escogido es: {{ framework }}</p>
  </div>
</template>
