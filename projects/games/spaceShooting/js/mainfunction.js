function startGame(){
    ctx= area.context;
    area.start();
    ship = new Ship(600,300,10);
    // enemy = new Enemy(2,hpp);

    // createEliteA()
    // createEnemy('A')
    // createEliteB()
    // createEnemy('B')
    // createEliteC()
    // createEnemy('C')
    // createEliteD()
    // createEnemy('D')
}
function createEnemy(type) {
   
    let enemy;
    let x = Math.random() * (screenwidth - 400) + 200;
    let y = Math.random() * 100 + 20;
    
    let width = 60;
    let height = 20;
    let speedx = Math.random() * 4 - 2;
    let speedy = 0;
    let time = Math.floor(Math.random() * 100);
    
    let life;
    switch(type) {
        case 'A':
            life = 5 + wave * 2 + wave * 3 + (extra - 1.5) * 10;
            enemy = new EnemyA(x, y, width, height, speedx, speedy, life, time);
            enemyAs.push(enemy);
            break;
        case 'B':
            life = 15 + wave * 2 + wave * 3 + (extra - 1.5) * 10;
            enemy = new EnemyB(x, y, width, height, speedx, speedy, life, time);
            enemyBs.push(enemy);
            break;
        case 'C':
            life = 20 + wave * 2 + wave * 3 + (extra - 1.5) * 10;
            enemy = new EnemyC(x, y, width, height, speedx, speedy, life, time);
            enemyCs.push(enemy);
            break;
        case 'D':
            life = 25 + wave * 2 + wave * 3 + (extra - 1.5) * 10;
            enemy = new EnemyD(x, y, width, height, speedx, speedy, life, time);
            enemyDs.push(enemy);
            break;
        default:
            console.error('Invalid enemy type');
            return;
    }
}

function updateEnemies() {
    updateEnemyType(enemyAs, 'A');
    updateEnemyType(enemyBs, 'B');
    updateEnemyType(enemyCs, 'C');
    updateEnemyType(enemyDs, 'D');
}

function updateEnemyType(enemies, type) {
    let dies = [];
    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        enemy.move();
        enemy.update();

        let tempShoots = shoots;
        for (let u = 0; u < shoots.length; u++) {
            if (enemy.x + enemy.width > shoots[u].x && enemy.x < shoots[u].x && 
                enemy.y + enemy.height > shoots[u].y && enemy.y < shoots[u].y) {
                enemy.life -= damage;
                tempShoots.splice(u, 1);
            }
        }
        shoots = tempShoots;

        if (enemy.life < 0) {
            dies.push(i);
        }

        let cycleLength = type === 'A' ? 100 : 130;
        let fireRate = type === 'A' ? 5 : (type === 'B' ? 8 : (type === 'C' ? 3 : 8));

        if (round % cycleLength < 30 + enemy.time && round % cycleLength > 0 + enemy.time) {
            enemy.speedx = 0;
            if (type === 'D') enemy.speedy = 0;

            if (round % fireRate === (type === 'C' ? 1 : 4)) {
                if (enemy.y > 0 || type === 'A' || type === 'B') {
                    enemy.fire();
                }
            }
        } else if (round % cycleLength === 30 + enemy.time) {
            enemy.speedx = Math.random() * 4 - 2;
            if (type === 'D') enemy.speedy = Math.random() * 4 - 2;
        }
    }

    for (let i = dies.length - 1; i >= 0; i--) {
        enemies.splice(dies[i], 1);
    }
}

