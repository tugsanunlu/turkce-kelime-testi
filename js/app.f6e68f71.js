(function(t){function e(e){for(var s,i,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},r={app:0},a=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/turkce-kelime-testi/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4091:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),r=(n("ab8b"),n("ecee")),a=n("c074"),i=n("f2d1"),o=n("ad3d"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"d-flex flex-column justify-content-start align-items-center"},[t.isStart?t._e():n("div",{staticClass:"jumbotron mb-0 shadow-sm w-100"},[n("h3",[t._v("Türkçe Kelime Testi")]),n("p",[t._v("Yazılışı ve okunuşu sıklıkla karıştırılan Türkçe kelimelerle ilgili rastgele on soru sunan bir test.")]),n("button",{staticClass:"btn btn-sm btn-primary",attrs:{disabled:t.isLoader},on:{click:t.startTest}},[t.isLoader?n("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):n("span",[t._v("BAŞLA")])])]),n("transition",{attrs:{name:"fade"}},[t.isStart&&!t.isResult?n("div",{staticClass:"jumbotron mb-0 shadow-sm d-flex flex-column w-100"},[n("div",[n("h5",[t._v("Doğru kelimeyi seçin.")])]),t._l(t.questions,(function(e,s){return n("div",{key:e.id},[n("div",{directives:[{name:"show",rawName:"v-show",value:s===t.questionIndex,expression:"index === questionIndex"}],staticClass:"form-group"},[n("h5",[n("span",{staticClass:"badge badge-light"},[t._v(t._s(s+1)+" / "+t._s(t.questions.length))])]),n("div",{staticClass:"d-flex flex-column mt-2 mb-3"},[n("div",{staticClass:"form-check form-check-inline my-1",class:{"order-1":1===t.randomOrderValue}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.answers[s],expression:"answers[index]"}],staticClass:"form-check-input",attrs:{type:"radio",name:s,id:s+e.dogrukelime},domProps:{value:!0,checked:t._q(t.answers[s],!0)},on:{change:function(e){return t.$set(t.answers,s,!0)}}}),n("label",{staticClass:"form-check-label",attrs:{for:s+e.dogrukelime}},[t._v(t._s(e.dogrukelime))])]),n("div",{staticClass:"form-check form-check-inline my-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.answers[s],expression:"answers[index]"}],staticClass:"form-check-input",attrs:{type:"radio",name:s,id:s+e.yanliskelime},domProps:{value:!1,checked:t._q(t.answers[s],!1)},on:{change:function(e){return t.$set(t.answers,s,!1)}}}),n("label",{staticClass:"form-check-label",attrs:{for:s+e.yanliskelime}},[t._v(t._s(e.yanliskelime))])])]),t.questionIndex<t.questions.length-1?n("button",{staticClass:"btn btn-sm btn-primary align-self-start",attrs:{disabled:void 0==t.answers[s]},on:{click:t.nextQuestion}},[t._v("SONRAKİ SORU")]):n("button",{staticClass:"btn btn-sm btn-primary align-self-start",attrs:{disabled:void 0==t.answers[s]},on:{click:t.finishTest}},[t._v("BİTİR")])])])})),n("div",{staticClass:"mt-2"},[n("small",{staticClass:"bg-light p-2"},[n("font-awesome-icon",{attrs:{icon:"exclamation-triangle"}}),t._v('\n              Uzun okunan heceler ":" ile gösterilir.\n            ')],1)])],2):t._e()]),n("transition",{attrs:{name:"fade"}},[t.isResult?n("div",{staticClass:"jumbotron mb-0 shadow-sm w-100"},[n("h3",[t._v("Türkçe Kelime Testi Sonuçları")]),n("p",[n("strong",[t._v(t._s(t.questions.length))]),t._v(" kelimeden\n            "),n("strong",[t._v(t._s(t.countCorrect()))]),t._v(" tanesine doğru cevap verdin.\n          ")]),n("div",{staticClass:"d-flex flex-column justify-content-between"},t._l(t.questions,(function(e,s){return n("div",{key:e.id,staticClass:"alert shadow-sm",class:t.checkStatus(s)?"alert-success":"alert-danger"},[n("font-awesome-icon",{staticClass:"mr-2 status-icon",attrs:{icon:t.checkStatus(s)?"check":"times"}}),n("div",{staticClass:"text-success"},[n("strong",[t._v("Doğru:")]),t._v("\n                "+t._s(e.dogrukelime)+"\n              ")]),n("div",{staticClass:"text-danger"},[n("strong",[t._v("Yanlış:")]),t._v("\n                "+t._s(e.yanliskelime)+"\n              ")])],1)})),0),n("button",{staticClass:"btn btn-sm btn-primary",on:{click:t.startTest}},[t._v("YENİDEN BAŞLA")])]):t._e()]),n("div",{staticClass:"my-1"},[n("small",[n("a",{staticClass:"text-white",attrs:{href:"http://github.com/tugsanunlu/turkce-kelime-testi",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","github"]}}),t._v("/tugsanunlu/turkce-kelime-testi\n          ")],1)])])],1)])])},u=[],l=n("75fc"),d=(n("96cf"),n("3b8d")),f={data:function(){return{questions:[],answers:[],questionIndex:0,questionNumber:10,randomOrderValue:0,isLoader:!1,isStart:!1,isResult:!1}},methods:{resetInitialData:function(){Object.assign(this.$data,this.$options.data.call(this))},startTest:function(){this.resetInitialData(),this.isLoader=!0,this.getQuestions(),this.randomOrder()},getQuestions:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=1;case 1:if(!(e<=this.questionNumber/2)){t.next=7;break}return t.next=4,fetch("https://sozluk.gov.tr/icerik").then(function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:s=t.sent,n.questions=[].concat(Object(l["a"])(n.questions),Object(l["a"])(s.syyd));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:e+=1,t.next=1;break;case 7:this.isStart=!0;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),nextQuestion:function(){this.questionIndex+=1,this.randomOrder()},randomOrder:function(){this.randomOrderValue=Math.round(Math.random())},checkStatus:function(t){return!0===this.answers[t]},finishTest:function(){this.isResult=!0},countCorrect:function(){return this.answers.filter((function(t){return!0===t})).length}}},m=f,h=(n("f1ef"),n("2877")),p=Object(h["a"])(m,c,u,!1,null,null,null),v=p.exports;r["c"].add(i["a"],a["c"],a["f"],a["d"],a["e"],a["b"],a["a"]),s["a"].component("font-awesome-icon",o["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(v)}}).$mount("#app")},f1ef:function(t,e,n){"use strict";var s=n("4091"),r=n.n(s);r.a}});
//# sourceMappingURL=app.f6e68f71.js.map