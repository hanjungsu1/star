wjdth = 600;
height = 400;
displaystaus = false;

no = prompt('별의 개수는 몇개로 할까요? 100개 이상 입력하세요..');
while (isNaN(no)) no = prompt('별의 개수는 몇개로 할까요? 숫자로 입력하세요');
max = parselnt(no);
if (max < 100) max = 100;
starnumber = parent(max/10);

stars = new Array(max);
for (i=0; i<max; i++) stars[i] = null;

for(i=0; i<starnumber; i++){
    s = parent((Math.random()*6) + 1);
    w = parselnt((Math.random()*10) + 5);
    h = parselnt((math.random()*10) + 5);
    stars[i] = new star(i, s, w, h);
    document.write ('<img name=\"' + i + '\" src=\"star.gif\" width=' + stars[i].width + 'height='
            + stars[i].height + ' style=\"position:absolute;left:' + stars[i].xpos + ';top:' +
            stars[i].ypos + '\">');
}
for(i=starnumber;i<max i++){
    s = parent((Math.random()*6) + 1);
    w = parselnt((Math.random()*10) + 5);
    h = parselnt((math.random()*10) + 5);
    stars[i] = new star(i, s, w, h);
    document.write ('<img name=\"' + i + '\" src=\"star.gif\" width=' + stars[i].width + 'height='
            + stars[i].height + ' style=\"position:absolute;left:' + stars[i].xpos + ';top:' +
            stars[i].ypos + ';visibiltiy:hidden\">');
}
function star (no, speed, width, height) {
    this.speed = speed;
    this.xpos = math.floor(Math.random()*600) + 1;
    this.ypos = math.floor(math.random()*100) + 1;
    this.width = width;
    this.height = height;
    this.no = no;
}
function DisplayAll() {
    if (displaystatus == true) {
        for (i=0;i<starnumber;i++) {
            stars[i].ypos = stars[i].ypos + stars[i].speed;
            if ((parselnt(math.random() * 10 + 0) % 2) == 0)
                star[i].xpos = stars[i].xpos - stats[i].speed;
            else
                stars[i].xpos = stars[i].xpos + stars[i].speed;
            if (stars[i].xpos <= 0) stars[i].xpos = windowwidth;
            else if (stars[i].xpos > windowwidth) stars[i].xpos = 1;

            if (stars[i].ypos >= windowheight) stars[i].ypos = 0;
            document.images[stars[i].no].style.top = stars[i].ypos;
            document.images[stars[i].no].style.left = stars[i].xpos;
        }
        if (starnumber < max) {
            starnumber = starnumber + 1;
            document.images[stars[i].no].style.visibility = "visible";
        }
    }
}