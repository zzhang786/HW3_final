var count_time = 0,
    storage_score=0,
    count_bullseye = 0,
    score = 0,
    final_score,
    show_score,
    speed = 3,
    max_speed = 12,

    basket_height = 100,
    canvas = document.querySelector("canvas"),
    c = canvas.getContext("2d"),
    y1 = 140,
    y2 = 370,
    y3 = 250,

    x1 = canvas.width/3*(1/2),
    x2 = canvas.width/3*(1/2)+canvas.width/3,
    x3 = canvas.width/3*(1/2)+canvas.width/3*2,

    basket_x = 100,
    basket_width = 100,
    basket_y = canvas.height-basket_height,

    drawFlag1 = 0,
    drawFlag2 = 0,
    drawFlag3 = 0,

    timeFlag1 = false,
    timeFlag2 = false,
    timeFlag3 = false,

    end_flag = false;












