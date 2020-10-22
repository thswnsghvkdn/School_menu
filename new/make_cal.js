const { text } = require('express');
var http = require('http');
const { builtinModules } = require('module');
const { cpuUsage } = require('process');
const School = require('school-kr');
const school = new School();


function retHtml(txt)
{
    return `
    <!DOCTYPE HTML>
    <!--
    	Road Trip by TEMPLATED
    	templated.co @templatedco
    	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
    -->
    <html>
    	<head>
    		<title>School Menu with 식약청</title>
    		<meta charset="utf-8" />
    		<meta name="viewport" content="width=device-width, initial-scale=1" />
    		<link rel="stylesheet" href="assets/css/main.css" />
    	</head>
    	<body>

    		<!-- Header -->
    			<header id="header">
    				<div class="logo"><a href="index.html">School Menu <span>with 식약청</span></a></div>
    				<a href="#menu"><span>Menu</span></a>
    			</header>

    		<!-- Nav -->
    			<nav id="menu">
    				<ul class="links">
    					<li><a href="index.html">Home</a></li>
    					<li><a href="generic.html">Generic</a></li>
    					<li><a href="elements.html">Elements</a></li>
    				</ul>
    			</nav>

    		<!-- Banner -->
    		<!--
    			Note: To show a background image, set the "data-bg" attribute below
    			to the full filename of your image. This is used in each section to set
    			the background image.
    		-->
    			<section id="banner" class="bg-img" data-bg="banner.jpg">
    				<div class="inner">
    					<header>
    						<h1>School Menu</h1><h2>with 식약청
    					</header>
    				</div>
    				<a href="#one" class="more">Learn More</a>
    			</section>

    		<!-- One -->
    			<section id="one" class="wrapper post bg-img" data-bg="banner2.jpg">
    				<div class="inner">
    					<article class="box">
    						<div id = "draw_cal"></div>
    				</div>
    				<a href="#two" class="more">Learn More</a>
    			</section>

    		<!-- Two -->
    			<section id="two" class="wrapper post bg-img" data-bg="banner5.jpg">
    				<div class="inner">
    					<article class="box">
    						<header>
    							<h2>Mus elit a ultricies at</h2>
    							<p>12.21.2016</p>
    						</header>
    						<div class="content">
    							<p>Scelerisque enim mi curae erat ultricies lobortis donec velit in per cum consectetur purus a enim platea vestibulum lacinia et elit ante scelerisque vestibulum. At urna condimentum sed vulputate a duis in senectus ullamcorper lacus cubilia consectetur odio proin sociosqu a parturient nam ac blandit praesent aptent. Eros dignissim mus mauris a natoque ad suspendisse nulla a urna in tincidunt tristique enim arcu litora scelerisque eros suspendisse.</p>
    						</div>
    						<footer>
    							<a href="generic.html" class="button alt">Learn More</a>
    						</footer>
    					</article>
    				</div>
    				<a href="#three" class="more">Learn More</a>
    			</section>

    		<!-- Three -->
    			<section id="three" class="wrapper post bg-img" data-bg="banner4.jpg">
    				<div class="inner">
    					<article class="box">
    						<header>
    							<h2>Varius a cursus aliquet</h2>
    							<p>11.11.2016</p>
    						</header>
    						<div class="content">
    							<p>Scelerisque enim mi curae erat ultricies lobortis donec velit in per cum consectetur purus a enim platea vestibulum lacinia et elit ante scelerisque vestibulum. At urna condimentum sed vulputate a duis in senectus ullamcorper lacus cubilia consectetur odio proin sociosqu a parturient nam ac blandit praesent aptent. Eros dignissim mus mauris a natoque ad suspendisse nulla a urna in tincidunt tristique enim arcu litora scelerisque eros suspendisse.</p>
    						</div>
    						<footer>
    							<a href="generic.html" class="button alt">Learn More</a>
    						</footer>
    					</article>
    				</div>
    				<a href="#four" class="more">Learn More</a>
    			</section>

    		<!-- Four -->
    			<section id="four" class="wrapper post bg-img" data-bg="banner3.jpg">
    				<div class="inner">
    					<article class="box">
    						<header>
    							<h2>Luctus blandit mi lectus in nascetur</h2>
    							<p>10.30.2016</p>
    						</header>
    						<div class="content">
    							<p>Scelerisque enim mi curae erat ultricies lobortis donec velit in per cum consectetur purus a enim platea vestibulum lacinia et elit ante scelerisque vestibulum. At urna condimentum sed vulputate a duis in senectus ullamcorper lacus cubilia consectetur odio proin sociosqu a parturient nam ac blandit praesent aptent. Eros dignissim mus mauris a natoque ad suspendisse nulla a urna in tincidunt tristique enim arcu litora scelerisque eros suspendisse.</p>
    						</div>
    						<footer>
    							<a href="generic.html" class="button alt">Learn More</a>
    						</footer>
    					</article>
    				</div>
    			</section>

    		<!-- Footer -->
    			<footer id="footer">
    				<div class="inner">

    					<h2>Contact Me</h2>

    					<form action="#" method="post">

    						<div class="field half first">
    							<label for="name">Name</label>
    							<input name="name" id="name" type="text" placeholder="Name">
    						</div>
    						<div class="field half">
    							<label for="email">Email</label>
    							<input name="email" id="email" type="email" placeholder="Email">
    						</div>
    						<div class="field">
    							<label for="message">Message</label>
    							<textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
    						</div>
    						<ul class="actions">
    							<li><input value="Send Message" class="button alt" type="submit"></li>
    						</ul>
    					</form>

    					<ul class="icons">
    						<li><a href="#" class="icon round fa-twitter"><span class="label">Twitter</span></a></li>
    						<li><a href="#" class="icon round fa-facebook"><span class="label">Facebook</span></a></li>
    						<li><a href="#" class="icon round fa-instagram"><span class="label">Instagram</span></a></li>
    					</ul>

    					<div class="copyright">
    						&copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a>. Images: <a href="https://unsplash.com">Unsplash</a>.
    					</div>

    				</div>
    			</footer>

    		<!-- Scripts -->
    			<script src="assets/js/jquery.min.js"></script>
    			<script src="assets/js/jquery.scrolly.min.js"></script>
    			<script src="assets/js/jquery.scrollex.min.js"></script>
    			<script src="assets/js/skel.min.js"></script>
    			<script src="assets/js/util.js"></script>
    			<script src="assets/js/main.js"></script>
    			<script>
    			var tdDay = null;
    			var today = null;
    			var year = null;
    			var month = null;
    			var firstDay = null;
    			var lastDay = null;
    			var dayCount;
    					window.onload = function() {
    							draw_cal();
    							initDate();
    							//append();
    							//send_menu();
    							drawDays(obj);
    			}



    			function initDate(){
    					tdDay = document.getElementsByClassName("cal-day");
    					dayCount = 0;
    					today = new Date();
    					year = today.getFullYear();
    					month = today.getMonth()+1;
    					if(month < 10){month = "0"+month;}
    					firstDay = new Date(year,month-1,1);
    					lastDay = new Date(year,month,0);
    			}


    			function draw_cal()
    			{
    					var today = new Date();
    					var year = today.getFullYear;
    					var month = today.getMonth() + 1;
    					var innerCal ="";
    					innerCal +='<table class="calendar">';
    							innerCal +='<tr><th>SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th></tr>';
    					var id_cnt = 0;
    					for(var i =  0 ; i < 6 ; i++) {
    							innerCal += '<tr height = "140">';
    									for(var j = 0 ; j < 7 ; j++)
    									{
    											innerCal += '<td style="text-overflow:ellipsis;overflow:hidden;white-space:nowrap">';
    													innerCal += '<div class = "cal-day" id ="day_' + id_cnt +'"></div>';
    													innerCal += '<div class = "cal-schedule" id = "menu_' + id_cnt +'"></div>';
    											innerCal += '</td>';
    											id_cnt++;
    										}
    							innerCal += '</tr>'
    					}
    					innerCal += '</table>'
    					document.getElementById('draw_cal').innerHTML = innerCal;
    			}
    			function getNewInfo(){
    					for(var i=0;i<42;i++)
    						 tdDay[i].innerHTML = "";
    					dayCount=0;
    					firstDay = new Date(year,month-1,1);
    					lastDay = new Date(year,month,0);
    					drawDays();
    			}

    			var obj = ${txt};
    			function drawDays(obj){

    					var menu = "";
    					for(var i=firstDay.getDay();i<firstDay.getDay()+lastDay.getDate();i++){
    							menu = "";
    							tdDay[i].innerHTML = dayCount + 1;
    							var txt = obj[++dayCount] + '';
    							txt = txt.split('\\n');
    							var Days = document.getElementsByClassName("cal-schedule");
    							for( var j = 0 ; j < txt.length ; j++){
    							menu += txt[j] + '<br>';
    							}
    							Days[i].innerHTML = menu;
    					}


    					for(var i=0;i<42;i+=7)
    							tdDay[i].style.color = "red";
    					for(var i=6;i<42;i+=7)
    							tdDay[i].style.color = "blue";

    					}


    			function draw_star()
    			{
    					for(var j = 0 ; j < 42 ; j++) {
    							var id ="menu_";
    									id += j;
    							var body = "";
    							document.getElementById(id).innerHTML = body;
    					}
    			}
    			function send_menu ()
    			{
    					var parent_id = "menu_";
    					for(var j = 0 ; j < 42 ; j++) {
    							var id ="menu_";
    									id += j;
    					var n_id = id + '_Form';
    							var newForm = document.createElement('form');
    							newForm.setAttribute("id",n_id);
    							newForm.name = "newform";
    							newForm.method = "post";
    							newForm.action = "http://localhost:3000/send_";
    							newForm.target = '_blank';

    							var input1 = document.createElement('input');
    							input1.setAttribute("type", "hidden");
    							input1.setAttribute("name", "menu");
    							input1.setAttribute("value", "a")//document.getElementById(id).childNodes[0].textContent);
    							var but = document.createElement('button');
    							but.innerHTML = "Good";
    							but.onclick = function() {
    									var txt = "AAA";
    									console.log(txt);
    									newForm.submit();
    							}
    							var but2 = document.createElement('button');
    							but2.innerHTML = "Soso";
    							but2.onclick = function() {
    									var txt = "AAA";
    									console.log(txt);s
    									newForm.submit();
    							}
    							var but3 = document.createElement('button');
    							but3.innerHTML = "Bed";
    							but3.onclick = function() {
    									var txt = "AAA";
    									console.log(txt);
    									newForm.submit();
    							}
    							newForm.appendChild(input1);
    							newForm.appendChild(but);
    							newForm.innerHTML += ' ';
    							newForm.appendChild(but2);
    							newForm.innerHTML += ' ';
    							newForm.appendChild(but3);
    							document.getElementById(id).appendChild(newForm);
    					}
    			}

    			</script>
    			<style>
    					table.calendar {
    							border : 1px solid black;
    							display : inline-table;
    							text-align : left;
    					}
    					table.calendar td{
    							vertical-align: top;
    							border : 1px solid skyblue;
    							width : 160px;
    					}

    			</style>
    	</body>
    </html>
    `
}

function appendMenu(meal)
{
    var body = "";
    for(var j = 0 ; j < 32 ; j++) {
        if(meal[j])
        {
        var id ="menu_";
        id += j;
        var right = '`';
        body += `document.getElementById("${id}").innerHTML =  ${right}${meal[j]}${right} ;`;
        }

    }
    return body;
}

async function sample () {

    school.init(School.Type.HIGH, School.Region.CHUNGNAM, 'N100000269');
    const meal = await school.getMeal(2020 , 10);
    var menu = JSON.stringify(meal);
    var app = http.createServer(function(request, response) {
        response.writeHead(200);
        console.log(meal);
        response.end(retHtml(menu));
    });

    app.listen(3000);
}

sample();
