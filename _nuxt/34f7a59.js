(window.webpackJsonp=window.webpackJsonp||[]).push([[18,4,5,9,15,16],{275:function(t,e,o){var content=o(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("99682162",content,!0,{sourceMap:!1})},276:function(t,e,o){"use strict";o.r(e);o(55);var r={name:"CarouselSlide",props:{carousel:{type:Array,required:!0},page:{type:String,required:!0}},data:function(){return{slideAry:[],isDelay:!1}},mounted:function(){for(var t=this,i=1;i<2*this.carousel.length;i++){var e={};e.id=i,e.ref=i%this.carousel.length,this.slideAry.push(e)}setInterval((function(){t.changeCarousel(1)}),3e3)},methods:{changeCarousel:function(t){var e=this;if(!this.isDelay){if(t>0){var o=this.slideAry.shift();this.slideAry.push(o)}else{var r=this.slideAry.pop();this.slideAry.unshift(r)}this.isDelay=!0,setTimeout((function(){e.isDelay=!1}),500)}}}},d=(o(277),o(9)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"carousel"},[o("div",{staticClass:"view"},["index"===t.page?o("transition-group",{staticClass:"index",attrs:{name:"slide",tag:"ul"}},t._l(t.slideAry,(function(e){return o("li",{key:e.id},[o("div",{staticClass:"box"},[o("img",{attrs:{src:t.carousel[e.ref].src}}),t._v(" "),o("div",{staticClass:"txt"},[o("div",{staticClass:"button"},[t._v("\n                            "+t._s(t.carousel[e.ref].text)+"\n                        ")])])])])})),0):t._e(),t._v(" "),"detail"===t.page?o("transition-group",{staticClass:"detail",attrs:{name:"slide",tag:"ul"}},t._l(t.slideAry,(function(e){return o("li",{key:e.id},[o("div",{staticClass:"box"},[o("div",{staticClass:"heart"},[o("fa",{attrs:{icon:["far","heart"]}})],1),t._v(" "),o("div",{staticClass:"pic"},[o("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.carousel[e.ref].title))]),t._v(" "),o("img",{attrs:{src:t.carousel[e.ref].src,alt:""}})]),t._v(" "),o("div",{staticClass:"txt"},[o("h3",[t._v(t._s(t.carousel[e.ref].title))]),t._v(" "),o("p",{staticClass:"price"},[t._v(t._s(t.carousel[e.ref].price))])]),t._v(" "),o("button",{attrs:{type:"button"}},[o("fa",{attrs:{icon:["fas","shopping-cart"]}}),t._v(" "),o("span",[t._v("ADD TO CART")])],1)])])})),0):t._e()],1),t._v(" "),o("button",{staticClass:"prev",on:{click:function(e){return t.changeCarousel(-1)}}},[o("fa",{attrs:{icon:["fas","angle-left"]}})],1),t._v(" "),o("button",{staticClass:"next",on:{click:function(e){return t.changeCarousel(1)}}},[o("fa",{attrs:{icon:["fas","angle-right"]}})],1)])}),[],!1,null,"028d6cd6",null);e.default=component.exports},277:function(t,e,o){"use strict";o(275)},278:function(t,e,o){var r=o(29)(!1);r.push([t.i,'.container[data-v-028d6cd6]{width:100%;margin:0 auto;padding:0 40px;max-width:1280px;box-sizing:border-box}@media(max-width:1024px){.container[data-v-028d6cd6]{padding:0 8%}}@media(max-width:640px){.container[data-v-028d6cd6]{padding:0 5%}}.carousel[data-v-028d6cd6]{flex-basis:100%;position:relative;overflow:hidden}.carousel:hover button[data-v-028d6cd6]{opacity:1}.carousel:hover button.prev[data-v-028d6cd6]{left:24px}.carousel:hover button.next[data-v-028d6cd6]{right:24px}.carousel .view[data-v-028d6cd6]{overflow:hidden}.carousel ul[data-v-028d6cd6]{padding:0;margin:0;display:flex;align-items:center;transform:translateX(-100%)}@media(max-width:400px){.carousel ul[data-v-028d6cd6]{transform:translateX(-300%)}}.carousel li[data-v-028d6cd6]{flex-basis:25%;padding:0 12px;flex-shrink:0;box-sizing:border-box;overflow:hidden}@media(max-width:1024px){.carousel li[data-v-028d6cd6]{flex-basis:33.33%;padding:0 12px}}@media(max-width:640px){.carousel li[data-v-028d6cd6]{flex-basis:50%;padding:0 12px}}@media(max-width:400px){.carousel li[data-v-028d6cd6]{flex-basis:100%;padding:0 12px}}.carousel li[data-v-028d6cd6]:hover{border-color:#ff6b6b}.carousel li[data-v-028d6cd6]:first-child,.carousel li[data-v-028d6cd6]:last-child{opacity:0}.carousel>button[data-v-028d6cd6]{position:absolute;top:50%;transform:translateY(-50%);font-size:1.6rem;color:#fff;padding:0;background:#ff6b6b;border:0;border-radius:8px;box-shadow:none;cursor:pointer;width:40px;height:40px;transition:opacity 1s,left .5s,right .5s;opacity:0}@media(max-width:640px){.carousel>button[data-v-028d6cd6]{font-size:1.5rem;width:30px;height:30px}}.carousel>button.prev[data-v-028d6cd6]{left:-10%}.carousel>button.next[data-v-028d6cd6]{right:-10%}.carousel .slide-move[data-v-028d6cd6]{transition:transform .8s}.index .box[data-v-028d6cd6]{border:1px solid #e1e1e1;border-radius:4px}.index img[data-v-028d6cd6]{width:100%}.index .txt[data-v-028d6cd6]{padding:12px}.index .txt .button[data-v-028d6cd6]{background-color:#ff6b6b;color:#fff;font-size:1.6rem;font-weight:600;text-align:center;border:0;border-radius:8px;padding:12px 8px;width:100%;box-sizing:border-box;cursor:pointer}.detail .box[data-v-028d6cd6]{border:1px solid #d9d9d9;border-radius:4px;padding-bottom:12px;position:relative;overflow:hidden}.detail .box[data-v-028d6cd6]:hover{border-color:#ff6b6b}.detail .heart[data-v-028d6cd6]{position:absolute;top:8px;right:4px;border-radius:50%;background-color:#fff;box-shadow:0 0 8px 0 rgba(0,0,0,.3);z-index:3;width:30px;height:30px;color:#ff6b6b;font-size:1.8rem;display:flex;justify-content:center;align-items:center;cursor:pointer}.detail .heart svg[data-v-028d6cd6]{transition:.5s}.detail .heart[data-v-028d6cd6]:hover{background-color:#ff6b6b;color:#fff}.detail .heart:hover svg[data-v-028d6cd6]{transform:rotate(1turn)}.detail .txt[data-v-028d6cd6]{padding:0 5%}.detail .pic[data-v-028d6cd6]{margin-bottom:8px;position:relative}.detail .pic a[data-v-028d6cd6]{position:absolute;top:0;left:0;right:0;bottom:0;font-size:0}.detail .pic img[data-v-028d6cd6]{width:100%}.detail h3[data-v-028d6cd6]{margin:0 0 8px;font-size:1.6rem;font-weight:300}.detail p[data-v-028d6cd6]{margin:0 0 8px;font-size:1.5rem}.detail p[data-v-028d6cd6]:before{content:"$";display:inline-block}.detail button[data-v-028d6cd6]{display:block;border:0;border-radius:4px;background-color:#ff6b6b;color:#fff;text-align:center;width:90%;padding:12px 0;margin:0 auto;cursor:pointer}.detail button span[data-v-028d6cd6]{font-size:1.4rem;font-weight:600;padding-left:4px}',""]),t.exports=r},280:function(t,e,o){var content=o(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("ba56debe",content,!0,{sourceMap:!1})},283:function(t,e,o){"use strict";o.r(e);var r={name:"CarouselThumbnail",props:{carousel:{type:Array,required:!0}},data:function(){return{show:0,transitionName:"left-in"}},watch:{show:function(t){var e=this.carousel.length-1;t<0&&(this.show=0),t>e&&(this.show=e)}},methods:{setShow:function(t){this.setTransition(t),this.show=t},setTransition:function(t){t>this.show?this.transitionName="left-in":this.transitionName="right-in"}}},d=(o(290),o(9)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"carousel"},[o("div",{staticClass:"heart"},[o("fa",{attrs:{icon:["far","heart"]}})],1),t._v(" "),o("transition-group",{attrs:{tag:"div",name:t.transitionName}},t._l(t.carousel,(function(e,r){return o("div",{directives:[{name:"show",rawName:"v-show",value:r===t.show,expression:"index === show"}],key:e.id,staticClass:"item"},[o("img",{attrs:{src:e.src,alt:""}})])})),0),t._v(" "),o("button",{staticClass:"prev",class:{"no-prev":t.show<=0},on:{click:function(e){return t.setShow(t.show-1)}}},[o("fa",{attrs:{icon:["fas","angle-left"]}})],1),t._v(" "),o("button",{staticClass:"next",class:{"no-next":t.show>=t.carousel.length-1},on:{click:function(e){return t.setShow(t.show+1)}}},[o("fa",{attrs:{icon:["fas","angle-right"]}})],1),t._v(" "),o("ul",t._l(t.carousel,(function(e,r){return o("li",{key:e.id,class:{active:t.show===r},on:{click:function(e){return t.setShow(r)}}},[o("img",{attrs:{src:e.src,alt:""}})])})),0)],1)}),[],!1,null,"4a00a3bb",null);e.default=component.exports},290:function(t,e,o){"use strict";o(280)},291:function(t,e,o){var r=o(29)(!1);r.push([t.i,'.container[data-v-4a00a3bb]{width:100%;margin:0 auto;padding:0 40px;max-width:1280px;box-sizing:border-box}@media(max-width:1024px){.container[data-v-4a00a3bb]{padding:0 8%}}@media(max-width:640px){.container[data-v-4a00a3bb]{padding:0 5%}}.carousel[data-v-4a00a3bb]{width:100%;padding-top:74%;position:relative;overflow:hidden}.carousel:hover button[data-v-4a00a3bb]{opacity:1}.carousel:hover button.prev[data-v-4a00a3bb]{left:10px}.carousel:hover button.next[data-v-4a00a3bb]{right:10px}.carousel .heart[data-v-4a00a3bb]{position:absolute;top:8px;right:8px;border-radius:50%;background-color:#fff;box-shadow:0 0 8px 0 rgba(0,0,0,.3);z-index:3;width:30px;height:30px;color:#ff6b6b;font-size:1.8rem;display:flex;justify-content:center;align-items:center;cursor:pointer}.carousel .heart svg[data-v-4a00a3bb]{transition:.5s}.carousel .heart[data-v-4a00a3bb]:hover{background-color:#ff6b6b;color:#fff}.carousel .heart:hover svg[data-v-4a00a3bb]{transform:rotate(1turn)}.carousel button[data-v-4a00a3bb]{position:absolute;top:50%;transform:translateY(-50%);font-size:2rem;color:#fff;padding:0;background:#ff6b6b;border:0;border-radius:8px;box-shadow:none;cursor:pointer;width:40px;height:40px;transition:opacity 1s,left .5s,right .5s;opacity:0;overflow:hidden}@media(max-width:640px){.carousel button[data-v-4a00a3bb]{font-size:1.5rem;width:30px;height:30px}}.carousel button.no-next[data-v-4a00a3bb],.carousel button.no-prev[data-v-4a00a3bb]{cursor:auto}.carousel button.no-next[data-v-4a00a3bb]:after,.carousel button.no-prev[data-v-4a00a3bb]:after{content:"";display:block;position:absolute;top:0;right:0;bottom:0;left:0;background-color:hsla(0,0%,100%,.3)}.carousel button.prev[data-v-4a00a3bb]{left:-10%}.carousel button.next[data-v-4a00a3bb]{right:-10%}.carousel .item[data-v-4a00a3bb]{position:absolute;width:100%;top:0;left:0}.carousel .item img[data-v-4a00a3bb]{width:100%}.carousel ul[data-v-4a00a3bb]{margin:0;padding:0;display:flex}.carousel li[data-v-4a00a3bb]{list-style:none;flex-basis:20%;margin:0;padding:0 12px 0 0;cursor:pointer;opacity:.4}.carousel li.active[data-v-4a00a3bb]{opacity:1}.carousel li img[data-v-4a00a3bb]{width:100%}.left-in-enter[data-v-4a00a3bb]{transform:translateX(100%)}.left-in-enter-active[data-v-4a00a3bb]{transition:transform .5s}.left-in-enter-to[data-v-4a00a3bb],.left-in-leave[data-v-4a00a3bb]{transform:translateX(0)}.left-in-leave-active[data-v-4a00a3bb]{transition:transform .5s}.left-in-leave-to[data-v-4a00a3bb],.right-in-enter[data-v-4a00a3bb]{transform:translateX(-100%)}.right-in-enter-active[data-v-4a00a3bb]{transition:transform .5s}.right-in-enter-to[data-v-4a00a3bb],.right-in-leave[data-v-4a00a3bb]{transform:translateX(0)}.right-in-leave-active[data-v-4a00a3bb]{transition:transform .5s}.right-in-leave-to[data-v-4a00a3bb]{transform:translateX(100%)}',""]),t.exports=r},292:function(t,e,o){var content=o(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("77fd3778",content,!0,{sourceMap:!1})},293:function(t,e,o){var content=o(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("44717f22",content,!0,{sourceMap:!1})},294:function(t,e,o){var content=o(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("26c19c63",content,!0,{sourceMap:!1})},308:function(t,e,o){"use strict";o(292)},309:function(t,e,o){var r=o(29)(!1);r.push([t.i,'.container[data-v-21a80529]{width:100%;margin:0 auto;padding:0 40px;max-width:1280px;box-sizing:border-box}@media(max-width:1024px){.container[data-v-21a80529]{padding:0 8%}}@media(max-width:640px){.container[data-v-21a80529]{padding:0 5%}}.product-details[data-v-21a80529]{width:100%;display:flex;border-bottom:1px solid #ddd;padding-bottom:12px;margin-bottom:24px}@media(max-width:1024px){.product-details[data-v-21a80529]{flex-wrap:wrap}}.product-details .images[data-v-21a80529]{flex-basis:100%}@media(max-width:1024px){.product-details .images[data-v-21a80529]{margin-bottom:24px}}.product-details .text[data-v-21a80529]{flex-basis:100%;padding-left:24px;position:relative}@media(max-width:1024px){.product-details .text[data-v-21a80529]{padding-left:0}}.product-details .tips[data-v-21a80529]{background-color:#34d399;color:#fff;padding:4px 8px;border-radius:4px;box-shadow:0 0 5px 0 rgba(0,0,0,.2);position:absolute;top:0;right:0;font-weight:600}.product-details h1[data-v-21a80529]{font-size:2.8rem;margin:0 0 8px}.product-details .price[data-v-21a80529]{font-size:2rem;margin:0 0 8px;color:#ff6b6b}.product-details .price[data-v-21a80529]:before{content:"$";display:inline-block;padding-right:4px}.product-details .intro[data-v-21a80529]{font-size:1.8rem;font-weight:300;line-height:1.5;margin:0 0 16px}.product-details .control[data-v-21a80529]{margin-bottom:16px;display:flex}.product-details .control .number[data-v-21a80529]{width:70px;position:relative;margin-right:12px}.product-details .control .number input[data-v-21a80529]{border:0;width:100%;padding:8px 0 8px 4px;font-size:2rem;text-align:center;box-sizing:border-box;background-color:#ddd;outline:none}.product-details .control .number button[data-v-21a80529]{position:absolute;right:0;background-color:#ddd;color:#ff6b6b;border:0;height:50%;cursor:pointer}.product-details .control .number button.up[data-v-21a80529]{top:0}.product-details .control .number button.down[data-v-21a80529]{bottom:0}.product-details .control .add-to-cart[data-v-21a80529]{border:0;border-radius:4px;background-color:#ff6b6b;color:#fff;font-weight:900;padding:0 8px}.product-details .note[data-v-21a80529]{display:flex;margin-bottom:16px}@media(max-width:480px){.product-details .note[data-v-21a80529]{flex-wrap:wrap}}.product-details .note svg[data-v-21a80529]{color:#ff6b6b;margin-right:8px;font-size:3rem}.product-details .note span[data-v-21a80529]{font-size:1.6rem;color:#555}.product-details .note .item[data-v-21a80529]{margin-right:12px;display:inline-flex;align-items:center}@media(max-width:480px){.product-details .note .item[data-v-21a80529]{flex-basis:100%;margin-right:0;margin-bottom:12px}}.product-details .note .item[data-v-21a80529]:last-child{margin-right:0;margin-bottom:0}.product-details .socail p[data-v-21a80529]{font-size:1.4rem;margin:0 0 4px;font-size:1rem;color:#888}.product-details .socail .box[data-v-21a80529]{display:flex}.product-details .socail .box div[data-v-21a80529]{width:30px;height:30px;display:flex;justify-content:center;align-items:center;color:#fff;background-color:#ff6b6b;margin-right:8px;border-radius:4px;box-shadow:0 0 5px 0 rgba(0,0,0,.1);font-size:1.6rem}.product-details .socail .box .fb[data-v-21a80529]{background-color:#1877f2}.product-details .socail .box .twitter[data-v-21a80529]{background-color:#1da1f2}.product-details .socail .box .whatsapp[data-v-21a80529]{background-color:#25d366}',""]),t.exports=r},310:function(t,e,o){"use strict";o(293)},311:function(t,e,o){var r=o(29)(!1);r.push([t.i,".description[data-v-15a5ac8e]{width:100%;padding-bottom:12px;margin-bottom:24px;border-bottom:1px solid #ddd}.description h2[data-v-15a5ac8e]{font-size:2.5rem;margin:0 0 12px}.description p[data-v-15a5ac8e]{margin:0 0 8px;line-height:1.5;font-size:1.6rem;font-weight:300}",""]),t.exports=r},312:function(t,e,o){"use strict";o(294)},313:function(t,e,o){var r=o(29)(!1);r.push([t.i,'.container[data-v-4743d388]{width:100%;margin:0 auto;padding:0 40px;max-width:1280px;box-sizing:border-box}@media(max-width:1024px){.container[data-v-4743d388]{padding:0 8%}}@media(max-width:640px){.container[data-v-4743d388]{padding:0 5%}}.related[data-v-4743d388]{width:100%;margin-bottom:24px}.related h2[data-v-4743d388]{margin:0 0 24px;font-size:2.5rem;text-align:center}.related h2[data-v-4743d388]:after{content:"";display:block;width:100px;height:4px;background-color:#ff6b6b;margin:8px auto 0}',""]),t.exports=r},332:function(t,e,o){"use strict";o.r(e);var r={name:"TheProductDetails",components:{CarouselThumbnail:o(283).default},data:function(){return{carousel:[{id:1,src:"https://picsum.photos/568/400?random=901"},{id:2,src:"https://picsum.photos/568/400?random=902"},{id:3,src:"https://picsum.photos/568/400?random=903"}],nowNumber:0}},watch:{nowNumber:function(t){t<0&&(this.nowNumber=0)}},methods:{changeNumber:function(t){this.nowNumber=this.nowNumber+t}}},d=(o(308),o(9)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"product-details"},[o("div",{staticClass:"images"},[o("CarouselThumbnail",{attrs:{carousel:t.carousel}})],1),t._v(" "),o("div",{staticClass:"text"},[o("div",{staticClass:"tips"},[t._v("IN STOCK")]),t._v(" "),o("h1",[t._v("Chocolate")]),t._v(" "),o("h2",{staticClass:"price"},[t._v("30.00")]),t._v(" "),o("p",{staticClass:"intro"},[t._v("\n                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, quisquam. Eos quasi mollitia, ipsa\n                illo fugit sed natus corporis exercitationem facere a. Perspiciatis, soluta veritatis. Voluptatum\n                odit repudiandae porro illo?\n            ")]),t._v(" "),o("div",{staticClass:"control"},[o("div",{staticClass:"number"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.nowNumber,expression:"nowNumber"}],attrs:{type:"number",placeholder:"0"},domProps:{value:t.nowNumber},on:{input:function(e){e.target.composing||(t.nowNumber=e.target.value)}}}),t._v(" "),o("button",{staticClass:"up",attrs:{type:"button"},on:{click:function(e){return t.changeNumber(1)}}},[o("fa",{attrs:{icon:["fas","angle-up"]}})],1),t._v(" "),o("button",{staticClass:"down",attrs:{type:"button"},on:{click:function(e){return t.changeNumber(-1)}}},[o("fa",{attrs:{icon:["fas","angle-down"]}})],1)]),t._v(" "),o("button",{staticClass:"add-to-cart",attrs:{type:"button"}},[o("fa",{attrs:{icon:["fas","shopping-cart"]}}),t._v(" "),o("span",[t._v("ADD TO CART")])],1)]),t._v(" "),o("div",{staticClass:"note"},[o("div",{staticClass:"item"},[o("fa",{attrs:{icon:["fas","truck"]}}),t._v(" "),o("span",[t._v("Shipping all over the country")])],1),t._v(" "),o("div",{staticClass:"item"},[o("fa",{attrs:{icon:["fas","shield-alt"]}}),t._v(" "),o("span",[t._v("Warranty")])],1)]),t._v(" "),o("div",{staticClass:"socail"},[o("p",[t._v("Share this product with your friends!")]),t._v(" "),o("div",{staticClass:"box"},[o("div",{staticClass:"fb"},[o("a",{attrs:{href:"javascript:;"}},[o("fa",{attrs:{icon:["fab","facebook-f"]}})],1)]),t._v(" "),o("div",{staticClass:"twitter"},[o("a",{attrs:{href:"javascript:;"}},[o("fa",{attrs:{icon:["fab","twitter"]}})],1)]),t._v(" "),o("div",{staticClass:"whatsapp"},[o("a",{attrs:{href:"javascript:;"}},[o("fa",{attrs:{icon:["fab","whatsapp"]}})],1)]),t._v(" "),o("div",{staticClass:"link"},[o("a",{attrs:{href:"javascript:;"}},[o("fa",{attrs:{icon:["fas","link"]}})],1)])])])])])])}),[],!1,null,"21a80529",null);e.default=component.exports;installComponents(component,{CarouselThumbnail:o(283).default})},333:function(t,e,o){"use strict";o.r(e);var r={name:"TheDescription"},d=(o(310),o(9)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"description"},[o("h2",[t._v("Description")]),t._v(" "),o("div",{staticClass:"content"},[o("p",[t._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quasi blanditiis perferendis\n                laboriosam dolorem, aut mollitia alias. Libero debitis iste pariatur recusandae id, omnis dolore\n                explicabo inventore? Laboriosam, ullam voluptatem. Lorem ipsum dolor sit amet consectetur\n                adipisicing elit. Nihil, voluptatibus corporis aperiam vel inventore, dignissimos consectetur nulla\n                repellendus tenetur culpa ratione ipsam hic a illum. Mollitia libero expedita vero voluptatum!\n            ")])])])])}],!1,null,"15a5ac8e",null);e.default=component.exports},334:function(t,e,o){"use strict";o.r(e);var r={name:"TheRelated",components:{CarouselSlide:o(276).default},data:function(){return{carousel:[{src:"https://picsum.photos/260/260?random=501",title:"Chocolate",price:"10.00"},{src:"https://picsum.photos/260/260?random=502",title:"American Cream",price:"10.00"},{src:"https://picsum.photos/260/260?random=503",title:"Dulce de Leche",price:"10.00"},{src:"https://picsum.photos/260/260?random=504",title:"Swiss Cream",price:"10.00"},{src:"https://picsum.photos/260/260?random=505",title:"Raspberry",price:"10.00"},{src:"https://picsum.photos/260/260?random=506",title:"Dulce de Leche Brownie",price:"10.00"},{src:"https://picsum.photos/260/260?random=507",title:"Chocolate with Raisins",price:"10.00"},{src:"https://picsum.photos/260/260?random=508",title:"Lemon",price:"10.00"}]}}},d=(o(312),o(9)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"related"},[o("h2",[t._v("Related Products")]),t._v(" "),o("CarouselSlide",{attrs:{carousel:t.carousel,page:"detail"}})],1)])}),[],!1,null,"4743d388",null);e.default=component.exports;installComponents(component,{CarouselSlide:o(276).default})},344:function(t,e,o){"use strict";o.r(e);var r=o(332),d=o(333),n=o(334),l={components:{TheProductDetails:r.default,TheDescription:d.default,TheRelated:n.default},head:{title:"details",meta:[{hid:"title",name:"title",content:"details"},{hid:"description",name:"description",content:"This is details page"}]},mounted:function(){this.$store.commit("toggleNav",!1)}},c=o(9),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"details"}},[o("main",[o("TheProductDetails"),t._v(" "),o("TheDescription"),t._v(" "),o("TheRelated")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheProductDetails:o(332).default,TheDescription:o(333).default,TheRelated:o(334).default})}}]);