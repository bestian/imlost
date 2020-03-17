<template>
  <div class="hello">
    <h1>我走失了</h1>
    <h3>請幫忙聯絡我的爸爸媽媽</h3>
    <div id ="main" class = "no-print">
      <input class = "no-print" type="text" name="name" v-model="myName" placeholder="請輸入孩子的稱呼">
      <br>
      <input class = "no-print" type="text" name="babaphone" v-model="babaPhone" placeholder="請輸入爸爸的手機號碼" />
      <br>
      <input class = "no-print" type="text" name="babaphone" v-model="mamaPhone" placeholder="請輸入媽媽的手機號碼" />
    </div>
    <div id ="show" class = "print-only">
      <div>我叫：{{myName}}</div>
      <div>爸爸手機： {{babaPhone}}</div>
      <div>媽媽手機：{{mamaPhone}}</div>
    </div>
    <a class = "button3" onclick="window.print()">友善列印</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      myName: null,
      babaphone: '',
      mamaPhone: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.print-only {
  visibility: hidden;
  display: none;
}

input {
  font-size: 20px;
  border: 2px solid green;
  border-radius: 5px;
  margin: 1em 0;
}

@media print {
  .no-print {
    visibility: hidden;
  }
  .print-only {
    visibility: visible;
    display: block;
  }
}

a.button3 {
  display:inline-block;
  padding:0.3em 1.2em;
  margin:0 0.3em 0.3em 0;
  border-radius:2em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color:#FFFFFF;
  background-color:#2ea5e1;
  text-align:center;
transition: all 0.2s;
}

a.button3:hover {
  background-color:#4095c6;
}

</style>
