function EnemyA(x,y,width,height,speedx,speedy,life,time){
    this.x = x;
    this.y = -100;
    this.width = width;
    this.height = height;
    this.speedx = speedx;
    this.speedy = speedy;
    this.life = life;
    this.maxlife = life;
    this.time = time;
    this.update = function(){
        ctx=area.context;
        ctx.fillStyle = "red"
        //  ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(enemyAImg,this.x-2,this.y-45,65,100)
        ctx.fillStyle = "gray"
        ctx.fillRect(this.x,this.y+20,60,5)
        ctx.fillStyle = "green"

        ctx.fillRect(this.x,this.y+20,60/this.maxlife*this.life,5)

    }
    this.move = function(){
        this.x+=this.speedx;
        if (this.y<y){
            this.y+=1;
        }
        if (this.x+this.width*2>screenwidth){
            this.x=screenwidth-1-this.width*2;
            this.speedx*=-1
        }
        if (this.x<this.width){
            this.x=this.width+1;
            this.speedx*=-1
        }

    }
    this.fire = function(){
        bullet = new Bullet(this.x+25,this.y,10,10,0+this.speedx,5)
        bullets.push(bullet)
    }
}

function EnemyB(x,y,width,height,speedx,speedy,life,time){
    this.x = x;
    this.y = -100;
    this.width = width;
    this.height = height;
    this.speedx = speedx;
    this.speedy = speedy;
    this.life = life;
    this.time = time;
    this.maxlife = life;

    this.update = function(){
        ctx=area.context;
        ctx.fillStyle = "red"
        //  ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(enemyBImg,this.x-2,this.y-45,65,100)
        ctx.fillStyle = "gray"
        ctx.fillRect(this.x,this.y+20,60,5)
        ctx.fillStyle = "green"

        ctx.fillRect(this.x,this.y+20,60/this.maxlife*this.life,5)

    }
    this.move = function(){
        this.x+=this.speedx;
        if (this.y<y){
            this.y+=1;
        }
        if (this.x+this.width*2>screenwidth){
            this.x=screenwidth-1-this.width*2;
            this.speedx*=-1
        }
        if (this.x<this.width){
            this.x=this.width+1;
            this.speedx*=-1
        }

    }
    this.fire = function(){
        bullet = new Bullet(this.x+25,this.y,10,10,-1.5+this.speedx,5,2)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,10,10,1.5+this.speedx,5,2)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,10,10,this.speedx,5,2)
        bullets.push(bullet)
        
    }
}

function EnemyC(x,y,width,height,speedx,speedy,life,time){
    this.x = x;
    this.y = -100;
    this.width = width;
    this.height = height;
    this.speedx = speedx;
    this.speedy = speedy;
    this.life = life;
    this.time = time;
    this.maxlife = life;

    this.update = function(){
        ctx=area.context;
        ctx.fillStyle = "red"
        //  ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(enemyCImg,this.x-2,this.y-45,65,100)
        ctx.fillStyle = "gray"
        ctx.fillRect(this.x,this.y+20,60,5)
        ctx.fillStyle = "green"

        ctx.fillRect(this.x,this.y+20,60/this.maxlife*this.life,5)

    }
    this.move = function(){
        this.x+=this.speedx;
        if (this.y<y){
            this.y+=1;
        }
        if (this.x+this.width*2>screenwidth){
            this.x=screenwidth-1-this.width*2;
            this.speedx*=-1
        }
        if (this.x<this.width){
            this.x=this.width+1;
            this.speedx*=-1
        }

    }
    this.fire = function(){
        let disx = ship.x-(this.x+25)
        let disy = ship.y-(this.y)
        let unit = 12/(Math.abs(disx)+Math.abs(disy))
        let bx = unit*disx
        let by = unit*disy
        bullet = new Bullet(this.x+25,this.y,10,10,bx,by,6)
        bullets.push(bullet)

        
    }
}

