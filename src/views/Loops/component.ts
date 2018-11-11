import { Component, Vue } from 'vue-property-decorator';
import Template from './template.vue';

@Component({
  mixins: [Template],
})
export default class Loops extends Vue {
  private frameworks: object[] = [
    { id: 1, name: 'Vuejs 2' },
    { id: 2, name: 'Reactjs' },
    { id: 3, name: 'Ember' },
    { id: 4, name: 'Adonisjs' },
    { id: 5, name: 'Angular' },
    { id: 6, name: 'Laravel' },
  ];
}
