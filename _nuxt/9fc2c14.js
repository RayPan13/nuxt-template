(window.webpackJsonp=window.webpackJsonp||[]).push([[15,5],{280:function(t,o,r){var content=r(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("ba56debe",content,!0,{sourceMap:!1})},283:function(t,o,r){"use strict";r.r(o);var e={name:"CarouselThumbnail",props:{carousel:{type:Array,required:!0}},data:function(){return{show:0,transitionName:"left-in"}},watch:{show:function(t){var o=this.carousel.length-1;t<0&&(this.show=0),t>o&&(this.show=o)}},methods:{setShow:function(t){this.setTransition(t),this.show=t},setTransition:function(t){t>this.show?this.transitionName="left-in":this.transitionName="right-in"}}},n=(r(290),r(9)),component=Object(n.a)(e,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"carousel"},[r("div",{staticClass:"heart"},[r("fa",{attrs:{icon:["far","heart"]}})],1),t._v(" "),r("transition-group",{attrs:{tag:"div",name:t.transitionName}},t._l(t.carousel,(function(o,e){return r("div",{directives:[{name:"show",rawName:"v-show",value:e===t.show,expression:"index === show"}],key:o.id,staticClass:"item"},[r("img",{attrs:{src:o.src,alt:""}})])})),0),t._v(" "),r("button",{staticClass:"prev",class:{"no-prev":t.show<=0},on:{click:function(o){return t.setShow(t.show-1)}}},[r("fa",{attrs:{icon:["fas","angle-left"]}})],1),t._v(" "),r("button",{staticClass:"next",class:{"no-next":t.show>=t.carousel.length-1},on:{click:function(o){return t.setShow(t.show+1)}}},[r("fa",{attrs:{icon:["fas","angle-right"]}})],1),t._v(" "),r("ul",t._l(t.carousel,(function(o,e){return r("li",{key:o.id,class:{active:t.show===e},on:{click:function(o){return t.setShow(e)}}},[r("img",{attrs:{src:o.src,alt:""}})])})),0)],1)}),[],!1,null,"4a00a3bb",null);o.default=component.exports},290:function(t,o,r){"use strict";r(280)},291:function(t,o,r){var e=r(29)(!1);e.push([t.i,'.container[data-v-4a00a3bb]{width:100%;margin:0 auto;padding:0 40px;max-width:1280px;box-sizing:border-box}@media(max-width:1024px){.container[data-v-4a00a3bb]{padding:0 8%}}@media(max-width:640px){.container[data-v-4a00a3bb]{padding:0 5%}}.carousel[data-v-4a00a3bb]{width:100%;padding-top:74%;position:relative;overflow:hidden}.carousel:hover button[data-v-4a00a3bb]{opacity:1}.carousel:hover button.prev[data-v-4a00a3bb]{left:10px}.carousel:hover button.next[data-v-4a00a3bb]{right:10px}.carousel .heart[data-v-4a00a3bb]{position:absolute;top:8px;right:8px;border-radius:50%;background-color:#fff;box-shadow:0 0 8px 0 rgba(0,0,0,.3);z-index:3;width:30px;height:30px;color:#ff6b6b;font-size:1.8rem;display:flex;justify-content:center;align-items:center;cursor:pointer}.carousel .heart svg[data-v-4a00a3bb]{transition:.5s}.carousel .heart[data-v-4a00a3bb]:hover{background-color:#ff6b6b;color:#fff}.carousel .heart:hover svg[data-v-4a00a3bb]{transform:rotate(1turn)}.carousel button[data-v-4a00a3bb]{position:absolute;top:50%;transform:translateY(-50%);font-size:2rem;color:#fff;padding:0;background:#ff6b6b;border:0;border-radius:8px;box-shadow:none;cursor:pointer;width:40px;height:40px;transition:opacity 1s,left .5s,right .5s;opacity:0;overflow:hidden}@media(max-width:640px){.carousel button[data-v-4a00a3bb]{font-size:1.5rem;width:30px;height:30px}}.carousel button.no-next[data-v-4a00a3bb],.carousel button.no-prev[data-v-4a00a3bb]{cursor:auto}.carousel button.no-next[data-v-4a00a3bb]:after,.carousel button.no-prev[data-v-4a00a3bb]:after{content:"";display:block;position:absolute;top:0;right:0;bottom:0;left:0;background-color:hsla(0,0%,100%,.3)}.carousel button.prev[data-v-4a00a3bb]{left:-10%}.carousel button.next[data-v-4a00a3bb]{right:-10%}.carousel .item[data-v-4a00a3bb]{position:absolute;width:100%;top:0;left:0}.carousel .item img[data-v-4a00a3bb]{width:100%}.carousel ul[data-v-4a00a3bb]{margin:0;padding:0;display:flex}.carousel li[data-v-4a00a3bb]{list-style:none;flex-basis:20%;margin:0;padding:0 12px 0 0;cursor:pointer;opacity:.4}.carousel li.active[data-v-4a00a3bb]{opacity:1}.carousel li img[data-v-4a00a3bb]{width:100%}.left-in-enter[data-v-4a00a3bb]{transform:translateX(100%)}.left-in-enter-active[data-v-4a00a3bb]{transition:transform .5s}.left-in-enter-to[data-v-4a00a3bb],.left-in-leave[data-v-4a00a3bb]{transform:translateX(0)}.left-in-leave-active[data-v-4a00a3bb]{transition:transform .5s}.left-in-leave-to[data-v-4a00a3bb],.right-in-enter[data-v-4a00a3bb]{transform:translateX(-100%)}.right-in-enter-active[data-v-4a00a3bb]{transition:transform .5s}.right-in-enter-to[data-v-4a00a3bb],.right-in-leave[data-v-4a00a3bb]{transform:translateX(0)}.right-in-leave-active[data-v-4a00a3bb]{transition:transform .5s}.right-in-leave-to[data-v-4a00a3bb]{transform:translateX(100%)}',""]),t.exports=e},292:function(t,o,r){var content=r(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("77fd3778",content,!0,{sourceMap:!1})},308:function(t,o,r){"use strict";r(292)},309:function(t,o,r){var e=r(29)(!1);e.push([t.i,'.container[data-v-21a80529]{width:100%;margin:0 auto;padding:0 40px;max-width:1280px;box-sizing:border-box}@media(max-width:1024px){.container[data-v-21a80529]{padding:0 8%}}@media(max-width:640px){.container[data-v-21a80529]{padding:0 5%}}.product-details[data-v-21a80529]{width:100%;display:flex;border-bottom:1px solid #ddd;padding-bottom:12px;margin-bottom:24px}@media(max-width:1024px){.product-details[data-v-21a80529]{flex-wrap:wrap}}.product-details .images[data-v-21a80529]{flex-basis:100%}@media(max-width:1024px){.product-details .images[data-v-21a80529]{margin-bottom:24px}}.product-details .text[data-v-21a80529]{flex-basis:100%;padding-left:24px;position:relative}@media(max-width:1024px){.product-details .text[data-v-21a80529]{padding-left:0}}.product-details .tips[data-v-21a80529]{background-color:#34d399;color:#fff;padding:4px 8px;border-radius:4px;box-shadow:0 0 5px 0 rgba(0,0,0,.2);position:absolute;top:0;right:0;font-weight:600}.product-details h1[data-v-21a80529]{font-size:2.8rem;margin:0 0 8px}.product-details .price[data-v-21a80529]{font-size:2rem;margin:0 0 8px;color:#ff6b6b}.product-details .price[data-v-21a80529]:before{content:"$";display:inline-block;padding-right:4px}.product-details .intro[data-v-21a80529]{font-size:1.8rem;font-weight:300;line-height:1.5;margin:0 0 16px}.product-details .control[data-v-21a80529]{margin-bottom:16px;display:flex}.product-details .control .number[data-v-21a80529]{width:70px;position:relative;margin-right:12px}.product-details .control .number input[data-v-21a80529]{border:0;width:100%;padding:8px 0 8px 4px;font-size:2rem;text-align:center;box-sizing:border-box;background-color:#ddd;outline:none}.product-details .control .number button[data-v-21a80529]{position:absolute;right:0;background-color:#ddd;color:#ff6b6b;border:0;height:50%;cursor:pointer}.product-details .control .number button.up[data-v-21a80529]{top:0}.product-details .control .number button.down[data-v-21a80529]{bottom:0}.product-details .control .add-to-cart[data-v-21a80529]{border:0;border-radius:4px;background-color:#ff6b6b;color:#fff;font-weight:900;padding:0 8px}.product-details .note[data-v-21a80529]{display:flex;margin-bottom:16px}@media(max-width:480px){.product-details .note[data-v-21a80529]{flex-wrap:wrap}}.product-details .note svg[data-v-21a80529]{color:#ff6b6b;margin-right:8px;font-size:3rem}.product-details .note span[data-v-21a80529]{font-size:1.6rem;color:#555}.product-details .note .item[data-v-21a80529]{margin-right:12px;display:inline-flex;align-items:center}@media(max-width:480px){.product-details .note .item[data-v-21a80529]{flex-basis:100%;margin-right:0;margin-bottom:12px}}.product-details .note .item[data-v-21a80529]:last-child{margin-right:0;margin-bottom:0}.product-details .socail p[data-v-21a80529]{font-size:1.4rem;margin:0 0 4px;font-size:1rem;color:#888}.product-details .socail .box[data-v-21a80529]{display:flex}.product-details .socail .box div[data-v-21a80529]{width:30px;height:30px;display:flex;justify-content:center;align-items:center;color:#fff;background-color:#ff6b6b;margin-right:8px;border-radius:4px;box-shadow:0 0 5px 0 rgba(0,0,0,.1);font-size:1.6rem}.product-details .socail .box .fb[data-v-21a80529]{background-color:#1877f2}.product-details .socail .box .twitter[data-v-21a80529]{background-color:#1da1f2}.product-details .socail .box .whatsapp[data-v-21a80529]{background-color:#25d366}',""]),t.exports=e},332:function(t,o,r){"use strict";r.r(o);var e={name:"TheProductDetails",components:{CarouselThumbnail:r(283).default},data:function(){return{carousel:[{id:1,src:"https://picsum.photos/568/400?random=901"},{id:2,src:"https://picsum.photos/568/400?random=902"},{id:3,src:"https://picsum.photos/568/400?random=903"}],nowNumber:0}},watch:{nowNumber:function(t){t<0&&(this.nowNumber=0)}},methods:{changeNumber:function(t){this.nowNumber=this.nowNumber+t}}},n=(r(308),r(9)),component=Object(n.a)(e,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"container"},[r("div",{staticClass:"product-details"},[r("div",{staticClass:"images"},[r("CarouselThumbnail",{attrs:{carousel:t.carousel}})],1),t._v(" "),r("div",{staticClass:"text"},[r("div",{staticClass:"tips"},[t._v("IN STOCK")]),t._v(" "),r("h1",[t._v("Chocolate")]),t._v(" "),r("h2",{staticClass:"price"},[t._v("30.00")]),t._v(" "),r("p",{staticClass:"intro"},[t._v("\n                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, quisquam. Eos quasi mollitia, ipsa\n                illo fugit sed natus corporis exercitationem facere a. Perspiciatis, soluta veritatis. Voluptatum\n                odit repudiandae porro illo?\n            ")]),t._v(" "),r("div",{staticClass:"control"},[r("div",{staticClass:"number"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.nowNumber,expression:"nowNumber"}],attrs:{type:"number",placeholder:"0"},domProps:{value:t.nowNumber},on:{input:function(o){o.target.composing||(t.nowNumber=o.target.value)}}}),t._v(" "),r("button",{staticClass:"up",attrs:{type:"button"},on:{click:function(o){return t.changeNumber(1)}}},[r("fa",{attrs:{icon:["fas","angle-up"]}})],1),t._v(" "),r("button",{staticClass:"down",attrs:{type:"button"},on:{click:function(o){return t.changeNumber(-1)}}},[r("fa",{attrs:{icon:["fas","angle-down"]}})],1)]),t._v(" "),r("button",{staticClass:"add-to-cart",attrs:{type:"button"}},[r("fa",{attrs:{icon:["fas","shopping-cart"]}}),t._v(" "),r("span",[t._v("ADD TO CART")])],1)]),t._v(" "),r("div",{staticClass:"note"},[r("div",{staticClass:"item"},[r("fa",{attrs:{icon:["fas","truck"]}}),t._v(" "),r("span",[t._v("Shipping all over the country")])],1),t._v(" "),r("div",{staticClass:"item"},[r("fa",{attrs:{icon:["fas","shield-alt"]}}),t._v(" "),r("span",[t._v("Warranty")])],1)]),t._v(" "),r("div",{staticClass:"socail"},[r("p",[t._v("Share this product with your friends!")]),t._v(" "),r("div",{staticClass:"box"},[r("div",{staticClass:"fb"},[r("a",{attrs:{href:"javascript:;"}},[r("fa",{attrs:{icon:["fab","facebook-f"]}})],1)]),t._v(" "),r("div",{staticClass:"twitter"},[r("a",{attrs:{href:"javascript:;"}},[r("fa",{attrs:{icon:["fab","twitter"]}})],1)]),t._v(" "),r("div",{staticClass:"whatsapp"},[r("a",{attrs:{href:"javascript:;"}},[r("fa",{attrs:{icon:["fab","whatsapp"]}})],1)]),t._v(" "),r("div",{staticClass:"link"},[r("a",{attrs:{href:"javascript:;"}},[r("fa",{attrs:{icon:["fas","link"]}})],1)])])])])])])}),[],!1,null,"21a80529",null);o.default=component.exports;installComponents(component,{CarouselThumbnail:r(283).default})}}]);