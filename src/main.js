import Vue from 'vue';
import { Table, TableColumn } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
//import Tbl from "./components/Tbl.vue"

Vue.use(Table);
//Vue.component("el-ui-table", Tbl);
Vue.component("el-table", Table);
Vue.component("el-table-column", TableColumn);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
