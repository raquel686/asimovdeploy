(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["courses"],{"2e80":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"courses"},[a("v-row",{staticClass:"pt-4"},[a("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[a("h1",{staticClass:"pl-5"},[t._v("Courses")])])],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"d-flex flex-wrap justify-center mb-8"},t._l(t.courses,(function(e){return a("v-card",{key:e.id,staticClass:"pb-2 ma-3",attrs:{width:"290","max-height":"450"}},[a("div",{staticClass:"indigo accent-3"},[a("v-card-subtitle",{staticClass:"pb-0 white--text"},[t._v(" Course ")]),a("v-card-title",{staticClass:"pb-1 pt-0 white--text font-weight-bold"},[t._v(" "+t._s(e.name)+" ")])],1),a("v-card-text",{staticClass:"text-justify pb-1 text--secondary text-truncate"},[a("strong",[t._v("Description:")]),t._v(" "+t._s(e.description)+" ")]),a("v-card-actions",[a("v-btn",{staticClass:"font-weight-bold te",attrs:{text:"",color:"indigo accent-4",to:"/courses/"+e.id}},[t._v("see more")])],1)],1)})),1)])],1)],1)},n=[],c=(a("b0c0"),a("a4d3"),a("e01a"),a("d81d"),a("682a")),o={name:"courses",data:function(){return{courses:[],id:"",name:"",description:""}},created:function(){this.refreshList()},methods:{getDisplayCourse:function(t){return{id:t.id,name:t.name,description:t.description}},refreshList:function(){var t=this;c["a"].getAll().then((function(e){t.courses=e.data.map(t.getDisplayCourse),console.log(e.data)}))}}},i=o,r=a("2877"),u=a("6544"),d=a.n(u),l=a("8336"),p=a("b0af"),f=a("99d9"),v=a("62ad"),h=a("0fd9"),b=Object(r["a"])(i,s,n,!1,null,"3cdff3f6",null);e["default"]=b.exports;d()(b,{VBtn:l["a"],VCard:p["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VCol:v["a"],VRow:h["a"]})},"682a":function(t,e,a){"use strict";var s=a("d4ec"),n=a("bee2"),c=a("ade3"),o=(a("99af"),a("eb6d")),i=function(){function t(){Object(s["a"])(this,t),Object(c["a"])(this,"endpoint","/courses"),Object(c["a"])(this,"user",JSON.parse(localStorage.getItem("user")))}return Object(n["a"])(t,[{key:"getAll",value:function(){return o["a"].get("teachers/".concat(this.user.id).concat(this.endpoint))}},{key:"getById",value:function(t){return o["a"].get("".concat(this.endpoint,"/").concat(t))}},{key:"getByIdCourse",value:function(t){return o["a"].get("".concat(this.endpoint,"/").concat(t,"/items"))}},{key:"getCompetencesByIdCourse",value:function(t){return o["a"].get("".concat(this.endpoint,"/").concat(t,"/competences"))}},{key:"updateCourse",value:function(t,e){return o["a"].put("".concat(this.endpoint,"/").concat(t),e)}}]),t}();e["a"]=new i},eb6d:function(t,e,a){"use strict";var s=a("bc3a"),n=a.n(s);function c(){var t=JSON.parse(localStorage.getItem("user"));return t&&t.token?(console.log("Bearer ".concat(t.token)),{Authorization:"Bearer "+t.token}):(console.log("No token available"),{})}e["a"]=n.a.create({baseURL:"http://appserviceasimov.azurewebsites.net/api/v1",headers:c()})}}]);
//# sourceMappingURL=courses.a136407b.js.map