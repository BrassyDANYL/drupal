!function(o,u){"use strict";var l=Object.assign,i=Array.prototype,c=Object.prototype,t=i.splice,r=i.some,n="undefined"!=typeof Symbol&&Symbol,f="class",d="add",s="remove",a="width",h="height",e="after",p="before",v="begin",g="Left",m="Height",y="Width",b="client"+y,E="scroll",w="iterator",A="Observer",C=/-([a-z])/g,x=/^--/,S={},O=(z.prototype.init=function(t,n){n=new z(t,n);return R(t)?(t.idblazy||(t.idblazy=n),t.idblazy):n},z);function z(t,n){if(this.name="dblazy",t){if(I(t))return t;var e=t;if(B(t)){if(H(e=ot((I(n)?n[0]:n)||u,t)))return}else if(W(t))return this.ready(t);!e.nodeType&&e!==o||(e=[e]);for(var r=this.length=e.length,i=0;i<r;i++)this[i]=e[i]}}var L=O.prototype,T=L.init;function j(t){var n=this,e=(n=I(n)?n:T(n)).length;return e&&1!==e?n.each(t):t(n[0]),n}function I(t){return t instanceof O}function N(t){return!H(t)&&Array.isArray(t)}function P(t){return"boolean"==typeof t}function R(t){return t&&t instanceof Element}function W(t){return"function"==typeof t}function H(t){return M(t)||D(t)||!1===t||t.length&&0===t.length}function M(t){return null===t}function q(t){if("object"!=typeof t||H(t))return!1;t=Object.getPrototypeOf(t);return M(t)||t===c}function B(t){return"string"==typeof t}function D(t){return void 0===t}function F(t){return-1!==[1,9,11].indexOf(!!t&&t.nodeType)}function $(t){return F(t)||!!(t=t)&&t===t.window}function k(t,n,e){if("[object Object]"===c.toString.call(t))for(var r in t)U(t,r)&&"length"!==r&&n.call(e,t[r],r,t);else t&&(1===t.length?n.call(e,t[0],0,t):t.forEach(n,e));return t}function U(t,n){return c.hasOwnProperty.call(t,n)}function V(t){return N(t)?t:[t]}function _(t,n,r,e){var i=this,o=D(r),u=!q(n)&&(o||P(e)),c=B(e)?e:"";if(u){e=t&&t.length?t[0]:t;return o&&(r=""),J(e,n)?e.getAttribute(n):r}return j.call(t,function(e){if(!F(e))return u?"":i;q(n)?k(n,function(t,n){e.setAttribute(c+n,t)}):M(r)?k(V(n),function(t){t=c+t;e.hasAttribute(t)&&e.removeAttribute(t)}):"src"===n?e.src=r:e.setAttribute(n,r)})}function J(t,n){return F(t)&&t.hasAttribute(n)}function Q(t,n,e){return _(t,n,null,e||"")}function G(e,t){var r,i=0;return F(e)&&B(t)&&(r=e.classList,k(t.split(" "),function(t){var n;r?r.contains(t)&&i++:(n=_(e,f))&&n.match(t)&&i++})),0<i}function K(t,e,r){return j.call(t,function(t){var n;F(t)&&B(e)&&(n=t.classList,t=e.split(" "),n&&(D(r)?t.map(function(t){n.toggle(t)}):n[r].apply(n,t)))})}function X(n,t){var e=0;return R(n)&&R(t)?n!==t&&n.contains(t):N(n)?-1!==n.indexOf(t):(B(n)&&k(V(t),function(t){-1!==n.indexOf(t)&&e++}),0<e)}function Y(t){return t.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}function Z(n,t){var e=0;return B(n)&&k(V(t),function(t){n.startsWith(t)&&e++}),0<e}function tt(t){return t.replace(/\\s+/g," ").trim()}function nt(t,n){return R(t)&&B(n)?t.closest(n):null}function et(t,n){return!!R(t)&&(B(n)?t.matches(n):R(n)&&t===n)}function rt(n,t){return r.call(V(t),function(t){return F(n)&&n.nodeName.toLowerCase()===t.toLowerCase()})}function it(t,n,e){return B(n)&&F(t)?D(e)?t.querySelector(n)||[]:function(t,n){var e=V(t);{var r;B(t)&&(r=n.querySelector(t),e=M(r)?[]:n.querySelectorAll(t))}return i.slice.call(e)}(n,t):[]}function ot(t,n){return it(t,n,1)}function ut(t){var n;!R(t)||(n=Ct(t))&&n.removeChild(t)}function ct(t){return R(t)&&t.currentStyle||!D(u.documentMode)}function ft(){return o.devicePixelRatio||1}function st(){return o.innerWidth||u.documentElement[b]||u.body[b]||o.screen[a]}function at(t,n,e,r,i,o){return vt(t,n,e,r,i,o,d)}function lt(t,n,e,r,i,o){return vt(t,n,e,r,i,o,s)}function dt(t,n,e,r){return at(t,n,e,{once:!0},r)}function ht(t){return t.decoded||t.complete}function pt(){return 1}function vt(t,n,e,c,r,f,s){var i,o=c,a=ct();c=B(e)?(i=X(n,["touchstart",E,"wheel"]),D(r)&&(r=!a&&{capture:!i,passive:i}),function(t){var n=t.target;if(et(n,e))o.call(n,t);else for(;n&&n!==this;){if(et(n,e))return void o.call(n,t);n=n.parentElement}}):(f=r,r=o,e);return j.call(t,function(i){var o,u;$(i)&&(o=!1,u=r||!1,q(r)&&(u=l({capture:!1,passive:!0},r),o=u.once||!1),k(n.split(" "),function(t){f=f||Z(t,["blazy.","bio."]);var n=s===d,e=(f?t:t.split(".")[0]).trim(),r=c=c||S[t];W(c)&&(o&&n&&a&&(n=!(c=function t(n){i.removeEventListener(e,t,u),r.apply(this,arguments)})),i[s+"EventListener"](e,c,u)),n?S[t]=c:delete S[t]}))})}function gt(t,e,r,i){return j.call(t,function(t){var n;return $(t)&&(n=D(r)?new Event(e):(n={bubbles:!0,cancelable:!0,detail:r||{}},q(i)&&(n=l(n,i)),new CustomEvent(e,n)),t.dispatchEvent(n)),n})}function mt(t){return t.replace(C,function(t,n){return n.toUpperCase()})}function yt(t){return x.test(t)}function bt(t,n,e){if(R(t)){var r=getComputedStyle(t,null);return D(n)?r:e||yt(n)?r.getPropertyValue(n)||null:r[n]||t.style[n]}}function Et(t,n,i){var o=this,e=D(i),u=q(n),c=!u&&e;if(c&&B(n)){var r=t&&t.length?t[0]:t,e=[a,h,"top","right","bottom","left"],r=bt(r,n);return-1===e.indexOf(n)?r:parseInt(r,10)}return j.call(t,function(e){if(!R(e))return c?"":o;function r(t,n){W(n)&&(n=n()),(X(t,"-")||yt(t))&&(t=mt(t)),e.style[t]=B(n)?n:n+"px"}u?k(n,function(t,n){r(n,t)}):M(i)?k(V(n),function(t){e.style.removeProperty(t)}):B(n)&&r(n,i)})}function wt(t,n,e){var r,i=0;return R(t)&&(i=t["offset"+e],n&&(r=bt(t),t=function(t){return parseInt(r["margin"+t],10)},i+=e===m?t("Top")+t("Bottom"):t(g)+t("Right"))),i}function At(t,n,e){R(t)&&t["insertAdjacent"+(R(n)?"Element":"HTML")](e,n)}function Ct(t){return R(t)&&t.parentElement}function xt(t){return R(t)&&t.previousElementSibling}(T.fn=T.prototype=L).length=0,L.splice=t,n&&(L[n[w]]=i[n[w]]),T.trigger=gt.bind(T),L.trigger=function(t,n,e){return gt(this,t,n,e)},T.isArr=N,T.isBool=P,T.isElm=R,T.isFun=W,T.isEmpty=H,T.isNull=M,T.isNum=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},T.isObj=q,T.isStr=B,T.isUnd=D,T.isEvt=$,T.isQsa=F,T.isIo="Intersection"+A in o,T.isMo="Mutation"+A in o,T.isRo="Resize"+A in o,T.isNativeLazy="loading"in HTMLImageElement.prototype,T.isAmd="function"==typeof define&&define.amd,T._er=-1,T._ok=1,T.chain=function(t,n){return j.call(t,n)},L.chain=function(t){return j.call(this,t)},T.each=k,L.each=function(t){return k(this,t)},T.extend=l,L.extend=function(t){return l(L,t)},T.has=U,T.parse=function(t){try{return 0===t.length||"1"===t?{}:JSON.parse(t)}catch(t){return{}}},T.toArray=V,T.hasAttr=J.bind(T),L.hasAttr=function(n){var e=this;return r.call(e,function(t){return J.call(e,t,n)})},T.attr=_.bind(T),L.attr=function(t,n,e){return M(n)?this.removeAttr(t,e):_(this,t,n,e)},T.removeAttr=Q.bind(T),L.removeAttr=function(t,n){return Q(this,t,n)},T.hasClass=G.bind(T),L.hasClass=function(n){var e=this;return r.call(e,function(t){return G.call(e,t,n)})},T.toggleClass=K.bind(T),L.toggleClass=function(t,n){return K(this,t,n)},T.addClass=function(t,n){return K(t,n,d)}.bind(T),L.addClass=function(t){return this.toggleClass(t,d)},T.removeClass=function(t,n){return K(t,n,s)}.bind(T),L.removeClass=function(t){return arguments.length?this.toggleClass(t,s):this.attr(f,"")},T.contains=X,T.escape=Y,T.startsWith=Z,T.trimSpaces=tt,T.closest=nt,L.closest=function(t){return nt(this[0],t)},T.is=et,T.equal=rt,L.equal=function(t){return rt(this[0],t)},T.find=it,L.find=function(t,n){return it(this[0],t,n)},T.findAll=ot,L.findAll=function(t){return ot(this[0],t)},L.first=function(t){return D(t)?this[0]:t},T.remove=ut,L.remove=function(){this.each(ut)},T.ie=ct,T.pixelRatio=ft,T.windowWidth=st,T.windowSize=function(){return{width:st(),height:o.innerHeight||u.documentElement.clientHeight}},T.activeWidth=function(n,t){var e=t.up||!1,r=Object.keys(n),i=r[0],o=r[r.length-1],u=t.ww||st(),t=u*ft(),c=e?u:t;return D(r=r.filter(function(t){return e?parseInt(t,10)<=c:parseInt(t,10)>=c}).map(function(t){return n[t]})[e?"pop":"shift"]())?n[o<=c?o:i]:r},L.toEvent=function(t,n,e,r,i,o){return vt(this,t,n,e,r,i,o)},T.on=at.bind(T),L.on=function(t,n,e,r,i){return this.toEvent(t,n,e,r,i,d)},T.off=lt.bind(T),L.off=function(t,n,e,r,i){return this.toEvent(t,n,e,r,i,s)},T.one=dt.bind(T),L.one=function(t,n,e){return dt(this,t,n,e)},T.isDecoded=ht,L.ready=function(t){function n(){return setTimeout(t,0,T)}return"loading"!==u.readyState?n():u.addEventListener("DOMContentLoaded",n),this},T.decode=function(e){return ht(e)?Promise.resolve(e):"decode"in e?(e.decoding="async",e.decode()):new Promise(function(t,n){e.onload=function(){t(e)},e.onerror=n()})},T.once=function(t,n,e){var r=[];return D(n)||(n=(r=B(n)?ot(e||u,n):V(n)).length)&&pt(1===n?t(r[0]):k(r,t)),r},T.throttle=function(n,e,r){e=e||50;var i=0;return function(){var t=+new Date;t-i<e||(i=t,n.apply(r,arguments))}},T.resize=function(n,e){return o.onresize=function(t){clearTimeout(e),e=setTimeout(n.bind(t),200)},n},T.template=function(t,n){for(var e in n)U(n,e)&&(t=t.replace(new RegExp(Y("$"+e),"g"),n[e]));return tt(t)},T.context=function(t){return(t=(t=t||u).length?t[0]:t)&&-1!==[9,11].indexOf(!!(n=t)&&n.nodeType)?t:u;var n},T.camelCase=mt,T.isVar=yt,T.computeStyle=bt,L.computeStyle=function(t){return bt(this[0],t)},T.css=Et,L.css=function(t,n){return Et(this,t,n)},T.rect=function(t){return R(t)?t.getBoundingClientRect():{}},T.offset=function(t){return{top:((t=(void 0)(t)).top||0)+u.body[E+"Top"],left:(t.left||0)+u.body[E+g]}},T.width=function(t,n){return Et(t,a,n)},T.height=function(t,n){return Et(t,h,n)},T.outerWidth=function(t,n){return wt(t,n,y)},T.outerHeight=function(t,n){return wt(t,n,m)},T.after=function(t,n){At(t,n,e+"end")},T.before=function(t,n){At(t,n,p+v)},T.append=function(t,n){At(t,n,p+"end")},T.prepend=function(t,n){At(t,n,e+v)},T.parent=Ct,T.prev=xt,T.next=function(t){return R(t)&&t.nextElementSibling},T.index=function(t){var n=0;if(R(t))for(;!M(t=xt(t));)n++;return n},T.matches=et,T.forEach=k,T.bindEvent=at.bind(T),T.unbindEvent=lt.bind(T),"undefined"!=typeof exports?module.exports=T:o.dBlazy=T}(this,this.document);
;
!function(n,e){"use strict";n.debounce=function(n,c,u){e.debounce(function(){n.call(u,c)},201,!0)}}(dBlazy,Drupal);
;
!function(o,t,n,l,e){"use strict";var s="data",a=".b-blur",r=".media",i="successClass",u=(c="blazy")+".done",c=function(){},d={};t.blazy={context:e,name:"Drupal.blazy",init:null,instances:[],resizeTick:0,resizeTrigger:!1,blazySettings:n.blazy||{},ioSettings:n.blazyIo||{},options:{},clearCompat:c,clearScript:c,checkResize:c,resizing:c,revalidate:c,isIo:function(){return!0},isBlazy:function(){return!o.isIo&&"Blazy"in l},isFluid:function(t,n){return o.equal(t.parentNode,"picture")&&o.hasAttr(n,"data-dimensions")},isLoaded:function(t){return o.hasClass(t,this.options[i])},globals:function(){var t=this,n={isMedia:!0,success:t.clearing.bind(t),error:t.clearing.bind(t),resizing:t.resizing.bind(t),selector:".b-lazy",parent:r,errorClass:"b-error",successClass:"b-loaded"};return o.extend(t.blazySettings,t.ioSettings,n)},extend:function(t){d=o.extend({},d,t)},merge:function(t){var n=this;return n.options=o.extend({},n.globals(),n.options,t||{}),n.options},run:function(t){return new BioMedia(t)},mount:function(t){var n=this;return n.merge(),t&&o.each(d,function(t){o.isFun(t)&&t.call(n)}),o.extend(n,d)},selector:function(t){t=t||"";var n=this.options;return n.selector+t+":not(."+n[i]+")"},clearing:function(t){var n,i;t.bclearing||(n=this,i=o.hasClass(t,"b-responsive")&&o.hasAttr(t,s+"-pfsrc"),o.isFun(o.unloading)&&o.unloading(t),o.trigger(t,u,{options:n.options}),n.clearCompat(t),n.clearScript(t),l.picturefill&&i&&l.picturefill({reevaluate:!0,elements:[t]}),t.bclearing=!0)},windowData:function(){return this.init?this.init.windowData():{}},load:function(n){var i=this;l.setTimeout(function(){var t=o.findAll(n||e,i.selector());t.length&&o.each(t,i.update.bind(i))},100)},update:function(t,n,i){function e(){o.hasAttr(t,"data-b-bg")&&o.isFun(o.bg)?o.bg(t,i||s.windowData()):s.init&&(o.hasClass(t,r.substring(1))||(t=o.find(t,r)||t),s.init.load(t,!0,a))}var s=this,a=s.options,r=a.selector;(n=n||!1)?l.setTimeout(e,100):e()},rebind:function(t,i,e){var n=o.findAll(t,this.options.selector+":not("+a+")"),s=n.length;s||(n=o.findAll(t,"img:not("+a+")")),n.length&&o.each(n,function(t){var n=s?u:"load";o.one(t,n,i,s),e&&e.observe(t)})},pad:function(n,i,t){var e=this,s=o.closest(n,r)||n;setTimeout(function(){var t=Math.round(n.naturalHeight/n.naturalWidth*100,2);e.isFluid(n,s)&&(s.style.paddingBottom=t+"%"),o.isFun(i)&&i.call(e,n,s,t)},t||0)}}}(dBlazy,Drupal,drupalSettings,this,this.document);
;
!function(e,s,n){"use strict";var o="description",i=o+"--on",t="form-checkbox",a=t+"--on",l="form--slick",c=l+"--on",r=".form-item",d="is-focused",f="is-hovered",m="is-selected",h="addClass",u="removeClass",v="checked",p="change";function g(s){var n=e(s);e(".details-legend-prefix",n).removeClass("element-invisible"),n[e("."+t+"--vanilla",n).prop(v)?h:u]("form--vanilla-on"),n.on("click","."+t,function(){var s=e(this);s[s.prop(v)?h:u]("on"),s.hasClass(t+"--vanilla")&&n[s.prop(v)?h:u]("form--vanilla-on")}),e('select[name$="[style]"]',n).on(p,function(){var s=e(this).val();n.removeClass(function(s,n){return(n.match(/(^|\s)form--style-\S+/g)||[]).join(" ")}),""===s?n.addClass("form--style-off form--style-is-grid"):(n.addClass("form--style-on form--style-"+s),"column"!==s&&"grid"!==s&&"flex"!==s&&"nativegrid"!==s||n.addClass("form--style-is-grid"))}).change(),e('select[name$="[grid]"]',n).on(p,function(){var s=e(this);n[""===s.val()?u:h]("form--grid-on")}).change(),e('select[name$="[responsive_image_style]"]',n).on(p,function(){var s=e(this);n[""===s.val()?u:h]("form--responsive-image-on")}).change(),e('select[name$="[media_switch]"]',n).on(p,function(){var s=e(this).val();n.removeClass(function(s,n){return(n.match(/(^|\s)form--media-switch-\S+/g)||[]).join(" ")}),n[""===s?u:h]("form--media-switch-"+s),n[""===s||"content"===s||"media"===s||"rendered"===s?u:h]("form--media-switch-lightbox")}).change(),n.on("mouseenter touchstart",".b-hint",function(){e(this).closest(r).addClass(f)}),n.on("mouseleave touchend",".b-hint",function(){e(this).closest(r).removeClass(f)}),n.on("click",".b-hint",function(){e(".form-item."+m,n).removeClass(m),e(this).parent().toggleClass(m)}),n.on("click",".description, .form-item__description",function(){e(this).closest("."+m).removeClass(m)}),n.on("focus",".js-expandable",function(){e(this).parent().addClass(d)}),n.on("blur",".js-expandable",function(){e(this).parent().removeClass(d)}),n.addClass(c)}function C(s){s=e(s);s.hasClass(o)||s.addClass(o),s.siblings(".b-hint").length||s.closest(r).append('<span class="b-hint">?</span>'),s.addClass(i)}function b(s){s=e(s);s.next(".field-suffix").length||s.after('<span class="field-suffix"></span>'),s.addClass(a)}s.behaviors.blazyAdmin={attach:function(s){s=n.context(s),n.once(C,".description:not(.description--on), .form-item__description:not(.description--on)",s),n.once(b,".form-checkbox:not(.form-checkbox--on)",s),n.once(g,".form--slick:not(.form--slick--on)",s)}}}(jQuery,Drupal,dBlazy);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  var states = {
    postponed: []
  };
  Drupal.states = states;

  function invert(a, invertState) {
    return invertState && typeof a !== 'undefined' ? !a : a;
  }

  function _compare2(a, b) {
    if (a === b) {
      return typeof a === 'undefined' ? a : true;
    }

    return typeof a === 'undefined' || typeof b === 'undefined';
  }

  function ternary(a, b) {
    if (typeof a === 'undefined') {
      return b;
    }

    if (typeof b === 'undefined') {
      return a;
    }

    return a && b;
  }

  Drupal.behaviors.states = {
    attach: function attach(context, settings) {
      var $states = $(context).find('[data-drupal-states]');
      var il = $states.length;

      var _loop = function _loop(i) {
        var config = JSON.parse($states[i].getAttribute('data-drupal-states'));
        Object.keys(config || {}).forEach(function (state) {
          new states.Dependent({
            element: $($states[i]),
            state: states.State.sanitize(state),
            constraints: config[state]
          });
        });
      };

      for (var i = 0; i < il; i++) {
        _loop(i);
      }

      while (states.postponed.length) {
        states.postponed.shift()();
      }
    }
  };

  states.Dependent = function (args) {
    var _this = this;

    $.extend(this, {
      values: {},
      oldValue: null
    }, args);
    this.dependees = this.getDependees();
    Object.keys(this.dependees || {}).forEach(function (selector) {
      _this.initializeDependee(selector, _this.dependees[selector]);
    });
  };

  states.Dependent.comparisons = {
    RegExp: function RegExp(reference, value) {
      return reference.test(value);
    },
    Function: function Function(reference, value) {
      return reference(value);
    },
    Number: function Number(reference, value) {
      return typeof value === 'string' ? _compare2(reference.toString(), value) : _compare2(reference, value);
    }
  };
  states.Dependent.prototype = {
    initializeDependee: function initializeDependee(selector, dependeeStates) {
      var _this2 = this;

      this.values[selector] = {};
      Object.keys(dependeeStates).forEach(function (i) {
        var state = dependeeStates[i];

        if ($.inArray(state, dependeeStates) === -1) {
          return;
        }

        state = states.State.sanitize(state);
        _this2.values[selector][state.name] = null;
        $(selector).on("state:".concat(state), {
          selector: selector,
          state: state
        }, function (e) {
          _this2.update(e.data.selector, e.data.state, e.value);
        });
        new states.Trigger({
          selector: selector,
          state: state
        });
      });
    },
    compare: function compare(reference, selector, state) {
      var value = this.values[selector][state.name];

      if (reference.constructor.name in states.Dependent.comparisons) {
        return states.Dependent.comparisons[reference.constructor.name](reference, value);
      }

      return _compare2(reference, value);
    },
    update: function update(selector, state, value) {
      if (value !== this.values[selector][state.name]) {
        this.values[selector][state.name] = value;
        this.reevaluate();
      }
    },
    reevaluate: function reevaluate() {
      var value = this.verifyConstraints(this.constraints);

      if (value !== this.oldValue) {
        this.oldValue = value;
        value = invert(value, this.state.invert);
        this.element.trigger({
          type: "state:".concat(this.state),
          value: value,
          trigger: true
        });
      }
    },
    verifyConstraints: function verifyConstraints(constraints, selector) {
      var result;

      if ($.isArray(constraints)) {
        var hasXor = $.inArray('xor', constraints) === -1;
        var len = constraints.length;

        for (var i = 0; i < len; i++) {
          if (constraints[i] !== 'xor') {
            var constraint = this.checkConstraints(constraints[i], selector, i);

            if (constraint && (hasXor || result)) {
              return hasXor;
            }

            result = result || constraint;
          }
        }
      } else if ($.isPlainObject(constraints)) {
        for (var n in constraints) {
          if (constraints.hasOwnProperty(n)) {
            result = ternary(result, this.checkConstraints(constraints[n], selector, n));

            if (result === false) {
              return false;
            }
          }
        }
      }

      return result;
    },
    checkConstraints: function checkConstraints(value, selector, state) {
      if (typeof state !== 'string' || /[0-9]/.test(state[0])) {
        state = null;
      } else if (typeof selector === 'undefined') {
        selector = state;
        state = null;
      }

      if (state !== null) {
        state = states.State.sanitize(state);
        return invert(this.compare(value, selector, state), state.invert);
      }

      return this.verifyConstraints(value, selector);
    },
    getDependees: function getDependees() {
      var cache = {};
      var _compare = this.compare;

      this.compare = function (reference, selector, state) {
        (cache[selector] || (cache[selector] = [])).push(state.name);
      };

      this.verifyConstraints(this.constraints);
      this.compare = _compare;
      return cache;
    }
  };

  states.Trigger = function (args) {
    $.extend(this, args);

    if (this.state in states.Trigger.states) {
      this.element = $(this.selector);

      if (!this.element.data("trigger:".concat(this.state))) {
        this.initialize();
      }
    }
  };

  states.Trigger.prototype = {
    initialize: function initialize() {
      var _this3 = this;

      var trigger = states.Trigger.states[this.state];

      if (typeof trigger === 'function') {
        trigger.call(window, this.element);
      } else {
        Object.keys(trigger || {}).forEach(function (event) {
          _this3.defaultTrigger(event, trigger[event]);
        });
      }

      this.element.data("trigger:".concat(this.state), true);
    },
    defaultTrigger: function defaultTrigger(event, valueFn) {
      var oldValue = valueFn.call(this.element);
      this.element.on(event, $.proxy(function (e) {
        var value = valueFn.call(this.element, e);

        if (oldValue !== value) {
          this.element.trigger({
            type: "state:".concat(this.state),
            value: value,
            oldValue: oldValue
          });
          oldValue = value;
        }
      }, this));
      states.postponed.push($.proxy(function () {
        this.element.trigger({
          type: "state:".concat(this.state),
          value: oldValue,
          oldValue: null
        });
      }, this));
    }
  };
  states.Trigger.states = {
    empty: {
      keyup: function keyup() {
        return this.val() === '';
      }
    },
    checked: {
      change: function change() {
        var checked = false;
        this.each(function () {
          checked = $(this).prop('checked');
          return !checked;
        });
        return checked;
      }
    },
    value: {
      keyup: function keyup() {
        if (this.length > 1) {
          return this.filter(':checked').val() || false;
        }

        return this.val();
      },
      change: function change() {
        if (this.length > 1) {
          return this.filter(':checked').val() || false;
        }

        return this.val();
      }
    },
    collapsed: {
      collapsed: function collapsed(e) {
        return typeof e !== 'undefined' && 'value' in e ? e.value : !this.is('[open]');
      }
    }
  };

  states.State = function (state) {
    this.pristine = state;
    this.name = state;
    var process = true;

    do {
      while (this.name.charAt(0) === '!') {
        this.name = this.name.substring(1);
        this.invert = !this.invert;
      }

      if (this.name in states.State.aliases) {
        this.name = states.State.aliases[this.name];
      } else {
        process = false;
      }
    } while (process);
  };

  states.State.sanitize = function (state) {
    if (state instanceof states.State) {
      return state;
    }

    return new states.State(state);
  };

  states.State.aliases = {
    enabled: '!disabled',
    invisible: '!visible',
    invalid: '!valid',
    untouched: '!touched',
    optional: '!required',
    filled: '!empty',
    unchecked: '!checked',
    irrelevant: '!relevant',
    expanded: '!collapsed',
    open: '!collapsed',
    closed: 'collapsed',
    readwrite: '!readonly'
  };
  states.State.prototype = {
    invert: false,
    toString: function toString() {
      return this.name;
    }
  };
  var $document = $(document);
  $document.on('state:disabled', function (e) {
    if (e.trigger) {
      $(e.target).prop('disabled', e.value).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled', e.value).find('select, input, textarea').prop('disabled', e.value);
    }
  });
  $document.on('state:required', function (e) {
    if (e.trigger) {
      if (e.value) {
        var label = "label".concat(e.target.id ? "[for=".concat(e.target.id, "]") : '');
        var $label = $(e.target).attr({
          required: 'required',
          'aria-required': 'true'
        }).closest('.js-form-item, .js-form-wrapper').find(label);

        if (!$label.hasClass('js-form-required').length) {
          $label.addClass('js-form-required form-required');
        }
      } else {
        $(e.target).removeAttr('required aria-required').closest('.js-form-item, .js-form-wrapper').find('label.js-form-required').removeClass('js-form-required form-required');
      }
    }
  });
  $document.on('state:visible', function (e) {
    if (e.trigger) {
      $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggle(e.value);
    }
  });
  $document.on('state:checked', function (e) {
    if (e.trigger) {
      $(e.target).prop('checked', e.value);
    }
  });
  $document.on('state:collapsed', function (e) {
    if (e.trigger) {
      if ($(e.target).is('[open]') === e.value) {
        $(e.target).find('> summary').trigger('click');
      }
    }
  });
})(jQuery, Drupal);;
