wjdth = 600;
height = 400;
displaystaus = false;

no = prompt('별의 개수는 몇개로 할까요? 100개 이상 입력하세요..');
while (isNaN(no)) no = prompt('별의 개수는 몇개로 할까요? 숫자로 입력하세요');
max = parselnt(no);
if (max < 100) max = 100;
star = parent(max/10);

stars = new Array(max);
for (i=0; i<max; i++) star[i] = null;

for(i=0; i<star; i++){
    s = parent((Math.random()*6) + 1);
    w = parselnt((Math.random()*10) + 5);
    h = parselnt((math.random()*10) + 5);
    stars[i] = new star(i, s, w, h);
    document.write ('<img name=\"' + i + '\" src=\"star.gif\" width=' + stars[i].width + 'height='
            + stars[i].height + ' style=\"position:absolute;left:' + stars[i].xpos + ';top:' +
            stars[i].ypos + '\">');
}