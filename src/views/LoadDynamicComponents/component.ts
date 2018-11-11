import { Component, Vue } from 'vue-property-decorator';
import Template from './template.vue';
import Cmp2 from '@/components/dynamic-components/cmp2.vue';
import Cmp1 from '@/components/dynamic-components/cmp1.vue';
import Cmp3 from '@/components/dynamic-components/cmp3.vue';

@Component({
  components: {
    Cmp1,
    Cmp2,
    Cmp3,
  },
  mixins: [Template],
})
export default class LoadDynamicComponents extends Vue {
  private components: string[] = ['Cmp1', 'Cmp2', 'Cmp3'];
  private currentComponent: string = 'Cmp1';
  public changeComponent(cmp: string) {
    this.currentComponent = cmp;
  }
}
