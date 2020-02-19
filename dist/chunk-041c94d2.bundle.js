(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-041c94d2"],{"4d2c":function(t,e,i){"use strict";var n=i("e249"),a=i.n(n);a.a},e249:function(t,e,i){var n=i("e6e6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("499e").default;a("0987310d",n,!0,{sourceMap:!1,shadowMode:!1})},e6e6:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".manage-identity[data-v-64e52de6]{max-width:600px;width:calc(100% - 80px);margin:0 auto}.manage-identity .sub-title[data-v-64e52de6]{margin-top:-20px;font-size:13px}.manage-identity .id-name[data-v-64e52de6]{width:100%;font-size:14px;font-family:Poppins,sans-serif;margin-bottom:7px}.manage-identity .claim-username[data-v-64e52de6],.manage-identity .id-name[data-v-64e52de6]{display:-webkit-box;display:-ms-flexbox;display:flex;text-align:left}.manage-identity .claim-username[data-v-64e52de6]{margin-top:-10px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.manage-identity .claim-username .description[data-v-64e52de6]{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:13px;color:#00a8ff;margin-right:25px}.manage-identity .claim-username .description.red[data-v-64e52de6]{color:red}.manage-identity .claim-username .description.grey[data-v-64e52de6]{color:#999}.manage-identity .claim-username .description.small[data-v-64e52de6]{font-size:11px}.manage-identity .claim-username button[data-v-64e52de6]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;margin-left:5px}",""])},fadc:function(t,e,i){"use strict";i.r(e);var n,a,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"manage-identity"},[i("section",{staticClass:"popup-content"},[t.usingIdentity?t._e():i("section",[t._m(0),i("figure",{staticClass:"sub-title"},[t._v("Your identity is your online persona. You can choose to be who you are, or who you wish to be. Once you register yourself on the identity network you'll gain access to special features like applying reputations to things.")]),i("br"),i("br"),i("figure",{staticClass:"line"}),i("br"),i("br")]),t.usingIdentity?t._e():i("figure",{staticClass:"id-name"},[i("div",{staticStyle:{flex:"1"}},[t._v("Give yourself a name")]),i("div",[i("b",[t._v("("+t._s(t.name.length)+"/56)")])])]),t.usingIdentity?i("figure",{staticClass:"id-name"},[i("div",{staticStyle:{flex:"1"}},[t._v("You are currently known as")])]):t._e(),i("Input",{attrs:{big:"1",disabled:t.usingIdentity,text:t.identityName},on:{changed:function(e){return t.changeIdentityName(e)}}}),t.usingIdentity?i("section",[i("section",{staticClass:"claim-username"},[i("figure",{staticClass:"description",staticStyle:{flex:"1"}},[t._v("\n\t\t\t\t\tYou can manage your identity using the buttons on the right.\n\t\t\t\t")]),i("Button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Change key",expression:"`Change key`"}],attrs:{icon:"fal fa-random"},nativeOn:{click:function(e){return t.changeIdentityKey(e)}}}),i("Button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Unlink identity",expression:"`Unlink identity`"}],attrs:{icon:"fas fa-unlink"},nativeOn:{click:function(e){return t.unlinkIdentity(e)}}}),i("Button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Copy public key",expression:"`Copy public key`"}],attrs:{icon:"fal fa-copy"},nativeOn:{click:function(e){return t.copyPublicKey(e)}}}),i("Button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Export private key",expression:"`Export private key`"}],attrs:{primary:"1",icon:"fal fa-key"},nativeOn:{click:function(e){return t.exportIdentityKey(e)}}})],1)]):t.ridlIsAvailable&&!t.usingIdentity?i("section",[t.loadingRidlData?i("section",[i("section",{staticClass:"claim-username"},[i("figure",{staticClass:"description"}),i("Button",{attrs:{loading:!0}})],1)]):i("section",[t.isValidName?t.identityAvailable?i("section",{staticClass:"claim-username"},[t.ownsIdentity?t._e():i("figure",{staticClass:"description"},[i("b",[t._v("Congratulations!")]),t._v(" This name is available for registration. Just click the button on the right and off you go.")]),t.ownsIdentity?i("figure",{staticClass:"description"},[i("b",[t._v("You already own this name.")]),t._v(" Just click the button on the right to immediately link this name to your digital identity.")]):t._e(),t.ownsIdentity?i("Button",{attrs:{loading:t.working,text:"Link",icon:"fas fa-link",primary:"1"},nativeOn:{click:function(e){return t.registerIdentity(e)}}}):t._e(),t.ownsIdentity?t._e():i("Button",{attrs:{loading:t.working,text:"Register Identity",icon:"fas fa-check",primary:"1"},nativeOn:{click:function(e){return t.registerIdentity(e)}}})],1):i("section",{staticClass:"claim-username"},[t._m(2)]):i("section",{staticClass:"claim-username"},[t._m(1)])])]):t._e(),!1===t.ridlIsAvailable?i("section",[i("section",{staticClass:"claim-username"},[t.loadingRidlData?t._e():i("figure",{staticClass:"description grey"},[t._v("Identity network is down, please try again later.")]),t.loadingRidlData?i("figure",{staticClass:"description"}):t._e(),i("Button",{attrs:{loading:t.loadingRidlData,icon:"fas fa-sync-alt"},nativeOn:{click:function(e){return t.checkRidlNetwork(e)}}})],1)]):t._e(),t.usingIdentity?t._e():i("section",[i("br"),i("br"),i("br"),i("br"),i("Input",{attrs:{text:t.publicKey,label:"Identity public security key",disabled:"1"}}),i("section",{staticClass:"claim-username"},[i("figure",{staticClass:"description red small"},[t._v("Always make sure you have a copy of your keys. If you lose them, you will lose access to your identity!")]),i("Button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Change key",expression:"`Change key`"}],attrs:{icon:"fal fa-random"},nativeOn:{click:function(e){return t.changeIdentityKey(e)}}}),i("Button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Export key",expression:"`Export key`"}],attrs:{primary:"1",icon:"fal fa-key"},nativeOn:{click:function(e){return t.exportIdentityKey(e)}}})],1)],1)],1),i("section",{staticClass:"popup-buttons"},[i("Button",{attrs:{text:"Close"},nativeOn:{click:function(e){return t.closer(null)}}})],1)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("figure",{staticClass:"title"},[t._v("Setup your "),i("span",[t._v("identity")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("figure",{staticClass:"description red"},[i("b",[t._v("This name is not valid.")]),t._v(" Your name must be between 3 and 56 characters and contain only letters, numbers, and dash (but not as the first or last character).")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("figure",{staticClass:"description red"},[i("b",[t._v("This username is not available.")])])}],c=(i("8e6e"),i("ac6a"),i("456d"),i("28a5"),i("768b")),o=(i("96cf"),i("3b8d")),u=(i("6b54"),i("a481"),i("7f7f"),i("bd86")),l=i("2f62"),d=i("21f8"),y=i("4b59"),p=i("4de1"),f=i("7823"),h=i.n(f);function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(i,!0).forEach(function(e){Object(u["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var v={props:["popin","closer"],data:function(){return{identity:null,loadingRidlData:!1,ridlIdentity:null,ridlIsAvailable:!1,name:"",saved:!0,working:!1}},computed:g({},Object(l["d"])(["scatter"]),{isValidName:function(){return this.identity&&p["a"].validName(this.name)},publicKey:function(){return this.identity?this.identity.publicKey.replace("EOS","ID_KEY_"):""},identityAvailable:function(){return!this.ridlIdentity||this.ownsIdentity},ownsIdentity:function(){return this.ridlIdentity&&this.ridlIdentity.key===this.identity.publicKey},usingIdentity:function(){return!!this.identity&&this.identity.ridl.toString().indexOf("::")>-1},identityName:function(){return this.identity?this.usingIdentity?"".concat(this.name,"@scatter"):this.name:""}}),mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.identity=this.scatter.keychain.identities[0].clone(),this.name=this.identity.name,this.loadingRidlData=!0,this.checkRidlNetwork(),t.next=6,this.checkAvailability();case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{checkRidlNetwork:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("this.featureFlags.ridl",this.featureFlags.ridl),this.loadingRidlData=!0,this.featureFlags.ridl){t.next=5;break}return setTimeout(function(){e.ridlIsAvailable=!1,e.loadingRidlData=!1},50),t.abrupt("return");case 5:return t.next=7,p["a"].isAvailable();case 7:this.ridlIsAvailable=t.sent,this.loadingRidlData=!1;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),copyPublicKey:function(){window.wallet.utility.copy(this.publicKey),d["a"].push(y["a"].snackbar("Your identity's public key was copied to your clipboard."))},exportIdentityKey:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise(function(t){d["a"].push(y["a"].getPassword(function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(i){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return",t(!1));case 2:if(!window.wallet){e.next=8;break}return e.t0=t,e.next=6,window.wallet.verifyPassword(i).catch(function(){return!1});case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()))});case 2:e=t.sent,e&&d["a"].push(y["a"].exportPrivateKey(Keypair.fromJson({id:this.identity.id,blockchains:[Blockchains.EOSIO]})));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),changeIdentityKey:function(){var t=this;d["a"].push(y["a"].changeIdentityKey(function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(i){var n,a,r,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!i){e.next=15;break}if(!t.usingIdentity){e.next=9;break}return n=t.identity.ridl.split("::"),a=Object(c["a"])(n,2),r=a[0],s=a[1],e.next=5,p["a"].changeKey(s,i.publicKey,r,t.identity.publicKey);case 5:if(o=e.sent,o){e.next=8;break}return e.abrupt("return");case 8:d["a"].push(y["a"].transactionSuccess(Blockchains.EOSIO,o.txid));case 9:return t.identity.privateKey=i.privateKey,t.identity.publicKey=i.publicKey,e.next=13,h.a.updateIdentity(t.identity);case 13:t.identity=t.scatter.keychain.identities[0].clone(),t.usingIdentity||d["a"].push(y["a"].snackbar("Your identity's key was changed successfully."));case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()))},changeIdentityName:function(t){var e=this;if(!this.usingIdentity){if(this.name=t.replace(/ /gi,""),!this.isValidName)return!1;this.loadingRidlData=!0,clearTimeout(a),a=setTimeout(Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.checkAvailability();case 2:e.save();case 3:case"end":return t.stop()}},t)})),500)}},unlinkIdentity:function(){this.identity.ridl="",this.checkAvailability()},checkAvailability:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.ridlIsAvailable){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,p["a"].findIdentity(this.name);case 4:this.ridlIdentity=t.sent,this.loadingRidlData=!1,this.save();case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),registerIdentity:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.working=!0,!this.ownsIdentity){t.next=5;break}this.identity.ridl="".concat(this.ridlIdentity.chain,"::").concat(this.ridlIdentity.id),t.next=11;break;case 5:return t.next=7,p["a"].payForIdentity(this.identity);case 7:if(e=t.sent,e){t.next=10;break}return t.abrupt("return",this.working=!1);case 10:this.identity.ridl="".concat(e.chain,"::").concat(e.id);case 11:this.working=!1,this.save();case 13:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),save:function(){var t=this,e=this.name;this.saved=!1,clearTimeout(n),n=setTimeout(function(){t.isValidName&&(t.loadingRidlData||t.identityAvailable&&(t.identity.name=e,h.a.updateIdentity(t.identity),t.saved=!0,clearTimeout(n),n=null))},500)}}},b=v,k=(i("4d2c"),i("2877")),w=Object(k["a"])(b,r,s,!1,null,"64e52de6",null);e["default"]=w.exports}}]);