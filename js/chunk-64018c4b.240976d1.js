(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64018c4b"],{"8adc":function(t,e,a){},"9a95":function(t,e,a){"use strict";var s=a("d4ec"),i=a("bee2"),r=a("ade3"),o=(a("99af"),a("eb6d")),n=function(){function t(){Object(s["a"])(this,t),Object(r["a"])(this,"endpoint","/teachers"),Object(r["a"])(this,"user",JSON.parse(localStorage.getItem("user")))}return Object(i["a"])(t,[{key:"getAll",value:function(){return o["a"].get("directors/".concat(this.user.id).concat(this.endpoint))}},{key:"getById",value:function(t){return o["a"].get("".concat(this.endpoint,"/").concat(t))}},{key:"getAllCoursesById",value:function(t){return o["a"].get("".concat(this.endpoint,"/").concat(t,"/courses"))}}]),t}();e["a"]=new n},a523:function(t,e,a){"use strict";a("4de4"),a("d3b7"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85"),a("498a"),a("a15b");var s=a("2b0e");function i(t){return s["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var s=a.props,i=a.data,r=a.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var o=i.attrs;if(o){i.attrs={};var n=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));n.length&&(i.staticClass+=" ".concat(n.join(" ")))}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,r)}})}var r=a("d9f7");e["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,s=e.props,i=e.data,o=e.children,n=i.attrs;return n&&(i.attrs={},a=Object.keys(n).filter((function(t){if("slot"===t)return!1;var e=n[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),t(s.tag,Object(r["a"])(i,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(a||[])}),o)}})},b97a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"teacher-detail"},[a("v-container",{staticClass:"pt-6"},[a("v-row",[a("v-col",{attrs:{cols:"8"}},[a("h1",{staticClass:"font-weight-bold pb-3"},[t._v("Teacher information")]),a("v-card",{staticClass:"mx-auto",attrs:{"max-height":"230","min-height":"150"}},[a("v-card-title",{staticClass:"mb-1 indigo accent-4 font-weight-bold white--text"},[t._v(" "+t._s(t.teacher.firstName)+" "+t._s(t.teacher.lastName)+" ")]),a("v-card-text",{staticClass:"text--primary mt-3"},[a("strong",[t._v("Personal information:")]),a("br"),a("v-row",[a("v-col",{staticClass:"font-weight-bold",attrs:{cols:"2"}},[t._v(" - Name(s): "),a("br"),t._v(" - Last name: "),a("br"),t._v(" - Age: "),a("br"),t._v(" - Email: "),a("br"),t._v(" - Phone: "),a("br")]),a("v-col",{attrs:{cols:"10"}},[t._v(" "+t._s(t.teacher.firstName)+" "),a("br"),t._v(" "+t._s(t.teacher.lastName)+" "),a("br"),t._v(" "+t._s(t.teacher.age)+" "),a("br"),t._v(" "+t._s(t.teacher.email)+" "),a("br"),t._v(" "+t._s(t.teacher.phone)+" "),a("br")])],1)],1)],1)],1),a("v-col",{staticClass:"pl-15",attrs:{cols:"4"}},[a("h1",{staticClass:"font-weight-bold pb-3"},[t._v("Teacher progress")]),a("v-card",{staticClass:"mx-auto pa-5",attrs:{"min-height":"150"}},[a("p",{staticClass:"display-3 font-weight-bold"},[t._v(t._s(this.value)+"%")]),a("v-progress-linear",{staticClass:"rounded-pill",attrs:{color:"indigo accent-4",height:"25",value:this.value,striped:""}})],1)],1)],1),a("v-row",{staticClass:"pt-4"},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"font-weight-bold pb-3"},[t._v("Point for progress")]),a("v-card",{staticClass:"mx-auto mb-3"},[a("v-container",[a("v-row",[a("div",{staticClass:"d-flex justify-start align-center ml-5 mr-3"},[a("v-icon",[t._v("mdi-check-bold")])],1),a("v-col",[a("div",[t._v("This teacher")]),a("p",{staticClass:"text--primary font-weight-bold mb-1"},[t._v("Points earned")])]),a("v-col",{staticClass:"d-flex justify-center align-center"},[a("v-chip",{staticClass:"font-weight-bold",attrs:{outlined:"",rounded:"",color:"green darken-1"}},[t._v(" "+t._s(t.teacher.point)+" Points ")])],1)],1)],1)],1),a("h1",{staticClass:"font-weight-bold py-3"},[t._v("Courses in progress and completed")]),t._l(t.courses,(function(e){return a("v-card",{key:e.id,staticClass:"mx-auto mb-3"},[a("v-container",[a("v-row",[a("div",{staticClass:"d-flex justify-start align-center ml-5 mr-3"},[a("v-icon",[t._v("mdi-file-document-outline")])],1),a("v-col",[a("div",[t._v("Course")]),a("p",{staticClass:"text--primary font-weight-bold mb-1"},[t._v(t._s(e.name))]),a("div",{staticClass:"text--secondary"},[t._v(t._s(e.description))])]),a("v-col",{staticClass:"d-flex justify-center align-center"},[1==e.state?a("v-btn",{staticClass:"font-weight-bold",attrs:{outlined:"",rounded:"",color:"green darken-1"}},[t._v(" Completed ")]):a("v-btn",{staticClass:"font-weight-bold",attrs:{outlined:"",rounded:"",color:"red darken-1"}},[t._v(" Incomplete ")])],1)],1)],1)],1)}))],2)],1)],1)],1)},i=[],r=(a("d81d"),a("b0c0"),a("a4d3"),a("e01a"),a("9a95")),o={name:"teacher-detail",data:function(){return{value:"",teacher:{id:"",point:"",firstName:"",lastName:"",age:"",email:"",phone:"",directorId:""},courses:[],competences:["Mathematical Reasoning","Assertiveness","Critical thinking","Grammar","Mathematical design","Creativity","Logic"]}},created:function(){this.refreshDataTeacher(),this.refreshCoursesByTeacher()},updated:function(){this.changeValueProgress()},methods:{refreshDataTeacher:function(){var t=this;r["a"].getById(this.$route.params.id).then((function(e){t.teacher=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))},refreshCoursesByTeacher:function(){var t=this;r["a"].getAllCoursesById(this.$route.params.id).then((function(e){t.courses=e.data.map(t.getDisplayCourse),console.log("List of courses: ",e.data)})).catch((function(t){console.log("Error: ",t)}))},getDisplayCourse:function(t){return{id:t.id,name:t.name,description:t.description,state:t.state}},changeValueProgress:function(){for(var t=0,e=this.courses.length,a=0;a<this.courses.length;a++)1==this.courses[a].state&&(t+=1);this.value=t/e*100}}},n=o,c=a("2877"),l=a("6544"),d=a.n(l),h=a("8336"),u=a("b0af"),p=a("99d9"),v=a("cc20"),f=a("62ad"),g=a("a523"),b=a("132d"),m=a("8e36"),C=a("0fd9"),_=Object(c["a"])(n,s,i,!1,null,"330606e2",null);e["default"]=_.exports;d()(_,{VBtn:h["a"],VCard:u["a"],VCardText:p["c"],VCardTitle:p["d"],VChip:v["a"],VCol:f["a"],VContainer:g["a"],VIcon:b["a"],VProgressLinear:m["a"],VRow:C["a"]})},cc20:function(t,e,a){"use strict";var s=a("3835"),i=a("5530"),r=(a("d3b7"),a("4de4"),a("8adc"),a("58df")),o=a("0789"),n=a("9d26"),c=a("a9ad"),l=a("4e82"),d=a("7560"),h=a("f2e7"),u=a("1c87"),p=a("af2b"),v=a("d9bd");e["a"]=Object(r["a"])(c["a"],p["a"],u["a"],d["a"],Object(l["a"])("chipGroup"),Object(h["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({"v-chip":!0},u["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(u["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=Object(s["a"])(e,2),i=a[0],r=a[1];t.$attrs.hasOwnProperty(i)&&Object(v["a"])(i,r,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(n["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(o["b"],t)},genClose:function(){var t=this;return this.$createElement(n["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),s=a.tag,r=a.data;r.attrs=Object(i["a"])(Object(i["a"])({},r.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:r.attrs.tabindex}),r.directives.push({name:"show",value:this.active}),r=this.setBackgroundColor(this.color,r);var o=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(o,r),e)}})},eb6d:function(t,e,a){"use strict";var s=a("bc3a"),i=a.n(s);function r(){var t=JSON.parse(localStorage.getItem("user"));return t&&t.token?(console.log("Bearer ".concat(t.token)),{Authorization:"Bearer "+t.token}):(console.log("No token available"),{})}e["a"]=i.a.create({baseURL:"http://appserviceasimov.azurewebsites.net/api/v1",headers:r()})}}]);
//# sourceMappingURL=chunk-64018c4b.240976d1.js.map