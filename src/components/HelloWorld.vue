<template>
  <div class="hello">
    <h3 class="no-print">老少兩用迷路聯絡卡，可友善列印</h3>
    <div id ="show" class = "print-only">
      <h1>我迷路了</h1>
      <h3>請幫忙聯絡我的主要照顧者</h3>
      <div>我叫：{{myName || '[未命名]'}}</div>
      <div v-show = "isChild">子女手機：
        <span v-show="showNumber">{{childPhone}}</span>
        <img v-show="showQR" :src="'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=' + childPhone + '&choe=UTF-8'"/>
      </div>

      <div v-show="isCare">看顧手機：
        <span v-show="showNumber">{{carePhone}}</span>
        <img v-show="showQR" :src="'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=' + carePhone + '&choe=UTF-8'"/>
      </div>

      <div v-show = "isMama">媽媽手機：
        <span v-show="showNumber">{{mamaPhone}}</span>
        <img v-show="showQR" :src="'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=' + mamaPhone + '&choe=UTF-8'"/>
      </div>

      <div v-show = "isBaba">爸爸手機：
        <span v-show="showNumber">{{babaPhone}}</span>
        <img v-show="showQR" :src="'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=' + babaPhone + '&choe=UTF-8'"/>
      </div>
    </div>
    <div id ="preview" class = "no-print" v-show="preview">
      <h1>我迷路了</h1>
      <h3>請幫忙聯絡我的主要照顧者</h3>
      <div>我叫：{{myName || '[未命名]'}}</div>
      <div v-show = "isChild">子女手機：
        <span v-show="showNumber">{{childPhone}}</span>
        <img v-show="showQR" :src="'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=' + childPhone + '&choe=UTF-8'"/>
      </div>

      <div v-show="isCare">看顧手機：
        <span v-show="showNumber">{{carePhone}}</span>
        <img v-show="showQR" :src="'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=' + carePhone + '&choe=UTF-8'"/>
      </div>

      <div v-show = "isMama">媽媽手機：
        <span v-show="showNumber">{{mamaPhone}}</span>
        <img v-show="showQR" :src="'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=' + mamaPhone + '&choe=UTF-8'"/>
      </div>

      <div v-show = "isBaba">爸爸手機：
        <span v-show="showNumber">{{babaPhone}}</span>
        <img v-show="showQR" :src="'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=' + babaPhone + '&choe=UTF-8'"/>
      </div>
    </div>
    <div id ="main" class = "no-print">
      <div id = "config">
        主要照顧者：
        <input type="checkbox" name="isChild" v-model = "isChild"/>子女
        <input type="checkbox" name="isCare" v-model = "isCare"/>看護
        <input type="checkbox" name="isMama" v-model = "isMama"/>媽媽
        <input type="checkbox" name="isBaba" v-model = "isBaba"/>爸爸
      </div>
      <div id = "config2">
        顯示：
        <input type="checkbox" name="showNumber" v-model = "showNumber"/>手機號碼
        <input type="checkbox" name="showQR" v-model = "showQR" />QR碼
      </div>
      <div id = "config2">
        <input type="checkbox" name="preview" v-model = "preview"/>顯示預覽
      </div>
      <input class = "block" type="text" name="name" v-model="myName" autofocus="" v-autofocus placeholder="請輸入當事人的稱呼">
      <input v-show="isChild" class = "block" type="text" name="childPhone" v-model="childPhone" placeholder="請輸入子女的手機號碼" />
      <input v-show="isCare" class = "block" type="text" name="carePhone" v-model="carePhone" placeholder="請輸入看護的手機號碼" />
      <input v-show="isMama" class = "block" type="text" name="babaphone" v-model="mamaPhone" placeholder="請輸入媽媽的手機號碼" />
      <input v-show="isBaba" class = "block" type="text" name="babaphone" v-model="babaPhone" placeholder="請輸入爸爸的手機號碼" />
    </div>
    <a class = "button3" onclick="window.print()">友善列印</a>
    <footer id="foot" class="no-print">
      <a href="http://www.github.com/bestian/imlost" target="_blank">原始碼 on Github</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      myName: undefined,
      isBaba: false,
      isMama: false,
      isChild: false,
      isCare: false,
      babaPhone: '',
      mamaPhone: '',
      childPhone: '',
      carePhone: '',
      showNumber: true,
      showQR: false,
      preview: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#foot {
  position: fixed;
  bottom: 0;
  right:0 ;
  padding: 1em;
}

#foot a {
  padding: .2em .4em;
  text-decoration: none;
  background-color: #ccccff;
  border-radius: 5px;
}

.block {
  display: block;
  margin: 1em auto;
}

.print-only {
  visibility: hidden;
  display: none;
}

input {
  font-size: 20px;
  border: 2px solid green;
  border-radius: 5px;
  margin: 1em 0;
  padding: .2em;
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
  font-size: 20px;
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

#show, #preview {
  border-radius: 15px;
  border: 3px dotted black;
  width: 62%;
  margin: 0 auto;
  padding: 1em;
  font-size: 24px;
}

</style>
