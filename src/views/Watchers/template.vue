<template>
  <div>
    <h2>Watchers con Vuejs 2</h2>
    <button @click="randomUser">Obtener usuario</button>
    <p>Nuevo usuario: {{ user }}</p>
    <p>Antiguo usuario: {{ oldUser }}</p>
  </div>
</template>
