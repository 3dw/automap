myDonate = ($http) ->
	d = {}
	$http {
		method: 'GET'
		url: 'http://docs.google.com/feeds/download/spreadsheets/Export?key=1HSPIJk59KWwEDRcp6unYQ-SnfC0O0ELr0e8-gdH59Q4&exportFormat=csv&gid=0'
	}
	.then(((res)!->
			console.log res.data
			d:=data), (err)!->
			console.log "ERR"
			console.log err
	)
	
	d

myDonaterCtrl = ($scope, $donater)!->
	parseD = (d)->
		objs = d
		return objs
	angular.extend($scope{d:parseD $donater})

angular.module 'donater', []
	.factory '$donater', ['$http', myDonate]
	.controller 'myDonaterCtrl', [\$scope, \$donater, myDonaterCtrl]