import { Component, Vue } from 'vue-property-decorator';
import Template from './template.vue';

@Component({
  mixins: [Template],
})
export default class ChildMethods extends Vue {
  private cmpName: string = 'Mensaje desde Child Method Component';
  public showCmpName() {
    return this.cmpName;
  }
}