function EnemyD(x,y,width,height,speedx,speedy,life,time){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedx = speedx;
    this.speedy = speedy;
    this.life = life;
    this.time = time;
    this.maxlife = life;

    this.update = function(){
        ctx=area.context;
        ctx.fillStyle = "red"
        //  ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(enemyDImg,this.x-2,this.y-45,65,100)
        ctx.fillStyle = "gray"
        ctx.fillRect(this.x,this.y+20,60,5)
        ctx.fillStyle = "green"

        ctx.fillRect(this.x,this.y+20,60/this.maxlife*this.life,5)

    }
    this.move = function(){
        this.x+=this.speedx;
        this.y+=this.speedy;
        if (this.x+this.width*2>screenwidth){
            this.x=screenwidth-1-this.width*2;
            this.speedx*=-1
        }
        if (this.x<this.width){
            this.x=this.width+1;
            this.speedx*=-1
        }
        if (this.y>400){this.y=399;this.speedy*=-1}
        if (this.y<0){this.y=1;this.speedy*=-1}

    }
    this.fire = function(){
        bullet = new Bullet(this.x+25,this.y,5,5,10,0,8)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,5,5,5,5,8)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,5,5,0,10,8)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,5,5,-5,5,8)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,5,5,-10,0,8)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,5,5,-5,-5,8)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,5,5,0,-10,8)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,5,5,5,-5,8)
        bullets.push(bullet)
    }
}

function EliteA(x,y,width,height,speedx,speedy,life,time){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedx = speedx;
    this.speedy = speedy;
    this.life = life;
    this.time = time;
    this.maxlife = life;

    this.update = function(){
        ctx=area.context;
        ctx.fillStyle = "red"
        //  ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(eliteAImg,this.x-2,this.y-45,65,100)
        ctx.fillStyle = "gray"
        ctx.fillRect(this.x,this.y+20,60,5)
        ctx.fillStyle = "green"

        ctx.fillRect(this.x,this.y+20,60/this.maxlife*this.life,5)

    }
    this.move = function(){
        this.x+=this.speedx;
        this.y+=this.speedy;
        if (this.x+this.width*2>screenwidth){
            this.x=screenwidth-1-this.width*2;
            this.speedx*=-1
        }
        if (this.x<this.width){
            this.x=this.width+1;
            this.speedx*=-1
        }
        if (this.y>400){this.y=399;this.speedy*=-1}
        if (this.y<0){this.y=1;this.speedy*=-1}

    }
    this.fire = function(){
        bullet = new Bullet(this.x+30,this.y,5,20,0,10,5)
        bullets.push(bullet)
        bullet = new Bullet(this.x+10,this.y-10,5,20,0,10,5)
        bullets.push(bullet)
        bullet = new Bullet(this.x+50,this.y-10,5,20,0,10,5)
        bullets.push(bullet)
        
    }
}

function EliteB(x,y,width,height,speedx,speedy,life,time){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedx = speedx;
    this.speedy = speedy;
    this.life = life;
    this.time = time;
    this.maxlife = life;

    this.update = function(){
        ctx=area.context;
        ctx.fillStyle = "red"
        //  ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(eliteBImg,this.x-2,this.y-45,65,100)
        ctx.fillStyle = "gray"
        ctx.fillRect(this.x,this.y+20,60,5)
        ctx.fillStyle = "green"

        ctx.fillRect(this.x,this.y+20,60/this.maxlife*this.life,5)

    }
    this.move = function(){
        this.x+=this.speedx;
        this.y+=this.speedy;
        if (this.x+this.width*2>screenwidth){
            this.x=screenwidth-1-this.width*2;
            this.speedx*=-1
        }
        if (this.x<this.width){
            this.x=this.width+1;
            this.speedx*=-1
        }
        if (this.y>400){this.y=399;this.speedy*=-1}
        if (this.y<0){this.y=1;this.speedy*=-1}

    }
    this.fire = function(){
        bullet = new Bullet(this.x+30,this.y,15,10,0,1,3,0,0.5)
        bullets.push(bullet)
        bullet = new Bullet(this.x,this.y,15,10,-1,1,3,-0.1,0.5)
        bullets.push(bullet)
        bullet = new Bullet(this.x+60,this.y,15,10,1,1,3,0.1,0.5)
        bullets.push(bullet)
        bullet = new Bullet(this.x,this.y,15,10,-3,1,3,-0.2,0.5)
        bullets.push(bullet)
        bullet = new Bullet(this.x+60,this.y,15,10,3,1,3,0.2,0.5)
        bullets.push(bullet)
        
    }
}

