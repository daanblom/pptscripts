/*1.0.6*/function DopPlayer(){function t(){a.LoadingStart(),document.getElementsByTagName("body")[0].style.backgroundColor=i.BackColr;var t=document.getElementById("resizer");t.style.height=i.Height+"px",t.style.width=i.Width+"px";var e=new Pcl;e.r(),window.onresize=e.r}var e,n,i={};if(!document.createElement("canvas").getContext)return document.getElementById("resizer").innerHTML="",void(document.body.innerHTML="<h2>Oops! Your browser does not support HTML5. You need to upgrade your browser to view this content.</h2>");document.addEventListener("touchmove",function(t){t.preventDefault()},{passive:!1});try{document.createEvent("TouchEvent"),n=!0}catch(o){n=!1}var d=function(){this.OnError=function(){},this.OnLoadingStart=function(){a.LoadingStart()},this.OnLoadingEnd=function(){a.LoadingEnd()},this.OnStartButtonShow=function(){},this.OnStartButtonClose=function(){},this.OnSlideTransitionEnd=function(t){},this.OnSlideChange=function(t){},this.OnMovToNxtAnim=function(){},this.OnMovToPrvAnim=function(){},this.OnPlayingStart=function(){},this.OnPlayingEnd=function(){},this.OnProgressChange=function(t){},this.OnSlideEnd=function(t,e){},this.OnClick=function(t){},this.OnSldOutlineLoad=function(t){},this.OnMediaPlay=function(t){},this.OnMediaPause=function(t){},this.InitaliseSettings=function(e){i=e,t()}},a=function(){function t(){document.getElementById("loadingImg").style.display="block"}function e(){document.getElementById("loadingImg").style.display="none"}return{LoadingStart:t,LoadingEnd:e}}();Pcl=function(){function t(){function t(){document.body.removeChild(window.iabho)}n&&(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))&&(window.iabho=document.createElement("div"),document.body.appendChild(window.iabho),window.iabho.style.height="1000px",setTimeout(t(),100),window.scrollTo(0,1))}function o(t){var e=t.toString();return e.indexOf("e")>0?Math.floor(t):t}this.r=function(){t();var n,d,a,h=window.innerWidth,r=window.innerHeight,l=document.getElementById("player");i.MaxScale>0?(n=r>i.Height*i.MaxScale?i.Height*i.MaxScale:r,d=h>i.Width*i.MaxScale?i.Width*i.MaxScale:h):(n=r,d=h);var s;s=d<i.Width||n<i.Height?(i.Width-d)/i.Width<(i.Height-n)/i.Height?1-(i.Height-n)/i.Height:1-(i.Width-d)/i.Width:(d-i.Width)/i.Width>(n-i.Height)/i.Height?1+(n-i.Height)/i.Height:1+(d-i.Width)/i.Width,e.SetScale(s),0==i.MaxScale&&(d=i.Width*s),l.style.height=o(n)+"px",l.style.width=o(d)+"px",l.style.top=o(r-n)/2+"px",l.style.left=o(h-d)/2+"px",a=document.getElementById("resizer"),a.style.webkitTransform="scale("+o(s)+")",a.style.MozTransform="scale("+o(s)+")",a.style.OTransform="scale("+o(s)+")",a.style.msTransform="scale("+o(s)+")";var c=document.getElementById("contentHolder");c.style.height=o(i.Height*s)+"px",c.style.width=o(i.Width*s)+"px",c.style.marginLeft=o((d-s*i.Width)/2)+"px",c.style.marginTop=o((n-s*i.Height)/2)+"px";var g=document.getElementById("loadingImg");g.style.height=c.style.height,g.style.width=c.style.width,g.style.marginTop=c.style.marginTop,g.style.marginLeft=c.style.marginLeft,null!=document.getElementById("play")&&(a=document.getElementById("play"),a.style.height=o(s*i.Height)+"px",a.style.width=o(s*i.Width)+"px")}},e=new DopPresentation(new d),e.SetRPath("data/"),e.LoadPres("pres",1),window.Presentation=e}window.onload=DopPlayer;
