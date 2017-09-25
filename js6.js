// Задача 1

document.getElementById('input1').onmousemove = function(event) {

    out1.innerHTML = 'координата X курсора мыши: ' + event.offsetX +
        '<br>' + 'координата Y курсора мыши: ' + event.offsetY
}

// Задача 2

document.getElementById('input2').ondblclick = function() {

    input2.style.background = 'url(img/open.png)';
}

// Задача 3

document.getElementById('task3').onclick = function() {

    for (var i = 0; i < 301; i++) {
        out3.innerHTML += '<div class = "sq"></div>';
    }
}
document.getElementById('out3').onmousemove = function(event1) {
    event1.target.style.borderRadius = '100%';
}

// Задача 4

document.onclick = function(event6) {

    if (event6.target.className == 'task4') {

        document.getElementById('out4').style.background = "url(" + event6.target.currentSrc + ")";
        document.getElementById('out4').style.backgroundSize = 'contain';
    }
}

// Задача 5

var down = 0;

document.getElementById('out5').onclick = function() {

    down = down + 100;

    out5.style.marginTop = down + 'px';
}

// Задача 6

var count6 = 0;

document.getElementById('out6').onclick = function(e) {

    count6 += 1;

    if (count6 % 3 == 1) {
        in6.style.left = '95px';
        out6_1.innerHTML = 'Параметр 1';
        console.log(1);
    } else if (count6 % 3 == 2) {
        in6.style.left = '185px';
        out6_1.innerHTML = 'Параметр 2';
        console.log(2);
    } else {
        in6.style.left = '5px';
        out6_1.innerHTML = 'Параметр 0';
        console.log(0)
    };
}