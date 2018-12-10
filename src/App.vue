<template>
  <div id="app">
    <img alt="lcbo logo" src="./assets/lcbo.png"  />
    <p>
      Please browse the LCBO selection.<br />
      items that have a low stock (less than 50K) will appear red.
    </p>
    <br/><br/>
    <Lcbo/>
    <hr style="border: 1px solid #222">
    <h6>Created by Brenton Hauth - brentonh@rogers.com</h6>
    <table style="font-size: 11pt; margin-right:auto;margin-left:auto">
      <thead><tr><th colspan=2>Contact Information</th></tr></thead>
      <tbody>
        <tr>
          <td>Email</td>
          <td>brentonh@rogers.com</td>
        </tr>
        <tr>
          <td>Skype ID</td>
          <td>brentonh@rogers.com</td>
        </tr>
        <tr>
          <td>Skype Name</td>
          <td>brentonh_8</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
import Lcbo from './components/Lcbo.vue'
//import Tbl from './components/Tbl.vue'

export default {
  name: 'app',
  components: {
    Lcbo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  border-radius: 3px;
}

img[alt="lcbo logo"] {
  width: 300px;
  height: auto;
}
</style>
