<template>
    <div id="LCBO">
        <table>
      <thead>
        <tr style="border-bottom: 2px solid #333">
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Inventory</th>
        </tr>
        <tr><td colspan="4"><hr></td></tr>
      </thead>
      <tbody>
        <tr v-for="bev in bevs" :key="bev.id">
          <td v-bind:class="getOddRowClass(false)"><img :alt="bev.name" :src="bev.image_thumb_url" /></td>
          <td v-bind:class="getOddRowClass(false)">{{ bev.name }}</td>
          <td v-bind:class="getOddRowClass(false)"><code>${{ centAmountInDollar(bev.price_in_cents) }}</code></td>
          <td v-bind:class="getOddRowClass(true)">
              <span v-if="bev.inventory_count < 50000" style="color:red">{{ bev.inventory_count }}</span>
              <span v-else>{{ bev.inventory_count }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
//import Tbl from "./Tbl.vue";

 export default {
     name: "Lcbo",
    components: {
        //"el-ui-table": Tbl
    },
    data: function() {
        return {
            bevs: {},
            oddRow: false
        }
    },

    created: function() {
        let lcbo = this;
        axios.get("http://lcboapi.com/products", {
            responseType: "json",
        }).then(function(response) {
            lcbo.bevs = response.data;
        }).catch(function() {
            $.ajax({
                url:'http://lcboapi.com/products/',
                dataType:'jsonp'
            }).then(function(data) {
                lcbo.bevs = data.result;
            });
        });
    },

    methods: {
        getBevs: function() {
            let lcbo = this;
            return lcbo.bevs;
        },

        centAmountInDollar: function(amount) {
            amount /= 100;
            //replace(/[\{1,3}/g, "$&,")
            return amount;
        },
        getOddRowClass: function(alternateEO) {
            let lcbo=this;
            let x = lcbo.oddRow;
            if (alternateEO) { lcbo.oddRow = !lcbo.oddRow; }
            return x ? "oddRow" : "evenRow";
        }
    }
}
</script>

<style scoped>
table {
  margin-right: auto;
  margin-left: auto;
  
}

img {
    width: 100px;
    height: auto;
}

td {
    width: 253px;
    /*border-right: 1px solid #7e7e7e;
    border-left:1px solid #7e7e7e;*/
    
}
tr {
    border-top:3px solid rgb(31, 31, 31);
}

tbody{
    font-size: 14pt;
}

th, td {
    padding: 5px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

.oddRow {
    background-color: #f8f8f8;
    border-radius: 5px;
}

.evenRow {
    background-color: #fff;
}



</style>


