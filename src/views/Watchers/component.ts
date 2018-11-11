import { Component, Vue, Watch } from 'vue-property-decorator';
import Template from './template.vue';

@Component({
  mixins: [Template],
})
export default class Watchers extends Vue {
  private user: string = '';
  private oldUser: string = '';
  // public mounted() {
  //   this.randomUser();
  // }
  public async randomUser() {
    try {
      // this.oldUser = this.user;
      const data: any = await fetch('https://randomuser.me/api');
      const datajson: any = await data.json();
      const user: any = datajson.results[0];
      this.user = `${user.name.title} ${user.name.first} ${user.name.last}`;
    } catch (e) {
      // Algo ha ido mal
    }
  }
  // Usar Watcher cuando sean realmente necesarios
  // Este Watcher se puede sustituir con la simple linea
  // de arriba "this.oldUser = this.user"
  @Watch('user')
  public onChildChanged(newVal: string, oldVal: string) {
    this.user = newVal;
    this.oldUser = oldVal;
  }
}
