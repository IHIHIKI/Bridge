(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aeca8bc2"],{"00fc":function(t,s,n){var r=n("1552");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var e=n("499e").default;e("8e94ef54",r,!0,{sourceMap:!1,shadowMode:!1})},1552:function(t,s,n){s=t.exports=n("2350")(!1),s.push([t.i,".enter-password[data-v-37c8cbf2]{max-width:400px;width:calc(100% - 80px);margin:0 auto}.enter-password .sub-title[data-v-37c8cbf2]{margin-top:10px}",""])},"3b54":function(t,s,n){"use strict";var r=n("00fc"),e=n.n(r);e.a},cf27:function(t,s,n){"use strict";n.r(s);var r=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"enter-password transfer"},[t.confirm?t._e():n("section",{staticClass:"popup-content"},[t._m(0),n("figure",{staticClass:"sub-title"},[t._v("Your password is used to keep your data safe. Only you can access it.")]),n("br"),n("br"),n("figure",{staticClass:"line"}),n("br"),n("br"),n("Input",{staticStyle:{"margin-bottom":"0"},attrs:{big:"1",text:t.password,type:"password"},on:{changed:function(s){return t.password=s}}})],1),t.confirm?n("section",{staticClass:"popup-content"},[t._m(1),n("figure",{staticClass:"sub-title"},[t._v("Your personal information never leaves your device, and this password helps keep it safe.")]),n("br"),n("br"),n("figure",{staticClass:"line"}),n("br"),n("br"),n("Input",{attrs:{big:"1",label:"Password",text:t.password,type:"password"},on:{changed:function(s){return t.password=s}}}),n("Input",{staticStyle:{"margin-bottom":"0"},attrs:{label:"Confirm your Password",text:t.confirmPassword,type:"password"},on:{changed:function(s){return t.confirmPassword=s}}})],1):t._e(),n("section",{staticClass:"popup-buttons"},[n("Button",{attrs:{text:"Cancel"},nativeOn:{click:function(s){return function(){return t.closer(null)}()}}}),n("Button",{attrs:{primary:"1",text:"Continue"},nativeOn:{click:function(s){return t.checkAndReturn(s)}}})],1)])},e=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("figure",{staticClass:"title"},[t._v("Enter your "),n("span",[t._v("password")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("figure",{staticClass:"title",staticStyle:{"margin-bottom":"10px"}},[t._v("Enter a "),n("span",[t._v("password")])])}],a=(n("f289"),n("4b59")),o=n("21f8"),i={props:["popin","closer"],data:function(){return{password:"",confirmPassword:""}},created:function(){},computed:{confirm:function(){return this.popin.data.props.confirm}},methods:{checkAndReturn:function(){if(this.password.length)return this.confirm&&this.confirmPassword!==this.password?o["a"].push(a["a"].snackbar("Password confirmation does not match.")):this.closer(this.password)}}},c=i,u=(n("3b54"),n("2877")),p=Object(u["a"])(c,r,e,!1,null,"37c8cbf2",null);s["default"]=p.exports}}]);