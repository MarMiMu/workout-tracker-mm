(function(e){function t(t){for(var c,l,a=t[0],s=t[1],u=t[2],b=0,d=[];b<a.length;b++)l=a[b],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);i&&i(t);while(d.length)d.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],c=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(c=!1)}c&&(n.splice(t--,1),e=l(l.s=r[0]))}return e}var c={},o={app:0},n=[];function l(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=c,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(r,c,function(t){return e[t]}.bind(null,c));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var i=s;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0926":function(e,t,r){"use strict";r("282e")},"0f05":function(e,t,r){},"11c1":function(e,t,r){e.exports=r.p+"img/running-blue.6054179b.png"},"282e":function(e,t,r){},"38e9":function(e,t,r){e.exports=r.p+"img/dumbbell-light.ef471ab1.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var c=r("7a23"),o={key:0,class:"min-h-full font-Poppins box-border"};function n(e,t,r,n,l,a){var s=Object(c["y"])("Navigation"),u=Object(c["y"])("router-view");return n.appReady?(Object(c["t"])(),Object(c["f"])("div",o,[Object(c["j"])(s),Object(c["j"])(u)])):Object(c["e"])("",!0)}var l=r("38e9"),a=r.n(l),s={class:"bg-wt-blue text-white"},u={class:"container py-5 px-4 flex flex-column gap-4 items-center justify-items-center sm:flex-row"},i=Object(c["g"])("div",{class:"flex items-center gap-x-4"},[Object(c["g"])("img",{class:"w-14",src:a.a,alt:""}),Object(c["g"])("h1",{class:"text-lg"},"Workout Tracker")],-1),b={ref:"navbar",class:"fixed right-0 top-0 bg-white w-1/2 h-full translate-x-full z-5 transition-transform duration-500 ease-in-out sm:static sm:justify-items-center sm:w-full sm:flex sm:flex-column sm:py-5 sm:px-4 sm:gap-4 sm:items-center sm:bg-wt-blue"},d={class:"text-black mt-32 sm:flex sm:flex-1 sm:justify-end sm:gap-x-10 sm:text-white sm:mt-0"},p=Object(c["i"])("Home"),f=Object(c["i"])("Create"),m=Object(c["i"])("Login");function j(e,t,r,o,n,l){var a=Object(c["y"])("router-link"),j=Object(c["y"])("font-awesome-icon");return Object(c["t"])(),Object(c["f"])("header",s,[Object(c["g"])("nav",u,[Object(c["j"])(a,{class:"cursor-pointer w-1/2",to:{name:"Home"}},{default:Object(c["F"])((function(){return[i]})),_:1}),Object(c["g"])("div",b,[Object(c["j"])(j,{icon:"times-circle",id:"close",class:"block text-black float-right mr-4 mt-9 text-2xl sm:hidden z-5",onClick:o.closeNav},null,8,["onClick"]),Object(c["g"])("ul",d,[Object(c["j"])(a,{class:"cursor-pointer block mt-4 ml-4 hover:underline hover:decoration-white sm:mt-2",to:{name:"Home"}},{default:Object(c["F"])((function(){return[p]})),_:1}),o.user?(Object(c["t"])(),Object(c["d"])(a,{key:0,class:"cursor-pointer block mt-4 ml-4 hover:underline hover:decoration-white sm:mt-2",to:{name:"Create"}},{default:Object(c["F"])((function(){return[f]})),_:1})):Object(c["e"])("",!0),o.user?Object(c["e"])("",!0):(Object(c["t"])(),Object(c["d"])(a,{key:1,class:"cursor-pointer block mt-4 ml-4 hover:underline hover:decoration-white sm:mt-2",to:{name:"Login"}},{default:Object(c["F"])((function(){return[m]})),_:1})),o.user?(Object(c["t"])(),Object(c["f"])("li",{key:2,onClick:t[0]||(t[0]=function(){return o.logout&&o.logout.apply(o,arguments)}),class:"cursor-pointer block mt-4 ml-4 hover:underline hover:decoration-white sm:mt-2"}," Logout ")):Object(c["e"])("",!0)])],512),Object(c["j"])(j,{icon:"bars",id:"menu",class:"static sm:hidden text-2xl ml-48 z-1",onClick:o.openNav},null,8,["onClick"])])])}var x=r("1da1"),O=(r("96cf"),r("940b")),g="https://ulttgguniqyebagcogxo.supabase.co",w="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsdHRnZ3VuaXF5ZWJhZ2NvZ3hvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU4Mjg1NjUsImV4cCI6MTk3MTQwNDU2NX0.L-FYWsNUSzkeMqTI22LS121nnG15VfN4vut9JpV0m30",v=Object(O["a"])(g,w),h=r("6c02"),y=Object(c["v"])({user:null}),k={setUser:function(e){y.user=e?e.user:null}},U={state:y,methods:k},T={setup:function(){var e=Object(c["w"])(null),t=Object(c["b"])((function(){return U.state.user})),r=Object(h["d"])(),o=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.auth.signOut();case 2:r.push({name:"Home"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c["r"])((function(){screen.width<640&&e.value.classList.add("test")}));var n=function(){e.value.classList.remove("openNav")},l=function(){e.value.classList.add("openNav")};return{logout:o,user:t,navbar:e,closeNav:n,openNav:l}}},V=(r("0926"),r("d959")),C=r.n(V);const G=C()(T,[["render",j]]);var D=G,E={components:{Navigation:D},setup:function(){var e=Object(c["w"])(null),t=v.auth.user();return t||(e.value=!0),v.auth.onAuthStateChange((function(t,r){U.methods.setUser(r),e.value=!0})),{appReady:e}}};r("61b6");const R=C()(E,[["render",n]]);var M=R,S=(r("45fc"),r("11c1")),L=r.n(S),A=r("9c6c"),W=r.n(A),q={key:0,class:"container mt-10 px-4"},I={key:0,class:"w-full flex flex-col items-center"},P=Object(c["g"])("h1",{class:"text-2xl"},"Looks empty here...",-1),H=Object(c["i"])("Create Workout"),N={key:1,class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},F={key:0,src:L.a,alt:"",class:"h-24 w-auto"},_={key:1,src:W.a,alt:"",class:"h-24 w-auto"},B={class:"mt-4 py-1 px-3 text-xs text-white bg-wt-blue shadow-md rounded-lg"},J={key:2,class:"flex justify-center"},z={class:"mt-8 mb-2 text-center text-xl text-wt-blue"};function Z(e,t,r,o,n,l){var a=Object(c["y"])("router-link");return o.dataLoaded?(Object(c["t"])(),Object(c["f"])("div",q,[0===o.data.length?(Object(c["t"])(),Object(c["f"])("div",I,[P,Object(c["j"])(a,{to:{name:"Create"},class:"mt-6 py-2 px-6 rounded-sm text-sm text-white bg-wt-blue duration-200 border-solid border-2 border-transparent hover:border-wt-blue hover:bg-white hover:text-wt-blue"},{default:Object(c["F"])((function(){return[H]})),_:1})])):(Object(c["t"])(),Object(c["f"])("div",N,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(o.data,(function(e,t){return Object(c["t"])(),Object(c["d"])(a,{class:"flex flex-col items-center bg-light-grey p-8 shadow-md cursor-pointer",to:{name:"View-Workout",params:{workoutId:e.id}},key:t},{default:Object(c["F"])((function(){return["cardio"===e.workoutType?(Object(c["t"])(),Object(c["f"])("img",F)):(Object(c["t"])(),Object(c["f"])("img",_)),Object(c["g"])("p",B,Object(c["A"])(e.workoutType),1),"cardio"!==e.workoutType?(Object(c["t"])(),Object(c["f"])("div",J,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(e.muscleGroups,(function(e,t){return Object(c["t"])(),Object(c["f"])("p",{key:t,class:"mt-4 mx-1 py-1 px-3 text-xs text-white bg-wt-blue shadow-md rounded-lg"},Object(c["A"])(e),1)})),128))])):Object(c["e"])("",!0),Object(c["g"])("h1",z,Object(c["A"])(e.workoutDate),1)]})),_:2},1032,["to"])})),128))]))])):Object(c["e"])("",!0)}r("26e9");var X={name:"Home",components:{},setup:function(){var e=Object(c["w"])([]),t=Object(c["w"])(null),r=function(){var r=Object(x["a"])(regeneratorRuntime.mark((function r(){var c,o,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.from("workouts").select("*");case 3:if(c=r.sent,o=c.data,n=c.error,!n){r.next=8;break}throw n;case 8:e.value=o,e.value=e.value.reverse(),t.value=!0,r.next=16;break;case 13:r.prev=13,r.t0=r["catch"](0),console.warn(r.t0.message);case 16:case"end":return r.stop()}}),r,null,[[0,13]])})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=Object(x["a"])(regeneratorRuntime.mark((function r(){var c,o,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.from("workouts").select("*").eq("workoutType","strength");case 3:if(c=r.sent,o=c.data,n=c.error,!n){r.next=8;break}throw n;case 8:e.value=o,t.value=!0,r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),console.warn(r.t0.message);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(){return r.apply(this,arguments)}}();return r(),{data:e,dataLoaded:t,filterData:o}}};const Y=C()(X,[["render",Z]]);var Q=Y,K={class:"max-w-screen-sm mx-auto px-4 py-10"},$={key:0,class:"mb-10 p-4 rounded-md bg-light-grey shadow-lg"},ee={class:"text-red-500"},te=Object(c["g"])("h1",{class:"text-3xl text-wt-blue mb-4"},"Login",-1),re={class:"flex flex-col mb-2"},ce=Object(c["g"])("label",{for:"email",class:"mb-1 text-sm text-wt-blue"},"Email",-1),oe={class:"flex flex-col mb-2"},ne=Object(c["g"])("label",{for:"password",class:"mb-1 text-sm text-wt-blue"},"Password",-1),le=Object(c["g"])("button",{type:"submit",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-wt-blue duration-200 border-solid border-2 border-transparent hover:border-wt-blue hover:bg-white hover:text-wt-blue"}," Login ",-1),ae=Object(c["i"])("Don't have an account? "),se=Object(c["g"])("span",{class:"text-wt-blue"},"Register",-1);function ue(e,t,r,o,n,l){var a=Object(c["y"])("router-link");return Object(c["t"])(),Object(c["f"])("div",K,[o.errorMsg?(Object(c["t"])(),Object(c["f"])("div",$,[Object(c["g"])("p",ee,Object(c["A"])(o.errorMsg),1)])):Object(c["e"])("",!0),Object(c["g"])("form",{onSubmit:t[2]||(t[2]=Object(c["H"])((function(){return o.login&&o.login.apply(o,arguments)}),["prevent"])),class:"p-8 flex flex-col bg-light-grey rounded-md shadow-lg"},[te,Object(c["g"])("div",re,[ce,Object(c["G"])(Object(c["g"])("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.email=e})},null,512),[[c["D"],o.email]])]),Object(c["g"])("div",oe,[ne,Object(c["G"])(Object(c["g"])("input",{type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.password=e})},null,512),[[c["D"],o.password]])]),le,Object(c["j"])(a,{class:"text-sm mt-6 text-center",to:{name:"Register"}},{default:Object(c["F"])((function(){return[ae,se]})),_:1})],32)])}r("4795");var ie={name:"login",setup:function(){var e=Object(h["d"])(),t=Object(c["w"])(null),r=Object(c["w"])(null),o=Object(c["w"])(null),n=function(){var c=Object(x["a"])(regeneratorRuntime.mark((function c(){var n,l;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.auth.signIn({email:t.value,password:r.value});case 3:if(n=c.sent,l=n.error,!l){c.next=7;break}throw l;case 7:e.push({name:"Home"}),c.next=14;break;case 10:c.prev=10,c.t0=c["catch"](0),o.value="Error: ".concat(c.t0.message),setTimeout((function(){o.value=null}),5e3);case 14:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(){return c.apply(this,arguments)}}();return{email:t,password:r,errorMsg:o,login:n}}};const be=C()(ie,[["render",ue]]);var de=be,pe={class:"max-w-screen-sm mx-auto px-4 py-10"},fe={key:0,class:"mb-10 p-4 rounded-md bg-light-grey shadow-lg"},me={class:"text-red-500"},je=Object(c["g"])("h1",{class:"text-3xl text-at-light-green mb-4"},"Register",-1),xe={class:"flex flex-col mb-2"},Oe=Object(c["g"])("label",{for:"email",class:"mb-1 text-sm text-at-light-green"},"Email",-1),ge={class:"flex flex-col mb-2"},we=Object(c["g"])("label",{for:"password",class:"mb-1 text-sm text-at-light-green"},"Password",-1),ve={class:"flex flex-col mb-2"},he=Object(c["g"])("label",{for:"confirmPassword",class:"mb-1 text-sm text-at-light-green"},"Confirm Password",-1),ye=Object(c["g"])("button",{type:"submit",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"}," Register ",-1),ke=Object(c["i"])("Already have an account? "),Ue=Object(c["g"])("span",{class:"text-at-light-green"},"Login",-1);function Te(e,t,r,o,n,l){var a=Object(c["y"])("router-link");return Object(c["t"])(),Object(c["f"])("div",pe,[o.errorMsg?(Object(c["t"])(),Object(c["f"])("div",fe,[Object(c["g"])("p",me,Object(c["A"])(o.errorMsg),1)])):Object(c["e"])("",!0),Object(c["g"])("form",{onSubmit:t[3]||(t[3]=Object(c["H"])((function(){return o.register&&o.register.apply(o,arguments)}),["prevent"])),class:"p-8 flex flex-col bg-light-grey rounded-md shadow-lg"},[je,Object(c["g"])("div",xe,[Oe,Object(c["G"])(Object(c["g"])("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.email=e})},null,512),[[c["D"],o.email]])]),Object(c["g"])("div",ge,[we,Object(c["G"])(Object(c["g"])("input",{type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.password=e})},null,512),[[c["D"],o.password]])]),Object(c["g"])("div",ve,[he,Object(c["G"])(Object(c["g"])("input",{type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"confirmPassword","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.confirmPassword=e})},null,512),[[c["D"],o.confirmPassword]])]),ye,Object(c["j"])(a,{class:"text-sm mt-6 text-center",to:{name:"Login"}},{default:Object(c["F"])((function(){return[ke,Ue]})),_:1})],32)])}var Ve={name:"register",setup:function(){var e=Object(h["d"])(),t=Object(c["w"])(null),r=Object(c["w"])(null),o=Object(c["w"])(null),n=Object(c["w"])(null),l=function(){var c=Object(x["a"])(regeneratorRuntime.mark((function c(){var l,a;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:if(r.value!==o.value){c.next=16;break}return c.prev=1,c.next=4,v.auth.signUp({email:t.value,password:r.value});case 4:if(l=c.sent,a=l.error,!a){c.next=8;break}throw a;case 8:e.push({name:"Login"}),c.next=15;break;case 11:c.prev=11,c.t0=c["catch"](1),n.value=c.t0.message,setTimeout((function(){n.value=null}),5e3);case 15:return c.abrupt("return");case 16:n.value="Error: Passwords do not match",setTimeout((function(){n.value=null}),5e3);case 18:case"end":return c.stop()}}),c,null,[[1,11]])})));return function(){return c.apply(this,arguments)}}();return{email:t,password:r,confirmPassword:o,errorMsg:n,register:l}}};const Ce=C()(Ve,[["render",Te]]);var Ge=Ce,De=r("b666"),Ee=r.n(De),Re={class:"max-w-screen-lg mx-auto px-4 py-10"},Me={key:0,class:"mb-10 p-4 bg-light-grey rounded-md shadow-lg"},Se={class:"text-wt-blue"},Le={class:"text-red-500"},Ae={class:"p-8 flex item-start bg-light-grey rounded-md shadow-lg"},We=Object(c["g"])("h1",{class:"text-2xl text-wt-blue"},"Record Workout",-1),qe={class:"flex flex-col"},Ie=Object(c["g"])("label",{for:"workout-date",class:"mb-1 text-sm text-wt-blue"},"Workout Date",-1),Pe={class:"flex flex-col"},He=Object(c["g"])("label",{for:"workout-type",class:"mb-1 text-sm text-wt-blue"},"Workout Type",-1),Ne=Object(c["g"])("option",{value:"select-workout"},"Select Workout",-1),Fe=Object(c["g"])("option",{value:"Strength"},"Strength",-1),_e=Object(c["g"])("option",{value:"Hypertrophy"},"Hypertrophy",-1),Be=Object(c["g"])("option",{value:"Cardio"},"Cardio",-1),Je=[Ne,Fe,_e,Be],ze={key:0,class:"flex flex-col gap-y-4"},Ze={class:"flex flex-col md:w-1/4"},Xe=Object(c["g"])("label",{for:"\n          exercise-name",class:"mb-1 text-sm text-wt-blue"},"Exercise",-1),Ye=["onUpdate:modelValue"],Qe={class:"flex flex-col flex-1"},Ke=Object(c["g"])("label",{for:"muscle",class:"mb-1 text-sm text-wt-blue"},"Muscle",-1),$e=["onUpdate:modelValue"],et=Object(c["h"])('<option value="Back">Back</option><option value="Chest">Chest</option><option value="Bicep">Bicep</option><option value="Tricep">Tricep</option><option value="Legs">Legs</option><option value="Shoulders">Shoulders</option>',6),tt=[et],rt={class:"flex flex-col flex-1"},ct=Object(c["g"])("label",{for:"sets",class:"mb-1 text-sm text-wt-blue"},"Sets",-1),ot=["onUpdate:modelValue"],nt={class:"flex flex-col flex-1"},lt=Object(c["g"])("label",{for:"reps",class:"mb-1 text-sm text-wt-blue"},"Reps",-1),at=["onUpdate:modelValue"],st={class:"flex flex-col flex-1"},ut=Object(c["g"])("label",{for:"weight",class:"mb-1 text-sm text-wt-blue"},"Weight (LB's)",-1),it=["onUpdate:modelValue"],bt={class:"flex flex-col flex-1"},dt=Object(c["g"])("label",{for:"notes",class:"mb-1 text-sm text-wt-blue"},"Notes",-1),pt=["onUpdate:modelValue"],ft=["onClick"],mt={key:1,class:"flex flex-col gap-y-4"},jt={class:"flex flex-col md:w-1/3"},xt=Object(c["g"])("label",{for:"cardio-type",class:"mb-1 text-sm text-wt-blue"},"Type",-1),Ot=["onUpdate:modelValue"],gt=Object(c["g"])("option",{value:"#"},"Select Type",-1),wt=Object(c["g"])("option",{value:"run"},"Run",-1),vt=Object(c["g"])("option",{value:"walk"},"Walk",-1),ht=[gt,wt,vt],yt={class:"flex flex-col flex-1"},kt=Object(c["g"])("label",{for:"distance",class:"mb-1 text-sm text-wt-blue"},"Distance",-1),Ut=["onUpdate:modelValue"],Tt={class:"flex flex-col flex-1"},Vt=Object(c["g"])("label",{for:"duration",class:"mb-1 text-sm text-wt-blue"},"Duration",-1),Ct=["onUpdate:modelValue"],Gt={class:"flex flex-col flex-1"},Dt=Object(c["g"])("label",{for:"pace",class:"mb-1 text-sm text-wt-blue"},"Pace",-1),Et=["onUpdate:modelValue"],Rt=["onClick"],Mt=Object(c["g"])("button",{type:"submit",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-wt-blue duration-200 border-solid border-2 border-transparent hover:border-wt-blue hover:bg-white hover:text-wt-blue"}," Record Workout ",-1);function St(e,t,r,o,n,l){return Object(c["t"])(),Object(c["f"])("div",Re,[o.statusMsg||o.errorMsg?(Object(c["t"])(),Object(c["f"])("div",Me,[Object(c["g"])("p",Se,Object(c["A"])(o.statusMsg),1),Object(c["g"])("p",Le,Object(c["A"])(o.errorMsg),1)])):Object(c["e"])("",!0),Object(c["g"])("div",Ae,[Object(c["g"])("form",{onSubmit:t[6]||(t[6]=Object(c["H"])((function(){return o.createWorkout&&o.createWorkout.apply(o,arguments)}),["prevent"])),class:"flex flex-col gap-y-5 w-full"},[We,Object(c["g"])("div",qe,[Ie,Object(c["G"])(Object(c["g"])("input",{onChange:t[0]||(t[0]=function(){return e.dateFormat&&e.dateFormat.apply(e,arguments)}),type:"date",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"workout-date","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.workoutDate=e})},null,544),[[c["D"],o.workoutDate]])]),Object(c["g"])("div",Pe,[He,Object(c["G"])(Object(c["g"])("select",{id:"workout-type",required:"",class:"p-2 text-gray-500 focus:outline-none",onChange:t[2]||(t[2]=function(){return o.workoutChange&&o.workoutChange.apply(o,arguments)}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.workoutType=e})},Je,544),[[c["C"],o.workoutType]])]),"Strength"===o.workoutType||"Hypertrophy"===o.workoutType?(Object(c["t"])(),Object(c["f"])("div",ze,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(o.exercises,(function(e,t){return Object(c["t"])(),Object(c["f"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative md:flex-row",key:t},[Object(c["g"])("div",Ze,[Xe,Object(c["G"])(Object(c["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.exercise=t}},null,8,Ye),[[c["D"],e.exercise]])]),Object(c["g"])("div",Qe,[Ke,Object(c["G"])(Object(c["g"])("select",{required:"",id:"muscle-group",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.muscleGroup=t}},tt,8,$e),[[c["C"],e.muscleGroup]])]),Object(c["g"])("div",rt,[ct,Object(c["G"])(Object(c["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.sets=t}},null,8,ot),[[c["D"],e.sets]])]),Object(c["g"])("div",nt,[lt,Object(c["G"])(Object(c["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.reps=t}},null,8,at),[[c["D"],e.reps]])]),Object(c["g"])("div",st,[ut,Object(c["G"])(Object(c["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.weight=t}},null,8,it),[[c["D"],e.weight]])]),Object(c["g"])("div",bt,[dt,Object(c["G"])(Object(c["g"])("textarea",{name:"notes",id:"notes",cols:"30",rows:"5","onUpdate:modelValue":function(t){return e.notes=t},class:"text-sm"},null,8,pt),[[c["D"],e.notes]])]),Object(c["g"])("img",{onClick:function(t){return o.deleteExercise(e.id)},src:Ee.a,alt:"",class:"h-4 w-auto absolute -left-5 cursor-pointer"},null,8,ft)])})),128)),Object(c["g"])("button",{onClick:t[4]||(t[4]=function(){return o.addExercise&&o.addExercise.apply(o,arguments)}),type:"button",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-wt-blue duration-200 border-solid border-2 border-transparent hover:border-wt-blue hover:bg-white hover:text-wt-blue"}," Add Exercise ")])):Object(c["e"])("",!0),"cardio"===o.workoutType?(Object(c["t"])(),Object(c["f"])("div",mt,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(o.exercises,(function(e,t){return Object(c["t"])(),Object(c["f"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative md:flex-row",key:t},[Object(c["g"])("div",jt,[xt,Object(c["G"])(Object(c["g"])("select",{id:"cardio-type",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.cardioType=t}},ht,8,Ot),[[c["C"],e.cardioType]])]),Object(c["g"])("div",yt,[kt,Object(c["G"])(Object(c["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.distance=t}},null,8,Ut),[[c["D"],e.distance]])]),Object(c["g"])("div",Tt,[Vt,Object(c["G"])(Object(c["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.duration=t}},null,8,Ct),[[c["D"],e.duration]])]),Object(c["g"])("div",Gt,[Dt,Object(c["G"])(Object(c["g"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.pace=t}},null,8,Et),[[c["D"],e.pace]])]),Object(c["g"])("img",{onClick:function(t){return o.deleteExercise(e.id)},src:Ee.a,alt:"",class:"h-4 w-auto absolute -left-5 cursor-pointer"},null,8,Rt)])})),128)),Object(c["g"])("button",{onClick:t[5]||(t[5]=function(){return o.addExercise&&o.addExercise.apply(o,arguments)}),type:"button",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-wt-blue duration-200 border-solid border-2 border-transparent hover:border-wt-blue hover:bg-white hover:text-wt-blue"}," Add Exercise ")])):Object(c["e"])("",!0),Mt],32)])])}var Lt=r("2909"),At=(r("4de4"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("8a77")),Wt={name:"create",setup:function(){var e=Object(c["w"])(""),t=Object(c["w"])("select-workout"),r=Object(c["w"])([]),o=Object(c["w"])([]),n=Object(c["w"])([]),l=Object(c["w"])(null),a=Object(c["w"])(null),s=function(){"Strength"!==t.value&&"Hypertrophy"!==t.value?o.value.push({id:Object(At["a"])(),cardioType:"",distance:"",duration:"",pace:""}):o.value.push({id:Object(At["a"])(),exercise:"",muscleGroup:"",sets:"",reps:"",weight:"",notes:""})},u=function(e){o.value.length>1?o.value=o.value.filter((function(t){return t.id!==e})):(a.value="Error: Cannot remove - need to have at least one exercise",setTimeout((function(){a.value=!1}),5e3))},i=function(){o.value=[],s()},b=function(){var c=Object(x["a"])(regeneratorRuntime.mark((function c(){var s,u,i;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:for(c.prev=0,s=0;s<o.value.length;s++)n.value.push(o.value[s].muscleGroup);return r.value=Object(Lt["a"])(new Set(n.value)),c.next=5,v.from("workouts").insert([{workoutDate:e.value,workoutType:t.value,exercises:o.value,muscleGroups:r.value}]);case 5:if(u=c.sent,i=u.error,!i){c.next=9;break}throw i;case 9:l.value="Success: Workout Created!",e.value=null,t.value="select-workout",o.value=[],r.value=[],setTimeout((function(){l.value=!1}),5e3),c.next=21;break;case 17:c.prev=17,c.t0=c["catch"](0),a.value="Error: ".concat(c.t0.message),setTimeout((function(){a.value=!1}),5e3);case 21:case"end":return c.stop()}}),c,null,[[0,17]])})));return function(){return c.apply(this,arguments)}}();return{workoutDate:e,workoutType:t,exercises:o,muscleGroups:r,statusMsg:l,errorMsg:a,addExercise:s,deleteExercise:u,workoutChange:i,createWorkout:b}}};const qt=C()(Wt,[["render",St]]);var It=qt,Pt=r("6122"),Ht=r.n(Pt),Nt=r("a407"),Ft=r.n(Nt),_t={class:"max-w-screen-md mx-auto px-4 py-10"},Bt={key:0,class:"mb-10 p-4 rounded-md shadow-md bg-light-grey"},Jt={class:"text-wt-blue"},zt={class:"text-red-500"},Zt={key:1,class:""},Xt={class:"flex flex-col items-center p-8 rounded-md shadow-md bg-light-grey relative"},Yt={key:0,class:"flex absolute left-2 top-2 gap-x-2"},Qt=Object(c["g"])("img",{src:Ht.a,class:"h-3.5 w-auto",alt:""},null,-1),Kt=[Qt],$t=Object(c["g"])("img",{src:Ft.a,class:"h-3.5 w-auto",alt:""},null,-1),er=[$t],tr={key:1,class:"h-24 w-auto",src:L.a,alt:""},rr={key:2,class:"h-24 w-auto",src:W.a,alt:""},cr={class:"mt-6 py-1.5 px-5 text-xs text-white bg-wt-blue rounded-lg shadow-md"},or={key:3,class:"flex justify-center"},nr={class:"w-full mt-6"},lr={key:1,class:"text-wt-blue text-2xl text-center"},ar={class:"mt-10 p-8 rounded-md flex flex-col item-center bg-light-grey shadow-md"},sr={key:0,class:"flex flex-col gap-y-4 w-full"},ur={class:"flex flex-2 flex-col md:w-1/3"},ir=Object(c["g"])("label",{for:"exercise-name",class:"mb-1 text-sm text-wt-blue"},"Exercise",-1),br=["onUpdate:modelValue"],dr={key:1},pr={class:"flex flex-col flex-1"},fr=Object(c["g"])("label",{for:"muscle",class:"mb-1 text-sm text-wt-blue"},"Muscle",-1),mr=["onUpdate:modelValue"],jr=Object(c["h"])('<option value="Back">Back</option><option value="Chest">Chest</option><option value="Bicep">Bicep</option><option value="Tricep">Tricep</option><option value="Legs">Legs</option><option value="Shoulders">Shoulders</option>',6),xr=[jr],Or={key:1},gr={class:"flex flex-1 flex-col"},wr=Object(c["g"])("label",{for:"sets",class:"mb-1 text-sm text-wt-blue"},"Sets",-1),vr=["onUpdate:modelValue"],hr={key:1},yr={class:"flex flex-1 flex-col"},kr=Object(c["g"])("label",{for:"reps",class:"mb-1 text-sm text-wt-blue"},"Reps",-1),Ur=["onUpdate:modelValue"],Tr={key:1},Vr={class:"flex flex-1 flex-col"},Cr=Object(c["g"])("label",{for:"weight",class:"mb-1 text-sm text-wt-blue"},"Weight (LB's)",-1),Gr=["onUpdate:modelValue"],Dr={key:1},Er={class:"flex flex-1 flex-col"},Rr=Object(c["g"])("label",{for:"notes",class:"mb-1 text-sm text-wt-blue"},"Weight (LB's)",-1),Mr={key:0,name:"notes",id:"notes",cols:"30",rows:"5",class:"p-2 w-full text-gray-500 focus:outline-none"},Sr={key:1},Lr=["onClick"],Ar={key:1,class:"flex flex-col gap-y-4 w-full"},Wr={class:"flex flex-2 flex-col md:w-1/3"},qr=Object(c["g"])("label",{for:"cardioType",class:"mb-1 text-sm text-wt-blue"},"Type",-1),Ir=["onUpdate:modelValue"],Pr=Object(c["g"])("option",{value:"#"},"Select Type",-1),Hr=Object(c["g"])("option",{value:"run"},"Run",-1),Nr=Object(c["g"])("option",{value:"walk"},"Walk",-1),Fr=[Pr,Hr,Nr],_r={key:1},Br={class:"flex flex-1 flex-col"},Jr=Object(c["g"])("label",{for:"distance",class:"mb-1 text-sm text-wt-blue"},"Distance",-1),zr=["onUpdate:modelValue"],Zr={key:1},Xr={class:"flex flex-1 flex-col"},Yr=Object(c["g"])("label",{for:"duration",class:"mb-1 text-sm text-wt-blue"},"Duration",-1),Qr=["onUpdate:modelValue"],Kr={key:1},$r={class:"flex flex-1 flex-col"},ec=Object(c["g"])("label",{for:"pace",class:"mb-1 text-sm text-wt-blue"},"Pace",-1),tc=["onUpdate:modelValue"],rc={key:1},cc=["onClick"];function oc(e,t,r,o,n,l){return Object(c["t"])(),Object(c["f"])("div",_t,[o.statusMsg||o.errorMsg?(Object(c["t"])(),Object(c["f"])("div",Bt,[Object(c["g"])("p",Jt,Object(c["A"])(o.statusMsg),1),Object(c["g"])("p",zt,Object(c["A"])(o.errorMsg),1)])):Object(c["e"])("",!0),o.dataLoaded?(Object(c["t"])(),Object(c["f"])("div",Zt,[Object(c["g"])("div",Xt,[o.user?(Object(c["t"])(),Object(c["f"])("div",Yt,[Object(c["g"])("div",{class:"h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-wt-blue shadow-lg",onClick:t[0]||(t[0]=function(){return o.editMode&&o.editMode.apply(o,arguments)})},Kt),Object(c["g"])("div",{class:"h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-wt-blue shadow-lg",onClick:t[1]||(t[1]=function(){return o.deleteWorkout&&o.deleteWorkout.apply(o,arguments)})},er)])):Object(c["e"])("",!0),"cardio"===o.data.workoutType?(Object(c["t"])(),Object(c["f"])("img",tr)):(Object(c["t"])(),Object(c["f"])("img",rr)),Object(c["g"])("span",cr,Object(c["A"])(o.data.workoutType),1),"cardio"!==o.data.workoutType?(Object(c["t"])(),Object(c["f"])("div",or,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(o.data.muscleGroups,(function(e,t){return Object(c["t"])(),Object(c["f"])("span",{key:t,class:"mt-6 mx-1 py-1.5 px-5 text-xs text-white bg-wt-blue rounded-lg shadow-md"},Object(c["A"])(e),1)})),128))])):Object(c["e"])("",!0),Object(c["g"])("div",nr,[o.edit?Object(c["G"])((Object(c["t"])(),Object(c["f"])("input",{key:0,type:"date",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.data.workoutDate=e})},null,512)),[[c["D"],o.data.workoutDate]]):(Object(c["t"])(),Object(c["f"])("h1",lr,Object(c["A"])(o.data.workoutDate),1))])]),Object(c["g"])("div",ar,["Strength"===o.data.workoutType||"Hypertrophy"===o.data.workoutType?(Object(c["t"])(),Object(c["f"])("div",sr,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(o.data.exercises,(function(e,t){return Object(c["t"])(),Object(c["f"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative sm:flex-row",key:t},[Object(c["g"])("div",ur,[ir,o.edit?Object(c["G"])((Object(c["t"])(),Object(c["f"])("input",{key:0,id:"exercise-name",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.exercise=t}},null,8,br)),[[c["D"],e.exercise]]):(Object(c["t"])(),Object(c["f"])("p",dr,Object(c["A"])(e.exercise),1))]),Object(c["g"])("div",pr,[fr,o.edit?Object(c["G"])((Object(c["t"])(),Object(c["f"])("select",{key:0,id:"muscle-group",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.muscleGroup=t}},xr,8,mr)),[[c["C"],e.muscleGroup]]):(Object(c["t"])(),Object(c["f"])("p",Or,Object(c["A"])(e.muscleGroup),1))]),Object(c["g"])("div",gr,[wr,o.edit?Object(c["G"])((Object(c["t"])(),Object(c["f"])("input",{key:0,id:"sets",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.sets=t}},null,8,vr)),[[c["D"],e.sets]]):(Object(c["t"])(),Object(c["f"])("p",hr,Object(c["A"])(e.sets),1))]),Object(c["g"])("div",yr,[kr,o.edit?Object(c["G"])((Object(c["t"])(),Object(c["f"])("input",{key:0,id:"reps",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.reps=t}},null,8,Ur)),[[c["D"],e.reps]]):(Object(c["t"])(),Object(c["f"])("p",Tr,Object(c["A"])(e.reps),1))]),Object(c["g"])("div",Vr,[Cr,o.edit?Object(c["G"])((Object(c["t"])(),Object(c["f"])("input",{key:0,id:"weight",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.weight=t}},null,8,Gr)),[[c["D"],e.weight]]):(Object(c["t"])(),Object(c["f"])("p",Dr,Object(c["A"])(e.weight),1))]),Object(c["g"])("div",Er,[Rr,o.edit?(Object(c["t"])(),Object(c["f"])("textarea",Mr)):(Object(c["t"])(),Object(c["f"])("p",Sr,Object(c["A"])(e.notes),1))]),o.edit?(Object(c["t"])(),Object(c["f"])("img",{key:0,onClick:function(t){return o.deleteExercise(e.id)},class:"absolute h-4 w-auto -left-5 cursor-pointer",src:Ee.a,alt:""},null,8,Lr)):Object(c["e"])("",!0)])})),128)),o.edit?(Object(c["t"])(),Object(c["f"])("button",{key:0,onClick:t[3]||(t[3]=function(){return o.addExercise&&o.addExercise.apply(o,arguments)}),type:"button",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-wt-blue duration-200 border-solid border-2 border-transparent hover:border-wt-blue hover:bg-white hover:text-wt-blue"}," Add Exercise ")):Object(c["e"])("",!0)])):(Object(c["t"])(),Object(c["f"])("div",Ar,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(o.data.exercises,(function(e,t){return Object(c["t"])(),Object(c["f"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative sm:flex-row",key:t},[Object(c["g"])("div",Wr,[qr,o.edit?Object(c["G"])((Object(c["t"])(),Object(c["f"])("select",{key:0,id:"cardioType",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.cardioType=t}},Fr,8,Ir)),[[c["C"],e.cardioType]]):(Object(c["t"])(),Object(c["f"])("p",_r,Object(c["A"])(e.cardioType),1))]),Object(c["g"])("div",Br,[Jr,o.edit?Object(c["G"])((Object(c["t"])(),Object(c["f"])("input",{key:0,id:"distance",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.distance=t}},null,8,zr)),[[c["D"],e.distance]]):(Object(c["t"])(),Object(c["f"])("p",Zr,Object(c["A"])(e.distance),1))]),Object(c["g"])("div",Xr,[Yr,o.edit?Object(c["G"])((Object(c["t"])(),Object(c["f"])("input",{key:0,id:"duration",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.duration=t}},null,8,Qr)),[[c["D"],e.duration]]):(Object(c["t"])(),Object(c["f"])("p",Kr,Object(c["A"])(e.duration),1))]),Object(c["g"])("div",$r,[ec,o.edit?Object(c["G"])((Object(c["t"])(),Object(c["f"])("input",{key:0,id:"pace",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.pace=t}},null,8,tc)),[[c["D"],e.pace]]):(Object(c["t"])(),Object(c["f"])("p",rc,Object(c["A"])(e.pace),1))]),o.edit?(Object(c["t"])(),Object(c["f"])("img",{key:0,onClick:function(t){return o.deleteExercise(e.id)},class:"absolute h-4 w-auto -left-5 cursor-pointer",src:Ee.a,alt:""},null,8,cc)):Object(c["e"])("",!0)])})),128)),o.edit?(Object(c["t"])(),Object(c["f"])("button",{key:0,onClick:t[4]||(t[4]=function(){return o.addExercise&&o.addExercise.apply(o,arguments)}),type:"button",class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-wt-blue duration-200 border-solid border-2 border-transparent hover:border-wt-blue hover:bg-white hover:text-wt-blue"}," Add Exercise ")):Object(c["e"])("",!0)]))]),o.edit?(Object(c["t"])(),Object(c["f"])("button",{key:0,onClick:t[5]||(t[5]=function(){return o.update&&o.update.apply(o,arguments)}),type:"button",class:"mt-10 py-2 px-6 rounded-sm self-start text-sm text-white bg-wt-blue duration-200 border-solid border-2 border-transparent hover:border-wt-blue hover:bg-white hover:text-wt-blue"}," Update Workout ")):Object(c["e"])("",!0)])):Object(c["e"])("",!0)])}var nc={name:"view-workout",setup:function(){var e=Object(c["w"])(null),t=Object(c["w"])(null),r=Object(c["w"])(null),o=Object(c["w"])(null),n=Object(h["c"])(),l=Object(h["d"])(),a=Object(c["b"])((function(){return U.state.user})),s=Object(c["w"])([]),u=n.params.workoutId,i=function(){var c=Object(x["a"])(regeneratorRuntime.mark((function c(){var o,n,l;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.from("workouts").select("*").eq("id",u);case 3:if(o=c.sent,n=o.data,l=o.error,!l){c.next=8;break}throw l;case 8:e.value=n[0],t.value=!0,c.next=16;break;case 12:c.prev=12,c.t0=c["catch"](0),r.value=c.t0.message,setTimeout((function(){r.value=!1}),5e3);case 16:case"end":return c.stop()}}),c,null,[[0,12]])})));return function(){return c.apply(this,arguments)}}();i();var b=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.from("workouts")["delete"]().eq("id",u);case 3:if(t=e.sent,c=t.error,!c){e.next=7;break}throw c;case 7:l.push({name:"Home"}),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),r.value="Error: ".concat(e.t0.message),setTimeout((function(){r.value=!1}),5e3);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),d=Object(c["w"])(null),p=function(){d.value=!d.value},f=function(){"strength"!==e.value.workoutType&&"hypertrophy"!==e.value.workoutType?e.value.exercises.push({id:Object(At["a"])(),cardioType:"",distance:"",duration:"",pace:""}):e.value.exercises.push({id:Object(At["a"])(),exercises:"",muscleGroup:"",sets:"",reps:"",weight:"",notes:""})},m=function(t){e.value.exercises.length>1?e.value.exercises=e.value.exercises.filter((function(e){return e.id!==t})):(r.value="Error: Cannot remove - need to have at least one exercise",setTimeout((function(){r.value=!1}),5e3))},j=function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var c,n,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(c=0;c<e.value.exercises.length;c++)s.value.push(e.value.exercises[c].muscleGroup);return e.value.muscleGroups=Object(Lt["a"])(new Set(s.value)),t.prev=2,t.next=5,v.from("workouts").update({workoutDate:e.value.workoutDate,exercises:e.value.exercises,muscleGroups:e.value.muscleGroups}).eq("id",u);case 5:if(n=t.sent,l=n.error,!l){t.next=9;break}throw l;case 9:d.value=!1,o.value="Success - Workout Updated",setTimeout((function(){o.value=!1}),5e3),t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](2),r.value="Error: ".concat(t.t0.message),setTimeout((function(){r.value=!1}),5e3);case 18:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(){return t.apply(this,arguments)}}();return{statusMsg:o,data:e,dataLoaded:t,errorMsg:r,edit:d,editMode:p,user:a,deleteWorkout:b,addExercise:f,deleteExercise:m,update:j}}};const lc=C()(nc,[["render",oc]]);var ac=lc,sc=[{path:"/",name:"Home",component:Q,meta:{title:"Home",auth:!1}},{path:"/login",name:"Login",component:de,meta:{title:"Login",auth:!1}},{path:"/register",name:"Register",component:Ge,meta:{title:"Register",auth:!1}},{path:"/create",name:"Create",component:It,meta:{title:"Create",auth:!0}},{path:"/view-workout/:workoutId",name:"View-Workout",component:ac,meta:{title:"View Workout",auth:!1}}],uc=Object(h["a"])({history:Object(h["b"])("/"),routes:sc});uc.beforeEach((function(e,t,r){document.title="".concat(e.meta.title," | Workout Tracker"),r()})),uc.beforeEach((function(e,t,r){var c=v.auth.user();if(e.matched.some((function(e){return e.meta.auth})))return c?void r():void r({name:"Login"});r()}));var ic=uc,bc=(r("ba8c"),r("ecee")),dc=r("c074"),pc=r("ad3d");bc["c"].add(dc["a"]),Object(c["c"])(M).component("font-awesome-icon",pc["a"]).use(ic).mount("#app")},6122:function(e,t,r){e.exports=r.p+"img/pencil-light.67a7865c.png"},"61b6":function(e,t,r){"use strict";r("0f05")},"9c6c":function(e,t,r){e.exports=r.p+"img/dumbbell-blue.d7ef5d26.png"},a407:function(e,t,r){e.exports=r.p+"img/trash-light.f5a99b6a.png"},b666:function(e,t,r){e.exports=r.p+"img/trash-blue.1e40a5fc.png"},ba8c:function(e,t,r){}});
//# sourceMappingURL=app.adc1428f.js.map