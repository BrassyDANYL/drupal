!function(h,t,e){"use strict";var i="is-b-flex--on",n="is-b-loading",d=0;function o(s){var o,r=".grid",c={},a=h.find(s,r);h.isElm(a)&&(o=h.findAll(s,r),e.setTimeout(function(){var t=h.rect(s).width,e=h.rect(a).width,i=h.computeStyle(a),i=e+parseFloat(i.marginLeft)+parseFloat(i.marginRight),l=Math.round(1/(i/t));h.each(o,function(a,n){var t=a.target,e=h.isUnd(n);a=t?h.closest(t,r):a,n=e?o.indexOf(a):n;t=function(){var t,e,i,o=h.find(a,r+"__content");h.isElm(o)&&((i=(t=h.rect(o)).height)<60&&(i=(t=h.rect(a)).height),i<60||(e=n%l,o=h.computeStyle(a),h.isUnd(c[e])&&(c[e]=0),a.style.height=i+"px",c[e]+=i+parseFloat(o.marginBottom),0<=n-l&&(i=n-l+1,i=h.find(s,r+":nth-of-type("+i+")"),h.isElm(i)&&(i=h.rect(i).bottom,o=t.top-parseFloat(o.marginBottom),a.style.top="-"+(o-i)+"px"))))};e?setTimeout(t,600):t()}),(t=Math.max.apply(null,Object.values(c)))<0&&(t=d),s.style.height=t+"px",d=t},200),h.addClass(s,n),e.setTimeout(function(){h.removeClass(s,n)},600),h.addClass(s,i))}t.behaviors.blazyFlex={attach:function(t){t=h.context(t),h.once(o,".block-flex:not(.is-b-flex--on)",t)}}}(dBlazy,Drupal,this);
;
