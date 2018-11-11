import { DirectiveOptions } from 'vue';

const focusDirective: DirectiveOptions = {
  inserted(el) {
    el.focus();
  },
};

export default focusDirective;
