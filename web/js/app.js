function bug(msg){
	!msg ? alert("here") : alert(msg);
}
/*var news=function(){
	this.render=function(el){
		this.el=$(el);
		this.news=xml.find("news");
		this.news.each(function(){
			newsflash.el.append(
				"<a href='"+$(this).attr("link")+"' target='_blank'><img src='images/news/"+$(this).attr("url")+"'/>"+
				"<p>"+$(this).attr("title")+"</p></a>"
			);
		});
	};	*/
	/*Usar para carregar p codigo do produto e exibir detalhes
	this.el.find("div").bind({
			click:function(){
				var cod=parseInt($(this).find("img").attr("id"));
				newsflash.click(cod);
			}
		});
	
	this.click=function(id){
		newsflash.news.each(function(){
			if(parseInt($(this).attr("cod"))===id){
				window.open($(this).attr("link"));
			}
		});
	};
};*/

var xml;
$.ajax({
	type:"GET",
	url:"home.xml",
	dataType:"xml",
	success:function(e){
		xml=$(e);
		/*newsflash=new news();
		newsflash.render("body");*/
	}
});
