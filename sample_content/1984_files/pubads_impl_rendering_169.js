window.googletag&&typeof googletag._=='function'&&googletag._(function(_){var tw=function(a,b){return _.aa[a]=b},vw=function(a){var b=a._html_,c=b;if(_.v(b)){for(var d=/vu\(\s*["']([^)]+?)["']\s*\);?/g,e;null!==(e=d.exec(b));){var f=e[1];!f||-1==f.indexOf("/adview")&&-1==f.indexOf("/pcs/view")||(c=c.replace(e[0],""),uw(f.replace("&amp;","&")))}a._html_=c}},ww={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},xw={"'":"\\'"},yw=function(a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0),f=c+1,g;if(!(g=ww[d])){if(!(31<e&&127>e))if(d in xw)d=xw[d];else if(d in ww)d=xw[d]=ww[d];else{g=d.charCodeAt(0);if(31<g&&127>g)e=d;else{if(256>g){if(e="\\x",16>g||256<g)e+="0"}else e="\\u",4096>g&&(e+="0");e+=g.toString(16).toUpperCase()}d=xw[d]=e}g=d}b[f]=g}b.push('"');return b.join("")},zw=function(a,b){var c=a.ampInaboxIframes=a.ampInaboxIframes||[];b&&c.push(b);a.ampInaboxPendingMessages=a.ampInaboxPendingMessages||[];c.google_amp_listener_added||(c.google_amp_listener_added=!0,_.fe(a,"message",function(b){var c;a.ampInaboxPendingMessages&&(c=/^amp-(\d{15,20})?/.exec(b.data))&&(a.ampInaboxPendingMessages.push(b),a.document.querySelector('script[src$="amp4ads-host-v0.js"]')||_.pd(a.document,"https://cdn.ampproject.org/"+(c[1]?"rtv/"+c[1]+"/":"")+"amp4ads-host-v0.js"))}))},uw=function(a,b){return _.oe(window,a,b)},Aw=function(a){this.j=a;this.l=_.Gb()},Bw=function(a){for(var b={},c=0;c<a.length;++c)_.A(a[c],function(a,c){b[c]=a});return b},Cw=function(){var a=_.Jb;return null!=a&&-1!=a.indexOf("MSIE ")&&-1==a.indexOf("IEMobile")},Dw=function(a){if(!a||0==_.hn()||"hidden"!=a.style.visibility||"none"!=a.style.display)return!1;a.parentNode.removeChild(a);return!0},Ew=function(a,b,c,d){_.xp(a,"ad_fetch_period",b,d);_.Kf(_.Ym.A(),(4).toString(),b);_.Hp(a,c,"ad."+b)},Fw=function(a){return a.T?!!a.T._is_afc_:null},Gw=function(a){return a.T?!!a.T._afc_expandable_:!0},Hw=function(a,b){var c=uw(b,_.N(290,function(){a.j[b]=3;_.fb(window.google_image_requests,c)}))},Iw=function(a,b,c){a.Wa||(a.Wa=!0,a=function(){try{var a=b.document.createElement("iframe");a.id="ace-frame";a.src=c;a.style.visibility="hidden";a.style.display="none";b.document.body.appendChild(a)}catch(e){}},b.requestIdleCallback?b.requestIdleCallback(a):b.setTimeout(a,0))},Jw=function(a,b,c){b.T=c;b.fetchEnded();null!=c._host_page_libraries_&&_.y(c._host_page_libraries_,function(c){var d=a.oa;if(!_.cb(d.l,c))switch(c){case 1:var e=c+"_hostpage_library",f=_.pd(window.document,_.Zf[c]);f&&(f.id=e);d.l.push(c);e=new Aw(c);d.m.push(e);d=_.Rg();d.hostpageLibraryTokens||(d.hostpageLibraryTokens={});d.hostpageLibraryTokens[e.j]=e.l}d=a.oa;d.j[c]||(d.j[c]=[]);d.j[c].push(b)});null!=c._cookies_&&_.bt(a.Y,c);c._persistent_for_stream_&&(a.j.O[_.L(b)]=null);var d=c._a_exps_;if(d)for(var e=0,f=d.length;e<f;e++)_.Gj(d[e].toString(),!0);(_.al.is(_.rj.u)||_.bl.is(_.sj.u)||_.bl.is(_.sj.Kc))&&vw(c)},Kw=function(a,b,c){var d=void 0===d?window:d;if(a.l&&!_.w(b))return a=new _.M("sra_legacy_ad_response"),_.p(a),_.Nn(a),[];if(c.length){var e=c[0];Ew(a.Na,e.getCsiId(),e.U,e.j)}_.w(b)||(b=[b]);e=[];for(var f=0;f<c.length;++f){var g=c[f],h=b[f][g.getAdUnitPath()];h&&(Jw(a,g,h),e.push(g))}switch(_.xh(_.Dk)){case _.Ui.Gc:Iw(a,d,"https://www.googletagservices.com/cb/ace_frame.html");break;case _.Ui.Fc:Iw(a,d,"https://www.googletagservices.com/cb/ace_frame.html#cbu=https%3A%2F%2Fwww.googletagservices.com%2Ftag%2Fjs%2Fgpt.js")}return e},Lw=function(a){(a=(a=a.T)&&a._resources_)&&_.y(a,function(a){if(a){var b=a.url;a=a.as;if(b&&a){var d=_.vt.A();2!==d.j[b]&&3!==d.j[b]&&(d.j[b]=2,"image"==a?Hw(d,b):(0,_.Zr)()&&_.wt(d,b,"preload",a))}}})},Mw=function(a,b,c){a=a.Na;var d=b.getCsiId(),e=b.j,f=Gw(b);b=!!Fw(b);_.xp(a,"start_ad_render_period",d,e);_.wp(a,"exr",d,e,f?1:0);_.Kf(_.Ym.A(),(5).toString(),d);_.t.google_timing_params=_.t.google_timing_params||{};_.t.google_timing_params["qqid."+d]=c;_.Cp(a,"is_backfill_at_render",""+d+"_"+b,e);_.Cp(a,"qqid",""+d+"_"+c,e)},Nw=function(a,b){if(a.Yc){var c=b.T;c&&!c._empty_&&(c=c._html_)&&-1==c.indexOf("adpnt")&&(b=b.getEscapedQemQueryId(),c=new _.M("gpt_qse_missing",_.gn(),1),_.r(c,"qemQueryId",b),_.p(c,a.j),_.Nn(c))}},Ow=function(a){var b=new _.M("gpt_fluid_not_sf",_.gn(),_.D.A().get(23));_.r(b,"impl",a.V());_.p(b,a.j);_.Nn(b)},Pw=function(a,b,c){zw(a);_.t.setTimeout(_.N(214,function(){var d=_.aq(c,b);d?zw(a,d):(d=new _.M("amp_inabox_failed"),_.p(d),_.Nn(d))}),0)},Qw=function(a,b,c){var d={};d=(d[_.hi.dd]=1.5,d[_.hi.ed]=2,d[_.hi.fd]=2.5,d[_.hi.gd]=3,d)[_.xh(_.nk)];var e=b.pageYOffset;b=b.innerHeight;if(d&&_.m(e)&&_.m(b)){var f=e+b*d,g=function(a,b){a=(a=a.T)&&a._height_||0;return!!b&&b.y+a>=e&&b.y<f};_.nb(c,function(b,c){var d=_.Vs(a.j,b),e=_.Vs(a.j,c);b=g(b,d);return b!=g(c,e)?b?-1:1:b?d.y-e.y:0})}},Rw=function(a,b){_.xh(_.Lk)&&_.t.IntersectionObserver&&(a.$||(a.$=new _.t.IntersectionObserver(function(a){_.y(a,function(a){var b=_.lq(_.nq(),a.target.id);if(b.$=a.isIntersecting)b.ka=a.time})},{rootMargin:"0px"})),a.$.observe(b))},Sw=function(a,b,c){_.Jt(a,b,c,a.ja);b=_.Zp(c);b.slotContentChanged=a.ja;c.renderEnded(b)},Tw=function(a,b,c,d,e,f,g,h){var l=_.eq(d,c);if(null!=l){var n=_.Vj.is(_.Qh.u);if(!n)for(var q;q=l.firstChild;)l.removeChild(q);a.j.o||(l.style.display="inline-block");h=Bw([h,a.j.N,d.ga]);b=_.Gn(b,l,_.dq(d),_.Zt,f,e,g,h,!!Fw(d),Gw(d),n,a.oa.m);d.w=b;d.m=!1;_.Xt(a,_.aq(d,c),_.L(d))}},Uw=function(a,b,c,d,e){var f=_.dq(c),g=_.aq(c,b);if(null==g)if(a.Ja){var h=_.eq(c,b);g=_.Bu(a,b,c,h,d);delete a.F[f]}else return;_.v(d)?Ow(a):(g.width=String(d[0]),g.height=String(d[1]),a.Ja&&(h=_.eq(c,b),h.style.width="",h.style.height=""));_.Kn(g,e,!0);c.m=!1;_.Xt(a,g,_.L(c))},Vw=function(a,b,c){var d=c.T,e=c.getEscapedQemQueryId(),f=_.P(c,b);f&&f.setAttribute("data-google-query-id",e);Mw(a,c,e);a.Hb=_.Bf();c.renderStarted();if(null==d||d._empty_)Sw(a,b,c);else if(a.N)c.renderEnded(_.Zp(c));else{e=d._html_;if(!_.v(e)){_.yu(a,c);return}_.Gu(a,c);var g;"height"==d._fluid_?g="fluid":g=[d._width_,d._height_];Pw(_.t,b,c);a.C(d)?Tw(a,_.t,b,c,g,e,function(){_.Au(a,c);a.loaded(c)},{sandbox:d._use_sandbox_||!1}):Uw(a,b,c,g,e);_.Ss(c,_.Yp(c,d))}d=c.getSlotElementId();Dw(a.P[d])&&delete a.P[d];a.ga(b,c);Nw(a,c)},Ww=function(a,b,c,d){var e=c.getSlotElementId(),f=_.P(c,b);if(!_.Xf(f))return!1;var g=_.Mt(a,c);if(!g)return!1;var h=!!a.H[e];a.H[e]=function(){d&&(_.t.cancelIdleCallback?_.t.cancelIdleCallback(d):_.t.clearTimeout(d));Vw(a,b,c)};h||g.observe(f);return!0},Xw=function(a,b,c,d){var e=_.P(c,b),f=c.getSlotElementId(),g=function(){var h=_.Bf()-a.Hb,l=_.D.A().get(182);h>=l||!_.t.requestIdleCallback?(_.gu(a,e,f,c),Vw(a,b,c)):_.t.requestIdleCallback(g,{timeout:d})};return _.t.requestIdleCallback?_.t.requestIdleCallback(g,{timeout:d}):_.t.setTimeout(g,d)},Yw=function(a,b,c){var d=(d=c.T)&&d._timeout_render_;d=_.m(d)&&-1<d?d:null;var e=_.Lt(c),f=_.P(c,b);f&&Rw(a,f);if(null==e&&null==d||_.eu(a,_.t,(e||0)/100,c))return!1;f=null;null!=d&&(f=Xw(a,b,c,d));a=null!=e&&Ww(a,b,c,f);return null!=f||a},Zw=function(a,b,c){if(_.zk.is(_.ti.zc))return!1;if(!(_.Gk.is(_.Xi.Ra)||_.Ik.is(_.Zi.u)||_.Pk.is(_.gj.u)||_.Kk.is(_.aj.u)&&!(0,_.jh)())||!_.gg()||_.eu(a,_.t,0,c))return Yw(a,b,c);_.fu(a);if(!a.I)return!1;a.v[c.getSlotElementId()]=function(){Yw(a,b,c)||Vw(a,b,c)};return!0},$w=function(a,b){(a=_.P(a,b))&&a.parentNode&&""===a.innerHTML&&a.parentNode.removeChild(a)},ax=function(a,b,c,d,e,f,g,h){$w(d,c);var l=_.dq(d)+"__container__";l='<div id="'+_.Ab(l)+'"></div>';c.write(l);l=_.eq(d,c);null!=l&&(a.j.o?l.style.margin="auto":l.style.display="inline-block",h=Bw([h,a.j.N,d.ga]),b=_.Gn(b,l,_.dq(d),_.Zt,f,e,g,h,Fw(d)||!1,Gw(d)),d.w=b,_.Xt(a,_.aq(d,c),_.L(d)))},bx=function(a,b,c,d){b=b.getSlotElementId()+"_ad_container";var e='<div id="'+_.Ab(b)+'"';d&&"height"==d._fluid_?e+=' style="width:100%;">':a.j.o&&d?(e+=' style="width:'+d._width_,e+='px;margin:auto;">'):e+=">";d&&(e+=d._html_);c.write(e+"\n</div>\n");return b},cx=function(a,b,c){$w(b,c);var d=b.T;if(null!=d){var e=bx(a,b,c,d);d=_.Yp(b,d);b.renderEnded(d);(c=c.getElementById(e))&&_.Xt(a,c,_.L(b))}},dx=function(a,b,c,d,e,f,g){g=void 0===g?window.document:g;$w(b,g);var h=_.dq(b),l=[],n=0,q=0;_.w(e)?(n=e[0],q=e[1]):Ow(a);c=_.cn(c);l.push('<iframe id="',_.Ab(h),'" title="',_.Zt,'" name="',_.Ab(h),'" width="',n,'" height="',q,'" vspace="0" hspace="0" allowtransparency="true" ','scrolling="no"',' marginwidth="0" marginheight="0" frameborder="0" style=','"border:0px;left:0;position:absolute;top:0;"',' src="',c,'"');null!=d&&l.push(' onload="',d,'"');l.push("></iframe>");d=[];c=b.getSlotElementId()+"_ad_container";d.push('<div id="',_.Ab(c),'"');f&&d.push(' style="text-align:center" ');d.push(">");d.push('<ins style="position:relative;width:'+n+"px;height:"+q+'px;border:none;display:inline-table;vertical-align:bottom;">'+('<ins style="position:relative;width:'+n+"px;height:"+q+'px;border:none;display:block;">'+l.join("")+"</ins>")+"</ins>");d.push("</div>");g.write(d.join(""));(f=g.getElementById(h))&&_.Xt(a,f,_.L(b))},ex=function(a,b,c){$w(b,c||window.document);return bx(a,b,c||window.document)};_.cv.prototype.I=tw(5,function(a,b,c){var d=this,e=c.T,f=c.getEscapedQemQueryId(),g=_.P(c,b);g&&g.setAttribute("data-google-query-id",f);Mw(this,c,f);if(null==e||e._empty_)_.Jt(this,b,c,!1),c.renderEnded(_.Zp(c));else if(this.N)c.renderEnded(_.Zp(c));else if(this.C(e))if(f=function(){d.loaded(c)},g=e._html_){var h;"height"==e._fluid_?h="fluid":h=[e._width_,e._height_];Pw(a,b,c);ax(this,a,b,c,h,g,f,{sandbox:e._use_sandbox_||!1});_.Ss(c,_.Yp(c,e))}else c.renderEnded(_.Zp(c));else if(e._snippet_&&!e._is_afc_)cx(this,c,b);else if(Cw()){h="googletag.impl.pubads.syncAdSlotLoaded(this, '"+_.L(c)+"',"+c.j+");";f="about:blank";if(g=_.et(this.o,"google_domain_reset_url")){var l=_.Ne(g.match(_.Me)[3]||null);if(null===l||0<=l.indexOf(window.document.domain))f=g}Pw(a,b,c);if("height"==e._fluid_){Ow(this);return}dx(this,c,f,h,[e._width_,e._height_],this.j.o,b)}else Pw(a,b,c),a=ex(this,c,b),b.write("<script>googletag.impl.pubads.createDomIframe("+yw(a)+" ,"+yw(_.L(c))+","+this.j.o+","+c.j+");\x3c/script>");this.ga(b,c);Nw(this,c);c.renderStarted()});_.cv.prototype.hc=tw(4,function(a){window.clearTimeout(this.P);Kw(this,a,this.F);this.F=null;this.w||(this.w=!0,_.fv(this,this.D));this.v.length&&_.dv(this,this.v.shift())});_.Wu.prototype.fc=tw(3,function(a,b,c,d,e){var f=this;e=void 0===e?window.document:e;var g=_.L(b);if(this.w[g]==a)if(this.N)delete this.w[g],b.renderStarted(),b.renderEnded(_.Zp(b));else if(d&&delete this.w[g],a=b.T,a._empty_)b.renderStarted(),Sw(this,e,b);else{a._html_=(a._html_||"")+c;var h=_.zk.is(_.ti.bb);if(!h||d&&!Zw(this,e,b))if(this.C(a))d&&(Mw(this,b,b.getEscapedQemQueryId()),b.renderStarted(),Tw(this,window,e,b,"height"==a._fluid_?"fluid":[a._width_,a._height_],a._html_,function(){return f.loaded(b)},{sandbox:!!a._use_sandbox_}),_.Ss(b,_.Yp(b,b.T)),Pw(_.t,e,b));else{var l=_.aq(b,e);if(l){var n=b.m;n&&(b.renderStarted(),Mw(this,b,b.getEscapedQemQueryId()));_.$u(b,l,h?a._html_:c,n,d);d&&(_.Xt(this,l,g),_.Ss(b,_.Yp(b,b.T)),Pw(_.t,e,b))}}}});_.Wu.prototype.oc=tw(2,function(a,b,c,d){d=void 0===d?window.document:d;this.Cb[a]||(this.Cb[a]=!0,Ew(_.op(),b.getCsiId(),b.U,b.j));var e=_.L(b);(c=c[b.getAdUnitPath()])&&_.Rs(this.j,b)&&!this.w[e]&&(Jw(this,b,c),this.w[e]=a,_.Zu(this,b,d))});_.V.prototype.Ea=tw(1,function(a,b){b=void 0===b?window.document:b;try{var c=a.T;if(null!=c&&!c._empty_&&!this.N){var d=_.P(a,b);d&&_.ee(d,!0)}Zw(this,b,a)?Lw(a):Vw(this,b,a)}catch(e){}});_.V.prototype.gc=tw(0,function(a,b,c){var d=this,e=this.da[c];e?(b=Kw(this,b,e),delete this.da[c],Qw(this,a,b),_.y(b,function(a){return d.Ea(a)}),this.l||c!=this.Da||(window.clearTimeout(this.Ib[_.L(e[0])]),_.Du(this))):(a=new _.M("gpt_req_undef"),_.p(a),_.r(a,"req_id",String(c)),_.Nn(a))});var fx={},gx=(fx[1]=_.V.prototype.gc,fx[2]=_.cv.prototype.hc,fx[3]=_.V.prototype.Ea,fx[4]=_.cv.prototype.I,fx[5]=_.Wu.prototype.fc,fx[6]=_.Wu.prototype.oc,fx[7]=_.V.prototype.Xa,fx[8]=_.V.prototype.Ya,fx[9]=_.V.prototype.ha,fx[10]=_.V.prototype.Ga,fx[11]=_.Qt.prototype.sc,fx);window.googletag._=function(a,b){b=void 0===b?gx:b;_.Yq();_.io.push=_.N(339,function(a){var c=a&&b[a.Ba];c&&c.apply(a.La,a.Aa);return 0});_.y(_.io,function(a){return _.io.push(a)});_.io.length=0};})
