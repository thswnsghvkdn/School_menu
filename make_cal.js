const { text } = require('express');
var http = require('http');
const { builtinModules } = require('module');
const { cpuUsage } = require('process');
const School = require('school-kr');
const school = new School();


function retHtml(txt) 
{
    return `
        <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>My test page</title>
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
    </head>

    <body>
    <div id = "draw_cal">

    </div>

    <div class = "starRating">
        <span id = "star1" class="star" onclick = "click_star(0, this.parentNode.parentNode.id)">★</span>
        <span id = "star2" class="star" onclick = "click_star(1)">★</span>
        <span id = "star3" class="star" onclick = "click_star(2)">★</span>
        <span id = "star4" class="star" onclick = "click_star(3)">★</span>
        <span id = "star5" class="star" onclick = "click_star(4)">★</span>
    </div>

    </div>
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