function EliteC(x,y,width,height,speedx,speedy,life,time){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedx = speedx;
    this.speedy = speedy;
    this.life = life;
    this.time = time;
    this.maxlife = life;

    this.update = function(){
        ctx=area.context;
        ctx.fillStyle = "red"
        //  ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(eliteCImg,this.x-2,this.y-45,65,100)
        ctx.fillStyle = "gray"
        ctx.fillRect(this.x,this.y+20,60,5)
        ctx.fillStyle = "green"

        ctx.fillRect(this.x,this.y+20,60/this.maxlife*this.life,5)

    }
    this.move = function(){
        this.x+=this.speedx;
        this.y+=this.speedy;
        if (this.x+this.width*2>screenwidth){
            this.x=screenwidth-1-this.width*2;
            this.speedx*=-1
        }
        if (this.x<this.width){
            this.x=this.width+1;
            this.speedx*=-1
        }
        if (this.y>400){this.y=399;this.speedy*=-1}
        if (this.y<0){this.y=1;this.speedy*=-1}

    }
    this.fire = function(){
        let disx = ship.x-(this.x+25)
        let disy = ship.y-(this.y)
        let unit = 20/(Math.abs(disx)+Math.abs(disy))
        let bx = unit*disx
        let by = unit*disy
        bullet = new Bullet(this.x+25,this.y,10,10,bx,by,6)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,10,10,bx*1.2,by,6)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,10,10,bx*0.8,by,6)
        bullets.push(bullet)
        
    }
}

function EliteD(x,y,width,height,speedx,speedy,life,time){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedx = speedx;
    this.speedy = speedy;
    this.life = life;
    this.time = time;
    this.maxlife = life;

    this.update = function(){
        ctx=area.context;
        ctx.fillStyle = "red"
        //  ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(eliteDImg,this.x-2,this.y-45,65,100)
        ctx.fillStyle = "gray"
        ctx.fillRect(this.x,this.y+20,60,5)
        ctx.fillStyle = "green"

        ctx.fillRect(this.x,this.y+20,60/this.maxlife*this.life,5)

    }
    this.move = function(){
        this.x+=this.speedx;
        this.y+=this.speedy;
        if (this.x+this.width*2>screenwidth){
            this.x=screenwidth-1-this.width*2;
            this.speedx*=-1
        }
        if (this.x<this.width){
            this.x=this.width+1;
            this.speedx*=-1
        }
        if (this.y>400){this.y=399;this.speedy*=-1}
        if (this.y<0){this.y=1;this.speedy*=-1}

    }
    this.fire = function(){
        bullet = new Bullet(this.x+25,this.y,15,10,10,0,4,-0.2,0.2)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,15,10,5,5,4,-0.1,0.2)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,15,10,0,10,4,0,0.2)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,15,10,-5,5,4,0.1,0.2)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,15,10,-10,0,4,0.2,0.2)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,15,10,-5,-5,4,0.1,0.4)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,15,10,0,-10,4,0,0.8)
        bullets.push(bullet)
        bullet = new Bullet(this.x+25,this.y,15,10,5,-5,4,-0.1,0.4)
        bullets.push(bullet)
        
    }
}