function createElite(type) {
    let elite;
    let x = Math.random() * (width - 400) + 200;
    let y = Math.random() * 100 + 20;
    let width = 60;
    let height = 20;
    let speedx = Math.random() * 4 - 2;
    let speedy = 0;
    let time = Math.floor(Math.random() * 100);

    let life;
    switch(type) {
        case 'A':
            life = 25 + wave * 3 + wave * 3 + (extra - 1.5) * 20;
            elite = new EliteA(x, y, width, height, speedx, speedy, life, time);
            eliteAs.push(elite);
            break;
        case 'B':
            life = 25 + wave * 3 + wave * 3 + (extra - 1.5) * 23;
            elite = new EliteB(x, y, width, height, speedx, speedy, life, time);
            eliteBs.push(elite);
            break;
        case 'C':
            life = 35 + wave * 3 + wave * 3 + (extra - 1.5) * 27;
            elite = new EliteC(x, y, width, height, speedx, speedy, life, time);
            eliteCs.push(elite);
            break;
        case 'D':
            life = 45 + wave * 3 + wave * 3 + (extra - 1.5) * 30;
            elite = new EliteD(x, y, width, height, speedx, speedy, life, time);
            eliteDs.push(elite);
            break;
        default:
            console.error('Invalid elite type');
            return;
    }
}

function updateElites() {
    updateEliteType(eliteAs, 'A');
    updateEliteType(eliteBs, 'B');
    updateEliteType(eliteCs, 'C');
    updateEliteType(eliteDs, 'D');
}

function updateEliteType(elites, type) {
    let dies = [];
    for (let i = 0; i < elites.length; i++) {
        let elite = elites[i];
        elite.move();
        elite.update();

        let tempShoots = shoots;
        for (let u = 0; u < shoots.length; u++) {
            if (elite.x + elite.width > shoots[u].x && elite.x < shoots[u].x && 
                elite.y + elite.height > shoots[u].y && elite.y < shoots[u].y) {
                elite.life -= damage;
                tempShoots.splice(u, 1);
            }
        }
        shoots = tempShoots;

        if (elite.life < 0) {
            dies.push(i);
        }

        if (round % 130 < 30 + elite.time && round % 130 > 0 + elite.time) {
            elite.speedx = 0;
            elite.speedy = 0;
            if (round % 5 == 4) {
                elite.fire();
            }
        } else if (round % 130 == 30 + elite.time) {
            elite.speedx = Math.random() * 4 - 2;
            elite.speedy = Math.random() * 4 - 2;
        }
    }

    for (let i = dies.length - 1; i >= 0; i--) {
        elites.splice(dies[i], 1);
    }
}

function createEliteA(){
    eliteA = new EliteA(Math.random()*(width-400)+200, Math.random()*100+20, 60, 20, Math.random()*4-2, 0, 25+wave*3+wave*3+(extra-1.5)*20, Math.floor(Math.random()*100));
    eliteAs.push(eliteA) 
}

function updateEliteA(){
    let dies = []
    for (let i = 0; i < eliteAs.length; i++){
        eliteAs[i].move();
        eliteAs[i].update()
        let tempShoots = shoots;
        for (let u = 0; u < shoots.length; u++){
            if (eliteAs[i].x+eliteAs[i].width>shoots[u].x && eliteAs[i].x<shoots[u].x && eliteAs[i].y+eliteAs[i].height>shoots[u].y && eliteAs[i].y<shoots[u].y){
                eliteAs[i].life -= damage;
                tempShoots.splice(u, 1);
            }
        }
        shoots = tempShoots;
        if (eliteAs[i].life < 0){
            dies.push(i)
        }
        if (round%130 < 30+eliteAs[i].time && round%130 > 0+eliteAs[i].time){
            eliteAs[i].speedx = 0;
            eliteAs[i].speedy = 0;
            if (round%5 == 4){
                eliteAs[i].fire()
            }
        }
        else if (round%130 == 30+eliteAs[i].time){
            eliteAs[i].speedx = Math.random()*4-2;
            eliteAs[i].speedy = Math.random()*4-2;
        }
    }
    for (let i = dies.length - 1; i >= 0; i--){
        eliteAs.splice(dies[i], 1)
    }
}


