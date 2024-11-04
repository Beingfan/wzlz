"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[268],{6956:function(e,i,a){a.d(i,{$_:function(){return h},Ig:function(){return U},TL:function(){return K},Tz:function(){return P},_b:function(){return N},is:function(){return D},oM:function(){return k},si:function(){return j}});var o=a(3339),n=a(5893),l=a(7294),d=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,i,a)=>i in e?d(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,p=(e,i)=>{for(var a in i||(i={}))c.call(i,a)&&m(e,a,i[a]);if(r)for(var a of r(i))u.call(i,a)&&m(e,a,i[a]);return e},x=(e,i)=>t(e,s(i)),g=(e,i)=>{var a={};for(var o in e)c.call(e,o)&&0>i.indexOf(o)&&(a[o]=e[o]);if(null!=e&&r)for(var o of r(e))0>i.indexOf(o)&&u.call(e,o)&&(a[o]=e[o]);return a};o.ZP.button`
  border: none;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-family: Poppins, sans-serif;
  height: 89px;
  font-size: 30px;
  font-weight: 600;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  width: auto;
  border-radius: 17px;
  background: rgb(53, 186, 72);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;

  ${({isBig:e})=>e&&`
    font-size: 40px;
    height: 100px;
  `}

  ${({isBlue:e,isRed:i})=>`
    background: ${e?"blue":i?"red":"rgb(53, 186, 72)"};
  `}