function Buff(x,y,type,time){
    this.x = x;
    this.y = y;
    this.type = type;
    this.time = time+bufftime;
    this.update = function(){
        if (this.time<round){
            buff1 = false
            buff2 = false
        }
        if (this.type ==0){
            ctx.fillStyle = "gold"
            ctx.fillRect(this.x,this.y,50,50)
            ctx.drawImage(buff1Img,this.x+5,this.y-10,40,75)
        }
        if (this.type ==1){
            ctx.fillStyle = "gold";
            ctx.fillRect(this.x,this.y,50,50)
            ctx.drawImage(buff2Img,this.x+8,this.y-10,35,70)
        }
        if (this.type ==2){
            ctx.fillStyle = "gold";
            // ctx.fillRect(this.x,this.y,50,50)
            ctx.drawImage(buff3Img,this.x+2,this.y-10,48,70)
        }
        
    }
    this.get = function(){
        if (ship.x+ship.d*2>this.x &&ship.y+ship.d*2>this.y && ship.x<this.x +50&& ship.y<this.y+50){
            buffs = []
            if (this.type ==2){
                buff3 +=1;
            }
            if (this.type ==1){
                buff2 =true;
            }
            if (this.type ==0){
                buff1 = true;
            }
        }
    }
}
function Enemy(x,hp){
    ctx = area.context;
    this.x = x;
    this.hp = hp;
    this.s = 0.6;
    this.y = -600;
    this.update = function(){
        if (this.y>=-400){
            ctx.drawImage(enemyImg,180+this.x,this.y)
        }
        else{
            ctx.drawImage(supEnemyImg,175+this.x,this.y)
        }
    }
    this.move = function(){
        if (this.x>200||this.x<-200){
            this.s*=-1
        }
        if (this.y<-400){
            this.y+=1;
        }
        else{
        this.x+=this.s;
        }
    }
    this.life = function(){
        ctx.fillStyle = "gray"
        ctx.fillRect(380+this.x,this.y+420,570,20);
        ctx.fillStyle = "red"
        ctx.fillRect(380+this.x,this.y+420,570/hpp*this.hp,20);
        if (this.hp<0){
            // round = 2000
            // while (true){
            // let newtp = Math.trunc(Math.random()*6);
            // if (newtp!=tp){tp = newtp;break}
            // }
            tp+=1
            if(tp>5){
                alert("you win!")
            }
            switch (tp){
                case 0:
                    this.hp = 200+maxwave*80;
                    hpp = 200+maxwave*80;
                    break;
                case 1:
                    this.hp = 300+maxwave*90;
                    hpp = 300+maxwave*90;
                    break;
                case 2:
                    this.hp = 100+maxwave*80;
                    hpp = 100+maxwave*80;
                    break;
                case 3:
                    this.hp = 200+maxwave*60;
                    hpp = 200+maxwave*60;
                    break;
                case 4:
                    this.hp = 250+maxwave*70;
                    hpp = 250+maxwave*70;
                    break;
                case 5:
                    this.hp = 150+maxwave*75;
                    hpp = 150+maxwave*75;
                    break;
            }
            bullets=[];missles=[];shoots = [];booms = []
        }
    }
    this.createA = function(){
        // bullet = new Bullet(Math.random()*1170+100,0,10,Math.random()*10-5,3)
        if (round %(4-difficult)==0){
        bullet = new Bullet(Math.random()*90+340+this.x,this.y+560,10,10,Math.random()*15-5,Math.random()*8-2)
        bullets.push(bullet)
        bullet = new Bullet(Math.random()*90+875+this.x,this.y+560,10,10,Math.random()*15-5,Math.random()*8-2)
        bullets.push(bullet)
        }
    },
    this.createB = function(){
        if (round%(7-difficult)==0){
            if (round%1200<400){
                bullet = new Bullet(Math.random()*1170+100,0,10,10,0,1,1,0,0.3)
                bullets.push(bullet)
            }
            if (round%1200>400&&round%1200<800){
                bullet = new Bullet(0,Math.random()*670+100,10,10,1,0,1,0.2,0)
                bullets.push(bullet)
            }
            if (round%1200>800){
                bullet = new Bullet(1380,Math.random()*670+100,10,10,-1,0,1,-0.2,0)
                bullets.push(bullet)
            }
        }
    },
    this.createC = function(){
        let rand = Math.floor((Math.random()*20))
        if (rand == 2){
            missle = new Missle(Math.random()*90+340+this.x,this.y+560,5,(Math.random()*5+2))
            missles.push(missle)
        }
        if (rand == 3){
            missle = new Missle(Math.random()*90+875+this.x,this.y+560,5,(Math.random()*5+2))
            missles.push(missle)
        }
    },
    this.createD = function(){
        if (round%(20-difficult*3) == 3){
            if (round%400>100){
                let disx = ship.x-(this.x+220)
                let disy = ship.y-100
                let unit = 12/(Math.abs(disx)+Math.abs(disy))
                let speedx = unit*disx
                let speedy = unit*disy
                bullet = new Bullet(this.x+220,this.y+500,10,10,speedx,speedy)
                bullets.push(bullet)
                bullet = new Bullet(this.x+220,this.y+500,10,10,speedx+1,speedy)
                bullets.push(bullet)
                bullet = new Bullet(this.x+220,this.y+500,10,10,speedx-1,speedy)
                bullets.push(bullet)
            }
            if (round%400<300){
                let disx2 = ship.x-(this.x+1090)
                let disy2 = ship.y-100
                let unit2 = 12/(Math.abs(disx2)+Math.abs(disy2))
                let speedx2 = unit2*disx2
                let speedy2 = unit2*disy2
                bullet = new Bullet(this.x+1075,this.y+500,10,10,speedx2,speedy2)
                bullets.push(bullet)
                bullet = new Bullet(this.x+1075,this.y+500,10,10,speedx2-1,speedy2)
                bullets.push(bullet)
                bullet = new Bullet(this.x+1075,this.y+500,10,10,speedx2+1,speedy2)
                bullets.push(bullet)
            }
        }

    },
    this.createE = function(){
        if(round%50==0){
            for (let i = 0;i<41;i++){
                bullet = new Bullet(690+this.x,this.y+500,10,10,-10+i/2,(-Math.abs(20-i)+40)/15)
                bullets.push(bullet)
                bullet = new Bullet(690+this.x+50,this.y+500,10,10,-10+i/2,(-Math.abs(20-i)+40)/15)
                bullets.push(bullet)
            }
        }
    },
    this.createF = function(){
        if (round%12 ==11){
            // boom = new Boom(Math.random()*700,Math.random()*200+200,440,200,round)
            boom = new Boom(ship.x-220+Math.random()*400-200,ship.y-100+Math.random()*200-100,440,200,round)
            booms.push(boom)

        }
    }

}
function Ship(x,y,d,sx=5,sy=5,hp = 10,maxhp=10){
    this.x = x;
    this.y = y;
    this.d = d;
    this.speedX = 0;
    this.speedY = 0;
    this.sx = sx;
    this.sy = sy;
    this.hp = hp;
    this.maxhp = maxhp;
    this.update = function(){
        ctx = area.context;
        ctx.fillStyle = "red"
        if (round%hprecove==0&&this.hp<this.maxhp){
            this.hp+=1
        }
        if (buff3!=0){
            for (let i =0;i<buff3;i++){
                
            ctx.drawImage(supshipImg,this.x-39,this.y-52,85,120);
            }   

        }
        else{
            ctx.drawImage(shipImg,this.x-19,this.y-35);
        }
        ctx.fillStyle = "gray"
        ctx.fillRect(this.x-21,this.y+30,50,5)
        ctx.fillStyle = "green"
        ctx.fillRect(this.x-21,this.y+30,50/this.maxhp*this.hp,5);
        
    }
    this.move = function(){
        this.speedX = 0;
        this.speedY = 0;
        if (area.keys && (area.keys[37]||area.keys[65]) && this.x>25) {this.speedX = -this.sx; }
        if (area.keys && (area.keys[39]||area.keys[68]) && this.x<screenwidth-40) {this.speedX = this.sx; }
        if (area.keys && (area.keys[38]||area.keys[87]) && this.y>200) {this.speedY = -this.sy; }
        if (area.keys && (area.keys[40]||area.keys[83]) && this.y<screenheight-50) {this.speedY = this.sy; }
        this.x+=this.speedX;
        this.y+=this.speedY;
    }
    
}      
function Boom(x,y,sizex,sizey,time){
    this.x = x;
    this.y = y;
    this.sizex = sizex;
    this.sizey = sizey;
    this.time = time+75;
    this.bx = enemy.x+630
    this.by = 80;
    this.bs = -5;
    this.update = function(){
        ctx.fillStyle = "red";
        // ctx.fillRect(this.bx,this.by,20,20)
        if (this.bs<0){
        ctx.drawImage(nucupImg,this.bx-130,this.by-200,300,500)
        }
        if (this.bs>0){
        ctx.drawImage(nucdownImg,this.bx-145,this.by-300,300,500)
        }
        ctx.drawImage(warningImg,this.x-280,this.y-605)
        if (this.time<round){
            ctx.drawImage(explodeImg,this.x-120,this.y-200,600,600)

        }
    }
    this.movebullet = function(){
        this.by+=this.bs
    }
}

