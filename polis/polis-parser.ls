$('.ctrl')
	.popup({
		inline   : true,
		hoverable: true,
		position : 'bottom left',
		delay: {
			show: 0,
			hide: 0
		}
	})

myCtrl = ($http, $sce, $scope)->
	
	$scope.test = "TEST"
	$scope.data = []
	$scope.titles = [\comment-body \agrees \disagrees \agree-ratio]
	$scope.titlesP = [\意見 \贊成人數 \反對人數 \統計]
	$scope.dataURL = 'polis-export-89bzf78kbn-1465627170340/comments.csv'
	$scope.options = [{id:0, label: \贊成排行} {id:1,label: \反對排行} {id:2,label: \爭議排行} {id:3,label: \關注排行}]

	
	$scope.ord = (obj) ->
		total = parseInt(obj.agrees) + parseInt(obj.disagrees)
		rat1 = parseInt(obj.agrees) / total
		rat = rat1 + (parseInt(obj.agrees) + parseInt(obj.disagrees))*0.0001
		switch $scope.p
		case 0    then -rat
		case 1 	  then rat
		case 2    then Math.abs(rat - 0.5)
		case 3    then -total
		default -rat

	$scope.parseFromCSV = (csv) !->
			allTextLines = csv.split(/\r\n|\n/)
			titles = allTextLines[0].split(',')

			bodyLines = allTextLines.slice(1)

			$scope.data = []
			
			for i in bodyLines

				i := i.replace(/""/g,"'")
				i := i.replace(/"([^,]+)"/g,"$1")
			#	while i.match(/"(.+)"/)

				while i.match(/"(.+),(.+)"/)
					i := i.replace(/"(.+),(.+)"/g, "\"$1，$2\"")
					i := i.replace(/"([^,]+)"/g,"$1")
			#	i := i.replace(/(^|,)"/,"$1").replace(/"(,|$)/,"$1")
				
				

				obj = new Object
				for t in titles

					obj[t] = i.split(',')[titles.indexOf(t)]
				obj['agree-ratio'] = Math.floor(parseInt(obj.agrees) / (parseInt(obj.agrees) + parseInt(obj.disagrees)) * 1000 + 0.5) / 10 + "%"
				
				if obj['agree-ratio'] != \NaN% && parseInt(obj.moderated) != -1
					$scope.data.push(obj)

	$scope.polarToCartesian = (centerX, centerY, radius, angleInDegrees) -> 
			angleInRadians = (angleInDegrees-90) * Math.PI / 180.0
			{
				x: centerX + (radius * Math.cos(angleInRadians)),
				y: centerY + (radius * Math.sin(angleInRadians))
			}

	$scope.describeArc = (x, y, radius, startAngle, endAngle) ->
			start = $scope.polarToCartesian(x, y, radius, endAngle)
			end = $scope.polarToCartesian(x, y, radius, startAngle)
			arcSweep = if (endAngle - startAngle <= 180)
				then "0"
				else "1"
			d = ["M" start.x, start.y, "A", radius, radius, 0, arcSweep, 0, end.x, end.y].join(" ")
			d



	$scope.countSVG = (d) ->

		total = (parseInt(d.agrees) + parseInt(d.disagrees))
		agrees = parseInt(d.agrees)

		angle = agrees / total * 359.9

		sa1 = 0
		ea1 = sa1+angle
		sa2 = ea1-360
		ea2 = sa1

		arc1 = $scope.describeArc(60, 60, 50, sa1, ea1)
		arc2 = $scope.describeArc(60, 60, 50, sa2, ea2)

		strokeW = total / 10 + 1

		fill = '#c90'
		if angle >= 270
			fill = '#0a0'
		if angle > 90 and angle < 270
			fill = '#c90'
		if angle <= 90
			fill = '#f9a'

		ratioP = d['agree-ratio']
		while ratioP.length < 4
			ratioP = '&nbsp;&nbsp;'+ratioP

		html = '<svg width ="150" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
				<path fill="none" class = "green" stroke-width="'+strokeW+'" 
				d="'+arc1+'">
				</path>
				<path fill="none" class = "red" stroke-width="'+strokeW+'" 
				d="'+arc2+'">
				</path>
				<text class ="main" x="26" y="65" fill="'+fill+'" font-size = "24">'+ratioP+'</text>
				<text class ="green" x="100" y="16" fill="#0a0" font-size = "14">'+d.agrees+'</text>
				<text class ="red" x="0" y="16" fill="#f9a" font-size = "14">'+d.disagrees+'</text>
				</svg>'

		$sce.trustAsHtml html
	

	$http {method: "GET",url: $scope.dataURL,dataType: "text"}
				.success (d) !->
					$scope.parseFromCSV d
				.error !->
					console.log \ERROR_LOADING_DATA!
					$scope.data = []




angular.module 'my_polis' []
	.controller 'myCtrl' [\$http, \$sce, \$scope, myCtrl]

