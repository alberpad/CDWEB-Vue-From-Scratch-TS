import { Component, Vue } from 'vue-property-decorator';
import Template from './template.vue';

@Component({
  mixins: [Template],
})
export default class Conditionals extends Vue {
  private age: number = 10;
}
