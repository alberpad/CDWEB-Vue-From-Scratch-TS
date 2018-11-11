<template>
  <div class="computed-properties-get-set">
    <h2>Componente Computed Properties Get y Set</h2>
    <input type="text" v-model="amount">
    <h3>{{amountFormatted}}</h3>
    <h3>{{amountUnformatted | currencyFilter('$')}} (Formateado con filter dinámico)</h3>
    <h3>{{amountUnformatted | currencyFilter('EUR')}} (Formateado con filter dinámico)</h3>
  </div>
</template>