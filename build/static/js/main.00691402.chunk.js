(window["webpackJsonpgp-fe"]=window["webpackJsonpgp-fe"]||[]).push([[0],{216:function(e,t,a){e.exports=a(457)},221:function(e,t,a){},222:function(e,t,a){},457:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),i=(a(142),a(221),a(458)),c=(a(222),i.a.Content),m=function(e){return r.a.createElement(i.a,null,r.a.createElement(c,null,e.children))},s=a(463),u=a(464),p=a(53),d=a(48),h=a(42),E=a(43),b=a(45),f=a(44),v=a(46),y=a(461),w=a(462),g=a(207),j=(g.create({timeout:6e4}),[{id:"1232",firstName:"Bob",lastName:"Murphy",email:"bm@example.com"},{id:"154",firstName:"Bob",lastName:"Murphy",email:"bm@example.com"},{id:"764",firstName:"Bob",lastName:"Murphy",email:"bm@example.com"},{id:"9776",firstName:"Bob",lastName:"Murphy",email:"bm@example.com"},{id:"134566",firstName:"Bob",lastName:"Murphy",email:"bm@example.com"},{id:"3457",firstName:"Bob",lastName:"Murphy",email:"bm@example.com"}]),O=[{id:"1",description:"Some desc",title:"My Title 1",categories:[],location:"1,1",startDate:"Some desc",endDate:"1",summary:"Some desc",url:""},{id:"2",description:"Some desc",title:"My Title 2",categories:[],location:"1,1",startDate:"Some desc",endDate:"1",summary:"Some desc",url:""},{id:"3",description:"Some desc",title:"My Title 3",categories:[],location:"1,1",startDate:"Some desc",endDate:"1",summary:"Some desc",url:""},{id:"1",description:"Some desc",title:"My Title 4",categories:[],location:"1,1",startDate:"Some desc",endDate:"1",summary:"Some desc",url:""}],M=a(460),S=function(e){function t(e){return Object(h.a)(this,t),Object(b.a)(this,Object(f.a)(t).call(this,e))}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{header:r.a.createElement(M.a,{onBack:function(){return null},title:this.props.title,subTitle:this.props.subTitle}),footer:r.a.createElement("div",null,"Footer"),bordered:!0,dataSource:this.props.data,renderItem:function(e){return r.a.createElement(y.a.Item,null,r.a.createElement(w.a,{type:"inner",title:e.title,extra:r.a.createElement(p.b,{to:{pathname:"/event/"+e.id,state:e}},"More"),style:{width:300}},r.a.createElement("h4",null,"Description"),e.description,r.a.createElement("h4",null,"Start Date"),e.startDate,r.a.createElement("h4",null,"End Date"),e.endDate))}}))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).render=function(){return r.a.createElement(m,null,r.a.createElement(S,{title:"Events",subTitle:"Help us take Action!!!",data:a.state.events,goBack:window.history.back}))},a.state={events:[]},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(e,t){return e(O)})).then((function(t){e.setState({events:t})})).catch((function(){return e.setState({events:[]})}))}}]),t}(n.Component),D=function(e){function t(e){var a;Object(h.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).render=function(){return r.a.createElement(m,null,r.a.createElement("h1",null,a.props.location.state.title),r.a.createElement("p",null,a.props.location.state.description),r.a.createElement(u.a,null,r.a.createElement(p.b,{to:{pathname:"/map/",state:a.location}},"View On Map")),r.a.createElement(y.a,{header:r.a.createElement(M.a,{title:"Supporters"}),bordered:!0,dataSource:j,renderItem:function(e){return r.a.createElement(y.a.Item,null,r.a.createElement(w.a,{size:"small",title:"",style:{width:"100%"}},r.a.createElement("h4",null,"Name: ",e.firstName," ",e.lastName),r.a.createElement("h4",null,"Email: ",e.email)))}}))};var n=a.props.location.state.location.split(",");return a.location={lat:parseFloat(n[0]),lng:parseFloat(n[1])},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){}}]),t}(n.Component),N=a(78),x=Object(N.withScriptjs)(Object(N.withGoogleMap)((function(e){return r.a.createElement(N.GoogleMap,{defaultZoom:8,defaultCenter:e.location,visible:e.visible},e.isMarkerShown&&r.a.createElement(N.Marker,{position:e.location}))}))),B=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).render=function(){return r.a.createElement(m,null,r.a.createElement(x,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key="+a.API_KEY+"&libraries=geometry,drawing,place",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),location:a.location,visible:a.showMap,containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}))},a.API_KEY="AIzaSyC6tQ5hqYrwbuiLDK_Ow3IRwiVFdE72nME",console.log("props",e),a.location=e.location.state,a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){}}]),t}(n.Component);function I(e){return r.a.createElement(m,null,r.a.createElement(s.a,{avatar:!0,paragraph:{rows:7}}),r.a.createElement(u.a,{block:!0,type:"primary"},r.a.createElement(p.b,{to:"/events/"},"Take Action!!!")),r.a.createElement(s.a,{avatar:!0,paragraph:{rows:7}}))}var T=function(){return r.a.createElement(p.a,null,r.a.createElement(d.a,{path:"/",exact:!0,component:I}),r.a.createElement(d.a,{path:"/events/",component:k}),r.a.createElement(d.a,{path:"/event/:id",component:D}),r.a.createElement(d.a,{path:"/map/",component:B}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[216,1,2]]]);
//# sourceMappingURL=main.00691402.chunk.js.map