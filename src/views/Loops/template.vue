<template>
  <div>
    <h2>Bucles con v-for</h2>
    <!-- Práctica recomendada: Comprobar si el array tiene elementos -->
    <ul v-if="frameworks.length">
      <!-- Práctica recomendada: añadir siempre la variable key para unicidad de datos -->
      <li v-for="framework in frameworks" :key="framework.id">
        {{framework.name}}
      </li>
    </ul>
    <!-- Bucle for en tabla y accediendo al indice de frameworks -->
    <table v-if="frameworks.length" style="width:100%">
      <tr>
        <th>ID</th>
        <th>Framework</th> 
      </tr>
      <tr v-for="(framework, index) in frameworks" :key="framework.id">
        <th>{{index}}</th>
        <th>{{framework.name}}</th>
      </tr>
    </table>
  </div>
</template>
