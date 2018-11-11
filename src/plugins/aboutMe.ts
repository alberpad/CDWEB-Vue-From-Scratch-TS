import _Vue from "vue";

export default function AboutMePlugin<AboutMePluginOptions>(
  Vue: typeof _Vue,
  options?: any
): void {
  const { job } = options;
  Vue.prototype.$me = (name: string, age: number) => {
    return `Mi nombre es ${name}, tengo ${age} años y trabajo de ${job}`;
  };
}
