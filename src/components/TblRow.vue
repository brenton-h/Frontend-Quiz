<template>
    <tr>
    <td is=el-table-column>
    </td>
    </tr>
</template>

<script>
import { TableColumn } from 'element-ui';
import Vue from "vue";
Vue.use(TableColumn);

  export default {
    components: {
      "el-table-column": TableColumn
    },
    data() {
      return {
      }
    }
  }

</script>