(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55308172"],{"72a0":function(t,n,e){"use strict";e("eb8b")},"9f30":function(t,n,e){"use strict";e.d(n,"f",(function(){return u})),e.d(n,"b",(function(){return r})),e.d(n,"j",(function(){return l})),e.d(n,"a",(function(){return s})),e.d(n,"h",(function(){return f})),e.d(n,"c",(function(){return d})),e.d(n,"i",(function(){return p})),e.d(n,"d",(function(){return h})),e.d(n,"e",(function(){return m})),e.d(n,"g",(function(){return g}));e("d3b7");var i=e("bc3a"),o=e.n(i);function a(t,n){return new Promise((function(e,i){o.a.get(t,{params:n,headers:{token:sessionStorage.getItem("token")}}).then((function(t){e(t.data)})).catch((function(t){i(t.data)}))}))}function c(t,n){return new Promise((function(e,i){o()({method:"post",url:t,data:n}).then((function(t){e(t.data)})).catch((function(t){i(t.data)}))}))}function u(){return new Promise((function(t,n){a("/index/Yimi/getTuList").then((function(n){t(n)})).catch((function(t){n(t)}))}))}function r(t){return new Promise((function(n,e){c("/index/Yimi/delTu?id=".concat(t)).then((function(t){console.log(t),n(t)})).catch((function(t){e(t)}))}))}function l(t){return new Promise((function(n,e){c("/index/upload/uploadimg",{imgurl:t}).then((function(t){console.log(t),n(t)})).catch((function(t){e(t)}))}))}function s(t,n){return new Promise((function(e,i){c("/index/Yimi/addTu",{imgurl:t,type:n}).then((function(t){console.log(t),e(t)})).catch((function(t){i(t)}))}))}function f(t){var n=t.page,e=t.pagelimit;return new Promise((function(t,i){c("/index/Yimi/getOrderList",{page:n,pagelimit:e}).then((function(n){console.log(n),t(n)})).catch((function(t){i(t)}))}))}function d(t){return new Promise((function(n,e){c("/index/Yimi/delOrder?id=".concat(t)).then((function(t){console.log(t),n(t)})).catch((function(t){e(t)}))}))}function p(t){var n=t.page,e=t.pagelimit;return new Promise((function(t,i){c("/index/Yimi/getGoodsList",{page:n,pagelimit:e}).then((function(n){console.log(n),t(n)})).catch((function(t){i(t)}))}))}function h(t){return new Promise((function(n,e){c("/index/Yimi/delGoods?id=".concat(t)).then((function(t){console.log(t),n(t)})).catch((function(t){e(t)}))}))}function m(){return new Promise((function(t,n){a("/index/Yimi/getGoodsList").then((function(n){t(n)})).catch((function(t){n(t)}))}))}function g(t){return new Promise((function(n,e){c("/index/Yimi/addGoods",t).then((function(t){console.log(t),n(t)})).catch((function(t){e(t)}))}))}o.a.defaults.timeout=3e3,o.a.defaults.baseURL="https://testshool.zzgoodqc.cn/index.php",o.a.interceptors.response.use((function(t){if(200==t.status)return t}),(function(t){return Promise.reject(t)}))},d6b9:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{attrs:{id:"addbox"}},[e("input",{staticClass:"inp",attrs:{type:"file"},on:{change:t.handleFileChange}}),e("button",{staticClass:"upload-button",on:{click:t.uploadImage}},[t._v("上传图片")]),e("br"),e("br"),t._v("图片： "),e("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入图片地址"},model:{value:t.input,callback:function(n){t.input=n},expression:"input"}}),t._v(" "),e("el-select",{attrs:{placeholder:"分类--默认是首页"},model:{value:t.title,callback:function(n){t.title=n},expression:"title"}},t._l(t.options,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.addlist}},[t._v("添加图片")])],1),e("div",{attrs:{id:"box"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{label:"图片地址",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("img",{staticStyle:{"margin-left":"10px",width:"50px",height:"50px"},attrs:{src:"https://testshool.zzgoodqc.cn"+t.row.imgurl,alt:""}})]}}])}),e("el-table-column",{attrs:{label:"图片模板",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-popover",{attrs:{trigger:"hover",placement:"top"}},[e("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[e("el-tag",{attrs:{size:"medium"}},[t._v(t._s(n.row.imgurl))])],1)])]}}])}),e("el-table-column",{attrs:{label:"分类",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-popover",{attrs:{trigger:"hover",placement:"top"}},[e("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[e("el-tag",{attrs:{size:"medium"}},[t._v(t._s(1==n.row.type?"首页":2==n.row.type?"分类":3==n.row.type?"服务":"首页"))])],1)])]}}])}),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.dellist(n.$index,n.row)}}},[t._v("删除")])]}}])})],1)],1)])},o=[],a=e("9f30"),c={data:function(){return{type:0,tableData:[],input:"",imageBase64:"",title:"",options:[{value:"1",label:"首页"},{value:"2",label:"分类"},{value:"3",label:"服务"}]}},mounted:function(){this.datalist()},methods:{handleFileChange:function(t){var n=this,e=t.target.files[0],i=new FileReader;i.onload=function(){n.imageBase64=i.result},i.readAsDataURL(e)},uploadImage:function(){var t=this,n=this.imageBase64;Object(a["j"])(n).then((function(n){t.input=n.data.url,console.log(n)})).catch((function(t){console.log(t)}))},datalist:function(){var t=this;Object(a["f"])().then((function(n){t.tableData=n.data.data}))},dellist:function(t,n){var e=this,i=this.tableData[t].id;this.$confirm("此操作将删除选中数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(a["b"])(i).then((function(t){e.datalist(),e.$message({type:"success",message:"删除成功!"})}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},addlist:function(){var t=this,n=this.input,e=this.title;console.log(n,e),Object(a["a"])(n,e).then((function(n){console.log(n),t.datalist(),t.input="",t.title=n.type})).catch((function(t){console.log("请求失败",t.message)}))}}},u=c,r=(e("72a0"),e("2877")),l=Object(r["a"])(u,i,o,!1,null,null,null);n["default"]=l.exports},eb8b:function(t,n,e){}}]);