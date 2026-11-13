(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="170",Lu=0,Cc=1,Iu=2,Ah=1,Rh=2,Pn=3,Fn=0,Be=1,Ve=2,Qn=0,Wi=1,qo=2,Pc=3,Lc=4,Du=5,di=100,Nu=101,Uu=102,Fu=103,Ou=104,Bu=200,zu=201,ku=202,Hu=203,Yo=204,jo=205,Vu=206,Gu=207,Wu=208,Xu=209,qu=210,Yu=211,ju=212,Ku=213,$u=214,Ko=0,$o=1,Zo=2,$i=3,Jo=4,Qo=5,ta=6,ea=7,Ya=0,Zu=1,Ju=2,Nn=0,Qu=1,tf=2,ef=3,nf=4,sf=5,rf=6,of=7,Ic="attached",af="detached",Ch=300,Zi=301,Ji=302,na=303,ia=304,Yr=306,mi=1e3,Zn=1001,Gr=1002,De=1003,Ph=1004,Ls=1005,Ye=1006,Fr=1007,In=1008,On=1009,Lh=1010,Ih=1011,zs=1012,ja=1013,gi=1014,ln=1015,Ys=1016,Ka=1017,$a=1018,Qi=1020,Dh=35902,Nh=1021,Uh=1022,je=1023,Fh=1024,Oh=1025,Xi=1026,ts=1027,Za=1028,Ja=1029,Bh=1030,Qa=1031,tc=1033,Or=33776,Br=33777,zr=33778,kr=33779,sa=35840,ra=35841,oa=35842,aa=35843,ca=36196,la=37492,ha=37496,ua=37808,fa=37809,da=37810,pa=37811,ma=37812,ga=37813,_a=37814,xa=37815,va=37816,Ma=37817,ya=37818,Sa=37819,ba=37820,Ea=37821,Hr=36492,Ta=36494,wa=36495,zh=36283,Aa=36284,Ra=36285,Ca=36286,ks=2300,Hs=2301,no=2302,Dc=2400,Nc=2401,Uc=2402,cf=2500,lf=0,kh=1,Pa=2,hf=3200,uf=3201,jr=0,ff=1,Kn="",Se="srgb",ze="srgb-linear",Kr="linear",he="srgb",yi=7680,Fc=519,df=512,pf=513,mf=514,Hh=515,gf=516,_f=517,xf=518,vf=519,La=35044,Oc="300 es",Dn=2e3,Wr=2001;class as{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bc=1234567;const qi=Math.PI/180,es=180/Math.PI;function en(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Re(s,t,e){return Math.max(t,Math.min(e,s))}function ec(s,t){return(s%t+t)%t}function Mf(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function yf(s,t,e){return s!==t?(e-s)/(t-s):0}function Us(s,t,e){return(1-e)*s+e*t}function Sf(s,t,e,n){return Us(s,t,1-Math.exp(-e*n))}function bf(s,t=1){return t-Math.abs(ec(s,t*2)-t)}function Ef(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Tf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function wf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Af(s,t){return s+Math.random()*(t-s)}function Rf(s){return s*(.5-Math.random())}function Cf(s){s!==void 0&&(Bc=s);let t=Bc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pf(s){return s*qi}function Lf(s){return s*es}function If(s){return(s&s-1)===0&&s!==0}function Df(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Nf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Uf(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function cn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vh={DEG2RAD:qi,RAD2DEG:es,generateUUID:en,clamp:Re,euclideanModulo:ec,mapLinear:Mf,inverseLerp:yf,lerp:Us,damp:Sf,pingpong:bf,smoothstep:Ef,smootherstep:Tf,randInt:wf,randFloat:Af,randFloatSpread:Rf,seededRandom:Cf,degToRad:Pf,radToDeg:Lf,isPowerOfTwo:If,ceilPowerOfTwo:Df,floorPowerOfTwo:Nf,setQuaternionFromProperEuler:Uf,normalize:ce,denormalize:cn};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,i,r,o,a,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],x=i[1],v=i[4],y=i[7],P=i[2],A=i[5],T=i[8];return r[0]=o*_+a*x+c*P,r[3]=o*p+a*v+c*A,r[6]=o*m+a*y+c*T,r[1]=l*_+h*x+u*P,r[4]=l*p+h*v+u*A,r[7]=l*m+h*y+u*T,r[2]=f*_+d*x+g*P,r[5]=f*p+d*v+g*A,r[8]=f*m+d*y+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(io.makeScale(t,e)),this}rotate(t){return this.premultiply(io.makeRotation(-t)),this}translate(t,e){return this.premultiply(io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const io=new qt;function Gh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Vs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ff(){const s=Vs("canvas");return s.style.display="block",s}const zc={};function Is(s){s in zc||(zc[s]=!0,console.warn(s))}function Of(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Bf(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zf(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:ze,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?Kr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Un(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const kc=[.64,.33,.3,.6,.15,.06],Hc=[.2126,.7152,.0722],Vc=[.3127,.329],Gc=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[ze]:{primaries:kc,whitePoint:Vc,transfer:Kr,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:Hc,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:kc,whitePoint:Vc,transfer:he,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:Hc,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}});let Si;class kf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Si===void 0&&(Si=Vs("canvas")),Si.width=t.width,Si.height=t.height;const n=Si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Un(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hf=0;class Wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=en(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(so(i[o].image)):r.push(so(i[o]))}else r=so(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function so(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?kf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vf=0;class be extends as{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=Zn,i=Zn,r=Ye,o=In,a=je,c=On,l=be.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=en(),this.name="",this.source=new Wh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mi:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case Gr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mi:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case Gr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=Ch;be.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,y=(d+1)/2,P=(m+1)/2,A=(h+f)/4,T=(u+_)/4,L=(g+p)/4;return v>y&&v>P?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=T/n):y>P?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=L/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=T/r,i=L/r),this.set(n,i,r,e),this}let x=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gf extends as{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends Gf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xh extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wf extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ze{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let p=1-a;const m=c*f+l*d+h*g+u*_,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const P=Math.sqrt(v),A=Math.atan2(P,m*x);p=Math.sin(p*A)/P,a=Math.sin(a*A)/P}const y=a*x;if(c=c*p+f*y,l=l*p+d*y,h=h*p+g*y,u=u*p+_*y,p===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ro.copy(this).projectOnVector(t),this.sub(ro)}reflect(t){return this.sub(ro.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new I,Xc=new Ze;class gn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(t.matrixWorld),this.union(Zs)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),Js.subVectors(this.max,ms),bi.subVectors(t.a,ms),Ei.subVectors(t.b,ms),Ti.subVectors(t.c,ms),kn.subVectors(Ei,bi),Hn.subVectors(Ti,Ei),ii.subVectors(bi,Ti);let e=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-ii.z,ii.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,ii.z,0,-ii.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-ii.y,ii.x,0];return!oo(e,bi,Ei,Ti,Js)||(e=[1,0,0,0,1,0,0,0,1],!oo(e,bi,Ei,Ti,Js))?!1:(Qs.crossVectors(kn,Hn),e=[Qs.x,Qs.y,Qs.z],oo(e,bi,Ei,Ti,Js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new I,new I,new I,new I,new I,new I,new I,new I],rn=new I,Zs=new gn,bi=new I,Ei=new I,Ti=new I,kn=new I,Hn=new I,ii=new I,ms=new I,Js=new I,Qs=new I,si=new I;function oo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){si.fromArray(s,r);const a=i.x*Math.abs(si.x)+i.y*Math.abs(si.y)+i.z*Math.abs(si.z),c=t.dot(si),l=e.dot(si),h=n.dot(si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Xf=new gn,gs=new I,ao=new I;class _n{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(gs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ao.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(ao)),this.expandByPoint(gs.copy(t.center).sub(ao))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new I,co=new I,tr=new I,Vn=new I,lo=new I,er=new I,ho=new I;class $r{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){co.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(co);const r=t.distanceTo(e)*.5,o=-this.direction.dot(tr),a=Vn.dot(this.direction),c=-Vn.dot(tr),l=Vn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(co).addScaledVector(tr,f),d}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),i=En.dot(En)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,i,r){lo.subVectors(e,t),er.subVectors(n,t),ho.crossVectors(lo,er);let o=this.direction.dot(ho),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);const c=a*this.direction.dot(er.crossVectors(Vn,er));if(c<0)return null;const l=a*this.direction.dot(lo.cross(Vn));if(l<0||c+l>o)return null;const h=-a*Vn.dot(ho);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(t,e,n,i,r,o,a,c,l,h,u,f,d,g,_,p){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,d,g,_,p)}set(t,e,n,i,r,o,a,c,l,h,u,f,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/wi.setFromMatrixColumn(t,0).length(),r=1/wi.setFromMatrixColumn(t,1).length(),o=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qf,t,Yf)}lookAt(t,e,n){const i=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Gn.crossVectors(n,We),Gn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Gn.crossVectors(n,We)),Gn.normalize(),nr.crossVectors(We,Gn),i[0]=Gn.x,i[4]=nr.x,i[8]=We.x,i[1]=Gn.y,i[5]=nr.y,i[9]=We.y,i[2]=Gn.z,i[6]=nr.z,i[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],x=n[3],v=n[7],y=n[11],P=n[15],A=i[0],T=i[4],L=i[8],b=i[12],S=i[1],C=i[5],F=i[9],U=i[13],H=i[2],q=i[6],z=i[10],Y=i[14],k=i[3],$=i[7],ct=i[11],pt=i[15];return r[0]=o*A+a*S+c*H+l*k,r[4]=o*T+a*C+c*q+l*$,r[8]=o*L+a*F+c*z+l*ct,r[12]=o*b+a*U+c*Y+l*pt,r[1]=h*A+u*S+f*H+d*k,r[5]=h*T+u*C+f*q+d*$,r[9]=h*L+u*F+f*z+d*ct,r[13]=h*b+u*U+f*Y+d*pt,r[2]=g*A+_*S+p*H+m*k,r[6]=g*T+_*C+p*q+m*$,r[10]=g*L+_*F+p*z+m*ct,r[14]=g*b+_*U+p*Y+m*pt,r[3]=x*A+v*S+y*H+P*k,r[7]=x*T+v*C+y*q+P*$,r[11]=x*L+v*F+y*z+P*ct,r[15]=x*b+v*U+y*Y+P*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+p*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+m*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],x=u*p*l-_*f*l+_*c*d-a*p*d-u*c*m+a*f*m,v=g*f*l-h*p*l-g*c*d+o*p*d+h*c*m-o*f*m,y=h*_*l-g*u*l+g*a*d-o*_*d-h*a*m+o*u*m,P=g*u*c-h*_*c-g*a*f+o*_*f+h*a*p-o*u*p,A=e*x+n*v+i*y+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=x*T,t[1]=(_*f*r-u*p*r-_*i*d+n*p*d+u*i*m-n*f*m)*T,t[2]=(a*p*r-_*c*r+_*i*l-n*p*l-a*i*m+n*c*m)*T,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*T,t[4]=v*T,t[5]=(h*p*r-g*f*r+g*i*d-e*p*d-h*i*m+e*f*m)*T,t[6]=(g*c*r-o*p*r-g*i*l+e*p*l+o*i*m-e*c*m)*T,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*d+e*c*d)*T,t[8]=y*T,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*m-e*u*m)*T,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*m+e*a*m)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*T,t[12]=P*T,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*p+e*u*p)*T,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*p-e*a*p)*T,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,p=o*u,m=a*u,x=c*l,v=c*h,y=c*u,P=n.x,A=n.y,T=n.z;return i[0]=(1-(_+m))*P,i[1]=(d+y)*P,i[2]=(g-v)*P,i[3]=0,i[4]=(d-y)*A,i[5]=(1-(f+m))*A,i[6]=(p+x)*A,i[7]=0,i[8]=(g+v)*T,i[9]=(p-x)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=wi.set(i[0],i[1],i[2]).length();const o=wi.set(i[4],i[5],i[6]).length(),a=wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],on.copy(this);const l=1/r,h=1/o,u=1/a;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Dn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(a===Dn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Wr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Dn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*l,d=(n+i)*h;let g,_;if(a===Dn)g=(o+r)*u,_=-2*u;else if(a===Wr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new I,on=new zt,qf=new I(0,0,0),Yf=new I(1,1,1),Gn=new I,nr=new I,We=new I,qc=new zt,Yc=new Ze;class un{constructor(t=0,e=0,n=0,i=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class qh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jf=0;const jc=new I,Ai=new Ze,Tn=new zt,ir=new I,_s=new I,Kf=new I,$f=new Ze,Kc=new I(1,0,0),$c=new I(0,1,0),Zc=new I(0,0,1),Jc={type:"added"},Zf={type:"removed"},Ri={type:"childadded",child:null},uo={type:"childremoved",child:null};class me extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=en(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new I,e=new un,n=new Ze,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new qt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Kc,t)}rotateY(t){return this.rotateOnAxis($c,t)}rotateZ(t){return this.rotateOnAxis(Zc,t)}translateOnAxis(t,e){return jc.copy(t).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kc,t)}translateY(t){return this.translateOnAxis($c,t)}translateZ(t){return this.translateOnAxis(Zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ir.copy(t):ir.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(_s,ir,this.up):Tn.lookAt(ir,_s,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zf),uo.child=t,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,$f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}me.DEFAULT_UP=new I(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new I,wn=new I,fo=new I,An=new I,Ci=new I,Pi=new I,Qc=new I,po=new I,mo=new I,go=new I,_o=new ee,xo=new ee,vo=new ee;class qe{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),an.subVectors(t,e),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){an.subVectors(i,e),wn.subVectors(n,e),fo.subVectors(t,e);const o=an.dot(an),a=an.dot(wn),c=an.dot(fo),l=wn.dot(wn),h=wn.dot(fo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,An.x),c.addScaledVector(o,An.y),c.addScaledVector(a,An.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return _o.setScalar(0),xo.setScalar(0),vo.setScalar(0),_o.fromBufferAttribute(t,e),xo.fromBufferAttribute(t,n),vo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(_o,r.x),o.addScaledVector(xo,r.y),o.addScaledVector(vo,r.z),o}static isFrontFacing(t,e,n,i){return an.subVectors(n,e),wn.subVectors(t,e),an.cross(wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),an.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Ci.subVectors(i,n),Pi.subVectors(r,n),po.subVectors(t,n);const c=Ci.dot(po),l=Pi.dot(po);if(c<=0&&l<=0)return e.copy(n);mo.subVectors(t,i);const h=Ci.dot(mo),u=Pi.dot(mo);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ci,o);go.subVectors(t,r);const d=Ci.dot(go),g=Pi.dot(go);if(g>=0&&d<=g)return e.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Pi,a);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Qc.subVectors(r,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Qc,a);const m=1/(p+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(Ci,o).addScaledVector(Pi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function Mo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=ec(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Mo(o,r,t+1/3),this.g=Mo(o,r,t),this.b=Mo(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const n=Yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return Jt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Re(Le.r*255,0,255))*65536+Math.round(Re(Le.g*255,0,255))*256+Math.round(Re(Le.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,i=Le.g,r=Le.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Se){Jt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,i=Le.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(sr);const n=Us(Wn.h,sr.h,e),i=Us(Wn.s,sr.s,e),r=Us(Wn.l,sr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new wt;wt.NAMES=Yh;let Jf=0;class Ke extends as{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=en(),this.name="",this.blending=Wi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=jo,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yo&&(n.blendSrc=this.blendSrc),this.blendDst!==jo&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Oe extends Ke{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new I,rr=new ht;class oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=La,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rr.fromBufferAttribute(this,e),rr.applyMatrix3(t),this.setXY(e,rr.x,rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==La&&(t.usage=this.usage),t}}class jh extends oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kh extends oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Qf=0;const Qe=new zt,yo=new me,Li=new I,Xe=new gn,xs=new gn,Ae=new I;class _e extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=en(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gh(t)?Kh:jh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return yo.lookAt(t),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Xe.min,xs.min),Xe.expandByPoint(Ae),Ae.addVectors(Xe.max,xs.max),Xe.expandByPoint(Ae)):(Xe.expandByPoint(xs.min),Xe.expandByPoint(xs.max))}Xe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ae.fromBufferAttribute(a,l),c&&(Li.fromBufferAttribute(t,l),Ae.add(Li)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new I,c[L]=new I;const l=new I,h=new I,u=new I,f=new ht,d=new ht,g=new ht,_=new I,p=new I;function m(L,b,S){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[L].add(_),a[b].add(_),a[S].add(_),c[L].add(p),c[b].add(p),c[S].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,b=x.length;L<b;++L){const S=x[L],C=S.start,F=S.count;for(let U=C,H=C+F;U<H;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const v=new I,y=new I,P=new I,A=new I;function T(L){P.fromBufferAttribute(i,L),A.copy(P);const b=a[L];v.copy(b),v.sub(P.multiplyScalar(P.dot(b))).normalize(),y.crossVectors(A,b);const C=y.dot(c[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,C)}for(let L=0,b=x.length;L<b;++L){const S=x[L],C=S.start,F=S.count;for(let U=C,H=C+F;U<H;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let m=0;m<h;m++)f[g++]=l[d++]}return new oe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tl=new zt,ri=new $r,or=new _n,el=new I,ar=new I,cr=new I,lr=new I,So=new I,hr=new I,nl=new I,ur=new I;class Yt extends me{constructor(t=new _e,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(So.fromBufferAttribute(u,t),o?hr.addScaledVector(So,h):hr.addScaledVector(So.sub(e),h))}e.add(hr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(r),ri.copy(t.ray).recast(t.near),!(or.containsPoint(ri.origin)===!1&&(ri.intersectSphere(or,el)===null||ri.origin.distanceToSquared(el)>(t.far-t.near)**2))&&(tl.copy(r).invert(),ri.copy(t.ray).applyMatrix4(tl),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=x,P=v;y<P;y+=3){const A=a.getX(y),T=a.getX(y+1),L=a.getX(y+2);i=fr(this,m,t,n,l,h,u,A,T,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const x=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);i=fr(this,o,t,n,l,h,u,x,v,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),v=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let y=x,P=v;y<P;y+=3){const A=y,T=y+1,L=y+2;i=fr(this,m,t,n,l,h,u,A,T,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const x=p,v=p+1,y=p+2;i=fr(this,o,t,n,l,h,u,x,v,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function td(s,t,e,n,i,r,o,a){let c;if(t.side===Be?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Fn,a),c===null)return null;ur.copy(a),ur.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ur);return l<e.near||l>e.far?null:{distance:l,point:ur.clone(),object:s}}function fr(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,ar),s.getVertexPosition(c,cr),s.getVertexPosition(l,lr);const h=td(s,t,e,n,ar,cr,lr,nl);if(h){const u=new I;qe.getBarycoord(nl,ar,cr,lr,u),i&&(h.uv=qe.getInterpolatedAttribute(i,a,c,l,u,new ht)),r&&(h.uv1=qe.getInterpolatedAttribute(r,a,c,l,u,new ht)),o&&(h.normal=qe.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};qe.getNormal(ar,cr,lr,f.normal),h.face=f,h.barycoord=u}return h}class Ht extends _e{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(_,p,m,x,v,y,P,A,T,L,b){const S=y/T,C=P/L,F=y/2,U=P/2,H=A/2,q=T+1,z=L+1;let Y=0,k=0;const $=new I;for(let ct=0;ct<z;ct++){const pt=ct*C-U;for(let at=0;at<q;at++){const xt=at*S-F;$[_]=xt*x,$[p]=pt*v,$[m]=H,l.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[m]=A>0?1:-1,h.push($.x,$.y,$.z),u.push(at/T),u.push(1-ct/L),Y+=1}}for(let ct=0;ct<L;ct++)for(let pt=0;pt<T;pt++){const at=f+pt+q*ct,xt=f+pt+q*(ct+1),W=f+(pt+1)+q*(ct+1),tt=f+(pt+1)+q*ct;c.push(at,xt,tt),c.push(xt,W,tt),k+=6}a.addGroup(d,k,b),d+=k,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ht(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ns(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(s){const t={};for(let e=0;e<s.length;e++){const n=ns(s[e]);for(const i in n)t[i]=n[i]}return t}function ed(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function $h(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const nd={clone:ns,merge:Ue};var id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Ke{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=ed(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zh extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new I,il=new ht,sl=new ht;class Fe extends Zh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,il,sl),e.subVectors(sl,il)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ii=-90,Di=1;class rd extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fe(Ii,Di,t,e);i.layers=this.layers,this.add(i);const r=new Fe(Ii,Di,t,e);r.layers=this.layers,this.add(r);const o=new Fe(Ii,Di,t,e);o.layers=this.layers,this.add(o);const a=new Fe(Ii,Di,t,e);a.layers=this.layers,this.add(a);const c=new Fe(Ii,Di,t,e);c.layers=this.layers,this.add(c);const l=new Fe(Ii,Di,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jh extends be{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Zi,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class od extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Jh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ht(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Qn});r.uniforms.tEquirect.value=e;const o=new Yt(i,r),a=e.minFilter;return e.minFilter===In&&(e.minFilter=Ye),new rd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const bo=new I,ad=new I,cd=new qt;class ui{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=bo.subVectors(n,e).cross(ad.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(bo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||cd.getNormalMatrix(t),i=this.coplanarPoint(bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new _n,dr=new I;class nc{constructor(t=new ui,e=new ui,n=new ui,i=new ui,r=new ui,o=new ui){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-r,f-l,p-d,y-m).normalize(),n[1].setComponents(c+r,f+l,p+d,y+m).normalize(),n[2].setComponents(c+o,f+h,p+g,y+x).normalize(),n[3].setComponents(c-o,f-h,p-g,y-x).normalize(),n[4].setComponents(c-a,f-u,p-_,y-v).normalize(),e===Dn)n[5].setComponents(c+a,f+u,p+_,y+v).normalize();else if(e===Wr)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(dr.x=i.normal.x>0?t.max.x:t.min.x,dr.y=i.normal.y>0?t.max.y:t.min.y,dr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(dr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ld(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class cs extends _e{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const x=m*f-o;for(let v=0;v<l;v++){const y=v*u-r;g.push(y,-x,0),_.push(0,0,1),p.push(v/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<a;x++){const v=x+l*m,y=x+l*(m+1),P=x+1+l*(m+1),A=x+1+l*m;d.push(v,y,A),d.push(y,P,A)}this.setIndex(d),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.widthSegments,t.heightSegments)}}var hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ud=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ud=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ep=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ip=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$p=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_m=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:hd,alphahash_pars_fragment:ud,alphamap_fragment:fd,alphamap_pars_fragment:dd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:_d,batching_pars_vertex:xd,batching_vertex:vd,begin_vertex:Md,beginnormal_vertex:yd,bsdfs:Sd,iridescence_fragment:bd,bumpmap_pars_fragment:Ed,clipping_planes_fragment:Td,clipping_planes_pars_fragment:wd,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:Rd,color_fragment:Cd,color_pars_fragment:Pd,color_pars_vertex:Ld,color_vertex:Id,common:Dd,cube_uv_reflection_fragment:Nd,defaultnormal_vertex:Ud,displacementmap_pars_vertex:Fd,displacementmap_vertex:Od,emissivemap_fragment:Bd,emissivemap_pars_fragment:zd,colorspace_fragment:kd,colorspace_pars_fragment:Hd,envmap_fragment:Vd,envmap_common_pars_fragment:Gd,envmap_pars_fragment:Wd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:np,envmap_vertex:qd,fog_vertex:Yd,fog_pars_vertex:jd,fog_fragment:Kd,fog_pars_fragment:$d,gradientmap_pars_fragment:Zd,lightmap_pars_fragment:Jd,lights_lambert_fragment:Qd,lights_lambert_pars_fragment:tp,lights_pars_begin:ep,lights_toon_fragment:ip,lights_toon_pars_fragment:sp,lights_phong_fragment:rp,lights_phong_pars_fragment:op,lights_physical_fragment:ap,lights_physical_pars_fragment:cp,lights_fragment_begin:lp,lights_fragment_maps:hp,lights_fragment_end:up,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:dp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:_p,map_particle_fragment:xp,map_particle_pars_fragment:vp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:yp,morphinstance_vertex:Sp,morphcolor_vertex:bp,morphnormal_vertex:Ep,morphtarget_pars_vertex:Tp,morphtarget_vertex:wp,normal_fragment_begin:Ap,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Pp,normal_vertex:Lp,normalmap_pars_fragment:Ip,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Fp,opaque_fragment:Op,packing:Bp,premultiplied_alpha_fragment:zp,project_vertex:kp,dithering_fragment:Hp,dithering_pars_fragment:Vp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:Yp,shadowmask_pars_fragment:jp,skinbase_vertex:Kp,skinning_pars_vertex:$p,skinning_vertex:Zp,skinnormal_vertex:Jp,specularmap_fragment:Qp,specularmap_pars_fragment:tm,tonemapping_fragment:em,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:om,uv_vertex:am,worldpos_vertex:cm,background_vert:lm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:fm,cube_vert:dm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distanceRGBA_vert:_m,distanceRGBA_frag:xm,equirect_vert:vm,equirect_frag:Mm,linedashed_vert:ym,linedashed_frag:Sm,meshbasic_vert:bm,meshbasic_frag:Em,meshlambert_vert:Tm,meshlambert_frag:wm,meshmatcap_vert:Am,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Pm,meshphong_vert:Lm,meshphong_frag:Im,meshphysical_vert:Dm,meshphysical_frag:Nm,meshtoon_vert:Um,meshtoon_frag:Fm,points_vert:Om,points_frag:Bm,shadow_vert:zm,shadow_frag:km,sprite_vert:Hm,sprite_frag:Vm},yt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},mn={basic:{uniforms:Ue([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ue([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new wt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ue([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ue([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ue([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new wt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ue([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ue([yt.points,yt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ue([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ue([yt.common,yt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ue([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ue([yt.sprite,yt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ue([yt.common,yt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ue([yt.lights,yt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};mn.physical={uniforms:Ue([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const pr={r:0,b:0,g:0},ai=new un,Gm=new zt;function Wm(s,t,e,n,i,r,o){const a=new wt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const y=g(x);y===null?m(a,c):y&&y.isColor&&(m(y,1),v=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(x,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===Yr)?(h===void 0&&(h=new Yt(new Ht(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:ns(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ai.copy(v.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(ai)),h.material.toneMapped=Jt.getTransfer(y.colorSpace)!==he,(u!==y||f!==y.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Yt(new cs(2,2),new ei({name:"BackgroundMaterial",uniforms:ns(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(y.colorSpace)!==he,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,v){x.getRGB(pr,$h(s)),n.buffers.color.setClear(pr.r,pr.g,pr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,m(a,c)},render:_,addToRenderList:p}}function Xm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(S,C,F,U,H){let q=!1;const z=u(U,F,C);r!==z&&(r=z,l(r.object)),q=d(S,U,F,H),q&&g(S,U,F,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(S,C,F,U),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,C,F){const U=F.wireframe===!0;let H=n[S.id];H===void 0&&(H={},n[S.id]=H);let q=H[C.id];q===void 0&&(q={},H[C.id]=q);let z=q[U];return z===void 0&&(z=f(c()),q[U]=z),z}function f(S){const C=[],F=[],U=[];for(let H=0;H<e;H++)C[H]=0,F[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:U,object:S,attributes:{},index:null}}function d(S,C,F,U){const H=r.attributes,q=C.attributes;let z=0;const Y=F.getAttributes();for(const k in Y)if(Y[k].location>=0){const ct=H[k];let pt=q[k];if(pt===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor)),ct===void 0||ct.attribute!==pt||pt&&ct.data!==pt.data)return!0;z++}return r.attributesNum!==z||r.index!==U}function g(S,C,F,U){const H={},q=C.attributes;let z=0;const Y=F.getAttributes();for(const k in Y)if(Y[k].location>=0){let ct=q[k];ct===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor));const pt={};pt.attribute=ct,ct&&ct.data&&(pt.data=ct.data),H[k]=pt,z++}r.attributes=H,r.attributesNum=z,r.index=U}function _(){const S=r.newAttributes;for(let C=0,F=S.length;C<F;C++)S[C]=0}function p(S){m(S,0)}function m(S,C){const F=r.newAttributes,U=r.enabledAttributes,H=r.attributeDivisors;F[S]=1,U[S]===0&&(s.enableVertexAttribArray(S),U[S]=1),H[S]!==C&&(s.vertexAttribDivisor(S,C),H[S]=C)}function x(){const S=r.newAttributes,C=r.enabledAttributes;for(let F=0,U=C.length;F<U;F++)C[F]!==S[F]&&(s.disableVertexAttribArray(F),C[F]=0)}function v(S,C,F,U,H,q,z){z===!0?s.vertexAttribIPointer(S,C,F,H,q):s.vertexAttribPointer(S,C,F,U,H,q)}function y(S,C,F,U){_();const H=U.attributes,q=F.getAttributes(),z=C.defaultAttributeValues;for(const Y in q){const k=q[Y];if(k.location>=0){let $=H[Y];if($===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const ct=$.normalized,pt=$.itemSize,at=t.get($);if(at===void 0)continue;const xt=at.buffer,W=at.type,tt=at.bytesPerElement,dt=W===s.INT||W===s.UNSIGNED_INT||$.gpuType===ja;if($.isInterleavedBufferAttribute){const it=$.data,Lt=it.stride,Tt=$.offset;if(it.isInstancedInterleavedBuffer){for(let bt=0;bt<k.locationSize;bt++)m(k.location+bt,it.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let bt=0;bt<k.locationSize;bt++)p(k.location+bt);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let bt=0;bt<k.locationSize;bt++)v(k.location+bt,pt/k.locationSize,W,ct,Lt*tt,(Tt+pt/k.locationSize*bt)*tt,dt)}else{if($.isInstancedBufferAttribute){for(let it=0;it<k.locationSize;it++)m(k.location+it,$.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let it=0;it<k.locationSize;it++)p(k.location+it);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let it=0;it<k.locationSize;it++)v(k.location+it,pt/k.locationSize,W,ct,pt*tt,pt/k.locationSize*it*tt,dt)}}else if(z!==void 0){const ct=z[Y];if(ct!==void 0)switch(ct.length){case 2:s.vertexAttrib2fv(k.location,ct);break;case 3:s.vertexAttrib3fv(k.location,ct);break;case 4:s.vertexAttrib4fv(k.location,ct);break;default:s.vertexAttrib1fv(k.location,ct)}}}}x()}function P(){L();for(const S in n){const C=n[S];for(const F in C){const U=C[F];for(const H in U)h(U[H].object),delete U[H];delete C[F]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const F in C){const U=C[F];for(const H in U)h(U[H].object),delete U[H];delete C[F]}delete n[S.id]}function T(S){for(const C in n){const F=n[C];if(F[S.id]===void 0)continue;const U=F[S.id];for(const H in U)h(U[H].object),delete U[H];delete F[S.id]}}function L(){b(),o=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function qm(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ym(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==je&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===Ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==On&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ln&&!L)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:P,maxSamples:A}}function jm(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ui,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{const x=r?0:n,v=x*4;let y=m.clippingState||null;c.value=y,y=h(g,f,v,d);for(let P=0;P!==v;++P)y[P]=e[P];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=d;v!==_;++v,y+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Km(s){let t=new WeakMap;function e(o,a){return a===na?o.mapping=Zi:a===ia&&(o.mapping=Ji),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===na||a===ia)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new od(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ic extends Zh{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,rl=[.125,.215,.35,.446,.526,.582],pi=20,Eo=new ic,ol=new wt;let To=null,wo=0,Ao=0,Ro=!1;const fi=(1+Math.sqrt(5))/2,Ni=1/fi,al=[new I(-fi,Ni,0),new I(fi,Ni,0),new I(-Ni,0,fi),new I(Ni,0,fi),new I(0,fi,-Ni),new I(0,fi,Ni),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class cl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){To=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(To,wo,Ao),this._renderer.xr.enabled=Ro,t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),To=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Ys,format:je,colorSpace:ze,depthBuffer:!1},i=ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ll(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$m(r)),this._blurMaterial=Zm(r,t,e)}return i}_compileMaterial(t){const e=new Yt(this._lodPlanes[0],t);this._renderer.compile(e,Eo)}_sceneToCubeUV(t,e,n,i){const a=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ol),h.toneMapping=Nn,h.autoClear=!1;const d=new Oe({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new Yt(new Ht,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(ol),_=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):x===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;mr(i,x*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Zi||t.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;mr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Eo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=al[(i-r-1)%al.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Yt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*pi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):pi;p>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pi}`);const m=[];let x=0;for(let T=0;T<pi;++T){const L=T/_,b=Math.exp(-L*L/2);m.push(b),T===0?x+=b:T<p&&(x+=2*b)}for(let T=0;T<m.length;T++)m[T]=m[T]/x;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const y=this._sizeLods[i],P=3*y*(i>v-ki?i-v+ki:0),A=4*(this._cubeSize-y);mr(e,P,A,3*y,2*y),c.setRenderTarget(e),c.render(u,Eo)}}function $m(s){const t=[],e=[],n=[];let i=s;const r=s-ki+1+rl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-ki?c=rl[o-s+ki-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*d),v=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,L=A>2?0:-1,b=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];x.set(b,_*g*A),v.set(f,p*g*A);const S=[A,A,A,A,A,A];y.set(S,m*g*A)}const P=new _e;P.setAttribute("position",new oe(x,_)),P.setAttribute("uv",new oe(v,p)),P.setAttribute("faceIndex",new oe(y,m)),t.push(P),i>ki&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ll(s,t,e){const n=new _i(s,t,e);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Zm(s,t,e){const n=new Float32Array(pi),i=new I(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function hl(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ul(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===na||c===ia,h=c===Zi||c===Ji;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new cl(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new cl(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Qm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Is("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function tg(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],s.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,y=x.length;v<y;v+=3){const P=x[v+0],A=x[v+1],T=x[v+2];f.push(P,A,A,T,T,P)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const P=v+0,A=v+1,T=v+2;f.push(P,A,A,T,T,P)}}else return;const p=new(Gh(f)?Kh:jh)(f,1);p.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function eg(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function u(f,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let m=0;for(let x=0;x<g;x++)m+=d[x]*_[x];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ng(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ig(s,t,e){const n=new WeakMap,i=new ee;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let P=a.attributes.position.count*y,A=1;P>t.maxTextureSize&&(A=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const T=new Float32Array(P*A*4*u),L=new Xh(T,P,A,u);L.type=ln,L.needsUpdate=!0;const b=y*4;for(let C=0;C<u;C++){const F=m[C],U=x[C],H=v[C],q=P*A*4*C;for(let z=0;z<F.count;z++){const Y=z*b;g===!0&&(i.fromBufferAttribute(F,z),T[q+Y+0]=i.x,T[q+Y+1]=i.y,T[q+Y+2]=i.z,T[q+Y+3]=0),_===!0&&(i.fromBufferAttribute(U,z),T[q+Y+4]=i.x,T[q+Y+5]=i.y,T[q+Y+6]=i.z,T[q+Y+7]=0),p===!0&&(i.fromBufferAttribute(H,z),T[q+Y+8]=i.x,T[q+Y+9]=i.y,T[q+Y+10]=i.z,T[q+Y+11]=H.itemSize===4?i.w:1)}}f={count:u,texture:L,size:new ht(P,A)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function sg(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class tu extends be{constructor(t,e,n,i,r,o,a,c,l,h=Xi){if(h!==Xi&&h!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=gi),n===void 0&&h===ts&&(n=Qi),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:De,this.minFilter=c!==void 0?c:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const eu=new be,fl=new tu(1,1),nu=new Xh,iu=new Wf,su=new Jh,dl=[],pl=[],ml=new Float32Array(16),gl=new Float32Array(9),_l=new Float32Array(4);function ls(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=dl[i];if(r===void 0&&(r=new Float32Array(i),dl[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Te(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Zr(s,t){let e=pl[t];e===void 0&&(e=new Int32Array(t),pl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function rg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function og(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}function ag(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}function cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}function lg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;_l.set(n),s.uniformMatrix2fv(this.addr,!1,_l),Te(e,n)}}function hg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;gl.set(n),s.uniformMatrix3fv(this.addr,!1,gl),Te(e,n)}}function ug(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;ml.set(n),s.uniformMatrix4fv(this.addr,!1,ml),Te(e,n)}}function fg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function dg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}function pg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}function mg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}function gg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function _g(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}function xg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}function vg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}function Mg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(fl.compareFunction=Hh,r=fl):r=eu,e.setTexture2D(t||r,i)}function yg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||iu,i)}function Sg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||su,i)}function bg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||nu,i)}function Eg(s){switch(s){case 5126:return rg;case 35664:return og;case 35665:return ag;case 35666:return cg;case 35674:return lg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return fg;case 35667:case 35671:return dg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return _g;case 36295:return xg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return bg}}function Tg(s,t){s.uniform1fv(this.addr,t)}function wg(s,t){const e=ls(t,this.size,2);s.uniform2fv(this.addr,e)}function Ag(s,t){const e=ls(t,this.size,3);s.uniform3fv(this.addr,e)}function Rg(s,t){const e=ls(t,this.size,4);s.uniform4fv(this.addr,e)}function Cg(s,t){const e=ls(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Pg(s,t){const e=ls(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Lg(s,t){const e=ls(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ig(s,t){s.uniform1iv(this.addr,t)}function Dg(s,t){s.uniform2iv(this.addr,t)}function Ng(s,t){s.uniform3iv(this.addr,t)}function Ug(s,t){s.uniform4iv(this.addr,t)}function Fg(s,t){s.uniform1uiv(this.addr,t)}function Og(s,t){s.uniform2uiv(this.addr,t)}function Bg(s,t){s.uniform3uiv(this.addr,t)}function zg(s,t){s.uniform4uiv(this.addr,t)}function kg(s,t,e){const n=this.cache,i=t.length,r=Zr(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||eu,r[o])}function Hg(s,t,e){const n=this.cache,i=t.length,r=Zr(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||iu,r[o])}function Vg(s,t,e){const n=this.cache,i=t.length,r=Zr(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||su,r[o])}function Gg(s,t,e){const n=this.cache,i=t.length,r=Zr(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||nu,r[o])}function Wg(s){switch(s){case 5126:return Tg;case 35664:return wg;case 35665:return Ag;case 35666:return Rg;case 35674:return Cg;case 35675:return Pg;case 35676:return Lg;case 5124:case 35670:return Ig;case 35667:case 35671:return Dg;case 35668:case 35672:return Ng;case 35669:case 35673:return Ug;case 5125:return Fg;case 36294:return Og;case 36295:return Bg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Gg}}class Xg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Eg(e.type)}}class qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wg(e.type)}}class Yg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function xl(s,t){s.seq.push(t),s.map[t.id]=t}function jg(s,t,e){const n=s.name,i=n.length;for(Co.lastIndex=0;;){const r=Co.exec(n),o=Co.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){xl(e,l===void 0?new Xg(a,s,t):new qg(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Yg(a),xl(e,u)),e=u}}}class Vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);jg(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function vl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Kg=37297;let $g=0;function Zg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ml=new qt;function Jg(s){Jt._getMatrix(Ml,Jt.workingColorSpace,s);const t=`mat3( ${Ml.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(s)){case Kr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function yl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Zg(s.getShaderSource(t),o)}else return i}function Qg(s,t){const e=Jg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function t0(s,t){let e;switch(t){case Qu:e="Linear";break;case tf:e="Reinhard";break;case ef:e="Cineon";break;case nf:e="ACESFilmic";break;case rf:e="AgX";break;case of:e="Neutral";break;case sf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const gr=new I;function e0(){Jt.getLuminanceCoefficients(gr);const s=gr.x.toFixed(4),t=gr.y.toFixed(4),e=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function i0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function s0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ds(s){return s!==""}function Sl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const r0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(s){return s.replace(r0,a0)}const o0=new Map;function a0(s,t){let e=jt[t];if(e===void 0){const n=o0.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ia(e)}const c0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(s){return s.replace(c0,l0)}function l0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Tl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function h0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ah?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Rh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function u0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zi:case Ji:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function f0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ji:t="ENVMAP_MODE_REFRACTION";break}return t}function d0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ya:t="ENVMAP_BLENDING_MULTIPLY";break;case Zu:t="ENVMAP_BLENDING_MIX";break;case Ju:t="ENVMAP_BLENDING_ADD";break}return t}function p0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function m0(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=h0(e),l=u0(e),h=f0(e),u=d0(e),f=p0(e),d=n0(e),g=i0(r),_=i.createProgram();let p,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ds).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ds).join(`
`),m.length>0&&(m+=`
`)):(p=[Tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),m=[Tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?t0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Qg("linearToOutputTexel",e.outputColorSpace),e0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ds).join(`
`)),o=Ia(o),o=Sl(o,e),o=bl(o,e),a=Ia(a),a=Sl(a,e),a=bl(a,e),o=El(o),a=El(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=x+p+o,y=x+m+a,P=vl(i,i.VERTEX_SHADER,v),A=vl(i,i.FRAGMENT_SHADER,y);i.attachShader(_,P),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(C){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(P).trim(),H=i.getShaderInfoLog(A).trim();let q=!0,z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,A);else{const Y=yl(i,P,"vertex"),k=yl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+Y+`
`+k)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||H==="")&&(z=!1);z&&(C.diagnostics={runnable:q,programLog:F,vertexShader:{log:U,prefix:p},fragmentShader:{log:H,prefix:m}})}i.deleteShader(P),i.deleteShader(A),L=new Vr(i,_),b=s0(i,_)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,Kg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$g++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let g0=0;class _0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new x0(t),e.set(t,n)),n}}class x0{constructor(t){this.id=g0++,this.code=t,this.usedTimes=0}}function v0(s,t,e,n,i,r,o){const a=new qh,c=new _0,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function p(b,S,C,F,U){const H=F.fog,q=U.geometry,z=b.isMeshStandardMaterial?F.environment:null,Y=(b.isMeshStandardMaterial?e:t).get(b.envMap||z),k=Y&&Y.mapping===Yr?Y.image.height:null,$=g[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pt=ct!==void 0?ct.length:0;let at=0;q.morphAttributes.position!==void 0&&(at=1),q.morphAttributes.normal!==void 0&&(at=2),q.morphAttributes.color!==void 0&&(at=3);let xt,W,tt,dt;if($){const ae=mn[$];xt=ae.vertexShader,W=ae.fragmentShader}else xt=b.vertexShader,W=b.fragmentShader,c.update(b),tt=c.getVertexShaderID(b),dt=c.getFragmentShaderID(b);const it=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),Tt=U.isInstancedMesh===!0,bt=U.isBatchedMesh===!0,Ot=!!b.map,J=!!b.matcap,nt=!!Y,R=!!b.aoMap,mt=!!b.lightMap,Q=!!b.bumpMap,lt=!!b.normalMap,rt=!!b.displacementMap,Rt=!!b.emissiveMap,gt=!!b.metalnessMap,w=!!b.roughnessMap,M=b.anisotropy>0,D=b.clearcoat>0,G=b.dispersion>0,Z=b.iridescence>0,j=b.sheen>0,Mt=b.transmission>0,ut=M&&!!b.anisotropyMap,_t=D&&!!b.clearcoatMap,kt=D&&!!b.clearcoatNormalMap,ot=D&&!!b.clearcoatRoughnessMap,Ct=Z&&!!b.iridescenceMap,Ft=Z&&!!b.iridescenceThicknessMap,Bt=j&&!!b.sheenColorMap,Pt=j&&!!b.sheenRoughnessMap,Kt=!!b.specularMap,Vt=!!b.specularColorMap,ie=!!b.specularIntensityMap,N=Mt&&!!b.transmissionMap,St=Mt&&!!b.thicknessMap,V=!!b.gradientMap,et=!!b.alphaMap,vt=b.alphaTest>0,Et=!!b.alphaHash,Wt=!!b.extensions;let ge=Nn;b.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ge=s.toneMapping);const we={shaderID:$,shaderType:b.type,shaderName:b.name,vertexShader:xt,fragmentShader:W,defines:b.defines,customVertexShaderID:tt,customFragmentShaderID:dt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:bt,batchingColor:bt&&U._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&U.instanceColor!==null,instancingMorph:Tt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ze,alphaToCoverage:!!b.alphaToCoverage,map:Ot,matcap:J,envMap:nt,envMapMode:nt&&Y.mapping,envMapCubeUVHeight:k,aoMap:R,lightMap:mt,bumpMap:Q,normalMap:lt,displacementMap:f&&rt,emissiveMap:Rt,normalMapObjectSpace:lt&&b.normalMapType===ff,normalMapTangentSpace:lt&&b.normalMapType===jr,metalnessMap:gt,roughnessMap:w,anisotropy:M,anisotropyMap:ut,clearcoat:D,clearcoatMap:_t,clearcoatNormalMap:kt,clearcoatRoughnessMap:ot,dispersion:G,iridescence:Z,iridescenceMap:Ct,iridescenceThicknessMap:Ft,sheen:j,sheenColorMap:Bt,sheenRoughnessMap:Pt,specularMap:Kt,specularColorMap:Vt,specularIntensityMap:ie,transmission:Mt,transmissionMap:N,thicknessMap:St,gradientMap:V,opaque:b.transparent===!1&&b.blending===Wi&&b.alphaToCoverage===!1,alphaMap:et,alphaTest:vt,alphaHash:Et,combine:b.combine,mapUv:Ot&&_(b.map.channel),aoMapUv:R&&_(b.aoMap.channel),lightMapUv:mt&&_(b.lightMap.channel),bumpMapUv:Q&&_(b.bumpMap.channel),normalMapUv:lt&&_(b.normalMap.channel),displacementMapUv:rt&&_(b.displacementMap.channel),emissiveMapUv:Rt&&_(b.emissiveMap.channel),metalnessMapUv:gt&&_(b.metalnessMap.channel),roughnessMapUv:w&&_(b.roughnessMap.channel),anisotropyMapUv:ut&&_(b.anisotropyMap.channel),clearcoatMapUv:_t&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:kt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(b.sheenRoughnessMap.channel),specularMapUv:Kt&&_(b.specularMap.channel),specularColorMapUv:Vt&&_(b.specularColorMap.channel),specularIntensityMapUv:ie&&_(b.specularIntensityMap.channel),transmissionMapUv:N&&_(b.transmissionMap.channel),thicknessMapUv:St&&_(b.thicknessMap.channel),alphaMapUv:et&&_(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(lt||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(Ot||et),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:at,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ge,decodeVideoTexture:Ot&&b.map.isVideoTexture===!0&&Jt.getTransfer(b.map.colorSpace)===he,decodeVideoTextureEmissive:Rt&&b.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(b.emissiveMap.colorSpace)===he,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ve,flipSided:b.side===Be,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Wt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&b.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)S.push(C),S.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(x(S,b),v(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function x(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const S=g[b.type];let C;if(S){const F=mn[S];C=nd.clone(F.uniforms)}else C=b.uniforms;return C}function P(b,S){let C;for(let F=0,U=h.length;F<U;F++){const H=h[F];if(H.cacheKey===S){C=H,++C.usedTimes;break}}return C===void 0&&(C=new m0(s,S,b,r),h.push(C)),C}function A(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function T(b){c.remove(b)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:P,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:L}}function M0(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function y0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function wl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Al(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,_,p){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},s[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,f,d,g,_,p){const m=o(u,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function c(u,f,d,g,_,p){const m=o(u,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||y0),n.length>1&&n.sort(f||wl),i.length>1&&i.sort(f||wl)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function S0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Al,s.set(n,[o])):i>=r.length?(o=new Al,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function b0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new wt};break;case"SpotLight":e={position:new I,direction:new I,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function E0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let T0=0;function w0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function A0(s){const t=new b0,e=E0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,r=new zt,o=new zt;function a(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,x=0,v=0,y=0,P=0,A=0,T=0;l.sort(w0);for(let b=0,S=l.length;b<S;b++){const C=l[b],F=C.color,U=C.intensity,H=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=F.r*U,u+=F.g*U,f+=F.b*U;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],U);T++}else if(C.isDirectionalLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,k=e.get(C);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=C.shadow.matrix,x++}n.directional[d]=z,d++}else if(C.isSpotLight){const z=t.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(F).multiplyScalar(U),z.distance=H,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[_]=z;const Y=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,Y.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=Y.matrix,C.castShadow){const k=e.get(C);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=q,y++}_++}else if(C.isRectAreaLight){const z=t.get(C);z.color.copy(F).multiplyScalar(U),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=z,p++}else if(C.isPointLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const Y=C.shadow,k=e.get(C);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=z,g++}else if(C.isHemisphereLight){const z=t.get(C);z.skyColor.copy(C.color).multiplyScalar(U),z.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[m]=z,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==x||L.numPointShadows!==v||L.numSpotShadows!==y||L.numSpotMaps!==P||L.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=x,L.numPointShadows=v,L.numSpotShadows=y,L.numSpotMaps=P,L.numLightProbes=T,n.version=T0++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,x=l.length;m<x;m++){const v=l[m];if(v.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),u++}else if(v.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function Rl(s){const t=new A0(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function R0(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Rl(s),t.set(i,[a])):r>=o.length?(a=new Rl(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class C0 extends Ke{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class P0 extends Ke{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function D0(s,t,e){let n=new nc;const i=new ht,r=new ht,o=new ee,a=new C0({depthPacking:uf}),c=new P0,l={},h=e.maxTextureSize,u={[Fn]:Be,[Be]:Fn,[Ve]:Ve},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:L0,fragmentShader:I0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new _e;g.setAttribute("position",new oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah;let m=this.type;this.render=function(A,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const b=s.getRenderTarget(),S=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Qn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=m!==Pn&&this.type===Pn,H=m===Pn&&this.type!==Pn;for(let q=0,z=A.length;q<z;q++){const Y=A[q],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const $=k.getFrameExtents();if(i.multiply($),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,k.mapSize.y=r.y)),k.map===null||U===!0||H===!0){const pt=this.type!==Pn?{minFilter:De,magFilter:De}:{};k.map!==null&&k.map.dispose(),k.map=new _i(i.x,i.y,pt),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const ct=k.getViewportCount();for(let pt=0;pt<ct;pt++){const at=k.getViewport(pt);o.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),F.viewport(o),k.updateMatrices(Y,pt),n=k.getFrustum(),y(T,L,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===Pn&&x(k,L),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(b,S,C)};function x(A,T){const L=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new _i(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,L,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,L,d,_,null)}function v(A,T,L,b){let S=null;const C=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)S=C;else if(S=L.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=S.uuid,U=T.uuid;let H=l[F];H===void 0&&(H={},l[F]=H);let q=H[U];q===void 0&&(q=S.clone(),H[U]=q,T.addEventListener("dispose",P)),S=q}if(S.visible=T.visible,S.wireframe=T.wireframe,b===Pn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=s.properties.get(S);F.light=L}return S}function y(A,T,L,b,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const U=t.update(A),H=A.material;if(Array.isArray(H)){const q=U.groups;for(let z=0,Y=q.length;z<Y;z++){const k=q[z],$=H[k.materialIndex];if($&&$.visible){const ct=v(A,$,b,S);A.onBeforeShadow(s,A,T,L,U,ct,k),s.renderBufferDirect(L,null,U,ct,A,k),A.onAfterShadow(s,A,T,L,U,ct,k)}}}else if(H.visible){const q=v(A,H,b,S);A.onBeforeShadow(s,A,T,L,U,q,null),s.renderBufferDirect(L,null,U,q,A,null),A.onAfterShadow(s,A,T,L,U,q,null)}}const F=A.children;for(let U=0,H=F.length;U<H;U++)y(F[U],T,L,b,S)}function P(A){A.target.removeEventListener("dispose",P);for(const L in l){const b=l[L],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const N0={[Ko]:$o,[Zo]:ta,[Jo]:ea,[$i]:Qo,[$o]:Ko,[ta]:Zo,[ea]:Jo,[Qo]:$i};function U0(s,t){function e(){let N=!1;const St=new ee;let V=null;const et=new ee(0,0,0,0);return{setMask:function(vt){V!==vt&&!N&&(s.colorMask(vt,vt,vt,vt),V=vt)},setLocked:function(vt){N=vt},setClear:function(vt,Et,Wt,ge,we){we===!0&&(vt*=ge,Et*=ge,Wt*=ge),St.set(vt,Et,Wt,ge),et.equals(St)===!1&&(s.clearColor(vt,Et,Wt,ge),et.copy(St))},reset:function(){N=!1,V=null,et.set(-1,0,0,0)}}}function n(){let N=!1,St=!1,V=null,et=null,vt=null;return{setReversed:function(Et){if(St!==Et){const Wt=t.get("EXT_clip_control");St?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const ge=vt;vt=null,this.setClear(ge)}St=Et},getReversed:function(){return St},setTest:function(Et){Et?it(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(Et){V!==Et&&!N&&(s.depthMask(Et),V=Et)},setFunc:function(Et){if(St&&(Et=N0[Et]),et!==Et){switch(Et){case Ko:s.depthFunc(s.NEVER);break;case $o:s.depthFunc(s.ALWAYS);break;case Zo:s.depthFunc(s.LESS);break;case $i:s.depthFunc(s.LEQUAL);break;case Jo:s.depthFunc(s.EQUAL);break;case Qo:s.depthFunc(s.GEQUAL);break;case ta:s.depthFunc(s.GREATER);break;case ea:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=Et}},setLocked:function(Et){N=Et},setClear:function(Et){vt!==Et&&(St&&(Et=1-Et),s.clearDepth(Et),vt=Et)},reset:function(){N=!1,V=null,et=null,vt=null,St=!1}}}function i(){let N=!1,St=null,V=null,et=null,vt=null,Et=null,Wt=null,ge=null,we=null;return{setTest:function(ae){N||(ae?it(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(ae){St!==ae&&!N&&(s.stencilMask(ae),St=ae)},setFunc:function(ae,nn,yn){(V!==ae||et!==nn||vt!==yn)&&(s.stencilFunc(ae,nn,yn),V=ae,et=nn,vt=yn)},setOp:function(ae,nn,yn){(Et!==ae||Wt!==nn||ge!==yn)&&(s.stencilOp(ae,nn,yn),Et=ae,Wt=nn,ge=yn)},setLocked:function(ae){N=ae},setClear:function(ae){we!==ae&&(s.clearStencil(ae),we=ae)},reset:function(){N=!1,St=null,V=null,et=null,vt=null,Et=null,Wt=null,ge=null,we=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,x=null,v=null,y=null,P=null,A=null,T=new wt(0,0,0),L=0,b=!1,S=null,C=null,F=null,U=null,H=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Y=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=Y>=2);let $=null,ct={};const pt=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),xt=new ee().fromArray(pt),W=new ee().fromArray(at);function tt(N,St,V,et){const vt=new Uint8Array(4),Et=s.createTexture();s.bindTexture(N,Et),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<V;Wt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(St,0,s.RGBA,1,1,et,0,s.RGBA,s.UNSIGNED_BYTE,vt):s.texImage2D(St+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,vt);return Et}const dt={};dt[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(s.DEPTH_TEST),o.setFunc($i),Q(!1),lt(Cc),it(s.CULL_FACE),R(Qn);function it(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Lt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Tt(N,St){return u[N]!==St?(s.bindFramebuffer(N,St),u[N]=St,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=St),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=St),!0):!1}function bt(N,St){let V=d,et=!1;if(N){V=f.get(St),V===void 0&&(V=[],f.set(St,V));const vt=N.textures;if(V.length!==vt.length||V[0]!==s.COLOR_ATTACHMENT0){for(let Et=0,Wt=vt.length;Et<Wt;Et++)V[Et]=s.COLOR_ATTACHMENT0+Et;V.length=vt.length,et=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,et=!0);et&&s.drawBuffers(V)}function Ot(N){return g!==N?(s.useProgram(N),g=N,!0):!1}const J={[di]:s.FUNC_ADD,[Nu]:s.FUNC_SUBTRACT,[Uu]:s.FUNC_REVERSE_SUBTRACT};J[Fu]=s.MIN,J[Ou]=s.MAX;const nt={[Bu]:s.ZERO,[zu]:s.ONE,[ku]:s.SRC_COLOR,[Yo]:s.SRC_ALPHA,[qu]:s.SRC_ALPHA_SATURATE,[Wu]:s.DST_COLOR,[Vu]:s.DST_ALPHA,[Hu]:s.ONE_MINUS_SRC_COLOR,[jo]:s.ONE_MINUS_SRC_ALPHA,[Xu]:s.ONE_MINUS_DST_COLOR,[Gu]:s.ONE_MINUS_DST_ALPHA,[Yu]:s.CONSTANT_COLOR,[ju]:s.ONE_MINUS_CONSTANT_COLOR,[Ku]:s.CONSTANT_ALPHA,[$u]:s.ONE_MINUS_CONSTANT_ALPHA};function R(N,St,V,et,vt,Et,Wt,ge,we,ae){if(N===Qn){_===!0&&(Lt(s.BLEND),_=!1);return}if(_===!1&&(it(s.BLEND),_=!0),N!==Du){if(N!==p||ae!==b){if((m!==di||y!==di)&&(s.blendEquation(s.FUNC_ADD),m=di,y=di),ae)switch(N){case Wi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qo:s.blendFunc(s.ONE,s.ONE);break;case Pc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Wi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Pc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,v=null,P=null,A=null,T.set(0,0,0),L=0,p=N,b=ae}return}vt=vt||St,Et=Et||V,Wt=Wt||et,(St!==m||vt!==y)&&(s.blendEquationSeparate(J[St],J[vt]),m=St,y=vt),(V!==x||et!==v||Et!==P||Wt!==A)&&(s.blendFuncSeparate(nt[V],nt[et],nt[Et],nt[Wt]),x=V,v=et,P=Et,A=Wt),(ge.equals(T)===!1||we!==L)&&(s.blendColor(ge.r,ge.g,ge.b,we),T.copy(ge),L=we),p=N,b=!1}function mt(N,St){N.side===Ve?Lt(s.CULL_FACE):it(s.CULL_FACE);let V=N.side===Be;St&&(V=!V),Q(V),N.blending===Wi&&N.transparent===!1?R(Qn):R(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const et=N.stencilWrite;a.setTest(et),et&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Rt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Q(N){S!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),S=N)}function lt(N){N!==Lu?(it(s.CULL_FACE),N!==C&&(N===Cc?s.cullFace(s.BACK):N===Iu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),C=N}function rt(N){N!==F&&(z&&s.lineWidth(N),F=N)}function Rt(N,St,V){N?(it(s.POLYGON_OFFSET_FILL),(U!==St||H!==V)&&(s.polygonOffset(St,V),U=St,H=V)):Lt(s.POLYGON_OFFSET_FILL)}function gt(N){N?it(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function w(N){N===void 0&&(N=s.TEXTURE0+q-1),$!==N&&(s.activeTexture(N),$=N)}function M(N,St,V){V===void 0&&($===null?V=s.TEXTURE0+q-1:V=$);let et=ct[V];et===void 0&&(et={type:void 0,texture:void 0},ct[V]=et),(et.type!==N||et.texture!==St)&&($!==V&&(s.activeTexture(V),$=V),s.bindTexture(N,St||dt[N]),et.type=N,et.texture=St)}function D(){const N=ct[$];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function G(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ft(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Bt(N){xt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),xt.copy(N))}function Pt(N){W.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),W.copy(N))}function Kt(N,St){let V=l.get(St);V===void 0&&(V=new WeakMap,l.set(St,V));let et=V.get(N);et===void 0&&(et=s.getUniformBlockIndex(St,N.name),V.set(N,et))}function Vt(N,St){const et=l.get(St).get(N);c.get(St)!==et&&(s.uniformBlockBinding(St,et,N.__bindingPointIndex),c.set(St,et))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},$=null,ct={},u={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,x=null,v=null,y=null,P=null,A=null,T=new wt(0,0,0),L=0,b=!1,S=null,C=null,F=null,U=null,H=null,xt.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:Lt,bindFramebuffer:Tt,drawBuffers:bt,useProgram:Ot,setBlending:R,setMaterial:mt,setFlipSided:Q,setCullFace:lt,setLineWidth:rt,setPolygonOffset:Rt,setScissorTest:gt,activeTexture:w,bindTexture:M,unbindTexture:D,compressedTexImage2D:G,compressedTexImage3D:Z,texImage2D:Ct,texImage3D:Ft,updateUBOMapping:Kt,uniformBlockBinding:Vt,texStorage2D:kt,texStorage3D:ot,texSubImage2D:j,texSubImage3D:Mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:Bt,viewport:Pt,reset:ie}}function Cl(s,t,e,n){const i=F0(n);switch(e){case Nh:return s*t;case Fh:return s*t;case Oh:return s*t*2;case Za:return s*t/i.components*i.byteLength;case Ja:return s*t/i.components*i.byteLength;case Bh:return s*t*2/i.components*i.byteLength;case Qa:return s*t*2/i.components*i.byteLength;case Uh:return s*t*3/i.components*i.byteLength;case je:return s*t*4/i.components*i.byteLength;case tc:return s*t*4/i.components*i.byteLength;case Or:case Br:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zr:case kr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ra:case aa:return Math.max(s,16)*Math.max(t,8)/4;case sa:case oa:return Math.max(s,8)*Math.max(t,8)/2;case ca:case la:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case da:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case pa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ma:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ga:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case _a:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case xa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case va:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ya:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ba:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Hr:case Ta:case wa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case zh:case Aa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ra:case Ca:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function F0(s){switch(s){case On:case Lh:return{byteLength:1,components:1};case zs:case Ih:case Ys:return{byteLength:2,components:1};case Ka:case $a:return{byteLength:2,components:4};case gi:case ja:case ln:return{byteLength:4,components:1};case Dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function O0(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return d?new OffscreenCanvas(w,M):Vs("canvas")}function _(w,M,D){let G=1;const Z=gt(w);if((Z.width>D||Z.height>D)&&(G=D/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const j=Math.floor(G*Z.width),Mt=Math.floor(G*Z.height);u===void 0&&(u=g(j,Mt));const ut=M?g(j,Mt):u;return ut.width=j,ut.height=Mt,ut.getContext("2d").drawImage(w,0,0,j,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+Mt+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function p(w){return w.generateMipmaps}function m(w){s.generateMipmap(w)}function x(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(w,M,D,G,Z=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=M;if(M===s.RED&&(D===s.FLOAT&&(j=s.R32F),D===s.HALF_FLOAT&&(j=s.R16F),D===s.UNSIGNED_BYTE&&(j=s.R8)),M===s.RED_INTEGER&&(D===s.UNSIGNED_BYTE&&(j=s.R8UI),D===s.UNSIGNED_SHORT&&(j=s.R16UI),D===s.UNSIGNED_INT&&(j=s.R32UI),D===s.BYTE&&(j=s.R8I),D===s.SHORT&&(j=s.R16I),D===s.INT&&(j=s.R32I)),M===s.RG&&(D===s.FLOAT&&(j=s.RG32F),D===s.HALF_FLOAT&&(j=s.RG16F),D===s.UNSIGNED_BYTE&&(j=s.RG8)),M===s.RG_INTEGER&&(D===s.UNSIGNED_BYTE&&(j=s.RG8UI),D===s.UNSIGNED_SHORT&&(j=s.RG16UI),D===s.UNSIGNED_INT&&(j=s.RG32UI),D===s.BYTE&&(j=s.RG8I),D===s.SHORT&&(j=s.RG16I),D===s.INT&&(j=s.RG32I)),M===s.RGB_INTEGER&&(D===s.UNSIGNED_BYTE&&(j=s.RGB8UI),D===s.UNSIGNED_SHORT&&(j=s.RGB16UI),D===s.UNSIGNED_INT&&(j=s.RGB32UI),D===s.BYTE&&(j=s.RGB8I),D===s.SHORT&&(j=s.RGB16I),D===s.INT&&(j=s.RGB32I)),M===s.RGBA_INTEGER&&(D===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),D===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),D===s.UNSIGNED_INT&&(j=s.RGBA32UI),D===s.BYTE&&(j=s.RGBA8I),D===s.SHORT&&(j=s.RGBA16I),D===s.INT&&(j=s.RGBA32I)),M===s.RGB&&D===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),M===s.RGBA){const Mt=Z?Kr:Jt.getTransfer(G);D===s.FLOAT&&(j=s.RGBA32F),D===s.HALF_FLOAT&&(j=s.RGBA16F),D===s.UNSIGNED_BYTE&&(j=Mt===he?s.SRGB8_ALPHA8:s.RGBA8),D===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),D===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(w,M){let D;return w?M===null||M===gi||M===Qi?D=s.DEPTH24_STENCIL8:M===ln?D=s.DEPTH32F_STENCIL8:M===zs&&(D=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===gi||M===Qi?D=s.DEPTH_COMPONENT24:M===ln?D=s.DEPTH_COMPONENT32F:M===zs&&(D=s.DEPTH_COMPONENT16),D}function P(w,M){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==De&&w.minFilter!==Ye?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){const M=w.target;M.removeEventListener("dispose",A),L(M),M.isVideoTexture&&h.delete(M)}function T(w){const M=w.target;M.removeEventListener("dispose",T),S(M)}function L(w){const M=n.get(w);if(M.__webglInit===void 0)return;const D=w.source,G=f.get(D);if(G){const Z=G[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(w),Object.keys(G).length===0&&f.delete(D)}n.remove(w)}function b(w){const M=n.get(w);s.deleteTexture(M.__webglTexture);const D=w.source,G=f.get(D);delete G[M.__cacheKey],o.memory.textures--}function S(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(M.__webglFramebuffer[G]))for(let Z=0;Z<M.__webglFramebuffer[G].length;Z++)s.deleteFramebuffer(M.__webglFramebuffer[G][Z]);else s.deleteFramebuffer(M.__webglFramebuffer[G]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[G])}else{if(Array.isArray(M.__webglFramebuffer))for(let G=0;G<M.__webglFramebuffer.length;G++)s.deleteFramebuffer(M.__webglFramebuffer[G]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let G=0;G<M.__webglColorRenderbuffer.length;G++)M.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[G]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const D=w.textures;for(let G=0,Z=D.length;G<Z;G++){const j=n.get(D[G]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(D[G])}n.remove(w)}let C=0;function F(){C=0}function U(){const w=C;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),C+=1,w}function H(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function q(w,M){const D=n.get(w);if(w.isVideoTexture&&rt(w),w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){const G=w.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(D,w,M);return}}e.bindTexture(s.TEXTURE_2D,D.__webglTexture,s.TEXTURE0+M)}function z(w,M){const D=n.get(w);if(w.version>0&&D.__version!==w.version){W(D,w,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,D.__webglTexture,s.TEXTURE0+M)}function Y(w,M){const D=n.get(w);if(w.version>0&&D.__version!==w.version){W(D,w,M);return}e.bindTexture(s.TEXTURE_3D,D.__webglTexture,s.TEXTURE0+M)}function k(w,M){const D=n.get(w);if(w.version>0&&D.__version!==w.version){tt(D,w,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+M)}const $={[mi]:s.REPEAT,[Zn]:s.CLAMP_TO_EDGE,[Gr]:s.MIRRORED_REPEAT},ct={[De]:s.NEAREST,[Ph]:s.NEAREST_MIPMAP_NEAREST,[Ls]:s.NEAREST_MIPMAP_LINEAR,[Ye]:s.LINEAR,[Fr]:s.LINEAR_MIPMAP_NEAREST,[In]:s.LINEAR_MIPMAP_LINEAR},pt={[df]:s.NEVER,[vf]:s.ALWAYS,[pf]:s.LESS,[Hh]:s.LEQUAL,[mf]:s.EQUAL,[xf]:s.GEQUAL,[gf]:s.GREATER,[_f]:s.NOTEQUAL};function at(w,M){if(M.type===ln&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ye||M.magFilter===Fr||M.magFilter===Ls||M.magFilter===In||M.minFilter===Ye||M.minFilter===Fr||M.minFilter===Ls||M.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,$[M.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,$[M.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,$[M.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ct[M.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ct[M.minFilter]),M.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,pt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===De||M.minFilter!==Ls&&M.minFilter!==In||M.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function xt(w,M){let D=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",A));const G=M.source;let Z=f.get(G);Z===void 0&&(Z={},f.set(G,Z));const j=H(M);if(j!==w.__cacheKey){Z[j]===void 0&&(Z[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Z[j].usedTimes++;const Mt=Z[w.__cacheKey];Mt!==void 0&&(Z[w.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(M)),w.__cacheKey=j,w.__webglTexture=Z[j].texture}return D}function W(w,M,D){let G=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(G=s.TEXTURE_3D);const Z=xt(w,M),j=M.source;e.bindTexture(G,w.__webglTexture,s.TEXTURE0+D);const Mt=n.get(j);if(j.version!==Mt.__version||Z===!0){e.activeTexture(s.TEXTURE0+D);const ut=Jt.getPrimaries(Jt.workingColorSpace),_t=M.colorSpace===Kn?null:Jt.getPrimaries(M.colorSpace),kt=M.colorSpace===Kn||ut===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let ot=_(M.image,!1,i.maxTextureSize);ot=Rt(M,ot);const Ct=r.convert(M.format,M.colorSpace),Ft=r.convert(M.type);let Bt=v(M.internalFormat,Ct,Ft,M.colorSpace,M.isVideoTexture);at(G,M);let Pt;const Kt=M.mipmaps,Vt=M.isVideoTexture!==!0,ie=Mt.__version===void 0||Z===!0,N=j.dataReady,St=P(M,ot);if(M.isDepthTexture)Bt=y(M.format===ts,M.type),ie&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,Bt,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,Bt,ot.width,ot.height,0,Ct,Ft,null));else if(M.isDataTexture)if(Kt.length>0){Vt&&ie&&e.texStorage2D(s.TEXTURE_2D,St,Bt,Kt[0].width,Kt[0].height);for(let V=0,et=Kt.length;V<et;V++)Pt=Kt[V],Vt?N&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,Pt.width,Pt.height,Ct,Ft,Pt.data):e.texImage2D(s.TEXTURE_2D,V,Bt,Pt.width,Pt.height,0,Ct,Ft,Pt.data);M.generateMipmaps=!1}else Vt?(ie&&e.texStorage2D(s.TEXTURE_2D,St,Bt,ot.width,ot.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot.width,ot.height,Ct,Ft,ot.data)):e.texImage2D(s.TEXTURE_2D,0,Bt,ot.width,ot.height,0,Ct,Ft,ot.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Vt&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,Bt,Kt[0].width,Kt[0].height,ot.depth);for(let V=0,et=Kt.length;V<et;V++)if(Pt=Kt[V],M.format!==je)if(Ct!==null)if(Vt){if(N)if(M.layerUpdates.size>0){const vt=Cl(Pt.width,Pt.height,M.format,M.type);for(const Et of M.layerUpdates){const Wt=Pt.data.subarray(Et*vt/Pt.data.BYTES_PER_ELEMENT,(Et+1)*vt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,Et,Pt.width,Pt.height,1,Ct,Wt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,Pt.width,Pt.height,ot.depth,Ct,Pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,Bt,Pt.width,Pt.height,ot.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,Pt.width,Pt.height,ot.depth,Ct,Ft,Pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,V,Bt,Pt.width,Pt.height,ot.depth,0,Ct,Ft,Pt.data)}else{Vt&&ie&&e.texStorage2D(s.TEXTURE_2D,St,Bt,Kt[0].width,Kt[0].height);for(let V=0,et=Kt.length;V<et;V++)Pt=Kt[V],M.format!==je?Ct!==null?Vt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,Pt.width,Pt.height,Ct,Pt.data):e.compressedTexImage2D(s.TEXTURE_2D,V,Bt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?N&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,Pt.width,Pt.height,Ct,Ft,Pt.data):e.texImage2D(s.TEXTURE_2D,V,Bt,Pt.width,Pt.height,0,Ct,Ft,Pt.data)}else if(M.isDataArrayTexture)if(Vt){if(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,Bt,ot.width,ot.height,ot.depth),N)if(M.layerUpdates.size>0){const V=Cl(ot.width,ot.height,M.format,M.type);for(const et of M.layerUpdates){const vt=ot.data.subarray(et*V/ot.data.BYTES_PER_ELEMENT,(et+1)*V/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,ot.width,ot.height,1,Ct,Ft,vt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Ct,Ft,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,ot.width,ot.height,ot.depth,0,Ct,Ft,ot.data);else if(M.isData3DTexture)Vt?(ie&&e.texStorage3D(s.TEXTURE_3D,St,Bt,ot.width,ot.height,ot.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Ct,Ft,ot.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,ot.width,ot.height,ot.depth,0,Ct,Ft,ot.data);else if(M.isFramebufferTexture){if(ie)if(Vt)e.texStorage2D(s.TEXTURE_2D,St,Bt,ot.width,ot.height);else{let V=ot.width,et=ot.height;for(let vt=0;vt<St;vt++)e.texImage2D(s.TEXTURE_2D,vt,Bt,V,et,0,Ct,Ft,null),V>>=1,et>>=1}}else if(Kt.length>0){if(Vt&&ie){const V=gt(Kt[0]);e.texStorage2D(s.TEXTURE_2D,St,Bt,V.width,V.height)}for(let V=0,et=Kt.length;V<et;V++)Pt=Kt[V],Vt?N&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,Ct,Ft,Pt):e.texImage2D(s.TEXTURE_2D,V,Bt,Ct,Ft,Pt);M.generateMipmaps=!1}else if(Vt){if(ie){const V=gt(ot);e.texStorage2D(s.TEXTURE_2D,St,Bt,V.width,V.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ct,Ft,ot)}else e.texImage2D(s.TEXTURE_2D,0,Bt,Ct,Ft,ot);p(M)&&m(G),Mt.__version=j.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function tt(w,M,D){if(M.image.length!==6)return;const G=xt(w,M),Z=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+D);const j=n.get(Z);if(Z.version!==j.__version||G===!0){e.activeTexture(s.TEXTURE0+D);const Mt=Jt.getPrimaries(Jt.workingColorSpace),ut=M.colorSpace===Kn?null:Jt.getPrimaries(M.colorSpace),_t=M.colorSpace===Kn||Mt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const kt=M.isCompressedTexture||M.image[0].isCompressedTexture,ot=M.image[0]&&M.image[0].isDataTexture,Ct=[];for(let et=0;et<6;et++)!kt&&!ot?Ct[et]=_(M.image[et],!0,i.maxCubemapSize):Ct[et]=ot?M.image[et].image:M.image[et],Ct[et]=Rt(M,Ct[et]);const Ft=Ct[0],Bt=r.convert(M.format,M.colorSpace),Pt=r.convert(M.type),Kt=v(M.internalFormat,Bt,Pt,M.colorSpace),Vt=M.isVideoTexture!==!0,ie=j.__version===void 0||G===!0,N=Z.dataReady;let St=P(M,Ft);at(s.TEXTURE_CUBE_MAP,M);let V;if(kt){Vt&&ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,St,Kt,Ft.width,Ft.height);for(let et=0;et<6;et++){V=Ct[et].mipmaps;for(let vt=0;vt<V.length;vt++){const Et=V[vt];M.format!==je?Bt!==null?Vt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,0,0,Et.width,Et.height,Bt,Et.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,Kt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,0,0,Et.width,Et.height,Bt,Pt,Et.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,Kt,Et.width,Et.height,0,Bt,Pt,Et.data)}}}else{if(V=M.mipmaps,Vt&&ie){V.length>0&&St++;const et=gt(Ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,St,Kt,et.width,et.height)}for(let et=0;et<6;et++)if(ot){Vt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ct[et].width,Ct[et].height,Bt,Pt,Ct[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Kt,Ct[et].width,Ct[et].height,0,Bt,Pt,Ct[et].data);for(let vt=0;vt<V.length;vt++){const Wt=V[vt].image[et].image;Vt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,0,0,Wt.width,Wt.height,Bt,Pt,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,Kt,Wt.width,Wt.height,0,Bt,Pt,Wt.data)}}else{Vt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Bt,Pt,Ct[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Kt,Bt,Pt,Ct[et]);for(let vt=0;vt<V.length;vt++){const Et=V[vt];Vt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,0,0,Bt,Pt,Et.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,Kt,Bt,Pt,Et.image[et])}}}p(M)&&m(s.TEXTURE_CUBE_MAP),j.__version=Z.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function dt(w,M,D,G,Z,j){const Mt=r.convert(D.format,D.colorSpace),ut=r.convert(D.type),_t=v(D.internalFormat,Mt,ut,D.colorSpace),kt=n.get(M),ot=n.get(D);if(ot.__renderTarget=M,!kt.__hasExternalTextures){const Ct=Math.max(1,M.width>>j),Ft=Math.max(1,M.height>>j);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,j,_t,Ct,Ft,M.depth,0,Mt,ut,null):e.texImage2D(Z,j,_t,Ct,Ft,0,Mt,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),lt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,Z,ot.__webglTexture,0,Q(M)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,Z,ot.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(w,M,D){if(s.bindRenderbuffer(s.RENDERBUFFER,w),M.depthBuffer){const G=M.depthTexture,Z=G&&G.isDepthTexture?G.type:null,j=y(M.stencilBuffer,Z),Mt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=Q(M);lt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,j,M.width,M.height):D?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,j,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,j,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,w)}else{const G=M.textures;for(let Z=0;Z<G.length;Z++){const j=G[Z],Mt=r.convert(j.format,j.colorSpace),ut=r.convert(j.type),_t=v(j.internalFormat,Mt,ut,j.colorSpace),kt=Q(M);D&&lt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,_t,M.width,M.height):lt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt,_t,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,_t,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(M.depthTexture);G.__renderTarget=M,(!G.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const Z=G.__webglTexture,j=Q(M);if(M.depthTexture.format===Xi)lt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(M.depthTexture.format===ts)lt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Tt(w){const M=n.get(w),D=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const G=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),G){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,G.removeEventListener("dispose",Z)};G.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=G}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Lt(M.__webglFramebuffer,w)}else if(D){M.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[G]),M.__webglDepthbuffer[G]===void 0)M.__webglDepthbuffer[G]=s.createRenderbuffer(),it(M.__webglDepthbuffer[G],w,!1);else{const Z=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),it(M.__webglDepthbuffer,w,!1);else{const G=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,G,s.RENDERBUFFER,Z)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(w,M,D){const G=n.get(w);M!==void 0&&dt(G.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),D!==void 0&&Tt(w)}function Ot(w){const M=w.texture,D=n.get(w),G=n.get(M);w.addEventListener("dispose",T);const Z=w.textures,j=w.isWebGLCubeRenderTarget===!0,Mt=Z.length>1;if(Mt||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=M.version,o.memory.textures++),j){D.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer[ut]=[];for(let _t=0;_t<M.mipmaps.length;_t++)D.__webglFramebuffer[ut][_t]=s.createFramebuffer()}else D.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer=[];for(let ut=0;ut<M.mipmaps.length;ut++)D.__webglFramebuffer[ut]=s.createFramebuffer()}else D.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let ut=0,_t=Z.length;ut<_t;ut++){const kt=n.get(Z[ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&lt(w)===!1){D.__webglMultisampledFramebuffer=s.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ut=0;ut<Z.length;ut++){const _t=Z[ut];D.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,D.__webglColorRenderbuffer[ut]);const kt=r.convert(_t.format,_t.colorSpace),ot=r.convert(_t.type),Ct=v(_t.internalFormat,kt,ot,_t.colorSpace,w.isXRRenderTarget===!0),Ft=Q(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,Ct,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,D.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(D.__webglDepthRenderbuffer=s.createRenderbuffer(),it(D.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),at(s.TEXTURE_CUBE_MAP,M);for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)dt(D.__webglFramebuffer[ut][_t],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else dt(D.__webglFramebuffer[ut],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);p(M)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ut=0,_t=Z.length;ut<_t;ut++){const kt=Z[ut],ot=n.get(kt);e.bindTexture(s.TEXTURE_2D,ot.__webglTexture),at(s.TEXTURE_2D,kt),dt(D.__webglFramebuffer,w,kt,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),p(kt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,G.__webglTexture),at(ut,M),M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)dt(D.__webglFramebuffer[_t],w,M,s.COLOR_ATTACHMENT0,ut,_t);else dt(D.__webglFramebuffer,w,M,s.COLOR_ATTACHMENT0,ut,0);p(M)&&m(ut),e.unbindTexture()}w.depthBuffer&&Tt(w)}function J(w){const M=w.textures;for(let D=0,G=M.length;D<G;D++){const Z=M[D];if(p(Z)){const j=x(w),Mt=n.get(Z).__webglTexture;e.bindTexture(j,Mt),m(j),e.unbindTexture()}}}const nt=[],R=[];function mt(w){if(w.samples>0){if(lt(w)===!1){const M=w.textures,D=w.width,G=w.height;let Z=s.COLOR_BUFFER_BIT;const j=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(w),ut=M.length>1;if(ut)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[_t]);const kt=n.get(M[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,kt,0)}s.blitFramebuffer(0,0,D,G,0,0,D,G,Z,s.NEAREST),c===!0&&(nt.length=0,R.length=0,nt.push(s.COLOR_ATTACHMENT0+_t),w.depthBuffer&&w.resolveDepthBuffer===!1&&(nt.push(j),R.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,R)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[_t]);const kt=n.get(M[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const M=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Q(w){return Math.min(i.maxSamples,w.samples)}function lt(w){const M=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function rt(w){const M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Rt(w,M){const D=w.colorSpace,G=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||D!==ze&&D!==Kn&&(Jt.getTransfer(D)===he?(G!==je||Z!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),M}function gt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=z,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=bt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=lt}function B0(s,t){function e(n,i=Kn){let r;const o=Jt.getTransfer(i);if(n===On)return s.UNSIGNED_BYTE;if(n===Ka)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Dh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Lh)return s.BYTE;if(n===Ih)return s.SHORT;if(n===zs)return s.UNSIGNED_SHORT;if(n===ja)return s.INT;if(n===gi)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===Ys)return s.HALF_FLOAT;if(n===Nh)return s.ALPHA;if(n===Uh)return s.RGB;if(n===je)return s.RGBA;if(n===Fh)return s.LUMINANCE;if(n===Oh)return s.LUMINANCE_ALPHA;if(n===Xi)return s.DEPTH_COMPONENT;if(n===ts)return s.DEPTH_STENCIL;if(n===Za)return s.RED;if(n===Ja)return s.RED_INTEGER;if(n===Bh)return s.RG;if(n===Qa)return s.RG_INTEGER;if(n===tc)return s.RGBA_INTEGER;if(n===Or||n===Br||n===zr||n===kr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sa||n===ra||n===oa||n===aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===la||n===ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ca||n===la)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ha)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ua||n===fa||n===da||n===pa||n===ma||n===ga||n===_a||n===xa||n===va||n===Ma||n===ya||n===Sa||n===ba||n===Ea)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ua)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ga)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_a)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ba)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ea)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hr||n===Ta||n===wa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hr)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zh||n===Aa||n===Ra||n===Ca)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class z0 extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zt extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k0={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const H0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class G0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new be,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ei({vertexShader:H0,fragmentShader:V0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W0 extends as{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=new G0,p=e.getContextAttributes();let m=null,x=null;const v=[],y=[],P=new ht;let A=null;const T=new Fe;T.viewport=new ee;const L=new Fe;L.viewport=new ee;const b=[T,L],S=new z0;let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let tt=v[W];return tt===void 0&&(tt=new Po,v[W]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(W){let tt=v[W];return tt===void 0&&(tt=new Po,v[W]=tt),tt.getGripSpace()},this.getHand=function(W){let tt=v[W];return tt===void 0&&(tt=new Po,v[W]=tt),tt.getHandSpace()};function U(W){const tt=y.indexOf(W.inputSource);if(tt===-1)return;const dt=v[tt];dt!==void 0&&(dt.update(W.inputSource,W.frame,l||o),dt.dispatchEvent({type:W.type,data:W.inputSource}))}function H(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",q);for(let W=0;W<v.length;W++){const tt=y[W];tt!==null&&(y[W]=null,v[W].disconnect(tt))}C=null,F=null,_.reset(),t.setRenderTarget(m),d=null,f=null,u=null,i=null,x=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",H),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new _i(d.framebufferWidth,d.framebufferHeight,{format:je,type:On,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,dt=null,it=null;p.depth&&(it=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?ts:Xi,dt=p.stencil?Qi:gi);const Lt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Lt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new _i(f.textureWidth,f.textureHeight,{format:je,type:On,depthTexture:new tu(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),xt.setContext(i),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(W){for(let tt=0;tt<W.removed.length;tt++){const dt=W.removed[tt],it=y.indexOf(dt);it>=0&&(y[it]=null,v[it].disconnect(dt))}for(let tt=0;tt<W.added.length;tt++){const dt=W.added[tt];let it=y.indexOf(dt);if(it===-1){for(let Tt=0;Tt<v.length;Tt++)if(Tt>=y.length){y.push(dt),it=Tt;break}else if(y[Tt]===null){y[Tt]=dt,it=Tt;break}if(it===-1)break}const Lt=v[it];Lt&&Lt.connect(dt)}}const z=new I,Y=new I;function k(W,tt,dt){z.setFromMatrixPosition(tt.matrixWorld),Y.setFromMatrixPosition(dt.matrixWorld);const it=z.distanceTo(Y),Lt=tt.projectionMatrix.elements,Tt=dt.projectionMatrix.elements,bt=Lt[14]/(Lt[10]-1),Ot=Lt[14]/(Lt[10]+1),J=(Lt[9]+1)/Lt[5],nt=(Lt[9]-1)/Lt[5],R=(Lt[8]-1)/Lt[0],mt=(Tt[8]+1)/Tt[0],Q=bt*R,lt=bt*mt,rt=it/(-R+mt),Rt=rt*-R;if(tt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Rt),W.translateZ(rt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Lt[10]===-1)W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const gt=bt+rt,w=Ot+rt,M=Q-Rt,D=lt+(it-Rt),G=J*Ot/w*gt,Z=nt*Ot/w*gt;W.projectionMatrix.makePerspective(M,D,G,Z,gt,w),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function $(W,tt){tt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(tt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let tt=W.near,dt=W.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(dt=_.depthFar)),S.near=L.near=T.near=tt,S.far=L.far=T.far=dt,(C!==S.near||F!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,F=S.far),T.layers.mask=W.layers.mask|2,L.layers.mask=W.layers.mask|4,S.layers.mask=T.layers.mask|L.layers.mask;const it=W.parent,Lt=S.cameras;$(S,it);for(let Tt=0;Tt<Lt.length;Tt++)$(Lt[Tt],it);Lt.length===2?k(S,T,L):S.projectionMatrix.copy(T.projectionMatrix),ct(W,S,it)};function ct(W,tt,dt){dt===null?W.matrix.copy(tt.matrixWorld):(W.matrix.copy(dt.matrixWorld),W.matrix.invert(),W.matrix.multiply(tt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=es*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let pt=null;function at(W,tt){if(h=tt.getViewerPose(l||o),g=tt,h!==null){const dt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let it=!1;dt.length!==S.cameras.length&&(S.cameras.length=0,it=!0);for(let Tt=0;Tt<dt.length;Tt++){const bt=dt[Tt];let Ot=null;if(d!==null)Ot=d.getViewport(bt);else{const nt=u.getViewSubImage(f,bt);Ot=nt.viewport,Tt===0&&(t.setRenderTargetTextures(x,nt.colorTexture,f.ignoreDepthValues?void 0:nt.depthStencilTexture),t.setRenderTarget(x))}let J=b[Tt];J===void 0&&(J=new Fe,J.layers.enable(Tt),J.viewport=new ee,b[Tt]=J),J.matrix.fromArray(bt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(bt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Tt===0&&(S.matrix.copy(J.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),it===!0&&S.cameras.push(J)}const Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Tt=u.getDepthInformation(dt[0]);Tt&&Tt.isValid&&Tt.texture&&_.init(t,Tt,i.renderState)}}for(let dt=0;dt<v.length;dt++){const it=y[dt],Lt=v[dt];it!==null&&Lt!==void 0&&Lt.update(it,tt,l||o)}pt&&pt(W,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const xt=new Qh;xt.setAnimationLoop(at),this.setAnimationLoop=function(W){pt=W},this.dispose=function(){}}}const ci=new un,X0=new zt;function q0(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,$h(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,x,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,x,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Be&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Be&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=t.get(m),v=x.envMap,y=x.envMapRotation;v&&(p.envMap.value=v,ci.copy(y),ci.x*=-1,ci.y*=-1,ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),p.envMapRotation.value.setFromMatrix4(X0.makeRotationFromEuler(ci)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,x,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Be&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Y0(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function l(x,v){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",p));const P=v.program;n.updateUBOMapping(x,P);const A=t.render.frame;r[x.id]!==A&&(f(x),r[x.id]=A)}function h(x){const v=u();x.__bindingPointIndex=v;const y=s.createBuffer(),P=x.__size,A=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],y=x.uniforms,P=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,T=y.length;A<T;A++){const L=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,S=L.length;b<S;b++){const C=L[b];if(d(C,A,b,P)===!0){const F=C.__offset,U=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let q=0;q<U.length;q++){const z=U[q],Y=_(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,F+H,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,v,y,P){const A=x.value,T=v+"_"+y;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const L=P[T];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return P[T]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(x){const v=x.uniforms;let y=0;const P=16;for(let T=0,L=v.length;T<L;T++){const b=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,C=b.length;S<C;S++){const F=b[S],U=Array.isArray(F.value)?F.value:[F.value];for(let H=0,q=U.length;H<q;H++){const z=U[H],Y=_(z),k=y%P,$=k%Y.boundary,ct=k+$;y+=$,ct!==0&&P-ct<Y.storage&&(y+=P-ct),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=Y.storage}}}const A=y%P;return A>0&&(y+=P-A),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}class j0{constructor(t={}){const{canvas:e=Ff(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const x=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this.toneMapping=Nn,this.toneMappingExposure=1;const y=this;let P=!1,A=0,T=0,L=null,b=-1,S=null;const C=new ee,F=new ee;let U=null;const H=new wt(0);let q=0,z=e.width,Y=e.height,k=1,$=null,ct=null;const pt=new ee(0,0,z,Y),at=new ee(0,0,z,Y);let xt=!1;const W=new nc;let tt=!1,dt=!1;const it=new zt,Lt=new zt,Tt=new I,bt=new ee,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function nt(){return L===null?k:1}let R=n;function mt(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qa}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),R===null){const O="webgl2";if(R=mt(O,E),R===null)throw mt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Q,lt,rt,Rt,gt,w,M,D,G,Z,j,Mt,ut,_t,kt,ot,Ct,Ft,Bt,Pt,Kt,Vt,ie,N;function St(){Q=new Qm(R),Q.init(),Vt=new B0(R,Q),lt=new Ym(R,Q,t,Vt),rt=new U0(R,Q),lt.reverseDepthBuffer&&f&&rt.buffers.depth.setReversed(!0),Rt=new ng(R),gt=new M0,w=new O0(R,Q,rt,gt,lt,Vt,Rt),M=new Km(y),D=new Jm(y),G=new ld(R),ie=new Xm(R,G),Z=new tg(R,G,Rt,ie),j=new sg(R,Z,G,Rt),Bt=new ig(R,lt,w),ot=new jm(gt),Mt=new v0(y,M,D,Q,lt,ie,ot),ut=new q0(y,gt),_t=new S0,kt=new R0(Q),Ft=new Wm(y,M,D,rt,j,d,c),Ct=new D0(y,j,lt),N=new Y0(R,Rt,lt,rt),Pt=new qm(R,Q,Rt),Kt=new eg(R,Q,Rt),Rt.programs=Mt.programs,y.capabilities=lt,y.extensions=Q,y.properties=gt,y.renderLists=_t,y.shadowMap=Ct,y.state=rt,y.info=Rt}St();const V=new W0(y,R);this.xr=V,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=Q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(z,Y,!1))},this.getSize=function(E){return E.set(z,Y)},this.setSize=function(E,O,X=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,Y=O,e.width=Math.floor(E*k),e.height=Math.floor(O*k),X===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(z*k,Y*k).floor()},this.setDrawingBufferSize=function(E,O,X){z=E,Y=O,k=X,e.width=Math.floor(E*X),e.height=Math.floor(O*X),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(pt)},this.setViewport=function(E,O,X,K){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,O,X,K),rt.viewport(C.copy(pt).multiplyScalar(k).round())},this.getScissor=function(E){return E.copy(at)},this.setScissor=function(E,O,X,K){E.isVector4?at.set(E.x,E.y,E.z,E.w):at.set(E,O,X,K),rt.scissor(F.copy(at).multiplyScalar(k).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(E){rt.setScissorTest(xt=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){ct=E},this.getClearColor=function(E){return E.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(E=!0,O=!0,X=!0){let K=0;if(E){let B=!1;if(L!==null){const ft=L.texture.format;B=ft===tc||ft===Qa||ft===Ja}if(B){const ft=L.texture.type,At=ft===On||ft===gi||ft===zs||ft===Qi||ft===Ka||ft===$a,It=Ft.getClearColor(),Dt=Ft.getClearAlpha(),Gt=It.r,Xt=It.g,Nt=It.b;At?(g[0]=Gt,g[1]=Xt,g[2]=Nt,g[3]=Dt,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Gt,_[1]=Xt,_[2]=Nt,_[3]=Dt,R.clearBufferiv(R.COLOR,0,_))}else K|=R.COLOR_BUFFER_BIT}O&&(K|=R.DEPTH_BUFFER_BIT),X&&(K|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),_t.dispose(),kt.dispose(),gt.dispose(),M.dispose(),D.dispose(),j.dispose(),ie.dispose(),N.dispose(),Mt.dispose(),V.dispose(),V.removeEventListener("sessionstart",yc),V.removeEventListener("sessionend",Sc),ni.stop()};function et(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=Rt.autoReset,O=Ct.enabled,X=Ct.autoUpdate,K=Ct.needsUpdate,B=Ct.type;St(),Rt.autoReset=E,Ct.enabled=O,Ct.autoUpdate=X,Ct.needsUpdate=K,Ct.type=B}function Et(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Wt(E){const O=E.target;O.removeEventListener("dispose",Wt),ge(O)}function ge(E){we(E),gt.remove(E)}function we(E){const O=gt.get(E).programs;O!==void 0&&(O.forEach(function(X){Mt.releaseProgram(X)}),E.isShaderMaterial&&Mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,X,K,B,ft){O===null&&(O=Ot);const At=B.isMesh&&B.matrixWorld.determinant()<0,It=Ru(E,O,X,K,B);rt.setMaterial(K,At);let Dt=X.index,Gt=1;if(K.wireframe===!0){if(Dt=Z.getWireframeAttribute(X),Dt===void 0)return;Gt=2}const Xt=X.drawRange,Nt=X.attributes.position;let te=Xt.start*Gt,ue=(Xt.start+Xt.count)*Gt;ft!==null&&(te=Math.max(te,ft.start*Gt),ue=Math.min(ue,(ft.start+ft.count)*Gt)),Dt!==null?(te=Math.max(te,0),ue=Math.min(ue,Dt.count)):Nt!=null&&(te=Math.max(te,0),ue=Math.min(ue,Nt.count));const de=ue-te;if(de<0||de===1/0)return;ie.setup(B,K,It,X,Dt);let ke,se=Pt;if(Dt!==null&&(ke=G.get(Dt),se=Kt,se.setIndex(ke)),B.isMesh)K.wireframe===!0?(rt.setLineWidth(K.wireframeLinewidth*nt()),se.setMode(R.LINES)):se.setMode(R.TRIANGLES);else if(B.isLine){let Ut=K.linewidth;Ut===void 0&&(Ut=1),rt.setLineWidth(Ut*nt()),B.isLineSegments?se.setMode(R.LINES):B.isLineLoop?se.setMode(R.LINE_LOOP):se.setMode(R.LINE_STRIP)}else B.isPoints?se.setMode(R.POINTS):B.isSprite&&se.setMode(R.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)se.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))se.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ut=B._multiDrawStarts,Sn=B._multiDrawCounts,re=B._multiDrawCount,sn=Dt?G.get(Dt).bytesPerElement:1,Mi=gt.get(K).currentProgram.getUniforms();for(let Ge=0;Ge<re;Ge++)Mi.setValue(R,"_gl_DrawID",Ge),se.render(Ut[Ge]/sn,Sn[Ge])}else if(B.isInstancedMesh)se.renderInstances(te,de,B.count);else if(X.isInstancedBufferGeometry){const Ut=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Sn=Math.min(X.instanceCount,Ut);se.renderInstances(te,de,Sn)}else se.render(te,de)};function ae(E,O,X){E.transparent===!0&&E.side===Ve&&E.forceSinglePass===!1?(E.side=Be,E.needsUpdate=!0,$s(E,O,X),E.side=Fn,E.needsUpdate=!0,$s(E,O,X),E.side=Ve):$s(E,O,X)}this.compile=function(E,O,X=null){X===null&&(X=E),m=kt.get(X),m.init(O),v.push(m),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==X&&E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const K=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ft=B.material;if(ft)if(Array.isArray(ft))for(let At=0;At<ft.length;At++){const It=ft[At];ae(It,X,B),K.add(It)}else ae(ft,X,B),K.add(ft)}),v.pop(),m=null,K},this.compileAsync=function(E,O,X=null){const K=this.compile(E,O,X);return new Promise(B=>{function ft(){if(K.forEach(function(At){gt.get(At).currentProgram.isReady()&&K.delete(At)}),K.size===0){B(E);return}setTimeout(ft,10)}Q.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let nn=null;function yn(E){nn&&nn(E)}function yc(){ni.stop()}function Sc(){ni.start()}const ni=new Qh;ni.setAnimationLoop(yn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(E){nn=E,V.setAnimationLoop(E),E===null?ni.stop():ni.start()},V.addEventListener("sessionstart",yc),V.addEventListener("sessionend",Sc),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(O),O=V.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,O,L),m=kt.get(E,v.length),m.init(O),v.push(m),Lt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(Lt),dt=this.localClippingEnabled,tt=ot.init(this.clippingPlanes,dt),p=_t.get(E,x.length),p.init(),x.push(p),V.enabled===!0&&V.isPresenting===!0){const ft=y.xr.getDepthSensingMesh();ft!==null&&eo(ft,O,-1/0,y.sortObjects)}eo(E,O,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort($,ct),J=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,J&&Ft.addToRenderList(p,E),this.info.render.frame++,tt===!0&&ot.beginShadows();const X=m.state.shadowsArray;Ct.render(X,E,O),tt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=p.opaque,B=p.transmissive;if(m.setupLights(),O.isArrayCamera){const ft=O.cameras;if(B.length>0)for(let At=0,It=ft.length;At<It;At++){const Dt=ft[At];Ec(K,B,E,Dt)}J&&Ft.render(E);for(let At=0,It=ft.length;At<It;At++){const Dt=ft[At];bc(p,E,Dt,Dt.viewport)}}else B.length>0&&Ec(K,B,E,O),J&&Ft.render(E),bc(p,E,O);L!==null&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(y,E,O),ie.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?(m=v[v.length-1],tt===!0&&ot.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function eo(E,O,X,K){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){K&&bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Lt);const At=j.update(E),It=E.material;It.visible&&p.push(E,At,It,X,bt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){const At=j.update(E),It=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),bt.copy(E.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),bt.copy(At.boundingSphere.center)),bt.applyMatrix4(E.matrixWorld).applyMatrix4(Lt)),Array.isArray(It)){const Dt=At.groups;for(let Gt=0,Xt=Dt.length;Gt<Xt;Gt++){const Nt=Dt[Gt],te=It[Nt.materialIndex];te&&te.visible&&p.push(E,At,te,X,bt.z,Nt)}}else It.visible&&p.push(E,At,It,X,bt.z,null)}}const ft=E.children;for(let At=0,It=ft.length;At<It;At++)eo(ft[At],O,X,K)}function bc(E,O,X,K){const B=E.opaque,ft=E.transmissive,At=E.transparent;m.setupLightsView(X),tt===!0&&ot.setGlobalState(y.clippingPlanes,X),K&&rt.viewport(C.copy(K)),B.length>0&&Ks(B,O,X),ft.length>0&&Ks(ft,O,X),At.length>0&&Ks(At,O,X),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Ec(E,O,X,K){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new _i(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Ys:On,minFilter:In,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const ft=m.state.transmissionRenderTarget[K.id],At=K.viewport||C;ft.setSize(At.z,At.w);const It=y.getRenderTarget();y.setRenderTarget(ft),y.getClearColor(H),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),J&&Ft.render(X);const Dt=y.toneMapping;y.toneMapping=Nn;const Gt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),tt===!0&&ot.setGlobalState(y.clippingPlanes,K),Ks(E,X,K),w.updateMultisampleRenderTarget(ft),w.updateRenderTargetMipmap(ft),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Nt=0,te=O.length;Nt<te;Nt++){const ue=O[Nt],de=ue.object,ke=ue.geometry,se=ue.material,Ut=ue.group;if(se.side===Ve&&de.layers.test(K.layers)){const Sn=se.side;se.side=Be,se.needsUpdate=!0,Tc(de,X,K,ke,se,Ut),se.side=Sn,se.needsUpdate=!0,Xt=!0}}Xt===!0&&(w.updateMultisampleRenderTarget(ft),w.updateRenderTargetMipmap(ft))}y.setRenderTarget(It),y.setClearColor(H,q),Gt!==void 0&&(K.viewport=Gt),y.toneMapping=Dt}function Ks(E,O,X){const K=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ft=E.length;B<ft;B++){const At=E[B],It=At.object,Dt=At.geometry,Gt=K===null?At.material:K,Xt=At.group;It.layers.test(X.layers)&&Tc(It,O,X,Dt,Gt,Xt)}}function Tc(E,O,X,K,B,ft){E.onBeforeRender(y,O,X,K,B,ft),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(y,O,X,K,E,ft),B.transparent===!0&&B.side===Ve&&B.forceSinglePass===!1?(B.side=Be,B.needsUpdate=!0,y.renderBufferDirect(X,O,K,B,E,ft),B.side=Fn,B.needsUpdate=!0,y.renderBufferDirect(X,O,K,B,E,ft),B.side=Ve):y.renderBufferDirect(X,O,K,B,E,ft),E.onAfterRender(y,O,X,K,B,ft)}function $s(E,O,X){O.isScene!==!0&&(O=Ot);const K=gt.get(E),B=m.state.lights,ft=m.state.shadowsArray,At=B.state.version,It=Mt.getParameters(E,B.state,ft,O,X),Dt=Mt.getProgramCacheKey(It);let Gt=K.programs;K.environment=E.isMeshStandardMaterial?O.environment:null,K.fog=O.fog,K.envMap=(E.isMeshStandardMaterial?D:M).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",Wt),Gt=new Map,K.programs=Gt);let Xt=Gt.get(Dt);if(Xt!==void 0){if(K.currentProgram===Xt&&K.lightsStateVersion===At)return Ac(E,It),Xt}else It.uniforms=Mt.getUniforms(E),E.onBeforeCompile(It,y),Xt=Mt.acquireProgram(It,Dt),Gt.set(Dt,Xt),K.uniforms=It.uniforms;const Nt=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Nt.clippingPlanes=ot.uniform),Ac(E,It),K.needsLights=Pu(E),K.lightsStateVersion=At,K.needsLights&&(Nt.ambientLightColor.value=B.state.ambient,Nt.lightProbe.value=B.state.probe,Nt.directionalLights.value=B.state.directional,Nt.directionalLightShadows.value=B.state.directionalShadow,Nt.spotLights.value=B.state.spot,Nt.spotLightShadows.value=B.state.spotShadow,Nt.rectAreaLights.value=B.state.rectArea,Nt.ltc_1.value=B.state.rectAreaLTC1,Nt.ltc_2.value=B.state.rectAreaLTC2,Nt.pointLights.value=B.state.point,Nt.pointLightShadows.value=B.state.pointShadow,Nt.hemisphereLights.value=B.state.hemi,Nt.directionalShadowMap.value=B.state.directionalShadowMap,Nt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Nt.spotShadowMap.value=B.state.spotShadowMap,Nt.spotLightMatrix.value=B.state.spotLightMatrix,Nt.spotLightMap.value=B.state.spotLightMap,Nt.pointShadowMap.value=B.state.pointShadowMap,Nt.pointShadowMatrix.value=B.state.pointShadowMatrix),K.currentProgram=Xt,K.uniformsList=null,Xt}function wc(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Vr.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Ac(E,O){const X=gt.get(E);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Ru(E,O,X,K,B){O.isScene!==!0&&(O=Ot),w.resetTextureUnits();const ft=O.fog,At=K.isMeshStandardMaterial?O.environment:null,It=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ze,Dt=(K.isMeshStandardMaterial?D:M).get(K.envMap||At),Gt=K.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xt=!!X.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Nt=!!X.morphAttributes.position,te=!!X.morphAttributes.normal,ue=!!X.morphAttributes.color;let de=Nn;K.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(de=y.toneMapping);const ke=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,se=ke!==void 0?ke.length:0,Ut=gt.get(K),Sn=m.state.lights;if(tt===!0&&(dt===!0||E!==S)){const Je=E===S&&K.id===b;ot.setState(K,E,Je)}let re=!1;K.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Sn.state.version||Ut.outputColorSpace!==It||B.isBatchedMesh&&Ut.batching===!1||!B.isBatchedMesh&&Ut.batching===!0||B.isBatchedMesh&&Ut.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ut.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ut.instancing===!1||!B.isInstancedMesh&&Ut.instancing===!0||B.isSkinnedMesh&&Ut.skinning===!1||!B.isSkinnedMesh&&Ut.skinning===!0||B.isInstancedMesh&&Ut.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ut.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ut.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ut.instancingMorph===!1&&B.morphTexture!==null||Ut.envMap!==Dt||K.fog===!0&&Ut.fog!==ft||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ot.numPlanes||Ut.numIntersection!==ot.numIntersection)||Ut.vertexAlphas!==Gt||Ut.vertexTangents!==Xt||Ut.morphTargets!==Nt||Ut.morphNormals!==te||Ut.morphColors!==ue||Ut.toneMapping!==de||Ut.morphTargetsCount!==se)&&(re=!0):(re=!0,Ut.__version=K.version);let sn=Ut.currentProgram;re===!0&&(sn=$s(K,O,B));let Mi=!1,Ge=!1,ds=!1;const pe=sn.getUniforms(),fn=Ut.uniforms;if(rt.useProgram(sn.program)&&(Mi=!0,Ge=!0,ds=!0),K.id!==b&&(b=K.id,Ge=!0),Mi||S!==E){rt.buffers.depth.getReversed()?(it.copy(E.projectionMatrix),Bf(it),zf(it),pe.setValue(R,"projectionMatrix",it)):pe.setValue(R,"projectionMatrix",E.projectionMatrix),pe.setValue(R,"viewMatrix",E.matrixWorldInverse);const Bn=pe.map.cameraPosition;Bn!==void 0&&Bn.setValue(R,Tt.setFromMatrixPosition(E.matrixWorld)),lt.logarithmicDepthBuffer&&pe.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&pe.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Ge=!0,ds=!0)}if(B.isSkinnedMesh){pe.setOptional(R,B,"bindMatrix"),pe.setOptional(R,B,"bindMatrixInverse");const Je=B.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),pe.setValue(R,"boneTexture",Je.boneTexture,w))}B.isBatchedMesh&&(pe.setOptional(R,B,"batchingTexture"),pe.setValue(R,"batchingTexture",B._matricesTexture,w),pe.setOptional(R,B,"batchingIdTexture"),pe.setValue(R,"batchingIdTexture",B._indirectTexture,w),pe.setOptional(R,B,"batchingColorTexture"),B._colorsTexture!==null&&pe.setValue(R,"batchingColorTexture",B._colorsTexture,w));const ps=X.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&Bt.update(B,X,sn),(Ge||Ut.receiveShadow!==B.receiveShadow)&&(Ut.receiveShadow=B.receiveShadow,pe.setValue(R,"receiveShadow",B.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(fn.envMap.value=Dt,fn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&O.environment!==null&&(fn.envMapIntensity.value=O.environmentIntensity),Ge&&(pe.setValue(R,"toneMappingExposure",y.toneMappingExposure),Ut.needsLights&&Cu(fn,ds),ft&&K.fog===!0&&ut.refreshFogUniforms(fn,ft),ut.refreshMaterialUniforms(fn,K,k,Y,m.state.transmissionRenderTarget[E.id]),Vr.upload(R,wc(Ut),fn,w)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Vr.upload(R,wc(Ut),fn,w),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&pe.setValue(R,"center",B.center),pe.setValue(R,"modelViewMatrix",B.modelViewMatrix),pe.setValue(R,"normalMatrix",B.normalMatrix),pe.setValue(R,"modelMatrix",B.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Je=K.uniformsGroups;for(let Bn=0,zn=Je.length;Bn<zn;Bn++){const Rc=Je[Bn];N.update(Rc,sn),N.bind(Rc,sn)}}return sn}function Cu(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Pu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,O,X){gt.get(E.texture).__webglTexture=O,gt.get(E.depthTexture).__webglTexture=X;const K=gt.get(E);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=X===void 0,K.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const X=gt.get(E);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,X=0){L=E,A=O,T=X;let K=!0,B=null,ft=!1,At=!1;if(E){const Dt=gt.get(E);if(Dt.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(R.FRAMEBUFFER,null),K=!1;else if(Dt.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(Dt.__hasExternalTextures)w.rebindTextures(E,gt.get(E.texture).__webglTexture,gt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Nt=E.depthTexture;if(Dt.__boundDepthTexture!==Nt){if(Nt!==null&&gt.has(Nt)&&(E.width!==Nt.image.width||E.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Gt=E.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(At=!0);const Xt=gt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xt[O])?B=Xt[O][X]:B=Xt[O],ft=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?B=gt.get(E).__webglMultisampledFramebuffer:Array.isArray(Xt)?B=Xt[X]:B=Xt,C.copy(E.viewport),F.copy(E.scissor),U=E.scissorTest}else C.copy(pt).multiplyScalar(k).floor(),F.copy(at).multiplyScalar(k).floor(),U=xt;if(rt.bindFramebuffer(R.FRAMEBUFFER,B)&&K&&rt.drawBuffers(E,B),rt.viewport(C),rt.scissor(F),rt.setScissorTest(U),ft){const Dt=gt.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,Dt.__webglTexture,X)}else if(At){const Dt=gt.get(E.texture),Gt=O||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Dt.__webglTexture,X||0,Gt)}b=-1},this.readRenderTargetPixels=function(E,O,X,K,B,ft,At){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){rt.bindFramebuffer(R.FRAMEBUFFER,It);try{const Dt=E.texture,Gt=Dt.format,Xt=Dt.type;if(!lt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-K&&X>=0&&X<=E.height-B&&R.readPixels(O,X,K,B,Vt.convert(Gt),Vt.convert(Xt),ft)}finally{const Dt=L!==null?gt.get(L).__webglFramebuffer:null;rt.bindFramebuffer(R.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,O,X,K,B,ft,At){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){const Dt=E.texture,Gt=Dt.format,Xt=Dt.type;if(!lt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-K&&X>=0&&X<=E.height-B){rt.bindFramebuffer(R.FRAMEBUFFER,It);const Nt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Nt),R.bufferData(R.PIXEL_PACK_BUFFER,ft.byteLength,R.STREAM_READ),R.readPixels(O,X,K,B,Vt.convert(Gt),Vt.convert(Xt),0);const te=L!==null?gt.get(L).__webglFramebuffer:null;rt.bindFramebuffer(R.FRAMEBUFFER,te);const ue=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Of(R,ue,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Nt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ft),R.deleteBuffer(Nt),R.deleteSync(ue),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,X=0){E.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const K=Math.pow(2,-X),B=Math.floor(E.image.width*K),ft=Math.floor(E.image.height*K),At=O!==null?O.x:0,It=O!==null?O.y:0;w.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,X,0,0,At,It,B,ft),rt.unbindTexture()},this.copyTextureToTexture=function(E,O,X=null,K=null,B=0){E.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1],O=arguments[2],B=arguments[3]||0,X=null);let ft,At,It,Dt,Gt,Xt,Nt,te,ue;const de=E.isCompressedTexture?E.mipmaps[B]:E.image;X!==null?(ft=X.max.x-X.min.x,At=X.max.y-X.min.y,It=X.isBox3?X.max.z-X.min.z:1,Dt=X.min.x,Gt=X.min.y,Xt=X.isBox3?X.min.z:0):(ft=de.width,At=de.height,It=de.depth||1,Dt=0,Gt=0,Xt=0),K!==null?(Nt=K.x,te=K.y,ue=K.z):(Nt=0,te=0,ue=0);const ke=Vt.convert(O.format),se=Vt.convert(O.type);let Ut;O.isData3DTexture?(w.setTexture3D(O,0),Ut=R.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(w.setTexture2DArray(O,0),Ut=R.TEXTURE_2D_ARRAY):(w.setTexture2D(O,0),Ut=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);const Sn=R.getParameter(R.UNPACK_ROW_LENGTH),re=R.getParameter(R.UNPACK_IMAGE_HEIGHT),sn=R.getParameter(R.UNPACK_SKIP_PIXELS),Mi=R.getParameter(R.UNPACK_SKIP_ROWS),Ge=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,de.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,de.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Dt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Gt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Xt);const ds=E.isDataArrayTexture||E.isData3DTexture,pe=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const fn=gt.get(E),ps=gt.get(O),Je=gt.get(fn.__renderTarget),Bn=gt.get(ps.__renderTarget);rt.bindFramebuffer(R.READ_FRAMEBUFFER,Je.__webglFramebuffer),rt.bindFramebuffer(R.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let zn=0;zn<It;zn++)ds&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,gt.get(E).__webglTexture,B,Xt+zn),E.isDepthTexture?(pe&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,gt.get(O).__webglTexture,B,ue+zn),R.blitFramebuffer(Dt,Gt,ft,At,Nt,te,ft,At,R.DEPTH_BUFFER_BIT,R.NEAREST)):pe?R.copyTexSubImage3D(Ut,B,Nt,te,ue+zn,Dt,Gt,ft,At):R.copyTexSubImage2D(Ut,B,Nt,te,ue+zn,Dt,Gt,ft,At);rt.bindFramebuffer(R.READ_FRAMEBUFFER,null),rt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else pe?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Ut,B,Nt,te,ue,ft,At,It,ke,se,de.data):O.isCompressedArrayTexture?R.compressedTexSubImage3D(Ut,B,Nt,te,ue,ft,At,It,ke,de.data):R.texSubImage3D(Ut,B,Nt,te,ue,ft,At,It,ke,se,de):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,B,Nt,te,ft,At,ke,se,de.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,B,Nt,te,de.width,de.height,ke,de.data):R.texSubImage2D(R.TEXTURE_2D,B,Nt,te,ft,At,ke,se,de);R.pixelStorei(R.UNPACK_ROW_LENGTH,Sn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,re),R.pixelStorei(R.UNPACK_SKIP_PIXELS,sn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Mi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ge),B===0&&O.generateMipmaps&&R.generateMipmap(Ut),rt.unbindTexture()},this.copyTextureToTexture3D=function(E,O,X=null,K=null,B=0){return E.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,K=arguments[1]||null,E=arguments[2],O=arguments[3],B=arguments[4]||0),Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,X,K,B)},this.initRenderTarget=function(E){gt.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),rt.unbindTexture()},this.resetState=function(){A=0,T=0,L=null,rt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class rc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new rc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class K0 extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ru{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=La,this.updateRanges=[],this.version=0,this.uuid=en()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new I;class Gs{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Gs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Da extends Ke{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ui;const vs=new I,Fi=new I,Oi=new I,Bi=new ht,Ms=new ht,ou=new zt,_r=new I,ys=new I,xr=new I,Pl=new ht,Lo=new ht,Ll=new ht;class Il extends me{constructor(t=new Da){if(super(),this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ru(e,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new Gs(n,3,0,!1)),Ui.setAttribute("uv",new Gs(n,2,3,!1))}this.geometry=Ui,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),ou.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Oi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;vr(_r.set(-.5,-.5,0),Oi,o,Fi,i,r),vr(ys.set(.5,-.5,0),Oi,o,Fi,i,r),vr(xr.set(.5,.5,0),Oi,o,Fi,i,r),Pl.set(0,0),Lo.set(1,0),Ll.set(1,1);let a=t.ray.intersectTriangle(_r,ys,xr,!1,vs);if(a===null&&(vr(ys.set(-.5,.5,0),Oi,o,Fi,i,r),Lo.set(0,1),a=t.ray.intersectTriangle(_r,xr,ys,!1,vs),a===null))return;const c=t.ray.origin.distanceTo(vs);c<t.near||c>t.far||e.push({distance:c,point:vs.clone(),uv:qe.getInterpolation(vs,_r,ys,xr,Pl,Lo,Ll,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function vr(s,t,e,n,i,r){Bi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ms.x=r*Bi.x-i*Bi.y,Ms.y=i*Bi.x+r*Bi.y):Ms.copy(Bi),s.copy(t),s.x+=Ms.x,s.y+=Ms.y,s.applyMatrix4(ou)}const Dl=new I,Nl=new ee,Ul=new ee,$0=new I,Fl=new zt,Mr=new I,Io=new _n,Ol=new zt,Do=new $r;class Z0 extends Yt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ic,this.bindMatrix=new zt,this.bindMatrixInverse=new zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Mr),this.boundingBox.expandByPoint(Mr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Mr),this.boundingSphere.expandByPoint(Mr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Io.copy(this.boundingSphere),Io.applyMatrix4(i),t.ray.intersectsSphere(Io)!==!1&&(Ol.copy(i).invert(),Do.copy(t.ray).applyMatrix4(Ol),!(this.boundingBox!==null&&Do.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Do)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ee,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Ic?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===af?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Nl.fromBufferAttribute(i.attributes.skinIndex,t),Ul.fromBufferAttribute(i.attributes.skinWeight,t),Dl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Ul.getComponent(r);if(o!==0){const a=Nl.getComponent(r);Fl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector($0.copy(Dl).applyMatrix4(Fl),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class au extends me{constructor(){super(),this.isBone=!0,this.type="Bone"}}class oc extends be{constructor(t=null,e=1,n=1,i,r,o,a,c,l=De,h=De,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bl=new zt,J0=new zt;class ac{constructor(t=[],e=[]){this.uuid=en(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new zt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:J0;Bl.multiplyMatrices(a,e[r]),Bl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ac(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new oc(e,t,t,je,ln);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new au),this.bones.push(o),this.boneInverses.push(new zt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Na extends oe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const zi=new zt,zl=new zt,yr=[],kl=new gn,Q0=new zt,Ss=new Yt,bs=new _n;class ti extends Yt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Na(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Q0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),kl.copy(t.boundingBox).applyMatrix4(zi),this.boundingBox.union(kl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),bs.copy(t.boundingSphere).applyMatrix4(zi),this.boundingSphere.union(bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),t.ray.intersectsSphere(bs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,zi),zl.multiplyMatrices(n,zi),Ss.matrixWorld=zl,Ss.raycast(t,yr);for(let o=0,a=yr.length;o<a;o++){const c=yr[o];c.instanceId=r,c.object=this,e.push(c)}yr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Na(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new oc(new Float32Array(i*this.count),i,this.count,Za,ln));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class cc extends Ke{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xr=new I,qr=new I,Hl=new zt,Es=new $r,Sr=new _n,No=new I,Vl=new I;class lc extends me{constructor(t=new _e,e=new cc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Xr.fromBufferAttribute(e,i-1),qr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Xr.distanceTo(qr);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(i),Sr.radius+=r,t.ray.intersectsSphere(Sr)===!1)return;Hl.copy(i).invert(),Es.copy(t.ray).applyMatrix4(Hl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=l){const m=h.getX(_),x=h.getX(_+1),v=br(this,t,Es,c,m,x);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(d),m=br(this,t,Es,c,_,p);m&&e.push(m)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=l){const m=br(this,t,Es,c,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=br(this,t,Es,c,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function br(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(Xr.fromBufferAttribute(o,i),qr.fromBufferAttribute(o,r),e.distanceSqToSegment(Xr,qr,No,Vl)>n)return;No.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(No);if(!(c<t.near||c>t.far))return{distance:c,point:Vl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Gl=new I,Wl=new I;class cu extends lc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Gl.fromBufferAttribute(e,i),Wl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gl.distanceTo(Wl);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class t_ extends lc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class lu extends Ke{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xl=new zt,Ua=new $r,Er=new _n,Tr=new I;class e_ extends me{constructor(t=new _e,e=new lu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(i),Er.radius+=r,t.ray.intersectsSphere(Er)===!1)return;Xl.copy(i).invert(),Ua.copy(t.ray).applyMatrix4(Xl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const p=l.getX(g);Tr.fromBufferAttribute(u,p),ql(Tr,p,c,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Tr.fromBufferAttribute(u,g),ql(Tr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ql(s,t,e,n,i,r,o){const a=Ua.distanceSqToPoint(s);if(a<e){const c=new I;Ua.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class hu extends be{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new ht:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,i=[],r=[],o=[],a=new I,c=new zt;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Re(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Re(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hc extends xn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ht){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class n_ extends hc{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function uc(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const wr=new I,Uo=new uc,Fo=new uc,Oo=new uc;class i_ extends xn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(wr.subVectors(i[0],i[1]).add(i[0]),l=wr);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(wr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=wr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Uo.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,p),Fo.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,p),Oo.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Uo.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Fo.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Oo.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Uo.calc(c),Fo.calc(c),Oo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Yl(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function s_(s,t){const e=1-s;return e*e*t}function r_(s,t){return 2*(1-s)*s*t}function o_(s,t){return s*s*t}function Fs(s,t,e,n){return s_(s,t)+r_(s,e)+o_(s,n)}function a_(s,t){const e=1-s;return e*e*e*t}function c_(s,t){const e=1-s;return 3*e*e*s*t}function l_(s,t){return 3*(1-s)*s*s*t}function h_(s,t){return s*s*s*t}function Os(s,t,e,n,i){return a_(s,t)+c_(s,e)+l_(s,n)+h_(s,i)}class uu extends xn{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(t,i.x,r.x,o.x,a.x),Os(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class u_ extends xn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(t,i.x,r.x,o.x,a.x),Os(t,i.y,r.y,o.y,a.y),Os(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fu extends xn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class f_ extends xn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class du extends xn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Fs(t,i.x,r.x,o.x),Fs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class d_ extends xn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Fs(t,i.x,r.x,o.x),Fs(t,i.y,r.y,o.y),Fs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pu extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Yl(a,c.x,l.x,h.x,u.x),Yl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ht().fromArray(i))}return this}}var Fa=Object.freeze({__proto__:null,ArcCurve:n_,CatmullRomCurve3:i_,CubicBezierCurve:uu,CubicBezierCurve3:u_,EllipseCurve:hc,LineCurve:fu,LineCurve3:f_,QuadraticBezierCurve:du,QuadraticBezierCurve3:d_,SplineCurve:pu});class p_ extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Fa[i.type]().fromJSON(i))}return this}}class jl extends p_{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new fu(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new du(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new uu(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new pu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new hc(t,e,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class fc extends _e{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new I,h=new ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qt extends _e{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],p=n/2;let m=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(d,2));function x(){const y=new I,P=new I;let A=0;const T=(e-t)/n;for(let L=0;L<=r;L++){const b=[],S=L/r,C=S*(e-t)+t;for(let F=0;F<=i;F++){const U=F/i,H=U*c+a,q=Math.sin(H),z=Math.cos(H);P.x=C*q,P.y=-S*n+p,P.z=C*z,u.push(P.x,P.y,P.z),y.set(q,T,z).normalize(),f.push(y.x,y.y,y.z),d.push(U,1-S),b.push(g++)}_.push(b)}for(let L=0;L<i;L++)for(let b=0;b<r;b++){const S=_[b][L],C=_[b+1][L],F=_[b+1][L+1],U=_[b][L+1];(t>0||b!==0)&&(h.push(S,C,U),A+=3),(e>0||b!==r-1)&&(h.push(C,F,U),A+=3)}l.addGroup(m,A,0),m+=A}function v(y){const P=g,A=new ht,T=new I;let L=0;const b=y===!0?t:e,S=y===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,p*S,0),f.push(0,S,0),d.push(.5,.5),g++;const C=g;for(let F=0;F<=i;F++){const H=F/i*c+a,q=Math.cos(H),z=Math.sin(H);T.x=b*z,T.y=p*S,T.z=b*q,u.push(T.x,T.y,T.z),f.push(0,S,0),A.x=q*.5+.5,A.y=z*.5*S+.5,d.push(A.x,A.y),g++}for(let F=0;F<i;F++){const U=P+F,H=C+F;y===!0?h.push(H,H+1,U):h.push(H+1,H,U),L+=3}l.addGroup(m,L,y===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vi extends Qt{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new vi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dc extends _e{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new I,y=new I,P=new I;for(let A=0;A<e.length;A+=3)d(e[A+0],v),d(e[A+1],y),d(e[A+2],P),c(v,y,P,x)}function c(x,v,y,P){const A=P+1,T=[];for(let L=0;L<=A;L++){T[L]=[];const b=x.clone().lerp(y,L/A),S=v.clone().lerp(y,L/A),C=A-L;for(let F=0;F<=C;F++)F===0&&L===A?T[L][F]=b:T[L][F]=b.clone().lerp(S,F/C)}for(let L=0;L<A;L++)for(let b=0;b<2*(A-L)-1;b++){const S=Math.floor(b/2);b%2===0?(f(T[L][S+1]),f(T[L+1][S]),f(T[L][S])):(f(T[L][S+1]),f(T[L+1][S+1]),f(T[L+1][S]))}}function l(x){const v=new I;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(x),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){const x=new I;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const y=p(x)/2/Math.PI+.5,P=m(x)/Math.PI+.5;o.push(y,1-P)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const v=o[x+0],y=o[x+2],P=o[x+4],A=Math.max(v,y,P),T=Math.min(v,y,P);A>.9&&T<.1&&(v<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),P<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,v){const y=x*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){const x=new I,v=new I,y=new I,P=new I,A=new ht,T=new ht,L=new ht;for(let b=0,S=0;b<r.length;b+=9,S+=6){x.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),A.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),L.set(o[S+4],o[S+5]),P.copy(x).add(v).add(y).divideScalar(3);const C=p(P);_(A,S+0,x,C),_(T,S+2,v,C),_(L,S+4,y,C)}}function _(x,v,y,P){P<0&&x.x===1&&(o[v]=x.x-1),y.x===0&&y.z===0&&(o[v]=P/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dc(t.vertices,t.indices,t.radius,t.details)}}const Ar=new I,Rr=new I,Bo=new I,Cr=new qe;class m_ extends _e{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(qi*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:p,c:m}=Cr;if(_.fromBufferAttribute(a,l[0]),p.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),Cr.getNormal(Bo),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const v=(x+1)%3,y=u[x],P=u[v],A=Cr[h[x]],T=Cr[h[v]],L=`${y}_${P}`,b=`${P}_${y}`;b in f&&f[b]?(Bo.dot(f[b].normal)<=r&&(d.push(A.x,A.y,A.z),d.push(T.x,T.y,T.z)),f[b]=null):L in f||(f[L]={index0:l[x],index1:l[v],normal:Bo.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:p}=f[g];Ar.fromBufferAttribute(a,_),Rr.fromBufferAttribute(a,p),d.push(Ar.x,Ar.y,Ar.z),d.push(Rr.x,Rr.y,Rr.z)}this.setAttribute("position",new ne(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class mu extends jl{constructor(t){super(t),this.uuid=en(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new jl().fromJSON(i))}return this}}const g_={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=gu(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=y_(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)u=s[g],f=s[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Ws(r,o,e,a,c,d,0),o}};function gu(s,t,e,n,i){let r,o;if(i===I_(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Kl(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Kl(r,s[r],s[r+1],o);return o&&Jr(o,o.next)&&(qs(o),o=o.next),o}function xi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Jr(e,e.next)||ve(e.prev,e,e.next)===0)){if(qs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ws(s,t,e,n,i,r,o){if(!s)return;!o&&r&&w_(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?x_(s,n,i,r):__(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),qs(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=v_(xi(s),t,e),Ws(s,t,e,n,i,r,2)):o===2&&M_(s,t,e,n,i,r):Ws(xi(s),t,e,n,i,r,1);break}}}function __(s){const t=s.prev,e=s,n=s.next;if(ve(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Hi(i,a,r,c,o,l,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function x_(s,t,e,n){const i=s.prev,r=s,o=s.next;if(ve(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,p=h>u?h>f?h:f:u>f?u:f,m=Oa(d,g,t,e,n),x=Oa(_,p,t,e,n);let v=s.prevZ,y=s.nextZ;for(;v&&v.z>=m&&y&&y.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Hi(a,h,c,u,l,f,v.x,v.y)&&ve(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&Hi(a,h,c,u,l,f,y.x,y.y)&&ve(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Hi(a,h,c,u,l,f,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&Hi(a,h,c,u,l,f,y.x,y.y)&&ve(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function v_(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Jr(i,r)&&_u(i,n,n.next,r)&&Xs(i,r)&&Xs(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),qs(n),qs(n.next),n=s=r),n=n.next}while(n!==s);return xi(n)}function M_(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&C_(o,a)){let c=xu(o,a);o=xi(o,o.next),c=xi(c,c.next),Ws(o,t,e,n,i,r,0),Ws(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function y_(s,t,e,n){const i=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=gu(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(R_(l));for(i.sort(S_),r=0;r<i.length;r++)e=b_(i[r],e);return e}function S_(s,t){return s.x-t.x}function b_(s,t){const e=E_(s,t);if(!e)return t;const n=xu(e,s);return xi(n,n.next),xi(e,e.next)}function E_(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Hi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Xs(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&T_(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function T_(s,t){return ve(s.prev,s,t.prev)<0&&ve(t.next,s,s.next)<0}function w_(s,t,e,n){let i=s;do i.z===0&&(i.z=Oa(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,A_(i)}function A_(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function Oa(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function R_(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Hi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function C_(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!P_(s,t)&&(Xs(s,t)&&Xs(t,s)&&L_(s,t)&&(ve(s.prev,s,t.prev)||ve(s,t.prev,t))||Jr(s,t)&&ve(s.prev,s,s.next)>0&&ve(t.prev,t,t.next)>0)}function ve(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Jr(s,t){return s.x===t.x&&s.y===t.y}function _u(s,t,e,n){const i=Lr(ve(s,t,e)),r=Lr(ve(s,t,n)),o=Lr(ve(e,n,s)),a=Lr(ve(e,n,t));return!!(i!==r&&o!==a||i===0&&Pr(s,e,t)||r===0&&Pr(s,n,t)||o===0&&Pr(e,s,n)||a===0&&Pr(e,t,n))}function Pr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Lr(s){return s>0?1:s<0?-1:0}function P_(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&_u(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Xs(s,t){return ve(s.prev,s,s.next)<0?ve(s,t,s.next)>=0&&ve(s,s.prev,t)>=0:ve(s,t,s.prev)<0||ve(s,s.next,t)<0}function L_(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function xu(s,t){const e=new Ba(s.i,s.x,s.y),n=new Ba(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Kl(s,t,e,n){const i=new Ba(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ba(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function I_(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ji{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return ji.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];$l(t),Zl(n,t);let o=t.length;e.forEach($l);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Zl(n,e[c]);const a=g_.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function $l(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Zl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class pc extends _e{constructor(t=new mu([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new ne(i,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:D_;let v,y=!1,P,A,T,L;m&&(v=m.getSpacedPoints(h),y=!0,f=!1,P=m.computeFrenetFrames(h,!1),A=new I,T=new I,L=new I),f||(p=0,d=0,g=0,_=0);const b=a.extractPoints(l);let S=b.shape;const C=b.holes;if(!ji.isClockWise(S)){S=S.reverse();for(let J=0,nt=C.length;J<nt;J++){const R=C[J];ji.isClockWise(R)&&(C[J]=R.reverse())}}const U=ji.triangulateShape(S,C),H=S;for(let J=0,nt=C.length;J<nt;J++){const R=C[J];S=S.concat(R)}function q(J,nt,R){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(nt,R)}const z=S.length,Y=U.length;function k(J,nt,R){let mt,Q,lt;const rt=J.x-nt.x,Rt=J.y-nt.y,gt=R.x-J.x,w=R.y-J.y,M=rt*rt+Rt*Rt,D=rt*w-Rt*gt;if(Math.abs(D)>Number.EPSILON){const G=Math.sqrt(M),Z=Math.sqrt(gt*gt+w*w),j=nt.x-Rt/G,Mt=nt.y+rt/G,ut=R.x-w/Z,_t=R.y+gt/Z,kt=((ut-j)*w-(_t-Mt)*gt)/(rt*w-Rt*gt);mt=j+rt*kt-J.x,Q=Mt+Rt*kt-J.y;const ot=mt*mt+Q*Q;if(ot<=2)return new ht(mt,Q);lt=Math.sqrt(ot/2)}else{let G=!1;rt>Number.EPSILON?gt>Number.EPSILON&&(G=!0):rt<-Number.EPSILON?gt<-Number.EPSILON&&(G=!0):Math.sign(Rt)===Math.sign(w)&&(G=!0),G?(mt=-Rt,Q=rt,lt=Math.sqrt(M)):(mt=rt,Q=Rt,lt=Math.sqrt(M/2))}return new ht(mt/lt,Q/lt)}const $=[];for(let J=0,nt=H.length,R=nt-1,mt=J+1;J<nt;J++,R++,mt++)R===nt&&(R=0),mt===nt&&(mt=0),$[J]=k(H[J],H[R],H[mt]);const ct=[];let pt,at=$.concat();for(let J=0,nt=C.length;J<nt;J++){const R=C[J];pt=[];for(let mt=0,Q=R.length,lt=Q-1,rt=mt+1;mt<Q;mt++,lt++,rt++)lt===Q&&(lt=0),rt===Q&&(rt=0),pt[mt]=k(R[mt],R[lt],R[rt]);ct.push(pt),at=at.concat(pt)}for(let J=0;J<p;J++){const nt=J/p,R=d*Math.cos(nt*Math.PI/2),mt=g*Math.sin(nt*Math.PI/2)+_;for(let Q=0,lt=H.length;Q<lt;Q++){const rt=q(H[Q],$[Q],mt);it(rt.x,rt.y,-R)}for(let Q=0,lt=C.length;Q<lt;Q++){const rt=C[Q];pt=ct[Q];for(let Rt=0,gt=rt.length;Rt<gt;Rt++){const w=q(rt[Rt],pt[Rt],mt);it(w.x,w.y,-R)}}}const xt=g+_;for(let J=0;J<z;J++){const nt=f?q(S[J],at[J],xt):S[J];y?(T.copy(P.normals[0]).multiplyScalar(nt.x),A.copy(P.binormals[0]).multiplyScalar(nt.y),L.copy(v[0]).add(T).add(A),it(L.x,L.y,L.z)):it(nt.x,nt.y,0)}for(let J=1;J<=h;J++)for(let nt=0;nt<z;nt++){const R=f?q(S[nt],at[nt],xt):S[nt];y?(T.copy(P.normals[J]).multiplyScalar(R.x),A.copy(P.binormals[J]).multiplyScalar(R.y),L.copy(v[J]).add(T).add(A),it(L.x,L.y,L.z)):it(R.x,R.y,u/h*J)}for(let J=p-1;J>=0;J--){const nt=J/p,R=d*Math.cos(nt*Math.PI/2),mt=g*Math.sin(nt*Math.PI/2)+_;for(let Q=0,lt=H.length;Q<lt;Q++){const rt=q(H[Q],$[Q],mt);it(rt.x,rt.y,u+R)}for(let Q=0,lt=C.length;Q<lt;Q++){const rt=C[Q];pt=ct[Q];for(let Rt=0,gt=rt.length;Rt<gt;Rt++){const w=q(rt[Rt],pt[Rt],mt);y?it(w.x,w.y+v[h-1].y,v[h-1].x+R):it(w.x,w.y,u+R)}}}W(),tt();function W(){const J=i.length/3;if(f){let nt=0,R=z*nt;for(let mt=0;mt<Y;mt++){const Q=U[mt];Lt(Q[2]+R,Q[1]+R,Q[0]+R)}nt=h+p*2,R=z*nt;for(let mt=0;mt<Y;mt++){const Q=U[mt];Lt(Q[0]+R,Q[1]+R,Q[2]+R)}}else{for(let nt=0;nt<Y;nt++){const R=U[nt];Lt(R[2],R[1],R[0])}for(let nt=0;nt<Y;nt++){const R=U[nt];Lt(R[0]+z*h,R[1]+z*h,R[2]+z*h)}}n.addGroup(J,i.length/3-J,0)}function tt(){const J=i.length/3;let nt=0;dt(H,nt),nt+=H.length;for(let R=0,mt=C.length;R<mt;R++){const Q=C[R];dt(Q,nt),nt+=Q.length}n.addGroup(J,i.length/3-J,1)}function dt(J,nt){let R=J.length;for(;--R>=0;){const mt=R;let Q=R-1;Q<0&&(Q=J.length-1);for(let lt=0,rt=h+p*2;lt<rt;lt++){const Rt=z*lt,gt=z*(lt+1),w=nt+mt+Rt,M=nt+Q+Rt,D=nt+Q+gt,G=nt+mt+gt;Tt(w,M,D,G)}}}function it(J,nt,R){c.push(J),c.push(nt),c.push(R)}function Lt(J,nt,R){bt(J),bt(nt),bt(R);const mt=i.length/3,Q=x.generateTopUV(n,i,mt-3,mt-2,mt-1);Ot(Q[0]),Ot(Q[1]),Ot(Q[2])}function Tt(J,nt,R,mt){bt(J),bt(nt),bt(mt),bt(nt),bt(R),bt(mt);const Q=i.length/3,lt=x.generateSideWallUV(n,i,Q-6,Q-3,Q-2,Q-1);Ot(lt[0]),Ot(lt[1]),Ot(lt[3]),Ot(lt[1]),Ot(lt[2]),Ot(lt[3])}function bt(J){i.push(c[J*3+0]),i.push(c[J*3+1]),i.push(c[J*3+2])}function Ot(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return N_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Fa[i.type]().fromJSON(i)),new pc(n,t.options)}}const D_={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new ht(r,o),new ht(a,c),new ht(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ht(o,1-c),new ht(l,1-u),new ht(f,1-g),new ht(_,1-m)]:[new ht(a,1-c),new ht(h,1-u),new ht(d,1-g),new ht(p,1-m)]}};function N_(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class is extends dc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new is(t.radius,t.detail)}}class Me extends _e{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,f=new I,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const x=[],v=m/n;let y=0;m===0&&o===0?y=.5/e:m===n&&c===Math.PI&&(y=-.5/e);for(let P=0;P<=e;P++){const A=P/e;u.x=-t*Math.cos(i+A*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+A*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(A+y,1-v),x.push(l++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const v=h[m][x+1],y=h[m][x],P=h[m+1][x],A=h[m+1][x+1];(m!==0||o>0)&&d.push(v,y,A),(m!==n-1||c<Math.PI)&&d.push(y,P,A)}this.setIndex(d),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mc extends _e{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*r,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,x=(i+1)*d+g;o.push(_,p,x),o.push(p,m,x)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class gc extends Ke{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vn extends gc{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class U_ extends Ke{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new wt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class fe extends Ke{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Ir(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function F_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function O_(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Jl(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function vu(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class js{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class B_ extends js{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dc,endingEnd:Dc}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nc:r=t,a=2*e-n;break;case Uc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Nc:o=t,c=2*n-e;break;case Uc:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,x=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-d)*p+(1.5+d)*_+.5*g,y=d*p-d*_;for(let P=0;P!==a;++P)r[P]=m*o[h+P]+x*o[l+P]+v*o[c+P]+y*o[u+P];return r}}class z_ extends js{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}}class k_ extends js{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Mn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ir(e,this.TimeBufferType),this.values=Ir(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ir(t.times,Array),values:Ir(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new k_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new z_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new B_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ks:e=this.InterpolantFactoryMethodDiscrete;break;case Hs:e=this.InterpolantFactoryMethodLinear;break;case no:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return Hs;case this.InterpolantFactoryMethodSmooth:return no}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&F_(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===no,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{const u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Hs;class hs extends Mn{constructor(t,e,n){super(t,e,n)}}hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=ks;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Mu extends Mn{}Mu.prototype.ValueTypeName="color";class ss extends Mn{}ss.prototype.ValueTypeName="number";class H_ extends js{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let h=l+a;l!==h;l+=4)Ze.slerpFlat(r,0,o,l-a,o,l,c);return r}}class rs extends Mn{InterpolantFactoryMethodLinear(t){return new H_(this.times,this.values,this.getValueSize(),t)}}rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends Mn{constructor(t,e,n){super(t,e,n)}}us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=ks;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class os extends Mn{}os.prototype.ValueTypeName="vector";class V_{constructor(t="",e=-1,n=[],i=cf){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=en(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(W_(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Mn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=O_(c);c=Jl(c,1,h),l=Jl(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ss(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,g,_){if(d.length!==0){const p=[],m=[];vu(d,p,m,g),p.length!==0&&_.push(new u(f,p,m))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const p=[],m=[];for(let x=0;x!==f[g].morphTargets.length;++x){const v=f[g];p.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new ss(".morphTargetInfluence["+_+"]",p,m))}c=d.length*o}else{const d=".bones["+e[u].name+"]";n(os,d+".position",f,"pos",i),n(rs,d+".quaternion",f,"rot",i),n(os,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function G_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ss;case"vector":case"vector2":case"vector3":case"vector4":return os;case"color":return Mu;case"quaternion":return rs;case"bool":case"boolean":return hs;case"string":return us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function W_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=G_(s.type);if(s.times===void 0){const e=[],n=[];vu(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Jn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class X_{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const q_=new X_;class fs{constructor(t){this.manager=t!==void 0?t:q_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rn={};class Y_ extends Error{constructor(t,e){super(t),this.response=e}}class yu extends fs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Jn.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Rn[t]!==void 0){Rn[t].push({onLoad:e,onProgress:n,onError:i});return}Rn[t]=[],Rn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Rn[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const p=new ReadableStream({start(m){x();function x(){u.read().then(({done:v,value:y})=>{if(v)m.close();else{_+=y.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let A=0,T=h.length;A<T;A++){const L=h[A];L.onProgress&&L.onProgress(P)}m.enqueue(y),x()}},v=>{m.error(v)})}}});return new Response(p)}else throw new Y_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Jn.add(t,l);const h=Rn[t];delete Rn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Rn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Rn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class j_ extends fs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Jn.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Vs("img");function c(){h(),Jn.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class K_ extends fs{constructor(t){super(t)}load(t,e,n,i){const r=new be,o=new j_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Qr extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class $_ extends Qr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const zo=new zt,Ql=new I,th=new I;class _c{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nc,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ql),th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(th),e.updateMatrixWorld(),zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Z_ extends _c{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=es*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class J_ extends Qr{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Z_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const eh=new zt,Ts=new I,ko=new I;class Q_ extends _c{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ts.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ts),ko.copy(n.position),ko.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ko),n.updateMatrixWorld(),i.makeTranslation(-Ts.x,-Ts.y,-Ts.z),eh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh)}}class to extends Qr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Q_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class tx extends _c{constructor(){super(new ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Su extends Qr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new tx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bs{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class ex extends fs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Jn.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Jn.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Jn.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Jn.add(t,c),r.manager.itemStart(t)}}let nx=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=nh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function nh(){return performance.now()}const xc="\\[\\]\\.:\\/",ix=new RegExp("["+xc+"]","g"),vc="[^"+xc+"]",sx="[^"+xc.replace("\\.","")+"]",rx=/((?:WC+[\/:])*)/.source.replace("WC",vc),ox=/(WCOD+)?/.source.replace("WCOD",sx),ax=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),cx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),lx=new RegExp("^"+rx+ox+ax+cx+"$"),hx=["material","materials","bones","map"];class ux{constructor(t,e,n){const i=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class le{constructor(t,e,n){this.path=e,this.parsedPath=n||le.parseTrackName(e),this.node=le.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new le.Composite(t,e,n):new le(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ix,"")}static parseTrackName(t){const e=lx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);hx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=le.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}le.Composite=ux;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);const st=20,fx=1.6,za=0;async function dx(){const s=await fetch("./data/panjim.json");if(!s.ok)throw new Error(`could not load the map (${s.status})`);return s.json()}const $e=s=>{const t=[];for(let e=0;e<s.length;e+=2)t.push([s[e],s[e+1]]);return t};function $n(s,t,e){let n=!1;for(let i=0,r=s.length-1;i<s.length;r=i++)s[i][1]>e!=s[r][1]>e&&t<(s[r][0]-s[i][0])*(e-s[i][1])/(s[r][1]-s[i][1]+1e-12)+s[i][0]&&(n=!n);return n}class px{constructor(t){this.d=t;const e=this.W=t.W,n=this.H=t.H;this.wet=new Uint8Array(e*n);for(let o=0;o<n;o++)for(let a=0;a<e;a++)t.rows[o][a]==="W"&&(this.wet[o*e+a]=1);for(const o of t.water){const a=$e(o);let c=1e9,l=1e9,h=-1e9,u=-1e9;for(const[f,d]of a)c=Math.min(c,f),l=Math.min(l,d),h=Math.max(h,f),u=Math.max(u,d);for(let f=Math.max(0,Math.floor(l));f<=Math.min(n-1,Math.floor(u));f++)for(let d=Math.max(0,Math.floor(c));d<=Math.min(e-1,Math.floor(h));d++)$n(a,d+.5,f+.5)&&(this.wet[f*e+d]=1)}const i=new Float32Array(e*n).fill(99),r=[];for(let o=0;o<e*n;o++)this.wet[o]&&(i[o]=0,r.push(o));for(let o=0;o<r.length;o++){const a=r[o],c=a%e,l=a/e|0,h=i[a]+1;if(!(h>4))for(const[u,f]of[[1,0],[-1,0],[0,1],[0,-1]]){const d=c+u,g=l+f;if(d<0||g<0||d>=e||g>=n)continue;const _=g*e+d;i[_]>h&&(i[_]=h,r.push(_))}}this.corner=new Float32Array((e+1)*(n+1));for(let o=0;o<=n;o++)for(let a=0;a<=e;a++){let c=0,l=99;for(const[f,d]of[[-1,-1],[0,-1],[-1,0],[0,0]]){const g=a+f,_=o+d;g<0||_<0||g>=e||_>=n||(this.wet[_*e+g]||c++,l=Math.min(l,i[_*e+g]))}const h=this.rawHeight(a,o)*fx*Math.min(1,l/3)+.6,u=c/4;this.corner[o*(e+1)+a]=u>=.75?h:u<=.25?-2.2:-2.2+(h+2.2)*(u-.25)/.5}}rawHeight(t,e){const n=this.d,i=n.eg,r=Math.max(0,Math.min(n.ew-1.001,t/i)),o=Math.max(0,Math.min(n.eh-1.001,e/i)),a=r|0,c=o|0,l=r-a,h=o-c,u=(f,d)=>n.elev[(c+d)*n.ew+a+f];return Math.max(0,(u(0,0)*(1-l)+u(1,0)*l)*(1-h)+(u(0,1)*(1-l)+u(1,1)*l)*h)}heightAt(t,e){const n=this.W,i=Math.max(0,Math.min(n-.001,t/st)),r=Math.max(0,Math.min(this.H-.001,e/st)),o=i|0,a=r|0,c=i-o,l=r-a,h=n+1,u=a*h+o,f=this.corner;return(f[u]*(1-c)+f[u+1]*c)*(1-l)+(f[u+h]*(1-c)+f[u+h+1]*c)*l}landAt(t,e){const n=this.W,i=this.H,r=Math.max(0,Math.min(n-1.001,t/st-.5)),o=Math.max(0,Math.min(i-1.001,e/st-.5)),a=r|0,c=o|0,l=r-a,h=o-c,u=(f,d)=>1-this.wet[(c+d)*n+a+f];return(u(0,0)*(1-l)+u(1,0)*l)*(1-h)+(u(0,1)*(1-l)+u(1,1)*l)*h}isWet(t,e){const n=Math.floor(t/st),i=Math.floor(e/st);return n<0||i<0||n>=this.W||i>=this.H||this.wet[i*this.W+n]===1}}const ws={G:[.22,.38,.15],L:[.22,.38,.15],R:[.22,.38,.15],P:[.44,.56,.28],F:[.25,.42,.22],M:[.22,.33,.21],S:[.78,.68,.46],B:[.78,.68,.46],W:[.3,.4,.32]},ih=4;function mx(s){const{W:t,H:e}=s;let n=new Float32Array(t*e);for(let i=0;i<t*e;i++)n[i]=s.wet[i]?0:1;for(let i=0;i<0;i++){const r=new Float32Array(t*e);for(let o=0;o<e;o++)for(let a=0;a<t;a++){let c=0,l=0;for(let h=-1;h<=1;h++)for(let u=-1;u<=1;u++){const f=a+u,d=o+h;f<0||d<0||f>=t||d>=e||(c+=n[d*t+f],l++)}r[o*t+a]=c/l}n=r}return n}function gx(s,t,e=()=>!1){const{W:n,H:i}=s,r=mx(t),o=(d,g)=>{const _=Math.max(0,Math.min(n-1.001,d-.5)),p=Math.max(0,Math.min(i-1.001,g-.5)),m=_|0,x=p|0,v=_-m,y=p-x,P=(A,T)=>r[(x+T)*n+m+A];return(P(0,0)*(1-v)+P(1,0)*v)*(1-y)+(P(0,1)*(1-v)+P(1,1)*v)*y},a=(d,g,_)=>{const p=Math.max(0,Math.min(1,(_-d)/(g-d)));return p*p*(3-2*p)},c=new cs(n*st,i*st,n*ih,i*ih);c.rotateX(-Math.PI/2),c.translate(n*st/2,0,i*st/2);const l=c.attributes.position,h=new Float32Array(l.count*3),u=[.8,.7,.48];for(let d=0;d<l.count;d++){const g=l.getX(d),_=l.getZ(d),p=g/st,m=_/st,x=e(g,_)?1:o(p,m),v=a(.42,.58,x),y=Math.max(.6,t.heightAt(g,_));l.setY(d,-2.2+(y+2.2)*v);const P=Math.min(n-1,Math.floor(p)),A=Math.min(i-1,Math.floor(m)),T=ws[s.rows[A][P]]||ws.G,L=1+Math.min(.12,t.rawHeight(p,m)/400),b=.94+(P*73+A*37)%11/90,S=T===ws.G||T===ws.L||T===ws.R?Math.max(0,Math.sin(p*.31+Math.sin(m*.17)*2)*Math.sin(m*.23+p*.05)-.35)*.9:0;let C=T[0]+(.55-T[0])*S,F=T[1]+(.36-T[1])*S,U=T[2]+(.22-T[2])*S;const H=(1-a(.58,.85,x))*.85;C+=(u[0]-C)*H,F+=(u[1]-F)*H,U+=(u[2]-U)*H,h[d*3]=C*L*b,h[d*3+1]=F*L*b,h[d*3+2]=U*L*b}c.setAttribute("color",new oe(h,3)),c.computeVertexNormals();const f=new Yt(c,new fe({vertexColors:!0}));return f.receiveShadow=!0,f.name="terrain",f}function _x(s){const e=new cs(s.W*st+4e3,s.H*st+4e3);e.rotateX(-Math.PI/2),e.translate(s.W*st/2,za,s.H*st/2);const n=new Yt(e,new fe({color:3111578}));return n.receiveShadow=!0,n.name="water",n}const xx=1.5;function bu(s,t){const e=[s[0]];for(let n=1;n<s.length;n++){const[i,r]=s[n-1],[o,a]=s[n],c=Math.hypot(o-i,a-r),l=Math.max(1,Math.ceil(c/t));for(let h=1;h<=l;h++)e.push([i+(o-i)*h/l,r+(a-r)*h/l])}return e}function Dr(s,t,e,n,i,r,o){const a=bu(s,6),c=r.length/3,l=t/2;for(let h=0;h<a.length;h++){const u=a[Math.max(0,h-1)],f=a[Math.min(a.length-1,h+1)],d=Math.hypot(f[0]-u[0],f[1]-u[1])||1,g=-(f[1]-u[1])/d,_=(f[0]-u[0])/d,[p,m]=a[h];for(const x of[-1,1]){const v=p+g*l*x,y=m+_*l*x,P=i!==null?i:Math.max(.6,e.heightAt(v,y))+n;r.push(v,P,y)}if(h){const x=c+(h-1)*2;o.push(x,x+2,x+1,x+1,x+2,x+3)}}}function Nr(s,t,e,n){const i=new _e;i.setAttribute("position",new ne(s,3)),i.setIndex(t),i.computeVertexNormals();const r=new fe({color:e,side:Ve,polygonOffset:!0,polygonOffsetFactor:-n,polygonOffsetUnits:-n*2}),o=new Yt(i,r);return o.receiveShadow=!0,o}function vx(s,t){const e=new Zt;e.name="roads";const n=[],i=[],r=[],o=[],a=[],c=[],l=[],h=[],u=[];for(const[f,d,g]of s.r){const _=$e(f).map(([v,y])=>[v*st,y*st]);if(_.length<2)continue;const p=d*xx,x=(g&1)!==0?Math.max(5,t.heightAt(..._[0])+.3,t.heightAt(..._[_.length-1])+.3)+(g&8?14:0):null;if(Dr(_,p+(p>=12?5:3),t,.12,x===null?null:x-.05,n,i),Dr(_,p,t,.2,x,r,o),p>=12&&!(g&6)){const v=bu(_,3);for(let y=0;y+1<v.length;y+=3)Dr([v[y],v[y+1]],.35,t,.28,x===null?null:x+.05,l,h)}for(let v=1;v<_.length;v++)u.push({ax:_[v-1][0],az:_[v-1][1],bx:_[v][0],bz:_[v][1],half:p/2+1,deck:x})}for(const[f,d]of s.p){const g=$e(f).map(([_,p])=>[_*st,p*st]);if(!(g.length<2)){Dr(g,2.2,t,.16,d&2?Math.max(4,t.heightAt(...g[0])+.3):null,a,c);for(let _=1;_<g.length;_++)u.push({ax:g[_-1][0],az:g[_-1][1],bx:g[_][0],bz:g[_][1],half:1.6,deck:null})}}return e.add(Nr(n,i,10902086,1),Nr(a,c,13482382,1),Nr(r,o,6053474,2),Nr(l,h,15921126,3)),{group:e,segs:u}}const Vi=class Vi{constructor(t){this.cells=new Map;const e=Vi.C;for(const n of t){const i=Math.floor((Math.min(n.ax,n.bx)-n.half)/e),r=Math.floor((Math.max(n.ax,n.bx)+n.half)/e),o=Math.floor((Math.min(n.az,n.bz)-n.half)/e),a=Math.floor((Math.max(n.az,n.bz)+n.half)/e);for(let c=i;c<=r;c++)for(let l=o;l<=a;l++){const h=c*65536+l;let u=this.cells.get(h);u||this.cells.set(h,u=[]),u.push(n)}}}at(t,e){const n=this.cells.get(Math.floor(t/Vi.C)*65536+Math.floor(e/Vi.C));if(!n)return null;for(const i of n){const r=i.bx-i.ax,o=i.bz-i.az,a=r*r+o*o||1e-9,c=Math.max(0,Math.min(1,((t-i.ax)*r+(e-i.az)*o)/a));if(Math.hypot(t-i.ax-r*c,e-i.az-o*c)<i.half)return i}return null}};Vi.C=20;let ka=Vi;function Ce(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new _e;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=sh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const g=sh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function sh(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new oe(o,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function rh(s,t){if(t===lf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Pa||t===kh){let e=s.getIndex();if(e===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Pa)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}const oh=4.2;function Mx(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.clearRect(0,0,128,128);for(let c=0;c<40;c++)e.fillStyle=`rgba(60,40,20,${.03+Math.random()*.04})`,e.fillRect(Math.random()*128,0,1+Math.random()*3,128*(.3+Math.random()*.7));e.clearRect(0,0,5,128),e.fillStyle="#f7f4ec",e.fillRect(0,0,128,8),e.fillStyle="rgba(0,0,0,.22)",e.fillRect(0,8,128,2),e.fillStyle="#f7f4ec",e.fillRect(119,0,9,128),e.fillStyle="rgba(0,0,0,.12)",e.fillRect(118,0,1.5,128);const n=40,i=40,r=24,o=92;e.fillStyle="#f7f4ec",e.fillRect(n-8,r-8,i+16,o+8),e.beginPath(),e.ellipse(n+i/2,r-6,i/2+8,8,0,Math.PI,0),e.fill(),e.fillStyle="#1c1a1a",e.fillRect(n,r,i,o),e.fillStyle="#5a2a1e",e.fillRect(n,r,i/2-1,o),e.fillStyle="rgba(0,0,0,.3)";for(let c=r+4;c<r+o;c+=6)e.fillRect(n+2,c,i/2-5,1.5);e.fillStyle="#6e3a28",e.fillRect(n+i/2+1,r+o*.55,i/2-1,o*.45),e.fillStyle="#f7f4ec",e.fillRect(n-10,r+o-2,i+20,4),e.fillStyle="rgba(70,70,70,.0)";const a=new hu(t);return a.wrapS=a.wrapT=mi,a.colorSpace=Se,a.anisotropy=4,a}function yx(s,t){const e=new fe({vertexColors:!0,map:s});return e.onBeforeCompile=n=>{n.uniforms.uNight=t,n.fragmentShader=`uniform float uNight;
`+n.fragmentShader.replace("#include <map_fragment>",`
        vec4 fac = texture2D(map, vMapUv);
        diffuseColor.rgb = mix(diffuseColor.rgb, fac.rgb, fac.a);
        // a window (dark glass) in about half the bays lights up warm at night
        vec2 cell = floor(vMapUv);
        float lit = step(0.45, fract(sin(dot(cell, vec2(12.9898, 78.233))) * 43758.5453));
        float glass = fac.a * step(fac.r, 0.2) * step(0.001, vMapUv.y);
      `).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += vec3(1.0, 0.72, 0.38) * glass * lit * uNight * 1.6;`)},e}const Eu={value:0};function ah(s,t){const e=s.attributes.position,n=s.attributes.normal,i=new Float32Array(e.count*2);for(let r=0;r<e.count;r++){const o=n.getX(r),a=n.getY(r),c=n.getZ(r);if(Math.abs(a)>.5){i[r*2]=.01,i[r*2+1]=.6;continue}i[r*2]=(e.getX(r)*-c+e.getZ(r)*o)/oh,i[r*2+1]=(e.getY(r)-t)/oh}s.setAttribute("uv",new oe(i,2))}const ch=[14168875,8177902,16239662,15222842,5419232,15905834,4765816,15764136,16182738,13119530,8969416,16309320],Sx=3.4;function bx(s,t,e){const n=s.attributes.normal,i=new Float32Array(n.count*3),r=t.clone().multiplyScalar(.8);for(let o=0;o<n.count;o++){const a=n.getY(o),c=a>.5?e:Math.abs(n.getX(o))>Math.abs(n.getZ(o))?r:t;i[o*3]=c.r,i[o*3+1]=c.g,i[o*3+2]=c.b}s.setAttribute("color",new oe(i,3))}function Ex(s,t,e,n){const i=s.length,r=s.reduce((p,m)=>p+m[0],0)/i,o=s.reduce((p,m)=>p+m[1],0)/i,a=s.map(([p,m])=>[r+(p-r)*1.12,o+(m-o)*1.12]),c=s.map(([p,m])=>[r+(p-r)*.35,o+(m-o)*.35]),l=[];for(let p=0;p<i;p++){const m=(p+1)%i;l.push(a[p][0],t,a[p][1],a[m][0],t,a[m][1],c[m][0],t+e,c[m][1]),l.push(a[p][0],t,a[p][1],c[m][0],t+e,c[m][1],c[p][0],t+e,c[p][1])}const h=ji.triangulateShape(c.map(([p,m])=>new ht(p,m)),[]);for(const[p,m,x]of h)l.push(c[p][0],t+e,c[p][1],c[x][0],t+e,c[x][1],c[m][0],t+e,c[m][1]);const u=new _e;u.setAttribute("position",new ne(l,3));const f=u.attributes.position;for(let p=0;p<f.count;p+=3){const m=f.getX(p),x=f.getY(p),v=f.getZ(p),y=f.getX(p+1)-m;f.getY(p+1)-x;const P=f.getZ(p+1)-v,A=f.getX(p+2)-m;f.getY(p+2)-x;const T=f.getZ(p+2)-v;if(P*A-y*T<0){const L=f.getX(p+1),b=f.getY(p+1),S=f.getZ(p+1);f.setXYZ(p+1,f.getX(p+2),f.getY(p+2),f.getZ(p+2)),f.setXYZ(p+2,L,b,S)}}u.computeVertexNormals();const d=new Float32Array(f.count*3),g=n.clone().multiplyScalar(.82),_=u.attributes.normal;for(let p=0;p<f.count;p++){const m=_.getX(p)+_.getZ(p)>0?g:n;d[p*3]=m.r,d[p*3+1]=m.g,d[p*3+2]=m.b}return u.setAttribute("color",new oe(d,3)),u}function lh(s){let t=0;for(let e=0;e<s.length;e++){const n=s[e],i=s[(e+1)%s.length],r=s[(e+2)%s.length],o=(i[0]-n[0])*(r[1]-i[1])-(i[1]-n[1])*(r[0]-i[0]);if(Math.abs(o)<1e-6)continue;const a=Math.sign(o);if(t&&a!==t)return!1;t=a}return!0}function Tx(s,t,e,n,i){let r=0;for(let g=0;g<s.length;g++){const _=s[g],p=s[(g+1)%s.length];r+=_[0]*p[1]-p[0]*_[1]}const o=r>0?1:-1,a=[];for(let g=0;g<s.length;g++){const _=s[g],p=s[(g+1)%s.length],m=Math.hypot(p[0]-_[0],p[1]-_[1])||1,x=-(p[1]-_[1])/m*o,v=(p[0]-_[0])/m*o,y=-.8,P=Math.min(e,m*.5),A=[_[0]+x*y,t,_[1]+v*y],T=[p[0]+x*y,t,p[1]+v*y],L=[_[0]+x*P,t+n,_[1]+v*P],b=[p[0]+x*P,t+n,p[1]+v*P];a.push(...A,...T,...b,...A,...b,...L)}const c=new _e;c.setAttribute("position",new ne(a,3)),c.computeVertexNormals();const l=a.length/3,h=new Float32Array(l*3),u=new Float32Array(l*2),f=i.clone().multiplyScalar(.85),d=c.attributes.normal;for(let g=0;g<l;g++){const _=d.getX(g)+d.getZ(g)>0?f:i;h[g*3]=_.r,h[g*3+1]=_.g,h[g*3+2]=_.b,u[g*2]=.01,u[g*2+1]=.6}return c.setAttribute("color",new oe(h,3)),c.setAttribute("uv",new oe(u,2)),c}function li(s,t){const e=s.index?s.toNonIndexed():s,n=e.attributes.position.count,i=new wt(t),r=new Float32Array(n*3),o=new Float32Array(n*2);for(let a=0;a<n;a++)r[a*3]=i.r,r[a*3+1]=i.g,r[a*3+2]=i.b,o[a*2]=.01,o[a*2+1]=.6;return e.setAttribute("color",new oe(r,3)),e.setAttribute("uv",new oe(o,2)),e.attributes.normal||e.computeVertexNormals(),e}const hh=[15251514,15646794,15251514,15985362,9423080,15251514,12857387],wx={"Junta House":{style:"modern",storeys:11,color:14200904},"Corporation of the city of panaji":{style:"modern",storeys:4,color:3108808},"Maquinez Palace":{color:15251514},"Old GMC Building":{color:15646794},"Mahalakshimi Temple":{style:"temple"}},uh=[14474454,13159632,15262418,12109004,14078148];function Ax(s,t){const e=s.named??[],n=[],i=[],r=new wt(12104356),o=new wt(11027242),a=new wt(16447730),c=new wt(15521440);s.b.forEach(([d,g,_,p],m)=>{const x=$e(d).map(([at,xt])=>[at*st,xt*st]);if(x.length<3)return;const v=x.reduce((at,xt)=>at+xt[0],0)/x.length,y=x.reduce((at,xt)=>at+xt[1],0)/x.length,P=e.find(at=>$n(x,at[2]*st,at[3]*st)||Math.hypot(at[2]*st-v,at[3]*st-y)<6),A=P?wx[P[1]]:void 0,T=A?.style??P?.[0]??"",L=!_&&!T&&p<260;let b=!_&&p<150&&!T?1:g;T==="pub"&&(b=Math.max(2,P[4]||g)),T==="modern"&&(b=A?.storeys??Math.max(3,P[4]||g)),T==="temple"&&(b=Math.max(1,Math.min(2,g)));const S=b*Sx*(_===1||T==="church"?1.6:_===2?1.2:L?.9:1),C=Math.min(...x.map(([at,xt])=>t.heightAt(at,xt))),F=new mu(x.map(([at,xt])=>new ht(at,-xt))),U=new pc(F,{depth:S+1.5,bevelEnabled:!1});U.rotateX(-Math.PI/2),U.translate(0,C-1.5,0),ah(U,C);const H=A?.color!==void 0?new wt(A.color):T==="pub"?new wt(hh[m%hh.length]):T==="modern"?new wt(uh[m%uh.length]):_===1||T==="church"?a:_===2||T==="temple"?c:new wt(ch[(m*7+x.length)%ch.length]),q=T==="pub"||T==="church"||!_&&!T&&p<1400;if(bx(U,H,q?o:T==="modern"?new wt(10132638):_===1?a:r),n.push(U),q){const at=T==="church"?Math.max(4,Math.sqrt(p)*.3):Math.min(T==="pub"?6:3.2,Math.sqrt(p)*.22),xt=lh(x)&&x.length<=8?Ex(x,C+S,at,o):Tx(x,C+S,7,Math.min(at,3.5),o);if(ah(xt,0),!lh(x)||x.length>8){const W=xt.attributes.uv;for(let tt=0;tt<W.count;tt++)W.setXY(tt,.01,.6)}n.push(xt)}const z=x.reduce((at,xt)=>at+xt[0],0)/x.length,Y=x.reduce((at,xt)=>at+xt[1],0)/x.length;if(T==="church"){const at=x.reduce((nt,R)=>Math.hypot(R[0]-z,R[1]-Y)>Math.hypot(nt[0]-z,nt[1]-Y)?R:nt),xt=at[0]+(z-at[0])*.15,W=at[1]+(Y-at[1])*.15,tt=z-xt,dt=Y-W,it=Math.hypot(tt,dt)||1,Lt=-dt/it,Tt=tt/it,bt=Math.min(9,Math.sqrt(p)*.35),Ot=Math.atan2(Lt,Tt),J=(nt,R,mt,Q,lt)=>{nt.rotateY(Ot),nt.translate(R,mt,Q),n.push(li(nt,lt))};J(new Ht(bt*1.2,4.5,1.2),xt,C+S+2.25,W,16447730),J(new Qt(bt*.55,bt*.55,1.2,12,1,!1,0,Math.PI).rotateX(Math.PI/2).rotateZ(Math.PI/2),xt,C+S+4.5,W,16447730),J(new Ht(.4,3,.4),xt,C+S+6.5+bt*.4,W,15921126),J(new Ht(1.6,.4,.4),xt,C+S+7+bt*.4,W,15921126);for(const nt of[-1,1]){const R=xt+Lt*bt*nt,mt=W+Tt*bt*nt,Q=Math.min(S+5,18);J(new Ht(3.2,Q,3.2),R,C+Q/2,mt,16447730),J(new Ht(3.6,.5,3.6),R,C+Q,mt,15262420),J(new Me(1.5,10,6,0,Math.PI*2,0,Math.PI/2),R,C+Q+.2,mt,16447730)}}if(T==="temple"){const at=(tt,dt,it,Lt)=>{let Tt=C+S,bt=it;for(let Ot=0;Ot<Lt;Ot++){n.push(li(new Ht(bt,2.6,bt).translate(tt,Tt+1.3,dt),Ot%2?15921126:15234090));for(const[nt,R]of[[1,1],[1,-1],[-1,1],[-1,-1]])n.push(li(new Me(bt*.13,8,5,0,Math.PI*2,0,Math.PI/2).translate(tt+nt*bt*.42,Tt+2.6,dt+R*bt*.42),14176298));Tt+=2.6,bt*=.78}n.push(li(new Me(bt*.62,12,8,0,Math.PI*2,0,Math.PI/2).translate(tt,Tt,dt),14176298)),n.push(li(new vi(.5,2.4,8).translate(tt,Tt+bt*.62+1.2,dt),15909424))},xt=Math.min(11,Math.sqrt(p)*.45),W=x.reduce((tt,dt)=>Math.hypot(dt[0]-z,dt[1]-Y)>Math.hypot(tt[0]-z,tt[1]-Y)?dt:tt);at(z+(W[0]-z)*.35,Y+(W[1]-Y)*.35,xt,5),at(z-(W[0]-z)*.25,Y-(W[1]-Y)*.25,xt*.6,2)}if(T==="modern"){n.push(li(new Ht(5,3,4).translate(z,C+S+1.5,Y),12105908));for(let at=0;at<x.length;at++){const xt=x[at],W=x[(at+1)%x.length],tt=Math.hypot(W[0]-xt[0],W[1]-xt[1]);for(let dt=4;dt<tt-2;dt+=8){const it=xt[0]+(W[0]-xt[0])*dt/tt,Lt=xt[1]+(W[1]-xt[1])*dt/tt;n.push(li(new Ht(.8,S,.8).translate(it,C+S/2,Lt),15921126))}}}let k=1e9,$=1e9,ct=-1e9,pt=-1e9;for(const[at,xt]of x)k=Math.min(k,at),$=Math.min($,xt),ct=Math.max(ct,at),pt=Math.max(pt,xt);i.push({p:x,bb:[k,$,ct,pt],base:C,top:C+S})});const l=Ce(n,!1);for(const d of n)d.dispose();const h=new Yt(l,yx(Mx(),Eu));h.castShadow=!0,h.receiveShadow=!0;const u=new cu(new m_(l,35),new cc({color:1708556,transparent:!0,opacity:.8})),f=new Zt;return f.name="buildings",f.add(h,u),{group:f,list:i}}const Gi=class Gi{constructor(t){this.cells=new Map;const e=Gi.C;for(const n of t)for(let i=Math.floor(n.bb[0]/e);i<=Math.floor(n.bb[2]/e);i++)for(let r=Math.floor(n.bb[1]/e);r<=Math.floor(n.bb[3]/e);r++){const o=i*65536+r;let a=this.cells.get(o);a||this.cells.set(o,a=[]),a.push(n)}}solid(t,e,n){const i=this.cells.get(Math.floor(t/Gi.C)*65536+Math.floor(e/Gi.C));if(!i)return!1;for(const r of i){if(t<r.bb[0]-n||t>r.bb[2]+n||e<r.bb[1]-n||e>r.bb[3]+n)continue;if($n(r.p,t,e))return!0;const o=r.p;for(let a=0,c=o.length-1;a<o.length;c=a++){const l=o[a][0]-o[c][0],h=o[a][1]-o[c][1],u=l*l+h*h||1e-9,f=Math.max(0,Math.min(1,((t-o[c][0])*l+(e-o[c][1])*h)/u));if(Math.hypot(t-o[c][0]-l*f,e-o[c][1]-h*f)<n)return!0}}return!1}};Gi.C=30;let Ha=Gi;function hn(s,t){const e=new wt(t),n=s.attributes.position.count,i=new Float32Array(n*3);for(let r=0;r<n;r++)i[r*3]=e.r,i[r*3+1]=e.g,i[r*3+2]=e.b;return s.setAttribute("color",new oe(i,3)),s.deleteAttribute("uv"),s}function Ho(s,t,e){const n=hn(new Qt(.35,.5,s,6).translate(0,s/2,0),7031342),i=hn(new is(t,0).translate(0,s+t*.6,0),e);return Ce([n.toNonIndexed(),i.toNonIndexed()])}function Rx(){const s=[];let t=0,e=0;for(let n=0;n<6;n++){const i=.05+n*.045,r=2.2,o=new Qt(.28-n*.02,.32-n*.02,r,6).rotateZ(-i).translate(t+Math.sin(i)*r/2,e+Math.cos(i)*r/2,0);s.push(hn(o,n%2?9073752:8021064).toNonIndexed()),t+=Math.sin(i)*r,e+=Math.cos(i)*r}for(let n=0;n<9;n++){const i=n/9*Math.PI*2,r=4.6,o=new Ht(r,.06,.9).translate(r/2,0,0).rotateZ(-.35-n%3*.12).rotateY(i).translate(t,e,0);s.push(hn(o,n%2?5212730:4160048).toNonIndexed())}for(let n=0;n<3;n++)s.push(hn(new Me(.3,5,4).translate(t+Math.cos(n*2.1)*.35,e-.4,Math.sin(n*2.1)*.35),7035434).toNonIndexed());return Ce(s)}function Cx(){const s=hn(new is(1.3,0).scale(1.2,.8,1.2).translate(0,.9,0),4157488).toNonIndexed(),t=hn(new is(.8,0).translate(.5,1.4,.3),14172282).toNonIndexed();return Ce([s,t])}function fh(s,t){const e=[hn(new Qt(.7,1.1,7,7).translate(0,3.5,0),4864556).toNonIndexed()];for(const i of[.6,2.7,4.6])e.push(hn(new Qt(.35,.55,5,6).rotateZ(.7).rotateY(i).translate(Math.cos(i)*1.4,8,-Math.sin(i)*1.4),4864556).toNonIndexed());return[[0,11,0,5.5],[4,10.2,1,4.2],[-3.5,10.4,-1.8,4.4],[1,10,-4,4],[-1.5,10.2,3.8,4.2]].forEach(([i,r,o,a],c)=>e.push(hn(new is(a,1).scale(1.25,.6,1.25).translate(i,r,o),c===0&&t!==s?t:c%2?s:t).toNonIndexed())),Ce(e)}function Px(s,t,e,n){const i=new Zt;i.name="trees";let r=7;const o=()=>(r=r*16807%2147483647)/2147483647,a=(v,y)=>{const P=[];for(let A=0;A<s.H;A++)for(let T=0;T<s.W;T++)if(s.rows[A][T]===v)for(let L=0;L<Math.floor(y+o());L++){const b=(T+o())*st,S=(A+o())*st;!e.solid(b,S,3)&&!n.at(b,S)&&P.push([b,S])}return P},c=(v,y,P)=>{const A=new ti(v,new fe({vertexColors:!0,flatShading:!0}),y.length),T=new zt,L=new Ze,b=new I,S=new I;y.forEach(([C,F],U)=>{const H=P[0]+o()*(P[1]-P[0]);L.setFromAxisAngle(new I(0,1,0),o()*Math.PI*2),T.compose(S.set(C,t.heightAt(C,F),F),L,b.set(H,H,H)),A.setMatrixAt(U,T)}),A.castShadow=!0,A.receiveShadow=!0,i.add(A)};c(Ho(3.5,3.4,4618810),a("F",2),[.8,1.4]),c(Ho(1.2,2.4,2771504),a("M",1),[.7,1.1]),c(Rx(),[...a("G",.35),...a("S",1),...a("B",1)],[.9,1.25]),c(Cx(),a("G",.9),[.8,1.2]),c(Ho(3.2,3,5212732),a("G",.35),[.8,1.3]);const l=Ce([0,1,2].map(v=>hn(new vi(.35,1.4,4).rotateZ((v-1)*.35).translate((v-1)*.3,.6,0),v===1?6265406:4883508).toNonIndexed())),h=new Zt;h.name="grass",i.add(h);const u=[],f=new ti(l,new fe({vertexColors:!0}),u.length),d=new zt,g=new Ze,_=new I,p=new I;u.forEach(([v,y],P)=>{const A=.8+o()*.7;g.setFromAxisAngle(new I(0,1,0),o()*6.28),d.compose(p.set(v,t.heightAt(v,y),y),g,_.set(A,A,A)),f.setMatrixAt(P,d)}),h.add(f);const m=[],x=[];for(const[v,y,P]of s.r){if(y<9||P&1)continue;const A=v.length/2;for(let T=1;T<A;T++){const L=v[T*2-2]*st,b=v[T*2-1]*st,S=v[T*2]*st,C=v[T*2+1]*st,F=Math.hypot(S-L,C-b);if(F<1)continue;const U=-(C-b)/F,H=(S-L)/F,q=y*.75+5;for(let z=10;z<F;z+=24)for(const Y of[-1,1]){const k=L+(S-L)*z/F+U*q*Y,$=b+(C-b)*z/F+H*q*Y;e.solid(k,$,3)||n.at(k,$)||t.isWet(k,$)||(o()<.22?x:m).push([k,$])}}}return c(fh(3959342,5012020),m,[.75,1.05]),c(fh(3959342,14698538),x,[.7,.95]),i}class Lx extends fs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Fx(e)}),this.register(function(e){return new Ox(e)}),this.register(function(e){return new qx(e)}),this.register(function(e){return new Yx(e)}),this.register(function(e){return new jx(e)}),this.register(function(e){return new zx(e)}),this.register(function(e){return new kx(e)}),this.register(function(e){return new Hx(e)}),this.register(function(e){return new Vx(e)}),this.register(function(e){return new Ux(e)}),this.register(function(e){return new Gx(e)}),this.register(function(e){return new Bx(e)}),this.register(function(e){return new Xx(e)}),this.register(function(e){return new Wx(e)}),this.register(function(e){return new Dx(e)}),this.register(function(e){return new Kx(e)}),this.register(function(e){return new $x(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Bs.extractUrlBase(t);o=Bs.resolveURL(l,this.path)}else o=Bs.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new yu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Tu){try{o[$t.KHR_BINARY_GLTF]=new Zx(t)}catch(u){i&&i(u);return}r=JSON.parse(o[$t.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new hv(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case $t.KHR_MATERIALS_UNLIT:o[u]=new Nx;break;case $t.KHR_DRACO_MESH_COMPRESSION:o[u]=new Jx(r,this.dracoLoader);break;case $t.KHR_TEXTURE_TRANSFORM:o[u]=new Qx;break;case $t.KHR_MESH_QUANTIZATION:o[u]=new tv;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function Ix(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const $t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Dx{constructor(t){this.parser=t,this.name=$t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new wt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],ze);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Su(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new to(h),l.distance=u;break;case"spot":l=new J_(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ln(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class Nx{constructor(){this.name=$t.KHR_MATERIALS_UNLIT}getMaterialType(){return Oe}extendParams(t,e,n){const i=[];t.color=new wt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],ze),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Se))}return Promise.all(i)}}class Ux{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class Fx{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ht(a,a)}return Promise.all(r)}}class Ox{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Bx{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class zx{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new wt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],ze)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Se)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class kx{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Hx{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new wt().setRGB(a[0],a[1],a[2],ze),Promise.all(r)}}class Vx{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Gx{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new wt().setRGB(a[0],a[1],a[2],ze),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Se)),Promise.all(r)}}class Wx{constructor(t){this.parser=t,this.name=$t.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Xx{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class qx{constructor(t){this.parser=t,this.name=$t.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class Yx{constructor(t){this.parser=t,this.name=$t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class jx{constructor(t){this.parser=t,this.name=$t.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Kx{constructor(t){this.name=$t.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class $x{constructor(t){this.name=$t.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==tn.TRIANGLES&&l.mode!==tn.TRIANGLE_STRIP&&l.mode!==tn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const g of u){const _=new zt,p=new I,m=new Ze,x=new I(1,1,1),v=new ti(g.geometry,g.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&x.fromBufferAttribute(c.SCALE,y),v.setMatrixAt(y,_.compose(p,m,x));for(const y in c)if(y==="_COLOR_0"){const P=c[y];v.instanceColor=new Na(P.array,P.itemSize,P.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);me.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Tu="glTF",As=12,dh={JSON:1313821514,BIN:5130562};class Zx{constructor(t){this.name=$t.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,As),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Tu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-As,r=new DataView(t,As);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===dh.JSON){const l=new Uint8Array(t,As+o,a);this.content=n.decode(l)}else if(c===dh.BIN){const l=As+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Jx{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$t.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Va[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=Va[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[t.attributes[h]],d=Ki[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const g in d.attributes){const _=d.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}u(d)},a,l,ze,f)})})}}class Qx{constructor(){this.name=$t.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class tv{constructor(){this.name=$t.KHR_MESH_QUANTIZATION}}class wu extends js{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,f=u*u,d=f*u,g=t*l,_=g-l,p=-2*d+3*f,m=d-f,x=1-p,v=m-f+u;for(let y=0;y!==a;y++){const P=o[_+y+a],A=o[_+y+c]*h,T=o[g+y+a],L=o[g+y]*h;r[y]=x*P+v*A+p*T+m*L}return r}}const ev=new Ze;class nv extends wu{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return ev.fromArray(r).normalize().toArray(r),r}}const tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ki={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ph={9728:De,9729:Ye,9984:Ph,9985:Fr,9986:Ls,9987:In},mh={33071:Zn,33648:Gr,10497:mi},Vo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Va={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iv={CUBICSPLINE:void 0,LINEAR:Hs,STEP:ks},Go={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new gc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),s.DefaultMaterial}function hi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Ln(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function rv(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function ov(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function av(s){let t;const e=s.extensions&&s.extensions[$t.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Wo(e.attributes):t=s.indices+":"+Wo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Wo(s.targets[n]);return t}function Wo(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Ga(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const lv=new zt;class hv{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Ix,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new K_(this.options.manager):this.textureLoader=new ex(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return hi(r,a,i),Ln(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[$t.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Bs.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=Vo[i.type],a=Ki[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new oe(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Vo[i.type],l=Ki[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(d&&d!==u){const m=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=e.cache.get(x);v||(_=new l(a,m*d,i.count*d/h),v=new ru(_,d/h),e.cache.add(x,v)),p=new Gs(v,c,f%d/h,g)}else a===null?_=new l(i.count*c):_=new l(a,f,i.count*c),p=new oe(_,c,g);if(i.sparse!==void 0){const m=Vo.SCALAR,x=Ki[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,P=new x(o[1],v,i.sparse.count*m),A=new l(o[2],y,i.sparse.count*c);a!==null&&(p=new oe(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,L=P.length;T<L;T++){const b=P[T];if(p.setX(b,A[T*c]),c>=2&&p.setY(b,A[T*c+1]),c>=3&&p.setZ(b,A[T*c+2]),c>=4&&p.setW(b,A[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=ph[f.magFilter]||Ye,h.minFilter=ph[f.minFilter]||In,h.wrapS=mh[f.wrapS]||mi,h.wrapT=mh[f.wrapT]||mi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==De&&h.minFilter!==Ye,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;e.isImageBitmapLoader===!0&&(g=function(_){const p=new be(_);p.needsUpdate=!0,f(p)}),e.load(Bs.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Ln(u,o),u.userData.mimeType=o.mimeType||cv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$t.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$t.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[$t.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new lu,Ke.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new cc,Ke.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return gc}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},l=[];if(c[$t.KHR_MATERIALS_UNLIT]){const u=i[$t.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new wt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],ze),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,Se)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Ve);const h=r.alphaMode||Go.OPAQUE;if(h===Go.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Go.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Oe&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ht(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Oe&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Oe){const u=r.emissiveFactor;a.emissive=new wt().setRGB(u[0],u[1],u[2],ze)}return r.emissiveTexture!==void 0&&o!==Oe&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Se)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Ln(u,r),e.associations.set(u,{materials:t}),r.extensions&&hi(i,u,r),u})}createUniqueName(t){const e=le.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return gh(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=av(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[$t.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=gh(new _e,l,e),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?sv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){const _=h[d],p=o[d];let m;const x=l[d];if(p.mode===tn.TRIANGLES||p.mode===tn.TRIANGLE_STRIP||p.mode===tn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Z0(_,x):new Yt(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===tn.TRIANGLE_STRIP?m.geometry=rh(m.geometry,kh):p.mode===tn.TRIANGLE_FAN&&(m.geometry=rh(m.geometry,Pa));else if(p.mode===tn.LINES)m=new cu(_,x);else if(p.mode===tn.LINE_STRIP)m=new lc(_,x);else if(p.mode===tn.LINE_LOOP)m=new t_(_,x);else if(p.mode===tn.POINTS)m=new e_(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&ov(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),Ln(m,r),p.extensions&&hi(i,m,p),e.assignFinalMaterial(m),u.push(m)}for(let d=0,g=u.length;d<g;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return r.extensions&&hi(i,u[0],r),u[0];const f=new Zt;r.extensions&&hi(i,f,r),e.associations.set(f,{meshes:t});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Fe(Vh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new ic(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Ln(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const f=new zt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new ac(a,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],g=i.samplers[d.sampler],_=d.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],g=u[2],_=u[3],p=u[4],m=[];for(let x=0,v=f.length;x<v;x++){const y=f[x],P=d[x],A=g[x],T=_[x],L=p[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const b=n._createAnimationTracks(y,P,A,T,L);if(b)for(let S=0;S<b.length;S++)m.push(b[S])}return new V_(r,void 0,m)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,lv)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new au:l.length>1?h=new Zt:l.length===1?h=l[0]:h=new me,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ln(h,r),r.extensions&&hi(n,h,r),r.matrix!==void 0){const u=new zt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Zt;n.name&&(r.name=i.createUniqueName(n.name)),Ln(r,n),n.extensions&&hi(e,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof Ke||f instanceof be)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,c=[];qn[r.path]===qn.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(qn[r.path]){case qn.weights:l=ss;break;case qn.rotation:l=rs;break;case qn.position:case qn.scale:l=os;break;default:switch(n.itemSize){case 1:l=ss;break;case 2:case 3:default:l=os;break}break}const h=i.interpolation!==void 0?iv[i.interpolation]:Hs,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const g=new l(c[f]+"."+qn[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Ga(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof rs?nv:wu;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function uv(s,t,e){const n=t.attributes,i=new gn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){const h=Ga(Ki[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new I,c=new I;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=e.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=Ga(Ki[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new _n;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function gh(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Va[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return Jt.workingColorSpace!==ze&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Jt.workingColorSpace}" not supported.`),Ln(s,t),uv(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?rv(s,t.targets,e):s})}const fv=["church","secretariat","mahalaxmi","atalsetu","imb","postoffice","maruti","sebastian","donbosco","kadamba"],Mc=new Map;async function dv(s){const t=await new Lx().loadAsync(`./models/${s}.glb`);t.scene.updateMatrixWorld(!0);const e=new Map;t.scene.traverse(o=>{const a=o;if(!a.isMesh)return;const c=Array.isArray(a.material)?a.material:[a.material],l=a.geometry.clone().applyMatrix4(a.matrixWorld);for(const h of["uv","uv1","tangent","color"])l.attributes[h]&&l.deleteAttribute(h);if(c.length===1){const h=e.get(c[0])??[];h.push(l.index?l.toNonIndexed():l),e.set(c[0],h)}else for(const h of l.groups){const u=l.index?l.toNonIndexed():l,f=new _e;for(const _ of Object.keys(u.attributes)){const p=u.attributes[_];f.setAttribute(_,new oe(p.array.slice(h.start*p.itemSize,(h.start+h.count)*p.itemSize),p.itemSize))}const d=c[h.materialIndex??0],g=e.get(d)??[];g.push(f),e.set(d,g)}});const n=new Zt,i=[],r=[];for(const[o,a]of e){const c=Ce(a);if(!c)continue;const l=o,h=(l.emissiveIntensity??0)>.5&&l.emissive&&l.emissive.getHex()!==0,u=h?l.emissive:l.color,f=c.attributes.position.count,d=new Float32Array(f*3);for(let g=0;g<f;g++)d[g*3]=u.r,d[g*3+1]=u.g,d[g*3+2]=u.b;c.setAttribute("color",new oe(d,3));for(const g of Object.keys(c.attributes))["position","normal","color"].includes(g)||c.deleteAttribute(g);(h?r:i).push(c)}if(i.length){const o=new Yt(Ce(i),new fe({vertexColors:!0}));o.castShadow=!0,n.add(o)}return r.length&&n.add(new Yt(Ce(r),new Oe({vertexColors:!0}))),n}async function pv(){await Promise.all(["pilot","bus","child",...fv].map(async s=>{try{Mc.set(s,await dv(s))}catch(t){console.warn("model",s,t)}}))}function Wa(s,t){const e=Mc.get(s);if(!e)return null;const n=new Zt,i=e.clone(!0),r=new gn().setFromObject(i),o=new I;r.getSize(o);const a=t.height?t.height/o.y:(t.length??1)/o.x;return i.scale.setScalar(a),i.position.set(-(r.min.x+r.max.x)/2*a,-r.min.y*a,-(r.min.z+r.max.z)/2*a),n.add(i),n}function mv(s){const t=Mc.get(s);return t?t.clone(!0):null}const Rs=3.4;class gv{constructor(){this.obj=new Zt,this.t=0,this.heading=0,this.model=null;const t=(g,_=0)=>new fe({color:g,emissive:_?g:0,emissiveIntensity:_}),e=t(12089674),n=t(15909424),i=t(3104688),r=t(1709072),o=t(16645109),a=t(1446158),c=t(11817770),l=(g,_,p,m,x,v)=>{const y=new Yt(_,p);return y.position.set(m,x,v),y.castShadow=!0,g.add(y),y},h=new Zt;this.obj.add(h),h.scale.setScalar(Rs);const u=g=>{const _=new Zt;return _.position.set(0,.34,g*.08),h.add(_),l(_,new Qt(.055,.055,.3,8),e,0,-.16,0),l(_,new Ht(.17,.08,.1),a,.04,-.31,0),_};this.legL=u(1),this.legR=u(-1),l(h,new Me(.16,12,8).scale(.95,.7,1.05),i,0,.38,0),l(h,new Me(.17,12,8).scale(.92,1.05,1.05),n,0,.55,0);const f=new Zt;f.position.set(0,.64,.19),h.add(f),l(f,new Qt(.045,.045,.24,8),e,0,-.12,0),this.armL=f,l(h,new Qt(.045,.045,.24,8).rotateZ(-1.2),e,.12,.56,-.2),l(h,new Me(.085,10,6).scale(1,.45,1),c,.25,.52,-.21),l(h,new Me(.035,8,6).scale(1,2,1),t(16765803,1.5),.3,.6,-.21),l(h,new Me(.265,16,12),e,.01,.93,0),l(h,new Me(.27,16,12).scale(1,.8,1.02),r,-.045,1,0);for(const g of[-.105,.105])l(h,new Me(.07,10,8),o,.235,.94,g),l(h,new Me(.032,8,6),a,.29,.935,g);const d=Wa("child",{height:1.15*Rs});d&&(h.visible=!1,this.obj.add(d),this.model=d),this.lamp=new to(16762992,0,40,1.6),this.lamp.position.set(.3*Rs,.8*Rs,-.21*Rs),this.obj.add(this.lamp)}update(t,e,n){this.t+=t*(e>.1?Math.min(14,4+e*.6):0);const i=e>.1?Math.sin(this.t)*.55:0;this.legL.rotation.z=i,this.legR.rotation.z=-i,this.armL.rotation.z=-i*.8,this.obj.rotation.y=-this.heading,this.model&&(this.model.position.y=Math.abs(Math.sin(this.t))*(e>.1?.35:0),this.model.rotation.z=i*.08),this.lamp.intensity=n?200:0}}class _v{constructor(t){this.keys=new Set,this.drag=null,this.touch=null,this.turnDelta=0,this.tiltDelta=0,this.zoomDelta=0,this.onKey=()=>{},addEventListener("keydown",n=>{const i=n.key.toLowerCase();["arrowup","arrowdown","arrowleft","arrowright"," "].includes(i)&&n.preventDefault(),n.repeat||((i==="="||i==="+")&&this.zoomDelta++,(i==="-"||i==="_")&&this.zoomDelta--,this.onKey(i)),this.keys.add(i)}),addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),addEventListener("blur",()=>this.keys.clear()),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{n.pointerType==="mouse"?(this.drag={x:n.clientX,y:n.clientY},t.setPointerCapture(n.pointerId)):(this.touch={id:n.pointerId,x:n.clientX,y:n.clientY,dx:0,dy:0},t.setPointerCapture(n.pointerId))}),t.addEventListener("pointermove",n=>{this.drag&&(this.turnDelta+=(n.clientX-this.drag.x)*.007,this.tiltDelta+=(n.clientY-this.drag.y)*.004,this.drag.x=n.clientX,this.drag.y=n.clientY),this.touch&&n.pointerId===this.touch.id&&(this.touch.dx=n.clientX-this.touch.x,this.touch.dy=n.clientY-this.touch.y)});const e=n=>{this.drag&&n.pointerType==="mouse"&&(this.drag=null),this.touch&&n.pointerId===this.touch.id&&(this.touch=null)};t.addEventListener("click",n=>{n.pointerType!=="touch"&&document.pointerLockElement!==t&&t.requestPointerLock?.()}),addEventListener("mousemove",n=>{document.pointerLockElement===t&&(this.turnDelta+=n.movementX*.004,this.tiltDelta+=n.movementY*.003)}),t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("wheel",n=>{n.preventDefault(),this.zoomDelta+=n.deltaY<0?1:-1},{passive:!1})}has(t){return this.keys.has(t)}move(){let t=(this.has("d")||this.has("arrowright")?1:0)-(this.has("a")||this.has("arrowleft")?1:0),e=(this.has("s")||this.has("arrowdown")?1:0)-(this.has("w")||this.has("arrowup")?1:0);if(this.touch&&Math.hypot(this.touch.dx,this.touch.dy)>10){const i=Math.hypot(this.touch.dx,this.touch.dy);t=this.touch.dx/i,e=this.touch.dy/i}const n=Math.hypot(t,e);return n>1?{x:t/n,y:e/n}:{x:t,y:e}}heldTurn(){return(this.has("x")||this.has("e")?1:0)-(this.has("z")||this.has("q")?1:0)}}const pn=class pn{constructor(){this.yaw=Math.PI/4,this.yawTarget=Math.PI/4,this.span=pn.SPAN,this.spanTarget=pn.SPAN,this.tilt=pn.TILT,this.tiltTarget=pn.TILT,this.target=new I,this.FOV=32,this.camera=new Fe(this.FOV,1,1,6e3)}turn(t){this.yawTarget+=t}reset(){this.spanTarget=pn.SPAN,this.tiltTarget=pn.TILT}zoom(t){this.spanTarget=Math.max(30,Math.min(600,this.spanTarget*Math.pow(.87,t)))}tiltBy(t){this.tiltTarget=Math.max(.2,Math.min(1.25,this.tiltTarget+t))}update(t,e,n){const i=Math.min(1,t*10);this.yaw+=(this.yawTarget-this.yaw)*i,this.span+=(this.spanTarget-this.span)*i,this.tilt+=(this.tiltTarget-this.tilt)*i,this.target.lerp(e,Math.min(1,t*8));const r=this.camera;r.aspect=n;const o=this.span/2/(Math.tan(Vh.degToRad(this.FOV)/2)*n);r.far=o*4.6+300;const a=Math.cos(this.tilt);r.position.set(this.target.x+Math.cos(this.yaw)*a*o,this.target.y+Math.sin(this.tilt)*o,this.target.z+Math.sin(this.yaw)*a*o),r.lookAt(this.target.x,this.target.y+2,this.target.z)}screenToGround(t,e){const n=Math.sin(this.yaw),i=-Math.cos(this.yaw),r=Math.cos(this.yaw),o=Math.sin(this.yaw);return{x:n*t+r*e,z:i*t+o*e}}};pn.SPAN=105,pn.TILT=.36;let Xa=pn;const xv=.9;class vv{constructor(t,e,n){this.g=t,this.bi=e,this.si=n}free(t,e){return t<st||e<st||t>(this.g.W-1)*st||e>(this.g.H-1)*st?!1:this.si.at(t,e)?!0:this.g.isWet(t,e)?!1:!this.bi.solid(t,e,xv)}step(t,e,n,i){if(!this.free(t,e)){const r=(c,l)=>Math.max(0,st-c,st-l,c-(this.g.W-1)*st,l-(this.g.H-1)*st),o=t+n,a=e+i;if(r(o,a)<r(t,e)||this.si.at(o,a)||this.free(o,a))return[o,a]}if(this.free(t+n,e+i))return[t+n,e+i];for(const r of[.35,-.35,.7,-.7,1.05,-1.05,1.4,-1.4]){const o=Math.cos(r),a=Math.sin(r),c=(n*o-i*a)*o,l=(n*a+i*o)*o;if(this.free(t+c,e+l))return[t+c,e+l]}return[t,e]}standY(t,e){const n=this.si.at(t,e);return n&&n.deck!==null?n.deck:Math.max(.2,this.g.heightAt(t,e))}}class Mv{constructor(){this.stats=document.getElementById("stats"),this.place=document.getElementById("place"),this.obj=document.getElementById("objective"),this.say=document.getElementById("say"),this.perf=document.getElementById("perf"),this.frames=0,this.acc=0,this.fps=0,this.worst=0,this.sayT=0}whisper(t,e=5){this.say.textContent=t,this.say.style.opacity="1",this.sayT=e}update(t,e,n){if(this.frames++,this.acc+=t,this.worst=Math.max(this.worst,t),this.acc>=.5){this.fps=Math.round(this.frames/this.acc);const a=e.info.render;this.perf.textContent=`${this.fps} fps · worst ${Math.round(this.worst*1e3)} ms · ${a.calls} draws`,this.frames=0,this.acc=0,this.worst=0}const i=(a,c)=>`<span class="bar"><i style="width:${Math.max(0,Math.min(100,a))}%;background:${c}"></i></span>`,r=`<div>Courage ${i(n.courage,"#9fe8d6")}</div><div>Lamp oil ${i(n.oil,"#f2b441")}</div><div><b>${n.points}</b> points · ${n.time}${n.riding?" · <em>riding</em>":""}</div>`;this.stats.innerHTML!==r&&(this.stats.innerHTML=r),this.place.textContent!==n.placeName&&(this.place.textContent=n.placeName,this.place.style.display=n.placeName?"":"none");const o=n.objective+(n.hint?` — ${n.hint}`:"");this.obj.textContent!==o&&(this.obj.textContent=o),this.sayT>0&&(this.sayT-=t,this.sayT<=0&&(this.say.style.opacity="0"))}}class yv{constructor(t,e){this.nodes=[],this.edges=[];const n=(c,l)=>`${Math.round(c*50)},${Math.round(l*50)}`,i=new Map,r=t.r.filter(([c,l])=>c.length>=4&&l>=5);for(const[c]of r)for(const[l,h]of $e(c))i.set(n(l,h),(i.get(n(l,h))??0)+1);const o=new Map,a=(c,l)=>{const h=n(c,l);let u=o.get(h);return u===void 0&&(u=this.nodes.length,o.set(h,u),this.nodes.push({x:c*st,z:l*st,out:[]})),u};for(const[c,l,h]of r){const u=$e(c);let f=0;const g=(h&1)!==0?Math.max(5,e.heightAt(u[0][0]*st,u[0][1]*st)+.3,e.heightAt(u[u.length-1][0]*st,u[u.length-1][1]*st)+.3)+(h&8?14:0):null;for(let _=1;_<u.length;_++){if(_<u.length-1&&(i.get(n(u[_][0],u[_][1]))??0)<2)continue;const p=u.slice(f,_+1).map(([x,v])=>[x*st,v*st]);let m=0;for(let x=1;x<p.length;x++)m+=Math.hypot(p[x][0]-p[x-1][0],p[x][1]-p[x-1][1]);if(m>1){const x=a(u[f][0],u[f][1]),v=a(u[_][0],u[_][1]),y=(h&4)!==0,P=this.edges.length;this.edges.push({a:x,b:v,line:p,len:m,width:l*1.5,oneWay:y,deck:g}),this.nodes[x].out.push(P),y||this.nodes[v].out.push(~P)}f=_}}}at(t,e){const n=this.edges[t<0?~t:t],i=n.line,r=t<0;let o=r?n.len-e:e;for(let a=1;a<i.length;a++){const[c,l]=i[a-1],[h,u]=i[a],f=Math.hypot(h-c,u-l);if(o<=f||a===i.length-1){const d=Math.max(0,Math.min(1,o/(f||1))),g=(h-c)/(f||1),_=(u-l)/(f||1);return{x:c+(h-c)*d,z:l+(u-l)*d,dx:r?-g:g,dz:r?-_:_}}o-=f}return{x:i[0][0],z:i[0][1],dx:1,dz:0}}end(t){const e=this.edges[t<0?~t:t];return t<0?e.a:e.b}edge(t){return this.edges[t<0?~t:t]}next(t,e){const n=this.nodes[this.end(t)],i=~t,r=n.out.filter(o=>o!==i);return r.length?r[Math.floor(e()*r.length)]:n.out.includes(i)?i:n.out[0]??i}nearest(t,e){let n={e:0,s:0,d:1e18};return this.edges.forEach((i,r)=>{let o=0;for(let a=1;a<i.line.length;a++){const[c,l]=i.line[a-1],[h,u]=i.line[a],f=h-c,d=u-l,g=f*f+d*d||1e-9,_=Math.max(0,Math.min(1,((t-c)*f+(e-l)*d)/g)),p=Math.hypot(t-c-f*_,e-l-d*_);p<n.d&&(n={e:r,s:o+Math.sqrt(g)*_,d:p}),o+=Math.sqrt(g)}}),n}}const _h=[14210248,11545130,2772106,1908002,9211024,15262416,3894085],He=(s,t,e,n,i,r=0)=>{const o=new Yt(new Ht(e,t,s),new fe({color:n}));return o.position.set(r,i,0),o.castShadow=!0,o};function Sv(s,t){const e=s==="pilot"?Wa("pilot",{length:3.2}):s==="bus"?Wa("bus",{length:16.8}):null;if(e)return e;const n=new Zt;if(s==="car"){const a=_h[Math.floor(t()*_h.length)];n.add(He(2.2,1.1,4.6,a,.85),He(1.9,.8,2.4,a,1.8,-.3),He(1.95,.55,2.2,1778736,1.8,-.3));for(const[c,l]of[[1.5,1.05],[1.5,-1.05],[-1.5,1.05],[-1.5,-1.05]]){const h=He(.3,.7,.7,1118481,.35,c);h.position.z=l,n.add(h)}}else if(s==="bus"){n.add(He(2.6,2.6,10.5,15921126,1.9),He(2.62,.5,10.52,3115578,1),He(2.62,.2,10.52,15909424,1.35),He(2.64,.9,9.6,1778736,2.6,-.2));for(const a of[3.6,-3.4])for(const c of[1.25,-1.25]){const l=He(.3,.9,.9,1118481,.45,a);l.position.z=c,n.add(l)}}else{n.add(He(.5,.6,1.9,15909424,.75),He(.6,.25,.8,1908002,1.1,-.2),He(.55,.9,.45,16645109,1.75,-.2),He(.4,.4,.4,2759184,2.4,-.15));for(const a of[.75,-.75])n.add(He(.15,.6,.6,1118481,.3,a))}n.scale.setScalar(1.6),n.updateMatrixWorld(!0);const i=[];n.traverse(a=>{const c=a;if(!c.isMesh)return;const l=c.geometry.clone().applyMatrix4(c.matrix).toNonIndexed(),h=c.material.color,u=new Float32Array(l.attributes.position.count*3);for(let f=0;f<u.length;f+=3)u[f]=h.r,u[f+1]=h.g,u[f+2]=h.b;l.setAttribute("color",new oe(u,3)),l.deleteAttribute("uv"),i.push(l)});const r=new Zt,o=new Yt(Ce(i),new fe({vertexColors:!0}));return o.castShadow=!0,o.scale.setScalar(1.6),r.add(o),r}class bv{constructor(t,e,n=42){this.net=t,this.g=e,this.count=n,this.group=new Zt,this.list=[],this.potholes=[],this.riding=null,this.seed=99,this.rnd=()=>(this.seed=this.seed*16807%2147483647)/2147483647,this.onEvent=()=>{},this.group.name="traffic",this.mids=t.edges.map((o,a)=>{const c=o.line[Math.floor(o.line.length/2)];return{e:a,x:c[0],z:c[1]}});const i=new fc(1.4,10).rotateX(-Math.PI/2),r=new fe({color:1973274,polygonOffset:!0,polygonOffsetFactor:-4});for(let o=0;o<160;o++){const a=t.edges[Math.floor(this.rnd()*t.edges.length)];if(a.deck!==null||a.len<30)continue;const c=t.at(t.edges.indexOf(a),this.rnd()*a.len),l=(this.rnd()-.5)*a.width*.5,h=c.x-c.dz*l,u=c.z+c.dx*l;this.potholes.push({x:h,z:u});const f=new Yt(i,r);f.position.set(h,e.heightAt(h,u)+.24,u),f.scale.set(.7+this.rnd(),1,.7+this.rnd()),this.group.add(f)}}spawn(t,e,n){const i=this.mids.filter(f=>{const d=Math.hypot(f.x-t,f.z-e);return n?d>180&&d<320:d<300});if(!i.length)return;const r=i[Math.floor(this.rnd()*i.length)],o=this.net.edges[r.e],a=this.rnd(),c=o.width<9?a<.6?"pilot":"car":a<.12?"bus":a<.5?"pilot":"car",l=o.oneWay||this.rnd()<.5?r.e:~r.e,h=(c==="pilot"?9:c==="bus"?6:8)*(o.width<9?.7:1),u=Sv(c,this.rnd);this.group.add(u),this.list.push({kind:c,obj:u,e:l,s:this.rnd()*o.len,v:h*.6,vmax:h,len:c==="bus"?17:c==="car"?7.5:3.2,x:0,z:0,hx:1,hz:0,honk:0})}remove(t){this.group.remove(t.obj),this.list.splice(this.list.indexOf(t),1)}nearbyFor(t,e){let n=null,i=9;for(const r of this.list){const o=Math.hypot(r.x-t,r.z-e);o<i&&r.kind!=="car"&&(i=o,n=r)}if(!n)for(const r of this.list){const o=Math.hypot(r.x-t,r.z-e);o<i&&(i=o,n=r)}return n}update(t,e,n,i){for(let o=0;o<4&&this.list.length<this.count;o++)this.spawn(e,n,this.list.length>this.count/2&&this.list.length>0);let r=null;for(const o of[...this.list]){if(o!==this.riding&&Math.hypot(o.x-e,o.z-n)>420&&o.x!==0){this.remove(o);continue}let a=o.vmax;for(const g of this.list){if(g===o)continue;const _=g.x-o.x,p=g.z-o.z,m=_*o.hx+p*o.hz,x=Math.abs(_*o.hz-p*o.hx);m>0&&m<o.len+9&&x<2.6&&g.hx*o.hx+g.hz*o.hz>.3&&(a=Math.min(a,Math.max(0,(m-o.len)*.6)))}if(o!==this.riding){const g=e-o.x,_=n-o.z,p=g*o.hx+_*o.hz,m=Math.abs(g*o.hz-_*o.hx);p>0&&p<14&&m<3.5&&(a=Math.min(a,Math.max(0,(p-6)*.5)),o.honk<=0&&o.v>2&&(o.honk=4,this.onEvent("honk",""))),Math.hypot(g,_)<o.len*.5+1&&m<2.4&&o.v>3&&!r&&(r={kx:o.hx*o.v*1.2+(g*o.hz-_*o.hx>0?o.hz:-o.hz)*4,kz:o.hz*o.v*1.2},this.onEvent("crash",o.kind==="pilot"?"Aay deva, bhurgea! Look where you are going, men!":o.kind==="bus"?"Ho kitem re! The Kadamba driver slams on his brakes.":"Screech! Dev borem korum, you are not hurt badly, no?"),o.v=0)}for(const g of this.potholes){const _=g.x-o.x,p=g.z-o.z,m=_*o.hx+p*o.hz;if(m>0&&m<12&&Math.abs(_*o.hz-p*o.hx)<2.5){a=Math.min(a,3);break}}i&&(a*=.85),o.v+=Math.max(-12*t,Math.min(3*t,a-o.v)),o.honk-=t,o.s+=o.v*t;for(let g=0;g<8&&o.s>this.net.edge(o.e).len;g++)o.s-=this.net.edge(o.e).len,o.e=this.net.next(o.e,this.rnd);const c=this.net.at(o.e,o.s),l=this.net.edge(o.e).width,h=l*(l>=9?.24:.2),u=c.dz,f=-c.dx;o.x=c.x+u*h,o.z=c.z+f*h,o.hx+=(c.dx-o.hx)*Math.min(1,t*8),o.hz+=(c.dz-o.hz)*Math.min(1,t*8);const d=this.net.edge(o.e).deck;o.obj.position.set(o.x,d!==null?d+.2:this.g.heightAt(o.x,o.z)+.25,o.z),o.obj.rotation.y=-Math.atan2(o.hz,o.hx)}return r}hopOn(t,e){const n=this.nearbyFor(t,e);if(!n)return!1;this.riding=n;const i=n.kind==="pilot"?"Boso, boso! Hold tight, men. Where you want to go?":n.kind==="bus"?'The conductor waves you in. "Panjim-Mapusa, come, come!"':'A kind uncle stops. "Get in, baba. I am going that side only."';return this.onEvent("hop",i),!0}hopOff(){const t=this.riding;if(!t)return null;this.riding=null,this.onEvent("drop",t.kind==="pilot"?'"Here only? Okay baba, go carefully."':'"Rav, rav, let me stop properly first!"');const e=this.net.edge(t.e).width;return{x:t.x+t.hz*(e*.4+2),z:t.z-t.hx*(e*.4+2)}}}const xh=[16645109,12597547,3049153,15105570,9323693,1482885,15909424,8359053],vh=["Kitem re, bhurgea? Lost or what?","Itlo uxir? So late you are out? Ghara voch, go home, men.","Dev borem korum. Careful of the cars, no?","Boso, boso, sit a little. Too hot today.","Aay deva, this pothole they will never fix, I tell you."];class Ev{constructor(t,e,n=36){this.net=t,this.g=e,this.count=n,this.group=new Zt,this.list=[],this.seed=4242,this.rnd=()=>(this.seed=this.seed*16807%2147483647)/2147483647,this.group.name="people"}make(){const t=new Zt,e=a=>new fe({color:a}),n=e([9067066,12089674,7029800][Math.floor(this.rnd()*3)]),i=e(xh[Math.floor(this.rnd()*xh.length)]),r=(a,c,l,h=t)=>{const u=new Yt(a,c);return u.position.y=l,u.castShadow=!0,h.add(u),u},o=[-.12,.12].map(a=>{const c=new Zt;return c.position.set(0,.85,a),t.add(c),r(new Qt(.08,.08,.85,6),e(2829107),-.42,c),c});return r(new Qt(.22,.26,.75,8),i,1.2),r(new Me(.2,10,8),n,1.8),r(new Me(.21,10,8,0,Math.PI*2,0,1.3),e(this.rnd()<.3?12369084:1709072),1.86),t.scale.setScalar(2.4),this.group.add(t),{obj:t,legs:o,e:0,s:0,side:this.rnd()<.5?1:-1,v:1.2+this.rnd()*.8,x:0,z:0,t:this.rnd()*6,pause:0}}update(t,e,n,i){const r=i?Math.floor(this.count/3):this.count;for(let o=0;o<3&&this.list.length<r;o++){const a=this.make(),c=this.net.edges.map((l,h)=>h).filter(l=>{const h=this.net.at(l,0);return Math.hypot(h.x-e,h.z-n)<280});if(!c.length){this.group.remove(a.obj);break}a.e=c[Math.floor(this.rnd()*c.length)],a.s=this.rnd()*this.net.edge(a.e).len,a.x=e+1e4,this.list.push(a)}for(const o of[...this.list]){if(Math.hypot(o.x-e,o.z-n)>360&&o.x<1e4||this.list.length>r){this.group.remove(o.obj),this.list.splice(this.list.indexOf(o),1);continue}const a=Math.hypot(o.x-e,o.z-n)<7;if(o.pause>0)o.pause-=t;else if(!a){o.s+=o.v*3*t,o.t+=t*7;for(let f=0;f<8&&o.s>this.net.edge(o.e).len;f++)o.s-=this.net.edge(o.e).len,o.e=this.net.next(o.e,this.rnd),this.rnd()<.1&&(o.pause=2+this.rnd()*3)}const c=this.net.at(o.e,o.s),l=this.net.edge(o.e),h=(l.width/2+2.2)*o.side;o.x=c.x+c.dz*h,o.z=c.z-c.dx*h,o.obj.position.set(o.x,(l.deck??this.g.heightAt(o.x,o.z))+.15,o.z),o.obj.rotation.y=a?-Math.atan2(n-o.z,e-o.x):-Math.atan2(c.dz,c.dx);const u=o.pause>0||a?0:Math.sin(o.t)*.5;o.legs[0].rotation.z=u,o.legs[1].rotation.z=-u}}near(t,e){for(const n of this.list)if(Math.hypot(n.x-t,n.z-e)<7)return n;return null}talk(t,e,n){let i=vh[Math.floor(this.rnd()*vh.length)];if(n){const r=n.x-t,o=n.z-e,a=Math.hypot(r,o),c=["east","south-east","south","south-west","west","north-west","north","north-east"][(Math.round(Math.atan2(o,r)/(Math.PI/4))%8+8)%8];i+=a<40?` ${n.name}? Here only, baba!`:` ${n.name}? Go ${c}, about ${Math.round(a/10)*10} metres. That side only.`}return i}}let Tv=null,wv=null;function Au(s){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);for(const[r,o]of s)n.addColorStop(r,o);e.fillStyle=n,e.fillRect(0,0,64,64);const i=new hu(t);return i.colorSpace=Se,i}const Av=()=>Tv??(Tv=Au([[0,"rgba(255,255,255,1)"],[.45,"rgba(255,255,255,.7)"],[1,"rgba(255,255,255,0)"]])),Rv=()=>wv??(wv=Au([[0,"rgba(255,255,230,1)"],[.25,"rgba(255,200,120,.9)"],[1,"rgba(255,80,0,0)"]]));class Cv{constructor(t,e){this.g=t,this.move=e,this.group=new Zt,this.list=[],this.spiritT=0,this.seed=1337,this.rnd=()=>(this.seed=this.seed*16807%2147483647)/2147483647,this.group.name="monsters",this.spirit=new Zt;const n=new Oe({color:10479830,transparent:!0,opacity:.75}),i=(o,a,c=0)=>{const l=new Yt(o,n);l.position.set(c,a,0),this.spirit.add(l)};i(new vi(1.6,6,10),3),i(new Me(.8,12,10),6.6),i(new Qt(.12,.12,8,6),4,1.8);const r=new to(10479830,0,60,1.2);r.position.y=5,this.spirit.add(r),this.spirit.visible=!1,this.group.add(this.spirit)}make(t,e){for(let n=0;n<10;n++){const i=this.rnd()*Math.PI*2,r=70+this.rnd()*60,o=t+Math.cos(i)*r,a=e+Math.sin(i)*r;if(!this.move.free(o,a))continue;const c=new Zt;for(let l=0;l<9;l++){const h=new Il(new Da({map:Av(),color:l<3?1707812:2758704,transparent:!0,opacity:.75-l*.04,depthWrite:!1})),u=1.6+Math.sin(l)*.6;h.scale.set(u*2.2,u*2.4,1),h.position.set(Math.sin(l*2.3)*.6,.8+l*.62,Math.cos(l*2.3)*.6),h.userData.k=l,c.add(h)}for(const l of[-.45,.45]){const h=new Il(new Da({map:Rv(),color:16738848,blending:qo,depthWrite:!1}));h.scale.set(1.1,.7,1),h.position.set(.9,4.1,l),h.userData.eye=1,c.add(h)}return this.group.add(c),{obj:c,x:o,z:a,fade:0,banish:0,t:this.rnd()*9}}return null}update(t,e,n,i,r,o){let a=0;const c=i?5:0;if(this.list.length<c&&this.rnd()<t*.4){const l=this.make(e,n);l&&this.list.push(l)}for(const l of[...this.list]){l.t+=t;const h=e-l.x,u=n-l.z,f=Math.hypot(h,u)||1,d=!i||l.banish>0||f>220;if(l.fade=Math.max(0,Math.min(1,l.fade+(d?-t:t*.6))),d&&l.fade<=0){this.group.remove(l.obj),this.list.splice(this.list.indexOf(l),1);continue}let g=d?-6:4.5;!d&&r&&f<16&&(g=-2);const _=l.x+h/f*g*t,p=l.z+u/f*g*t;o(_,p)&&g>0||(l.x=_,l.z=p),l.obj.position.set(l.x+Math.sin(l.t*2)*.4,this.g.heightAt(l.x,l.z)+.3+Math.sin(l.t*3)*.3,l.z),l.obj.rotation.y=-Math.atan2(u,h);for(const m of l.obj.children){const x=m.userData.k;x!==void 0?(m.position.x=Math.sin(l.t*1.3+x)*.7,m.position.z=Math.cos(l.t*1.1+x*1.7)*.7,m.material.rotation=l.t*.4+x,m.material.opacity=(.75-x*.04)*l.fade):m.userData.eye&&(m.material.opacity=l.fade*(.75+Math.sin(l.t*9)*.25))}l.obj.scale.setScalar(.4+l.fade*.8),!d&&f<3.5&&(a+=12*t)}if(this.spiritT>0){this.spiritT-=t;const l=Math.min(1,this.spiritT,4-this.spiritT);this.spirit.visible=!0,this.spirit.position.set(e-6,this.g.heightAt(e,n)+l*2,n-4),this.spirit.scale.setScalar(.6+l*.9),this.spirit.children[3].intensity=3e3*l;for(const h of this.list)Math.hypot(h.x-e,h.z-n)<120&&(h.banish=1)}else this.spirit.visible=!1;return a}banishNear(t,e){const n=this.list.find(i=>i.banish<=0&&Math.hypot(i.x-t,i.z-e)<22);return n&&(n.banish=1),!!n}call(){this.spiritT=4}}const Cs=[[0,725538],[300,725538],[360,15120538],[450,14212312],[1e3,14474452],[1080,15389360],[1130,13142648],[1180,2762824],[1440,725538]];function Pv(s){for(let t=1;t<Cs.length;t++)if(s<=Cs[t][0]){const[e,n]=Cs[t-1],[i,r]=Cs[t];return new wt(n).lerp(new wt(r),(s-e)/(i-e))}return new wt(Cs[0][1])}class Lv{constructor(t,e){this.min=17*60,this.rate=1,this.lamps=new Zt,this.spots=[],this.pool=[],this.lamps.name="street lights";const n=[],i=[];for(let c=0;c<t.edges.length;c++){const l=t.edges[c],h=l.width>=12;for(let u=10;u<l.len;u+=30){const f=t.at(c,u),d=l.width/2+1.5,g=f.x+f.dz*d,_=f.z-f.dx*d,p=l.deck??e.heightAt(g,_),m=Math.atan2(-f.dx,-f.dz),x=new zt().compose(new I(g,p,_),new Ze().setFromAxisAngle(new I(0,1,0),m),new I(1,1,1));h?(n.push(x),this.spots.push(new I(g,p+9,_))):(i.push(x),this.spots.push(new I(g-f.dz*2.4,p+8.4,_+f.dx*2.4)))}}const r=Ce([new Qt(.45,.6,1.2,6).translate(0,.6,0),new Qt(.14,.22,7,5).translate(0,4.6,0),new Qt(.3,.3,.3,5).translate(0,8.2,0),new vi(.75,.6,6).translate(0,9.8,0)]),o=Ce([new Qt(.16,.26,9,6).translate(0,4.5,0),new Qt(.07,.07,2.8,5).rotateZ(Math.PI/2-.25).translate(1.3,9.2,0),new Ht(.5,.18,1.5).translate(2.5,9.45,0)]),a=(c,l,h)=>{const u=new ti(c,new fe({color:l}),h.length);h.forEach((f,d)=>u.setMatrixAt(d,f)),u.castShadow=!0,this.lamps.add(u)};a(r,1908257,n),a(o,10132118,i),this.heads=new ti(new Me(.62,8,5).translate(0,9,0),new Oe({color:14210768}),n.length),n.forEach((c,l)=>this.heads.setMatrixAt(l,c)),this.tubes=new ti(new Qt(.1,.1,1.3,6).rotateX(Math.PI/2).translate(2.5,9.3,0),new Oe({color:14211288}),i.length),i.forEach((c,l)=>this.tubes.setMatrixAt(l,c)),this.lamps.add(this.heads,this.tubes);for(let c=0;c<6;c++){const l=new to(15791359,0,30,1.4);this.pool.push(l),this.lamps.add(l)}}get night(){return this.min<6*60||this.min>18*60+40}get dark(){const t=this.min;return t<300?1:t<420?1-(t-300)/120:t<1050?0:t<1170?(t-1050)/120:1}get label(){const t=Math.floor(this.min/60),e=Math.floor(this.min%60);return`${(t+11)%12+1}:${String(e).padStart(2,"0")} ${t<12?"am":"pm"}`}update(t,e,n,i,r,o){this.min=(this.min+t*this.rate)%1440;const a=this.dark;e.background=Pv(this.min),n.intensity=1.25-1*a,n.color.set(15855332).lerp(new wt(5925536),a),n.groundColor.set(9073750).lerp(new wt(1710632),a);const c=Math.max(0,Math.min(1,(this.min-960)/150));i.intensity=(1.7+c*.5)*(1-a)+.12*a,i.color.set(16773336).lerp(new wt(16758896),c).lerp(new wt(9414360),a),e.fog&&e.fog.color.copy(e.background);const l=a>.55;if(this.heads.material.color.set(l?16773836:14210768),this.tubes.material.color.set(l?15924223:14211288),l){const h=this.spots.map(u=>({p:u,d:Math.hypot(u.x-r,u.z-o)})).filter(u=>u.d<120).sort((u,f)=>u.d-f.d);this.pool.forEach((u,f)=>{const d=h[f];d?(u.position.set(d.p.x,d.p.y-.4,d.p.z),u.intensity=90):u.intensity=0})}else this.pool.forEach(h=>h.intensity=0)}litAt(t,e){if(this.dark<=.55)return!0;for(const n of this.pool)if(n.intensity>0&&Math.hypot(n.position.x-t,n.position.z-e)<14)return!0;return!1}}class Iv{constructor(t,e,n,i,r){this.g=n,this.group=new Zt,this.list=[],this.i=0,this.marks=[],this.t=0,this.group.name="quests";let o=77;const a=()=>(o=o*16807%2147483647)/2147483647,c=(u,f)=>{const d=t.places.find(([g])=>u.test(g))??t.places.slice().sort((g,_)=>Math.abs(Math.hypot(g[1]*st-i,g[2]*st-r)-f)-Math.abs(Math.hypot(_[1]*st-i,_[2]*st-r)-f))[0];return{x:d[1]*st,z:d[2]*st,name:d[0],done:!1}},l=[],h=e.edges.map((u,f)=>f).filter(u=>{const f=e.at(u,0);return Math.hypot(f.x-i,f.z-r)<160&&e.edges[u].deck===null});for(let u=0;u<6&&h.length;u++){const f=h[Math.floor(a()*h.length)],d=e.at(f,a()*e.edges[f].len);l.push({x:d.x,z:d.z,name:"litter",done:!1})}this.list=[{title:"Clean the street",intro:"Aay deva, see all this garbage near the church! Pick it up, baba. Panjim must stay clean, no?",outro:"Dev borem korum! The street is clean. Now go get the poee, Aunty is waiting.",spots:l,pts:10,litter:!0},{title:"Bring the poee",intro:"Go to the Panjim Bazaar and bring fresh poee for Aunty. Run, before it is all sold!",outro:"Hot poee! Aunty is happy. Now these letters, deliver them, men.",spots:[c(/bazaar|market/i,500)],pts:40},{title:"Deliver the letters",intro:"Three letters to deliver. Ask people the way if you are lost.",outro:"All delivered! You know Panjim like a postman now.",spots:[c(/church square/i,400),c(/campal/i,700),c(/patto/i,900)],pts:30},{title:"Find the lost hen",intro:"Mrs. Fernandes' hen ran off towards Fontainhas. Find it before dark!",outro:"There she is! Mrs. Fernandes will make you sorpotel for this. Well done, baba.",spots:[c(/fontainhas/i,800)],pts:60}],this.show()}get cur(){return this.list[this.i]??null}get target(){return this.cur?.spots.find(t=>!t.done)??null}get objective(){const t=this.cur;if(!t)return"All tasks done. Explore Panjim, and keep the demons away at night.";const e=t.spots.filter(n=>!n.done).length;return t.litter?`${t.title}: ${t.spots.length-e}/${t.spots.length} picked up`:`${t.title}: go to ${this.target?.name??""}${t.spots.length>1?` (${t.spots.length-e}/${t.spots.length})`:""}`}show(){for(const e of this.marks)this.group.remove(e);this.marks=[];const t=this.cur;if(t)for(const e of t.spots){const n=new Zt;if(t.litter){const i=new Yt(new Me(.9,8,6).scale(1,.8,1),new fe({color:2829099}));i.position.y=.7,n.add(i);const r=new Yt(new Ht(.8,.1,.6),new fe({color:16117984}));r.position.set(1.1,.25,.4),n.add(r)}else{const i=new Yt(new Qt(2.2,2.2,60,16,1,!0),new Oe({color:15905857,transparent:!0,opacity:.25,depthWrite:!1,side:Ve}));i.position.y=30,n.add(i)}n.position.set(e.x,this.g.heightAt(e.x,e.z)+.2,e.z),n.userData.spot=e,this.marks.push(n),this.group.add(n)}}update(t,e,n){this.t+=t;for(const r of this.marks)this.cur?.litter||(r.children[0].rotation.y=this.t);const i=this.cur;if(!i)return null;for(const r of i.spots){if(r.done||Math.hypot(r.x-e,r.z-n)>(i.litter?4:14))continue;r.done=!0;const o=this.marks.find(a=>a.userData.spot===r);return o&&(o.visible=!1),i.spots.every(a=>a.done)?(this.i++,this.show(),{pts:i.pts+20,msg:i.outro+(this.cur?`

${this.cur.intro}`:"")}):{pts:i.pts,msg:i.litter?"Into the bin it goes. Shabaas!":`Reached ${r.name}.`}}return null}}const Dv={G:"#5c7a40",F:"#3d6b38",M:"#2a4a30",W:"#2b6a8a",R:"#8a8478",L:"#9a9284",P:"#8aa050",S:"#d8c690",B:"#d8c690"};class Nv{constructor(t){this.d=t,this.big=!1,this.dirty=!0;const e=4;this.base=document.createElement("canvas"),this.base.width=t.W*e,this.base.height=t.H*e;const n=this.base.getContext("2d");for(let i=0;i<t.H;i++)for(let r=0;r<t.W;r++)n.fillStyle=Dv[t.rows[i][r]]??"#5c7a40",n.fillRect(r*e,i*e,e,e);n.fillStyle="#2b6a8a";for(const i of t.water)n.beginPath(),$e(i).forEach(([r,o],a)=>a?n.lineTo(r*e,o*e):n.moveTo(r*e,o*e)),n.fill();n.fillStyle="#c9b89a";for(const[i]of t.b)n.beginPath(),$e(i).forEach(([r,o],a)=>a?n.lineTo(r*e,o*e):n.moveTo(r*e,o*e)),n.fill();n.strokeStyle="#ece4cf",n.lineCap="round";for(const[i,r]of t.r)n.lineWidth=Math.max(1,r*1.5/st*e),n.beginPath(),$e(i).forEach(([o,a],c)=>c?n.lineTo(o*e,a*e):n.moveTo(o*e,a*e)),n.stroke();this.fog=new Uint8Array(t.W*t.H),this.fogCan=document.createElement("canvas"),this.fogCan.width=t.W,this.fogCan.height=t.H,this.fogImg=this.fogCan.getContext("2d").createImageData(t.W,t.H),this.cv=document.getElementById("map"),this.cv.addEventListener("click",()=>{this.big=!this.big,this.cv.classList.toggle("big",this.big)})}reveal(t,e,n){const i=Math.floor(t/st),r=Math.floor(e/st);for(let o=r-n;o<=r+n;o++)for(let a=i-n;a<=i+n;a++){if(a<0||o<0||a>=this.d.W||o>=this.d.H||(a-i)**2+(o-r)**2>n*n)continue;const c=o*this.d.W+a;this.fog[c]||(this.fog[c]=1,this.dirty=!0)}}draw(t,e,n,i,r){if(this.dirty){const m=this.fogImg.data;for(let x=0;x<this.fog.length;x++)m[x*4]=8,m[x*4+1]=12,m[x*4+2]=24,m[x*4+3]=this.fog[x]?0:235;this.fogCan.getContext("2d").putImageData(this.fogImg,0,0),this.dirty=!1}const o=this.cv,a=o.clientWidth,c=o.clientHeight;(o.width!==a||o.height!==c)&&(o.width=a,o.height=c);const l=o.getContext("2d"),h=this.big?Math.max(this.d.W,this.d.H*a/c):30,u=a/h,f=this.big?(a-this.d.W*u)/2:a/2-t/st*u,d=this.big?(c-this.d.H*u)/2:c/2-e/st*u;if(l.fillStyle="#0a1020",l.fillRect(0,0,a,c),l.imageSmoothingEnabled=!this.big,l.drawImage(this.base,f,d,this.d.W*u,this.d.H*u),r&&(l.fillStyle="rgba(10,16,40,.45)",l.fillRect(0,0,a,c)),l.imageSmoothingEnabled=!0,l.drawImage(this.fogCan,f,d,this.d.W*u,this.d.H*u),this.big){l.font="600 11px Mukta, sans-serif",l.fillStyle="#ece4cf",l.textAlign="center";for(const[m,x,v]of this.d.places)this.fog[Math.floor(v)*this.d.W+Math.floor(x)]&&l.fillText(m,f+x*u,d+v*u)}for(const m of i){const x=f+m.x/st*u,v=d+m.z/st*u;l.fillStyle="#f2b441",l.beginPath(),l.arc(x,v,4,0,Math.PI*2),l.fill(),l.strokeStyle="#0a1020",l.lineWidth=1.5,l.stroke()}const g=f+t/st*u,_=d+e/st*u,p=Math.atan2(-Math.sin(n),-Math.cos(n));l.fillStyle="rgba(242,180,65,.3)",l.beginPath(),l.moveTo(g,_),l.arc(g,_,22,p-.5,p+.5),l.fill(),l.fillStyle="#f2c230",l.beginPath(),l.arc(g,_,4,0,Math.PI*2),l.fill(),l.strokeStyle="#0a1020",l.stroke()}}let Ie=null;function Xo(){if(Ie)Ie.state==="suspended"&&Ie.resume();else try{Ie=new AudioContext}catch{}}function Cn(s,t,e,n,i=0,r=0){if(!Ie)return;const o=Ie.currentTime+r,a=Ie.createOscillator(),c=Ie.createGain();a.type=e,a.frequency.setValueAtTime(s,o),i&&a.frequency.exponentialRampToValueAtTime(Math.max(20,s+i),o+t),c.gain.setValueAtTime(n,o),c.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(c).connect(Ie.destination),a.start(o),a.stop(o+t+.02)}function Uv(s,t){if(!Ie)return;const e=Ie.sampleRate*s,n=Ie.createBuffer(1,e,Ie.sampleRate),i=n.getChannelData(0);for(let a=0;a<e;a++)i[a]=(Math.random()*2-1)*(1-a/e);const r=Ie.createBufferSource(),o=Ie.createGain();r.buffer=n,o.gain.value=t,r.connect(o).connect(Ie.destination),r.start()}const Yn={honk:()=>{Cn(420,.22,"square",.04),Cn(530,.22,"square",.03)},crash:()=>{Uv(.5,.25),Cn(120,.4,"sawtooth",.08,-80)},pick:()=>{Cn(880,.12,"sine",.08),Cn(1320,.18,"sine",.06,0,.08)},done:()=>{[523,659,784,1046].forEach((s,t)=>Cn(s,.3,"triangle",.07,0,t*.1))},banish:()=>{Cn(300,.5,"sine",.1,900)},spirit:()=>{[220,277,330,440].forEach(s=>Cn(s,2.2,"sine",.05))},hurt:()=>{Cn(160,.25,"sawtooth",.05,-60)}},Ns=s=>new fe({color:s});function xe(s,t,e,n,i,r,o){const a=new Yt(new Ht(t,e,n),typeof i=="number"?Ns(i):i);return a.position.set(r,o,0),a.castShadow=!0,s.add(a),a}function Mh(s){const t=new Zt,e=[];if(s==="canoe"){const n=new Yt(new Qt(.9,.5,9,8,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateX(Math.PI),Ns(7027234));n.scale.set(1,1,1.1),n.position.y=.6,t.add(n),xe(t,7,.15,.15,5913120,0,.9).position.z=2.2;for(const i of[-1.5,1.5]){const r=xe(t,.12,.12,2.4,5913120,i,1);r.position.z=1.1}xe(t,.6,1.4,.6,16645109,.5,1.6),xe(t,.5,.4,.5,2759184,.5,2.5)}else if(s==="ferry"){xe(t,22,2,7,3104666,0,1),xe(t,22.2,.5,7.2,15921126,0,2.2);for(const n of[-9,-3,3,9])for(const i of[-3,3]){const r=xe(t,.25,3,.25,15921126,n,3.8);r.position.z=i}xe(t,20,.4,7.4,15909424,0,5.4),xe(t,3,2.4,3,15921126,6,6.8)}else if(s==="cruise"){xe(t,34,2.4,9,15921126,0,1.2),xe(t,34.2,.5,9.2,12857387,0,2.5),xe(t,28,3,8,15921126,-1,4.2),xe(t,28.2,.4,8.2,12857387,-1,5.9),xe(t,18,2.6,6.5,15921126,-3,7.4);for(const i of[-4,0]){const r=new Yt(new Qt(.7,.8,5,10),Ns(12857387));r.position.set(i,10.5,0),t.add(r)}const n=new Yt(new Qt(2.6,2.6,7,12),Ns(12857387));n.rotation.x=Math.PI/2,n.position.set(-17.5,2.2,0),t.add(n);for(let i=0;i<2;i++){const r=new fe({color:2238522,emissive:16762976,emissiveIntensity:0});e.push(xe(t,28.4-i*10,1,8.3-i*1.6,r,-1-i*2,4.4+i*3.2))}}else if(s==="barge"){xe(t,46,2.6,11,8008742,0,.9),xe(t,46.2,.4,11.2,2763310,0,2.3);const n=new Yt(new vi(5,4,8).scale(3.6,1,.9),Ns(4860452));n.position.set(2,3.6,0),t.add(n),xe(t,5,4,7,15262420,-19,4),xe(t,5.2,.4,7.2,1714794,-19,6.1)}else{xe(t,70,4,16,15921126,0,2),xe(t,70.4,.8,16.4,1714794,0,4.2);for(let n=0;n<3;n++){const i=62-n*10,r=6+n*3.6;xe(t,i,3.2,14-n*2,15262420,-n*2,r);const o=new fe({color:2238522,emissive:16722570,emissiveIntensity:0}),a=xe(t,i+.2,1.2,14.2-n*2,o,-n*2,r+.2);e.push(a)}}return{obj:t,lights:e}}class Fv{constructor(t,e=[]){this.g=t,this.group=new Zt,this.list=[],this.seed=2024,this.rnd=()=>(this.seed=this.seed*16807%2147483647)/2147483647,this.group.name="boats";const n=(r,o,a)=>{for(let c=0;c<6.28;c+=.8)if(!t.isWet(r+Math.cos(c)*a,o+Math.sin(c)*a))return!1;return t.isWet(r,o)};for(const[,r,o,a,c]of e){const{obj:l,lights:h}=Mh("casino");l.scale.setScalar(Math.max(.6,Math.min(1.4,c/70))),this.group.add(l),this.list.push({kind:"casino",obj:l,x:r*20,z:o*20,h:a,v:0,turn:0,t:this.rnd()*9,lights:h}),l.rotation.y=-a}const i=[["canoe",14,12],["ferry",3,30],["cruise",3,40],["barge",6,45],["casino",e.length?0:5,60]];for(const[r,o,a]of i)for(let c=0,l=0;c<o&&l<2e4;l++){const h=this.rnd()*t.W*20,u=this.rnd()*t.H*20;if(r==="casino"&&(h/20<70||h/20>135||u/20>22)||!n(h,u,a))continue;const{obj:f,lights:d}=Mh(r);this.group.add(f),this.list.push({kind:r,obj:f,x:h,z:u,h:this.rnd()*6.28,v:r==="canoe"?2.5:r==="ferry"?4:r==="cruise"?3:r==="barge"?2:0,turn:0,t:this.rnd()*9,lights:d}),c++}}update(t,e){for(const n of this.list){if(n.t+=t,n.v===0){n.obj.position.set(n.x,za+Math.sin(n.t*.8)*.1-.4,n.z),n.lights?.forEach((l,h)=>{const u=l.material;u.emissive.setHSL((n.t*.05+h*.33)%1,.9,.5),u.emissiveIntensity=e*1.4});continue}const i=n.kind==="ferry"?30:n.kind==="canoe"?14:45,r=n.x+Math.cos(n.h)*i,o=n.z+Math.sin(n.h)*i;this.g.isWet(r,o)?this.rnd()<t*.05?n.turn=(this.rnd()-.5)*.3:n.turn*=1-t:n.turn=.6,n.h+=n.turn*t;const a=n.x+Math.cos(n.h)*n.v*t,c=n.z+Math.sin(n.h)*n.v*t;this.g.isWet(a,c)&&(n.x=a,n.z=c),n.obj.position.set(n.x,za+Math.sin(n.t*1.4)*.15-.4,n.z),n.obj.rotation.set(Math.sin(n.t*1.1)*.02,-n.h,Math.sin(n.t*.9)*.025),n.lights&&n.lights.forEach((l,h)=>{const u=l.material;n.kind==="casino"&&u.emissive.setHSL((n.t*.05+h*.33)%1,.9,.5),u.emissiveIntensity=e*1.4})}}}class Ov{constructor(t,e,n){this.group=new Zt,this.spots=[],this.cool=0,this.group.name="pumps";const i=(o,a=0)=>new fe({color:o,emissive:a?o:0,emissiveIntensity:a}),r=t.edges.map((o,a)=>({E:o,i:a})).filter(o=>o.E.width>=12&&o.E.deck===null&&o.E.len>60).sort((o,a)=>o.i*7919%97-a.i*7919%97);for(const{E:o,i:a}of r){if(this.spots.length>=6)break;const c=t.at(a,o.len/2),l=o.width/2+9,h=c.x+c.dz*l,u=c.z-c.dx*l;if(!n(h,u)||this.spots.some(_=>Math.hypot(_.x-h,_.z-u)<500))continue;this.spots.push({x:h,z:u});const f=new Zt,d=e.heightAt(h,u),g=(_,p,m,x,v)=>{const y=new Yt(_,p);y.position.set(m,x,v),y.castShadow=!0,f.add(y)};g(new Ht(16,.3,10),i(9079430),0,.15,0);for(const[_,p]of[[-6,-3.5],[6,-3.5],[-6,3.5],[6,3.5]])g(new Ht(.5,6,.5),i(15921126),_,3,p);g(new Ht(15,1.2,9),i(13644844,.15),0,6.4,0),g(new Ht(15.2,.35,9.2),i(15921126,.3),0,5.7,0);for(const _ of[-3,3])g(new Ht(1.2,2.2,.8),i(15921126),_,1.4,0),g(new Ht(1.25,.5,.85),i(13644844),_,2.3,0);g(new Ht(.4,9,.4),i(7171955),9,4.5,4.5),g(new Ht(.4,2.4,2.4),i(15909424,.4),9,9.5,4.5),f.position.set(h,d,u),f.rotation.y=-Math.atan2(c.dz,c.dx),this.group.add(f)}}update(t,e,n,i){return this.cool-=t,i>90||this.cool>0||!this.spots.some(r=>Math.hypot(r.x-e,r.z-n)<10)?null:(this.cool=6,'Pump uncle: "Full tank for the lamp, baba? Here, kerosene I keep for you only. Go carefully, no?"')}}const yh=[13644844,2777e3,15921126,1908002,4164186,15249978];function Bv(s,t){const e=new Zt,n=o=>new fe({color:o}),i=(o,a,c,l,h=0)=>{const u=new Yt(o,n(a));return u.position.set(c,l,h),u.castShadow=!0,e.add(u),u},r=(o,a)=>i(new mc(a,s==="cycle"?.05:.12,6,14),1381653,o,a);return s==="scooter"?(r(.65,.3),r(-.6,.3),i(new Ht(1,.25,.45),t,-.1,.45),i(new Ht(.75,.45,.5),t,-.45,.75),i(new Ht(.6,.12,.38),1908002,-.45,1.03),i(new Ht(.25,.85,.42),t,.6,.85),i(new Qt(.03,.03,.75,5).rotateX(Math.PI/2),3355443,.62,1.3),i(new Me(.1,6,4),16774344,.75,1.15)):(r(.55,.35),r(-.55,.35),i(new Qt(.03,.03,1.1,5).rotateZ(Math.PI/2),t,0,.6),i(new Qt(.03,.03,.75,5).rotateZ(.5),t,-.2,.55),i(new Qt(.03,.03,.7,5).rotateZ(-.35),t,.45,.65),i(new Ht(.28,.06,.15),1908002,-.35,.95),i(new Qt(.025,.025,.6,5).rotateX(Math.PI/2),3355443,.55,1)),e.scale.setScalar(2.2),e}class zv{constructor(t,e,n){this.g=e,this.group=new Zt,this.list=[],this.riding=null,this.group.name="bikes";let i=515;const r=()=>(i=i*16807%2147483647)/2147483647;for(let o=0,a=0;o<90&&a<3e3;a++){const c=Math.floor(r()*t.edges.length),l=t.edges[c];if(l.deck!==null||l.len<20)continue;const h=t.at(c,r()*l.len),u=r()<.5?1:-1,f=(l.width/2+2.6)*u,d=h.x+h.dz*f,g=h.z-h.dx*f;if(!n(d,g)||this.list.some(m=>Math.hypot(m.x-d,m.z-g)<25))continue;const _=r()<.65?"scooter":"cycle",p=Bv(_,yh[Math.floor(r()*yh.length)]);p.position.set(d,e.heightAt(d,g)+.15,g),p.rotation.y=-Math.atan2(h.dz,h.dx)+Math.PI/2+(r()-.5)*.4,this.group.add(p),this.list.push({obj:p,kind:_,x:d,z:g}),o++}}near(t,e){return this.list.find(n=>n!==this.riding&&Math.hypot(n.x-t,n.z-e)<7)??null}get boost(){return this.riding?this.riding.kind==="scooter"?2.2:1.6:1}mount(t){this.riding=t}park(t,e){const n=this.riding;n&&(n.x=t,n.z=e,n.obj.position.y=this.g.heightAt(t,e)+.15,this.riding=null)}follow(t,e,n,i,r){const o=this.riding;o&&(o.x=t,o.z=n,o.obj.position.set(t,e+Math.sin(r*20)*.03,n),o.obj.rotation.y=-i)}}let jn=null;function kv(){if(jn)return jn;const s=new Uint8Array([90,90,90,255,175,175,175,255,255,255,255,255]);return jn=new oc(s,3,1,je),jn.minFilter=jn.magFilter=De,jn.generateMipmaps=!1,jn.needsUpdate=!0,jn}function Hv(s){const t=new U_({color:s.color,map:s.map,vertexColors:s.vertexColors,emissive:s.emissive,emissiveIntensity:s.emissiveIntensity,transparent:s.transparent,opacity:s.opacity,side:s.side,gradientMap:kv(),polygonOffset:s.polygonOffset,polygonOffsetFactor:s.polygonOffsetFactor,polygonOffsetUnits:s.polygonOffsetUnits});return s.onBeforeCompile&&(t.onBeforeCompile=s.onBeforeCompile),t}const Sh=new Map;function bh(s){const t=Math.round(s*1e3);let e=Sh.get(t);return e||(e=new Oe({color:1708556,side:Be}),e.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`vec3 transformed = position + normalize(normal) * ${s.toFixed(4)};`)},e.customProgramCacheKey=()=>"ink"+t,Sh.set(t,e)),e}function Eh(s,t,e){const n=new Map;s.traverse(i=>{const r=i;if(!r.isMesh||!r.material)return;const o=a=>{if(!(a instanceof fe))return a;let c=n.get(a);return c||(c=Hv(a),n.set(a,c)),c};r.material=Array.isArray(r.material)?r.material.map(o):o(r.material)});for(const i of t)Vv(i,e)}function Vv(s,t=()=>!1,e=.12){const n=[];s.traverse(i=>{const r=i;r.isMesh&&!r.userData.ink&&!r.userData.hasInk&&!t(r)&&!r.isSprite&&n.push(r)});for(const i of n){if(i.material.transparent)continue;const r=new I;i.updateWorldMatrix(!0,!1),i.matrixWorld.decompose(new I,new Ze,r);const o=e/Math.max(.01,(r.x+r.y+r.z)/3),a=i.isInstancedMesh?new ti(i.geometry,bh(o),i.count):new Yt(i.geometry,bh(o));a.isInstancedMesh&&(a.instanceMatrix=i.instanceMatrix),a.userData.ink=!0,a.raycast=()=>{},i.userData.hasInk=!0,i.add(a)}}const dn=2;function Gv(s,t,e){const n=Math.ceil(s.W*st/dn),i=Math.ceil(s.H*st/dn),r=new Uint8Array(n*i),o=(f,d,g,_)=>{for(let p=Math.max(0,Math.floor(d/dn));p<=Math.min(i-1,Math.floor(_/dn));p++)for(let m=Math.max(0,Math.floor(f/dn));m<=Math.min(n-1,Math.floor(g/dn));m++)r[p*n+m]=1};for(const[f]of s.b){const d=$e(f).map(([x,v])=>[x*st,v*st]);let g=1e9,_=1e9,p=-1e9,m=-1e9;for(const[x,v]of d)g=Math.min(g,x),_=Math.min(_,v),p=Math.max(p,x),m=Math.max(m,v);for(let x=_-2;x<=m+2;x+=dn)for(let v=g-2;v<=p+2;v+=dn)($n(d,v,x)||$n(d,v+2,x)||$n(d,v-2,x)||$n(d,v,x+2)||$n(d,v,x-2))&&o(v,x,v,x)}const a=new Uint16Array(s.W*s.H);for(const[f]of s.b){const d=$e(f),g=Math.floor(d[0][0]),_=Math.floor(d[0][1]);for(let p=_-3;p<=_+3;p++)for(let m=g-3;m<=g+3;m++)m>=0&&p>=0&&m<s.W&&p<s.H&&a[p*s.W+m]++}const c=(f,d)=>{const g=Math.floor(f/dn),_=Math.floor(d/dn);if(g<0||_<0||g>=n||_>=i||r[_*n+g])return!1;const p=Math.floor(f/st),m=Math.floor(d/st),x=s.rows[m]?.[p];return!x||x==="W"||x==="F"||x==="M"||t.isWet(f,d)||e.at(f,d)?!1:a[m*s.W+p]>=4},l=[];let h=31;const u=()=>(h=h*16807%2147483647)/2147483647;for(const[f,d,g]of s.r){if(g&1||d<5)continue;const _=$e(f).map(([p,m])=>[p*st,m*st]);for(let p=1;p<_.length;p++){const[m,x]=_[p-1],[v,y]=_[p],P=Math.hypot(v-m,y-x);if(P<12)continue;const A=(v-m)/P,T=(y-x)/P,L=-T,b=A;for(const S of[d*.75+3.5])for(const C of[-1,1])for(let F=4;F+6<P;){const U=7+Math.floor(u()*5),H=10+Math.floor(u()*7),q=(k,$)=>[m+A*k+L*C*$,x+T*k+b*C*$],z=[q(F,S),q(F+U,S),q(F+U,S+H),q(F,S+H)];let Y=!0;for(let k=0;k<=U&&Y;k+=2)for(let $=0;$<=H&&Y;$+=2){const[ct,pt]=q(F+k,S+$);c(ct,pt)||(Y=!1)}if(Y){for(let $=0;$<=U;$+=1)for(let ct=0;ct<=H;ct+=1){const[pt,at]=q(F+$,S+ct);o(pt,at,pt,at)}const k=u()<.55?2:u()<.7?1:3;l.push([z.flatMap(([$,ct])=>[$/st,ct/st]),k,0,k>1?Math.max(160,U*H):Math.min(140,U*H)])}F+=U+(Y?.4:3)}}}return l}const Th={Mandovi:"The big river, men. Casino boats at night, ferries to Betim in the day.",Panaji:"Our capital city. Small only, but everybody knows everybody.","Church Square":"The garden in front of the big white church. Everybody meets here.",Fontainhas:"The old Latin quarter. Red, yellow, blue houses, and Portuguese still spoken here.","São Tomé":"Next to Fontainhas, the old post office side. Narrow lanes, careful on the cycle.",Mala:"Up from the creek, by the Maruti temple steps.",Altinho:"The hill. Big old houses, the Bishop's palace, and a nice breeze, baba.",Campal:"Along the river, the gardens and the Kala Academy. Evening walks here.","Santa Inez":"Quiet side, the creek and the new buildings.",Patto:"Where the Kadamba buses come in. Rush rush always.","Panjim Bazaar":"The market! Fish, poee, vegetables. Go early or everything is finished.","Neugi Nagar":"Houses and houses, near the highway side.","Ourém creek":"The creek between Fontainhas and Patto. Mangroves, and crabs if you look.","Atal Setu":"The new cable bridge over the Mandovi. All lit up at night.","Ponte de Linhares":"The old long causeway, built by the Portuguese. Two hundred years old, men.",church:"Our Lady of the Immaculate Conception. Those zig-zag steps, every photo is here only.",secretariat:"The Old Secretariat, Adil Shah's palace once. Right on the riverfront.",mahalaxmi:"The Mahalaxmi temple. Go with your shoes off, no?",atalsetu:"Atal Setu pylons, tall and white.",imb:"Institute Menezes Braganza, the library and the azulejo tiles at the entrance.",postoffice:"The Head Post Office. Old red building, letters going since Portuguese time.",maruti:"The Maruti temple on Altinho, the saffron tower you can see from far.",sebastian:"St. Sebastian chapel in Fontainhas. The big crucifix inside has open eyes.",donbosco:"Don Bosco. The school and the shrine, boys playing football outside.",kadamba:"The Kadamba bus stand. Mapusa, Margao, Vasco, shouting conductors."},Wv={church:"Immaculate Conception Church",secretariat:"Old Secretariat",mahalaxmi:"Mahalaxmi Temple",atalsetu:"Atal Setu",imb:"Institute Menezes Braganza",postoffice:"Head Post Office",maruti:"Maruti Temple",sebastian:"St. Sebastian Chapel",donbosco:"Don Bosco",kadamba:"Kadamba Bus Stand"};class Xv{constructor(t,e,n,i){this.g=e,this.onPick=i,this.target=null,this.panel=document.getElementById("places"),this.arrow=document.getElementById("arrow"),this.list=[...t.lm.map(r=>({name:Wv[r.name]??r.name,x:r.at[0][0]*st,z:r.at[0][1]*st,note:Th[r.name]??"",seen:!1})),...t.places.map(([r,o,a])=>({name:r,x:o*st,z:a*st,note:Th[r]??"",seen:!1}))],this.beam=new Yt(new Qt(3,3,120,16,1,!0),new Oe({color:10479830,transparent:!0,opacity:.3,depthWrite:!1,side:Ve})),this.beam.visible=!1,n.add(this.beam),document.getElementById("bPlaces").addEventListener("click",r=>{r.currentTarget.blur(),this.toggle()})}toggle(){if(!this.panel.classList.toggle("open"))return;const e=(n,i)=>`<button data-i="${i}" class="${n===this.target?"on":""}"><b>${n.seen?n.name:n.name+" <em>· not yet visited</em>"}</b><span>${n.note}</span></button>`;this.panel.innerHTML=`<div class="ph"><h2>Places in Panjim</h2><span>${this.list.filter(n=>n.seen).length} of ${this.list.length} visited · pick one to be guided there</span><button class="x" aria-label="Close">✕</button></div><div class="pl">${this.list.map(e).join("")}</div>`,this.panel.querySelector(".x").addEventListener("click",()=>this.panel.classList.remove("open")),this.panel.querySelectorAll(".pl button").forEach(n=>n.addEventListener("click",()=>{const i=this.list[+n.dataset.i];this.target=this.target===i?null:i,this.panel.classList.remove("open"),this.target&&this.onPick(this.target)}))}update(t,e,n,i){let r=null;for(const x of this.list)!x.seen&&Math.hypot(x.x-t,x.z-e)<60&&(x.seen=!0,r=x);const o=this.target;if(o&&Math.hypot(o.x-t,o.z-e)<30&&(this.target=null,r=r??o),this.beam.visible=!!this.target,!this.target)return this.arrow.style.display="none",r;const a=this.target;this.beam.position.set(a.x,this.g.heightAt(a.x,a.z)+60,a.z),this.beam.material.opacity=.22+Math.sin(i*3)*.08;const c=new I(a.x,this.g.heightAt(a.x,a.z)+4,a.z).project(n);let l=c.x,h=-c.y;c.z>1&&(l=-l,h=-h);const u=Math.abs(l)<.9&&Math.abs(h)<.85&&c.z<1,f=u?1:.85/Math.max(Math.abs(l),Math.abs(h)/.8),d=innerWidth,g=innerHeight,_=(l*f*.5+.5)*d,p=(h*f*.5+.5)*g,m=Math.round(Math.hypot(a.x-t,a.z-e)/10)*10;return this.arrow.style.display="block",this.arrow.style.transform=`translate(${_}px, ${p}px) translate(-50%, -50%)`,this.arrow.innerHTML=`<i style="transform: rotate(${Math.atan2(h,l)}rad); opacity:${u?0:1}">➤</i><span>${a.name} · ${m} m</span>`,r}}const wh=[14210248,11545130,2772106,1908002,9211024,15262416,3894085,15921126,6957610];function Ps(s,t){const e=s.toNonIndexed(),n=new wt(t),i=new Float32Array(e.attributes.position.count*3);for(let r=0;r<i.length;r+=3)i[r]=n.r,i[r+1]=n.g,i[r+2]=n.b;return e.setAttribute("color",new oe(i,3)),e.deleteAttribute("uv"),e}function qv(s,t,e){const n=new Zt;n.name="street life";let i=77;const r=()=>(i=i*16807%2147483647)/2147483647,o=[],a=[],c=(h,u)=>t.heightAt(h,u);for(let h=0;h<s.edges.length;h++){const u=s.edges[h];if(u.deck===null&&u.width>=7)for(let f=14;f<u.len-14;f+=9+r()*30){if(r()<.45)continue;const d=s.at(h,f),g=r()<.5?1:-1,_=u.width*1.5/2-1.4,p=d.x+d.dz*_*g,m=d.z-d.dx*_*g,x=wh[Math.floor(r()*wh.length)],v=-Math.atan2(d.dz,d.dx),y=Math.max(.6,c(p,m))+.2,P=new Ht(4.4,1.1,1.9).translate(0,.75,0),A=new Ht(2.3,.75,1.75).translate(-.3,1.65,0),T=new Ht(2.35,.5,1.8).translate(-.3,1.65,0),L=[Ps(P,x),Ps(A,x),Ps(T,1778736)];for(const[S,C]of[[1.4,.95],[1.4,-.95],[-1.4,.95],[-1.4,-.95]])L.push(Ps(new Qt(.35,.35,.3,8).rotateX(Math.PI/2).translate(S,.35,C),1381653));const b=Ce(L);b.scale(1.5,1.5,1.5),b.rotateY(v),b.translate(p,y,m),o.push(b)}}for(const h of s.nodes)if(!(h.out.length<3))for(const u of h.out){const f=s.edge(u);if(f.deck!==null||f.len<20||f.width<7)continue;const d=s.at(u,9),g=f.width*1.5-1,_=-Math.atan2(d.dz,d.dx),p=Math.max(.6,c(d.x,d.z))+.26;for(let m=-g/2+.6;m<g/2;m+=1.4){const x=new Ht(2.6,.04,.7).translate(0,0,m);x.rotateY(_),x.translate(d.x,p,d.z),a.push(Ps(x,15921126))}}const l=(h,u=16777215,f={})=>new fe({vertexColors:h,color:u,...f});if(o.length){const h=new Yt(Ce(o),l(!0));h.castShadow=!0,h.receiveShadow=!0,n.add(h)}if(a.length){const h=new Yt(Ce(a),l(!0,16777215,{polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8}));h.receiveShadow=!0,n.add(h)}return n}function Yv(s,t,e){const n=new Zt;n.name="promenade";const i=[],r=[],o=[],a=[],c=[],l=[],h=[],u=new Ze,f=new I(0,1,0),d=new I(1,1,1),g=(C,F,U,H,q=d)=>new zt().compose(new I(C,F,U),u.setFromAxisAngle(f,H).clone(),q);let _=0;const p=new Map,m=(C,F)=>Math.floor(C/4)*1e5+Math.floor(F/4);let x=0;const v=(C,F)=>{for(let U=-1;U<=1;U++)for(let H=-1;H<=1;H++){const q=p.get(m(C+U*4,F+H*4));if(q!==void 0&&q!==x)return!1}return p.set(m(C,F),x),!0};let y=0;for(const[C,F,U]of s.r){if(y++,U&1)continue;const H=$e(C).map(([q,z])=>[q*st,z*st]);for(let q=1;q<H.length;q++){const[z,Y]=H[q-1],[k,$]=H[q],ct=Math.hypot(k-z,$-Y);if(ct<2)continue;const pt=(k-z)/ct,at=($-Y)/ct,xt=-at,W=pt,tt=F*.75+1.5,dt=(z+k)/2/st,it=(Y+$)/2/st;if(dt<55||dt>135||it>32)continue;const Lt=(Tt,bt)=>{const Ot=Math.floor(Tt/st),J=Math.floor(bt/st);return J<0||s.rows[J]?.[Ot]==="W"};for(const Tt of[-1,1]){x=y*2+(Tt>0?1:0);const bt=Math.max(2,Math.ceil(ct/3)+1),Ot=[];for(let R=0;R<bt;R++){const mt=Math.min(ct,R*3),Q=z+pt*mt,lt=Y+at*mt;let rt=null;for(let Rt=1;Rt<=32;Rt+=.5)if(t.landAt(Q+xt*Tt*(tt+Rt),lt+W*Tt*(tt+Rt))<.5&&Lt(Q+xt*Tt*(tt+Rt),lt+W*Tt*(tt+Rt))){rt=Rt;break}Ot.push(rt!==null&&rt>=4?rt:null)}if(Ot.filter(R=>R!==null).length<bt*.6)continue;const J=Ot.map((R,mt)=>{if(R===null)return null;let Q=0,lt=0;for(let rt=mt-1;rt<=mt+1;rt++){const Rt=Ot[rt];Rt!=null&&(Q+=Rt,lt++)}return Q/lt-1.2}),nt=(R,mt)=>{const Q=Math.min(ct,R*3);return[z+pt*Q+xt*Tt*(tt+mt),Y+at*Q+W*Tt*(tt+mt)]};for(let R=0;R<bt;R++){const mt=J[R];if(mt===null)continue;const[Q,lt]=nt(R,mt),[rt,Rt]=nt(R,0),gt=Math.max(.6,t.heightAt(rt,Rt))+.1,w=J[R+1];if(w!=null&&Math.abs(w-mt)<4){const[M,D]=nt(R+1,w),[G,Z]=nt(R+1,0),j=i.length/3;i.push(rt,gt,Rt,G,gt,Z,M,gt,D,Q,gt,lt),r.push(j,j+1,j+2,j,j+2,j+3);const Mt=-Math.atan2(D-lt,M-Q),ut=Math.hypot(M-Q,D-lt),_t=(Q+M)/2,kt=(lt+D)/2;if(e.solid((rt+Q)/2,(Rt+lt)/2,1)||!v(_t,kt))continue;c.push(g(_t,gt+1.05,kt,Mt,new I(ut/3,1,1)));for(const ot of[-1,0,1])a.push(g(_t+(M-Q)/ut*ot*.9,gt+.55,kt+(D-lt)/ut*ot*.9,Mt));R%3===0&&o.push(g(Q,gt+.6,lt,Mt)),R%9===4&&l.push(g(_t-xt*Tt*2.2,gt+.25,kt-W*Tt*2.2,Mt)),R%8===0&&_++<300&&h.push(g(Q-xt*Tt*1.2,gt,lt-W*Tt*1.2,Mt))}}}}}const P=new _e;P.setAttribute("position",new ne(i,3)),P.setIndex(r),P.computeVertexNormals();const A=new Yt(P,new fe({color:10902086,side:Ve,polygonOffset:!0,polygonOffsetFactor:0,polygonOffsetUnits:1}));A.receiveShadow=!0,n.add(A);const T=new fe({color:15921126}),L=new fe({color:12104354}),b=(C,F,U)=>{if(!U.length)return;const H=new ti(C,F,U.length);U.forEach((q,z)=>H.setMatrixAt(z,q)),H.castShadow=!0,H.receiveShadow=!0,n.add(H)};b(new Ht(3.1,.18,.7),T,c),b(Ce([new Qt(.12,.2,.9,6),new Me(.16,6,4).translate(0,.3,0)]),T,a),b(new Ht(.75,1.3,.75),T,o),b(Ce([new Ht(2.4,.25,.8).translate(0,.35,0),new Ht(.4,.45,.6).translate(-.9,0,0),new Ht(.4,.45,.6).translate(.9,0,0)]),L,l);const S=Ce([Ur(new Qt(.06,.08,9,5).translate(0,4.5,0),2763310),Ur(new Ht(.04,.5,2.2).translate(0,8.4,1.15),16750899),Ur(new Ht(.04,.5,2.2).translate(0,7.9,1.15),16777215),Ur(new Ht(.04,.5,2.2).translate(0,7.4,1.15),1280008)]);return b(S,new fe({vertexColors:!0}),h),n}function Ur(s,t){const e=s.toNonIndexed(),n=new wt(t),i=new Float32Array(e.attributes.position.count*3);for(let r=0;r<i.length;r+=3)i[r]=n.r,i[r+1]=n.g,i[r+2]=n.b;return e.setAttribute("color",new oe(i,3)),e.deleteAttribute("uv"),e}async function jv(){const[s]=await Promise.all([dx(),pv()]),t=new px(s),e=document.getElementById("app"),n=new j0({antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(2,Math.max(1.5,devicePixelRatio))),n.toneMapping=Nn,n.shadowMap.enabled=!0,n.shadowMap.type=Rh,e.appendChild(n.domElement);const i=new K0;i.background=new wt(10273752);const r=new $_(13624309,6969912,1.1),o=new Su(16773590,2.2);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-160,right:160,top:160,bottom:-160,near:1,far:900}),o.shadow.bias=-8e-4,o.shadow.normalBias=.6,i.add(r,o,o.target),i.fog=new rc(14474452,300,1500);const a=vx(s,t);i.add(a.group);const c=new ka(a.segs);i.add(gx(s,t,(M,D)=>{const G=c.at(M,D);return!!G&&G.deck===null}),_x(s));const l=s.lm.flatMap(M=>M.at.map(([D,G])=>[D+M.cov[0],D+M.cov[1],G+M.cov[2],G+M.cov[3]])),h={...s,b:s.b.filter(([M])=>{let D=0,G=0;for(let Z=0;Z<M.length;Z+=2)D+=M[Z],G+=M[Z+1];return D/=M.length/2,G/=M.length/2,!l.some(([Z,j,Mt,ut])=>D>Z&&D<j&&G>Mt&&G<ut)})},u=Gv(s,t,c);h.b=h.b.concat(u);const f=Ax(h,t);i.add(f.group);const d=new Set(h.b.map(M=>M[0]));for(const[M]of s.b){if(d.has(M))continue;const D=[];for(let j=0;j<M.length;j+=2)D.push([M[j]*st,M[j+1]*st]);const G=D.map(j=>j[0]),Z=D.map(j=>j[1]);f.list.push({p:D,bb:[Math.min(...G),Math.min(...Z),Math.max(...G),Math.max(...Z)],base:0,top:30})}const g=new Ha(f.list),_=new Oe({color:14210768});for(const M of s.lm)for(const[D,G]of M.at){const Z=mv(M.name);if(!Z)continue;const j=D*st,Mt=G*st,ut=c.at(j,Mt)?.deck;if(Z.position.set(j,ut??t.heightAt(j,Mt),Mt),Z.traverse(_t=>{_t.receiveShadow=!0}),i.add(Z),M.name==="atalsetu"){Z.scale.set(1,1.8,1);const _t=new Yt(new Ht(1.5,30,1.5).translate(0,17,0),_);Z.add(_t)}}i.add(Px(s,t,g,c));const p=new gv;i.add(p.obj);const m=new vv(t,g,c);let x=92*st,v=34*st;if(!m.free(x,v))for(let M=2;M<200&&!m.free(x,v);M+=2)x=92*st+M;const y=new yv(s,t);i.add(qv(y,t));const P=new bv(y,t,48);i.add(P.group);const A=new Ev(y,t,44);i.add(A.group);const T=new Cv(t,m);i.add(T.group);const L=new Lv(y,t);i.add(L.lamps);const b=new Iv(s,y,t,x,v);i.add(b.group);const S=new Nv(s);i.add(Yv(s,t,g));const C=new zv(y,t,(M,D)=>m.free(M,D)&&!c.at(M,D));i.add(C.group);const F=new Xv(s,t,i,M=>k.whisper(`Okay, ${M.name}. Follow the green light, baba. ${M.note}`,6)),U=new Fv(t,s.casinos??[]);i.add(U.group);const H=new Ov(y,t,(M,D)=>!g.solid(M,D,9)&&!t.isWet(M,D)&&!c.at(M,D));i.add(H.group);const q=[x,v],z=new Xa,Y=new _v(n.domElement),k=new Mv,$={courage:100,oil:100,points:0,lamp:!0};let ct=0,pt=0,at=0;const xt=()=>{const M=A.near(x,v);k.whisper(M?A.talk(x,v,b.target):"Nobody here to ask, baba. Go near someone and ask.")},W=()=>{if(C.riding){C.park(x,v),k.whisper("Parked. Lock it, no? Somebody will take it otherwise.",2);return}const M=P.riding?null:C.near(x,v);if(M){C.mount(M),k.whisper(M.kind==="scooter"?"Vroom! Keys were in it only. Go slow near the church, men.":"Tring tring! Pedal, baba, pedal!",3);return}if(P.riding){const D=P.hopOff();D&&m.free(D.x,D.z)?(x=D.x,v=D.z):(x=Math.max(st*1.5,Math.min((s.W-1.5)*st,x)),v=Math.max(st*1.5,Math.min((s.H-1.5)*st,v)))}else P.hopOn(x,v)||k.whisper("No vehicle near. Stand beside the road and wait for a pilot.",3)},tt=()=>{if(!L.night){k.whisper("No demons in the daytime, men. Relax.",2);return}if($.oil<8){k.whisper("Your lamp has no oil left! Find a street light, quick.",3);return}T.banishNear(x,v)?($.oil-=8,$.points+=15,Yn.banish(),k.whisper("Begone! The demon melts into the dark.",2)):k.whisper("No demon close enough.",2)},dt=()=>{if($.points<50){k.whisper("You need 50 points of good deeds to call Rakhondar.",3);return}$.points-=50,T.call(),Yn.spirit(),k.whisper("Rakhondar rises beside you, staff glowing. The demons flee!",4)};Y.onKey=M=>{Xo(),(M==="["||M==="pagedown")&&z.tiltBy(-.1),(M==="]"||M==="pageup")&&z.tiltBy(.1),M==="n"&&(L.min=L.night?7*60:19*60+30),M==="t"&&xt(),M==="f"&&W(),M===" "&&tt(),M==="r"&&dt(),M==="l"&&($.lamp=!$.lamp),M==="p"&&F.toggle(),(M==="0"||M==="home")&&z.reset(),M==="m"&&document.getElementById("map").click()},addEventListener("pointerdown",Xo),P.onEvent=(M,D)=>{if(M==="honk"){Math.random()<.5&&Yn.honk();return}M==="crash"&&Yn.crash(),D&&k.whisper(D,4)};const it=(M,D)=>document.getElementById(M).addEventListener("click",G=>{G.currentTarget.blur(),Xo(),D()});it("bL",()=>z.turn(-Math.PI/2)),it("bR",()=>z.turn(Math.PI/2)),it("bIn",()=>z.zoom(2)),it("bOut",()=>z.zoom(-2)),it("bHome",()=>z.reset()),it("bTiltD",()=>z.tiltBy(-.12)),it("bTiltU",()=>z.tiltBy(.12)),it("bTalk",xt),it("bLift",W),it("bBan",tt),it("bCall",dt);const Lt=s.places.map(([M,D,G])=>({n:M,X:D*st,Z:G*st})),Tt=()=>{n.setSize(e.clientWidth,e.clientHeight,!1)};addEventListener("resize",Tt),Tt(),document.getElementById("loading").remove(),k.whisper(b.cur.intro,8);const bt=new Set(["roads","buildings","grass","street life"]),Ot=i.children.filter(M=>!bt.has(M.name)&&M.type==="Group");Eh(i,Ot,M=>{let D=M;for(;D;){if(bt.has(D.name))return!0;D=D.parent}return!1});let J=0,nt=0;const R=new nx;let mt=0;window.rk={scene:i,renderer:n,rig:z,child:p,day:L,traffic:P,people:A,monsters:T,quests:b,st:$,get pos(){return[x,v]},set pos(M){x=M[0],v=M[1]}};const Q=M=>{const D=L.night;let G=0;if(P.riding){const V=P.riding;x=V.x,v=V.z,p.heading=Math.atan2(V.hz,V.hx)}else{const V=Y.move(),et=Y.has("shift")?2:1;if(G=Math.hypot(V.x,V.y)*32*et*C.boost,G>0){const vt=z.screenToGround(V.x,V.y),Et=Math.hypot(vt.x,vt.z)||1;p.heading=Math.atan2(vt.z,vt.x);const Wt=x,ge=v;[x,v]=m.step(x,v,vt.x/Et*G*M,vt.z/Et*G*M);const we=x<st*4||v<st*4||x>(s.W-4)*st||v>(s.H-4)*st;nt-=M,we&&Math.hypot(x-Wt,v-ge)<.01&&nt<=0&&(nt=6,k.whisper("Porvorim is that side, bhurgea. Our Panjim ends here; turn back, no?",3))}Math.abs(ct)+Math.abs(pt)>.1&&([x,v]=m.step(x,v,ct*M,pt*M),ct*=1-Math.min(1,M*4),pt*=1-Math.min(1,M*4))}const Z=m.standY(x,v),j=P.riding?P.riding.obj.position.y+2.2:C.riding?Z+1.3:Z;C.follow(x,Z+.15,v,p.heading,performance.now()/1e3),p.obj.position.set(x,j,v);const Mt=$.lamp&&$.oil>0;p.update(M,G,D&&Mt),p.obj.rotation.z=at>0?Math.sin(at*30)*.15:0,at=Math.max(0,at-M),L.update(M,i,r,o,x,v),Eu.value=Math.max(0,L.dark*1.6-.6),_.color.setHSL(.78+Math.sin(performance.now()/4e3)*.05,L.dark>.5?.8:0,L.dark>.5?.7:.85);const ut=P.update(M,x,v,D);ut&&!P.riding&&(ct=ut.kx,pt=ut.kz,$.courage=Math.max(0,$.courage-15),at=.6),A.update(M,x,v,D),U.update(M,L.dark);const _t=H.update(M,x,v,$.oil);_t&&($.oil=100,Yn.pick(),k.whisper(_t,4));const kt=T.update(M,x,v,D,Mt,(V,et)=>L.litAt(V,et));kt>0&&($.courage=Math.max(0,$.courage-kt),at<=0&&(Yn.hurt(),at=.4)),D&&Mt&&($.oil=Math.max(0,$.oil-M*.35)),D||($.oil=Math.min(100,$.oil+M*2)),L.litAt(x,v)&&kt===0&&($.courage=Math.min(100,$.courage+M*(D?3:1))),$.courage<=0&&(k.whisper('Too scared! You run home to Aunty. "Mhaka bhirant dili tuvem! Rest a little, then go."',6),P.riding&&P.hopOff(),$.courage=70,[x,v]=q);const ot=b.update(M,x,v);if(ot){$.points+=ot.pts;const V=ot.msg.length>40;(V?Yn.done:Yn.pick)(),k.whisper(ot.msg,V?9:2)}z.turn(Y.heldTurn()*2.2*M+Y.turnDelta),Y.turnDelta=0,Y.tiltDelta&&(z.tiltBy(Y.tiltDelta),Y.tiltDelta=0),Y.zoomDelta&&(z.zoom(Y.zoomDelta),Y.zoomDelta=0),z.update(M,p.obj.position,e.clientWidth/Math.max(1,e.clientHeight));const Ct=Math.max(.2,Math.min(Math.PI-.2,(L.min-360)/720*Math.PI)),Ft=Math.max(.25,Math.sin(Ct));o.position.set(x+Math.cos(Ct)*260,j+Ft*260,v+80),o.target.position.set(x,j,v);const Bt=z.camera.position.distanceTo(p.obj.position),Pt=i.fog;Pt.near=Bt*1.5,Pt.far=Bt*4.5;let Kt="",Vt=1e9;for(const V of Lt){const et=Math.hypot(V.X-x,V.Z-v);et<Vt&&(Vt=et,Kt=V.n)}if(S.reveal(x,v,6),mt-=M,mt<=0&&(mt=.1,S.draw(x,v,z.yaw,[...b.cur?.spots.filter(V=>!V.done)??[],...F.target?[{x:F.target.x,z:F.target.z,name:F.target.name,done:!1}]:[]],D)),J-=M,J<=0){J=.5;for(const V of[P.group,A.group,T.group,b.group])Eh(V,[V],()=>!1)}const ie=F.update(x,v,z.camera,performance.now()/1e3);ie&&($.points+=5,k.whisper(`${ie.name}! ${ie.note}`,6)),n.render(i,z.camera);const N=b.target,St=N&&!b.cur?.litter?`${Math.round(Math.hypot(N.x-x,N.z-v)/10)*10} m`:"";k.update(M,n,{courage:$.courage,oil:$.oil,points:$.points,time:L.label+(D?" · night":""),placeName:Vt<400?Kt:"",objective:b.objective,riding:!!P.riding,hint:St})};window.rkFrame=Q;let lt=n.getPixelRatio(),rt=0,Rt=0;const gt=Math.min(2,Math.max(1.5,devicePixelRatio)),w=Math.min(1.25,devicePixelRatio);n.setAnimationLoop(()=>{const M=R.getDelta();Q(Math.min(.05,M)),M>1/28?(rt++,Rt=0):M<1/57&&(Rt++,rt=0),rt>60&&lt>w&&(lt=Math.max(w,lt-.25),n.setPixelRatio(lt),Tt(),rt=0),Rt>180&&lt<gt&&(lt=Math.min(gt,lt+.25),n.setPixelRatio(lt),Tt(),Rt=0)})}jv().catch(s=>{const t=document.getElementById("loading");t&&(t.textContent="Could not start: "+s.message),console.error(s)});
