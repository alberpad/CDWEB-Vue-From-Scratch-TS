<template>
  <div>
    <h2>Componentes dinámicos</h2>
    <button v-for="cmp in components" :key="cmp" @click="changeComponent(cmp)">
      Seleecionar {{cmp}}
    </button>
    <component v-bind:is="currentComponent"/>
  </div>
</template>
