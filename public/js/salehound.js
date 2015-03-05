(function(){
        var t,i,e,n=window,o=document,a=arguments,s="script",r=["config","track","identify","visit","push","call","trackForm","trackClick"],c=function(){var t,i=this;for(i._e=[],t=0;r.length>t;t++)(function(t){i[t]=function(){return i._e.push([t].concat(Array.prototype.slice.call(arguments,0))),i}})(r[t])};for(n._w=n._w||{},t=0;a.length>t;t++)n._w[a[t]]=n[a[t]]=n[a[t]]||new c;i=o.createElement(s),i.async=1,i.src="//static.woopra.com/js/w.js",e=o.getElementsByTagName(s)[0],e.parentNode.insertBefore(i,e)
})("woopra");

woopra.config({
    domain: 'salehound.herokuapp.com'
});
woopra.track();

	console.log("ready to clicking"); 

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	console.log("ready to clicking"); 
	initializePage();
})

function initializePage(){

	// Track here
	$(".version_a_watch").click(function(){	
		woopra.track("a_version_watch_click"); 
	})

	$(".version_b_watch").click(function(){
		woopra.track("b_version_watch_click"); 
	})

	$('version_a_unwatch').click(function(){
				console.log("ready to clicking initializePage"); 
		woopra.track("a_version_unwatch_click"); 
	})

	$('version_b_unwatch').click(function(){
		woopra.track("b_version_unwatch_click")
	})


}