function createEliteB(){
    eliteB = new EliteB(Math.random()*(width-400)+200,Math.random()*100+20,60,20,Math.random()*4-2,0,25+wave*3+wave*3+(extra-1.5)*20,Math.floor(Math.random()*100));
    eliteBs.push(eliteB) 

}
function updateEliteB(){
    let dies = []
    for (let i = 0; i < eliteBs.length; i++){
        eliteBs[i].move();
        eliteBs[i].update()
        let tempShoots = shoots;
        for (let u = 0; u < shoots.length; u++){
            if (eliteBs[i].x+eliteBs[i].width>shoots[u].x && eliteBs[i].x<shoots[u].x && eliteBs[i].y+eliteBs[i].height>shoots[u].y && eliteBs[i].y<shoots[u].y){
                eliteBs[i].life -= damage;
                tempShoots.splice(u, 1);
            }
        }
        shoots = tempShoots;
        if (eliteBs[i].life < 0){
            dies.push(i)
        }
        if (round%130 < 30+eliteBs[i].time && round%130 > 0+eliteBs[i].time){
            eliteBs[i].speedx = 0;
            eliteBs[i].speedy = 0;
            if (round%5 == 4){
                eliteBs[i].fire()
            }
        }
        else if (round%130 == 30+eliteBs[i].time){
            eliteBs[i].speedx = Math.random()*4-2;
            eliteBs[i].speedy = Math.random()*4-2;
        }
    }
    for (let i = dies.length - 1; i >= 0; i--){
        eliteBs.splice(dies[i], 1)
    }
}

function createEliteC(){
    eliteC = new EliteC(Math.random()*(width-400)+200,Math.random()*100+20,60,20,Math.random()*4-2,0,35+wave*3+wave*3+(extra-1.5)*20,Math.floor(Math.random()*100));
    eliteCs.push(eliteC) 

}
function updateEliteC(){
    let dies = []
    for (let i = 0; i < eliteCs.length; i++){
        eliteCs[i].move();
        eliteCs[i].update()
        let tempShoots = shoots;
        for (let u = 0; u < shoots.length; u++){
            if (eliteCs[i].x+eliteCs[i].width>shoots[u].x && eliteCs[i].x<shoots[u].x && eliteCs[i].y+eliteCs[i].height>shoots[u].y && eliteCs[i].y<shoots[u].y){
                eliteCs[i].life -= damage;
                tempShoots.splice(u, 1);
            }
        }
        shoots = tempShoots;
        if (eliteCs[i].life < 0){
            dies.push(i)
        }
        if (round%130 < 30+eliteCs[i].time && round%130 > 0+eliteCs[i].time){
            eliteCs[i].speedx = 0;
            eliteCs[i].speedy = 0;
            if (round%5 == 4){
                eliteCs[i].fire()
            }
        }
        else if (round%130 == 30+eliteCs[i].time){
            eliteCs[i].speedx = Math.random()*4-2;
            eliteCs[i].speedy = Math.random()*4-2;
        }
    }
    for (let i = dies.length - 1; i >= 0; i--){
        eliteCs.splice(dies[i], 1)
    }
}

function createEliteD(){
    eliteD = new EliteD(Math.random()*(width-400)+200,Math.random()*100+20,60,20,Math.random()*4-2,0,45+wave*3+(extra-1.5)*20,Math.floor(Math.random()*100));
    eliteDs.push(eliteD) 

}
function updateEliteD(){
    let dies = []
    for (let i = 0; i < eliteDs.length; i++){
        eliteDs[i].move();
        eliteDs[i].update()
        let tempShoots = shoots;
        for (let u = 0; u < shoots.length; u++){
            if (eliteDs[i].x+eliteDs[i].width>shoots[u].x && eliteDs[i].x<shoots[u].x && eliteDs[i].y+eliteDs[i].height>shoots[u].y && eliteDs[i].y<shoots[u].y){
                eliteDs[i].life -= damage;
                tempShoots.splice(u, 1);
            }
        }
        shoots = tempShoots;
        if (eliteDs[i].life < 0){
            dies.push(i)
        }
        if (round%130 < 30+eliteDs[i].time && round%130 > 0+eliteDs[i].time){
            eliteDs[i].speedx = 0;
            eliteDs[i].speedy = 0;
            if (round%5 == 4){
                eliteDs[i].fire()
            }
        }
        else if (round%130 == 30+eliteDs[i].time){
            eliteDs[i].speedx = Math.random()*4-2;
            eliteDs[i].speedy = Math.random()*4-2;
        }
    }
    for (let i = dies.length - 1; i >= 0; i--){
        eliteDs.splice(dies[i], 1)
    }
}



    
    
