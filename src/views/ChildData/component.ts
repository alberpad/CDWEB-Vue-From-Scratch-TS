import { Component, Vue } from 'vue-property-decorator';
import Template from './template.vue';

@Component({
  mixins: [Template],
})
export default class ChildData extends Vue {
  private cmpName: string = 'Mensaje desde Child Data Component';
}
