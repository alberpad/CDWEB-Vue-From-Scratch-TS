import { Component, Vue } from 'vue-property-decorator';
import Template from './template.vue';

@Component({
  mixins: [Template],
})
export default class VModelCheckBoxes extends Vue {
  private frameworks: string[] = [];
}
