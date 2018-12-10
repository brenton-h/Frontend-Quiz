<template>
  <div id="TBL">
    <!--<el-table id="EL-TBL">
      <el-table-column fixed class="EL-COL">
      </el-table-column>
    </el-table>-->
  </div>
</template>

<script>
import { Table, TableColumn } from 'element-ui';
//import TblRow from "./TblRow.vue";
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import Vue from "vue";
locale.use(lang);
Vue.use(Table);
Vue.use(TableColumn);

  export default {
    components: {
      "el-table": Table,
      "el-table-column": TableColumn
    },
    data() {
      return {
        bevs: this.bevers
      }
    },

    props: ["bevers"]
  }
  

/*
tableData3: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
 */
</script>

<style scoped>
table {
  margin-right: auto;
  margin-left: auto;
  width: 980px;
}
</style>

