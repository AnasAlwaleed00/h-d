(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1133c4c3"],{"142f":function(t,e,s){},1475:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"navigation"},[s("button",{staticClass:"previous-btn",attrs:{disabled:1==this.currentStep},on:{click:t.navigatePrevious}},[t._v(" Previous ")]),this.currentStep!==this.totalSteps?s("button",{staticClass:"next-btn",attrs:{type:"submit",disabled:!t.valid},on:{click:t.navigateNext}},[t._v(" Next ")]):t._e(),this.currentStep==this.totalSteps?s("button",{staticClass:"finsih-btn",attrs:{type:"submit",disabled:!t.valid},on:{click:t.finishForm}},[t._v(" Finish ")]):t._e()])},n=[],i=(s("b64b"),{props:{valid:{type:Boolean}},computed:{currentStep:{get:function(){return this.$store.state.currentStep},set:function(t){}},stepLength:{get:function(){var t=1/Object.keys(this.$store.state.steps).length*100;return t}},totalSteps:{get:function(){var t=Object.keys(this.$store.state.steps).length;return t}}},methods:{navigateNext:function(){this.currentStep<=this.totalSteps-1&&(this.$store.commit("updateCurrentStep",{currentStep:this.currentStep+1}),this.setProgress(),this.$router.push("/add/".concat(this.currentStep)))},navigatePrevious:function(){0!==this.currentStep&&(this.$store.commit("updateCurrentStep",{currentStep:this.currentStep-1}),this.setProgress(),this.$router.push("/add/".concat(this.currentStep)))},setProgress:function(){this.$store.commit("setProgress",{progressNow:this.stepLength*(this.currentStep-1)})},finishForm:function(){this.$store.commit("setProgress",{progressNow:"100"})}},created:function(){console.log(this.currentStep),console.log(this.totalSteps)}}),o=i,a=s("2877"),c=Object(a["a"])(o,r,n,!1,null,"f1c3486c",null);e["a"]=c.exports},"1a5f":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"add"},[s("div",{staticClass:"progress-container"},[s("div",{staticClass:"progress",style:{width:t.progressNow}})]),s("div",{staticClass:"add-form"},[s("div",{staticClass:"container"},[t._m(0),s("FormulateForm",{attrs:{name:"addNewPlaceForm"}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1)],1)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add-form-heading"},[s("h1",[t._v(" Add Place ")])])}],i=s("1475"),o={components:{Navigation:i["a"]},data:function(){return{}},computed:{progressNow:{get:function(){return this.$store.state.progressNow}}},methods:{navigateNext:function(){this.$router.push("/add/2")},navigatePrevious:function(){this.$router.push("/add/1")}}},a=o,c=(s("40a1"),s("2877")),u=Object(c["a"])(a,r,n,!1,null,"b20911e0",null);e["default"]=u.exports},"40a1":function(t,e,s){"use strict";s("142f")},b64b:function(t,e,s){var r=s("23e7"),n=s("7b0b"),i=s("df75"),o=s("d039"),a=o((function(){i(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return i(n(t))}})}}]);
//# sourceMappingURL=chunk-1133c4c3.79475d53.js.map