import { Component, Vue, Prop } from 'vue-property-decorator';
import Template from './template.vue';

@Component({
  mixins: [Template],
})
export default class Methods extends Vue {
  private name: string = 'Alberto';
  private surname: string = 'Padrón';
  // Propiedad computada (Ojo, hay que usar this)
  get fullName(): string {
    return `${this.name} ${this.surname}`;
  }
  public hello() {
    alert(this.fullName);
  }
}
