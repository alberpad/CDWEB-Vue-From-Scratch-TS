import Vue from 'vue';

// import { Component, Vue } from 'vue-property-decorator';

// @Component({
//   filters: {
//     currencyFilter(value: any) {
//       return `${value}€`;
//     },
//   },
// })
// export default class currencyFilters extends Vue {}
export default Vue.filter(
  'currencyFilter',
  (value: string, currency: string) => {
    return `${value} ${currency}`;
  },
);
