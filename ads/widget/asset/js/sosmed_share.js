function fb_share(title,url) {
	u = url;
	t = title;
	window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;
}

function tweet_share(status) {
	u = status;
	window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(u),'sharer','toolbar=0,status=0,width=626,height=436');return false;
}

function plus_share(url){
	u = url;
	window.open('https://plus.google.com/share?url='+encodeURIComponent(u),'sharer','toolbar=0,status=0,width=626,height=436');return false;
}
