(this.webpackJsonpapp_dgb=this.webpackJsonpapp_dgb||[]).push([[13],{38:function(e,a,t){"use strict";var n=t(12),r=t(13),l=t(15),s=t(14),o=t(0),c=t.n(o),i=t(36),m=t(37),d=(t(42),function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={show:!1},e}return Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,a,t){e.show!==this.props.show&&this.setState({show:this.props.show})}},{key:"clickClose",value:function(){this.setState({show:!1}),this.props.close(!1)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{id:"modal-"+(this.props.modal?this.props.modal:"mensagem"),className:"modal",tabIndex:"-1",role:"dialog",style:this.state.show?{display:"block"}:{display:"none"}},c.a.createElement("div",{className:"modal-dialog",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header",style:"error"===this.props.dados.status?{backgroundColor:"red"}:{backgroundColor:"black"}},c.a.createElement("h5",{className:"modal-title"},c.a.createElement(i.a,{icon:"error"===this.props.dados.status?m.c:m.b})," ","error"===this.props.dados.status?"ERRO":"AVISO"),c.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return e.clickClose()}},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement("div",{className:"modal-body"},c.a.createElement("p",null,"object"===typeof this.props.dados.data?JSON.stringify(this.props.dados.data):this.props.dados.data)),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.clickClose()}},"Ok")))))}}]),t}(o.Component));a.a=d},40:function(e,a,t){"use strict";var n=t(12),r=t(13),l=t(15),s=t(14),o=t(0),c=t.n(o),i=t(39),m=t.n(i),d=t(36),u=t(37),p=(t(41),t(16)),h=t(38),b=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={showModal:!1,responseData:{}},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"clickLogoff",value:function(e){var a=this;e.preventDefault(),m.a.get("/api/v1/logout").then((function(e){var t=e.data;console.log("logout: ",t),"ok"===t.status?window.location="/":a.setState({responseData:t,showModal:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light navbar-header"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{className:"navbar-brand d-flex align-items-center",href:"/"},c.a.createElement("img",{className:"logo",src:"/assets/images/icon.png",alt:"App DGB"}),"App DGB"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},Object(p.a)("token")?c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/perfil"},c.a.createElement(d.a,{icon:u.m})," Meu Perfil")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/cashback"},c.a.createElement(d.a,{icon:u.g})," Meu Cashback")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/compras"},c.a.createElement(d.a,{icon:u.i})," Minhas Compras")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/",onClick:function(a){return e.clickLogoff(a)}},c.a.createElement(d.a,{icon:u.k})," Sair"))):c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/cadastro"},c.a.createElement(d.a,{icon:u.m})," Cadastro")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/login"},c.a.createElement(d.a,{icon:u.j})," Login"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/sobre"},c.a.createElement(d.a,{icon:u.l})," Sobre")))))),c.a.createElement(h.a,{modal:"login",dados:this.state.responseData,show:this.state.showModal,close:function(a){return e.setState({showModal:a,responseData:{}})}}))}}]),t}(o.Component);a.a=b},41:function(e,a,t){},42:function(e,a,t){},75:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(12),r=t(13),l=t(15),s=t(14),o=t(0),c=t.n(o),i=t(39),m=t.n(i),d=t(40),u=t(36),p=t(37),h=(t(75),function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={sobre:{frontend:{},backend:{}}},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.get("/api/v1/sobre").then((function(a){var t=a.data;console.log("sobre: ",t),"ok"===t.status?e.setState({sobre:t.data}):e.setState({responseData:t,showModal:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,null),c.a.createElement("main",{className:"app-form"},c.a.createElement("div",{className:"cotainer"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement(u.a,{icon:p.l})," Sobre"),c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",null,c.a.createElement("b",null,"App DBG (",this.state.sobre.frontend.name,") v",this.state.sobre.frontend.version)),c.a.createElement("p",null,this.state.sobre.frontend.description),c.a.createElement("hr",null),c.a.createElement("p",null,c.a.createElement("b",null,"desenvolvedor:")," ",this.state.sobre.frontend.author?this.state.sobre.frontend.author.name:""),c.a.createElement("p",null,c.a.createElement("b",null,"contato:")," ",this.state.sobre.frontend.author?this.state.sobre.frontend.author.email:""),c.a.createElement("p",null,c.a.createElement("b",null,"website:")," ",c.a.createElement("a",{href:this.state.sobre.frontend.author?this.state.sobre.frontend.author.url:""},this.state.sobre.frontend.author?this.state.sobre.frontend.author.url:"")),c.a.createElement("hr",null),this.state.sobre.frontend.dependencies&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h5",null,c.a.createElement("b",null,"Frontend Libs")),Object.keys(this.state.sobre.frontend.dependencies).map((function(a){return c.a.createElement("p",null,c.a.createElement("a",{href:"https://www.npmjs.com/package/"+a,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("b",null,a," v",e.state.sobre.frontend.dependencies[a])))}))),c.a.createElement("hr",null),this.state.sobre.backend.dependencies&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h5",null,c.a.createElement("b",null,"Backend Libs")),Object.keys(this.state.sobre.backend.dependencies).map((function(a){return c.a.createElement("p",null,c.a.createElement("a",{href:"https://www.npmjs.com/package/"+a,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("b",null,a," v",e.state.sobre.backend.dependencies[a])))}))))))))))}}]),t}(o.Component));a.default=h}}]);
//# sourceMappingURL=13.2564d989.chunk.js.map