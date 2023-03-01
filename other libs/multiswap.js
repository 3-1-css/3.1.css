
/***** M U L T I S W A P *****

scripterlative.com

Usage: new MultiSwap( image ID, period (ms), 'first_image.gif'[, other images] );

** DO NOT EDIT BELOW HERE ***/

function MultiSwap(imgRef, period) 
{
 this.period=period;  
 this.timer=null;
 this.index=0;
 this.theElem=document.getElementById(imgRef);
 this.defSrc=this.theElem.src;
 this.imgData=[];

 for(var i=2,j=0; i<arguments.length; i++,j++)
 {
  this.imgData[j]=new Image();
  this.imgData[j].src=arguments[i];
 }

 this.trigElem = (this.theElem.parentNode.tagName=='A' ? this.theElem.parentNode : this.theElem);

 this.trigElem.onmouseout=this.trigElem.onblur=(function(obj){ return function()
 { clearInterval(obj.timer);
   obj.theElem.src=obj.defSrc; 
   obj.index=0;
 }})(this);

 this.trigElem.onmouseover=this.trigElem.onfocus=(function(obj){return function()
 {
  obj.trigElem.onmouseout();
  obj.timer=setInterval( (function(inst){return function(){inst.swap()}})(obj), obj.period);
 }})(this);

 this.swap=function(/*73637269707465726C61746976652E636F6D*/)
 {
  if(this.index==this.imgData.length)
   this.index=0;  
  this.theElem.src=this.imgData[ this.index++ ].src;
 }
}

/** End **/








