(this.webpackJsonpapp_dgb=this.webpackJsonpapp_dgb||[]).push([[10],{38:function(e,a,t){"use strict";var n=t(12),l=t(13),c=t(15),r=t(14),s=t(0),o=t.n(s),m=t(36),i=t(37),d=(t(42),function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={show:!1},e}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,a,t){e.show!==this.props.show&&this.setState({show:this.props.show})}},{key:"clickClose",value:function(){this.setState({show:!1}),this.props.close(!1)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"modal-"+(this.props.modal?this.props.modal:"mensagem"),className:"modal",tabIndex:"-1",role:"dialog",style:this.state.show?{display:"block"}:{display:"none"}},o.a.createElement("div",{className:"modal-dialog",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header",style:"error"===this.props.dados.status?{backgroundColor:"red"}:{backgroundColor:"black"}},o.a.createElement("h5",{className:"modal-title"},o.a.createElement(m.a,{icon:"error"===this.props.dados.status?i.c:i.b})," ","error"===this.props.dados.status?"ERRO":"AVISO"),o.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return e.clickClose()}},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{className:"modal-body"},o.a.createElement("p",null,"object"===typeof this.props.dados.data?JSON.stringify(this.props.dados.data):this.props.dados.data)),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.clickClose()}},"Ok")))))}}]),t}(s.Component));a.a=d},40:function(e,a,t){"use strict";var n=t(12),l=t(13),c=t(15),r=t(14),s=t(0),o=t.n(s),m=t(39),i=t.n(m),d=t(36),u=t(37),p=(t(41),t(16)),v=t(38),E=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={showModal:!1,responseData:{}},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"clickLogoff",value:function(e){var a=this;e.preventDefault(),i.a.get("/api/v1/logout").then((function(e){var t=e.data;console.log("logout: ",t),"ok"===t.status?window.location="/":a.setState({responseData:t,showModal:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light navbar-header"},o.a.createElement("div",{className:"container"},o.a.createElement("a",{className:"navbar-brand d-flex align-items-center",href:"/"},o.a.createElement("img",{className:"logo",src:"/assets/images/icon.png",alt:"App DGB"}),"App DGB"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav ml-auto"},Object(p.a)("token")?o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/perfil"},o.a.createElement(d.a,{icon:u.m})," Meu Perfil")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/cashback"},o.a.createElement(d.a,{icon:u.g})," Meu Cashback")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/compras"},o.a.createElement(d.a,{icon:u.i})," Minhas Compras")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/",onClick:function(a){return e.clickLogoff(a)}},o.a.createElement(d.a,{icon:u.k})," Sair"))):o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/cadastro"},o.a.createElement(d.a,{icon:u.m})," Cadastro")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/login"},o.a.createElement(d.a,{icon:u.j})," Login"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/sobre"},o.a.createElement(d.a,{icon:u.l})," Sobre")))))),o.a.createElement(v.a,{modal:"login",dados:this.state.responseData,show:this.state.showModal,close:function(a){return e.setState({showModal:a,responseData:{}})}}))}}]),t}(s.Component);a.a=E},41:function(e,a,t){},42:function(e,a,t){},76:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(12),l=t(13),c=t(15),r=t(14),s=t(0),o=t.n(s),m=t(40),i=t(36),d=t(37),u=(t(76),function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,null),o.a.createElement("main",{className:"app-form"},o.a.createElement("div",{className:"cotainer"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement(i.a,{icon:d.e})," Home"),o.a.createElement("div",{className:"card-body"},o.a.createElement("h2",null,"Bem vindo !"),o.a.createElement("hr",null),o.a.createElement("div",{class:"media"},o.a.createElement("div",{class:"media-body"},o.a.createElement("h4",null,o.a.createElement(i.a,{icon:d.a})," Como funciona?"),o.a.createElement("p",null,"Neste sistema voc\xea poder\xe1 inserir as suas compras e com elas ganhar cahsback."))),o.a.createElement("div",{class:"media"},o.a.createElement("div",{class:"media-body"},o.a.createElement("h4",null,o.a.createElement(i.a,{icon:d.f})," Cadastrar compras"),o.a.createElement("p",null,"Ent\xe3o n\xe3o perca tempo e cadastre j\xe1 as suas compras no menu 'Minhas Compras'."))),o.a.createElement("div",{class:"media"},o.a.createElement("div",{class:"media-body"},o.a.createElement("h4",null,o.a.createElement(i.a,{icon:d.d})," Ver o meu cashback"),o.a.createElement("p",null,"E acompanhe o seu cashback no menu 'Meu Cashback'."))),o.a.createElement("small",null,"Obs.: o valor de cahsback ser\xe1 de acordo com o valor de vendas acumuladas no per\xedodo."))))))))}}]),t}(s.Component));a.default=u}}]);
//# sourceMappingURL=10.0afec000.chunk.js.map