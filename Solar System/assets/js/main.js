$(document).ready(function () {
   
    var  count = 0;

    $(".main .borderButton").click(function(){
        if(count%2==0){
            $(".borderPlanets").addClass("border");
        }else if(count%2!=0){
            $(".border").removeClass("border")
        }
        count++;
        console.log(count)
    })

   
    $(".main .place").css({"opacity":"1"});
    $(".main .place").click(function(){
        $(".sun").css({"top":"42.5%","left":"46.2%","transition":"all 5s ease"});
        $(".mercury").css({"top":"42%","left":"46%","transition":"all 5s ease"});
        $(".venus").css({"top":"39.9%","left":"45%","transition":"all 5s ease"});
        $(".earth").css({"top":"36%","left":"42.9%","transition":"all 5s ease"});
        $(".mars").css({"top":"32%","left":"41%","transition":"all 5s ease"});
        $(".jupiter").css({"top":"24.5%","left":"37.5%","transition":"all 5s ease"});
        $(".saturn").css({"top":"11.8%","left":"31%","transition":"all 5s ease"});
        $(".uranus").css({"top":"2.5%","left":"26.5%","transition":"all 5s ease"});
        $(".neptune").css({"top":"-4%","left":"23%","transition":"all 5s ease"});

        $(".planetsNameRight").css({"opacity":"0"});
        $(".planetsNameDown").css({"opacity":"1"});

        $(".main .revolution").css({"opacity":"1"})
        $(".main .borderButton").css({"opacity":"1"})
    })
   

    $(".main .revolution").click(function(){
        $(".mercury").css({"animation":"revolution 3s linear infinite"});
        $(".venus").css({"animation":"revolution 4s linear infinite"});
        $(".earth").css({"animation":"revolution 5s linear infinite"});
        $(".moon").css({"animation":"revolution 2s linear infinite"});
        $(".mars").css({"animation":"revolution 54s linear infinite"});
        $(".jupiter").css({"animation":"revolution 29s linear infinite"});
        $(".saturn").css({"animation":"revolution 15s linear infinite"});
        $(".uranus").css({"animation":"revolution 21s linear infinite"});
        $(".neptune").css({"animation":"revolution 26s linear infinite"});
    })


    $(".planetsNameDown .sunName h1").click(function(){
        $(".planetsNameDown .sunName h1").css({"color":"#0CF"});
        $(".planetsNameDown .mercuryName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .venusName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .earthName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .marsName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .jupiterName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .saturnName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .uranusName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .neptuneName h1").css({"color":"rgba(128, 128, 128, 0.61)"});

        $(".main .info .sunInfo").css({"opacity":"1"});
        $(".main .info .mercuryInfo").css({"opacity":"0"});
        $(".main .info .venusInfo").css({"opacity":"0"});
        $(".main .info .earthInfo").css({"opacity":"0"});
        $(".main .info .marsInfo").css({"opacity":"0"});
        $(".main .info .jupiterInfo").css({"opacity":"0"});
        $(".main .info .saturnInfo").css({"opacity":"0"});
        $(".main .info .uranusInfo").css({"opacity":"0"});
        $(".main .info .neptuneInfo").css({"opacity":"0"});

        $(".mercury").removeClass("borderWhite");
        $(".venus").removeClass("borderWhite");
        $(".earth").removeClass("borderWhite");
        $(".mars").removeClass("borderWhite");
        $(".jupiter").removeClass("borderWhite");
        $(".saturn").removeClass("borderWhite");
        $(".uranus").removeClass("borderWhite");
        $(".neptune").removeClass("borderWhite");
    })

    $(".main .info i").click(function(){
        $(".main .info .sunInfo").css({"opacity":"0"});
        $(".main .info .mercuryInfo").css({"opacity":"0"});
        $(".main .info .venusInfo").css({"opacity":"0"});
        $(".main .info .earthInfo").css({"opacity":"0"});
        $(".main .info .marsInfo").css({"opacity":"0"});
        $(".main .info .jupiterInfo").css({"opacity":"0"});
        $(".main .info .saturnInfo").css({"opacity":"0"});
        $(".main .info .uranusInfo").css({"opacity":"0"});
        $(".main .info .neptuneInfo").css({"opacity":"0"});
    })

    $(".planetsNameDown .mercuryName h1").click(function(){
        $(".mercury").addClass("borderWhite");
        $(".venus").removeClass("borderWhite");
        $(".earth").removeClass("borderWhite");
        $(".mars").removeClass("borderWhite");
        $(".jupiter").removeClass("borderWhite");
        $(".saturn").removeClass("borderWhite");
        $(".uranus").removeClass("borderWhite");
        $(".neptune").removeClass("borderWhite");

        $(".planetsNameDown .sunName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .mercuryName h1").css({"color":"#0CF"});
        $(".planetsNameDown .venusName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .earthName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .marsName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .jupiterName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .saturnName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .uranusName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .neptuneName h1").css({"color":"rgba(128, 128, 128, 0.61)"});

        $(".main .info .mercuryInfo").css({"opacity":"1"});
        $(".main .info .sunInfo").css({"opacity":"0"});
        $(".main .info .venusInfo").css({"opacity":"0"});
        $(".main .info .earthInfo").css({"opacity":"0"});
        $(".main .info .marsInfo").css({"opacity":"0"});
        $(".main .info .jupiterInfo").css({"opacity":"0"});
        $(".main .info .saturnInfo").css({"opacity":"0"});
        $(".main .info .uranusInfo").css({"opacity":"0"});
        $(".main .info .neptuneInfo").css({"opacity":"0"});
    })
    $(".planetsNameDown .venusName h1").click(function(){
        $(".mercury").removeClass("borderWhite");
        $(".venus").addClass("borderWhite");
        $(".earth").removeClass("borderWhite");
        $(".mars").removeClass("borderWhite");
        $(".jupiter").removeClass("borderWhite");
        $(".saturn").removeClass("borderWhite");
        $(".uranus").removeClass("borderWhite");
        $(".neptune").removeClass("borderWhite");

        $(".planetsNameDown .sunName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .mercuryName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .venusName h1").css({"color":"#0CF"});
        $(".planetsNameDown .earthName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .marsName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .jupiterName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .saturnName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .uranusName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .neptuneName h1").css({"color":"rgba(128, 128, 128, 0.61)"});

        $(".main .info .mercuryInfo").css({"opacity":"0"});
        $(".main .info .sunInfo").css({"opacity":"0"});
        $(".main .info .venusInfo").css({"opacity":"1"});
        $(".main .info .earthInfo").css({"opacity":"0"});
        $(".main .info .marsInfo").css({"opacity":"0"});
        $(".main .info .jupiterInfo").css({"opacity":"0"});
        $(".main .info .saturnInfo").css({"opacity":"0"});
        $(".main .info .uranusInfo").css({"opacity":"0"});
        $(".main .info .neptuneInfo").css({"opacity":"0"});
    })
    $(".planetsNameDown .earthName h1").click(function(){
        $(".mercury").removeClass("borderWhite");
        $(".venus").removeClass("borderWhite");
        $(".earth").addClass("borderWhite");
        $(".mars").removeClass("borderWhite");
        $(".jupiter").removeClass("borderWhite");
        $(".saturn").removeClass("borderWhite");
        $(".uranus").removeClass("borderWhite");
        $(".neptune").removeClass("borderWhite");

        $(".planetsNameDown .sunName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .mercuryName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .venusName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .earthName h1").css({"color":"#0CF"});
        $(".planetsNameDown .marsName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .jupiterName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .saturnName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .uranusName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .neptuneName h1").css({"color":"rgba(128, 128, 128, 0.61)"});

        $(".main .info .mercuryInfo").css({"opacity":"0"});
        $(".main .info .sunInfo").css({"opacity":"0"});
        $(".main .info .venusInfo").css({"opacity":"0"});
        $(".main .info .earthInfo").css({"opacity":"1"});
        $(".main .info .marsInfo").css({"opacity":"0"});
        $(".main .info .jupiterInfo").css({"opacity":"0"});
        $(".main .info .saturnInfo").css({"opacity":"0"});
        $(".main .info .uranusInfo").css({"opacity":"0"});
        $(".main .info .neptuneInfo").css({"opacity":"0"});
    })
    $(".planetsNameDown .marsName h1").click(function(){
        $(".mercury").removeClass("borderWhite");
        $(".venus").removeClass("borderWhite");
        $(".earth").removeClass("borderWhite");
        $(".mars").addClass("borderWhite");
        $(".jupiter").removeClass("borderWhite");
        $(".saturn").removeClass("borderWhite");
        $(".uranus").removeClass("borderWhite");
        $(".neptune").removeClass("borderWhite");

        $(".planetsNameDown .sunName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .mercuryName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .venusName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .earthName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .marsName h1").css({"color":"#0CF"});
        $(".planetsNameDown .jupiterName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .saturnName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .uranusName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .neptuneName h1").css({"color":"rgba(128, 128, 128, 0.61)"});

        $(".main .info .mercuryInfo").css({"opacity":"0"});
        $(".main .info .sunInfo").css({"opacity":"0"});
        $(".main .info .venusInfo").css({"opacity":"0"});
        $(".main .info .earthInfo").css({"opacity":"0"});
        $(".main .info .marsInfo").css({"opacity":"1"});
        $(".main .info .jupiterInfo").css({"opacity":"0"});
        $(".main .info .saturnInfo").css({"opacity":"0"});
        $(".main .info .uranusInfo").css({"opacity":"0"});
        $(".main .info .neptuneInfo").css({"opacity":"0"});
    })
    $(".planetsNameDown .jupiterName h1").click(function(){
        $(".mercury").removeClass("borderWhite");
        $(".venus").removeClass("borderWhite");
        $(".earth").removeClass("borderWhite");
        $(".mars").removeClass("borderWhite");
        $(".jupiter").addClass("borderWhite");
        $(".saturn").removeClass("borderWhite");
        $(".uranus").removeClass("borderWhite");
        $(".neptune").removeClass("borderWhite");

        $(".planetsNameDown .sunName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .mercuryName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .venusName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .earthName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .marsName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .jupiterName h1").css({"color":"#0CF"});
        $(".planetsNameDown .saturnName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .uranusName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .neptuneName h1").css({"color":"rgba(128, 128, 128, 0.61)"});

        $(".main .info .mercuryInfo").css({"opacity":"0"});
        $(".main .info .sunInfo").css({"opacity":"0"});
        $(".main .info .venusInfo").css({"opacity":"0"});
        $(".main .info .earthInfo").css({"opacity":"0"});
        $(".main .info .marsInfo").css({"opacity":"0"});
        $(".main .info .jupiterInfo").css({"opacity":"1"});
        $(".main .info .saturnInfo").css({"opacity":"0"});
        $(".main .info .uranusInfo").css({"opacity":"0"});
        $(".main .info .neptuneInfo").css({"opacity":"0"});
    })
    $(".planetsNameDown .saturnName h1").click(function(){
        $(".mercury").removeClass("borderWhite");
        $(".venus").removeClass("borderWhite");
        $(".earth").removeClass("borderWhite");
        $(".mars").removeClass("borderWhite");
        $(".jupiter").removeClass("borderWhite");
        $(".saturn").addClass("borderWhite");
        $(".uranus").removeClass("borderWhite");
        $(".neptune").removeClass("borderWhite");

        $(".planetsNameDown .sunName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .mercuryName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .venusName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .earthName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .marsName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .jupiterName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .saturnName h1").css({"color":"#0CF"});
        $(".planetsNameDown .uranusName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .neptuneName h1").css({"color":"rgba(128, 128, 128, 0.61)"});

        $(".main .info .mercuryInfo").css({"opacity":"0"});
        $(".main .info .sunInfo").css({"opacity":"0"});
        $(".main .info .venusInfo").css({"opacity":"0"});
        $(".main .info .earthInfo").css({"opacity":"0"});
        $(".main .info .marsInfo").css({"opacity":"0"});
        $(".main .info .jupiterInfo").css({"opacity":"0"});
        $(".main .info .saturnInfo").css({"opacity":"1"});
        $(".main .info .uranusInfo").css({"opacity":"0"});
        $(".main .info .neptuneInfo").css({"opacity":"0"});
    })
    $(".planetsNameDown .uranusName h1").click(function(){
        $(".mercury").removeClass("borderWhite");
        $(".venus").removeClass("borderWhite");
        $(".earth").removeClass("borderWhite");
        $(".mars").removeClass("borderWhite");
        $(".jupiter").removeClass("borderWhite");
        $(".saturn").removeClass("borderWhite");
        $(".uranus").addClass("borderWhite");
        $(".neptune").removeClass("borderWhite");

        $(".planetsNameDown .sunName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .mercuryName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .venusName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .earthName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .marsName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .jupiterName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .saturnName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .uranusName h1").css({"color":"#0CF"});
        $(".planetsNameDown .neptuneName h1").css({"color":"rgba(128, 128, 128, 0.61)"});

        $(".main .info .mercuryInfo").css({"opacity":"0"});
        $(".main .info .sunInfo").css({"opacity":"0"});
        $(".main .info .venusInfo").css({"opacity":"0"});
        $(".main .info .earthInfo").css({"opacity":"0"});
        $(".main .info .marsInfo").css({"opacity":"0"});
        $(".main .info .jupiterInfo").css({"opacity":"0"});
        $(".main .info .saturnInfo").css({"opacity":"0"});
        $(".main .info .uranusInfo").css({"opacity":"1"});
        $(".main .info .neptuneInfo").css({"opacity":"0"});
    })
    $(".planetsNameDown .neptuneName h1").click(function(){
        $(".mercury").removeClass("borderWhite");
        $(".venus").removeClass("borderWhite");
        $(".earth").removeClass("borderWhite");
        $(".mars").removeClass("borderWhite");
        $(".jupiter").removeClass("borderWhite");
        $(".saturn").removeClass("borderWhite");
        $(".uranus").removeClass("borderWhite");
        $(".neptune").addClass("borderWhite");

        $(".planetsNameDown .sunName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .mercuryName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .venusName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .earthName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .marsName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .jupiterName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .saturnName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .uranusName h1").css({"color":"rgba(128, 128, 128, 0.61)"});
        $(".planetsNameDown .neptuneName h1").css({"color":"#0CF"});

        $(".main .info .mercuryInfo").css({"opacity":"0"});
        $(".main .info .sunInfo").css({"opacity":"0"});
        $(".main .info .venusInfo").css({"opacity":"0"});
        $(".main .info .earthInfo").css({"opacity":"0"});
        $(".main .info .marsInfo").css({"opacity":"0"});
        $(".main .info .jupiterInfo").css({"opacity":"0"});
        $(".main .info .saturnInfo").css({"opacity":"0"});
        $(".main .info .uranusInfo").css({"opacity":"0"});
        $(".main .info .neptuneInfo").css({"opacity":"1"});
    })
});