import { Component, Vue } from 'vue-property-decorator';
import Template from './template.vue';
import focus from '@/directives/focus-directive';

@Component({
  mixins: [Template],
  directives: { focus },
})
export default class VModel extends Vue {
  private framework: string = 'Vuejs 2';
}
