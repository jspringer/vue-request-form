webpackJsonp([1],{NHnr:function(s,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=a("7+uW"),i=a("sUu7");t.a.use(i.a);var r={name:"App",data:function(){return{firstname:"",lastname:"",fullname:"",email:"",phone:"",budget:"",project_type:"",description:"",status:"",incomplete:!0}},watch:{firstname:function(s){this.fullname=s+" "+this.lastname},lastname:function(s){this.fullname=this.firstname+" "+s}},methods:{validateBeforeSubmit:function(){var s=this;this.$validator.validateAll().then(function(e){if(e)return s.status="Form Submitted!",console.log("Form Submitted! Details: ",s),void(s.incomplete=!1);alert("Please complete the form and try again!")})}}},n={render:function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("span",{staticClass:"content__title__logo"},[a("a",{attrs:{href:"https://fueled.com/"}},[a("svg",{staticClass:"svg-logo",attrs:{width:"170",height:"170",viewBox:"0 0 170 170"}},[a("path",{attrs:{fill:"#AE0000",d:"M0 0h170v170H0z"}}),a("path",{attrs:{d:"M24.78 91.1h2.48V78.9h-2.48v-2.38h17.45v4.88h-2.97v-2.5h-8.6v5h9.65v2.53h-9.6v4.64h3.17v2.37H24.8V91.1zm21.8-.58v-11.6H44.1v-2.38h8.73v2.38H50V89.4l1.5 1.46h7.02l1.52-1.48V78.9h-2.87v-2.38h8.74v2.38h-2.43v11.6l-2.94 2.95H49.55l-2.97-2.95zm21.3.58h2.47V78.9h-2.48v-2.38h17.9v4.8h-2.93V78.9h-9.08v4.83h9.74v2.43h-9.74v4.9h9.08v-2.42h2.97v4.8H67.9V91.1zm19.87 0h2.48V78.9h-2.48v-2.38h9.1v2.38h-3.2v12.2h7.62v-2.47h2.94v4.84H87.78V91.1zm18.42 0h2.48V78.9h-2.48v-2.38h17.92v4.8h-2.98V78.9h-9.08v4.83h9.75v2.43h-9.75v4.9h9.08v-2.42h2.97v4.8h-17.9V91.1zm19.88 0h2.48V78.9h-2.48v-2.38h16.22l2.95 2.94V90.5l-2.95 2.95h-16.22V91.1zm14.26-.06l1.5-1.5v-9.08l-1.5-1.5h-8.34v12.08h8.37z",fill:"#FFF"}})])])]),s._v(" "),a("h1",{attrs:{id:"title"}},[s._v("PROJECT REQUEST FORM")]),s._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:s.incomplete,expression:"incomplete"}]},[a("form",{on:{submit:function(e){return e.preventDefault(),s.validateBeforeSubmit(e)}}},[a("div",{staticClass:"columns is-rtl is-multiline"},[a("div",{staticClass:"column is-10 is-offset-1"},[a("label",{staticClass:"label is-large"},[s._v("First Name")]),s._v(" "),a("p",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.firstname,expression:"firstname"},{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],class:{input:!0,"is-large":!0,"is-danger":s.errors.has("firstname")},attrs:{name:"firstname",maxlength:"30",type:"text",placeholder:"Jane"},domProps:{value:s.firstname},on:{input:function(e){e.target.composing||(s.firstname=e.target.value)}}}),s._v(" "),s._m(0),s._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:s.firstname&&!s.errors.has("firstname"),expression:"firstname && !errors.has('firstname')"}],staticClass:"fas fa-check"})]),s._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("firstname"),expression:"errors.has('firstname')"}],staticClass:"fas fa-exclamation-triangle"})]),s._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("firstname"),expression:"errors.has('firstname')"}],staticClass:"help is-danger"},[s._v(s._s(s.errors.first("firstname")))])])]),s._v(" "),a("div",{staticClass:"column is-10 is-offset-1"},[a("label",{staticClass:"label is-large"},[s._v("Last Name")]),s._v(" "),a("p",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.lastname,expression:"lastname"},{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],class:{input:!0,"is-large":!0,"is-danger":s.errors.has("lastname")},attrs:{name:"lastname",maxlength:"30",type:"text",placeholder:"Doe"},domProps:{value:s.lastname},on:{input:function(e){e.target.composing||(s.lastname=e.target.value)}}}),s._v(" "),s._m(1),s._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:s.lastname&&!s.errors.has("lastname"),expression:"lastname && !errors.has('lastname')"}],staticClass:"fas fa-check"})]),s._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("lastname"),expression:"errors.has('lastname')"}],staticClass:"fas fa-exclamation-triangle"})]),s._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("lastname"),expression:"errors.has('lastname')"}],staticClass:"help is-danger"},[s._v(s._s(s.errors.first("lastname")))])])]),s._v(" "),a("div",{staticClass:"column is-10 is-offset-1"},[a("label",{staticClass:"label is-large"},[s._v("Email")]),s._v(" "),a("p",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],class:{input:!0,"is-large":!0,"is-danger":s.errors.has("email")},attrs:{name:"email",maxlength:"50",type:"text",placeholder:"jane.doe@gmail.com"},domProps:{value:s.email},on:{input:function(e){e.target.composing||(s.email=e.target.value)}}}),s._v(" "),s._m(2),s._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:s.email&&!s.errors.has("email"),expression:"email && !errors.has('email')"}],staticClass:"fas fa-check"})]),s._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("email"),expression:"errors.has('email')"}],staticClass:"fas fa-exclamation-triangle"})]),s._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("email"),expression:"errors.has('email')"}],staticClass:"help is-danger"},[s._v(s._s(s.errors.first("email")))])])]),s._v(" "),a("div",{staticClass:"column is-10 is-offset-1"},[a("label",{staticClass:"label is-large"},[s._v("Phone")]),s._v(" "),a("p",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.phone,expression:"phone"},{name:"validate",rawName:"v-validate",value:"numeric|digits:10",expression:"'numeric|digits:10'"}],class:{input:!0,"is-large":!0,"is-danger":s.errors.has("phone"),success:10===s.phone.length&&!s.errors.has("phone")},attrs:{name:"phone",maxlength:"10",type:"tel",placeholder:"5551234567"},domProps:{value:s.phone},on:{input:function(e){e.target.composing||(s.phone=e.target.value)}}}),s._v(" "),s._m(3),s._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:10===s.phone.length&&!s.errors.has("phone"),expression:"phone.length === 10 && !errors.has('phone')"}],staticClass:"fas fa-check"})]),s._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"fas fa-exclamation-triangle"})]),s._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"help is-danger"},[s._v(s._s(s.errors.first("phone")))])])]),s._v(" "),a("div",{staticClass:"column is-10 is-offset-1"},[a("label",{staticClass:"label is-large"},[s._v("Project Type")]),s._v(" "),a("p",{staticClass:"control is-expanded"},[a("span",{staticClass:"select is-large is-fullwidth"},[a("select",{directives:[{name:"model",rawName:"v-model",value:s.project_type,expression:"project_type"},{name:"validate",rawName:"v-validate",value:"in:ios,web,branding,other",expression:"'in:ios,web,branding,other'"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(s){return s.selected}).map(function(s){return"_value"in s?s._value:s.value});s.project_type=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[s._v("Please select one")]),s._v(" "),a("option",{attrs:{value:"ios"}},[s._v("iOS")]),s._v(" "),a("option",{attrs:{value:"web"}},[s._v("Web")]),s._v(" "),a("option",{attrs:{value:"branding"}},[s._v("Branding")]),s._v(" "),a("option",{attrs:{value:"other"}},[s._v("Other")])])])])]),s._v(" "),a("div",{staticClass:"column is-10 is-offset-1"},[a("label",{staticClass:"label is-large"},[s._v("Budget")]),s._v(" "),a("div",{staticClass:"field has-addons"},[s._m(4),s._v(" "),a("p",{staticClass:"control has-icons-right is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.budget,expression:"budget"},{name:"validate",rawName:"v-validate",value:"required|max_value:1000000",expression:"'required|max_value:1000000'"}],class:{input:!0,"is-large":!0,"is-danger":s.errors.has("budget")},attrs:{name:"budget",min:"0",max:"1000000",maxlength:"7",type:"number",placeholder:"0"},domProps:{value:s.budget},on:{input:function(e){e.target.composing||(s.budget=e.target.value)}}}),s._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:s.budget&&!s.errors.has("budget"),expression:"budget && !errors.has('budget')"}],staticClass:"fas fa-check"})]),s._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("budget"),expression:"errors.has('budget')"}],staticClass:"fas fa-exclamation-triangle"})]),s._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("budget"),expression:"errors.has('budget')"}],staticClass:"help is-danger"},[s._v(s._s(s.errors.first("budget")))])])])]),s._v(" "),a("div",{staticClass:"column is-10 is-offset-1"},[a("label",{staticClass:"label is-large"},[s._v("Project Description")]),s._v(" "),a("p",{staticClass:"control has-icons-left has-icons-right"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:s.description,expression:"description"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{textarea:!0,"is-large":!0,"is-danger":s.errors.has("description")},attrs:{name:"description",maxlength:"10000",rows:"10",placeholder:"This is my project description."},domProps:{value:s.description},on:{input:function(e){e.target.composing||(s.description=e.target.value)}}}),s._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:s.description&&!s.errors.has("description"),expression:"description && !errors.has('description')"}],staticClass:"fas fa-check"})]),s._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("description"),expression:"errors.has('description')"}],staticClass:"fas fa-exclamation-triangle"})]),s._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.has("description"),expression:"errors.has('description')"}],staticClass:"help is-danger"},[s._v(s._s(s.errors.first("description")))])])]),s._v(" "),s._m(5)])])]),s._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!s.incomplete,expression:"!incomplete"}],attrs:{id:"success"}},[a("h1",{staticClass:"has-text-success"},[a("i",{staticClass:"fas fa-check"}),s._v("\n      "+s._s(s.status)+"\n    ")])])])},staticRenderFns:[function(){var s=this.$createElement,e=this._self._c||s;return e("span",{staticClass:"icon is-large is-left"},[e("i",{staticClass:"fas fa-user"})])},function(){var s=this.$createElement,e=this._self._c||s;return e("span",{staticClass:"icon is-large is-left"},[e("i",{staticClass:"fas fa-user-plus"})])},function(){var s=this.$createElement,e=this._self._c||s;return e("span",{staticClass:"icon is-large is-left"},[e("i",{staticClass:"fas fa-envelope"})])},function(){var s=this.$createElement,e=this._self._c||s;return e("span",{staticClass:"icon is-large is-left"},[e("i",{staticClass:"fas fa-phone"})])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",{staticClass:"control"},[e("a",{staticClass:"button is-static is-large"},[this._v("\n                $\n              ")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"column is-10 is-offset-1"},[e("p",{staticClass:"control center"},[e("button",{staticClass:"button is-large is-primary is-rounded is-centered",attrs:{type:"submit"}},[this._v("Submit")])])])}]};var l=a("VU/8")(r,n,!1,function(s){a("bipY")},null,null).exports;t.a.config.productionTip=!1,new t.a({el:"#app",components:{App:l},template:"<App/>"})},bipY:function(s,e){}},["NHnr"]);
//# sourceMappingURL=app.ccfd900a19b449881a5e.js.map