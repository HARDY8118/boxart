var app=function(){"use strict";function t(){}function s(t){return t()}function e(){return Object.create(null)}function n(t){t.forEach(s)}function l(t){return"function"==typeof t}function c(t,s){return t!=t?s==s:t!==s||t&&"object"==typeof t||"function"==typeof t}function o(t,s){t.appendChild(s)}function a(t,s,e){t.insertBefore(s,e||null)}function p(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function w(){return v(" ")}function i(t,s,e,n){return t.addEventListener(s,e,n),()=>t.removeEventListener(s,e,n)}function d(t,s,e){null==e?t.removeAttribute(s):t.getAttribute(s)!==e&&t.setAttribute(s,e)}function x(t,s){t.value=null==s?"":s}let r;function b(t){r=t}const C=[],k=[],f=[],h=[],$=Promise.resolve();let m=!1;function g(t){f.push(t)}const y=new Set;let T=0;function O(){const t=r;do{for(;T<C.length;){const t=C[T];T++,b(t),_(t.$$)}for(b(null),C.length=0,T=0;k.length;)k.pop()();for(let t=0;t<f.length;t+=1){const s=f[t];y.has(s)||(y.add(s),s())}f.length=0}while(C.length);for(;h.length;)h.pop()();m=!1,y.clear(),b(t)}function _(t){if(null!==t.fragment){t.update(),n(t.before_update);const s=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,s),t.after_update.forEach(g)}}const I=new Set;function E(t,s){t&&t.i&&(I.delete(t),t.i(s))}function q(t,s,e,n){if(t&&t.o){if(I.has(t))return;I.add(t),undefined.c.push((()=>{I.delete(t),n&&(e&&t.d(1),n())})),t.o(s)}}function A(t){t&&t.c()}function j(t,e,c,o){const{fragment:a,on_mount:p,on_destroy:u,after_update:v}=t.$$;a&&a.m(e,c),o||g((()=>{const e=p.map(s).filter(l);u?u.push(...e):n(e),t.$$.on_mount=[]})),v.forEach(g)}function L(t,s){const e=t.$$;null!==e.fragment&&(n(e.on_destroy),e.fragment&&e.fragment.d(s),e.on_destroy=e.fragment=null,e.ctx=[])}function N(t,s){-1===t.$$.dirty[0]&&(C.push(t),m||(m=!0,$.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[s/31|0]|=1<<s%31}function S(s,l,c,o,a,u,v,w=[-1]){const i=r;b(s);const d=s.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(i?i.$$.context:[])),callbacks:e(),dirty:w,skip_bound:!1,root:l.target||i.$$.root};v&&v(d.root);let x=!1;if(d.ctx=c?c(s,l.props||{},((t,e,...n)=>{const l=n.length?n[0]:e;return d.ctx&&a(d.ctx[t],d.ctx[t]=l)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](l),x&&N(s,t)),e})):[],d.update(),x=!0,n(d.before_update),d.fragment=!!o&&o(d.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();l.intro&&E(s.$$.fragment),j(s,l.target,l.anchor,l.customElement),O()}b(i)}class M{$destroy(){L(this,1),this.$destroy=t}$on(t,s){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(s),()=>{const t=e.indexOf(s);-1!==t&&e.splice(t,1)}}$set(t){var s;this.$$set&&(s=t,0!==Object.keys(s).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function B(s){let e,l,c,r,b,C,k;return{c(){e=u("div"),l=u("textarea"),c=w(),r=u("button"),b=v(s[2]),d(l,"placeholder","Output appears here"),d(l,"class","svelte-1nor2qb"),d(r,"class","svelte-1nor2qb"),d(e,"class","svelte-1nor2qb")},m(t,n){a(t,e,n),o(e,l),x(l,s[0]),s[9](l),o(e,c),o(e,r),o(r,b),C||(k=[i(l,"input",s[8]),i(l,"focus",s[4]),i(l,"click",s[4]),i(l,"keyup",s[4]),i(l,"change",s[5]),i(r,"click",s[3])],C=!0)},p(t,[s]){1&s&&x(l,t[0]),4&s&&function(t,s){s=""+s,t.wholeText!==s&&(t.data=s)}(b,t[2])},i:t,o:t,d(t){t&&p(e),s[9](null),C=!1,n(k)}}}function D(t,s,e){let n,{outputText:l}=s,{setOutputText:c}=s,{setOutputIndex:o}=s,a="Copy to Clipboard";function p(t){o(t.target.selectionStart)}return t.$$set=t=>{"outputText"in t&&e(0,l=t.outputText),"setOutputText"in t&&e(6,c=t.setOutputText),"setOutputIndex"in t&&e(7,o=t.setOutputIndex)},[l,n,a,function(){try{navigator.clipboard.writeText(n.value)}catch(t){n.select(),n.execCommand("copy")}finally{e(2,a="Copied !"),setTimeout((()=>{e(2,a="Copy to Clipboard")}),1e3)}},p,function(t){c(t.target.value),p(t)},c,o,function(){l=this.value,e(0,l)},function(t){k[t?"unshift":"push"]((()=>{n=t,e(1,n)}))}]}class H extends M{constructor(t){super(),S(this,t,D,B,c,{outputText:0,setOutputText:6,setOutputIndex:7})}}function P(s){let e,c,v,x,r,b,C,k,f,h,$,m,g,y,T,O,_,I,E,q,A,j,L,N,S,M,B,D,H,P,z,F,G,J,K,Q,R,U,V,W,X,Y,Z,tt,st,et,nt,lt,ct,ot,at,pt,ut,vt,wt,it,dt,xt,rt,bt,Ct,kt,ft,ht,$t,mt,gt,yt,Tt,Ot,_t,It,Et,qt,At,jt,Lt,Nt,St,Mt,Bt,Dt,Ht,Pt,zt,Ft,Gt,Jt,Kt,Qt,Rt,Ut,Vt,Wt,Xt,Yt,Zt,ts,ss,es,ns,ls,cs,os,as,ps,us,vs,ws,is,ds,xs,rs,bs,Cs,ks,fs,hs,$s,ms,gs,ys,Ts,Os,_s,Is,Es,qs,As,js,Ls,Ns,Ss,Ms,Bs,Ds,Hs,Ps,zs,Fs,Gs,Js,Ks,Qs,Rs,Us,Vs,Ws,Xs,Ys,Zs,te,se,ee,ne,le,ce,oe,ae,pe,ue,ve,we,ie,de,xe,re,be,Ce,ke,fe,he,$e,me,ge,ye,Te,Oe,_e,Ie,Ee,qe,Ae,je,Le,Ne,Se,Me,Be,De,He,Pe,ze,Fe,Ge,Je,Ke,Qe,Re,Ue,Ve,We,Xe,Ye,Ze,tn,sn,en,nn,ln,cn,on,an,pn,un,vn,wn,dn,xn,rn,bn,Cn,kn,fn,hn,$n,mn,gn,yn,Tn,On,_n,In,En,qn,An,jn,Ln,Nn,Sn,Mn,Bn,Dn,Hn,Pn,zn,Fn,Gn,Jn,Kn,Qn,Rn,Un,Vn,Wn,Xn,Yn,Zn,tl,sl,el,nl,ll,cl,ol,al,pl,ul,vl,wl,il,dl,xl,rl,bl,Cl,kl,fl,hl,$l,ml,gl,yl,Tl,Ol,_l,Il,El,ql,Al,jl,Ll,Nl,Sl,Ml,Bl,Dl,Hl,Pl,zl,Fl,Gl,Jl,Kl,Ql,Rl,Ul,Vl,Wl,Xl,Yl,Zl,tc,sc,ec,nc,lc,cc,oc,ac,pc,uc,vc,wc,ic,dc,xc,rc,bc,Cc,kc,fc,hc,$c,mc,gc,yc,Tc,Oc,_c,Ic,Ec,qc,Ac,jc,Lc,Nc,Sc,Mc,Bc,Dc,Hc,Pc,zc,Fc,Gc,Jc,Kc,Qc,Rc,Uc,Vc,Wc,Xc,Yc,Zc,to,so,eo,no,lo,co,oo,ao,po,uo,vo,wo,io,xo,ro,bo,Co,ko,fo,ho,$o,mo,go,yo,To,Oo,_o,Io,Eo,qo,Ao,jo,Lo,No,So,Mo,Bo,Do;return{c(){e=u("div"),c=u("table"),v=u("tr"),x=u("td"),r=u("button"),r.textContent="─",b=w(),C=u("td"),k=u("button"),k.textContent="━",f=w(),h=u("td"),$=u("button"),$.textContent="│",m=w(),g=u("td"),y=u("button"),y.textContent="┃",T=w(),O=u("td"),_=u("button"),_.textContent="┄",I=w(),E=u("td"),q=u("button"),q.textContent="┅",A=w(),j=u("td"),L=u("button"),L.textContent="┆",N=w(),S=u("td"),M=u("button"),M.textContent="┇",B=w(),D=u("td"),H=u("button"),H.textContent="┈",P=w(),z=u("td"),F=u("button"),F.textContent="┉",G=w(),J=u("td"),K=u("button"),K.textContent="┊",Q=w(),R=u("td"),U=u("button"),U.textContent="┋",V=w(),W=u("td"),X=u("button"),X.textContent="┌",Y=w(),Z=u("td"),tt=u("button"),tt.textContent="┍",st=w(),et=u("td"),nt=u("button"),nt.textContent="┎",lt=w(),ct=u("td"),ot=u("button"),ot.textContent="┏",at=w(),pt=u("tr"),ut=u("td"),vt=u("button"),vt.textContent="┐",wt=w(),it=u("td"),dt=u("button"),dt.textContent="┑",xt=w(),rt=u("td"),bt=u("button"),bt.textContent="┒",Ct=w(),kt=u("td"),ft=u("button"),ft.textContent="┓",ht=w(),$t=u("td"),mt=u("button"),mt.textContent="└",gt=w(),yt=u("td"),Tt=u("button"),Tt.textContent="┕",Ot=w(),_t=u("td"),It=u("button"),It.textContent="┖",Et=w(),qt=u("td"),At=u("button"),At.textContent="┗",jt=w(),Lt=u("td"),Nt=u("button"),Nt.textContent="┘",St=w(),Mt=u("td"),Bt=u("button"),Bt.textContent="┙",Dt=w(),Ht=u("td"),Pt=u("button"),Pt.textContent="┚",zt=w(),Ft=u("td"),Gt=u("button"),Gt.textContent="┛",Jt=w(),Kt=u("td"),Qt=u("button"),Qt.textContent="├",Rt=w(),Ut=u("td"),Vt=u("button"),Vt.textContent="┝",Wt=w(),Xt=u("td"),Yt=u("button"),Yt.textContent="┞",Zt=w(),ts=u("td"),ss=u("button"),ss.textContent="┟",es=w(),ns=u("tr"),ls=u("td"),cs=u("button"),cs.textContent="┠",os=w(),as=u("td"),ps=u("button"),ps.textContent="┡",us=w(),vs=u("td"),ws=u("button"),ws.textContent="┢",is=w(),ds=u("td"),xs=u("button"),xs.textContent="┣",rs=w(),bs=u("td"),Cs=u("button"),Cs.textContent="┤",ks=w(),fs=u("td"),hs=u("button"),hs.textContent="┥",$s=w(),ms=u("td"),gs=u("button"),gs.textContent="┦",ys=w(),Ts=u("td"),Os=u("button"),Os.textContent="┧",_s=w(),Is=u("td"),Es=u("button"),Es.textContent="┨",qs=w(),As=u("td"),js=u("button"),js.textContent="┩",Ls=w(),Ns=u("td"),Ss=u("button"),Ss.textContent="┪",Ms=w(),Bs=u("td"),Ds=u("button"),Ds.textContent="┫",Hs=w(),Ps=u("td"),zs=u("button"),zs.textContent="┬",Fs=w(),Gs=u("td"),Js=u("button"),Js.textContent="┭",Ks=w(),Qs=u("td"),Rs=u("button"),Rs.textContent="┮",Us=w(),Vs=u("td"),Ws=u("button"),Ws.textContent="┯",Xs=w(),Ys=u("tr"),Zs=u("td"),te=u("button"),te.textContent="┰",se=w(),ee=u("td"),ne=u("button"),ne.textContent="┱",le=w(),ce=u("td"),oe=u("button"),oe.textContent="┲",ae=w(),pe=u("td"),ue=u("button"),ue.textContent="┳",ve=w(),we=u("td"),ie=u("button"),ie.textContent="┴",de=w(),xe=u("td"),re=u("button"),re.textContent="┵",be=w(),Ce=u("td"),ke=u("button"),ke.textContent="┶",fe=w(),he=u("td"),$e=u("button"),$e.textContent="┷",me=w(),ge=u("td"),ye=u("button"),ye.textContent="┸",Te=w(),Oe=u("td"),_e=u("button"),_e.textContent="┹",Ie=w(),Ee=u("td"),qe=u("button"),qe.textContent="┺",Ae=w(),je=u("td"),Le=u("button"),Le.textContent="┻",Ne=w(),Se=u("td"),Me=u("button"),Me.textContent="┼",Be=w(),De=u("td"),He=u("button"),He.textContent="┽",Pe=w(),ze=u("td"),Fe=u("button"),Fe.textContent="┾",Ge=w(),Je=u("td"),Ke=u("button"),Ke.textContent="┿",Qe=w(),Re=u("tr"),Ue=u("td"),Ve=u("button"),Ve.textContent="╀",We=w(),Xe=u("td"),Ye=u("button"),Ye.textContent="╁",Ze=w(),tn=u("td"),sn=u("button"),sn.textContent="╂",en=w(),nn=u("td"),ln=u("button"),ln.textContent="╃",cn=w(),on=u("td"),an=u("button"),an.textContent="╄",pn=w(),un=u("td"),vn=u("button"),vn.textContent="╅",wn=w(),dn=u("td"),xn=u("button"),xn.textContent="╆",rn=w(),bn=u("td"),Cn=u("button"),Cn.textContent="╇",kn=w(),fn=u("td"),hn=u("button"),hn.textContent="╈",$n=w(),mn=u("td"),gn=u("button"),gn.textContent="╉",yn=w(),Tn=u("td"),On=u("button"),On.textContent="╊",_n=w(),In=u("td"),En=u("button"),En.textContent="╋",qn=w(),An=u("td"),jn=u("button"),jn.textContent="╌",Ln=w(),Nn=u("td"),Sn=u("button"),Sn.textContent="╍",Mn=w(),Bn=u("td"),Dn=u("button"),Dn.textContent="╎",Hn=w(),Pn=u("td"),zn=u("button"),zn.textContent="╏",Fn=w(),Gn=u("tr"),Jn=u("td"),Kn=u("button"),Kn.textContent="═",Qn=w(),Rn=u("td"),Un=u("button"),Un.textContent="║",Vn=w(),Wn=u("td"),Xn=u("button"),Xn.textContent="╒",Yn=w(),Zn=u("td"),tl=u("button"),tl.textContent="╓",sl=w(),el=u("td"),nl=u("button"),nl.textContent="╔",ll=w(),cl=u("td"),ol=u("button"),ol.textContent="╕",al=w(),pl=u("td"),ul=u("button"),ul.textContent="╖",vl=w(),wl=u("td"),il=u("button"),il.textContent="╗",dl=w(),xl=u("td"),rl=u("button"),rl.textContent="╘",bl=w(),Cl=u("td"),kl=u("button"),kl.textContent="╙",fl=w(),hl=u("td"),$l=u("button"),$l.textContent="╚",ml=w(),gl=u("td"),yl=u("button"),yl.textContent="╛",Tl=w(),Ol=u("td"),_l=u("button"),_l.textContent="╜",Il=w(),El=u("td"),ql=u("button"),ql.textContent="╝",Al=w(),jl=u("td"),Ll=u("button"),Ll.textContent="╞",Nl=w(),Sl=u("td"),Ml=u("button"),Ml.textContent="╟",Bl=w(),Dl=u("tr"),Hl=u("td"),Pl=u("button"),Pl.textContent="╠",zl=w(),Fl=u("td"),Gl=u("button"),Gl.textContent="╡",Jl=w(),Kl=u("td"),Ql=u("button"),Ql.textContent="╢",Rl=w(),Ul=u("td"),Vl=u("button"),Vl.textContent="╣",Wl=w(),Xl=u("td"),Yl=u("button"),Yl.textContent="╤",Zl=w(),tc=u("td"),sc=u("button"),sc.textContent="╥",ec=w(),nc=u("td"),lc=u("button"),lc.textContent="╦",cc=w(),oc=u("td"),ac=u("button"),ac.textContent="╧",pc=w(),uc=u("td"),vc=u("button"),vc.textContent="╨",wc=w(),ic=u("td"),dc=u("button"),dc.textContent="╩",xc=w(),rc=u("td"),bc=u("button"),bc.textContent="╪",Cc=w(),kc=u("td"),fc=u("button"),fc.textContent="╫",hc=w(),$c=u("td"),mc=u("button"),mc.textContent="╬",gc=w(),yc=u("td"),Tc=u("button"),Tc.textContent="╭",Oc=w(),_c=u("td"),Ic=u("button"),Ic.textContent="╮",Ec=w(),qc=u("td"),Ac=u("button"),Ac.textContent="╯",jc=w(),Lc=u("tr"),Nc=u("td"),Sc=u("button"),Sc.textContent="╰",Mc=w(),Bc=u("td"),Dc=u("button"),Dc.textContent="╱",Hc=w(),Pc=u("td"),zc=u("button"),zc.textContent="╲",Fc=w(),Gc=u("td"),Jc=u("button"),Jc.textContent="╳",Kc=w(),Qc=u("td"),Rc=u("button"),Rc.textContent="╴",Uc=w(),Vc=u("td"),Wc=u("button"),Wc.textContent="╵",Xc=w(),Yc=u("td"),Zc=u("button"),Zc.textContent="╶",to=w(),so=u("td"),eo=u("button"),eo.textContent="╷",no=w(),lo=u("td"),co=u("button"),co.textContent="╸",oo=w(),ao=u("td"),po=u("button"),po.textContent="╹",uo=w(),vo=u("td"),wo=u("button"),wo.textContent="╺",io=w(),xo=u("td"),ro=u("button"),ro.textContent="╻",bo=w(),Co=u("td"),ko=u("button"),ko.textContent="╼",fo=w(),ho=u("td"),$o=u("button"),$o.textContent="╽",mo=w(),go=u("td"),yo=u("button"),yo.textContent="╾",To=w(),Oo=u("td"),_o=u("button"),_o.textContent="╿",Io=w(),Eo=u("input"),qo=w(),Ao=u("div"),jo=u("button"),jo.textContent="←",Lo=w(),No=u("button"),No.textContent="↵",So=w(),Mo=u("div"),Mo.innerHTML="Click on button, press space to repeat character.<br/>\n    Type any text and press enter to insert text.",d(r,"class","svelte-12npsw4"),d(x,"class","svelte-12npsw4"),d(k,"class","svelte-12npsw4"),d(C,"class","svelte-12npsw4"),d($,"class","svelte-12npsw4"),d(h,"class","svelte-12npsw4"),d(y,"class","svelte-12npsw4"),d(g,"class","svelte-12npsw4"),d(_,"class","svelte-12npsw4"),d(O,"class","svelte-12npsw4"),d(q,"class","svelte-12npsw4"),d(E,"class","svelte-12npsw4"),d(L,"class","svelte-12npsw4"),d(j,"class","svelte-12npsw4"),d(M,"class","svelte-12npsw4"),d(S,"class","svelte-12npsw4"),d(H,"class","svelte-12npsw4"),d(D,"class","svelte-12npsw4"),d(F,"class","svelte-12npsw4"),d(z,"class","svelte-12npsw4"),d(K,"class","svelte-12npsw4"),d(J,"class","svelte-12npsw4"),d(U,"class","svelte-12npsw4"),d(R,"class","svelte-12npsw4"),d(X,"class","svelte-12npsw4"),d(W,"class","svelte-12npsw4"),d(tt,"class","svelte-12npsw4"),d(Z,"class","svelte-12npsw4"),d(nt,"class","svelte-12npsw4"),d(et,"class","svelte-12npsw4"),d(ot,"class","svelte-12npsw4"),d(ct,"class","svelte-12npsw4"),d(v,"class","svelte-12npsw4"),d(vt,"class","svelte-12npsw4"),d(ut,"class","svelte-12npsw4"),d(dt,"class","svelte-12npsw4"),d(it,"class","svelte-12npsw4"),d(bt,"class","svelte-12npsw4"),d(rt,"class","svelte-12npsw4"),d(ft,"class","svelte-12npsw4"),d(kt,"class","svelte-12npsw4"),d(mt,"class","svelte-12npsw4"),d($t,"class","svelte-12npsw4"),d(Tt,"class","svelte-12npsw4"),d(yt,"class","svelte-12npsw4"),d(It,"class","svelte-12npsw4"),d(_t,"class","svelte-12npsw4"),d(At,"class","svelte-12npsw4"),d(qt,"class","svelte-12npsw4"),d(Nt,"class","svelte-12npsw4"),d(Lt,"class","svelte-12npsw4"),d(Bt,"class","svelte-12npsw4"),d(Mt,"class","svelte-12npsw4"),d(Pt,"class","svelte-12npsw4"),d(Ht,"class","svelte-12npsw4"),d(Gt,"class","svelte-12npsw4"),d(Ft,"class","svelte-12npsw4"),d(Qt,"class","svelte-12npsw4"),d(Kt,"class","svelte-12npsw4"),d(Vt,"class","svelte-12npsw4"),d(Ut,"class","svelte-12npsw4"),d(Yt,"class","svelte-12npsw4"),d(Xt,"class","svelte-12npsw4"),d(ss,"class","svelte-12npsw4"),d(ts,"class","svelte-12npsw4"),d(pt,"class","svelte-12npsw4"),d(cs,"class","svelte-12npsw4"),d(ls,"class","svelte-12npsw4"),d(ps,"class","svelte-12npsw4"),d(as,"class","svelte-12npsw4"),d(ws,"class","svelte-12npsw4"),d(vs,"class","svelte-12npsw4"),d(xs,"class","svelte-12npsw4"),d(ds,"class","svelte-12npsw4"),d(Cs,"class","svelte-12npsw4"),d(bs,"class","svelte-12npsw4"),d(hs,"class","svelte-12npsw4"),d(fs,"class","svelte-12npsw4"),d(gs,"class","svelte-12npsw4"),d(ms,"class","svelte-12npsw4"),d(Os,"class","svelte-12npsw4"),d(Ts,"class","svelte-12npsw4"),d(Es,"class","svelte-12npsw4"),d(Is,"class","svelte-12npsw4"),d(js,"class","svelte-12npsw4"),d(As,"class","svelte-12npsw4"),d(Ss,"class","svelte-12npsw4"),d(Ns,"class","svelte-12npsw4"),d(Ds,"class","svelte-12npsw4"),d(Bs,"class","svelte-12npsw4"),d(zs,"class","svelte-12npsw4"),d(Ps,"class","svelte-12npsw4"),d(Js,"class","svelte-12npsw4"),d(Gs,"class","svelte-12npsw4"),d(Rs,"class","svelte-12npsw4"),d(Qs,"class","svelte-12npsw4"),d(Ws,"class","svelte-12npsw4"),d(Vs,"class","svelte-12npsw4"),d(ns,"class","svelte-12npsw4"),d(te,"class","svelte-12npsw4"),d(Zs,"class","svelte-12npsw4"),d(ne,"class","svelte-12npsw4"),d(ee,"class","svelte-12npsw4"),d(oe,"class","svelte-12npsw4"),d(ce,"class","svelte-12npsw4"),d(ue,"class","svelte-12npsw4"),d(pe,"class","svelte-12npsw4"),d(ie,"class","svelte-12npsw4"),d(we,"class","svelte-12npsw4"),d(re,"class","svelte-12npsw4"),d(xe,"class","svelte-12npsw4"),d(ke,"class","svelte-12npsw4"),d(Ce,"class","svelte-12npsw4"),d($e,"class","svelte-12npsw4"),d(he,"class","svelte-12npsw4"),d(ye,"class","svelte-12npsw4"),d(ge,"class","svelte-12npsw4"),d(_e,"class","svelte-12npsw4"),d(Oe,"class","svelte-12npsw4"),d(qe,"class","svelte-12npsw4"),d(Ee,"class","svelte-12npsw4"),d(Le,"class","svelte-12npsw4"),d(je,"class","svelte-12npsw4"),d(Me,"class","svelte-12npsw4"),d(Se,"class","svelte-12npsw4"),d(He,"class","svelte-12npsw4"),d(De,"class","svelte-12npsw4"),d(Fe,"class","svelte-12npsw4"),d(ze,"class","svelte-12npsw4"),d(Ke,"class","svelte-12npsw4"),d(Je,"class","svelte-12npsw4"),d(Ys,"class","svelte-12npsw4"),d(Ve,"class","svelte-12npsw4"),d(Ue,"class","svelte-12npsw4"),d(Ye,"class","svelte-12npsw4"),d(Xe,"class","svelte-12npsw4"),d(sn,"class","svelte-12npsw4"),d(tn,"class","svelte-12npsw4"),d(ln,"class","svelte-12npsw4"),d(nn,"class","svelte-12npsw4"),d(an,"class","svelte-12npsw4"),d(on,"class","svelte-12npsw4"),d(vn,"class","svelte-12npsw4"),d(un,"class","svelte-12npsw4"),d(xn,"class","svelte-12npsw4"),d(dn,"class","svelte-12npsw4"),d(Cn,"class","svelte-12npsw4"),d(bn,"class","svelte-12npsw4"),d(hn,"class","svelte-12npsw4"),d(fn,"class","svelte-12npsw4"),d(gn,"class","svelte-12npsw4"),d(mn,"class","svelte-12npsw4"),d(On,"class","svelte-12npsw4"),d(Tn,"class","svelte-12npsw4"),d(En,"class","svelte-12npsw4"),d(In,"class","svelte-12npsw4"),d(jn,"class","svelte-12npsw4"),d(An,"class","svelte-12npsw4"),d(Sn,"class","svelte-12npsw4"),d(Nn,"class","svelte-12npsw4"),d(Dn,"class","svelte-12npsw4"),d(Bn,"class","svelte-12npsw4"),d(zn,"class","svelte-12npsw4"),d(Pn,"class","svelte-12npsw4"),d(Re,"class","svelte-12npsw4"),d(Kn,"class","svelte-12npsw4"),d(Jn,"class","svelte-12npsw4"),d(Un,"class","svelte-12npsw4"),d(Rn,"class","svelte-12npsw4"),d(Xn,"class","svelte-12npsw4"),d(Wn,"class","svelte-12npsw4"),d(tl,"class","svelte-12npsw4"),d(Zn,"class","svelte-12npsw4"),d(nl,"class","svelte-12npsw4"),d(el,"class","svelte-12npsw4"),d(ol,"class","svelte-12npsw4"),d(cl,"class","svelte-12npsw4"),d(ul,"class","svelte-12npsw4"),d(pl,"class","svelte-12npsw4"),d(il,"class","svelte-12npsw4"),d(wl,"class","svelte-12npsw4"),d(rl,"class","svelte-12npsw4"),d(xl,"class","svelte-12npsw4"),d(kl,"class","svelte-12npsw4"),d(Cl,"class","svelte-12npsw4"),d($l,"class","svelte-12npsw4"),d(hl,"class","svelte-12npsw4"),d(yl,"class","svelte-12npsw4"),d(gl,"class","svelte-12npsw4"),d(_l,"class","svelte-12npsw4"),d(Ol,"class","svelte-12npsw4"),d(ql,"class","svelte-12npsw4"),d(El,"class","svelte-12npsw4"),d(Ll,"class","svelte-12npsw4"),d(jl,"class","svelte-12npsw4"),d(Ml,"class","svelte-12npsw4"),d(Sl,"class","svelte-12npsw4"),d(Gn,"class","svelte-12npsw4"),d(Pl,"class","svelte-12npsw4"),d(Hl,"class","svelte-12npsw4"),d(Gl,"class","svelte-12npsw4"),d(Fl,"class","svelte-12npsw4"),d(Ql,"class","svelte-12npsw4"),d(Kl,"class","svelte-12npsw4"),d(Vl,"class","svelte-12npsw4"),d(Ul,"class","svelte-12npsw4"),d(Yl,"class","svelte-12npsw4"),d(Xl,"class","svelte-12npsw4"),d(sc,"class","svelte-12npsw4"),d(tc,"class","svelte-12npsw4"),d(lc,"class","svelte-12npsw4"),d(nc,"class","svelte-12npsw4"),d(ac,"class","svelte-12npsw4"),d(oc,"class","svelte-12npsw4"),d(vc,"class","svelte-12npsw4"),d(uc,"class","svelte-12npsw4"),d(dc,"class","svelte-12npsw4"),d(ic,"class","svelte-12npsw4"),d(bc,"class","svelte-12npsw4"),d(rc,"class","svelte-12npsw4"),d(fc,"class","svelte-12npsw4"),d(kc,"class","svelte-12npsw4"),d(mc,"class","svelte-12npsw4"),d($c,"class","svelte-12npsw4"),d(Tc,"class","svelte-12npsw4"),d(yc,"class","svelte-12npsw4"),d(Ic,"class","svelte-12npsw4"),d(_c,"class","svelte-12npsw4"),d(Ac,"class","svelte-12npsw4"),d(qc,"class","svelte-12npsw4"),d(Dl,"class","svelte-12npsw4"),d(Sc,"class","svelte-12npsw4"),d(Nc,"class","svelte-12npsw4"),d(Dc,"class","svelte-12npsw4"),d(Bc,"class","svelte-12npsw4"),d(zc,"class","svelte-12npsw4"),d(Pc,"class","svelte-12npsw4"),d(Jc,"class","svelte-12npsw4"),d(Gc,"class","svelte-12npsw4"),d(Rc,"class","svelte-12npsw4"),d(Qc,"class","svelte-12npsw4"),d(Wc,"class","svelte-12npsw4"),d(Vc,"class","svelte-12npsw4"),d(Zc,"class","svelte-12npsw4"),d(Yc,"class","svelte-12npsw4"),d(eo,"class","svelte-12npsw4"),d(so,"class","svelte-12npsw4"),d(co,"class","svelte-12npsw4"),d(lo,"class","svelte-12npsw4"),d(po,"class","svelte-12npsw4"),d(ao,"class","svelte-12npsw4"),d(wo,"class","svelte-12npsw4"),d(vo,"class","svelte-12npsw4"),d(ro,"class","svelte-12npsw4"),d(xo,"class","svelte-12npsw4"),d(ko,"class","svelte-12npsw4"),d(Co,"class","svelte-12npsw4"),d($o,"class","svelte-12npsw4"),d(ho,"class","svelte-12npsw4"),d(yo,"class","svelte-12npsw4"),d(go,"class","svelte-12npsw4"),d(_o,"class","svelte-12npsw4"),d(Oo,"class","svelte-12npsw4"),d(Lc,"class","svelte-12npsw4"),d(c,"class","svelte-12npsw4"),d(Eo,"type","text"),d(Eo,"name","text");d(Eo,"id","text"),d(Eo,"placeholder","Text"),d(Eo,"class","svelte-12npsw4"),d(jo,"class","svelte-12npsw4"),d(No,"class","svelte-12npsw4"),d(Ao,"class","btn-container svelte-12npsw4"),d(Mo,"class","help-text svelte-12npsw4"),d(e,"class","container svelte-12npsw4")},m(t,n){a(t,e,n),o(e,c),o(c,v),o(v,x),o(x,r),o(v,b),o(v,C),o(C,k),o(v,f),o(v,h),o(h,$),o(v,m),o(v,g),o(g,y),o(v,T),o(v,O),o(O,_),o(v,I),o(v,E),o(E,q),o(v,A),o(v,j),o(j,L),o(v,N),o(v,S),o(S,M),o(v,B),o(v,D),o(D,H),o(v,P),o(v,z),o(z,F),o(v,G),o(v,J),o(J,K),o(v,Q),o(v,R),o(R,U),o(v,V),o(v,W),o(W,X),o(v,Y),o(v,Z),o(Z,tt),o(v,st),o(v,et),o(et,nt),o(v,lt),o(v,ct),o(ct,ot),o(c,at),o(c,pt),o(pt,ut),o(ut,vt),o(pt,wt),o(pt,it),o(it,dt),o(pt,xt),o(pt,rt),o(rt,bt),o(pt,Ct),o(pt,kt),o(kt,ft),o(pt,ht),o(pt,$t),o($t,mt),o(pt,gt),o(pt,yt),o(yt,Tt),o(pt,Ot),o(pt,_t),o(_t,It),o(pt,Et),o(pt,qt),o(qt,At),o(pt,jt),o(pt,Lt),o(Lt,Nt),o(pt,St),o(pt,Mt),o(Mt,Bt),o(pt,Dt),o(pt,Ht),o(Ht,Pt),o(pt,zt),o(pt,Ft),o(Ft,Gt),o(pt,Jt),o(pt,Kt),o(Kt,Qt),o(pt,Rt),o(pt,Ut),o(Ut,Vt),o(pt,Wt),o(pt,Xt),o(Xt,Yt),o(pt,Zt),o(pt,ts),o(ts,ss),o(c,es),o(c,ns),o(ns,ls),o(ls,cs),o(ns,os),o(ns,as),o(as,ps),o(ns,us),o(ns,vs),o(vs,ws),o(ns,is),o(ns,ds),o(ds,xs),o(ns,rs),o(ns,bs),o(bs,Cs),o(ns,ks),o(ns,fs),o(fs,hs),o(ns,$s),o(ns,ms),o(ms,gs),o(ns,ys),o(ns,Ts),o(Ts,Os),o(ns,_s),o(ns,Is),o(Is,Es),o(ns,qs),o(ns,As),o(As,js),o(ns,Ls),o(ns,Ns),o(Ns,Ss),o(ns,Ms),o(ns,Bs),o(Bs,Ds),o(ns,Hs),o(ns,Ps),o(Ps,zs),o(ns,Fs),o(ns,Gs),o(Gs,Js),o(ns,Ks),o(ns,Qs),o(Qs,Rs),o(ns,Us),o(ns,Vs),o(Vs,Ws),o(c,Xs),o(c,Ys),o(Ys,Zs),o(Zs,te),o(Ys,se),o(Ys,ee),o(ee,ne),o(Ys,le),o(Ys,ce),o(ce,oe),o(Ys,ae),o(Ys,pe),o(pe,ue),o(Ys,ve),o(Ys,we),o(we,ie),o(Ys,de),o(Ys,xe),o(xe,re),o(Ys,be),o(Ys,Ce),o(Ce,ke),o(Ys,fe),o(Ys,he),o(he,$e),o(Ys,me),o(Ys,ge),o(ge,ye),o(Ys,Te),o(Ys,Oe),o(Oe,_e),o(Ys,Ie),o(Ys,Ee),o(Ee,qe),o(Ys,Ae),o(Ys,je),o(je,Le),o(Ys,Ne),o(Ys,Se),o(Se,Me),o(Ys,Be),o(Ys,De),o(De,He),o(Ys,Pe),o(Ys,ze),o(ze,Fe),o(Ys,Ge),o(Ys,Je),o(Je,Ke),o(c,Qe),o(c,Re),o(Re,Ue),o(Ue,Ve),o(Re,We),o(Re,Xe),o(Xe,Ye),o(Re,Ze),o(Re,tn),o(tn,sn),o(Re,en),o(Re,nn),o(nn,ln),o(Re,cn),o(Re,on),o(on,an),o(Re,pn),o(Re,un),o(un,vn),o(Re,wn),o(Re,dn),o(dn,xn),o(Re,rn),o(Re,bn),o(bn,Cn),o(Re,kn),o(Re,fn),o(fn,hn),o(Re,$n),o(Re,mn),o(mn,gn),o(Re,yn),o(Re,Tn),o(Tn,On),o(Re,_n),o(Re,In),o(In,En),o(Re,qn),o(Re,An),o(An,jn),o(Re,Ln),o(Re,Nn),o(Nn,Sn),o(Re,Mn),o(Re,Bn),o(Bn,Dn),o(Re,Hn),o(Re,Pn),o(Pn,zn),o(c,Fn),o(c,Gn),o(Gn,Jn),o(Jn,Kn),o(Gn,Qn),o(Gn,Rn),o(Rn,Un),o(Gn,Vn),o(Gn,Wn),o(Wn,Xn),o(Gn,Yn),o(Gn,Zn),o(Zn,tl),o(Gn,sl),o(Gn,el),o(el,nl),o(Gn,ll),o(Gn,cl),o(cl,ol),o(Gn,al),o(Gn,pl),o(pl,ul),o(Gn,vl),o(Gn,wl),o(wl,il),o(Gn,dl),o(Gn,xl),o(xl,rl),o(Gn,bl),o(Gn,Cl),o(Cl,kl),o(Gn,fl),o(Gn,hl),o(hl,$l),o(Gn,ml),o(Gn,gl),o(gl,yl),o(Gn,Tl),o(Gn,Ol),o(Ol,_l),o(Gn,Il),o(Gn,El),o(El,ql),o(Gn,Al),o(Gn,jl),o(jl,Ll),o(Gn,Nl),o(Gn,Sl),o(Sl,Ml),o(c,Bl),o(c,Dl),o(Dl,Hl),o(Hl,Pl),o(Dl,zl),o(Dl,Fl),o(Fl,Gl),o(Dl,Jl),o(Dl,Kl),o(Kl,Ql),o(Dl,Rl),o(Dl,Ul),o(Ul,Vl),o(Dl,Wl),o(Dl,Xl),o(Xl,Yl),o(Dl,Zl),o(Dl,tc),o(tc,sc),o(Dl,ec),o(Dl,nc),o(nc,lc),o(Dl,cc),o(Dl,oc),o(oc,ac),o(Dl,pc),o(Dl,uc),o(uc,vc),o(Dl,wc),o(Dl,ic),o(ic,dc),o(Dl,xc),o(Dl,rc),o(rc,bc),o(Dl,Cc),o(Dl,kc),o(kc,fc),o(Dl,hc),o(Dl,$c),o($c,mc),o(Dl,gc),o(Dl,yc),o(yc,Tc),o(Dl,Oc),o(Dl,_c),o(_c,Ic),o(Dl,Ec),o(Dl,qc),o(qc,Ac),o(c,jc),o(c,Lc),o(Lc,Nc),o(Nc,Sc),o(Lc,Mc),o(Lc,Bc),o(Bc,Dc),o(Lc,Hc),o(Lc,Pc),o(Pc,zc),o(Lc,Fc),o(Lc,Gc),o(Gc,Jc),o(Lc,Kc),o(Lc,Qc),o(Qc,Rc),o(Lc,Uc),o(Lc,Vc),o(Vc,Wc),o(Lc,Xc),o(Lc,Yc),o(Yc,Zc),o(Lc,to),o(Lc,so),o(so,eo),o(Lc,no),o(Lc,lo),o(lo,co),o(Lc,oo),o(Lc,ao),o(ao,po),o(Lc,uo),o(Lc,vo),o(vo,wo),o(Lc,io),o(Lc,xo),o(xo,ro),o(Lc,bo),o(Lc,Co),o(Co,ko),o(Lc,fo),o(Lc,ho),o(ho,$o),o(Lc,mo),o(Lc,go),o(go,yo),o(Lc,To),o(Lc,Oo),o(Oo,_o),o(e,Io),o(e,Eo),s[8](Eo),o(e,qo),o(e,Ao),o(Ao,jo),o(Ao,Lo),o(Ao,No),o(e,So),o(e,Mo),Bo||(Do=[i(r,"click",s[3]),i(k,"click",s[3]),i($,"click",s[3]),i(y,"click",s[3]),i(_,"click",s[3]),i(q,"click",s[3]),i(L,"click",s[3]),i(M,"click",s[3]),i(H,"click",s[3]),i(F,"click",s[3]),i(K,"click",s[3]),i(U,"click",s[3]),i(X,"click",s[3]),i(tt,"click",s[3]),i(nt,"click",s[3]),i(ot,"click",s[3]),i(vt,"click",s[3]),i(dt,"click",s[3]),i(bt,"click",s[3]),i(ft,"click",s[3]),i(mt,"click",s[3]),i(Tt,"click",s[3]),i(It,"click",s[3]),i(At,"click",s[3]),i(Nt,"click",s[3]),i(Bt,"click",s[3]),i(Pt,"click",s[3]),i(Gt,"click",s[3]),i(Qt,"click",s[3]),i(Vt,"click",s[3]),i(Yt,"click",s[3]),i(ss,"click",s[3]),i(cs,"click",s[3]),i(ps,"click",s[3]),i(ws,"click",s[3]),i(xs,"click",s[3]),i(Cs,"click",s[3]),i(hs,"click",s[3]),i(gs,"click",s[3]),i(Os,"click",s[3]),i(Es,"click",s[3]),i(js,"click",s[3]),i(Ss,"click",s[3]),i(Ds,"click",s[3]),i(zs,"click",s[3]),i(Js,"click",s[3]),i(Rs,"click",s[3]),i(Ws,"click",s[3]),i(te,"click",s[3]),i(ne,"click",s[3]),i(oe,"click",s[3]),i(ue,"click",s[3]),i(ie,"click",s[3]),i(re,"click",s[3]),i(ke,"click",s[3]),i($e,"click",s[3]),i(ye,"click",s[3]),i(_e,"click",s[3]),i(qe,"click",s[3]),i(Le,"click",s[3]),i(Me,"click",s[3]),i(He,"click",s[3]),i(Fe,"click",s[3]),i(Ke,"click",s[3]),i(Ve,"click",s[3]),i(Ye,"click",s[3]),i(sn,"click",s[3]),i(ln,"click",s[3]),i(an,"click",s[3]),i(vn,"click",s[3]),i(xn,"click",s[3]),i(Cn,"click",s[3]),i(hn,"click",s[3]),i(gn,"click",s[3]),i(On,"click",s[3]),i(En,"click",s[3]),i(jn,"click",s[3]),i(Sn,"click",s[3]),i(Dn,"click",s[3]),i(zn,"click",s[3]),i(Kn,"click",s[3]),i(Un,"click",s[3]),i(Xn,"click",s[3]),i(tl,"click",s[3]),i(nl,"click",s[3]),i(ol,"click",s[3]),i(ul,"click",s[3]),i(il,"click",s[3]),i(rl,"click",s[3]),i(kl,"click",s[3]),i($l,"click",s[3]),i(yl,"click",s[3]),i(_l,"click",s[3]),i(ql,"click",s[3]),i(Ll,"click",s[3]),i(Ml,"click",s[3]),i(Pl,"click",s[3]),i(Gl,"click",s[3]),i(Ql,"click",s[3]),i(Vl,"click",s[3]),i(Yl,"click",s[3]),i(sc,"click",s[3]),i(lc,"click",s[3]),i(ac,"click",s[3]),i(vc,"click",s[3]),i(dc,"click",s[3]),i(bc,"click",s[3]),i(fc,"click",s[3]),i(mc,"click",s[3]),i(Tc,"click",s[3]),i(Ic,"click",s[3]),i(Ac,"click",s[3]),i(Sc,"click",s[3]),i(Dc,"click",s[3]),i(zc,"click",s[3]),i(Jc,"click",s[3]),i(Rc,"click",s[3]),i(Wc,"click",s[3]),i(Zc,"click",s[3]),i(eo,"click",s[3]),i(co,"click",s[3]),i(po,"click",s[3]),i(wo,"click",s[3]),i(ro,"click",s[3]),i(ko,"click",s[3]),i($o,"click",s[3]),i(yo,"click",s[3]),i(_o,"click",s[3]),i(Eo,"keypress",s[4]),i(jo,"click",(function(){l(s[1])&&s[1].apply(this,arguments)})),i(No,"click",s[9]),i(e,"submit",s[4])],Bo=!0)},p(t,[e]){s=t},i:t,o:t,d(t){t&&p(e),s[8](null),Bo=!1,n(Do)}}}function z(t,s,e){let n,{appendChar:l}=s,{deleteChar:c}=s,{outputIndex:o}=s,{setOutputIndex:a}=s,{outputText:p}=s;return t.$$set=t=>{"appendChar"in t&&e(0,l=t.appendChar),"deleteChar"in t&&e(1,c=t.deleteChar),"outputIndex"in t&&e(5,o=t.outputIndex),"setOutputIndex"in t&&e(6,a=t.setOutputIndex),"outputText"in t&&e(7,p=t.outputText)},[l,c,n,function(t){t.preventDefault(),l(t.target.innerText),o!=p.length&&-1!=o&&a(o+1)},function(t){13===t.charCode&&(l(n.value),e(2,n.value="",n))},o,a,p,function(t){k[t?"unshift":"push"]((()=>{n=t,e(2,n)}))},()=>{l("\n")}]}class F extends M{constructor(t){super(),S(this,t,z,P,c,{appendChar:0,deleteChar:1,outputIndex:5,setOutputIndex:6,outputText:7})}}function G(t){let s,e,n,l,c;return e=new F({props:{appendChar:t[2],deleteChar:t[3],outputIndex:t[1],setOutputIndex:t[4],outputText:t[0]}}),l=new H({props:{outputText:t[0],outputIndex:t[1],setOutputText:t[5],setOutputIndex:t[4]}}),{c(){s=u("main"),A(e.$$.fragment),n=w(),A(l.$$.fragment),d(s,"class","svelte-1i2ud2l")},m(t,p){a(t,s,p),j(e,s,null),o(s,n),j(l,s,null),c=!0},p(t,[s]){const n={};2&s&&(n.outputIndex=t[1]),1&s&&(n.outputText=t[0]),e.$set(n);const c={};1&s&&(c.outputText=t[0]),2&s&&(c.outputIndex=t[1]),l.$set(c)},i(t){c||(E(e.$$.fragment,t),E(l.$$.fragment,t),c=!0)},o(t){q(e.$$.fragment,t),q(l.$$.fragment,t),c=!1},d(t){t&&p(s),L(e),L(l)}}}function J(t,s,e){let n="",l=-1;return[n,l,function(t){e(0,l<0?n+=t:n=n.slice(0,l)+t+n.slice(l)),e(1,l+=t.length)},function(){e(0,n=l<0?n.slice(0,-1):n.slice(0,l-1)+n.slice(l))},function(t){e(1,l=t)},function(t){e(0,n=t)}]}return new class extends M{constructor(t){super(),S(this,t,J,G,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
