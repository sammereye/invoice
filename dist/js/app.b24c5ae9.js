(function(){"use strict";var e={989:function(e,t,n){var i=n(9242),r=n(3396);function s(e,t,n,i,s,o){const a=(0,r.up)("Sidebar"),c=(0,r.up)("Main");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(a),(0,r.Wm)(c)],64)}var o=n(9574),a=n(2691),c=n(9824);const d={class:"fixed left-0 top-0 bottom-0 w-20 bg-[#373B53] flex flex-col justify-between"},A=(0,r.uE)('<div class="w-20 h-20 flex justify-center items-center bg-purple-bright"><img src="'+o+'"></div><div><div class="w-20 h-20 flex justify-center items-center"><img src="'+a+'"></div><div class="w-20 h-20 flex justify-center items-center border-t border-blue-gray"><img class="w-10 h-10 rounded-full" src="'+c+'"></div></div>',2),l=[A];function u(e,t,n,i,s,o){return(0,r.wg)(),(0,r.iD)("div",d,l)}var m={name:"Sidebar"},p=n(89);const g=(0,p.Z)(m,[["render",u]]);var f=g;const v={class:"ml-20"},y={class:"w-[900px] my-20 mx-auto"};function b(e,t,n,i,s,o){const a=(0,r.up)("InvoiceHeader"),c=(0,r.up)("InvoiceList");return(0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("div",y,[(0,r.Wm)(a),(0,r.Wm)(c,{invoices:s.data},null,8,["invoices"])])])}const E={class:"mt-16 space-y-5"};function x(e,t,n,i,s,o){const a=(0,r.up)("InvoiceListItem");return(0,r.wg)(),(0,r.iD)("div",E,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.invoices,(e=>((0,r.wg)(),(0,r.j4)(a,{key:e.id,data:e},null,8,["data"])))),128))])}var w=n(7139),h=n(9782);const C={class:"bg-[#ffffff] shadow-md grid grid-cols-[15%_20%_20%_20%_20%_5%] text-xs px-10 py-5 rounded-md items-center"},D={class:"text-blue-blue-gray"},B={class:"text-blue-blue-gray"},k={class:"text-right text-base font-bold"},I={key:0,class:"bg-[#e3fff5] w-[75%] text-center py-3 rounded-md text-[#008357] mx-auto flex items-center justify-center"},K=(0,r._)("div",{class:"p-1 bg-[#27dd45] rounded-full mr-3"},null,-1),R=(0,r._)("div",null,"Paid",-1),U=[K,R],Q={key:1,class:"bg-[#ffeadb] w-[75%] text-center py-3 rounded-md text-[#bf7412] mx-auto flex items-center justify-center"},T=(0,r._)("div",{class:"p-1 bg-[#dd9127] rounded-full mr-3"},null,-1),L=(0,r._)("div",null,"Pending",-1),Z=[T,L],W={key:2,class:"bg-[#f0f0f0] w-[75%] text-center py-3 rounded-md text-[#666666] mx-auto flex items-center justify-center"},M=(0,r._)("div",{class:"p-1 bg-[#676968] rounded-full mr-3"},null,-1),O=(0,r._)("div",null,"Draft",-1),j=[M,O],N=(0,r._)("img",{class:"mx-auto",src:h},null,-1);function P(e,t,n,i,s,o){return(0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("div",null,"#"+(0,w.zw)(n.data.id),1),(0,r._)("div",D,"Due "+(0,w.zw)(n.data.paymentDue),1),(0,r._)("div",B,(0,w.zw)(n.data.clientName),1),(0,r._)("div",k,"$"+(0,w.zw)(n.data.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),"paid"===n.data.status?((0,r.wg)(),(0,r.iD)("div",I,U)):"pending"===n.data.status?((0,r.wg)(),(0,r.iD)("div",Q,Z)):"draft"===n.data.status?((0,r.wg)(),(0,r.iD)("div",W,j)):(0,r.kq)("",!0),N])}var F={name:"InvoiceListItem",props:{data:Object}};const V=(0,p.Z)(F,[["render",P]]);var q=V,H={name:"InvoiceList",components:{InvoiceListItem:q},props:{invoices:Array}};const G=(0,p.Z)(H,[["render",x]]);var S=G,Y=n(1221),J=n(1179);const X={class:"flex justify-between items-center"},z=(0,r.uE)('<div><h1 class="text-3xl font-bold tracking-tight mb-2">Invoices</h1><div class="text-xs text-blue-gray">There are 7 total invoices</div></div><div class="flex cursor-pointer"><div class="flex items-center mr-8"><div class="text-xs mr-2">Filter by Status</div><img class="w-[11px] h-[7px]" src="'+Y+'"></div><button class="flex items-center bg-purple-bright text-white-light py-2 px-2 rounded-full"><div class="flex items-center justify-center p-3 bg-white-light rounded-full"><img src="'+J+'" alt="Plus icon"></div><div class="text-xs mx-4 font-bold">New Invoice</div></button></div>',2),_=[z];function $(e,t,n,i,s,o){return(0,r.wg)(),(0,r.iD)("div",X,_)}var ee={name:"InvoiceHeader"};const te=(0,p.Z)(ee,[["render",$]]);var ne=te,ie=JSON.parse('[{"id":"RT3080","createdAt":"2021-08-18","paymentDue":"2021-08-19","description":"Re-branding","paymentTerms":1,"clientName":"Jensen Huang","clientEmail":"jensenh@mail.com","status":"paid","senderAddress":{"street":"19 Union Terrace","city":"London","postCode":"E1 3EZ","country":"United Kingdom"},"clientAddress":{"street":"106 Kendell Street","city":"Sharrington","postCode":"NR24 5WQ","country":"United Kingdom"},"items":[{"name":"Brand Guidelines","quantity":1,"price":1800.9,"total":1800.9}],"total":1800.9},{"id":"XM9141","createdAt":"2021-08-21","paymentDue":"2021-09-20","description":"Graphic Design","paymentTerms":30,"clientName":"Alex Grim","clientEmail":"alexgrim@mail.com","status":"pending","senderAddress":{"street":"19 Union Terrace","city":"London","postCode":"E1 3EZ","country":"United Kingdom"},"clientAddress":{"street":"84 Church Way","city":"Bradford","postCode":"BD1 9PB","country":"United Kingdom"},"items":[{"name":"Banner Design","quantity":1,"price":156,"total":156},{"name":"Email Design","quantity":2,"price":200,"total":400}],"total":556},{"id":"RG0314","createdAt":"2021-09-24","paymentDue":"2021-10-01","description":"Website Redesign","paymentTerms":7,"clientName":"John Morrison","clientEmail":"jm@myco.com","status":"paid","senderAddress":{"street":"19 Union Terrace","city":"London","postCode":"E1 3EZ","country":"United Kingdom"},"clientAddress":{"street":"79 Dover Road","city":"Westhall","postCode":"IP19 3PF","country":"United Kingdom"},"items":[{"name":"Website Redesign","quantity":1,"price":14002.33,"total":14002.33}],"total":14002.33},{"id":"RT2080","createdAt":"2021-10-11","paymentDue":"2021-10-12","description":"Logo Concept","paymentTerms":1,"clientName":"Alysa Werner","clientEmail":"alysa@email.co.uk","status":"pending","senderAddress":{"street":"19 Union Terrace","city":"London","postCode":"E1 3EZ","country":"United Kingdom"},"clientAddress":{"street":"63 Warwick Road","city":"Carlisle","postCode":"CA20 2TG","country":"United Kingdom"},"items":[{"name":"Logo Sketches","quantity":1,"price":102.04,"total":102.04}],"total":102.04},{"id":"AA1449","createdAt":"2021-10-7","paymentDue":"2021-10-14","description":"Re-branding","paymentTerms":7,"clientName":"Mellisa Clarke","clientEmail":"mellisa.clarke@example.com","status":"pending","senderAddress":{"street":"19 Union Terrace","city":"London","postCode":"E1 3EZ","country":"United Kingdom"},"clientAddress":{"street":"46 Abbey Row","city":"Cambridge","postCode":"CB5 6EG","country":"United Kingdom"},"items":[{"name":"New Logo","quantity":1,"price":1532.33,"total":1532.33},{"name":"Brand Guidelines","quantity":1,"price":2500,"total":2500}],"total":4032.33},{"id":"TY9141","createdAt":"2021-10-01","paymentDue":"2021-10-31","description":"Landing Page Design","paymentTerms":30,"clientName":"Thomas Wayne","clientEmail":"thomas@dc.com","status":"pending","senderAddress":{"street":"19 Union Terrace","city":"London","postCode":"E1 3EZ","country":"United Kingdom"},"clientAddress":{"street":"3964  Queens Lane","city":"Gotham","postCode":"60457","country":"United States of America"},"items":[{"name":"Web Design","quantity":1,"price":6155.91,"total":6155.91}],"total":6155.91},{"id":"FV2353","createdAt":"2021-11-05","paymentDue":"2021-11-12","description":"Logo Re-design","paymentTerms":7,"clientName":"Anita Wainwright","clientEmail":"","status":"draft","senderAddress":{"street":"19 Union Terrace","city":"London","postCode":"E1 3EZ","country":"United Kingdom"},"clientAddress":{"street":"","city":"","postCode":"","country":""},"items":[{"name":"Logo Re-design","quantity":1,"price":3102.04,"total":3102.04}],"total":3102.04}]'),re={name:"Main",components:{InvoiceList:S,InvoiceHeader:ne},data(){return{data:ie}}};const se=(0,p.Z)(re,[["render",b]]);var oe=se,ae={name:"App",components:{Sidebar:f,Main:oe}};const ce=(0,p.Z)(ae,[["render",s]]);var de=ce;(0,i.ri)(de).mount("#app")},1221:function(e,t,n){e.exports=n.p+"img/icon-arrow-down.b9de1510.svg"},9782:function(e,t,n){e.exports=n.p+"img/icon-arrow-right.b66e4358.svg"},2691:function(e,t,n){e.exports=n.p+"img/icon-moon.f0303c2a.svg"},1179:function(e,t,n){e.exports=n.p+"img/icon-plus.8060a7cf.svg"},9574:function(e,t,n){e.exports=n.p+"img/logo.2043533c.svg"},9824:function(e){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAFAAUAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAgMHCAEEBQb/2gAIAQEAAAAAsvkyGTAk1IO8pJ8tBhGYhrh6vnW47oNlcPGu9+fPSA2efrf0OPbDaBkIkqptX02jLJiM6WIkCw8o7yTl1Di5Ww9tWam+LKq8VkEPyNdCifkVIU2jYkr/xAAZAQACAwEAAAAAAAAAAAAAAAACAwABBAX/2gAIAQIQAAAAblTvhcgesRZ83QhRDSoKpn//xAAaAQABBQEAAAAAAAAAAAAAAAACAAEDBAUG/9oACAEDEAAAAKWpbwkHVFzMcd69ioFKDJ3cP//EADUQAAEDAwIEBAMFCQAAAAAAAAECAwQABREGEgchMUEQE1FxIzJhFCAigaEkMENSYnORsbL/2gAIAQEAAT8A/eTp8aBEdlSF7W2xkn/QFXriPcH3HExlllvshPzfmaY13dobu5qepPqCdwNaZ4msznUMT0NpJwA810yf5k/f4s3dDEOFCC8KUovL9hyFIdm3WZ9mhgD1UegFRNFQXE4euRW73DbiautkXYyJUO5Jd8oBa2s/FQM/MMVpe5quunrXOUQVPR0lR9VDkfvcb25qrnaW2W8+ewUJP1SasVuet1sC2GQ6+vkSe1RLROnX6O624UNJKC6Rke4qXo2UxdX2ypZZfcKvPIBBZUMFs9wa0fZzZNM2m3KcC1MMAKUOhKiVeOazWa1LZGL1bVMLbSpxCgtonsodsnsakOXiwXh+NObLe7C8HBGFHqCKmasb+xurYkojObCGso3FSu5AqxaucDq0Trm+4XEpShK8FvJ9qgn9iif2G/8AkVnwzWazWa4vWVcuwi6R0ZfhfP8AVldIuKFv71gZCAlKlDcE889KTdhsIW+F5UMI8tKR16jFQZMeTDjPx3EOMuNJLa0HKSMdq3Vms1nw51xafksaOkOMTksEPIyg/wAcd26ccUtRJAHtSeorSOvNQ6cfZTHlLciJXlcRZ+GoVY+MmnZ6g3NYehLPc/ERUK526e0HIcxh9J7oWFeG2sVd71bLLDVKnyUMtjpnqo+iR3NcR9cPaqmseW2WokbcGW+53dVqojn0oJ6ZpKsdKRILfTmfWmZslpYcQ6pKwchQPMVwo17NvK3bTcnvNfbb3sOn5lpHVKvDiLxERphCIcNKVz3UZ59GkHuau1/ud3kqfnTHX3PVZzj6CiaV1A8CcAn0oHn+VJVXCt5aNcWbb3cWD7FB8NbXc3PU13lbypCpSw2f6EnaK3/qa71nK/BR/CaTkmh+grhQnOubR7un/DZr/8QAIBEAAgICAgIDAAAAAAAAAAAAAQIAEQMEEDEhQRMgcf/aAAgBAgEBPwCbO3jwUDZY+hMO/jyEBlKEn6Z0HzO7Vd+IgtqJBFRRSj85za6vZ9zHrhDK5PUqKZ4PU6swknle5//EACARAAICAgEFAQAAAAAAAAAAAAECABEDBAUQICExQWH/2gAIAQMBAT8AnH8Vs71lKVB7Y+pt8Ds4AWTIuVQPNe+zU2GGpgwYiQtEu36fkZnVbUENMpByuQPp6XNXcfFSfLmTfLi7A8QmyZfQWDLldtQz/9k="}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,s){if(!i){var o=1/0;for(A=0;A<e.length;A++){i=e[A][0],r=e[A][1],s=e[A][2];for(var a=!0,c=0;c<i.length;c++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(a=!1,s<o&&(o=s));if(a){e.splice(A--,1);var d=r();void 0!==d&&(t=d)}}return t}s=s||0;for(var A=e.length;A>0&&e[A-1][2]>s;A--)e[A]=e[A-1];e[A]=[i,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/invoice/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,s,o=i[0],a=i[1],c=i[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var A=c(n)}for(t&&t(i);d<o.length;d++)s=o[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(A)},i=self["webpackChunkinvoice"]=self["webpackChunkinvoice"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(989)}));i=n.O(i)})();
//# sourceMappingURL=app.b24c5ae9.js.map