function bulletHitShip(){
    let tempbullets = bullets;
    for (let i =0;i<bullets.length;i++){
        if (ship.x+ship.d>bullets[i].x &&ship.y+ship.d>bullets[i].y && ship.x<bullets[i].x +bullets[i].w&& ship.y<bullets[i].y+bullets[i].h){
            if(buff3==0){
                ship.hp-=1;
            }else{
                shieldExplode()
                buff3 -=1;

            }
            tempbullets.splice(i,1);
        }
    }
    bullets = tempbullets;
    let tempmissles = missles;
    for (let i =0;i<missles.length;i++){
        if (ship.x+ship.d>missles[i].x &&ship.y+ship.d>missles[i].y && ship.x<missles[i].x +missles[i].d&& ship.y<missles[i].y+missles[i].d){
            if(buff3==0){
                ship.hp-=1;
            }else{
                shieldExplode()
                buff3 -=1;
            }
        }
    }
    missles = tempmissles;
    if (ship.hp<0){
        endGame();
    }
}
function shieldExplode(){
    ctx = area.context;
    ctx.drawImage(shieldburstImg,ship.x-295,ship.y-500,600,800);
    let tempbullets = bullets;
    for (let i =0;i<bullets.length;i++){
        if (Math.pow(Math.abs(bullets[i].x-ship.x),2)+Math.pow(Math.abs(bullets[i].y-ship.y),2)<Math.pow(400,2)){
            tempbullets.splice(i,1);
        }
    }
    bullets = tempbullets;
}


