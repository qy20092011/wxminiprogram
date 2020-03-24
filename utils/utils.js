const PRODUCTION = false;
const SERVER = PRODUCTION ? 'https://wap.tudouni.doubozhibo.com' : 'https://waptest.tudouni.doubozhibo.com';
const ajax = function(options, callback){
	if(options.url.indexOf('http') === -1){
		options.url = SERVER + options.url;
	}
	wx.request({
		url: options.url,
		data: options.data || {},
		header: {
			'content-type': 'application/json'
		},
		method: options.method || "POST",
		success: function (res) {
			if(callback){
				callback(res.data)
			}
		},
		fail: function(res){
			wx.showToast({title: "服务器溜号中"})
		}
	})
}

module.exports = {
	ajax: ajax
}