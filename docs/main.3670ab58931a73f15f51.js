(()=>{var e={267:(e,r,t)=>{var i={"./de.json":837,"./en.json":443,"./es.json":117,"./fr.json":115,"./ja.json":78,"./pt.json":909};function n(e){var r=a(e);return t(r)}function a(e){if(!t.o(i,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=a,e.exports=n,n.id=267},837:e=>{"use strict";e.exports=JSON.parse('{"Get Unlimited <br>Access":"Erhalten Sie unbegrenzten <br>Zugriff","Unlimited Art <br>Creation":"Unbegrenzte <br>Kunstschaffung","Exclusive <br>Styles":"Exklusive <br>Stile","Magic Avatars <br>With 20% Off":"20 % Rabatt auf <br>KI-Avatare","YEARLY ACCESS":"JÄHRLICHER ZUGRIFF","BEST OFFER":"BESTES ANGEBOT","Just {{price}} per year":"Nur {{price}} pro Jahr","WEEKLY ACCESS":"WÖCHENTLICHER ZUGRIFF","{{price}} <br>per week":"{{price}} <br>pro Woche","Terms of Use":"Nutzungsbedingungen","Privacy Policy":"Datenschutzrichtlinie","Restore":"Wiederherstellen","Continue":"Weiter"}')},443:e=>{"use strict";e.exports=JSON.parse('{"Get Unlimited <br>Access":"Get Unlimited <br>Access","Unlimited Art <br>Creation":"Unlimited Art <br>Creation","Exclusive <br>Styles":"Exclusive <br>Styles","Magic Avatars <br>With 20% Off":"Magic Avatars <br>With 20% Off","YEARLY ACCESS":"YEARLY ACCESS","BEST OFFER":"BEST OFFER","Just {{price}} per year":"Just {{price}} per year","WEEKLY ACCESS":"WEEKLY ACCESS","{{price}} <br>per week":"{{price}} <br>per week","Terms of Use":"Terms of Use","Privacy Policy":"Privacy Policy","Restore":"Restore","Continue":"Continue"}')},117:e=>{"use strict";e.exports=JSON.parse('{"Get Unlimited <br>Access":"Obtén acceso <br>ilimitado","Unlimited Art <br>Creation":"Ilimitada creación <br>de arte","Exclusive <br>Styles":"Estilos <br>exclusivos","Magic Avatars <br>With 20% Off":"20 % de descuento en <br>avatares de IA","YEARLY ACCESS":"ACCESO ANUAL","BEST OFFER":"MEJOR OFERTA","Just {{price}} per year":"Solo {{price}} por año","WEEKLY ACCESS":"ACCESO SEMANAL","{{price}} <br>per week":"{{price}} <br>por semana","Terms of Use":"Términos de uso","Privacy Policy":"Política de privacidad","Restore":"Restaurar","Continue":"Continuar"}')},115:e=>{"use strict";e.exports=JSON.parse('{"Get Unlimited <br>Access":"Obtenez un accès <br>illimité","Unlimited Art <br>Creation":"Création artistique <br>illimitée","Exclusive <br>Styles":"Styles <br>exclusifs","Magic Avatars <br>With 20% Off":"20&nbsp;% de réduction <br>sur les avatars IA","YEARLY ACCESS":"ACCÈS ANNUEL","BEST OFFER":"MEILLEURE OFFRE","Just {{price}} per year":"Seulement {{price}} par an","WEEKLY ACCESS":"ACCÈS HEBDOMADAIRE","{{price}} <br>per week":"{{price}} <br>par semaine","Terms of Use":"Conditions d’utilisation","Privacy Policy":"Politique de confidentialité","Restore":"Restaurer","Continue":"Continuer"}')},78:e=>{"use strict";e.exports=JSON.parse('{"Get Unlimited <br>Access":"無制限アクセス<br>を入手","Unlimited Art <br>Creation":"アート作品を<br>無制限に創造","Exclusive <br>Styles":"特別な<br>スタイル","Magic Avatars <br>With 20% Off":"AIアバターが<br>20%オフ","YEARLY ACCESS":"年間アクセス","BEST OFFER":"ベストオファー","Just {{price}} per year":"わずか{{price}}/年","WEEKLY ACCESS":"週ごとのアクセス","{{price}} <br>per week":"{{price}}/週<br>","Terms of Use":"利用規約","Privacy Policy":"プライバシーポリシー","Restore":"復元する","Continue":"続行する"}')},909:e=>{"use strict";e.exports=JSON.parse('{"Get Unlimited <br>Access":"Obtenha Acesso <br>Ilimitado","Unlimited Art <br>Creation":"Criação de Arte <br>Ilimitada","Exclusive <br>Styles":"Estilos <br>Exclusivos","Magic Avatars <br>With 20% Off":"20% de Desconto em <br>Avatares de IA","YEARLY ACCESS":"ACESSO ANUAL","BEST OFFER":"MELHOR OFERTA","Just {{price}} per year":"Apenas {{price}} por ano","WEEKLY ACCESS":"ACESSO SEMANAL","{{price}} <br>per week":"{{price}} <br>por semana","Terms of Use":"Termos de Uso","Privacy Policy":"Política de Privacidade","Restore":"Restaurar","Continue":"Continuar"}')}},r={};function t(i){var n=r[i];if(void 0!==n)return n.exports;var a=r[i]={exports:{}};return e[i](a,a.exports,t),a.exports}t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";var e=["de","en","es","fr","ja","pt"];function r(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,n,a,o,s=[],c=!0,l=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=a.call(t)).done)&&(s.push(i.value),s.length!==r);c=!0);}catch(e){l=!0,n=e}finally{try{if(!c&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw n}}return s}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,i=new Array(r);t<r;t++)i[t]=e[t];return i}document.getElementById("continue-form").addEventListener("submit",(function(e){e.preventDefault();try{var r=new FormData(e.target).get("link");if("string"!=typeof r)throw new Error("some error");window.location.href=r}catch(e){console.log(e)}}));var n=function(){var r=new URLSearchParams(window.location.search).get("lang");r&&e.includes(r)||(r=navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language,e.includes(r)||(r="en"));try{return{localeObject:t(267)("./".concat(r,".json")),lang:r}}catch(e){return console.log(e),{localeObject:null,lang:null}}}(),a=n.localeObject,o=n.lang;a&&(document.querySelector("html").setAttribute("lang",o),Object.entries(a).forEach((function(e){var t=r(e,2),i=t[0],n=t[1],a="[data-translate="+'"'.concat(i,'"]'),o=document.querySelectorAll(a);Array.from(o).forEach((function(e){if(e){if(n.includes("{{price}}"))return void(e.innerHTML=n.replace("{{price}}",e.dataset.price));e.innerHTML=n}}))})))})()})();