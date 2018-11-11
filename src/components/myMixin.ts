import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MyMixin extends Vue {
  private mixinData: string = 'Mixin Data';
  public mounted() {
    console.log('Mixin init');
    console.log(this.mixinData);
    this.test();
  }

  private test(): void {
    console.log('Test from mixin');
  }
}
