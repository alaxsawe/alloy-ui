YUI.add("aui-image-viewer-multiple-swipe",function(e,t){function n(){}n.prototype={initializer:function(){this._eventHandles.push(e.after(this._afterAttachSwipeEvents,this,"_attachSwipeEvents"))},_afterAttachSwipeEvents:function(){this._swipeEventHandles.push(this._scrollView.after("scrollXChange",e.bind(this._afterScrollXChange,this)),this.get("contentBox").on("mousedown",e.bind(this._onMousedown,this)),this.on({imageClicked:this._onImageClicked,makeImageVisible:this._onMakeImageVisible}))},_afterScrollXChange:function(){this._loadVisibleImages()},_onImageClicked:function(e){this._lastThumbnailsScrollX!==this._scrollView.get("scrollX")&&e.preventDefault()},_onMakeImageVisible:function(e){var t=this._getImageContainerAtIndex(e.index).get("region"),n=this.get("contentBox").one(".image-viewer-base-image-list"),r=n.get("region"),i=this._scrollView.get("scrollX");t.left<r.left?this._scrollView.set("scrollX",i-(r.left-t.left)):t.right>r.right&&this._scrollView.set("scrollX",i+t.right-r.right),this._loadVisibleImages(),e.preventDefault()},_onMousedown:function(){this._lastThumbnailsScrollX=this._scrollView.get("scrollX")}},n.ATTRS={useScrollViewPaginator:{value:!1}},e.Base.mix(e.ImageViewerMultiple,[n])},"3.1.0-deprecated.47",{requires:["aui-image-viewer-multiple","aui-image-viewer-swipe"]});
