YUI.add("aui-color-picker-grid-plugin-deprecated",function(e,t){var n=e.Lang,r=n.isString,i="colorpickergrid",s="cpgrid",o="ColorPickerGridPlugin",u=e.getClassName,a="item",f=u(i),l=u(i,a),c=u(i,a,"content"),h="",p='"></span></span>',d='"><span class="'+c+'" style="background-color:#',v='<span class="'+l+'" data-color="',m=e.Component.create({NAME:i,NS:s,ATTRS:{colors:{value:"websafe",setter:"_setColors"}},EXTENDS:e.Plugin.Base,prototype:{initializer:function(){var e=this,t=e.get("host");t.set("cssClass",f),e.beforeHostMethod("_renderSliders",e._preventHostMethod),e.beforeHostMethod("_renderControls",e._preventHostMethod),e.beforeHostMethod("bindUI",e._beforeBindUI),e.beforeHostMethod("syncUI",e._beforeSyncUI),e.afterHostMethod("_renderContainer",e._afterRenderContainer),e.after("colorsChange",e._afterColorsChange)},_afterColorsChange:function(e){var t=this;t._uiSetColors(e.newVal)},_afterRenderContainer:function(){var e=this,t=e.get("host");e._uiSetColors(e.get("colors")),t.after("hexChange",t._updateRGB),t.after("rgbChange",t._updateRGB);var n=t._pickerContainer;n.delegate("click",function(e){t.set("hex",e.currentTarget.attr("data-color"))},"."+l)},_beforeBindUI:function(){var e=this,t=e.get("host");return t.constructor.superclass.bindUI.apply(t,arguments),e._preventHostMethod()},_beforeSyncUI:function(){var e=this,t=e.get("host");return t.constructor.superclass.syncUI.apply(t,arguments),e._preventHostMethod()},_getHex:function(e,t,n){return(16777216|n|t<<8|e<<16).toString(16).slice(1)},_getWebSafeColors:function(){var e=this,t=0,n=0,r=0,i=e._getHex,s=[i(t,n,r)];for(var o=0,u=1;o<256;o+=51,u++){if(t==255&&n==255&&r==255)break;n>255&&(t+=51,n=o=0,s[u++]=i(t,n,r)),r>=255&&(n+=51,n>255&&(t+=51,n=0),r=o=0,s[u++]=i(t,n,r)),r+=51,s[u]=i(t,n,r)}return s},_preventHostMethod:function(){var t=this;return new e.Do.Prevent(null,null)},_setColors:function(t){var r=this;return t=="websafe"?t=r._getWebSafeColors():n.isArray(t)||(t=e.Attribute.INVALID_VALUE),t},_uiSetColors:function(t){var n=this,r=[],i=[v,h,d,h,p];e.each(t,function(e,t,n){i[1]=i[3]=e,r[t]=i.join(h)});var s=n.get("host")._pickerContainer;s.setContent(r.join(h))}}});e.Plugin.ColorPickerGrid=m},"3.1.0-deprecated.47",{requires:["plugin","aui-color-picker-base-deprecated"],skinnable:!0});
