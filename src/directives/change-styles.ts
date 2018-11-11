import { DirectiveOptions } from 'vue';

const directive: DirectiveOptions = {
  // inserted(el, node) {
  //     /**
  //      * Using value:
  //      * v-colorDirective={color: ‘red‘, backgroundColor: ‘blue‘}
  //      */
  //     if (node.value) {
  //         el.style.backgroundColor = node.value.backgroundColor;
  //         el.style.color = node.value.color;
  //     }

  //     /**Using modifiers:
  //      * v-colorDirective.color
  //      * v-colorDirective.backgroundColor
  //      */
  //     if (node.modifiers.color){
  //         el.style.color = node.value;
  //     }

  //     if (node.modifiers.backgroundColor) {
  //         el.style.backgroundColor = node.value;
  //     }
  // }
  inserted(el:any, binding:any) {
    el.style.backgroundColor = binding.value.backgroundColor;
    el.style.color = binding.value.color;
  },
};

export default directive;
