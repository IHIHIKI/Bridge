(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b37d358","chunk-c12f74b8"],{"0c7b":function(e,t,a){"use strict";a.d(t,"a",function(){return y});a("7514"),a("96cf");var n=a("3b8d"),r=a("d225"),i=a("b0b4"),o=a("20cb"),s=a.n(o),c=a("17e3"),u=a("21f8"),d=a("4b59"),l=a("07a4"),p=a("6348"),b=a("1a6b"),m=(a("4815"),a("6d42")),f=a.n(m),h=a("e65a"),x=a.n(h),g=a("28b9"),v=a.n(g),y=function(){function e(){Object(r["a"])(this,e)}return Object(i["a"])(e,null,[{key:"createAccount",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(a,n){var r,i,o,l,b,m,h=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r=h.length>2&&void 0!==h[2]?h[2]:null,a){t.next=3;break}return t.abrupt("return",u["a"].push(d["a"].snackbar("There was an error loading your wallet (no keypair)")));case 3:if(!a.blockchains[0]!==c["Blockchains"].EOSIO){t.next=5;break}return t.abrupt("return",u["a"].push(d["a"].snackbar("There was an error loading your wallet (wrong enabled blockchain on keypair)")));case 5:if(s.a.plugin(c["Blockchains"].EOSIO).isEndorsedNetwork(n)){t.next=7;break}return t.abrupt("return",u["a"].push(d["a"].snackbar("Can only create an account on EOS Mainnet")));case 7:return i=n.systemToken(),t.next=10,p["a"].getRandomName();case 10:if(o=t.sent,l=a.publicKeys.find(function(e){return e.blockchain===c["Blockchains"].EOSIO}).key,l){t.next=14;break}return t.abrupt("return",u["a"].push(d["a"].snackbar("There was an error loading your wallet (no public key)")));case 14:return t.next=16,e.createFromCard(i,r,a,o,l);case 16:if(b=t.sent,!b){t.next=22;break}return m=f.a.fromJson({keypairUnique:a.unique(),networkUnique:n.unique(),publicKey:l,name:o,authority:"active"}),t.next=21,x.a.addAccount(m);case 21:v.a.loadBalancesFor(m);case 22:return t.abrupt("return",b);case 23:case"end":return t.stop()}},t)}));function a(e,a){return t.apply(this,arguments)}return a}()},{key:"createFromCard",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,a,r,i,o){var s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=l["a"].state.scatter.keychain.identities[0].personal.email,e.next=3,u["a"].push(d["a"].moonpay(t,a,"makeaccounts","".concat(o,",").concat(i),s,i));case 3:return e.sent,c=function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,a,r=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:0,!(t>120)){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,b["a"].checkStatus(i);case 5:if(a=e.sent,a&&a.length){e.next=10;break}u["a"].push(d["a"].snackbar("We couldn't verify the purchase automatically, please check your email.")),e.next=26;break;case 10:if(a=a[0],"completed"!==a.status){e.next=18;break}return e.next=14,b["a"].removeHook(a.unique);case 14:return u["a"].push(d["a"].snackbar("Funds loaded!")),e.abrupt("return",!0);case 18:if("failed"!==a.status){e.next=25;break}return e.next=21,b["a"].removeHook(a.unique);case 21:return u["a"].push(d["a"].snackbar("There was an issue loading your funds.")),e.abrupt("return",!1);case 25:return e.abrupt("return",new Promise(function(e){return setTimeout(Object(n["a"])(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.t0=e,a.next=3,c(t++);case 3:return a.t1=a.sent,a.abrupt("return",(0,a.t0)(a.t1));case 5:case"end":return a.stop()}},a)})),500)}));case 26:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),e.abrupt("return",c());case 6:case"end":return e.stop()}},e)}));function t(t,a,n,r,i){return e.apply(this,arguments)}return t}()}]),e}()},"6a2f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"onboarding"},[e.state!==e.STATES.GET_STARTED?a("figure",{staticClass:"back",on:{click:e.back}},[a("Button",{attrs:{icon:"fas fa-chevron-left",text:"Back"}})],1):e._e(),a("section",{directives:[{name:"show",rawName:"v-show",value:e.state===e.STATES.GET_STARTED,expression:"state === STATES.GET_STARTED"}],staticClass:"page"},[a("section",[e._m(0),a("figure",{staticClass:"title"},[e._v("Welcome to Scatter!")]),a("figure",{staticClass:"sub-title"},[e._v("It's exciting to embark on a new adventure, but before anything let’s build an online identity that truly belongs to you and only you.")]),a("Button",{attrs:{text:"Get Started",primary:"1"},nativeOn:{click:function(t){e.state=e.STATES.MANAGE_KEYS}}})],1)]),a("section",{directives:[{name:"show",rawName:"v-show",value:e.state===e.STATES.MANAGE_KEYS,expression:"state === STATES.MANAGE_KEYS"}],staticClass:"page"},[a("section",[e._m(1),a("figure",{staticClass:"title"},[e._v("First things first, security.")]),e._m(2),a("Button",{staticStyle:{"margin-left":"5px"},attrs:{primary:"1",text:"Generate secure keys"},nativeOn:{click:function(t){return e.generateKeys(t)}}})],1)]),a("section",{directives:[{name:"show",rawName:"v-show",value:e.state===e.STATES.EXPORT_PHRASE,expression:"state === STATES.EXPORT_PHRASE"}],staticClass:"page"},[a("section",[e._m(3),e._m(4),a("br"),e.mnemonic?a("ExportMnemonic",{attrs:{embedded:e.mnemonic}}):e._e(),a("Button",{attrs:{primary:"1",text:"I promise I wrote them down!"},nativeOn:{click:function(t){return e.skip(t)}}})],1)]),a("section",{directives:[{name:"show",rawName:"v-show",value:e.state===e.STATES.NAME_YOURSELF,expression:"state === STATES.NAME_YOURSELF"}],staticClass:"page"},[a("section",[e._m(5),a("figure",{staticClass:"title"},[e._v("What do you want to be called?")]),a("figure",{staticClass:"sub-title"},[e._v("You can be who-ever you want to be in this digital world we live in. Be yourself, or re-invent yourself.")]),a("section",{staticClass:"onboarder-input"},[a("figure",{staticClass:"input-holder"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.identityName,expression:"identityName"}],attrs:{placeholder:"Name yourself"},domProps:{value:e.identityName},on:{input:function(t){t.target.composing||(e.identityName=t.target.value)}}})])]),e.identityName.length&&!e.isValidName?a("section",[e._m(6)]):e._e(),a("Button",{attrs:{disabled:!e.isValidName,text:"Yes, that's totally me",primary:"1"},nativeOn:{click:function(t){return e.setIdentityName(t)}}})],1)]),a("section",{directives:[{name:"show",rawName:"v-show",value:e.state===e.STATES.FUND_ACCOUNT,expression:"state === STATES.FUND_ACCOUNT"}],staticClass:"page"},[a("section",[e._m(7),a("figure",{staticClass:"title"},[e._v("You will need fuel for your journey.")]),a("figure",{staticClass:"sub-title"},[e._v("\n\t\t\t\tLike most things in life, you'll probably need to spend a few dollars here and there to have the maximum amount of fun.\n\t\t\t\tYou can load some funds into your Scatter wallet now to get a head-start.\n\t\t\t")]),a("section",{staticClass:"onboarder-input"},[a("figure",{staticClass:"input-holder normal"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{placeholder:"Enter your email",type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),a("Button",{attrs:{icon:"fal fa-credit-card",text:"Load with credit card",primary:"1"},nativeOn:{click:function(t){return e.loadWallet(t)}}}),a("figure",{staticClass:"alternative-option",on:{click:e.finished}},[e._v("No thanks, I'll do this later")])],1)])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"image"},[a("img",{attrs:{src:"static/assets/love.svg"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"image"},[a("img",{attrs:{src:"static/assets/identity.svg"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("figure",{staticClass:"sub-title"},[e._v("\n\t\t\t\tScatter makes it so you don't ever have to put passwords or credit card information into websites. We do this with the use of "),a("b",[e._v("secure keys")]),e._v(".\n\t\t\t\t"),a("br"),a("br"),e._v("\n\t\t\t\tIf you already have your own keys, you can go to the Settings panel once you have set up Scatter and add them there.\n\t\t\t")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("figure",{staticClass:"title"},[e._v("These are your "),a("u",[e._v("secret")]),e._v(" words.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("figure",{staticClass:"sub-title"},[e._v("\n\t\t\t\tYour secret words will be able to re-generate your "),a("b",[e._v("secure keys")]),e._v(". If you lose your keys you will not be able to access your accounts.\n\t\t\t")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"image"},[a("img",{attrs:{src:"static/assets/panda.svg"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("figure",{staticClass:"sub-title"},[a("b",[e._v("This name is not valid.")]),e._v(" Your name must be between 3 and 56 characters and contain only letters, numbers, and dash (but not as the first or last character).")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"image"},[a("img",{attrs:{src:"static/assets/savings.svg"}})])}],i=(a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("7514"),a("96cf"),a("3b8d")),o=a("bd86"),s=a("21f8"),c=a("4b59"),u=a("aa3c"),d=a("2f62"),l=a("20cb"),p=a.n(l),b=(a("4815"),a("0c7b")),m=a("4de1"),f=a("3efc"),h=a("b16e"),x=a("b72a");function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach(function(t){Object(o["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var y={GET_STARTED:"get_started",MANAGE_KEYS:"manage_keys",EXPORT_PHRASE:"export_phrase",NAME_YOURSELF:"name_yourself",FUND_ACCOUNT:"fund_account"},w={components:{ExportMnemonic:x["default"]},data:function(){return{STATES:y,state:y.GET_STARTED,identity:null,identityName:"",email:"",hasBalance:!1,keys:[],mnemonic:null}},computed:v({},Object(d["d"])(["scatter"]),{isValidName:function(){return m["a"].validName(this.identityName)}}),mounted:function(){f["a"].set(!1),this.identity=this.scatter.keychain.identities[0].clone()},methods:v({back:function(){if(this.state!==y.GET_STARTED)return this.state===y.MANAGE_KEYS?this.state=y.GET_STARTED:this.state===y.EXPORT_PHRASE?this.state=y.MANAGE_KEYS:this.state===y.NAME_YOURSELF?this.state=y.EXPORT_PHRASE:this.state===y.FUND_ACCOUNT?this.state=y.NAME_YOURSELF:void 0},skip:function(){return this.state===y.EXPORT_PHRASE?this.state=y.NAME_YOURSELF:this.state===y.FUND_ACCOUNT?this.state=this.finished():void 0},generateKeys:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.mnemonic){e.next=7;break}return t=this.scatter.clone(),e.next=4,h["a"].generateKeys(t);case 4:return this.mnemonic=e.sent,e.next=7,this[u["SET_SCATTER"]](t);case 7:this.state=y.EXPORT_PHRASE;case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),changeIdentityKey:function(){var e=this;s["a"].push(c["a"].changeIdentityKey(function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(a){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=9;break}return e.identity.privateKey=a.privateKey,e.identity.publicKey=a.publicKey,n=e.scatter.clone(),n.keychain.identities[0]=e.identity.clone(),t.next=7,e[u["SET_SCATTER"]](n);case 7:e.identity=e.scatter.keychain.identities[0].clone(),s["a"].push(c["a"].snackbar("Your identity's key was changed successfully."));case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()))},setIdentityName:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.scatter.clone(),t.keychain.identities[0].name=this.identityName,e.next=4,this[u["SET_SCATTER"]](t);case 4:this.state=y.FUND_ACCOUNT;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadWallet:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(/\S+@\S+\.\S+/.test(this.email)){e.next=2;break}return e.abrupt("return",s["a"].push(c["a"].snackbar("Email is invalid")));case 2:if(t=this.scatter.clone(),t.keychain.identities[0].personal.email=this.email,this[u["SET_SCATTER"]](t),a=this.scatter.keychain.keypairs.find(function(e){return"eos"===e.blockchains[0]}),a){e.next=8;break}return e.abrupt("return",s["a"].push(c["a"].snackbar("There was an error loading your wallet (no keypair)")));case 8:return n=p.a.plugin("eos").getEndorsedNetwork(),e.next=11,b["a"].createAccount(a,n,null);case 11:if(!e.sent){e.next=13;break}this.state=y.NAME_YOURSELF;case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),verify:function(){this.finished()},finished:function(){var e=this.scatter.clone();e.onboarded=!0,this[u["SET_SCATTER"]](e)}},Object(d["b"])([u["SET_SCATTER"]])),watch:Object(o["a"])({},"identityName",function(){this.loadingRidlData=!0;var e=this.identityName.trim();e=e.replace(/ /g,""),this.identityName=e})},k=w,_=(a("bbf8"),a("2877")),E=Object(_["a"])(k,n,r,!1,null,"067d0c3a",null);t["default"]=E.exports},"6a42":function(e,t,a){var n=a("c14e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("499e").default;r("2a1cac22",n,!0,{sourceMap:!1,shadowMode:!1})},"9bb2":function(e,t,a){var n=a("ef26");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("499e").default;r("06c586d2",n,!0,{sourceMap:!1,shadowMode:!1})},b72a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"export-mnemonic transfer",class:{embedded:e.embedded}},[e.mnemonic?a("section",{staticClass:"popup-content"},[e.embedded?e._e():a("figure",{staticClass:"title",staticStyle:{"margin-bottom":"10px"}},[e._v("Exporting "),a("span",[e._v("secret words")])]),e._m(0),e.mnemonic?a("section",{staticClass:"mnemonic"},e._l(e.mnemonic.split(" "),function(t,n){return a("figure",{staticClass:"word"},[a("b",[e._v(e._s(n+1))]),a("span",[e._v(e._s(t))])])}),0):e._e()]):e._e(),a("section",{staticClass:"popup-buttons"},[e.embedded?e._e():a("Button",{attrs:{primary:"1",text:"Close"},nativeOn:{click:function(t){return function(){return e.closer(null)}()}}})],1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("figure",{staticClass:"sub-title"},[a("b",[e._v("Write the words down, and "),a("u",[e._v("never give them to anyone")]),e._v("!")])])}],i=(a("8e6e"),a("ac6a"),a("456d"),a("7514"),a("bd86")),o=(a("f289"),a("17e3")),s=a("4b59"),c=a("21f8"),u=a("b16e"),d=a("2f62"),l=a("20cb"),p=a.n(l);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach(function(t){Object(i["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var f={props:["popin","closer","embedded"],data:function(){return{mnemonic:null}},computed:m({},Object(d["d"])(["scatter"])),created:function(){var e=this;if(this.embedded)return this.mnemonic=this.embedded;if(window.wallet){var t=this.scatter.keychain.keypairs.find(function(e){return e.base});if(!t)return;window.wallet.getPrivateKey(t.id,t.blockchains[0]).then(function(a){a||e.closer(null),e.mnemonic=u["a"].getMnemonic(p.a.plugin(t.blockchains[0]).hexPrivateToBuffer(a))})}},methods:{copyMnemonic:function(){window.wallet.utility.copy(this.mnemonic),c["a"].push(s["a"].snackbar("Your words have been copied to your clipboard."))},blockchainName:o["blockchainName"]}},h=f,x=(a("dd0c"),a("2877")),g=Object(x["a"])(h,n,r,!1,null,"6b61139c",null);t["default"]=g.exports},bbf8:function(e,t,a){"use strict";var n=a("9bb2"),r=a.n(n);r.a},c14e:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".export-mnemonic[data-v-6b61139c]{max-width:500px;width:calc(100% - 80px);margin:0 auto}.export-mnemonic .sub-title[data-v-6b61139c]{color:#de4136;margin-top:10px;font-size:11px}.export-mnemonic.embedded[data-v-6b61139c]{max-width:none;width:100%}.export-mnemonic:not(.embedded) .sub-title[data-v-6b61139c]{margin-top:-10px;margin-bottom:40px}.export-mnemonic .mnemonic[data-v-6b61139c]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.export-mnemonic .mnemonic .word[data-v-6b61139c]{margin:1px;border-radius:4px;border:1px solid rgba(0,168,255,.3);font-size:14px;-webkit-box-flex:1;-ms-flex:1;flex:1}.export-mnemonic .mnemonic .word[data-v-6b61139c],.export-mnemonic .mnemonic .word b[data-v-6b61139c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.export-mnemonic .mnemonic .word b[data-v-6b61139c]{background:rgba(0,168,255,.08);height:100%;font-size:9px;color:#00a8ff;width:25px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.export-mnemonic .mnemonic .word span[data-v-6b61139c]{padding:10px;display:inline-block}.export-mnemonic .mnemonic .word[data-v-6b61139c]:hover{border:1px solid #00a8ff}.blue-steel .export-mnemonic .mnemonic .word[data-v-6b61139c]{border:1px solid rgba(255,255,0,.37)}.blue-steel .export-mnemonic .mnemonic .word b[data-v-6b61139c]{background:hsla(0,0%,100%,.1);color:#ff0}.blue-steel .export-mnemonic .mnemonic .word[data-v-6b61139c]:hover{border:1px solid #ff0}",""])},dd0c:function(e,t,a){"use strict";var n=a("6a42"),r=a.n(n);r.a},ef26:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".mobile .onboarding[data-v-067d0c3a]{padding:0 20px}.onboarding[data-v-067d0c3a]{height:100vh;width:100%}.onboarding .back[data-v-067d0c3a],.onboarding .skip[data-v-067d0c3a]{position:fixed;top:5px;color:#00a8ff;font-size:18px;font-weight:700;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;cursor:pointer}.onboarding .back[data-v-067d0c3a]{left:5px}.onboarding .skip[data-v-067d0c3a]{right:5px}.onboarding .alternative-option[data-v-067d0c3a]{font-size:13px;color:#999;font-weight:700;padding:5px;cursor:pointer;display:table;margin:5px auto 0}.onboarding .alternative-option[data-v-067d0c3a]:hover{color:inherit;text-decoration:underline}.onboarding .page[data-v-067d0c3a]{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.onboarding .page>section[data-v-067d0c3a]{text-align:center;max-width:450px;margin:0 auto}.onboarding .page .image[data-v-067d0c3a]{z-index:-1;position:relative;margin:0 auto 20px}.onboarding .page .image img[data-v-067d0c3a]{width:200px;height:200px}.onboarding .page .title[data-v-067d0c3a]{font-size:24px;font-weight:700}.onboarding .page .title .blue[data-v-067d0c3a]{color:#00a8ff;font-weight:700}.onboarding .page .sub-title[data-v-067d0c3a]{font-size:14px;color:#999;text-align:center;max-width:350px;margin:.5rem auto 0}.onboarding .page button[data-v-067d0c3a]{display:inline-block;margin-top:40px;font-size:16px;padding:20px 40px;height:auto;min-width:200px}.onboarding .page .name-taken[data-v-067d0c3a]{display:block;margin-top:10px;color:#de4136;font-size:13px}.onboarding .page .onboarder-input[data-v-067d0c3a]{margin-top:30px;padding-bottom:5px;border-bottom:3px solid #00a8ff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.onboarding .page .onboarder-input .input-holder[data-v-067d0c3a]{text-align:right}.onboarding .page .onboarder-input .input-holder[data-v-067d0c3a],.onboarding .page .onboarder-input .input-holder input[data-v-067d0c3a]{-webkit-box-flex:0;-ms-flex:0 auto;flex:0 auto;font-size:16px;font-weight:700;cursor:text;position:relative}.onboarding .page .onboarder-input .input-holder input[data-v-067d0c3a]{text-align:center;border:0;outline:0;padding:15px 0}.onboarding .page .onboarder-input .input-holder.normal[data-v-067d0c3a]{-webkit-box-flex:1;-ms-flex:1;flex:1}.onboarding .page .onboarder-input .input-holder.normal input[data-v-067d0c3a]{position:relative;color:inherit;top:0;left:0;width:100%;height:100%;z-index:1;text-align:center;padding:15px 0}.onboarding .page .onboarder-input .input-holder span.grey[data-v-067d0c3a]{color:rgba(0,0,0,.2)}.onboarding .page .onboarder-input .suffix[data-v-067d0c3a]{font-size:24px;color:#00a8ff;font-weight:700;text-align:left}.onboarding .pay-boxes[data-v-067d0c3a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:40px}.onboarding .pay-boxes .pay-box[data-v-067d0c3a]{opacity:.5;width:calc(50% - 10px)}.onboarding .pay-boxes .pay-box.active[data-v-067d0c3a]{opacity:1}.onboarding .pay-boxes .pay-box .box[data-v-067d0c3a]{cursor:pointer;border:2px solid #00a8ff;border-radius:10px}.onboarding .pay-boxes .pay-box .box .amount[data-v-067d0c3a]{height:90px;font-size:44px;font-weight:700;color:#00a8ff}.onboarding .pay-boxes .pay-box .box .amount[data-v-067d0c3a],.onboarding .pay-boxes .pay-box .box .info[data-v-067d0c3a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:10px}.onboarding .pay-boxes .pay-box .box .info[data-v-067d0c3a]{height:80px;background:rgba(0,168,255,.08);font-size:13px;border-radius:10px}.onboarding .pay-boxes .pay-box .bubble[data-v-067d0c3a]{width:40px;height:40px;margin:10px auto 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:2px solid #00a8ff;border-radius:50%;cursor:pointer}.onboarding .pay-boxes .pay-box .bubble .dot[data-v-067d0c3a]{width:20px;height:20px;background:#00a8ff;border-radius:50%}",""])}}]);