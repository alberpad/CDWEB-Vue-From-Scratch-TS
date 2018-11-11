<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hr>
    <Message v-changeStyles="{backgroundColor: 'red', color:'white'}"/>
    <hr>
    <ComputedProperties/>
    <hr>
    <Methods/>
    <hr>
    <VModel/>
    <hr>
    <VModelCheckBoxes/>
    <hr>
    <Emit @showCarBrand="showCarBrandFromEmitCmp"/>
    <hr>
    <ParentData/>
    <hr>
    <ChildData ref="childData"/>
    <p>{{cmpChildName}}</p>
    <hr>
    <ChildMethods ref="childMethod"/>
    <p>{{cmpChildMethod}}</p>
    <hr>
    <LoginForm/>
    <hr>
    <Loops/>
    <hr>
    <Conditionals/>
    <hr>
    <VueSlots>
      <p>Contenido del slot sin nombre (para el cuerpo)</p>
      <template slot="header">
        <h3>Header del layout con Slots</h3>
      </template>
      <template slot="footer">
        <p>Footer del layout con Slots</p>
      </template>
    </VueSlots>
    <hr>
    <Watchers/>
    <hr>
    <ComputedPropertiesGetSet/>
    <hr>
    <LoadDynamicComponents/>
    <hr>
    <MyMixin/>
    <hr>
    <!-- Para pasar un número hay que poner : -->
    <!-- Recordar que los : indican a vue que es una variable -->
    <Props name="Alberto" surname="Padron" :age="17"></Props>
    <hr>
  </div>
</template>

<script lang="ts">
// Directivas {
import changeStyles from '@/directives/change-styles';
// } Directivas

// Componentes {
import { Component, Vue } from 'vue-property-decorator';
import Message from '@/views/Message/component';
import ComputedProperties from '@/views/ComputedProperties/component';
import Methods from '@/views/Methods/component';
import VModel from '@/views/VModel/component';
import VModelCheckBoxes from '@/views/VModelCheckBoxes/component';
import Emit from '@/views/Emit/component';
import ParentData from '@/views/ParentData/component';
import ChildData from '@/views/ChildData/component';
import ChildMethods from '@/views/ChildMethods/component';
import LoginForm from '@/views/LoginForm/component';
import Loops from '@/views/Loops/component';
import Conditionals from '@/views/Conditionals/component';
import VueSlots from '@/views/VueSlots/component';
import Watchers from '@/views/Watchers/component';
import ComputedPropertiesGetSet from '@/views/ComputedPropertiesGetSet/component';
import Cmp1 from '@/components/dynamic-components/cmp1.vue';
import Cmp2 from '@/components/dynamic-components/cmp2.vue';
import Cmp3 from '@/components/dynamic-components/cmp3.vue';
import LoadDynamicComponents from '@/views/LoadDynamicComponents/component';
import MyMixin from '@/views/Mixins/component';
import Props from '@/views/Props/component';
import AboutMePlugin from '@/plugins/aboutMe';
// } Componentes

// Plugin use AboutMePlugin {
Vue.use(AboutMePlugin, {
  job: 'programador e instructor'
})
declare module 'vue/types/vue' {
  interface Vue {
    $me: Function;
  }
}
// } Plugin use AboutMePlugin

@Component({
  components: {
    Message,
    ComputedProperties,
    Methods,
    VModel,
    VModelCheckBoxes,
    Emit,
    ParentData,
    ChildData,
    ChildMethods,
    LoginForm,
    Loops,
    Conditionals,
    VueSlots,
    Watchers,
    ComputedPropertiesGetSet,
    LoadDynamicComponents,
    MyMixin,
    Props
  },
  directives: {
    changeStyles
  }
})
export default class App extends Vue {
  private appName: string = 'Iniciando con Vuejs 2';
  private cmpChildName: string = '';
  private cmpChildMethod: string = '';

  mounted(){
    // @ts-ignore
    this.cmpChildName = this.$refs.childData.cmpName;
    // @ts-ignore
    this.cmpChildMethod = this.$refs.childMethod.showCmpName();

    console.log(this.$me('Israel', 37));;
  }

  public showCarBrandFromEmitCmp(carBrand: string): void {
    alert(carBrand);
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
  margin-left: 40px;
}
</style>
