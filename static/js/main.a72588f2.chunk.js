(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a,r,o,c,i,s=n(1),l=n.n(s),u=n(9),d=n.n(u),b=(n(18),n(12)),m=n(4),p=n(5),f=n(7),h=n(6),j=n(25),x=n(2),g=n(3),O=g.a.div(a||(a=Object(x.a)(["\n  width: 400px;\n  background-color: #f0f0f0;\n  border-radius: 5px;\n  padding: 30px;\n  margin-left:auto;\n  margin-right: auto;\n  margin-top:30px;\n"]))),v=g.a.h1(r||(r=Object(x.a)(["\n   display: block;\n   font-size: 26px;\n   font-weight: 800;\n   text-align: center;\n   text-transform: uppercase;\n   margin-bottom: 10px;\n"]))),y=g.a.h2(o||(o=Object(x.a)(["\n   display: block;\n   font-size: 20px;\n   font-weight: 800;\n   text-align: center;\n  text-transform: uppercase;\n  margin-top:30px;\n   margin-bottom:10px;\n"]))),C=n(11),k=g.a.form(c||(c=Object(x.a)(["\npadding: 0px;\n"]))),S=g.a.button(i||(i=Object(x.a)(["\n  background-color: #ff6b0a;\n  border: none;\n  border-radius:5px;\n  outline: none;\n  padding: 3px 12px;\n  color: #fff;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 16px;\n  text-transform: uppercase;\n  cursor: pointer;\n"]))),w=n(0);var A,z,D=function(t){var e=t.text,n=t.type,a=t.onClick;return Object(w.jsx)(S,{type:n,onClick:a,children:e})},F=g.a.input(A||(A=Object(x.a)(["\ndisplay:block;\nmargin-top: 6px;\nmargin-bottom: 20px"]))),I=g.a.label(z||(z=Object(x.a)(["\ntext-transform:capitalize;\nfont-weight:500;"])));function H(t){var e=t.type,n=t.name,a=t.onChange;return Object(w.jsxs)(I,{children:[n,Object(w.jsx)(F,{type:e,name:n,onChange:a})]})}var J,Z=function(t){Object(f.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleSetInfo=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(C.a)({},a,r))},t.handleAddContact=function(e){e.preventDefault(),t.props.handleSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(p.a)(n,[{key:"render",value:function(){return Object(w.jsxs)(k,{onSubmit:this.handleAddContact,children:[Object(w.jsx)(H,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleSetInfo}),Object(w.jsx)(H,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleSetInfo}),Object(w.jsx)(D,{type:"submit",text:"Add contact"})]})}}]),n}(s.Component),q=g.a.li(J||(J=Object(x.a)(["\n   display: flex;\n   justify-content: space-between;\n    &:not(:last-child){\n        margin-bottom: 8px;\n    }\n"])));function B(t){var e=t.name,n=t.number,a=t.handleDelete;return Object(w.jsxs)(q,{children:[e," : ",n,Object(w.jsx)(D,{type:"button",text:"delete",onClick:a})]})}function E(t){var e=t.contacts,n=t.onDeleteContact;return Object(w.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(w.jsx)(B,{name:a,number:r,handleDelete:function(){return n(e)}},e)}))})}var L=function(t){Object(f.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandle=function(e){var n=e.name,a=e.number,r={name:n,number:a,id:Object(j.a)()};t.state.contacts.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(b.a)(t.contacts),[r])}})),console.log(r)},t.handleDelete=function(e){console.log(e),t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(p.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return Object(w.jsxs)(O,{children:[Object(w.jsx)(v,{children:"Phonebook"}),Object(w.jsx)(Z,{handleSubmit:this.formSubmitHandle}),Object(w.jsx)(y,{children:"Contacts"}),Object(w.jsx)(H,{name:"Find contacts by name",type:"text",value:t,onChange:this.changeFilter}),Object(w.jsx)(E,{contacts:e,onDeleteContact:this.handleDelete})]})}}]),n}(s.Component);d.a.render(Object(w.jsx)(l.a.StrictMode,{children:Object(w.jsx)(L,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.a72588f2.chunk.js.map