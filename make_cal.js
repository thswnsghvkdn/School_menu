const { text } = require('express');
var http = require('http');

function createHtml(text) {
var html = `<!DOCTYPE html>
                <html>
                <style type="text/css">
                    .cal_top{
                        text-align: center;
                        font-size: 30px;
                    }
                    .cal{
                        text-align: center; 
                    }
                    table.calendar{
                        border: 1px solid black;
                        display: inline-table;
                        text-align: left;
                    }
                    table.calendar td{
                        vertical-align: top;
                        border: 1px solid skyblue;
                        width: 140px;
                    }
                </style>

                <head>
                        <body>
                        ${text}
                        </body>
                    </head>
                    <script>
                    function click_star(num, class_name){
                        for(var i = 0 ; i < 5; i++){
                            if(i <= num)
                              document.getElementsByClassName('class_name')[i].style.color = "orange";
                            else
                              document.getElementsByClassName('class_name')[i].style.color = "black";
                        }
                    }
                    </script>
                </html>`
return html
}
function calendar() {
    var cal = "";
    cal += `<table class  ="calendar" >`; 
    cal += `<tr><th>SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th></tr>`;
    var count = 0;
    for(var i = 0 ; i < 6 ; i++)
        {
            cal += `<tr height = "140">`;
            var day_id = "day_";
            var menu_id = "menu_";
            day_id += count;
            menu_id += count;
              for(var j = 0 ; j < 7 ; j++) {   
                     cal +=  `<td>
                                <div id = "${day_id}"></div>
                                 <div id = "${menu_id}">${draw_star(count)}</div>
                            </td>
                            `;
                            count++;
                        }
            cal += `</tr>`
            
        }        
    cal += `</table>`;
    return cal;
}

function send_star ( num){

}
function draw_star(num) {
    var star = "";
    var count = 0;
    var star_class = "star_";
    star_class += num;
    for(var i = 0 ; i < 5 ;i++)
        star += `<span class="${star_class}" onclick = "click_star(${i} , ${star_class})">'★'</span>`;
    
    return star;
}

var app = http.createServer(function(request, response) {

    response.writeHead(200);
    response.end(createHtml(calendar()));
});

app.listen(3000);