function moveAllBullets(){
    for (let i = 0;i<bullets.length;i++){
        bullets[i].move()
        bullets[i].update()
    }
    for (let i = 0;i<missles.length;i++){
        missles[i].move()
        missles[i].update()
        
    }
    
}
function fire(){
    let freq = 5;
    if (buff2){
        freq =2;
    }
    if (round%freq ==1){
        shoot = new Shoot(ship.x,ship.y,0,-15);
        shoots.push(shoot)
        if (buff1){
            shoot = new Shoot(ship.x-10,ship.y,-5,-15);
            shoots.push(shoot)
            shoot = new Shoot(ship.x+10,ship.y,5,-15);
            shoots.push(shoot)
        }
    }
    for (let i =0;i<shoots.length;i++){
        shoots[i].move()
        shoots[i].update()
    }
    if (shoots.length>200){
        shoots.shift()
    }
    
    if (helper>0){
        ctx.drawImage(helperImg,ship.x-38,ship.y+5,20,20)
    }
    if (helper>2){
        ctx.drawImage(helperImg,ship.x-58,ship.y+15,20,20)

    }
    if (helper>1){
        ctx.drawImage(helperImg,ship.x+28,ship.y+5,20,20)

    }
    if (helper>3){
        ctx.drawImage(helperImg,ship.x+48,ship.y+15,20,20)

    }
    if (helper>4){
        ctx.drawImage(helperImg,ship.x+3,ship.y+40,20,20)

    }
    if (helper>5){
        ctx.drawImage(helperImg,ship.x-18,ship.y+40,20,20)

    }
    if (helper>6){
        ctx.drawImage(helperImg,ship.x+23,ship.y+40,20,20)

    }
    if (helper>7){
        ctx.drawImage(helperImg,ship.x-38,ship.y+40,20,20)

    }
    if (round%(12-Math.floor(helper/2))==0){
        if (helper>0){
            shoot = new Shoot(ship.x-30,ship.y+10,0.5,-15,2);
            shoots.push(shoot)
        }
        if (helper>1){
            shoot = new Shoot(ship.x+30,ship.y+10,-0.5,-15,2);
            shoots.push(shoot)
        }
        if (helper>2){
            shoot = new Shoot(ship.x-50,ship.y+20,1,-15,2);
            shoots.push(shoot)
        }
        if (helper>3){
            shoot = new Shoot(ship.x+50,ship.y+20,-1,-15,2);
            shoots.push(shoot)
        }
        if (helper>4){
            shoot = new Shoot(ship.x-10,ship.y+40,0,-15,2);
            shoots.push(shoot)
        }
        if (helper>5){
            shoot = new Shoot(ship.x+10,ship.y+40,0,-15,2);
            shoots.push(shoot)
        }
        if (helper>6){
            shoot = new Shoot(ship.x-30,ship.y+40,0.5,-15,2);
            shoots.push(shoot)
        }
        if (helper>7){
            shoot = new Shoot(ship.x+30,ship.y+40,-0.5,-15,2);
            shoots.push(shoot)
        }
    }
}
function boomexplode(){
    let tempbooms = booms;
    for (let i = 0;i<booms.length;i++){
        booms[i].movebullet()
        if (booms[i].time<round+30){
            booms[i].bx = booms[i].x+booms[i].sizex/2;
            if (booms[i].by<0){booms[i].by = 0}
            
            booms[i].bs = (booms[i].y+booms[i].sizey/2)/50;
            booms[i].movebullet()
            booms[i].update()
            ctx.fillStyle = "red"
            // ctx.fillRect(booms[i].x,booms[i].y,booms[i].sizex,booms[i].sizey)
            if (booms[i].by >booms[i].y+booms[i].sizey/2){
                tempbooms.splice(i,0);
            }
        }

        if(booms[i].time<round){
            if(booms[i].x+booms[i].sizex>ship.x && booms[i].x<ship.x+ship.d && booms[i].y+booms[i].sizey>ship.y && booms[i].y<ship.y+ship.d){
                if(buff3==0){
                    ship.hp-=1;

                }else{
                    buff3 -=1;
                    shieldExplode();
                }
            }

            tempbooms.splice(i,1);
        }
        booms[i].update()
    }
    booms = tempbooms;
}
function buffcreate(){
    
    if (round%bufffreq==3){
        buffs = []
        buff = new Buff(Math.random()*(screenwidth-500)+250,Math.random()*300+250,Math.trunc(Math.random()*3),round)
        buffs.push(buff)
    }
    for (let i = 0;i<buffs.length;i++){
        buffs[i].update()
        buffs[i].get()
    }
}


