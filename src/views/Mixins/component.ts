import { Vue, Component } from 'vue-property-decorator';
import Template from './template.vue';
import myMixin from '@/components/myMixin';
import focusDirective from '@/directives/focus-directive';
import colorDirective from '@/directives/color-directive';

// myMixin se puede usar en el atributo mixins del Decorador Component, o
// myMixin también se puede usar indicando que MyMixin, el componente actual, hereda de myMixin.
// Si se pone de las dos formas, tendrías dos mixins actuando
@Component({
  mixins: [Template, myMixin],
  directives: {
    focusDirective,
    colorDirective,
  },
})
export default class MyMixin extends Vue {
  private mixinData: String = 'Mixin Data del componente';
  public created() {
    console.log('Componente creado: Cargando myMixin');
  }
  public mounted() {
    console.log('Componente montado: Mixins listos');
  }
}

// OTRA FORMA
// @Component({
//   mixins: [Template],
// })
// export default class MyMixin extends myMixin {
//   public created() {
//     console.log('Usando el Mixin: myMixin');
//   }
// }
