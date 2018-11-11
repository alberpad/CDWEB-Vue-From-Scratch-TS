import { Component, Vue, Prop } from "vue-property-decorator";
import Template from "./template.vue";
import changeStyles from "@/directives/change-styles";

@Component({
  mixins: [Template],
  directives: { changeStyles }
})
export default class Props extends Vue {
  @Prop({ type: String, required: true })
  private name!: string;
  @Prop({ type: String, required: true })
  private surname!: string;
  @Prop({
    type: Number,
    required: true,
    validator: value => {
      if (value < 18) {
        console.warn("No eres mayor de edad");
        return false;
      }
      return true;
    }
  })
  private age!: string;
}
