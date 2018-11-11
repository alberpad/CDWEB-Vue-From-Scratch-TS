import { Component, Vue } from 'vue-property-decorator';
import Template from './template.vue';

@Component({
  mixins: [Template],
})
export default class Emit extends Vue {
  private carBrand: string = 'Toyota';
}
