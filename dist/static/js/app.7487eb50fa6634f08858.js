webpackJsonp([1],{NHnr:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a("7+uW"),i=a("sUu7");t.a.use(i.a);var r={name:"App",data:function(){return{firstName:"",lastName:"",fullName:"",email:"",phone:"",budget:"",projectType:"",description:"",formDataObject:"",status:"",incomplete:!0}},watch:{firstName:function(e){this.fullName=e+" "+this.lastName},lastName:function(e){this.fullName=this.firstName+" "+e}},methods:{createFullName:function(){return this.firstName+" "+this.lastName},createFormDataObject:function(){return{name:this.fullName,email:this.email,phone:this.phone,projectType:this.projectType,budget:this.budget,description:this.description}},validateBeforeSubmit:function(){var e=this;this.$validator.validateAll().then(function(s){if(s)return e.formDataObject=e.createFormDataObject(),e.status="Form Submitted!",console.log("Form Submitted!"),console.log("Data: ","Name:",e.fullName,"Email:",e.email,"Phone:",e.phone,"Project Type:",e.projectType,"Budget:",e.budget,"Description:",e.description),console.log("Data in single object: ",e.formDataObject),void(e.incomplete=!1);alert("Please complete the form and try again!")})}}},l={render:function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("span",{staticClass:"content__title__logo"},[a("a",{attrs:{href:"https://fueled.com/"}},[a("svg",{staticClass:"svg-logo",attrs:{width:"170",height:"170",viewBox:"0 0 170 170"}},[a("path",{attrs:{fill:"#AE0000",d:"M0 0h170v170H0z"}}),e._v(" "),a("path",{attrs:{d:"M24.78 91.1h2.48V78.9h-2.48v-2.38h17.45v4.88h-2.97v-2.5h-8.6v5h9.65v2.53h-9.6v4.64h3.17v2.37H24.8V91.1zm21.8-.58v-11.6H44.1v-2.38h8.73v2.38H50V89.4l1.5 1.46h7.02l1.52-1.48V78.9h-2.87v-2.38h8.74v2.38h-2.43v11.6l-2.94 2.95H49.55l-2.97-2.95zm21.3.58h2.47V78.9h-2.48v-2.38h17.9v4.8h-2.93V78.9h-9.08v4.83h9.74v2.43h-9.74v4.9h9.08v-2.42h2.97v4.8H67.9V91.1zm19.87 0h2.48V78.9h-2.48v-2.38h9.1v2.38h-3.2v12.2h7.62v-2.47h2.94v4.84H87.78V91.1zm18.42 0h2.48V78.9h-2.48v-2.38h17.92v4.8h-2.98V78.9h-9.08v4.83h9.75v2.43h-9.75v4.9h9.08v-2.42h2.97v4.8h-17.9V91.1zm19.88 0h2.48V78.9h-2.48v-2.38h16.22l2.95 2.94V90.5l-2.95 2.95h-16.22V91.1zm14.26-.06l1.5-1.5v-9.08l-1.5-1.5h-8.34v12.08h8.37z",fill:"#FFF"}})])])]),e._v(" "),a("h1",{attrs:{id:"title"}},[e._v("PROJECT REQUEST")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.incomplete,expression:"incomplete"}]},[a("form",{on:{submit:function(s){return s.preventDefault(),e.validateBeforeSubmit(s)}}},[a("div",{staticClass:"columns is-rtl is-multiline"},[a("div",{staticClass:"column is-10 is-offset-1"},[a("label",{staticClass:"label is-large"},[e._v("First Name")]),e._v(" "),a("p",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"},{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],class:{input:!0,"is-large":!0,"is-danger":e.errors.has("firstName")},attrs:{name:"firstName","data-vv-as":"First Name",maxlength:"30",type:"text",placeholder:"Jane"},domProps:{value:e.firstName},on:{input:function(s){s.target.composing||(e.firstName=s.target.value)}}}),e._v(" "),e._m(0),e._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.firstName&&!e.errors.has("firstName"),expression:"firstName && !errors.has('firstName')"}],staticClass:"fas fa-check"})]),e._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("firstName"),expression:"errors.has('firstName')"}],staticClass:"fas fa-exclamation-triangle"})]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("firstName"),expression:"errors.has('firstName')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("firstName")))])])]),e._v(" "),a("div",{staticClass:"column is-10 is-offset-1"},[a("label",{staticClass:"label is-large"},[e._v("Last Name")]),e._v(" "),a("p",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"},{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],class:{input:!0,"is-large":!0,"is-danger":e.errors.has("lastName")},attrs:{name:"lastName","data-vv-as":"Last Name",maxlength:"30",type:"text",placeholder:"Doe"},domProps:{value:e.lastName},on:{input:function(s){s.target.composing||(e.lastName=s.target.value)}}}),e._v(" "),e._m(1),e._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.lastName&&!e.errors.has("lastName"),expression:"lastName && !errors.has('lastName')"}],staticClass:"fas fa-check"})]),e._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("lastName"),expression:"errors.has('lastName')"}],staticClass:"fas fa-exclamation-triangle"})]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("lastName"),expression:"errors.has('lastName')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("lastName")))])])]),e._v(" "),a("div",{staticClass:"column is-10 is-offset-1"},[a("label",{staticClass:"label is-large"},[e._v("Email")]),e._v(" "),a("p",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],class:{input:!0,"is-large":!0,"is-danger":e.errors.has("email")},attrs:{name:"email","data-vv-as":"Email",maxlength:"50",type:"text",placeholder:"jane.doe@gmail.com"},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}}),e._v(" "),e._m(2),e._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.email&&!e.errors.has("email"),expression:"email && !errors.has('email')"}],staticClass:"fas fa-check"})]),e._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"fas fa-exclamation-triangle"})]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("email")))])])]),e._v(" "),a("div",{staticClass:"column is-10 is-offset-1"},[a("label",{staticClass:"label is-large"},[e._v("Phone")]),e._v(" "),a("p",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"},{name:"validate",rawName:"v-validate",value:"numeric|digits:10",expression:"'numeric|digits:10'"}],class:{input:!0,"is-large":!0,"is-danger":e.errors.has("phone"),success:10===e.phone.length&&!e.errors.has("phone")},attrs:{name:"phone","data-vv-as":"Phone",maxlength:"10",type:"tel",placeholder:"5551234567"},domProps:{value:e.phone},on:{input:function(s){s.target.composing||(e.phone=s.target.value)}}}),e._v(" "),e._m(3),e._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:10===e.phone.length&&!e.errors.has("phone"),expression:"phone.length === 10 && !errors.has('phone')"}],staticClass:"fas fa-check"})]),e._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"fas fa-exclamation-triangle"})]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("phone")))])])]),e._v(" "),a("div",{staticClass:"column is-10 is-offset-1"},[a("label",{staticClass:"label is-large"},[e._v("Project Type")]),e._v(" "),a("p",{staticClass:"control is-expanded"},[a("span",{staticClass:"select is-large is-fullwidth"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.projectType,expression:"projectType"},{name:"validate",rawName:"v-validate",value:"in:ios,web,branding,other",expression:"'in:ios,web,branding,other'"}],on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.projectType=s.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),e._v(" "),a("option",{attrs:{value:"ios"}},[e._v("iOS")]),e._v(" "),a("option",{attrs:{value:"web"}},[e._v("Web")]),e._v(" "),a("option",{attrs:{value:"branding"}},[e._v("Branding")]),e._v(" "),a("option",{attrs:{value:"other"}},[e._v("Other")])])])])]),e._v(" "),a("div",{staticClass:"column is-10 is-offset-1"},[a("label",{staticClass:"label is-large"},[e._v("Budget")]),e._v(" "),a("div",{staticClass:"field has-addons"},[e._m(4),e._v(" "),a("p",{staticClass:"control has-icons-right is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.budget,expression:"budget"},{name:"validate",rawName:"v-validate",value:"required|between:0,1000000",expression:"'required|between:0,1000000'"}],class:{input:!0,"is-large":!0,"is-danger":e.errors.has("budget")},attrs:{name:"budget","data-vv-as":"Budget",min:"0",max:"1000000",maxlength:"7",type:"number",placeholder:"0"},domProps:{value:e.budget},on:{input:function(s){s.target.composing||(e.budget=s.target.value)}}}),e._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.budget&&!e.errors.has("budget"),expression:"budget && !errors.has('budget')"}],staticClass:"fas fa-check"})]),e._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("budget"),expression:"errors.has('budget')"}],staticClass:"fas fa-exclamation-triangle"})]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("budget"),expression:"errors.has('budget')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("budget")))])])])]),e._v(" "),a("div",{staticClass:"column is-10 is-offset-1"},[a("label",{staticClass:"label is-large"},[e._v("Project Description")]),e._v(" "),a("p",{staticClass:"control has-icons-left has-icons-right"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{textarea:!0,"is-large":!0,"is-danger":e.errors.has("description")},attrs:{name:"description","data-vv-as":"Project Description",maxlength:"10000",rows:"10",placeholder:"This is my project description."},domProps:{value:e.description},on:{input:function(s){s.target.composing||(e.description=s.target.value)}}}),e._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.description&&!e.errors.has("description"),expression:"description && !errors.has('description')"}],staticClass:"fas fa-check"})]),e._v(" "),a("span",{staticClass:"icon is-large is-right"},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("description"),expression:"errors.has('description')"}],staticClass:"fas fa-exclamation-triangle"})]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("description"),expression:"errors.has('description')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("description")))])])]),e._v(" "),e._m(5)])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.incomplete,expression:"!incomplete"}],attrs:{id:"success"}},[a("h1",{staticClass:"has-text-success"},[a("i",{staticClass:"fas fa-check"}),e._v("\n      "+e._s(e.status)+"\n    ")])])])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("span",{staticClass:"icon is-large is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var e=this.$createElement,s=this._self._c||e;return s("span",{staticClass:"icon is-large is-left"},[s("i",{staticClass:"fas fa-user-plus"})])},function(){var e=this.$createElement,s=this._self._c||e;return s("span",{staticClass:"icon is-large is-left"},[s("i",{staticClass:"fas fa-envelope"})])},function(){var e=this.$createElement,s=this._self._c||e;return s("span",{staticClass:"icon is-large is-left"},[s("i",{staticClass:"fas fa-phone"})])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",{staticClass:"control"},[s("a",{staticClass:"button is-static is-large"},[this._v("\n                $\n              ")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"column is-10 is-offset-1"},[s("p",{staticClass:"control center"},[s("button",{staticClass:"button is-large is-primary is-rounded is-centered",attrs:{type:"submit"}},[this._v("Submit")])])])}]};var o=a("VU/8")(r,l,!1,function(e){a("YSZl")},null,null).exports;t.a.config.productionTip=!1,new t.a({el:"#app",components:{App:o},template:"<App/>"})},YSZl:function(e,s){}},["NHnr"]);
//# sourceMappingURL=app.7487eb50fa6634f08858.js.map