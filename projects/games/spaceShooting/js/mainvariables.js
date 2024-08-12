var width;
var height;
var screenwidth;
var screenheight;
var booms = [];
var bullets = [];
var missles = [];
var shoots = [];
var buffs = [];
var enemyAs = [];
var enemyBs = [];
var enemyCs = [];
var enemyDs = [];
var eliteAs = [];
var eliteBs = [];
var eliteCs = [];
var eliteDs = [];

var helper = 0;
var hprecove = 500;
var bufffreq = 500;
var bufftime = 50;
var damage =2;
var bufflevel = 1;
var wave = 0;

var tp = 0;
var round = 0;
var hpp;
var buff1;
var buff2;
var buff3 = 0;
var difficult = 0;
var maxwave;

var extra = 1.5;
var wave0 = 0;
var wave1 = 0;
var wave2 = 0;
var wave3 = 0;
var wave4 = 0;
var wave5 = 0;
var wave6 = 0;
var wave7 = 0;
var wave8 = 0;
var wave9 = 0;
var wave10 = 0;
var wave11 = 0;
var wave12 = 0;
var wave13 = 0;
var wave14 = 0;
var wave15 = 0;

var slice = 0;

var area = {
    canvas : document.createElement("canvas"),
    start : function(){
        this.canvas.width = width = screenwidth = window.innerWidth;
        this.canvas.height = height = screenheight =  window.innerHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas,document.body.childNodes[0])
        this.interval = setInterval(updateArea,20)
        window.addEventListener('keydown', function (e) {
        area.keys = (area.keys || []);
        area.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
        area.keys[e.keyCode] = false;
        });
        window.addEventListener('mousedown', function (e) {
            area.x = e.pageX;
            area.y = e.pageY;
          })
          window.addEventListener('mouseup', function (e) {
            area.x = false;
            area.y = false;
          })    
    },
            
    clear: function(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
    }
}

var ctx = area.context;
