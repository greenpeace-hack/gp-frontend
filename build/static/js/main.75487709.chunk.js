(window["webpackJsonpgp-fe"]=window["webpackJsonpgp-fe"]||[]).push([[0],{216:function(e,t,a){e.exports=a(457)},221:function(e,t,a){},222:function(e,t,a){},457:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),i=(a(142),a(221),a(458)),c=(a(222),i.a.Content),m=function(e){return r.a.createElement(i.a,null,r.a.createElement(c,null,e.children))},s=a(463),u=a(464),p=a(53),d=a(48),h=a(42),E=a(43),b=a(45),f=a(44),y=a(46),v=a(461),g=a(462),w=a(207),j=(w.create({timeout:6e4}),[{id:"1232",firstName:"Bob",lastName:"Murphy",email:"bm@example.com"},{id:"154",firstName:"Bob",lastName:"Murphy",email:"bm@example.com"},{id:"764",firstName:"Bob",lastName:"Murphy",email:"bm@example.com"},{id:"9776",firstName:"Bob",lastName:"Murphy",email:"bm@example.com"},{id:"134566",firstName:"Bob",lastName:"Murphy",email:"bm@example.com"},{id:"3457",firstName:"Bob",lastName:"Murphy",email:"bm@example.com"}]),O=[{id:"1",description:"Some desc",title:"My Title 1",categories:[],location:"1,1",startDate:"Some desc",endDate:"1",summary:"Some desc",url:""},{id:"2",description:"Some desc",title:"My Title 2",categories:[],location:"1,1",startDate:"Some desc",endDate:"1",summary:"Some desc",url:""},{id:"3",description:"Some desc",title:"My Title 3",categories:[],location:"1,1",startDate:"Some desc",endDate:"1",summary:"Some desc",url:""},{id:"1",description:"Some desc",title:"My Title 4",categories:[],location:"1,1",startDate:"Some desc",endDate:"1",summary:"Some desc",url:""}],M=a(460),S=function(e){function t(e){return Object(h.a)(this,t),Object(b.a)(this,Object(f.a)(t).call(this,e))}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v.a,{header:r.a.createElement(M.a,{onBack:function(){e.props.goBack()},title:this.props.title,subTitle:this.props.subTitle}),footer:r.a.createElement("div",null,"Footer"),bordered:!0,dataSource:this.props.data,renderItem:function(e){return r.a.createElement(v.a.Item,null,r.a.createElement(g.a,{size:"large",title:e.title,extra:r.a.createElement(p.b,{to:"/event/"+e.id},"More"),style:{width:500}},r.a.createElement("h4",null,"Description"),e.description,r.a.createElement("h4",null,"Start Date"),e.startDate,r.a.createElement("h4",null,"End Date"),e.endDate))}}))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return r.a.createElement(m,null,r.a.createElement(S,{title:"Events",subTitle:"Help us take Action!!!",data:O,goBack:window.history.back()}))},a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){}}]),t}(n.Component),D=a(78),N=Object(D.withScriptjs)(Object(D.withGoogleMap)((function(e){return r.a.createElement(D.GoogleMap,{defaultZoom:8,defaultCenter:e.location,visible:e.visible},e.isMarkerShown&&r.a.createElement(D.Marker,{position:e.location}))}))),B=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).render=function(){return r.a.createElement(m,null,r.a.createElement("h1",null,"Event Title Here"),r.a.createElement("p",null,"Content here..."),r.a.createElement(u.a,null,r.a.createElement(p.b,{to:"/map"},"View On Map")),r.a.createElement(v.a,{header:r.a.createElement(M.a,{title:"Supporters"}),bordered:!0,dataSource:j,renderItem:function(e){return r.a.createElement(v.a.Item,null,r.a.createElement(g.a,{size:"small",title:"",style:{width:"100%"}},r.a.createElement("h4",null,"Name: ",e.firstName," ",e.lastName),r.a.createElement("h4",null,"Email: ",e.email)))}}))},a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).render=function(){return r.a.createElement(m,null,r.a.createElement(N,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key="+a.API_KEY+"&libraries=geometry,drawing,place",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),location:a.location,visible:a.showMap,containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}))},a.API_KEY="AIzaSyC6tQ5hqYrwbuiLDK_Ow3IRwiVFdE72nME",a.location={lat:-34.397,lng:150.644},a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){}}]),t}(n.Component);function I(e){return r.a.createElement(m,null,r.a.createElement(s.a,{avatar:!0,paragraph:{rows:7}}),r.a.createElement(u.a,{block:!0,type:"primary"},r.a.createElement(p.b,{to:"/events/"},"Take Action!!!")),r.a.createElement(s.a,{avatar:!0,paragraph:{rows:7}}))}var T=function(){return r.a.createElement(p.a,null,r.a.createElement(d.a,{path:"/",exact:!0,component:I}),r.a.createElement(d.a,{path:"/events/",component:k}),r.a.createElement(d.a,{path:"/event/",component:B}),r.a.createElement(d.a,{path:"/map/",component:x}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[216,1,2]]]);
//# sourceMappingURL=main.75487709.chunk.js.map