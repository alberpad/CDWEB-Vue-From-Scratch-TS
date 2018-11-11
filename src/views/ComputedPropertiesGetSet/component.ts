import { Component, Vue, Prop } from 'vue-property-decorator';
import Template from './template.vue';
import currencyFilter from '@/filters/currency-filter';

@Component({
  mixins: [Template],
  filters: { currencyFilter },
})
export default class ComputedPropertiesGetSet extends Vue {
  private amount: number = 0;

  get amountFormatted(): string {
    return `${this.amount} €`;
  }
  set amountFormatted(newValue: string) {
    this.amount = +newValue;
  }
  get amountUnformatted(): string {
    return this.amount.toString();
  }
}
