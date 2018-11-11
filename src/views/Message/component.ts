import { Component, Prop, Vue } from 'vue-property-decorator';
import Template from './template.vue';

// Si no se añade la Template al mixin no se renderizará la página
// Daría error: Template or render function not defined
// Es necesario siempre que se importe la Template añadirla a un mixin
@Component({
  mixins: [Template],
})
export default class Message extends Vue {
  // Data
  private message: string = 'Hola Mundo';
  // // Prop
  // @Prop() private messageProp!: string;
}