function enemymove(){
    if (wave ==0 && wave0 ==0 &&wave!=maxwave){
        
        createEnemy('A')
        createEnemy('A')
        createEnemy('A')
        wave0=1;
    }
    if (wave ==1 && wave1 ==0&&wave!=maxwave){
        createEnemy('A')
        createEnemy('A')
        createEnemy('B')
        createEnemy('C')
        createEnemy('B')
        wave1=1;
    }
    if (wave ==2 && wave2 ==0&&wave!=maxwave){
        createEnemy('A')
        createEnemy('B')
        createEnemy('C')
        createEnemy('D')
        createEnemy('A')
        createEnemy('B')
        createEnemy('C')
        createEnemy('D')
        wave2=1;
    }
    if (wave ==3 && wave3 ==0&&wave!=maxwave){
        createEnemy('B')
        createEnemy('B')
        createEnemy('C')
        createEnemy('C')
        createEnemy('A')
        createEnemy('D')
        createEnemy('D')
        wave3=1;
    }
    if (wave ==4 && wave4 ==0&&wave!=maxwave){
        createEnemy('D')
        createEnemy('D')
        createEnemy('D')
        createEnemy('D')
        createEnemy('C')
        createEnemy('C')
        createEnemy('C')
        createEnemy('C')
        wave4=1;
    }
    if (wave ==5 && wave5 ==0&&wave!=maxwave){
        createEliteA()
        createEliteA()
        wave5=1;
    }
    if (wave ==6 && wave6 ==0&&wave!=maxwave){
        createEliteB()
        createEliteB()
        wave6=1;
    }
    if (wave ==7 && wave7 ==0&&wave!=maxwave){
        createEliteC()
        createEliteC()
        wave7=1;
    }
    if (wave ==8 && wave8 ==0&&wave!=maxwave){
        createEliteD()
        createEliteD()
        wave8=1;
    }
    if (wave ==9 && wave9 ==0&&wave!=maxwave){
        createEliteA()
        createEliteB()
        createEliteC()
        createEliteD()
        wave9=1;
    }
    if (wave ==10 && wave10 ==0&&wave!=maxwave){
        createEliteB()
        createEliteB()
        createEliteC()
        createEliteD()
        createEnemy('C')
        createEnemy('C')
        createEnemy('C')
        createEnemy('C')
        createEnemy('C')
        createEnemy('C')
        wave10=1;
    }
    if (wave ==10 && wave10 ==0&&wave!=maxwave){
        createEliteC()
        createEliteC()
        createEnemy('C')
        createEnemy('C')
        createEnemy('C')
        createEnemy('C')
        wave10=1;
    }
    if (wave ==11 && wave11 ==0&&wave!=maxwave){
        createEliteA()
        createEliteA()
        createEliteA()
        createEliteA()
        createEliteA()
        createEliteA()
        createEliteA()
        createEliteA()
        wave11=1;
    }
    if (wave ==12 && wave12 ==0&&wave!=maxwave){
        createEliteC()
        createEliteC()
        createEliteC()
        createEliteC()
        createEliteB()
        createEliteB()
        createEliteD()
        createEliteD()
        wave12=1;
    }
    if (wave ==13 && wave13 ==0&&wave!=maxwave){
        createEliteD()
        createEliteD()
        createEliteD()
        createEliteD()
        wave13=1;
    }
    if (wave ==14 && wave14 ==0&&wave!=maxwave){
        createEliteA();
        createEliteA();
        createEliteB();
        createEliteB();
        createEliteC();
        createEliteC();
        createEliteD();
        createEliteD();
        createEnemy('A')
        createEnemy('B')
        createEnemy('C')
        createEnemy('D')
        createEnemy('A')
        createEnemy('B')
        createEnemy('C')
        createEnemy('D')
        wave14=1;
    }
    if (wave ==15 && wave15 ==0&&wave!=maxwave){
        for (let i =0;i<Math.random()*extra+1;i++){
            createEliteA();
        }
        for (let i =0;i<Math.random()*extra+1;i++){
            createEliteB();
        }
        for (let i =0;i<Math.random()*extra+1;i++){
            createEliteC();
        }
        for (let i =0;i<Math.random()*extra+1;i++){
            createEliteD();
        }
        for (let i =0;i<Math.random()*extra+1;i++){
            createEnemy('A')
        }
        for (let i =0;i<Math.random()*extra+1;i++){
            createEnemy('B')
        }
        for (let i =0;i<Math.random()*extra+1;i++){
            createEnemy('C')
        }
        for (let i =0;i<Math.random()*extra+1;i++){
            createEnemy('D')
        }
        
        
        wave15=1;
    }
    // if (wave ==maxwave){
    //     endGame();
        // enemy.move()
        // enemy.update()
        // enemy.life()
        // if (enemy.y>=-400){
        //     for (let i = 0;i<shoots.length;i++){
        //         shoots[i].aim()
        //     }
        // }
        // switch (tp){
        //     case 0:
        //         enemy.createA()
        //         break;
        //     case 1:
        //         enemy.createB()
        //         break;
        //     case 2:
        //         enemy.createC()
        //         break;
        //     case 3:
        //         enemy.createD()
        //         break;
        //     case 4:
        //         enemy.createE()
        //         break;
        //     case 5:
        //         enemy.createF()
        //         break;
        // }
    // }
    updateEnemies();
    updateEliteA()
    updateEliteB()
    updateEliteC()
    updateEliteD()
    
}
function up1(){
    ship.sx+=1;
    ship.sy+=1;
}
function up2(){
    ship.maxhp*=1.5;
    ship.hp = ship.maxhp;
    hprecove /=2;
}
function up3(){
    damage +=2;
}
function up4(){
    helper+=1
}
function up5(){
    bufffreq-=bufffreq*0.4;
    bufftime+=bufftime*0.5;
    bufflevel +=1;
}