`;var f={Container:o.ZP.div`
    background-color: ${e=>e.background?e.background:"#004aad"};
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: auto;
  `,Content:o.ZP.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 80%;
    @media only screen and (max-width: 990px) {
      flex-direction: column;
      margin-bottom: 15px;
      width: 100%;
    }
  `,Image:o.ZP.img`
    display: block;

    width: ${e=>e.width?e.width:"130px"};
    height: ${e=>e.height?e.height:"231px"};
    @media only screen and (max-width: 990px) {
      width: ${e=>e.widthMobile?e.widthMobile:"130px"};
      height: ${e=>e.heightMobile?e.heightMobile:"231px"};
    }
  `,TermsContainer:o.ZP.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;

    @media only screen and (max-width: 990px) {
      align-items: center;
    }
  `,Termsline:o.ZP.div`
    color: ${e=>e.color?e.color:"#004aad"};
    font-family: 'Roboto', Sans-serif;
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    text-decoration: underline;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

    cursor: pointer;
  `,RightContent:o.ZP.div`
    p {
      color: ${e=>e.color?e.color:"#004aad"};
      display: ${e=>e.visible?"flex":"None"};
      font-family: 'Roboto', Sans-serif;
      font-size: 15px;
      font-weight: 500;
      font-style: normal;
      @media only screen and (max-width: 990px) {
        font-size: 12px;
      }
    }

    @media only screen and (max-width: 990px) {
      display: none;
    }
  `};function h({urlImage:e,color:i,visible:a,country:o="br",background:l,width:d,height:t,heightMobile:s,widthMobile:r,utmContext:c}){var u,m;let p=()=>{window.location.href=`/politicas-de-privacidade?${c}`},x=()=>{window.location.href=`/termos-de-uso?${c}`},g={br:{privacy:"Pol\xedticas de Privacidade",terms:"Termos de Uso"},us:{privacy:"Privacy Policy",terms:"Terms of Use"},es:{privacy:"Pol\xedtica de privacidad",terms:"T\xe9rminos de uso"},fr:{privacy:"Politique de confidentialit\xe9",terms:"Conditions d'utilisation"},ger:{privacy:"Datenschutz",terms:"Nutzungsbedingungen"},it:{privacy:"Protezione dei dati",terms:"Condizioni d'uso"}};return(0,n.jsx)(f.Container,{background:l,children:(0,n.jsxs)(f.Content,{children:[(0,n.jsx)(f.Image,{width:d,height:t,widthMobile:r,heightMobile:s,src:e,alt:"logo-project-footer"}),(0,n.jsxs)(f.RightContent,{color:i,visible:a,children:[(0,n.jsx)("p",{children:"GRUPO I.MAIS LTDA - CNPJ n\xb0 37.837.482/0001-49"}),(0,n.jsx)("p",{children:"Sonaga Tech Limited, Hamilton, Zweigniederlassung Luzern"}),(0,n.jsx)("p",{children:"\xa9 2024 Copyright"})]}),(0,n.jsxs)(f.TermsContainer,{children:[(0,n.jsx)(f.Termsline,{color:i,onClick:()=>p(),children:null==(u=g[o])?void 0:u.privacy}),(0,n.jsx)(f.Termsline,{color:i,onClick:()=>x(),children:null==(m=g[o])?void 0:m.terms})]})]})})}var v={Container:o.ZP.div`
    width: 100%;
    padding: 0 24px;

    @media only screen and (max-width: 990px) {
      padding: 0;
    }
  `,ContentContainer:o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,Form:o.ZP.form`
    display: flex;
    flex-direction: column;
  `,Input:o.ZP.input`
    width: -webkit-fill-available;

    margin: 4px 0;
    background: white;
    font-size: 16px;
    color: #757575;
    font-weight: 400;
    border: 1px solid rgb(0, 0, 0);
    padding: 12px 18px;
    vertical-align: middle;
    line-height: 1.4;
    min-height: 40px;
    border-radius: 10px;
    box-shadow: 0 0 0 3px rgb(0 0 0 / 5%);
  `,InputContainer:o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,FooterButtons:o.ZP.div``,SubmitButton:o.ZP.button`
    background-color: #35ba48;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    margin: 8px 0;

    display: block;
    padding: 20px 40px;
    text-transform: uppercase;
    width: 100%;
    font-weight: 900;
    font-size: 24px;
    @media only screen and (max-width: 990px) {
      font-size: 16px;
    }
  `,Terms:o.ZP.label`
    font-family: 'Poppins', Sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${e=>e.colorLabel?e.colorLabel:"#000"};
    text-align: center;
    margin-bottom: 8px;

    @media only screen and (max-width: 990px) {
      font-size: 12px;
    }
  `,Button:o.ZP.input`
    height: ${({height:e})=>e};
    background-color: white;
    border: 1px solid #1d1e1c;
    border-radius: 8px;
    padding: 0 16px;
    color: black;
    width: ${({width:e})=>e};
  `,ButtonText:o.ZP.small`
    font-family: 'Poppins', Sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: ${e=>e.colorButtons?e.colorButtons:"#000"};

    @media only screen and (max-width: 990px) {
      font-size: 16px;
    }
  `,ButtonContainer:o.ZP.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
  `,Label:o.ZP.label`
    font-family: 'Poppins', Sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: ${e=>e.colorLabel?e.colorLabel:"#000"};
    margin-bottom: 8px;

    @media only screen and (max-width: 990px) {
      font-size: 18px;
    }
  `,Select:o.ZP.select`
    width: 100%;
    height: 40px;
    background-color: white;
    color: black;
    border-radius: 8px;
    padding: 0 16px;
  `},y=[{id:1,name:"Celular smartphone (android ou iphone)"},{id:2,name:"Tablet"},{id:3,name:"Computador"},{id:4,name:"Notebook"}],b=[{id:1,name:"Sim"},{id:2,name:"N\xe3o"}],w=[{id:1,name:"Acre",value:"AC"},{id:2,name:"Alagoas",value:"AL"},{id:3,name:"Amap\xe1",value:"AP"},{id:4,name:"Amazonas",value:"AM"},{id:5,name:"Bahia",value:"BA"},{id:6,name:"Cear\xe1",value:"CE"},{id:7,name:"Distrito",value:"DF"},{id:8,name:"Esp\xedrito Santo",value:"ES"},{id:9,name:"Goi\xe1s",value:"GO"},{id:10,name:"Maranh\xe3o",value:"MA"},{id:11,name:"Mato Grosso",value:"MT"},{id:12,name:"Mato Grosso do Sul",value:"MS"},{id:13,name:"Minas Gerais",value:"MG"},{id:14,name:"Par\xe1",value:"PA"},{id:15,name:"Para\xedba",value:"PB"},{id:16,name:"Paran\xe1",value:"PR"},{id:17,name:"Pernambuco",value:"PE"},{id:18,name:"Piau\xed",value:"PI"},{id:19,name:"Rio de Janeiro",value:"RJ"},{id:20,name:"Rio Grande do Norte",value:"RN"},{id:21,name:"Rio Grande do Sul",value:"RS"},{id:22,name:"Rond\xf4nia",value:"RO"},{id:23,name:"Roraima",value:"RR"},{id:24,name:"Santa Catarina",value:"SC"},{id:25,name:"S\xe3o Paulo",value:"SP"},{id:26,name:"Sergipe",value:"SE"},{id:27,name:"Tocantins",value:"TO"},{id:28,name:"Estrangeiro",value:"EX"}];function P({connection:e=!0,smartphone:i=!0,hours:a=!0,children:o,projectName:d="",urlContext:t="",utm:s="",connectionLabel:r="Voc\xea possui conex\xe3o com a internet",smartphoneLabel:c="Voc\xea possui algum celular smartphone, tablet, computador ou notebook?",hoursLabel:u="Quantas horas por semana voc\xea tem dispon\xedvel?",colorLabel:m="",colorButtons:p=""}){let[x,g]=(0,l.useState)(null),[f,h]=(0,l.useState)(""),P=e=>{h(e)};(0,l.useEffect)(()=>{let e=window.location.search;g(new URLSearchParams(e))},[]);let S=null==x?void 0:x.get("utm_campaign"),I=null==x?void 0:x.get("utm_medium"),T=null==x?void 0:x.get("utm_source"),C=null==x?void 0:x.get("utm_content"),j=null==x?void 0:x.get("utm_term"),M=null==x?void 0:x.get("gclid"),A=null==x?void 0:x.get("msclkid"),E=()=>{let e=document.getElementById("utm_campaign"),i=document.getElementById("utm_medium"),a=document.getElementById("utm_source"),o=document.getElementById("utm_content"),n=document.getElementById("utm_term"),l=document.getElementById("gclid_field"),s=document.getElementById("url"),r=document.getElementById("msclkid_field"),c=document.getElementById("produto");e&&(e.value=S||""),i&&(i.value=I||""),a&&(a.value=T||""),o&&(o.value=C||""),n&&(n.value=j||""),l&&(l.value=M||""),s&&(s.value=t||""),r&&(r.value=A||""),c&&(c.value=d||"")},[G,B]=(0,l.useState)(null);return(0,l.useEffect)(()=>{try{B(o)}catch(e){console.error("Erro ao avaliar o c\xf3digo:",e)}},[o]),(0,n.jsx)(v.Container,{children:(0,n.jsx)("div",{children:(0,n.jsxs)(v.Form,{method:"POST",action:"https://immersioltda49907.activehosted.com/proc.php",id:"form_641",children:[(0,n.jsx)("input",{type:"hidden",name:"u",value:"641"}),(0,n.jsx)("input",{type:"hidden",name:"f",value:"641"}),(0,n.jsx)("input",{type:"hidden",name:"s"}),(0,n.jsx)("input",{type:"hidden",name:"c",value:"0"}),(0,n.jsx)("input",{type:"hidden",name:"m",value:"0"}),(0,n.jsx)("input",{type:"hidden",name:"act",value:"sub"}),(0,n.jsx)("input",{type:"hidden",name:"v",value:"2"}),(0,n.jsx)("input",{type:"hidden",name:"or",value:"61ccc61588d223d37845d01ea424aab9"}),(0,n.jsxs)(v.ContentContainer,{children:[(0,n.jsxs)(v.InputContainer,{children:[(0,n.jsx)(v.Label,{colorLabel:m,children:"Selecione seu estado"}),(0,n.jsx)(v.Select,{id:"field[578]",name:"field[578]",children:null==w?void 0:w.map(({id:e,name:i,value:a})=>(0,n.jsx)("option",{value:a,children:i},e))})]}),e?(0,n.jsxs)(v.InputContainer,{children:[(0,n.jsx)(v.Label,{colorLabel:m,children:r}),null==b?void 0:b.map(({id:e,name:i})=>(0,n.jsxs)(v.ButtonContainer,{children:[(0,n.jsx)(v.Button,{id:"field[580]",name:"field[580]",type:"checkbox",width:"12px",checked:f===i,onChange:()=>P(i),height:"12px"}),(0,n.jsx)(v.ButtonText,{colorButtons:p,children:i})]},e))]}):null,i?(0,n.jsxs)(v.InputContainer,{children:[(0,n.jsx)(v.Label,{colorLabel:m,children:c}),null==y?void 0:y.map(({id:e,name:i})=>(0,n.jsxs)(v.ButtonContainer,{children:[(0,n.jsx)(v.Button,{type:"checkbox",id:"field[581]",name:"field[581]",width:"12px",height:"12px"}),(0,n.jsx)(v.ButtonText,{colorButtons:p,children:i})]},e))]}):null,G&&(0,n.jsx)("div",{className:"dynamic-component-container",children:G}),a?(0,n.jsxs)(v.InputContainer,{children:[(0,n.jsx)(v.Label,{colorLabel:m,children:u}),(0,n.jsx)(v.Button,{id:"field[504]",name:"field[504]",type:"time",width:"200px",height:"40px"})]}):null,(0,n.jsxs)(v.FooterButtons,{children:[(0,n.jsx)(v.InputContainer,{children:(0,n.jsx)(v.Input,{type:"text",name:"fullname",id:"fullname","data-name":"fullname",placeholder:"Digite seu nome",required:!0})}),(0,n.jsx)(v.InputContainer,{children:(0,n.jsx)(v.Input,{type:"email",name:"email",id:"email","data-name":"email",placeholder:"Digite seu e-mail",required:!0})}),(0,n.jsx)(v.InputContainer,{children:(0,n.jsx)(v.Input,{type:"telephone",name:"phone",id:"phone","data-name":"phone",placeholder:"Digite seu telefone com DDD",required:!0})})]}),(0,n.jsx)("div",{onClick:()=>E(),children:(0,n.jsx)(v.SubmitButton,{children:"ENVIAR"})}),(0,n.jsxs)(v.Terms,{colorLabel:m,children:["\uD83D\uDD12 Ao preencher o formul\xe1rio, voc\xea est\xe1 de acordo com os nossos"," ",(0,n.jsx)("a",{href:`/termos-de-uso?${s}`,children:"Termos de Servi\xe7o"})," e"," ",(0,n.jsx)("a",{href:`/politicas-de-privacidade${s}`,children:"Pol\xedticas de Privacidade."})]}),(0,n.jsx)("input",{type:"hidden",name:"field[495]",id:"utm_campaign",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[494]",id:"utm_medium",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[493]",id:"utm_source",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[497]",id:"utm_term",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[496]",id:"utm_content",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[498]",id:"gclid_field",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[793]",id:"msclkid_field",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[590]",id:"url",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[786]",id:"produto",value:""})]})]})})})}var S={Container:o.ZP.div`
    width: 100%;
    padding: 0 24px;

    @media only screen and (max-width: 990px) {
      padding: 0;
    }
  `,ContentContainer:o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,Form:o.ZP.form`
    display: flex;
    flex-direction: column;
  `,Input:o.ZP.input`
    width: -webkit-fill-available;

    margin: 4px 0;
    background: white;
    font-size: 16px;
    color: #757575;
    font-weight: 400;
    border: 1px solid rgb(0, 0, 0);
    padding: 12px 18px;
    vertical-align: middle;
    line-height: 1.4;
    min-height: 40px;
    border-radius: 10px;
    box-shadow: 0 0 0 3px rgb(0 0 0 / 5%);
  `,InputContainer:o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,FooterButtons:o.ZP.div``,SubmitButton:o.ZP.button`
    background-color: #35ba48;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    margin: 8px 0;

    display: block;
    padding: 20px 40px;
    text-transform: uppercase;
    width: 100%;
    font-weight: 900;
    font-size: 24px;
    @media only screen and (max-width: 990px) {
      font-size: 16px;
    }
  `,Terms:o.ZP.label`
    font-family: 'Poppins', Sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #000;
    text-align: center;
    margin-bottom: 8px;

    @media only screen and (max-width: 990px) {
      font-size: 12px;
    }
  `,Button:o.ZP.input`
    height: ${({height:e})=>e};
    background-color: white;
    border: 1px solid #1d1e1c;
    border-radius: 8px;
    padding: 0 16px;
    color: black;
    width: ${({width:e})=>e};
  `,ButtonText:o.ZP.small`
    font-family: 'Poppins', Sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #000;

    @media only screen and (max-width: 990px) {
      font-size: 16px;
    }
  `,ButtonContainer:o.ZP.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
  `,Label:o.ZP.label`
    font-family: 'Poppins', Sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #000;
    margin-bottom: 8px;

    @media only screen and (max-width: 990px) {
      font-size: 18px;
    }
  `,Select:o.ZP.select`
    width: 100%;
    height: 40px;
    background-color: white;
    color: black;
    border-radius: 8px;
    padding: 0 16px;
  `},I=[{id:1,name:"Smartphone"},{id:2,name:"Tableta"},{id:3,name:"Computador"},{id:4,name:"Notebook"}],T=[{id:1,name:"S\xed"},{id:2,name:"No"}],C=[{id:1,name:"Argentina",value:"Argentina",sigla3:"ARG"},{id:2,name:"Bolivia",value:"Bolivia",sigla3:"BOL"},{id:3,name:"Brasil",value:"Brasil",sigla3:"BRA"},{id:4,name:"Chile",value:"Chile",sigla3:"CHL"},{id:5,name:"Colombia",value:"Colombia",sigla3:"COL"},{id:6,name:"Costa Rica",value:"Costa Rica",sigla3:"CRI"},{id:7,name:"Cuba",value:"Cuba",sigla3:"CUB"},{id:8,name:"Ecuador",value:"Ecuador",sigla3:"ECU"},{id:9,name:"El Salvador",value:"El Salvador",sigla3:"SLV"},{id:10,name:"Estados Unidos",value:"Estados Unidos",sigla3:"USA"},{id:11,name:"Guatemala",value:"Guatemala",sigla3:"GTM"},{id:12,name:"Haiti",value:"Haiti",sigla3:"HTI"},{id:13,name:"Honduras",value:"Honduras",sigla3:"HND"},{id:14,name:"Mexico",value:"Mexico",sigla3:"MEX"},{id:15,name:"Nicaragua",value:"Nicaragua",sigla3:"NIC"},{id:16,name:"Panama",value:"Panama",sigla3:"PAN"},{id:17,name:"Paraguay",value:"Paraguay",sigla3:"PRY"},{id:18,name:"Peru",value:"Peru",sigla3:"PER"},{id:19,name:"Republica Dominicana",value:"Rep\xfablica Dominicana",sigla3:"DOM"},{id:20,name:"Uruguay",value:"Uruguay",sigla3:"URY"},{id:21,name:"Venezuela",value:"Venezuela",sigla3:"VEN"},{id:22,name:"Espa\xf1a",value:"Espa\xf1a",sigla3:"ESP"}];function j({connection:e=!0,smartphone:i=!0,hours:a=!0,children:o,projectName:d="",urlContext:t="",utm:s="",connectionLabel:r="\xbfTienes conexi\xf3n a internet?",smartphoneLabel:c="\xbfTienes un tel\xe9fono smartphone, tableta, computadora o notebook?",hoursLabel:u="\xbfCu\xe1ntas horas por semana tienes disponible?"}){let[m,p]=(0,l.useState)(null),[x,g]=(0,l.useState)(""),[f,h]=(0,l.useState)("");(0,l.useEffect)(()=>{let e=window.location.search;p(new URLSearchParams(e))},[]);let v=null==m?void 0:m.get("utm_campaign"),y=null==m?void 0:m.get("utm_medium"),b=null==m?void 0:m.get("utm_source"),w=null==m?void 0:m.get("utm_content"),P=null==m?void 0:m.get("utm_term"),j=null==m?void 0:m.get("gclid"),M=null==m?void 0:m.get("msclkid"),A=()=>{let e=document.getElementById("utm_campaign"),i=document.getElementById("utm_medium"),a=document.getElementById("utm_source"),o=document.getElementById("utm_content"),n=document.getElementById("utm_term"),l=document.getElementById("gclid_field"),s=document.getElementById("url"),r=document.getElementById("msclkid_field"),c=document.getElementById("produto");e&&(e.value=v||""),i&&(i.value=y||""),a&&(a.value=b||""),o&&(o.value=w||""),n&&(n.value=P||""),l&&(l.value=j||""),s&&(s.value=t||""),r&&(r.value=M||""),c&&(c.value=d||"")},[E,G]=(0,l.useState)(null);return(0,l.useEffect)(()=>{try{G(o)}catch(e){console.error("Erro ao avaliar o c\xf3digo:",e)}},[o]),(0,n.jsx)(S.Container,{children:(0,n.jsx)("div",{children:(0,n.jsxs)(S.Form,{method:"POST",action:"https://conectfansesp.activehosted.com/proc.php",id:"form_91",children:[(0,n.jsx)("input",{type:"hidden",name:"u",value:"91"}),(0,n.jsx)("input",{type:"hidden",name:"f",value:"91"}),(0,n.jsx)("input",{type:"hidden",name:"s"}),(0,n.jsx)("input",{type:"hidden",name:"c",value:"0"}),(0,n.jsx)("input",{type:"hidden",name:"m",value:"0"}),(0,n.jsx)("input",{type:"hidden",name:"act",value:"sub"}),(0,n.jsx)("input",{type:"hidden",name:"v",value:"2"}),(0,n.jsx)("input",{type:"hidden",name:"or",value:"49672e0a43efd1549017020b4c4d90c5"}),(0,n.jsxs)(S.ContentContainer,{children:[(0,n.jsxs)(S.InputContainer,{children:[(0,n.jsx)(S.Label,{children:"Selecciona tu pa\xeds"}),(0,n.jsx)(S.Select,{id:"field[568]",name:"field[568]",children:null==C?void 0:C.map(({id:e,name:i,value:a})=>(0,n.jsx)("option",{value:a,children:i},e))})]}),e?(0,n.jsxs)(S.InputContainer,{children:[(0,n.jsx)(S.Label,{children:r}),null==T?void 0:T.map(({id:e,name:i})=>(0,n.jsxs)(S.ButtonContainer,{children:[(0,n.jsx)(S.Button,{id:"field[569]",name:"field[569]",type:"checkbox",width:"12px",height:"12px",checked:f===i,onChange:()=>h(i)}),(0,n.jsx)(S.ButtonText,{children:i})]},e))]}):null,i?(0,n.jsxs)(S.InputContainer,{children:[(0,n.jsx)(S.Label,{children:c}),null==I?void 0:I.map(({id:e,name:i})=>(0,n.jsxs)(S.ButtonContainer,{children:[(0,n.jsx)(S.Button,{type:"checkbox",id:"field[570]",name:"field[570]",width:"12px",height:"12px"}),(0,n.jsx)(S.ButtonText,{children:i})]},e))]}):null,E&&(0,n.jsx)("div",{className:"dynamic-component-container",children:E}),a?(0,n.jsxs)(S.InputContainer,{children:[(0,n.jsx)(S.Label,{children:u}),(0,n.jsx)(S.Button,{id:"field[571]",name:"field[571]",type:"time",width:"200px",height:"40px"})]}):null,(0,n.jsxs)(S.FooterButtons,{children:[(0,n.jsx)(S.InputContainer,{children:(0,n.jsx)(S.Input,{type:"text",name:"fullname",id:"fullname","data-name":"fullname",placeholder:"Ingrese su nombre",required:!0})}),(0,n.jsx)(S.InputContainer,{children:(0,n.jsx)(S.Input,{type:"email",name:"email",id:"email","data-name":"email",placeholder:"Ingrese su email",required:!0})}),(0,n.jsx)(S.InputContainer,{children:(0,n.jsx)(S.Input,{type:"telephone",name:"phone",id:"phone","data-name":"phone",placeholder:"Ingrese su tel\xe9fono",required:!0})})]}),(0,n.jsx)("div",{onClick:()=>A(),children:(0,n.jsx)(S.SubmitButton,{children:"Enviar"})}),(0,n.jsxs)(S.Terms,{children:["\uD83D\uDD12 Al completar el formulario, usted est\xe1 aceptando nuestros","  ",(0,n.jsx)("a",{href:`/termos-de-uso?${s}`,children:"T\xe9rminos de Servicio"})," y"," ",(0,n.jsx)("a",{href:`/politicas-de-privacidade?${s}`,children:"Pol\xedticas de Privacidad."})]}),(0,n.jsx)("input",{type:"hidden",name:"field[68]",id:"utm_campaign",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[67]",id:"utm_medium",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[66]",id:"utm_source",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[70]",id:"utm_term",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[69]",id:"utm_content",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[72]",id:"gclid_field",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[73]",id:"msclkid_field",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[59]",id:"url",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[74]",id:"produto",value:""})]})]})})})}var M={Container:o.ZP.div`
    width: 100%;
    padding: 0 24px;

    @media only screen and (max-width: 990px) {
      padding: 0;
    }
  `,ContentContainer:o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,Form:o.ZP.form`
    display: flex;
    flex-direction: column;
  `,Input:o.ZP.input`
    width: -webkit-fill-available;

    margin: 4px 0;
    background: white;
    font-size: 16px;
    color: #757575;
    font-weight: 400;
    border: 1px solid rgb(0, 0, 0);
    padding: 12px 18px;
    vertical-align: middle;
    line-height: 1.4;
    min-height: 40px;
    border-radius: 10px;
    box-shadow: 0 0 0 3px rgb(0 0 0 / 5%);
  `,InputContainer:o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,FooterButtons:o.ZP.div``,SubmitButton:o.ZP.button`
    background-color: #35ba48;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    margin: 8px 0;

    display: block;
    padding: 20px 40px;
    text-transform: uppercase;
    width: 100%;
    font-weight: 900;
    font-size: 24px;
    @media only screen and (max-width: 990px) {
      font-size: 16px;
    }
  `,Terms:o.ZP.label`
    font-family: 'Poppins', Sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #000;
    text-align: center;
    margin-bottom: 8px;

    @media only screen and (max-width: 990px) {
      font-size: 12px;
    }
  `,Button:o.ZP.input`
    height: ${({height:e})=>e};
    background-color: white;
    border: 1px solid #1d1e1c;
    border-radius: 8px;
    padding: 0 16px;
    color: black;
    width: ${({width:e})=>e};
  `,ButtonText:o.ZP.small`
    font-family: 'Poppins', Sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #000;

    @media only screen and (max-width: 990px) {
      font-size: 16px;
    }
  `,ButtonContainer:o.ZP.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
  `,Label:o.ZP.label`
    font-family: 'Poppins', Sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #000;
    margin-bottom: 8px;

    @media only screen and (max-width: 990px) {
      font-size: 18px;
    }
  `,Select:o.ZP.select`
    width: 100%;
    height: 40px;
    background-color: white;
    color: black;
    border-radius: 8px;
    padding: 0 16px;
  `},A={contrysIt:[{id:1,name:"Afghanistan",value:"AF",sigla3:"AFG",codigo:"004"},{id:2,name:"Afrique du Sud",value:"ZA",sigla3:"ZAF",codigo:"710"},{id:3,name:"Albanie",value:"AL",sigla3:"ALB",codigo:"008"},{id:4,name:"Allemagne",value:"DE",sigla3:"DEU",codigo:"276"},{id:5,name:"Andorre",value:"AD",sigla3:"AND",codigo:"020"},{id:6,name:"Angola",value:"AO",sigla3:"AGO",codigo:"024"},{id:7,name:"Anguilla",value:"AI",sigla3:"AIA",codigo:"660"},{id:8,name:"Antarctique",value:"AQ",sigla3:"ATA",codigo:"010"},{id:9,name:"Antigua-et-Barbuda",value:"AG",sigla3:"ATG",codigo:"028"},{id:10,name:"Antilles n\xe9erlandaises",value:"AN",sigla3:"ANT",codigo:"530"},{id:11,name:"Arabie Saoudite",value:"SA",sigla3:"SAU",codigo:"682"},{id:12,name:"Alg\xe9rie",value:"DZ",sigla3:"DZA",codigo:"012"},{id:13,name:"Argentine",value:"AR",sigla3:"ARG",codigo:"032"},{id:14,name:"Arm\xe9nie",value:"AM",sigla3:"ARM",codigo:"51"},{id:15,name:"Aruba",value:"AW",sigla3:"ABW",codigo:"533"},{id:16,name:"Australie",value:"AU",sigla3:"AUS",codigo:"036"},{id:17,name:"Autriche",value:"AT",sigla3:"AUT",codigo:"040"},{id:18,name:"Azerba\xefdjan",value:"AZ",sigla3:"AZE",codigo:"31"},{id:19,name:"Bahamas",value:"BS",sigla3:"BHS",codigo:"044"},{id:20,name:"Bahre\xefn",value:"BH",sigla3:"BHR",codigo:"048"},{id:21,name:"Bangladesh",value:"BD",sigla3:"BGD",codigo:"050"},{id:22,name:"Barbade",value:"BB",sigla3:"BRB",codigo:"052"},{id:23,name:"Bi\xe9lorussie",value:"BY",sigla3:"BLR",codigo:"112"},{id:24,name:"Belgique",value:"BE",sigla3:"BEL",codigo:"056"},{id:25,name:"Belize",value:"BZ",sigla3:"BLZ",codigo:"084"},{id:26,name:"B\xe9nin",value:"BJ",sigla3:"BEN",codigo:"204"},{id:27,name:"Bermudes",value:"BM",sigla3:"BMU",codigo:"060"},{id:28,name:"Bolivie",value:"BO",sigla3:"BOL",codigo:"068"},{id:29,name:"Bosnie-Herz\xe9govine",value:"BA",sigla3:"BIH",codigo:"070"},{id:30,name:"Botswana",value:"BW",sigla3:"BWA",codigo:"072"},{id:31,name:"Br\xe9sil",value:"BR",sigla3:"BRA",codigo:"076"},{id:32,name:"Brunei",value:"BN",sigla3:"BRN",codigo:"096"},{id:33,name:"Bulgarie",value:"BG",sigla3:"BGR",codigo:"100"},{id:34,name:"Burkina Faso",value:"BF",sigla3:"BFA",codigo:"854"},{id:35,name:"Burundi",value:"BI",sigla3:"BDI",codigo:"108"},{id:36,name:"Bhoutan",value:"BT",sigla3:"BTN",codigo:"064"},{id:37,name:"Cap-Vert",value:"CV",sigla3:"CPV",codigo:"132"},{id:38,name:"Cameroun",value:"CM",sigla3:"CMR",codigo:"120"},{id:39,name:"Cambodge",value:"KH",sigla3:"KHM",codigo:"116"},{id:40,name:"Canada",value:"CA",sigla3:"CAN",codigo:"124"},{id:41,name:"Kazakhstan",value:"KZ",sigla3:"KAZ",codigo:"398"},{id:42,name:"Tchad",value:"TD",sigla3:"TCD",codigo:"148"},{id:43,name:"Chili",value:"CL",sigla3:"CHL",codigo:"152"},{id:44,name:"Chine",value:"CN",sigla3:"CHN",codigo:"156"},{id:45,name:"Chypre",value:"CY",sigla3:"CYP",codigo:"196"},{id:46,name:"Singapour",value:"SG",sigla3:"SGP",codigo:"702"},{id:47,name:"Colombie",value:"CO",sigla3:"COL",codigo:"170"},{id:48,name:"Congo",value:"CG",sigla3:"COG",codigo:"178"},{id:49,name:"Cor\xe9e du Nord",value:"KP",sigla3:"PRK",codigo:"408"},{id:50,name:"Cor\xe9e du Sud",value:"KR",sigla3:"KOR",codigo:"410"},{id:51,name:"C\xf4te d'Ivoire",value:"CI",sigla3:"CIV",codigo:"384"},{id:52,name:"Costa Rica",value:"CR",sigla3:"CRI",codigo:"188"},{id:53,name:"Croatie",value:"HR",sigla3:"HRV",codigo:"191"},{id:54,name:"Cuba",value:"CU",sigla3:"CUB",codigo:"192"},{id:55,name:"Danemark",value:"DK",sigla3:"DNK",codigo:"208"},{id:56,name:"Djibouti",value:"DJ",sigla3:"DJI",codigo:"262"},{id:57,name:"Dominique",value:"DM",sigla3:"DMA",codigo:"212"},{id:58,name:"\xc9gypte",value:"EG",sigla3:"EGY",codigo:"818"},{id:59,name:"El Salvador",value:"SV",sigla3:"SLV",codigo:"222"},{id:60,name:"\xc9mirats Arabes Unis",value:"AE",sigla3:"ARE",codigo:"784"},{id:61,name:"\xc9quateur",value:"EC",sigla3:"ECU",codigo:"218"},{id:62,name:"\xc9rythr\xe9e",value:"ER",sigla3:"ERI",codigo:"232"},{id:63,name:"Slovaquie",value:"SK",sigla3:"SVK",codigo:"703"},{id:64,name:"Slov\xe9nie",value:"SI",sigla3:"SVN",codigo:"705"},{id:65,name:"Espagne",value:"ES",sigla3:"ESP",codigo:"724"},{id:66,name:"\xc9tats-Unis",value:"US",sigla3:"USA",codigo:"840"},{id:67,name:"Estonie",value:"EE",sigla3:"EST",codigo:"233"},{id:68,name:"\xc9thiopie",value:"ET",sigla3:"ETH",codigo:"231"},{id:69,name:"Fidji",value:"FJ",sigla3:"FJI",codigo:"242"},{id:70,name:"Philippines",value:"PH",sigla3:"PHL",codigo:"608"},{id:71,name:"Finlande",value:"FI",sigla3:"FIN",codigo:"246"},{id:72,name:"France",value:"FR",sigla3:"FRA",codigo:"250"},{id:73,name:"Gabon",value:"GA",sigla3:"GAB",codigo:"266"},{id:74,name:"Gambie",value:"GM",sigla3:"GMB",codigo:"270"},{id:75,name:"Ghana",value:"GH",sigla3:"GHA",codigo:"288"},{id:76,name:"G\xe9orgie",value:"GE",sigla3:"GEO",codigo:"268"},{id:77,name:"Gibraltar",value:"GI",sigla3:"GIB",codigo:"292"},{id:78,name:"Grande-Bretagne (Royaume-Uni, UK)",value:"GB",sigla3:"GBR",codigo:"826"},{id:79,name:"Grenade",value:"GD",sigla3:"GRD",codigo:"308"},{id:80,name:"Gr\xe8ce",value:"GR",sigla3:"GRC",codigo:"300"},{id:81,name:"Groenland",value:"GL",sigla3:"GRL",codigo:"304"},{id:82,name:"Guadeloupe",value:"GP",sigla3:"GLP",codigo:"312"},{id:83,name:"Guam (Territoire des \xc9tats-Unis)",value:"GU",sigla3:"GUM",codigo:"316"},{id:84,name:"Guatemala",value:"GT",sigla3:"GTM",codigo:"320"},{id:85,name:"Guernesey",value:"GG",sigla3:"GGY",codigo:"832"},{id:86,name:"Guyana",value:"GY",sigla3:"GUY",codigo:"328"},{id:87,name:"Guyane fran\xe7aise",value:"GF",sigla3:"GUF",codigo:"254"},{id:88,name:"Guin\xe9e",value:"GN",sigla3:"GIN",codigo:"324"},{id:89,name:"Guin\xe9e \xe9quatoriale",value:"GQ",sigla3:"GNQ",codigo:"226"},{id:90,name:"Guin\xe9e-Bissau",value:"GW",sigla3:"GNB",codigo:"624"},{id:91,name:"Ha\xefti",value:"HT",sigla3:"HTI",codigo:"332"},{id:92,name:"Pays-Bas",value:"NL",sigla3:"NLD",codigo:"528"},{id:93,name:"Honduras",value:"HN",sigla3:"HND",codigo:"340"},{id:94,name:"Hong Kong",value:"HK",sigla3:"HKG",codigo:"344"},{id:95,name:"Hongrie",value:"HU",sigla3:"HUN",codigo:"348"},{id:96,name:"Y\xe9men",value:"YE",sigla3:"YEM",codigo:"887"},{id:97,name:"\xcele Bouvet (Territoire norv\xe9gien)",value:"BV",sigla3:"BVT",codigo:"074"},{id:98,name:"\xcele de Man",value:"IM",sigla3:"IMN",codigo:"833"},{id:99,name:"\xcele Christmas",value:"CX",sigla3:"CXR",codigo:"162"},{id:100,name:"\xceles Pitcairn",value:"PN",sigla3:"PCN",codigo:"612"},{id:101,name:"La R\xe9union",value:"RE",sigla3:"REU",codigo:"638"},{id:102,name:"\xceles \xc5land",value:"AX",sigla3:"ALA",codigo:"248"},{id:103,name:"\xceles Ca\xefmans",value:"KY",sigla3:"CYM",codigo:"136"},{id:104,name:"\xceles Cocos",value:"CC",sigla3:"CCK",codigo:"166"},{id:105,name:"Comores",value:"KM",sigla3:"COM",codigo:"174"},{id:106,name:"\xceles Cook",value:"CK",sigla3:"COK",codigo:"184"},{id:107,name:"\xceles F\xe9ro\xe9",value:"FO",sigla3:"FRO",codigo:"234"},{id:108,name:"\xceles Falkland (Malouines)",value:"FK",sigla3:"FLK",codigo:"238"},{id:109,name:"G\xe9orgie du Sud et les \xceles Sandwich du Sud",value:"GS",sigla3:"SGS",codigo:"239"},{id:110,name:"\xceles Heard et McDonald",value:"HM",sigla3:"HMD",codigo:"334"},{id:111,name:"\xceles Mariannes du Nord",value:"MP",sigla3:"MNP",codigo:"580"},{id:112,name:"\xceles Marshall",value:"MH",sigla3:"MHL",codigo:"584"},{id:113,name:"\xceles mineures \xe9loign\xe9es des \xc9tats-Unis",value:"UM",sigla3:"UMI",codigo:"581"},{id:114,name:"\xcele Norfolk",value:"NF",sigla3:"NFK",codigo:"574"},{id:115,name:"Seychelles",value:"SC",sigla3:"SYC",codigo:"690"},{id:116,name:"\xceles Salomon",value:"SB",sigla3:"SLB",codigo:"090"},{id:117,name:"Svalbard et \xeele Jan Mayen",value:"SJ",sigla3:"SJM",codigo:"744"},{id:118,name:"Tokelau",value:"TK",sigla3:"TKL",codigo:"772"},{id:119,name:"\xceles Turques-et-Ca\xefques",value:"TC",sigla3:"TCA",codigo:"796"},{id:120,name:"\xceles Vierges am\xe9ricaines",value:"VI",sigla3:"VIR",codigo:"850"},{id:121,name:"\xceles Vierges britanniques",value:"VG",sigla3:"VGB",codigo:"092"},{id:122,name:"\xceles Wallis et Futuna",value:"WF",sigla3:"WLF",codigo:"876"},{id:123,name:"Inde",value:"IN",sigla3:"IND",codigo:"356"},{id:124,name:"Indon\xe9sie",value:"ID",sigla3:"IDN",codigo:"360"},{id:125,name:"Iran",value:"IR",sigla3:"IRN",codigo:"364"},{id:126,name:"Irak",value:"IQ",sigla3:"IRQ",codigo:"368"},{id:127,name:"Irlande",value:"IE",sigla3:"IRL",codigo:"372"},{id:128,name:"Islande",value:"IS",sigla3:"ISL",codigo:"352"},{id:129,name:"Isra\xebl",value:"IL",sigla3:"ISR",codigo:"376"},{id:130,name:"Italie",value:"IT",sigla3:"ITA",codigo:"380"},{id:131,name:"Jama\xefque",value:"JM",sigla3:"JAM",codigo:"388"},{id:132,name:"Japon",value:"JP",sigla3:"JPN",codigo:"392"},{id:133,name:"Jersey",value:"JE",sigla3:"JEY",codigo:"832"},{id:134,name:"Jordanie",value:"JO",sigla3:"JOR",codigo:"400"},{id:135,name:"Kenya",value:"KE",sigla3:"KEN",codigo:"404"},{id:136,name:"Kiribati",value:"KI",sigla3:"KIR",codigo:"296"},{id:137,name:"Kowe\xeft",value:"KW",sigla3:"KWT",codigo:"414"},{id:138,name:"Laos",value:"LA",sigla3:"LAO",codigo:"418"},{id:139,name:"Lettonie",value:"LV",sigla3:"LVA",codigo:"428"},{id:140,name:"Lesotho",value:"LS",sigla3:"LSO",codigo:"426"},{id:141,name:"Liban",value:"LB",sigla3:"LBN",codigo:"422"},{id:142,name:"Lib\xe9ria",value:"LR",sigla3:"LBR",codigo:"430"},{id:143,name:"Libye",value:"LY",sigla3:"LBY",codigo:"434"},{id:144,name:"Liechtenstein",value:"LI",sigla3:"LIE",codigo:"438"},{id:145,name:"Lituanie",value:"LT",sigla3:"LTU",codigo:"440"},{id:146,name:"Luxembourg",value:"LU",sigla3:"LUX",codigo:"442"},{id:147,name:"Macao",value:"MO",sigla3:"MAC",codigo:"446"},{id:148,name:"Mac\xe9doine (ancienne R\xe9publique yougoslave de)",value:"MK",sigla3:"MKD",codigo:"807"},{id:149,name:"Madagascar",value:"MG",sigla3:"MDG",codigo:"450"},{id:150,name:"Malaisie",value:"MY",sigla3:"MYS",codigo:"458"},{id:151,name:"Malawi",value:"MW",sigla3:"MWI",codigo:"454"},{id:152,name:"Maldives",value:"MV",sigla3:"MDV",codigo:"462"},{id:153,name:"Mali",value:"ML",sigla3:"MLI",codigo:"466"},{id:154,name:"Malte",value:"MT",sigla3:"MLT",codigo:"470"},{id:155,name:"Maroc",value:"MA",sigla3:"MAR",codigo:"504"},{id:156,name:"Martinique",value:"MQ",sigla3:"MTQ",codigo:"474"},{id:157,name:"Maurice",value:"MU",sigla3:"MUS",codigo:"480"},{id:158,name:"Mauritanie",value:"MR",sigla3:"MRT",codigo:"478"},{id:159,name:"Mayotte",value:"YT",sigla3:"MYT",codigo:"175"},{id:160,name:"Mexique",value:"MX",sigla3:"MEX",codigo:"484"},{id:161,name:"Micron\xe9sie",value:"FM",sigla3:"FSM",codigo:"583"},{id:162,name:"Mozambique",value:"MZ",sigla3:"MOZ",codigo:"508"},{id:163,name:"Moldavie",value:"MD",sigla3:"MDA",codigo:"498"},{id:164,name:"Monaco",value:"MC",sigla3:"MCO",codigo:"492"},{id:165,name:"Mongolie",value:"MN",sigla3:"MNG",codigo:"496"},{id:166,name:"Mont\xe9n\xe9gro",value:"ME",sigla3:"MNE",codigo:"499"},{id:167,name:"Montserrat",value:"MS",sigla3:"MSR",codigo:"500"},{id:168,name:"Myanmar",value:"MM",sigla3:"MMR",codigo:"104"},{id:169,name:"Namibie",value:"NA",sigla3:"NAM",codigo:"516"},{id:170,name:"Nauru",value:"NR",sigla3:"NRU",codigo:"520"},{id:171,name:"N\xe9pal",value:"NP",sigla3:"NPL",codigo:"524"},{id:172,name:"Nicaragua",value:"NI",sigla3:"NIC",codigo:"558"},{id:173,name:"Niger",value:"NE",sigla3:"NER",codigo:"562"},{id:174,name:"Nig\xe9ria",value:"NG",sigla3:"NGA",codigo:"566"},{id:175,name:"Niue",value:"NU",sigla3:"NIU",codigo:"570"},{id:176,name:"Norv\xe8ge",value:"NO",sigla3:"NOR",codigo:"578"},{id:177,name:"Nouvelle-Cal\xe9donie",value:"NC",sigla3:"NCL",codigo:"540"},{id:178,name:"Nouvelle-Z\xe9lande",value:"NZ",sigla3:"NZL",codigo:"554"},{id:179,name:"Oman",value:"OM",sigla3:"OMN",codigo:"512"},{id:180,name:"Palaos",value:"PW",sigla3:"PLW",codigo:"585"},{id:181,name:"Panama",value:"PA",sigla3:"PAN",codigo:"591"},{id:182,name:"Papouasie-Nouvelle-Guin\xe9e",value:"PG",sigla3:"PNG",codigo:"598"},{id:183,name:"Pakistan",value:"PK",sigla3:"PAK",codigo:"586"},{id:184,name:"Paraguay",value:"PY",sigla3:"PRY",codigo:"600"},{id:185,name:"P\xe9rou",value:"PE",sigla3:"PER",codigo:"604"},{id:186,name:"Polyn\xe9sie fran\xe7aise",value:"PF",sigla3:"PYF",codigo:"258"},{id:187,name:"Pologne",value:"PL",sigla3:"POL",codigo:"616"},{id:188,name:"Porto Rico",value:"PR",sigla3:"PRI",codigo:"630"},{id:189,name:"Portugal",value:"PT",sigla3:"PRT",codigo:"620"},{id:190,name:"Qatar",value:"QA",sigla3:"QAT",codigo:"634"},{id:191,name:"Kirghizistan",value:"KG",sigla3:"KGZ",codigo:"417"},{id:192,name:"R\xe9publique centrafricaine",value:"CF",sigla3:"CAF",codigo:"140"},{id:193,name:"R\xe9publique d\xe9mocratique du Congo",value:"CD",sigla3:"COD",codigo:"180"},{id:194,name:"R\xe9publique dominicaine",value:"DO",sigla3:"DOM",codigo:"214"},{id:195,name:"R\xe9publique tch\xe8que",value:"CZ",sigla3:"CZE",codigo:"203"},{id:196,name:"Roumanie",value:"RO",sigla3:"ROM",codigo:"642"},{id:197,name:"Rwanda",value:"RW",sigla3:"RWA",codigo:"646"},{id:198,name:"Russie",value:"RU",sigla3:"RUS",codigo:"643"},{id:199,name:"Sahara occidental",value:"EH",sigla3:"ESH",codigo:"732"},{id:200,name:"Saint-Vincent-et-les Grenadines",value:"VC",sigla3:"VCT",codigo:"670"},{id:201,name:"Samoa am\xe9ricaines",value:"AS",sigla3:"ASM",codigo:"016"},{id:202,name:"Samoa",value:"WS",sigla3:"WSM",codigo:"882"},{id:203,name:"Saint-Marin",value:"SM",sigla3:"SMR",codigo:"674"},{id:204,name:"Sainte-H\xe9l\xe8ne",value:"SH",sigla3:"SHN",codigo:"654"},{id:205,name:"Sainte-Lucie",value:"LC",sigla3:"LCA",codigo:"662"},{id:206,name:"Saint-Barth\xe9lemy",value:"BL",sigla3:"BLM",codigo:"652"},{id:207,name:"Saint-Kitts-et-Nevis",value:"KN",sigla3:"KNA",codigo:"659"},{id:208,name:"Saint-Martin",value:"MF",sigla3:"MAF",codigo:"663"},{id:209,name:"S\xe3o Tom\xe9-et-Pr\xedncipe",value:"ST",sigla3:"STP",codigo:"678"},{id:210,name:"S\xe9n\xe9gal",value:"SN",sigla3:"SEN",codigo:"686"},{id:211,name:"Sierra Leone",value:"SL",sigla3:"SLE",codigo:"694"},{id:212,name:"Serbie",value:"RS",sigla3:"SRB",codigo:"688"},{id:213,name:"Syrie",value:"SY",sigla3:"SYR",codigo:"760"},{id:214,name:"Somalie",value:"SO",sigla3:"SOM",codigo:"706"},{id:215,name:"Sri Lanka",value:"LK",sigla3:"LKA",codigo:"144"},{id:216,name:"Saint-Pierre-et-Miquelon",value:"PM",sigla3:"SPM",codigo:"666"},{id:217,name:"Eswatini",value:"SZ",sigla3:"SWZ",codigo:"748"},{id:218,name:"Soudan",value:"SD",sigla3:"SDN",codigo:"736"},{id:219,name:"Su\xe8de",value:"SE",sigla3:"SWE",codigo:"752"},{id:220,name:"Suisse",value:"CH",sigla3:"CHE",codigo:"756"},{id:221,name:"Suriname",value:"SR",sigla3:"SUR",codigo:"740"},{id:222,name:"Tadjikistan",value:"TJ",sigla3:"TJK",codigo:"762"},{id:223,name:"Tha\xeflande",value:"TH",sigla3:"THA",codigo:"764"},{id:224,name:"Ta\xefwan",value:"TW",sigla3:"TWN",codigo:"158"},{id:225,name:"Tanzanie",value:"TZ",sigla3:"TZA",codigo:"834"},{id:226,name:"Territoire britannique de l'oc\xe9an Indien",value:"IO",sigla3:"IOT",codigo:"086"},{id:227,name:"Terres australes fran\xe7aises",value:"TF",sigla3:"ATF",codigo:"260"},{id:228,name:"Territoires palestiniens occup\xe9s",value:"PS",sigla3:"PSE",codigo:"275"},{id:229,name:"Timor oriental",value:"TP",sigla3:"TMP",codigo:"626"},{id:230,name:"Togo",value:"TG",sigla3:"TGO",codigo:"768"},{id:231,name:"Tonga",value:"TO",sigla3:"TON",codigo:"776"},{id:232,name:"Trinit\xe9-et-Tobago",value:"TT",sigla3:"TTO",codigo:"780"},{id:233,name:"Tunisie",value:"TN",sigla3:"TUN",codigo:"788"},{id:234,name:"Turkm\xe9nistan",value:"TM",sigla3:"TKM",codigo:"795"},{id:235,name:"Turquie",value:"TR",sigla3:"TUR",codigo:"792"},{id:236,name:"Tuvalu",value:"TV",sigla3:"TUV",codigo:"798"},{id:237,name:"Ukraine",value:"UA",sigla3:"UKR",codigo:"804"},{id:238,name:"Ouganda",value:"UG",sigla3:"UGA",codigo:"800"},{id:239,name:"Uruguay",value:"UY",sigla3:"URY",codigo:"858"},{id:240,name:"Ouzb\xe9kistan",value:"UZ",sigla3:"UZB",codigo:"860"},{id:241,name:"Vanuatu",value:"VU",sigla3:"VUT",codigo:"548"},{id:242,name:"Vatican",value:"VA",sigla3:"VAT",codigo:"336"},{id:243,name:"Venezuela",value:"VE",sigla3:"VEN",codigo:"862"},{id:244,name:"Vietnam",value:"VN",sigla3:"VNM",codigo:"704"},{id:245,name:"Zambie",value:"ZM",sigla3:"ZMB",codigo:"894"},{id:246,name:"Zimbabwe",value:"ZW",sigla3:"ZWE",codigo:"716"}]},E=[{id:1,name:"Smartphone"},{id:2,name:"Tablet"},{id:3,name:"Computer"},{id:4,name:"Notebook"}],G=[{id:1,name:"Yes"},{id:2,name:"No"}],B=[{id:1,name:"Afghanistan",value:"AF",sigla3:"AFG",codigo:"004"},{id:2,name:"South Africa",value:"ZA",sigla3:"ZAF",codigo:"710"},{id:3,name:"Albania",value:"AL",sigla3:"ALB",codigo:"008"},{id:4,name:"Germany",value:"DE",sigla3:"DEU",codigo:"276"},{id:5,name:"Andorra",value:"AD",sigla3:"AND",codigo:"020"},{id:6,name:"Angola",value:"AO",sigla3:"AGO",codigo:"024"},{id:7,name:"Anguilla",value:"AI",sigla3:"AIA",codigo:"660"},{id:8,name:"Antarctica",value:"AQ",sigla3:"ATA",codigo:"010"},{id:9,name:"Antigua and Barbuda",value:"AG",sigla3:"ATG",codigo:"028"},{id:10,name:"Netherlands Antilles",value:"AN",sigla3:"ANT",codigo:"530"},{id:11,name:"Saudi Arabia",value:"SA",sigla3:"SAU",codigo:"682"},{id:12,name:"Algeria",value:"DZ",sigla3:"DZA",codigo:"012"},{id:13,name:"Argentina",value:"AR",sigla3:"ARG",codigo:"032"},{id:14,name:"Armenia",value:"AM",sigla3:"ARM",codigo:"51"},{id:15,name:"Aruba",value:"AW",sigla3:"ABW",codigo:"533"},{id:16,name:"Australia",value:"AU",sigla3:"AUS",codigo:"036"},{id:17,name:"Austria",value:"AT",sigla3:"AUT",codigo:"040"},{id:18,name:"Azerbaijan",value:"AZ",sigla3:"AZE",codigo:"31"},{id:19,name:"Bahamas",value:"BS",sigla3:"BHS",codigo:"044"},{id:20,name:"Bahrain",value:"BH",sigla3:"BHR",codigo:"048"},{id:21,name:"Bangladesh",value:"BD",sigla3:"BGD",codigo:"050"},{id:22,name:"Barbados",value:"BB",sigla3:"BRB",codigo:"052"},{id:23,name:"Belarus",value:"BY",sigla3:"BLR",codigo:"112"},{id:24,name:"Belgium",value:"BE",sigla3:"BEL",codigo:"056"},{id:25,name:"Belize",value:"BZ",sigla3:"BLZ",codigo:"084"},{id:26,name:"Benin",value:"BJ",sigla3:"BEN",codigo:"204"},{id:27,name:"Bermuda",value:"BM",sigla3:"BMU",codigo:"060"},{id:28,name:"Bolivia",value:"BO",sigla3:"BOL",codigo:"068"},{id:29,name:"Bosnia and Herzegovina",value:"BA",sigla3:"BIH",codigo:"070"},{id:30,name:"Botswana",value:"BW",sigla3:"BWA",codigo:"072"},{id:31,name:"Brazil",value:"BR",sigla3:"BRA",codigo:"076"},{id:32,name:"Brunei",value:"BN",sigla3:"BRN",codigo:"096"},{id:33,name:"Bulgaria",value:"BG",sigla3:"BGR",codigo:"100"},{id:34,name:"Burkina Faso",value:"BF",sigla3:"BFA",codigo:"854"},{id:35,name:"Burundi",value:"BI",sigla3:"BDI",codigo:"108"},{id:36,name:"Bhutan",value:"BT",sigla3:"BTN",codigo:"064"},{id:37,name:"Cape Verde",value:"CV",sigla3:"CPV",codigo:"132"},{id:38,name:"Cameroon",value:"CM",sigla3:"CMR",codigo:"120"},{id:39,name:"Cambodia",value:"KH",sigla3:"KHM",codigo:"116"},{id:40,name:"Canada",value:"CA",sigla3:"CAN",codigo:"124"},{id:41,name:"Kazakhstan",value:"KZ",sigla3:"KAZ",codigo:"398"},{id:42,name:"Chad",value:"TD",sigla3:"TCD",codigo:"148"},{id:43,name:"Chile",value:"CL",sigla3:"CHL",codigo:"152"},{id:44,name:"China",value:"CN",sigla3:"CHN",codigo:"156"},{id:45,name:"Cyprus",value:"CY",sigla3:"CYP",codigo:"196"},{id:46,name:"Singapore",value:"SG",sigla3:"SGP",codigo:"702"},{id:47,name:"Colombia",value:"CO",sigla3:"COL",codigo:"170"},{id:48,name:"Congo",value:"CG",sigla3:"COG",codigo:"178"},{id:49,name:"North Korea",value:"KP",sigla3:"PRK",codigo:"408"},{id:50,name:"South Korea",value:"KR",sigla3:"KOR",codigo:"410"},{id:51,name:"Ivory Coast",value:"CI",sigla3:"CIV",codigo:"384"},{id:52,name:"Costa Rica",value:"CR",sigla3:"CRI",codigo:"188"},{id:53,name:"Croatia",value:"HR",sigla3:"HRV",codigo:"191"},{id:54,name:"Cuba",value:"CU",sigla3:"CUB",codigo:"192"},{id:55,name:"Denmark",value:"DK",sigla3:"DNK",codigo:"208"},{id:56,name:"Djibouti",value:"DJ",sigla3:"DJI",codigo:"262"},{id:57,name:"Dominica",value:"DM",sigla3:"DMA",codigo:"212"},{id:58,name:"Egypt",value:"EG",sigla3:"EGY",codigo:"818"},{id:59,name:"El Salvador",value:"SV",sigla3:"SLV",codigo:"222"},{id:60,name:"United Arab Emirates",value:"AE",sigla3:"ARE",codigo:"784"},{id:61,name:"Ecuador",value:"EC",sigla3:"ECU",codigo:"218"},{id:62,name:"Eritrea",value:"ER",sigla3:"ERI",codigo:"232"},{id:63,name:"Slovakia",value:"SK",sigla3:"SVK",codigo:"703"},{id:64,name:"Slovenia",value:"SI",sigla3:"SVN",codigo:"705"},{id:65,name:"Spain",value:"ES",sigla3:"ESP",codigo:"724"},{id:66,name:"United States",value:"US",sigla3:"USA",codigo:"840"},{id:67,name:"Estonia",value:"EE",sigla3:"EST",codigo:"233"},{id:68,name:"Ethiopia",value:"ET",sigla3:"ETH",codigo:"231"},{id:69,name:"Fiji",value:"FJ",sigla3:"FJI",codigo:"242"},{id:70,name:"Philippines",value:"PH",sigla3:"PHL",codigo:"608"},{id:71,name:"Finland",value:"FI",sigla3:"FIN",codigo:"246"},{id:72,name:"France",value:"FR",sigla3:"FRA",codigo:"250"},{id:73,name:"Gabon",value:"GA",sigla3:"GAB",codigo:"266"},{id:74,name:"Gambia",value:"GM",sigla3:"GMB",codigo:"270"},{id:75,name:"Ghana",value:"GH",sigla3:"GHA",codigo:"288"},{id:76,name:"Georgia",value:"GE",sigla3:"GEO",codigo:"268"},{id:77,name:"Gibraltar",value:"GI",sigla3:"GIB",codigo:"292"},{id:78,name:"Great Britain (United Kingdom, UK)",value:"GB",sigla3:"GBR",codigo:"826"},{id:79,name:"Grenada",value:"GD",sigla3:"GRD",codigo:"308"},{id:80,name:"Greece",value:"GR",sigla3:"GRC",codigo:"300"},{id:81,name:"Greenland",value:"GL",sigla3:"GRL",codigo:"304"},{id:82,name:"Guadeloupe",value:"GP",sigla3:"GLP",codigo:"312"},{id:83,name:"Guam (United States Territory)",value:"GU",sigla3:"GUM",codigo:"316"},{id:84,name:"Guatemala",value:"GT",sigla3:"GTM",codigo:"320"},{id:85,name:"Guernsey",value:"GG",sigla3:"GGY",codigo:"832"},{id:86,name:"Guyana",value:"GY",sigla3:"GUY",codigo:"328"},{id:87,name:"French Guiana",value:"GF",sigla3:"GUF",codigo:"254"},{id:88,name:"Guinea",value:"GN",sigla3:"GIN",codigo:"324"},{id:89,name:"Equatorial Guinea",value:"GQ",sigla3:"GNQ",codigo:"226"},{id:90,name:"Guinea-Bissau",value:"GW",sigla3:"GNB",codigo:"624"},{id:91,name:"Haiti",value:"HT",sigla3:"HTI",codigo:"332"},{id:92,name:"Netherlands",value:"NL",sigla3:"NLD",codigo:"528"},{id:93,name:"Honduras",value:"HN",sigla3:"HND",codigo:"340"},{id:94,name:"Hong Kong",value:"HK",sigla3:"HKG",codigo:"344"},{id:95,name:"Hungary",value:"HU",sigla3:"HUN",codigo:"348"},{id:96,name:"Yemen",value:"YE",sigla3:"YEM",codigo:"887"},{id:97,name:"Bouvet Island (Norwegian Territory)",value:"BV",sigla3:"BVT",codigo:"074"},{id:98,name:"Isle of Man",value:"IM",sigla3:"IMN",codigo:"833"},{id:99,name:"Christmas Island",value:"CX",sigla3:"CXR",codigo:"162"},{id:100,name:"Pitcairn Island",value:"PN",sigla3:"PCN",codigo:"612"},{id:101,name:"R\xe9union Island",value:"RE",sigla3:"REU",codigo:"638"},{id:102,name:"\xc5land Islands",value:"AX",sigla3:"ALA",codigo:"248"},{id:103,name:"Cayman Islands",value:"KY",sigla3:"CYM",codigo:"136"},{id:104,name:"Cocos Islands",value:"CC",sigla3:"CCK",codigo:"166"},{id:105,name:"Comoros",value:"KM",sigla3:"COM",codigo:"174"},{id:106,name:"Cook Islands",value:"CK",sigla3:"COK",codigo:"184"},{id:107,name:"Faroe Islands",value:"FO",sigla3:"FRO",codigo:"234"},{id:108,name:"Falkland Islands (Malvinas)",value:"FK",sigla3:"FLK",codigo:"238"},{id:109,name:"South Georgia and the South Sandwich Islands",value:"GS",sigla3:"SGS",codigo:"239"},{id:110,name:"Heard and McDonald Islands",value:"HM",sigla3:"HMD",codigo:"334"},{id:111,name:"Northern Mariana Islands",value:"MP",sigla3:"MNP",codigo:"580"},{id:112,name:"Marshall Islands",value:"MH",sigla3:"MHL",codigo:"584"},{id:113,name:"United States Minor Outlying Islands",value:"UM",sigla3:"UMI",codigo:"581"},{id:114,name:"Norfolk Island",value:"NF",sigla3:"NFK",codigo:"574"},{id:115,name:"Seychelles",value:"SC",sigla3:"SYC",codigo:"690"},{id:116,name:"Solomon Islands",value:"SB",sigla3:"SLB",codigo:"090"},{id:117,name:"Svalbard and Jan Mayen Islands",value:"SJ",sigla3:"SJM",codigo:"744"},{id:118,name:"Tokelau",value:"TK",sigla3:"TKL",codigo:"772"},{id:119,name:"Turks and Caicos Islands",value:"TC",sigla3:"TCA",codigo:"796"},{id:120,name:"Virgin Islands (U.S.)",value:"VI",sigla3:"VIR",codigo:"850"},{id:121,name:"Virgin Islands (British)",value:"VG",sigla3:"VGB",codigo:"092"},{id:122,name:"Wallis and Futuna Islands",value:"WF",sigla3:"WLF",codigo:"876"},{id:123,name:"India",value:"IN",sigla3:"IND",codigo:"356"},{id:124,name:"Indonesia",value:"ID",sigla3:"IDN",codigo:"360"},{id:125,name:"Iran",value:"IR",sigla3:"IRN",codigo:"364"},{id:126,name:"Iraq",value:"IQ",sigla3:"IRQ",codigo:"368"},{id:127,name:"Ireland",value:"IE",sigla3:"IRL",codigo:"372"},{id:128,name:"Iceland",value:"IS",sigla3:"ISL",codigo:"352"},{id:129,name:"Israel",value:"IL",sigla3:"ISR",codigo:"376"},{id:130,name:"Italy",value:"IT",sigla3:"ITA",codigo:"380"},{id:131,name:"Jamaica",value:"JM",sigla3:"JAM",codigo:"388"},{id:132,name:"Japan",value:"JP",sigla3:"JPN",codigo:"392"},{id:133,name:"Jersey",value:"JE",sigla3:"JEY",codigo:"832"},{id:134,name:"Jordan",value:"JO",sigla3:"JOR",codigo:"400"},{id:135,name:"Kenya",value:"KE",sigla3:"KEN",codigo:"404"},{id:136,name:"Kiribati",value:"KI",sigla3:"KIR",codigo:"296"},{id:137,name:"Kuwait",value:"KW",sigla3:"KWT",codigo:"414"},{id:138,name:"Laos",value:"LA",sigla3:"LAO",codigo:"418"},{id:139,name:"Latvia",value:"LV",sigla3:"LVA",codigo:"428"},{id:140,name:"Lesotho",value:"LS",sigla3:"LSO",codigo:"426"},{id:141,name:"Lebanon",value:"LB",sigla3:"LBN",codigo:"422"},{id:142,name:"Liberia",value:"LR",sigla3:"LBR",codigo:"430"},{id:143,name:"Libya",value:"LY",sigla3:"LBY",codigo:"434"},{id:144,name:"Liechtenstein",value:"LI",sigla3:"LIE",codigo:"438"},{id:145,name:"Lithuania",value:"LT",sigla3:"LTU",codigo:"440"},{id:146,name:"Luxembourg",value:"LU",sigla3:"LUX",codigo:"442"},{id:147,name:"Macau",value:"MO",sigla3:"MAC",codigo:"446"},{id:148,name:"Macedonia (the former Yugoslav Republic of)",value:"MK",sigla3:"MKD",codigo:"807"},{id:149,name:"Madagascar",value:"MG",sigla3:"MDG",codigo:"450"},{id:150,name:"Malaysia",value:"MY",sigla3:"MYS",codigo:"458"},{id:151,name:"Malaui",value:"MW",sigla3:"MWI",codigo:"454"},{id:152,name:"Maldivas",value:"MV",sigla3:"MDV",codigo:"462"},{id:153,name:"Mali",value:"ML",sigla3:"MLI",codigo:"466"},{id:154,name:"Malta",value:"MT",sigla3:"MLT",codigo:"470"},{id:155,name:"Marrocos",value:"MA",sigla3:"MAR",codigo:"504"},{id:156,name:"Martinica",value:"MQ",sigla3:"MTQ",codigo:"474"},{id:157,name:"Maur\xedcio",value:"MU",sigla3:"MUS",codigo:"480"},{id:158,name:"Maurit\xe2nia",value:"MR",sigla3:"MRT",codigo:"478"},{id:159,name:"Mayotte",value:"YT",sigla3:"MYT",codigo:"175"},{id:160,name:"M\xe9xico",value:"MX",sigla3:"MEX",codigo:"484"},{id:161,name:"Micron\xe9sia",value:"FM",sigla3:"FSM",codigo:"583"},{id:162,name:"Mo\xe7ambique",value:"MZ",sigla3:"MOZ",codigo:"508"},{id:163,name:"Moldova",value:"MD",sigla3:"MDA",codigo:"498"},{id:164,name:"M\xf4naco",value:"MC",sigla3:"MCO",codigo:"492"},{id:165,name:"Mong\xf3lia",value:"MN",sigla3:"MNG",codigo:"496"},{id:166,name:"Montenegro",value:"ME",sigla3:"MNE",codigo:"499"},{id:167,name:"Montserrat",value:"MS",sigla3:"MSR",codigo:"500"},{id:168,name:"Myanma",value:"MM",sigla3:"MMR",codigo:"104"},{id:169,name:"Nam\xedbia",value:"NA",sigla3:"NAM",codigo:"516"},{id:170,name:"Nauru",value:"NR",sigla3:"NRU",codigo:"520"},{id:171,name:"Nepal",value:"NP",sigla3:"NPL",codigo:"524"},{id:172,name:"Nicar\xe1gua",value:"NI",sigla3:"NIC",codigo:"558"},{id:173,name:"N\xedger",value:"NE",sigla3:"NER",codigo:"562"},{id:174,name:"Nig\xe9ria",value:"NG",sigla3:"NGA",codigo:"566"},{id:175,name:"Niue",value:"NU",sigla3:"NIU",codigo:"570"},{id:176,name:"Noruega",value:"NO",sigla3:"NOR",codigo:"578"},{id:177,name:"Nova Caled\xf4nia",value:"NC",sigla3:"NCL",codigo:"540"},{id:178,name:"Nova Zel\xe2ndia",value:"NZ",sigla3:"NZL",codigo:"554"},{id:179,name:"Om\xe3",value:"OM",sigla3:"OMN",codigo:"512"},{id:180,name:"Palau",value:"PW",sigla3:"PLW",codigo:"585"},{id:181,name:"Panam\xe1",value:"PA",sigla3:"PAN",codigo:"591"},{id:182,name:"Papua-Nova Guin\xe9",value:"PG",sigla3:"PNG",codigo:"598"},{id:183,name:"Paquist\xe3o",value:"PK",sigla3:"PAK",codigo:"586"},{id:184,name:"Paraguai",value:"PY",sigla3:"PRY",codigo:"600"},{id:185,name:"Peru",value:"PE",sigla3:"PER",codigo:"604"},{id:186,name:"Polin\xe9sia Francesa",value:"PF",sigla3:"PYF",codigo:"258"},{id:187,name:"Pol\xf4nia",value:"PL",sigla3:"POL",codigo:"616"},{id:188,name:"Porto Rico",value:"PR",sigla3:"PRI",codigo:"630"},{id:189,name:"Portugal",value:"PT",sigla3:"PRT",codigo:"620"},{id:190,name:"Qatar",value:"QA",sigla3:"QAT",codigo:"634"},{id:191,name:"Quirguist\xe3o",value:"KG",sigla3:"KGZ",codigo:"417"},{id:192,name:"Rep\xfablica Centro-Africana",value:"CF",sigla3:"CAF",codigo:"140"},{id:193,name:"Rep\xfablica Democr\xe1tica do Congo",value:"CD",sigla3:"COD",codigo:"180"},{id:194,name:"Rep\xfablica Dominicana",value:"DO",sigla3:"DOM",codigo:"214"},{id:195,name:"Rep\xfablica Tcheca",value:"CZ",sigla3:"CZE",codigo:"203"},{id:196,name:"Rom\xeania",value:"RO",sigla3:"ROM",codigo:"642"},{id:197,name:"Ruanda",value:"RW",sigla3:"RWA",codigo:"646"},{id:198,name:"Russia",value:"RU",sigla3:"RUS",codigo:"643"},{id:199,name:"Saara Ocidental",value:"EH",sigla3:"ESH",codigo:"732"},{id:200,name:"Saint Vincente e Granadinas",value:"VC",sigla3:"VCT",codigo:"670"},{id:201,name:"American Samoa",value:"AS",sigla3:"ASM",codigo:"016"},{id:202,name:"Samoa",value:"WS",sigla3:"WSM",codigo:"882"},{id:203,name:"San Marino",value:"SM",sigla3:"SMR",codigo:"674"},{id:204,name:"Saint Helena",value:"SH",sigla3:"SHN",codigo:"654"},{id:205,name:"Saint Lucia",value:"LC",sigla3:"LCA",codigo:"662"},{id:206,name:"Saint Barth\xe9lemy",value:"BL",sigla3:"BLM",codigo:"652"},{id:207,name:"Saint Kitts and Nevis",value:"KN",sigla3:"KNA",codigo:"659"},{id:208,name:"Saint Martin",value:"MF",sigla3:"MAF",codigo:"663"},{id:209,name:"S\xe3o Tom\xe9 and Pr\xedncipe",value:"ST",sigla3:"STP",codigo:"678"},{id:210,name:"Senegal",value:"SN",sigla3:"SEN",codigo:"686"},{id:211,name:"Sierra Leone",value:"SL",sigla3:"SLE",codigo:"694"},{id:212,name:"Serbia",value:"RS",sigla3:"SRB",codigo:"688"},{id:213,name:"Syria",value:"SY",sigla3:"SYR",codigo:"760"},{id:214,name:"Somalia",value:"SO",sigla3:"SOM",codigo:"706"},{id:215,name:"Sri Lanka",value:"LK",sigla3:"LKA",codigo:"144"},{id:216,name:"St. Pierre and Miquelon",value:"PM",sigla3:"SPM",codigo:"666"},{id:217,name:"Eswatini",value:"SZ",sigla3:"SWZ",codigo:"748"},{id:218,name:"Sudan",value:"SD",sigla3:"SDN",codigo:"736"},{id:219,name:"Sweden",value:"SE",sigla3:"SWE",codigo:"752"},{id:220,name:"Switzerland",value:"CH",sigla3:"CHE",codigo:"756"},{id:221,name:"Suriname",value:"SR",sigla3:"SUR",codigo:"740"},{id:222,name:"Tajikistan",value:"TJ",sigla3:"TJK",codigo:"762"},{id:223,name:"Thailand",value:"TH",sigla3:"THA",codigo:"764"},{id:224,name:"Taiwan",value:"TW",sigla3:"TWN",codigo:"158"},{id:225,name:"Tanzania",value:"TZ",sigla3:"TZA",codigo:"834"},{id:226,name:"British Indian Ocean Territory",value:"IO",sigla3:"IOT",codigo:"086"},{id:227,name:"French Southern Territories",value:"TF",sigla3:"ATF",codigo:"260"},{id:228,name:"Occupied Palestinian Territories",value:"PS",sigla3:"PSE",codigo:"275"},{id:229,name:"Timor-Leste",value:"TP",sigla3:"TMP",codigo:"626"},{id:230,name:"Togo",value:"TG",sigla3:"TGO",codigo:"768"},{id:231,name:"Tonga",value:"TO",sigla3:"TON",codigo:"776"},{id:232,name:"Trinidad and Tobago",value:"TT",sigla3:"TTO",codigo:"780"},{id:233,name:"Tunisia",value:"TN",sigla3:"TUN",codigo:"788"},{id:234,name:"Turkmenistan",value:"TM",sigla3:"TKM",codigo:"795"},{id:235,name:"Turkey",value:"TR",sigla3:"TUR",codigo:"792"},{id:236,name:"Tuvalu",value:"TV",sigla3:"TUV",codigo:"798"},{id:237,name:"Ukraine",value:"UA",sigla3:"UKR",codigo:"804"},{id:238,name:"Uganda",value:"UG",sigla3:"UGA",codigo:"800"},{id:239,name:"Uruguay",value:"UY",sigla3:"URY",codigo:"858"},{id:240,name:"Uzbekistan",value:"UZ",sigla3:"UZB",codigo:"860"},{id:241,name:"Vanuatu",value:"VU",sigla3:"VUT",codigo:"548"},{id:242,name:"Vatican City",value:"VA",sigla3:"VAT",codigo:"336"},{id:243,name:"Venezuela",value:"VE",sigla3:"VEN",codigo:"862"},{id:244,name:"Vietnam",value:"VN",sigla3:"VNM",codigo:"704"},{id:245,name:"Zambia",value:"ZM",sigla3:"ZMB",codigo:"894"},{id:246,name:"Zimbabwe",value:"ZW",sigla3:"ZWE",codigo:"716"}];function N({connection:e=!0,smartphone:i=!0,hours:a=!0,children:o,projectName:d,urlContext:t,utm:s="",connectionLabel:r="Do you have an internet connection?",smartphoneLabel:c="Do you own a smartphone, tablet, computer, or notebook?",hoursLabel:u="How many hours a week do you have available?"}){let[m,p]=(0,l.useState)(null),[x,g]=(0,l.useState)(""),[f,h]=(0,l.useState)(""),[v,y]=(0,l.useState)(""),[b,w]=(0,l.useState)(""),P=e=>{g(e)};(0,l.useEffect)(()=>{let e=window.location.search;p(new URLSearchParams(e))},[]);let S=null==m?void 0:m.get("utm_campaign"),I=null==m?void 0:m.get("utm_medium"),T=null==m?void 0:m.get("utm_source"),C=null==m?void 0:m.get("utm_content"),j=null==m?void 0:m.get("utm_term"),A=null==m?void 0:m.get("gclid"),N=null==m?void 0:m.get("msclkid"),Z=()=>{let e=document.getElementById("utm_campaign"),i=document.getElementById("utm_medium"),a=document.getElementById("utm_source"),o=document.getElementById("utm_content"),n=document.getElementById("utm_term"),l=document.getElementById("gclid_field"),s=document.getElementById("url"),r=document.getElementById("msclkid_field"),c=document.getElementById("produto");e&&(e.value=S||""),i&&(i.value=I||""),a&&(a.value=T||""),o&&(o.value=C||""),n&&(n.value=j||""),l&&(l.value=A||""),s&&(s.value=t||""),r&&(r.value=N||""),c&&(c.value=d||"")},[L,z]=(0,l.useState)(null);return(0,l.useEffect)(()=>{try{z(o)}catch(e){console.error("Erro ao avaliar o c\xf3digo:",e)}},[o]),(0,n.jsx)(M.Container,{children:(0,n.jsx)("div",{children:(0,n.jsxs)(M.Form,{method:"POST",action:"https://connectfansus.activehosted.com/proc.php",id:"form_31",children:[(0,n.jsx)("input",{type:"hidden",name:"u",value:"31"}),(0,n.jsx)("input",{type:"hidden",name:"f",value:"31"}),(0,n.jsx)("input",{type:"hidden",name:"s"}),(0,n.jsx)("input",{type:"hidden",name:"c",value:"0"}),(0,n.jsx)("input",{type:"hidden",name:"m",value:"0"}),(0,n.jsx)("input",{type:"hidden",name:"act",value:"sub"}),(0,n.jsx)("input",{type:"hidden",name:"v",value:"2"}),(0,n.jsx)("input",{type:"hidden",name:"or",value:"adf8a2fdddb42a9fdcf2570f3eca29dd"}),(0,n.jsxs)(M.ContentContainer,{children:[(0,n.jsxs)(M.InputContainer,{children:[(0,n.jsx)(M.Label,{children:"Select your country"}),(0,n.jsx)(M.Select,{id:"field[568]",name:"field[568]",children:null==B?void 0:B.sort((e,i)=>e.name.localeCompare(i.name)).map(({id:e,name:i,value:a})=>(0,n.jsx)("option",{value:a,children:i},e))})]}),e?(0,n.jsxs)(M.InputContainer,{children:[(0,n.jsx)(M.Label,{children:r}),null==G?void 0:G.map(({id:e,name:i})=>(0,n.jsxs)(M.ButtonContainer,{children:[(0,n.jsx)(M.Button,{id:"field[569]",name:"field[569]",type:"checkbox",width:"12px",height:"12px",checked:x===i,onChange:()=>P(i)}),(0,n.jsx)(M.ButtonText,{children:i})]},e))]}):null,i?(0,n.jsxs)(M.InputContainer,{children:[(0,n.jsx)(M.Label,{children:c}),null==E?void 0:E.map(({id:e,name:i})=>(0,n.jsxs)(M.ButtonContainer,{children:[(0,n.jsx)(M.Button,{type:"checkbox",id:"field[570]",name:"field[570]",width:"12px",height:"12px"}),(0,n.jsx)(M.ButtonText,{children:i})]},e))]}):null,L&&(0,n.jsx)("div",{className:"dynamic-component-container",children:L}),a?(0,n.jsxs)(M.InputContainer,{children:[(0,n.jsx)(M.Label,{children:u}),(0,n.jsx)(M.Button,{id:"field[571]",name:"field[571]",type:"time",width:"200px",height:"40px"})]}):null,(0,n.jsxs)(M.FooterButtons,{children:[(0,n.jsx)(M.InputContainer,{children:(0,n.jsx)(M.Input,{type:"text",name:"fullname",id:"fullname","data-name":"fullname",placeholder:"Type your name",value:f,onChange:e=>h(e.target.value),required:!0})}),(0,n.jsx)(M.InputContainer,{children:(0,n.jsx)(M.Input,{type:"email",name:"email",id:"email","data-name":"email",placeholder:"Enter your email",value:b,onChange:e=>w(e.target.value),required:!0})}),(0,n.jsx)(M.InputContainer,{children:(0,n.jsx)(M.Input,{type:"tel",name:"phone",id:"phone","data-name":"phone",placeholder:"Type your telephone",value:v,onChange:e=>y(e.target.value),required:!0})})]}),(0,n.jsx)("div",{onClick:()=>Z(),children:(0,n.jsx)(M.SubmitButton,{children:"SUBMIT FORM"})}),(0,n.jsxs)(M.Terms,{children:["\uD83D\uDD12 By filling in our form, you are consenting to the collection and use of your information in accordance with our"," ",(0,n.jsx)("a",{href:`/politicas-de-privacidade?${s}`,children:"Terms of Service"})," ","and"," ",(0,n.jsx)("a",{href:`/politicas-de-privacidade?${s}`,children:"Privacy Policy."})]}),(0,n.jsx)("input",{type:"hidden",name:"field[98]",id:"utm_campaign",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[97]",id:"utm_medium",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[96]",id:"utm_source",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[100]",id:"utm_term",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[99]",id:"utm_content",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[101]",id:"gclid_field",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[102]",id:"msclkid_field",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[241]",id:"produto",value:""}),(0,n.jsx)("input",{type:"hidden",name:"field[76]",id:"url",value:""})]})]})})})}o.ZP.div`
    width: 100%;
    padding: 0 24px;

    @media only screen and (max-width: 990px) {
      padding: 0;
    }
  `,o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,o.ZP.form`
    display: flex;
    flex-direction: column;
  `,o.ZP.input`
    width: -webkit-fill-available;

    margin: 4px 0;
    background: white;
    font-size: 16px;
    color: #757575;
    font-weight: 400;
    border: 1px solid rgb(0, 0, 0);
    padding: 12px 18px;
    vertical-align: middle;
    line-height: 1.4;
    min-height: 40px;
    border-radius: 10px;
    box-shadow: 0 0 0 3px rgb(0 0 0 / 5%);
  `,o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,o.ZP.div``,o.ZP.button`
    background-color: #35ba48;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    margin: 8px 0;

    display: block;
    padding: 20px 40px;
    text-transform: uppercase;
    width: 100%;
    font-weight: 900;
    font-size: 24px;
    @media only screen and (max-width: 990px) {
      font-size: 16px;
    }
  `,o.ZP.label`
    font-family: 'Poppins', Sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #000;
    text-align: center;
    margin-bottom: 8px;

    @media only screen and (max-width: 990px) {
      font-size: 12px;
    }
  `,o.ZP.input`
    height: ${({height:e})=>e};
    background-color: white;
    border: 1px solid #1d1e1c;
    border-radius: 8px;
    padding: 0 16px;
    color: black;
    width: ${({width:e})=>e};
  `,o.ZP.small`
    font-family: 'Poppins', Sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #000;

    @media only screen and (max-width: 990px) {
      font-size: 16px;
    }
  `,o.ZP.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
  `,o.ZP.label`
    font-family: 'Poppins', Sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #000;
    margin-bottom: 8px;

    @media only screen and (max-width: 990px) {
      font-size: 18px;
    }
  `,o.ZP.select`
    width: 100%;
    height: 40px;
    background-color: white;
    color: black;
    border-radius: 8px;
    padding: 0 16px;
  `,o.ZP.div`
    width: 100%;
    padding: 0 24px;

    @media only screen and (max-width: 990px) {
      padding: 0;
    }
  `,o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,o.ZP.form`
    display: flex;
    flex-direction: column;
  `,o.ZP.input`
    width: -webkit-fill-available;

    margin: 4px 0;
    background: white;
    font-size: 16px;
    color: #757575;
    font-weight: 400;
    border: 1px solid rgb(0, 0, 0);
    padding: 12px 18px;
    vertical-align: middle;
    line-height: 1.4;
    min-height: 40px;
    border-radius: 10px;
    box-shadow: 0 0 0 3px rgb(0 0 0 / 5%);
  `,o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,o.ZP.div``,o.ZP.button`
    background-color: #35ba48;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    margin: 8px 0;

    display: block;
    padding: 20px 40px;
    text-transform: uppercase;
    width: 100%;
    font-weight: 900;
    font-size: 24px;
    @media only screen and (max-width: 990px) {
      font-size: 16px;
    }
  `,o.ZP.label`
    font-family: 'Poppins', Sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #000;
    text-align: center;
    margin-bottom: 8px;

    @media only screen and (max-width: 990px) {
      font-size: 12px;
    }
  `,o.ZP.input`
    height: ${({height:e})=>e};
    background-color: white;
    border: 1px solid #1d1e1c;
    border-radius: 8px;
    padding: 0 16px;
    color: black;
    width: ${({width:e})=>e};
  `,o.ZP.small`
    font-family: 'Poppins', Sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #000;

    @media only screen and (max-width: 990px) {
      font-size: 16px;
    }
  `,o.ZP.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
  `,o.ZP.label`
    font-family: 'Poppins', Sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #000;
    margin-bottom: 8px;

    @media only screen and (max-width: 990px) {
      font-size: 18px;
    }
  `,o.ZP.select`
    width: 100%;
    height: 40px;
    background-color: white;
    color: black;
    border-radius: 8px;
    padding: 0 16px;
  `,null==A||A.contrysger,o.ZP.div`
    width: 100%;
    padding: 0 24px;

    @media only screen and (max-width: 990px) {
      padding: 0;
    }
  `,o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,o.ZP.form`
    display: flex;
    flex-direction: column;
  `,o.ZP.input`
    width: -webkit-fill-available;

    margin: 4px 0;
    background: white;
    font-size: 16px;
    color: #757575;
    font-weight: 400;
    border: 1px solid rgb(0, 0, 0);
    padding: 12px 18px;
    vertical-align: middle;
    line-height: 1.4;
    min-height: 40px;
    border-radius: 10px;
    box-shadow: 0 0 0 3px rgb(0 0 0 / 5%);
  `,o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,o.ZP.div``,o.ZP.button`
    background-color: #35ba48;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    margin: 8px 0;

    display: block;
    padding: 20px 40px;
    text-transform: uppercase;
    width: 100%;
    font-weight: 900;
    font-size: 24px;
    @media only screen and (max-width: 990px) {
      font-size: 16px;
    }
  `,o.ZP.label`
    font-family: 'Poppins', Sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #000;
    text-align: center;
    margin-bottom: 8px;

    @media only screen and (max-width: 990px) {
      font-size: 12px;
    }
  `,o.ZP.input`
    height: ${({height:e})=>e};
    background-color: white;
    border: 1px solid #1d1e1c;
    border-radius: 8px;
    padding: 0 16px;
    color: black;
    width: ${({width:e})=>e};
  `,o.ZP.small`
    font-family: 'Poppins', Sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #000;

    @media only screen and (max-width: 990px) {
      font-size: 16px;
    }
  `,o.ZP.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
  `,o.ZP.label`
    font-family: 'Poppins', Sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #000;
    margin-bottom: 8px;

    @media only screen and (max-width: 990px) {
      font-size: 18px;
    }
  `,o.ZP.select`
    width: 100%;
    height: 40px;
    background-color: white;
    color: black;
    border-radius: 8px;
    padding: 0 16px;
  `,null==A||A.contrysger,o.ZP.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,o.ZP.div`
    height: 100vh;
    width: 100%;

    position: fixed;
    background: url('/1.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.1;
  `,o.ZP.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 24px 0;

    @media only screen and (max-width: 990px) {
      width: fit-content;
    }
  `,o.ZP.div`
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 990px) {
      padding: 24px;
    }
  `,o.ZP.footer`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    z-index: 1;
  `,o.ZP.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 80px 60px 80px;
    font-family: 'Poppins', Sans-serif;
    background: ${e=>e.backgroundModal?e.backgroundModal:"#fff"};
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.9px);
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media only screen and (max-width: 990px) {
      padding: 60px 24px;
    }
  `,o.ZP.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: #000;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: -24px;
  `,o.ZP.h1`
    color: ${e=>e.colorTitle?e.colorTitle:"#000"};

    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media only screen and (max-width: 990px) {
      font-size: 1.5rem;
    }
  `,o.ZP.h2`
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media only screen and (max-width: 990px) {
      font-size: 14px;
    }
  `,o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
  `,o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,o.ZP.p`
    color: ${e=>e.colorTitle?e.colorTitle:"#5837a4"};
    font-family: 'Spartan', Sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 19px;

    @media only screen and (max-width: 990px) {
      font-size: 1.3rem;
    }
  `,o.ZP.ol`
    color: ${e=>e.colorText?e.colorText:"#000"};
    font-family: 'Spartan', Sans-serif;
    font-size: 1rem;
    font-weight: 600;
    line-height: 19px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      list-style-type: none;
    }

    ul {
      margin-left: 16px;
    }

    @media only screen and (max-width: 990px) {
      font-size: 14px;
      gap: 24px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    p {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `;var Z={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},L=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),z=((e,i)=>{let a=(0,l.forwardRef)((a,o)=>{var{color:n="currentColor",size:d=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:r="",children:c}=a,u=g(a,["color","size","strokeWidth","absoluteStrokeWidth","className","children"]);return(0,l.createElement)("svg",p(x(p({ref:o},Z),{width:d,height:d,stroke:n,strokeWidth:s?24*Number(t)/Number(d):t,className:["lucide",`lucide-${L(e)}`,r].join(" ")}),u),[...i.map(([e,i])=>(0,l.createElement)(e,i)),...Array.isArray(c)?c:[c]])});return a.displayName=`${e}`,a})("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);o.ZP.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,o.ZP.div`
    height: 100vh;
    width: 100%;

    position: fixed;
    background: url('/1.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.1;
  `,o.ZP.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 24px 0;

    @media only screen and (max-width: 990px) {
      width: fit-content;
    }
  `,o.ZP.div`
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 990px) {
      padding: 24px;
    }
  `,o.ZP.footer`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    z-index: 1;
  `,o.ZP.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 80px 60px 80px;
    font-family: 'Poppins', Sans-serif;
    background: ${e=>e.backgroundModal?e.backgroundModal:"#fff"};
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.9px);
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media only screen and (max-width: 990px) {
      padding: 60px 24px;
    }
  `,o.ZP.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: #000;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: -24px;
  `,o.ZP.h1`
    color: ${e=>e.colorTitle?e.colorTitle:"#000"};

    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media only screen and (max-width: 990px) {
      font-size: 1.5rem;
    }
  `,o.ZP.h2`
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media only screen and (max-width: 990px) {
      font-size: 14px;
    }
  `,o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
  `,o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,o.ZP.p`
    color: ${e=>e.colorTitle?e.colorTitle:"#5837a4"};
    font-family: 'Spartan', Sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 19px;

    @media only screen and (max-width: 990px) {
      font-size: 1.3rem;
    }
  `,o.ZP.ol`
    color: ${e=>e.colorText?e.colorText:"#000"};
    font-family: 'Spartan', Sans-serif;
    font-size: 1rem;
    font-weight: 600;
    line-height: 19px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      list-style-type: none;
    }

    ul {
      margin-left: 16px;
    }

    @media only screen and (max-width: 990px) {
      font-size: 14px;
      gap: 24px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    p {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `;var R={Wrapped:o.ZP.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,ImageContainer:o.ZP.div`
    height: 100vh;
    width: 100%;

    position: fixed;
    background: url('/1.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.1;
  `,Container:o.ZP.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 24px 0;

    @media only screen and (max-width: 990px) {
      width: fit-content;
    }
  `,Content:o.ZP.div`
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 990px) {
      padding: 24px;
    }
  `,FooterContainer:o.ZP.footer`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    z-index: 1;
  `,ModalContainer:o.ZP.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 80px 60px 80px;
    font-family: 'Poppins', Sans-serif;
    background: ${e=>e.backgroundModal?e.backgroundModal:"#fff"};
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.9px);
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media only screen and (max-width: 990px) {
      padding: 60px 24px;
    }
  `,Icon:o.ZP.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: #000;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: -24px;
  `,ModalTitle:o.ZP.h1`
    color: ${e=>e.colorTitle?e.colorTitle:"#000"};

    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media only screen and (max-width: 990px) {
      font-size: 1.5rem;
    }
  `,ModalSubtitle:o.ZP.h2`
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media only screen and (max-width: 990px) {
      font-size: 14px;
    }
  `,ModalContent:o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
  `,TermsContainer:o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,TermsTitle:o.ZP.p`
    color: ${e=>e.colorTitle?e.colorTitle:"#5837a4"};
    font-family: 'Spartan', Sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 19px;

    @media only screen and (max-width: 990px) {
      font-size: 1.3rem;
    }
  `,TermsContent:o.ZP.ol`
    color: ${e=>e.colorText?e.colorText:"#000"};
    font-family: 'Spartan', Sans-serif;
    font-size: 1rem;
    font-weight: 600;
    line-height: 19px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      list-style-type: none;
    }

    ul {
      margin-left: 16px;
    }

    @media only screen and (max-width: 990px) {
      font-size: 14px;
      gap: 24px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    p {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `};function k({colorTitle:e,colorText:i,project:a="Grupo Impulse",backgroundModal:o}){let l=()=>{window.history.back()};return(0,n.jsxs)(R.Wrapped,{children:[(0,n.jsx)(R.ImageContainer,{}),(0,n.jsx)(R.Container,{children:(0,n.jsx)(R.Content,{children:(0,n.jsxs)(R.ModalContainer,{backgroundModal:o,children:[(0,n.jsxs)(R.Icon,{onClick:l,children:[(0,n.jsx)(z,{size:24}),"Volver"]}),(0,n.jsxs)(R.ModalTitle,{colorTitle:e,children:["T\xc9RMINOS DE USO",(0,n.jsx)("br",{})]}),(0,n.jsxs)(R.TermsContent,{colorText:i,children:[(0,n.jsx)("li",{children:"ACEPTACI\xd3N"}),(0,n.jsx)("p",{children:`EL PRESENTE DOCUMENTO ("T\xc9RMINOS DE USO") ESTABLECE LOS T\xc9RMINOS Y CONDICIONES APLICABLES AL USO DE LA PLATAFORMA GRUPO IMPULSE ("PLATAFORMA" o "SITIO"). El uso de este sitio est\xe1 condicionado a la aceptaci\xf3n de los t\xe9rminos y pol\xedticas asociadas. El usuario debe leer dichos t\xe9rminos y pol\xedticas, asegurarse de haberlos entendido, aceptar todas las condiciones establecidas en los T\xe9rminos de Uso y comprometerse a cumplirlas.`}),(0,n.jsx)("p",{children:"Al utilizar la plataforma, el usuario manifiesta su libre, expresa e inequ\xedvoca conformidad con el contenido de estos T\xe9rminos de Uso y estar\xe1 legalmente vinculado a todas las condiciones aqu\xed establecidas."}),(0,n.jsx)("li",{children:"RESPONSABILIDADES DEL USUARIO:"}),(0,n.jsx)("p",{children:"El usuario es responsable de la precisi\xf3n y veracidad de los datos proporcionados en el registro, siendo responsable de la actualizaci\xf3n de sus datos personales y de las consecuencias en caso de omisi\xf3n o errores en la informaci\xf3n personal registrada. El inicio de sesi\xf3n y la contrase\xf1a solo pueden ser utilizados por el usuario registrado y se debe mantener en secreto la contrase\xf1a, que es personal e intransferible, y no se puede alegar en ning\xfan caso el uso indebido despu\xe9s de compartir la contrase\xf1a."}),(0,n.jsx)("p",{children:"El uso comercial de expresiones utilizadas en aplicaciones como marca, nombre comercial o nombre de dominio de Grupo Impulse, adem\xe1s de los contenidos de la plataforma, as\xed como los programas, bases de datos, redes y archivos que permiten al usuario acceder a su cuenta, est\xe1n protegidos por leyes de derechos de autor, marcas, patentes, modelos y dise\xf1os industriales."}),(0,n.jsx)("p",{children:"Al acceder al sitio, los usuarios declaran que respetar\xe1n todos los derechos de propiedad intelectual y los derivados de la protecci\xf3n de marcas, patentes y/o dise\xf1os industriales, depositados o registrados en, as\xed como todos los derechos relacionados con terceros que eventualmente est\xe9n disponibles en la plataforma. El simple acceso al servicio no otorga a los usuarios ning\xfan derecho al uso de nombres, t\xedtulos, palabras, frases, marcas, patentes, im\xe1genes, datos e informaci\xf3n, entre otros, que est\xe9n disponibles en \xe9l. En ning\xfan caso los usuarios adquieren ning\xfan derecho sobre este contenido."}),(0,n.jsx)("p",{children:"Queda prohibido el uso del contenido de la plataforma para fines comerciales, publicitarios o cualquier otro que vaya en contra del prop\xf3sito para el cual fue concebido, seg\xfan se define en este documento, bajo pena de estar sujeto a las sanciones correspondientes en la Ley n\xba 9.610, de 19 de febrero de 1998, que protege los derechos de autor en Brasil. Los usuarios asumen toda responsabilidad, de car\xe1cter civil y/o penal, por el uso indebido de la informaci\xf3n, textos, gr\xe1ficos, marcas, im\xe1genes, en fin, cualquier derecho de propiedad intelectual o industrial del servicio."}),(0,n.jsx)("li",{children:"LICENCIAS."}),(0,n.jsx)("p",{children:"Se concede permiso para descargar temporalmente una copia de los materiales en el sitio Grupo Impulse, exclusivamente para visualizaci\xf3n transitoria personal y no comercial. Todos los materiales mostrados o disponibles en el Sitio, incluyendo, sin limitarse, gr\xe1ficos, documentos, textos, sonidos, video, audio, obras de arte, software y c\xf3digo HTML (colectivamente, el 'Material') son de propiedad exclusiva de Grupo Impulse o de sus proveedores de contenido, quienes se reservan todos sus derechos de propiedad intelectual."}),(0,n.jsx)("p",{children:"Los Materiales est\xe1n protegidos por las leyes de derechos de autor y otras normas, regulaciones y legislaciones brasile\xf1as, estadounidenses e internacionales de propiedad intelectual aplicables. Excepto seg\xfan lo permitido en el presente documento, no puede (i) usar, copiar, modificar, mostrar, eliminar, distribuir, descargar, archivar, transmitir, publicar, vender, revender, adaptar, realizar ingenier\xeda inversa o crear obras derivadas del Material, o (ii) utilizar el Material en otros sitios web o en cualquier otro tipo de medio, como por ejemplo, en entornos de red, sin el consentimiento previo y por escrito de Grupo Impulse."}),(0,n.jsx)("p",{children:"Esta licencia se rescindir\xe1 autom\xe1ticamente si viola alguna de estas restricciones y puede ser revocada por Grupo Impulse en cualquier momento. Al finalizar la visualizaci\xf3n de estos materiales o al finalizar esta licencia, deber\xe1 eliminar todos los materiales descargados en su posesi\xf3n, ya sea en formato electr\xf3nico o impreso."}),(0,n.jsx)("li",{children:"COMUNICACIONES ELECTR\xd3NICAS Y NOTIFICACIONES:"}),(0,n.jsx)("p",{children:"Al utilizar la plataforma de Grupo Impulse y los servicios asociados, el usuario acepta recibir comunicaciones electr\xf3nicas, incluyendo, pero no limit\xe1ndose a correos electr\xf3nicos, notificaciones, mensajes y boletines informativos, enviados por Grupo Impulse. Estas comunicaciones pueden estar relacionadas con actividades esenciales del infoproducto, como cambios de precios, actualizaciones de productos, nuevos lanzamientos, promociones, actualizaciones de caracter\xedsticas y otra informaci\xf3n relevante."}),(0,n.jsx)("p",{children:"El usuario consiente expresamente en recibir tales comunicaciones electr\xf3nicas, que reconoce son parte integral del uso de los servicios proporcionados por la plataforma, y puede optar por no recibir algunas de estas comunicaciones en cualquier momento, siguiendo las instrucciones de cancelaci\xf3n de suscripci\xf3n proporcionadas en los mensajes electr\xf3nicos o ajustando sus configuraciones de notificaciones en la plataforma."}),(0,n.jsx)("p",{children:"Dada la importancia de la informaci\xf3n contenida en las comunicaciones electr\xf3nicas enviadas por la plataforma, la negativa a recibirlas puede afectar negativamente la experiencia del usuario con el infoproducto designado aqu\xed."}),(0,n.jsx)("li",{children:"GARANT\xcdAS DE GANANCIAS:"}),(0,n.jsx)("p",{children:"El usuario comprende y acepta que Grupo Impulse no asume ninguna responsabilidad por cualquier garant\xeda de ganancias financieras o personales que pueda obtener. Cualquier informaci\xf3n publicada con fines comerciales es meramente ilustrativa y no debe interpretarse como una promesa de resultados. La forma en que el usuario utiliza el material proporcionado y c\xf3mo busca obtener ganancias financieras y personales es responsabilidad exclusiva del usuario."}),(0,n.jsx)("p",{children:"Al continuar utilizando la plataforma de Grupo Impulse, el usuario se compromete a no buscar ninguna acci\xf3n legal contra Grupo Impulse en relaci\xf3n con ganancias financieras o personales, eximi\xe9ndolo de cualquier responsabilidad u obligaci\xf3n relacionada con tales cuestiones. El \xe9xito financiero y personal del usuario depende \xfanicamente de c\xf3mo utiliza las herramientas y recursos ofrecidos, y cualquier resultado obtenido es completamente responsabilidad suya."}),(0,n.jsx)("li",{children:"ENLACES"}),(0,n.jsx)("p",{children:"La plataforma de Grupo Impulse puede presentar enlaces, como hiperv\xednculos o botones, que dirigen al acceso a sitios web de terceros. Es posible que los sitios vinculados no est\xe9n controlados ni supervisados por Grupo Impulse. Grupo Impulse no ser\xe1 responsable de los materiales, informaci\xf3n o contenido publicado en los sitios vinculados, ni tampoco de la disponibilidad de los sitios vinculados."}),(0,n.jsx)("p",{children:"La inclusi\xf3n de sitios vinculados no implica ninguna relaci\xf3n o asociaci\xf3n entre Grupo Impulse y el propietario de los sitios vinculados, ni ning\xfan respaldo, apoyo o patrocinio por parte de Grupo Impulse de los sitios vinculados. El usuario es exclusivamente responsable de su acceso a los sitios vinculados, utiliz\xe1ndolos bajo su propio juicio, precauci\xf3n y sentido com\xfan, y debe verificar las pol\xedticas de privacidad y los t\xe9rminos de uso aplicables de dichos sitios vinculados, que pueden ser diferentes de los t\xe9rminos contenidos en estos T\xe9rminos de Uso y en la Pol\xedtica de Privacidad de Grupo Impulse."}),(0,n.jsx)("li",{children:"RESPONSABILIDAD GENERAL"}),(0,n.jsx)("p",{children:"En la m\xe1xima medida permitida por la legislaci\xf3n aplicable, el usuario acepta asumir todos los riesgos asociados o relacionados con su uso del sitio o de cualquier material presentado, incluyendo, sin limitaci\xf3n, riesgos de p\xe9rdida financiera, da\xf1o f\xedsico, da\xf1o material, relaci\xf3n con otros usuarios del sitio, extra\xf1os, menores o extranjeros, y personas actuando bajo identidad falsa. El usuario tambi\xe9n acepta eximir a Grupo Impulse y sus empresas matrices, subsidiarias y afiliadas, as\xed como a sus directores, representantes y colaboradores, de cualquier reclamaci\xf3n, acci\xf3n, da\xf1o (directo, indirecto y consecuente) de cualquier tipo o naturaleza, conocido o no, asociado, originado o resultante de su uso del sitio, de sus materiales presentados o de cualquier transacci\xf3n relacionada o resultante de su uso del sitio."}),(0,n.jsx)("p",{children:"El usuario comprende y acepta adem\xe1s que, en la m\xe1xima medida permitida por la legislaci\xf3n aplicable, en ning\xfan caso Grupo Impulse, sus matrices, subsidiarias, afiliadas, directores, representantes, empleados o proveedores ser\xe1n responsables de ning\xfan da\xf1o directo, indirecto, consecuente, incidental, especial, o por p\xe9rdida de ingresos, datos o uso, sufridos por \xe9l o por cualquier tercero, ya sea por cualquier motivo, incluso si Grupo Impulse ha sido informado de la posibilidad de tales da\xf1os. Si alguna jurisdicci\xf3n proh\xedbe la exclusi\xf3n de ciertas garant\xedas, la limitaci\xf3n de responsabilidad o la renuncia de ciertos tipos de da\xf1os, la responsabilidad agregada de Grupo Impulse por cualquier da\xf1o, en la m\xe1xima medida permitida por la legislaci\xf3n aplicable, no ser\xe1 superior al valor equivalente a la inscripci\xf3n del usuario en la plataforma."}),(0,n.jsx)("li",{children:"POL\xcdTICA DE PRIVACIDAD:"}),(0,n.jsx)("p",{children:"Esta Pol\xedtica espec\xedfica forma parte intr\xednseca de estos T\xe9rminos de Uso, y se destaca que los datos personales tratados por este servicio se tratar\xe1n de acuerdo con la legislaci\xf3n vigente. Para obtener m\xe1s informaci\xf3n, consulte nuestra pol\xedtica de privacidad disponible en cualquier momento en la plataforma de Grupo Impulse."}),(0,n.jsx)("li",{children:"MODIFICACIONES DE LOS T\xc9RMINOS DE USO:"}),(0,n.jsx)("p",{children:"Grupo Impulse se reserva el derecho de modificar en el sitio, en cualquier momento y sin previo aviso, estas normas, especialmente para adaptarlas a las evoluciones del servicio prestado, ya sea mediante la elaboraci\xf3n de nuevas disposiciones o mediante la supresi\xf3n o modificaci\xf3n de las ya existentes. Por lo tanto, se recomienda verificar esta p\xe1gina peri\xf3dicamente."}),(0,n.jsx)("li",{children:"LEGISLACI\xd3N:"}),(0,n.jsx)("p",{children:"Estos t\xe9rminos de uso est\xe1n regidos y son totalmente conformes con la legislaci\xf3n brasile\xf1a vigente, incluyendo, pero no limit\xe1ndose a la Ley General de Protecci\xf3n de Datos (Ley n\xba 13.709/2018)."}),(0,n.jsxs)("p",{children:["Para ponerse en contacto con Grupo Impulse, simplemente escriba a"," ",(0,n.jsx)("a",{href:"mailto:contato@suporteimpulse.com",children:"contato@suporteimpulse.com"})]})]})]})})})]})}var O={Wrapped:o.ZP.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,ImageContainer:o.ZP.div`
    height: 100vh;
    width: 100%;

    position: fixed;
    background: url('/1.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.1;
  `,Container:o.ZP.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 24px 0;

    @media only screen and (max-width: 990px) {
      width: fit-content;
    }
  `,Content:o.ZP.div`
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 990px) {
      padding: 24px;
    }
  `,FooterContainer:o.ZP.footer`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    z-index: 1;
  `,ModalContainer:o.ZP.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 80px 60px 80px;
    font-family: 'Poppins', Sans-serif;
    background: ${e=>e.backgroundModal?e.backgroundModal:"#fff"};
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.9px);
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media only screen and (max-width: 990px) {
      padding: 60px 24px;
    }
  `,Icon:o.ZP.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: #000;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: -24px;
  `,ModalTitle:o.ZP.h1`
    color: ${e=>e.colorTitle?e.colorTitle:"#000"};

    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media only screen and (max-width: 990px) {
      font-size: 1.5rem;
    }
  `,ModalSubtitle:o.ZP.h2`
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media only screen and (max-width: 990px) {
      font-size: 14px;
    }
  `,ModalContent:o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
  `,TermsContainer:o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,TermsTitle:o.ZP.p`
    color: ${e=>e.colorTitle?e.colorTitle:"#5837a4"};
    font-family: 'Spartan', Sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 19px;

    @media only screen and (max-width: 990px) {
      font-size: 1.3rem;
    }
  `,TermsContent:o.ZP.ol`
    color: ${e=>e.colorText?e.colorText:"#000"};
    font-family: 'Spartan', Sans-serif;
    font-size: 1rem;
    font-weight: 600;
    line-height: 19px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      list-style-type: none;
    }

    ul {
      margin-left: 16px;
    }

    @media only screen and (max-width: 990px) {
      font-size: 14px;
      gap: 24px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    p {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `};function U({colorTitle:e,colorText:i,project:a="Grupo Impulse",backgroundModal:o}){let l=()=>{window.history.back()};return(0,n.jsxs)(O.Wrapped,{children:[(0,n.jsx)(O.ImageContainer,{}),(0,n.jsx)(O.Container,{children:(0,n.jsx)(O.Content,{children:(0,n.jsxs)(O.ModalContainer,{backgroundModal:o,children:[(0,n.jsxs)(O.Icon,{onClick:l,children:[(0,n.jsx)(z,{size:24}),"Voltar"]}),(0,n.jsxs)(O.ModalTitle,{colorTitle:e,children:["TERMOS DE USO",(0,n.jsx)("br",{})]}),(0,n.jsxs)(O.TermsContent,{colorText:i,children:[(0,n.jsx)("li",{children:"ACEITA\xc7\xc3O"}),(0,n.jsx)("p",{children:`O PRESENTE DOCUMENTO ("TERMOS DE USO") ESTABELECE OS TERMOS E CONDI\xc7\xD5ES APLIC\xc1VEIS AO USO DA PLATAFORMA GRUPO IMPULSE (\u201CPLATAFORMA\u201D ou \u201CSITE\u201D). A utiliza\xe7\xE3o deste site est\xe1 condicionada \xe0 aceita\xe7\xE3o dos termos e das pol\xedticas associadas. O usu\xe1rio dever\xe1 ler tais termos e pol\xedticas, certificar-se de hav\xea-los entendido, concordar com todas as condi\xe7\xF5es estabelecidas no Termo de Uso e se comprometer a cumpri-las.`}),(0,n.jsx)("p",{children:"Ao utilizar a plataforma, o usu\xe1rio manifesta sua livre, expressa e inequ\xedvoca concord\xe2ncia com rela\xe7\xe3o ao conte\xfado deste Termo de Uso e estar\xe1 legalmente vinculado a todas as condi\xe7\xf5es aqui previstas"}),(0,n.jsx)("li",{children:"RESPONSABILIDADES DO USU\xc1RIO:"}),(0,n.jsx)("p",{children:"O usu\xe1rio se responsabiliza pela precis\xe3o e veracidade dos dados informados no cadastro, sendo respons\xe1vel pela atualiza\xe7\xe3o das suas informa\xe7\xf5es pessoais e pelas consequ\xeancias em caso de omiss\xe3o ou erros nas informa\xe7\xf5es pessoais cadastradas. O login e senha s\xf3 poder\xe3o ser utilizados pelo usu\xe1rio cadastrado, devendo ser mantidos o sigilo da senha, que \xe9 pessoal e intransfer\xedvel, n\xe3o sendo poss\xedvel, em qualquer hip\xf3tese, a alega\xe7\xe3o de uso indevido ap\xf3s o ato de compartilhamento."}),(0,n.jsx)("p",{children:"O uso comercial das express\xf5es utilizadas em aplicativos como marca, nome empresarial ou nome de dom\xednio do Grupo Impulse, al\xe9m dos conte\xfados da plataforma, assim como os programas, bancos de dados, redes e arquivos que permitem que o usu\xe1rio acesse sua conta, est\xe3o protegidos por leis de direito autoral, marcas, patentes, modelos e desenhos industriais."}),(0,n.jsx)("p",{children:"Ao acessar o site, os usu\xe1rios declaram que ir\xe3o respeitar todos os direitos de propriedade intelectual e os decorrentes da prote\xe7\xe3o de marcas, patentes e/ou desenhos industriais, depositados ou registrados em, bem como todos os direitos referentes a terceiros que porventura estejam, ou estiverem de alguma forma, dispon\xedveis na plataforma. O simples acesso ao servi\xe7o n\xe3o confere aos usu\xe1rios qualquer direito ao uso dos nomes, t\xedtulos, palavras, frases, marcas, patentes, imagens, dados e informa\xe7\xf5es, dentre outras, que nele estejam ou estiverem dispon\xedveis. Em nenhuma circunst\xe2ncia os usu\xe1rios adquiram qualquer direito sobre esse conte\xfado."}),(0,n.jsx)("p",{children:"\xc9 vedada a utiliza\xe7\xe3o do conte\xfado da plataforma para finalidades comerciais, publicit\xe1rias ou qualquer outra que contrarie a finalidade para a qual foi concebido, conforme definido neste documento, sob pena de sujei\xe7\xe3o \xe0s san\xe7\xf5es cab\xedveis na Lei n\xba 9.610, de 19 de fevereiro de 1998, que protege os direitos autorais no Brasil. Os usu\xe1rios assumem toda e qualquer responsabilidade, de car\xe1ter civil e/ou criminal, pela utiliza\xe7\xe3o indevida das informa\xe7\xf5es, textos, gr\xe1ficos, marcas, imagens, enfim, todo e qualquer direito de propriedade intelectual ou industrial do servi\xe7o."}),(0,n.jsx)("li",{children:"LICEN\xc7AS."}),(0,n.jsx)("p",{children:"\xc9 concedida permiss\xe3o para baixar temporariamente uma c\xf3pia dos materiais no site Grupo Impulse, exclusivamente para visualiza\xe7\xe3o transit\xf3ria pessoal e n\xe3o comercial. Todos os materiais exibidos ou disponibilizados no Site, incluindo, sem limita\xe7\xe3o, gr\xe1ficos, documentos, textos, sons, v\xeddeo, \xe1udio, obras de arte, software e c\xf3digo HTML (coletivamente, o 'Material') s\xe3o de propriedade exclusiva do Grupo Impulse ou de seus fornecedores de conte\xfado, os quais reservam a si todos os seus direitos de propriedade intelectual."}),(0,n.jsx)("p",{children:"Os Materiais s\xe3o protegidos pelas leis de direitos autorais e outras regras, regulamentos e legisla\xe7\xf5es brasileiras, americanas e internacionais de propriedade intelectual aplic\xe1veis. Exceto conforme permitido no presente instrumento, voc\xea n\xe3o poder\xe1 (i) usar, copiar, modificar, exibir, apagar, distribuir, realizar download, arquivar, transmitir, publicar, vender, revender, adaptar, realizar engenharia reversa ou criar obras derivadas do Material, ou (ii) usar o Material em outros websites ou em quaisquer outros tipos de m\xeddia, como, por exemplo, em ambientes de rede, sem o consentimento pr\xe9vio e por escrito do Grupo Impulse."}),(0,n.jsx)("p",{children:"Essa licen\xe7a ser\xe1 automaticamente rescindida caso voc\xea viole alguma dessas restri\xe7\xf5es e poder\xe1 ser revogada pelo Grupo Impulse a qualquer momento. Ao encerrar a visualiza\xe7\xe3o desses materiais ou ao t\xe9rmino desta licen\xe7a, voc\xea dever\xe1 apagar todos os materiais baixados em sua posse, seja em formato eletr\xf4nico ou impresso."}),(0,n.jsx)("li",{children:"COMUNICA\xc7\xd5ES ELETR\xd4NICAS E NOTIFICA\xc7\xd5ES:"}),(0,n.jsx)("p",{children:"Ao utilizar a plataforma do Grupo Impulse e os servi\xe7os associados, o usu\xe1rio concorda em receber comunica\xe7\xf5es eletr\xf4nicas, incluindo, mas n\xe3o se limitando a e-mails, notifica\xe7\xf5es, mensagens e boletins informativos, enviados pelo Grupo Impulse. Essas comunica\xe7\xf5es podem ser relacionadas a atividades essenciais do infoproduto, como altera\xe7\xf5es de pre\xe7os, atualiza\xe7\xf5es de produtos, novos lan\xe7amentos, promo\xe7\xf5es, atualiza\xe7\xf5es de recursos e outras informa\xe7\xf5es relevantes."}),(0,n.jsx)("p",{children:"O usu\xe1rio consente expressamente em receber tais comunica\xe7\xf5es eletr\xf4nicas, as quais reconhece que s\xe3o parte integrante da utiliza\xe7\xe3o dos servi\xe7os fornecidos pela plataforma, podendo, a qualquer momento, optar por n\xe3o receber algumas dessas comunica\xe7\xf5es, seguindo as instru\xe7\xf5es de cancelamento de inscri\xe7\xe3o fornecidas nas mensagens eletr\xf4nicas ou ajustando suas configura\xe7\xf5es de notifica\xe7\xf5es na plataforma."}),(0,n.jsx)("p",{children:"Devido \xe0 import\xe2ncia das informa\xe7\xf5es contidas nas comunica\xe7\xf5es eletr\xf4nicas enviadas pela plataforma, a recusa em receb\xea-las pode afetar negativamente experi\xeancia do usu\xe1rio com o infoproduto ora aqui designado."}),(0,n.jsx)("li",{children:"GARANTIAS DE GANHO:"}),(0,n.jsx)("p",{children:"O usu\xe1rio entende e concorda que o Grupo Impulse n\xe3o assume nenhuma responsabilidade por quaisquer garantias de ganhos financeiros ou pessoais que ele possa obter. Qualquer informa\xe7\xe3o publicada com objetivos comerciais \xe9 meramente ilustrativa e n\xe3o deve ser interpretada como promessa de resultados. A forma como o usu\xe1rio utiliza o material disponibilizado e como busca alcan\xe7ar ganhos financeiros e pessoais \xe9 de total responsabilidade do usu\xe1rio"}),(0,n.jsx)("p",{children:"Ao prosseguir com o uso da plataforma do Grupo Impulse, o usu\xe1rio se compromete a n\xe3o buscar qualquer interpela\xe7\xe3o legal contra o Grupo Impulse em rela\xe7\xe3o a ganhos financeiros ou pessoais, isentando-o de qualquer responsabilidade ou obriga\xe7\xe3o relacionada a tais quest\xf5es. O sucesso financeiro e pessoal do usu\xe1rio depende, \xfanica e exclusivamente, de como ele utiliza as ferramentas e recursos oferecidos, e que quaisquer resultados obtidos s\xe3o inteiramente de sua responsabilidade."}),(0,n.jsx)("li",{children:"LINKS"}),(0,n.jsx)("p",{children:"A plataforma do Grupo Impulse poder\xe1 apresentar links, tais como hyperlinks ou bot\xf5es, direcionando o acesso a websites de terceiros. Os sites ligados poder\xe3o n\xe3o ser controlados ou monitorados pelo Grupo Impulse. O Grupo Impulse n\xe3o ser\xe1 respons\xe1vel pelos materiais, informa\xe7\xf5es ou conte\xfado publicados em sites ligados, nem tampouco pela disponibilidade dos sites ligados."}),(0,n.jsx)("p",{children:"A inclus\xe3o de sites ligados n\xe3o implica em nenhum relacionamento ou associa\xe7\xe3o entre o Grupo Impulse e o propriet\xe1rio de sites ligados, nem tampouco quaisquer endosso ou apoio ou patroc\xednio pelo Grupo Impulse dos sites ligados. O usu\xe1rio \xe9 exclusivamente respons\xe1vel por seu acesso aos sites ligados, utilizando-os sob seu pr\xf3prio discernimento, precau\xe7\xe3o e senso comum, devendo conferir as pol\xedticas de privacidade e os termos de uso aplic\xe1veis de tais sites ligados, os quais poder\xe3o ser diferentes dos termos contidos nestes Termos de Uso e na Pol\xedtica de Privacidade do Grupo Impulse."}),(0,n.jsx)("li",{children:"RESPONSABILIDADE GERAL"}),(0,n.jsx)("p",{children:"Na m\xe1xima extens\xe3o permitida pela legisla\xe7\xe3o aplic\xe1vel, o usu\xe1rio concorda em assumir todos os riscos associados ou relacionados ao seu uso do site ou de quaisquer materiais submetidos, incluindo, sem limita\xe7\xe3o, riscos de perdas financeiras, danos f\xedsicos, danos materiais, relacionamento com outros usu\xe1rios do site, estranhos, menores ou estrangeiros, e pessoas agindo sob falsa identidade. O usu\xe1rio concorda ainda em isentar o Grupo Impulse e suas empresas controladoras, subsidi\xe1rias e afiliadas, bem como seus diretores, representantes e colaboradores, contra quaisquer reclama\xe7\xf5es, a\xe7\xf5es, danos (diretos, indiretos e consequenciais) de qualquer tipo ou natureza, conhecidos ou n\xe3o, associados, originados ou resultantes de seu uso do site, de seus materiais submetidos ou de quaisquer transa\xe7\xf5es relacionadas ou resultantes de seu uso do site."}),(0,n.jsx)("p",{children:"O usu\xe1rio entende e concorda ainda que, na m\xe1xima extens\xe3o permitida pela legisla\xe7\xe3o aplic\xe1vel, em hip\xf3tese alguma o Grupo Impulse, suas controladoras, subsidi\xe1rias, afiliadas, diretores, representantes, empregados ou fornecedores ser\xe3o respons\xe1veis por quaisquer danos diretos, indiretos, consequenciais, incidentais, especiais, ou por perda de receita, dados ou utiliza\xe7\xe3o, sofridos por ele ou por qualquer terceiro, seja por qualquer raz\xe3o, ainda que o Grupo Impulse tenha sido comunicado da possibilidade de tais danos. Caso alguma jurisdi\xe7\xe3o pro\xedba a exclus\xe3o de determinadas garantias, a limita\xe7\xe3o de responsabilidade ou a ren\xfancia de determinados tipos de danos, a responsabilidade agregada do Grupo Impulse por quaisquer danos, na m\xe1xima extens\xe3o permitida pela legisla\xe7\xe3o aplic\xe1vel, n\xe3o ser\xe1 superior ao valor equivalente a inscri\xe7\xe3o do usu\xe1rio na plataforma."}),(0,n.jsx)("li",{children:"POL\xcdTICA DE PRIVACIDADE:"}),(0,n.jsx)("p",{children:"Tal Pol\xedtica espec\xedfica faz parte, de forma inerente, do presente Termo de Uso, ressaltando-se que os dados pessoais tratados por esse servi\xe7o ser\xe3o tratados nos termos da legisla\xe7\xe3o em vigor. Para mais informa\xe7\xf5es, acesse nossa pol\xedtica de privacidade dispon\xedvel, a qualquer tempo, na plataforma do Grupo Impulse."}),(0,n.jsx)("li",{children:"ALTERA\xc7\xd5ES DO TERMO DE USO:"}),(0,n.jsx)("p",{children:"O Grupo Impulse se reserva o direito de modificar no site, a qualquer momento e sem aviso pr\xe9vio, as presentes normas, especialmente para adapt\xe1-las \xe0s evolu\xe7\xf5es do servi\xe7o prestados, seja pela elabora\xe7\xe3o de novas disposi\xe7\xf5es, seja pela supress\xe3o ou pela modifica\xe7\xe3o daquelas j\xe1 existentes. Sendo, para tanto, recomend\xe1vel a verifica\xe7\xe3o desta p\xe1gina periodicamente."}),(0,n.jsx)("li",{children:"LEGISLA\xc7\xc3O:"}),(0,n.jsx)("p",{children:"Este termo de uso \xe9 regido e est\xe1 em total conformidade com a legisla\xe7\xe3o brasileira em vigor, incluindo, mas n\xe3o se limitando \xe0 Lei Geral de Prote\xe7\xe3o de Dados (Lei n\xba 13.709/2018)."}),(0,n.jsxs)("p",{children:["Para entrar em contato com o Grupo Impulse, basta escrever para"," ",(0,n.jsx)("a",{href:"mailto:contato@suporteimpulse.com",children:"contato@suporteimpulse.com"})]})]})]})})})]})}var q={Wrapped:o.ZP.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,ImageContainer:o.ZP.div`
    height: 100vh;
    width: 100%;

    position: fixed;
    background: url('/1.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.1;
  `,Container:o.ZP.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 24px 0;

    @media only screen and (max-width: 990px) {
      width: fit-content;
    }
  `,Content:o.ZP.div`
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 990px) {
      padding: 24px;
    }
  `,FooterContainer:o.ZP.footer`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    z-index: 1;
  `,ModalContainer:o.ZP.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 80px 60px 80px;
    font-family: 'Poppins', Sans-serif;
    background: ${e=>e.backgroundModal?e.backgroundModal:"#fff"};
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.9px);
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media only screen and (max-width: 990px) {
      padding: 60px 24px;
    }
  `,Icon:o.ZP.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: #000;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: -24px;
  `,ModalTitle:o.ZP.h1`
    color: ${e=>e.colorTitle?e.colorTitle:"#000"};

    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media only screen and (max-width: 990px) {
      font-size: 1.5rem;
    }
  `,ModalSubtitle:o.ZP.h2`
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media only screen and (max-width: 990px) {
      font-size: 14px;
    }
  `,ModalContent:o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
  `,TermsContainer:o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,TermsTitle:o.ZP.p`
    color: ${e=>e.colorTitle?e.colorTitle:"#5837a4"};
    font-family: 'Spartan', Sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 19px;

    @media only screen and (max-width: 990px) {
      font-size: 1.3rem;
    }
  `,TermsContent:o.ZP.ol`
    color: ${e=>e.colorText?e.colorText:"#000"};
    font-family: 'Spartan', Sans-serif;
    font-size: 1rem;
    font-weight: 600;
    line-height: 19px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      list-style-type: none;
    }

    ul {
      margin-left: 16px;
    }

    @media only screen and (max-width: 990px) {
      font-size: 14px;
      gap: 24px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    p {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `};function D({colorTitle:e,colorText:i,project:a="Grupo Impulse",backgroundModal:o}){let l=()=>{window.history.back()};return(0,n.jsxs)(q.Wrapped,{children:[(0,n.jsx)(q.ImageContainer,{}),(0,n.jsx)(q.Container,{children:(0,n.jsx)(q.Content,{children:(0,n.jsxs)(q.ModalContainer,{backgroundModal:o,children:[(0,n.jsxs)(q.Icon,{onClick:l,children:[(0,n.jsx)(z,{size:24}),"Back"]}),(0,n.jsxs)(q.ModalTitle,{colorTitle:e,children:["TERMS OF USE",(0,n.jsx)("br",{})]}),(0,n.jsxs)(q.TermsContent,{colorText:i,children:[(0,n.jsx)("li",{children:"ACCEPTANCE"}),(0,n.jsx)("p",{children:'THIS DOCUMENT ("TERMS OF USE") ESTABLISHES THE TERMS AND CONDITIONS APPLICABLE TO THE USE OF THE GRUPO IMPULSE PLATFORM ("PLATFORM" or "SITE"). The use of this site is conditioned upon the acceptance of the terms and policies associated. The user must read such terms and policies, ensure understanding, agree to all conditions set forth in the Terms of Use, and commit to complying with them.'}),(0,n.jsx)("p",{children:"By using the platform, the user expresses their free, express, and unequivocal agreement with the content of these Terms of Use and will be legally bound by all conditions stated herein."}),(0,n.jsx)("li",{children:"USER RESPONSIBILITIES:"}),(0,n.jsx)("p",{children:"The user is responsible for the accuracy and truthfulness of the information provided in the registration, being responsible for updating their personal information and for the consequences in case of omission or errors in the registered personal information. The login and password can only be used by the registered user, and the confidentiality of the password, which is personal and non-transferable, must be maintained, and it is not possible, in any case, to claim misuse after sharing."}),(0,n.jsx)("p",{children:"The commercial use of expressions used in applications such as the trademark, business name, or domain name of Grupo Impulse, in addition to the content of the platform, as well as the programs, databases, networks, and files that allow the user to access their account, are protected by copyright, trademark, patent, industrial design laws."}),(0,n.jsx)("p",{children:"By accessing the site, users declare that they will respect all intellectual property rights and those arising from the protection of trademarks, patents, and/or industrial designs, deposited or registered in, as well as all rights related to third parties that may be, or may be in any way, available on the platform. Simply accessing the service does not grant users any right to use the names, titles, words, phrases, trademarks, patents, images, data, and information, among others, that are or may be available in it. Under no circumstances do users acquire any rights to this content."}),(0,n.jsx)("p",{children:"The use of the content of the platform for commercial, advertising, or any other purpose contrary to the purpose for which it was conceived, as defined in this document, is prohibited, under penalty of subjecting to applicable sanctions in Law No. 9,610, of February 19, 1998, which protects copyright in Brazil. Users assume all and any responsibility, of a civil and/or criminal nature, for the misuse of information, texts, graphics, trademarks, images, in short, any and all intellectual or industrial property rights of the service."}),(0,n.jsx)("li",{children:"LICENSES."}),(0,n.jsx)("p",{children:"Permission is granted to temporarily download a copy of the materials on the Grupo Impulse website, exclusively for personal and non-commercial transient viewing. All materials displayed or made available on the Site, including, without limitation, graphics, documents, texts, sounds, videos, audios, artworks, software, and HTML code (collectively, the 'Material'), are exclusively owned by Grupo Impulse or its content providers, who reserve all their intellectual property rights."}),(0,n.jsx)("p",{children:"The Materials are protected by copyright laws and other applicable Brazilian, American, and international rules, regulations, and intellectual property laws. Except as permitted herein, you may not (i) use, copy, modify, display, delete, distribute, download, store, transmit, publish, sell, resell, adapt, reverse engineer, or create derivative works from the Material, or (ii) use the Material on other websites or in any other media, such as in network environments, without the prior written consent of Grupo Impulse."}),(0,n.jsx)("p",{children:"This license will be automatically terminated if you violate any of these restrictions and may be revoked by Grupo Impulse at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession, whether in electronic or printed format."}),(0,n.jsx)("li",{children:"ELECTRONIC COMMUNICATIONS AND NOTIFICATIONS:"}),(0,n.jsx)("p",{children:"By using the Grupo Impulse platform and associated services, the user agrees to receive electronic communications, including, but not limited to, emails, notifications, messages, and newsletters, sent by Grupo Impulse. These communications may be related to essential infoproduct activities, such as price changes, product updates, new releases, promotions, feature updates, and other relevant information."}),(0,n.jsx)("p",{children:"The user expressly consents to receive such electronic communications, which they acknowledge are an integral part of the use of the services provided by the platform, and may, at any time, choose not to receive some of these communications, following the unsubscribe instructions provided in electronic messages or adjusting their notification settings on the platform."}),(0,n.jsx)("p",{children:"Due to the importance of the information contained in electronic communications sent by the platform, refusal to receive them may negatively affect the user experience with the infoproduct designated herein."}),(0,n.jsx)("li",{children:"EARNINGS WARRANTIES:"}),(0,n.jsx)("p",{children:"The user understands and agrees that Grupo Impulse assumes no responsibility for any financial or personal earnings warranties they may obtain. Any information published for commercial purposes is merely illustrative and should not be interpreted as a promise of results. How the user uses the material provided and how they seek to achieve financial and personal gains is entirely the user's responsibility."}),(0,n.jsx)("p",{children:"By continuing to use the Grupo Impulse platform, the user agrees not to seek any legal action against Grupo Impulse regarding financial or personal gains, releasing it from any liability or obligation related to such matters. The financial and personal success of the user depends solely and exclusively on how they use the tools and resources offered, and any results obtained are entirely their responsibility."}),(0,n.jsx)("li",{children:"LINKS"}),(0,n.jsx)("p",{children:"The Grupo Impulse platform may present links, such as hyperlinks or buttons, directing access to third-party websites. The linked sites may not be controlled or monitored by Grupo Impulse. Grupo Impulse will not be responsible for the materials, information, or content published on linked sites, nor for the availability of linked sites."}),(0,n.jsx)("p",{children:"The inclusion of linked sites does not imply any relationship or association between Grupo Impulse and the owner of linked sites, nor any endorsement, support, or sponsorship by Grupo Impulse of linked sites. The user is solely responsible for their access to linked sites, using them at their own discretion, caution, and common sense, and should check the privacy policies and applicable terms of use of such linked sites, which may differ from the terms contained in these Terms of Use and Grupo Impulse's Privacy Policy."}),(0,n.jsx)("li",{children:"GENERAL LIABILITY"}),(0,n.jsx)("p",{children:"To the maximum extent permitted by applicable law, the user agrees to assume all risks associated with or related to their use of the site or any submitted materials, including, without limitation, risks of financial losses, physical harm, material damages, relationships with other site users, strangers, minors or foreigners, and persons acting under false identity. The user also agrees to indemnify Grupo Impulse and its parent companies, subsidiaries, and affiliates, as well as its directors, representatives, and collaborators, against any claims, actions, damages (direct, indirect, and consequential) of any kind or nature, known or unknown, associated, originated, or resulting from their use of the site, their submitted materials, or any transactions related to or resulting from their use of the site."}),(0,n.jsx)("p",{children:"The user understands and agrees further that, to the maximum extent permitted by applicable law, under no circumstances will Grupo Impulse, its parent companies, subsidiaries, affiliates, directors, representatives, employees, or suppliers be liable for any direct, indirect, consequential, incidental, special, or loss of revenue, data, or use damages suffered by them or any third party, for any reason, even if Grupo Impulse has been advised of the possibility of such damages. If any jurisdiction prohibits the exclusion of certain warranties, limitation of liability, or waiver of certain types of damages, the aggregate liability of Grupo Impulse for any damages, to the maximum extent permitted by applicable law, will not exceed the equivalent value of the user's subscription to the platform."}),(0,n.jsx)("li",{children:"PRIVACY POLICY:"}),(0,n.jsx)("p",{children:"This specific policy is inherently part of these Terms of Use, emphasizing that personal data processed by this service will be treated in accordance with applicable law. For more information, access our privacy policy, available at any time, on the Grupo Impulse platform."}),(0,n.jsx)("li",{children:"CHANGES TO THE TERMS OF USE:"}),(0,n.jsx)("p",{children:"Grupo Impulse reserves the right to modify these rules on the site at any time and without prior notice, especially to adapt them to the evolution of the services provided, either by drafting new provisions or by suppressing or modifying existing ones. It is advisable to check this page periodically."}),(0,n.jsx)("li",{children:"LEGISLATION:"}),(0,n.jsx)("p",{children:"This terms of use is governed and is in full compliance with the current Brazilian legislation, including, but not limited to, the General Data Protection Law (Law No. 13.709/2018)."}),(0,n.jsxs)("p",{children:["To contact Grupo Impulse, simply write to"," ",(0,n.jsx)("a",{href:"mailto:contato@suporteimpulse.com",children:"contato@suporteimpulse.com"})]})]})]})})})]})}o.ZP.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,o.ZP.div`
    height: 100vh;
    width: 100%;

    position: fixed;
    background: url('/1.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.1;
  `,o.ZP.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 24px 0;

    @media only screen and (max-width: 990px) {
      width: fit-content;
    }
  `,o.ZP.div`
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 990px) {
      padding: 24px;
    }
  `,o.ZP.footer`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    z-index: 1;
  `,o.ZP.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 80px 60px 80px;
    font-family: 'Poppins', Sans-serif;
    background: ${e=>e.backgroundModal?e.backgroundModal:"#fff"};
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.9px);
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media only screen and (max-width: 990px) {
      padding: 60px 24px;
    }
  `,o.ZP.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: #000;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: -24px;
  `,o.ZP.h1`
    color: ${e=>e.colorTitle?e.colorTitle:"#000"};

    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media only screen and (max-width: 990px) {
      font-size: 1.5rem;
    }
  `,o.ZP.h2`
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media only screen and (max-width: 990px) {
      font-size: 14px;
    }
  `,o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
  `,o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,o.ZP.p`
    color: ${e=>e.colorTitle?e.colorTitle:"#5837a4"};
    font-family: 'Spartan', Sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 19px;

    @media only screen and (max-width: 990px) {
      font-size: 1.3rem;
    }
  `,o.ZP.ol`
    color: ${e=>e.colorText?e.colorText:"#000"};
    font-family: 'Spartan', Sans-serif;
    font-size: 1rem;
    font-weight: 600;
    line-height: 19px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      list-style-type: none;
    }

    ul {
      margin-left: 16px;
    }

    @media only screen and (max-width: 990px) {
      font-size: 14px;
      gap: 24px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    p {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `,o.ZP.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,o.ZP.div`
    height: 100vh;
    width: 100%;

    position: fixed;
    background: url('/1.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.1;
  `,o.ZP.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 24px 0;

    @media only screen and (max-width: 990px) {
      width: fit-content;
    }
  `,o.ZP.div`
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 990px) {
      padding: 24px;
    }
  `,o.ZP.footer`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    z-index: 1;
  `,o.ZP.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 80px 60px 80px;
    font-family: 'Poppins', Sans-serif;
    background: ${e=>e.backgroundModal?e.backgroundModal:"#fff"};
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.9px);
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media only screen and (max-width: 990px) {
      padding: 60px 24px;
    }
  `,o.ZP.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: #000;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: -24px;
  `,o.ZP.h1`
    color: ${e=>e.colorTitle?e.colorTitle:"#000"};

    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media only screen and (max-width: 990px) {
      font-size: 1.5rem;
    }
  `,o.ZP.h2`
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media only screen and (max-width: 990px) {
      font-size: 14px;
    }
  `,o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
  `,o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,o.ZP.p`
    color: ${e=>e.colorTitle?e.colorTitle:"#5837a4"};
    font-family: 'Spartan', Sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 19px;

    @media only screen and (max-width: 990px) {
      font-size: 1.3rem;
    }
  `,o.ZP.ol`
    color: ${e=>e.colorText?e.colorText:"#000"};
    font-family: 'Spartan', Sans-serif;
    font-size: 1rem;
    font-weight: 600;
    line-height: 19px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      list-style-type: none;
    }

    ul {
      margin-left: 16px;
    }

    @media only screen and (max-width: 990px) {
      font-size: 14px;
      gap: 24px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    p {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `,o.ZP.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,o.ZP.div`
    height: 100vh;
    width: 100%;

    position: fixed;
    background: url('/1.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.1;
  `,o.ZP.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 24px 0;

    @media only screen and (max-width: 990px) {
      width: fit-content;
    }
  `,o.ZP.div`
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 990px) {
      padding: 24px;
    }
  `,o.ZP.footer`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    z-index: 1;
  `,o.ZP.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 80px 60px 80px;
    font-family: 'Poppins', Sans-serif;
    background: ${e=>e.backgroundModal?e.backgroundModal:"#fff"};
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.9px);
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media only screen and (max-width: 990px) {
      padding: 60px 24px;
    }
  `,o.ZP.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: #000;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: -24px;
  `,o.ZP.h1`
    color: ${e=>e.colorTitle?e.colorTitle:"#000"};

    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media only screen and (max-width: 990px) {
      font-size: 1.5rem;
    }
  `,o.ZP.h2`
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media only screen and (max-width: 990px) {
      font-size: 14px;
    }
  `,o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
  `,o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,o.ZP.p`
    color: ${e=>e.colorTitle?e.colorTitle:"#5837a4"};
    font-family: 'Spartan', Sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 19px;

    @media only screen and (max-width: 990px) {
      font-size: 1.3rem;
    }
  `,o.ZP.ol`
    color: ${e=>e.colorText?e.colorText:"#000"};
    font-family: 'Spartan', Sans-serif;
    font-size: 1rem;
    font-weight: 600;
    line-height: 19px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      list-style-type: none;
    }

    ul {
      margin-left: 16px;
    }

    @media only screen and (max-width: 990px) {
      font-size: 14px;
      gap: 24px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    p {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `;var F=class{};F.mount=e=>{F.script=document.createElement("script"),F.script.src=`https://scripts.converteai.net/817bd58d-9ef6-4339-97a6-a374233fe748/players/${e}/player.js`,F.script.async=!0,F.script.type="text/javascript",F.script.id="smartplayer-script-head",setTimeout(()=>{document.head.appendChild(F.script)},1)},F.verifyScriptIsLoaded=()=>document.getElementById("smartplayer-script-head"),F.unmount=()=>{F.script&&F.verifyScriptIsLoaded()&&document.head.removeChild(F.script)},F.videoDelay=e=>{let i=0,a=!1,o="alreadyElsDisplayed740",n=localStorage.getItem(o),l=function(){e&&e(!0),a=!0,localStorage.setItem(o,"true")},d=function(){if(void 0===window.smartplayer||!(window.smartplayer.instances&&window.smartplayer.instances.length)){if(i>=10)return;return i+=1,setTimeout(function(){d()},1e3)}window.smartplayer.instances[0].on("timeupdate",()=>{a||window.smartplayer.instances[0].smartAutoPlay||740<window.smartplayer.instances[0].video.currentTime||l()})};"true"===n?setTimeout(function(){l()},100):d()};var H={Container:o.ZP.div`
    padding: 24px 60px;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 990px) {
      padding: 0px 53px 60px 53px;
      margin: 0px ${({isVisible:e})=>e?"0px":"0"};
    }
  `,Image:o.ZP.img`
    margin-bottom: 50px;
    width: ${e=>e.width?e.width:"241px"};
    height: ${e=>e.height?e.height:"112px"};
    @media only screen and (max-width: 990px) {
      width: ${e=>e.widthMobile?e.widthMobile:"103px"};
      height: ${e=>e.heightMobile?e.heightMobile:"29px"};
      margin-top: 32px;
      margin-bottom: 24px;
    }
  `,Name:o.ZP.div`
    margin: 0px 0 0;
    text-align: start;
    color: ${e=>e.ColorTitle?e.ColorTitle:"#ad2a22"};
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    width: 100%;
    font-size: 48px;
    text-transform: uppercase;
    margin-top: 42px;
    border-radius: 26px;
    br {
      @media only screen and (max-width: 990px) {
        display: none !important;
        white-space: nowrap;
      }
    }
    small {
      font-size: 48px;
      color: ${e=>e.ColorTitle?e.ColorTitle:"#ad2a22"};
    }

    @media only screen and (max-width: 990px) {
      margin: 0;
      font-size: 24px;
      margin-bottom: 24px;
      text-align: center;

      small {
        border-radius: 5px;
        font-size: 24px;
        color: ${e=>e.ColorTitle?e.ColorTitle:"#ad2a22"};
        text-transform: uppercase;
      }
    }
  `,ModalContainer:o.ZP.div`
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 1000px;
    margin-top: 10%;

    @media only screen and (max-width: 990px) {
      flex-direction: column-reverse;
      height: auto;
    }
  `,LeftContent:o.ZP.div`
    width: 30%;

    .content {
      width: 400px;
    }

    @media only screen and (max-width: 990px) {
      width: 100%;

      .content {
        width: 100%;
        height: auto;
        margin-top: 48px;
      }
    }
  `,RightContent:o.ZP.div`
    width: 42%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    justify-content: center;

    height: 500px;
    @media only screen and (max-width: 990px) {
      width: 100%;
      height: auto;

      img {
        width: 50px;
      }
    }

    img {
      width: 45%;
      @media only screen and (max-width: 990px) {
        width: 50%;
        margin-top: 24px;
      }
    }
  `,Text:o.ZP.div`
    text-align: start;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 36px;
    margin-top: 42px;

    small {
      color: ${e=>e.ColorPrice?e.ColorPrice:"#ad2a22"};
      font-size: 36px;
    }

    @media only screen and (max-width: 990px) {
      margin: 0;
      display: flex;
      text-transform: uppercase;
      font-weight: 600;
      flex-direction: column;
      align-items: center;
      text-align: center;
      font-size: 22px;

      gap: 0px;

      small {
        width: 100%;
        border-radius: 5px;
        font-size: 22px;
        padding: 8px;
        color: ${e=>e.ColorPrice?e.ColorPrice:"#ad2a22"};
        text-transform: uppercase;
      }
    }
  `,Button:o.ZP.a`
    margin-top: 50px;
    width: 88%;
    text-align: center;
    text-transform: uppercase;
    background-color: #35ba48;
    color: #ffffff;
    padding: 1em 2em;
    display: inline-block;
    border-radius: 0.4em;
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    line-height: 1;
    font-weight: 600;
    text-transform: uppercase;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
    text-decoration: none;
    cursor: pointer;

    @media only screen and (max-width: 990px) {
      font-size: 16px;
      margin-top: 16px;
      width: 100%;
    }
  `};function K(e){let{checkoutLink:i,FirstName:a,vslId:o="defaultVslId",vslIdEmail:d="defaultVslIdEmail",isVisible:t,timeVsl:s=100,setIsVisible:r,Subtitle:c="Start earning ",Price:u="$18 – $39",SubtitleTwo:m=" an hour doing jobs as a Envelope Stuffing Professional today!",TextButton:p="I want to work as an Envelope Stuffing Professional",Title:x="Congratulations, ",TitleTwo:g="YOU HAVE BEEN APPROVED!",ColorTitle:f="",ColorPrice:h=""}=e,[v,y]=(0,l.useState)(void 0),[b,w]=(0,l.useState)(new Date),P=(0,l.useRef)(void 0);(0,l.useEffect)(()=>{console.log(null==window?void 0:window.location.pathname);let e=window.location.pathname;P.current="/pv"===e?o:d;let i=setInterval(()=>{w(new Date)},1e3);return()=>clearInterval(i)},[o,d]),(0,l.useEffect)(()=>{void 0!==v&&v>s&&r(!0)},[v,s,r]),(0,l.useEffect)(()=>{let e=localStorage.getItem(P.current);null!==e&&y(+e)},[b,P.current]);let S=(0,l.useCallback)(()=>{F.videoDelay(P.current)},[P.current]);return(0,l.useEffect)(()=>(F.mount(P.current),window.addEventListener("load",S),()=>{F.unmount(),window.removeEventListener("load",S)}),[P.current,S]),(0,n.jsxs)(H.Container,{isVisible:t,children:[(0,n.jsxs)(H.ModalContainer,{children:[(0,n.jsx)(H.LeftContent,{children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"content",children:(0,n.jsx)("div",{id:`vid_${P.current}`,children:(0,n.jsx)("img",{id:`thumb_${P.current}`,src:`https://images.converteai.net/817bd58d-9ef6-4339-97a6-a374233fe748/players/${P.current}/thumbnail.jpg`,alt:"VSL icon"})})})})}),(0,n.jsxs)(H.RightContent,{children:[(0,n.jsxs)(H.Name,{ColorTitle:f,children:[x,(0,n.jsx)("br",{})," ",(0,n.jsx)("small",{children:a}),"! ",(0,n.jsx)("br",{}),g]}),(0,n.jsxs)(H.Text,{ColorPrice:h,children:[c,(0,n.jsx)("small",{children:u}),m]})]})]}),t&&(0,n.jsxs)(H.Button,{href:i,children:[" ",p]})]})}/*! Bundled license information:

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/arrow-left.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.294.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/}}]);