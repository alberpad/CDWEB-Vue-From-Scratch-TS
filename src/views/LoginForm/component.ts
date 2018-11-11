import { Component, Vue } from 'vue-property-decorator';
import Template from './template.vue';
import { User } from '@/store/types';

@Component({
  mixins: [Template],
})
export default class LoginForm extends Vue {
  private logged: boolean = false;
  private user: User = new User();
  public login() {
    this.logged =
      this.user.email === 'test@m.com' && this.user.password === '1234';
  }
}