function upgrade(){
    
    if (enemyAs.length+enemyBs.length+enemyCs.length+enemyDs.length+eliteAs.length+eliteBs.length+eliteCs.length+eliteDs.length<1){
        // bullets = []
        if (wave<maxwave){
            if (wave ==maxwave-1){
                endGame();
            }
            if (slice ==0){
                slice = round+300;
            }
            if (slice<round){
                slice =0
                wave+=1;
                if (wave>14){wave=15;wave15=0;extra+=0.25}
                if (ship.x<screenwidth/5){
                    up1();
                }
                if (ship.x>screenwidth/5 && ship.x<screenwidth/5*2){
                    up2();
                }
                if (ship.x>screenwidth/5*2 && ship.x<screenwidth/5*3){
                    up3();
                }
                if (ship.x>screenwidth/5*3 && ship.x<screenwidth/5*4){
                    up4();
                }
                if (ship.x>screenwidth/5*4){
                    up5();
                }
                booms = [];
                bullets = [];
                missles = [];
                shoots = [];
                buffs = [];
            }

            ctx.fillStyle = '#f0f0f0';
            ctx.fillRect(0, 0, screenwidth, 50);
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 50, screenwidth*((300-(slice-round))/300), 20);

            // Draw navbar text (placeholder)
            ctx.fillStyle = 'black';
            ctx.font = '18px Arial';
            ctx.textAlign = 'left';
            ctx.fillText('Max-HP:'+ ship.maxhp+'     HP-recover: 1/'+hprecove/20+'s     Damage:'+ damage+ '     # of Helper: ' + helper + '     Buff-level: ' + bufflevel, 10, 30);

            // Draw pause button
            ctx.fillStyle = 'gray';
            ctx.fillRect(screenwidth - 40, 10, 30, 30);
            ctx.fillStyle = 'white';
            ctx.fillRect(screenwidth - 35, 15, 8, 20);
            ctx.fillRect(screenwidth - 23, 15, 8, 20);


            ctx.font = '40px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = "red"
            ctx.fillRect(0,screenheight/2,screenwidth/5,screenheight/2);
            ctx.fillStyle = "blue"
            ctx.fillRect(screenwidth/5,screenheight/2,screenwidth/5,screenheight/2);
            ctx.fillStyle = "yellow"
            ctx.fillRect(screenwidth/5*2,screenheight/2,screenwidth/5,screenheight/2);
            ctx.fillStyle = "green"
            ctx.fillRect(screenwidth/5*3,screenheight/2,screenwidth/5,screenheight/2);
            ctx.fillStyle = "purple"
            ctx.fillRect(screenwidth/5*4,screenheight/2,screenwidth/5,screenheight/2);
            ctx.fillStyle = "black"
            ctx.fillText("Speed +",screenwidth/10,screenheight*2/3)
            ctx.fillText("HP +",screenwidth/10*3,screenheight*2/3)
            ctx.fillText("Damage +",screenwidth/10*5,screenheight*2/3)
            ctx.fillText("Helper +",screenwidth/10*7,screenheight*2/3)
            ctx.fillText("Buff +",screenwidth/10*9,screenheight*2/3)
        }
    }
}

function updateBar(){
    ctx.fillStyle = "gray"
    ctx.fillRect(screenwidth-50,100,10,screenheight-250)
    ctx.fillStyle = "blue"
    ctx.fillRect(screenwidth-50,screenheight-150,10,-(wave+1)/maxwave*(screenheight-250))
    ctx.drawImage(shipImg,screenwidth-60,screenheight-150-(wave+1)/maxwave*(screenheight-250)-30,30,55)
}

function endGame() {
    location.reload();
    // area.stop();
    // showEndGameMenu();
    // document.getElementById('score').innerHTML = "You beat 10 waves";
}