function Shoot(x,y,sx,sy,type =3){
    this.x = x;
    this.y = y;
    this.sx = sx;
    this.sy = sy;
    this.type = type;
    this.update = function(){
        // ctx.fillStyle = "red"
        // ctx.fillRect(this.x,this.y,5,5)
        if (this.type ==1){
            ctx.drawImage(shootImg,this.x-10,this.y-15)
        }
        else if (this.type==2){
            ctx.drawImage(bullet2Img,this.x-10,this.y-15,20,20)

        }
        else{
            if (damage==2){
                ctx.drawImage(shootImg,this.x-10,this.y-15)
            }
            else if(damage==4){
                ctx.drawImage(shootImg,this.x-15,this.y-15)
                ctx.drawImage(shootImg,this.x-5,this.y-15)
            }
            else if (damage==6){
                ctx.drawImage(shootImg,this.x-2,this.y-15)
                ctx.drawImage(shootImg,this.x-10,this.y-15)
                ctx.drawImage(shootImg,this.x-18,this.y-15)
            }
            else if (damage==8){
                ctx.drawImage(shoot2Img,this.x-8,this.y-25,25,45)
            }
            else if (damage==10){
                ctx.drawImage(shoot2Img,this.x-2,this.y-25,25,45)
                ctx.drawImage(shoot2Img,this.x-14,this.y-25,25,45)

            }
            else if (damage==12){
                ctx.drawImage(shoot2Img,this.x+2,this.y-25,25,45)
                ctx.drawImage(shoot2Img,this.x-18,this.y-25,25,45)
                ctx.drawImage(shoot2Img,this.x-8,this.y-25,25,45)
            }
            
            else if (damage==14){
                ctx.drawImage(bullet3Img,this.x-12,this.y-15,30,60)
            }
            else if (damage==16){
                ctx.drawImage(bullet3Img,this.x-3,this.y-15,30,60)
                ctx.drawImage(bullet3Img,this.x-21,this.y-15,30,60)

            }
            else if (damage==18){
                ctx.drawImage(bullet3Img,this.x,this.y-15,30,60)
                ctx.drawImage(bullet3Img,this.x-24,this.y-15,30,60)
                ctx.drawImage(bullet3Img,this.x-12,this.y-15,30,60)
            }
            else if (damage==20){
                ctx.drawImage(bullet2Img,this.x-22,this.y-25,50,60)
            }
            else if (damage==22){
                ctx.drawImage(bullet2Img,this.x-12,this.y-25,50,60)
                ctx.drawImage(bullet2Img,this.x-32,this.y-25,50,60)

            }
            else if (damage==24){
                ctx.drawImage(bullet2Img,this.x-7,this.y-25,50,60)
                ctx.drawImage(bullet2Img,this.x-37,this.y-25,50,60)
                ctx.drawImage(bullet2Img,this.x-22,this.y-25,50,60)
            }
            else if(damage>24){
                ctx.drawImage(bullet2Img,this.x-48,this.y-65,100,120)
            }
        }

    }
    this.move = function(){
        this.x+=this.sx;
        this.y+=this.sy;
    }
    // this.aim = function(){
    //     if (this.x>200+enemy.x && this.x<260+enemy.x && this.y<enemy.y+510&& this.y>enemy.y+410){
    //         ctx.drawImage(explodeImg,this.x-35,this.y-40)

    //         this.x = 999;
    //         this.y = 999;
    //         this.sx = 0;
    //         this.sy = 0;
    //         enemy.hp-=damage;
            

    //     }
    //     if (this.x>1040+enemy.x && this.x<1100+enemy.x && this.y<enemy.y+510&& this.y>enemy.y+410){
    //         ctx.drawImage(explodeImg,this.x-35,this.y-40)

    //         this.x = 999;
    //         this.y = 999;
    //         this.sx = 0;
    //         this.sy = 0;
    //         enemy.hp-=damage;

    //     }
    //     if (this.x>340+enemy.x && this.x<430+enemy.x && this.y<enemy.y+580&& this.y>enemy.y+500){
    //         ctx.drawImage(explodeImg,this.x-35,this.y-40)

    //         this.x = 999;
    //         this.y = 999;
    //         this.sx = 0;
    //         this.sy = 0;
    //         enemy.hp-=damage;
            
    //     }
    //     if (this.x>875+enemy.x && this.x<965+enemy.x && this.y<enemy.y+580&& this.y>enemy.y+500){
    //         ctx.drawImage(explodeImg,this.x-35,this.y-40)

    //         this.x = 999;
    //         this.y = 999;
    //         this.sx = 0;
    //         this.sy = 0;
    //         enemy.hp-=damage;
    //     }
    // }
        
    
}
function Bullet(x,y,w,h,sx,sy,type =1,ax = 0,ay = 0){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sx = sx;
    this.sy = sy;
    this.type = type;
    this.ax = ax;
    this.ay = ay;
    this.update = function(){
        ctx = area.context;
        ctx.fillStyle = "blue"
        if (type ==1){
        ctx.drawImage(bulletImg,this.x-8,this.y-13);
        }
        else if(type ==2){
            ctx.drawImage(explodeImg,this.x-5,this.y-15,20,40);
        }
        else if(type ==3){
            ctx.drawImage(shoot3Img,this.x-22,this.y-28,70,70);
        }
        else if(type ==4){
            ctx.drawImage(shoot4Img,this.x-22,this.y-28,70,70);
        }
        else if(type ==5){
            ctx.drawImage(shoot2Img,this.x-7,this.y-5,20,30);
        }
        else if(type ==6){
            ctx.drawImage(shoot5Img,this.x-38,this.y-40,90,90);
        }
        else if(type ==7){
            ctx.drawImage(shoot6Img,this.x-5,this.y-15,20,40);
        }
        else if(type ==8){
            ctx.drawImage(shoot7Img,this.x-5,this.y-15,20,40);
        }

        // ctx.fillRect(this.x,this.y,this.w,this.h)
    }
    this.move = function(){
        this.sx+=this.ax;
        this.sy+=this.ay
        this.x+=this.sx;
        this.y+=this.sy;
    }
}

function Missle(x,y,d,s){
    this.x = x;
    this.y = y;
    this.d = d;
    this.s = s;
    this.speedx =0;
    this.speedy =0;
    this.update = function(){
        ctx = area.context;
        ctx.fillStyle = "blue"
        ctx.drawImage(explodeImg,this.x-12,this.y-18,20,40);
        
        // ctx.fillRect(this.x,this.y,this.d,this.d)
    }
    this.move = function(){
        let disx = ship.x-this.x
        let disy = ship.y-this.y
        let unit = s/(Math.abs(disx)+Math.abs(disy))
        this.speedx = unit*disx
        this.speedy = unit*disy
        this.x+=this.speedx;
        this.y+=this.speedy;
    }
}