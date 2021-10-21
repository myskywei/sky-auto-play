toast("Myskyworldwei编写/摸鱼小队")

sleep(100);
var window = floaty.window('<frame><vertical><horizontal><button id="stop" text="停止"w="60"/><button id="btn" text="暂停" w="60"/></horizontal><horizontal><button id="speedHigh" text="加速"w="60"/><button id="turbiHigh" text="加阻"w="60"/></horizontal><horizontal><button id="speed" text="x1" w="60"/><button id="turbidity" text="x1" w="60"/></horizontal><horizontal><button id="speedLow" text="减速" w="60"/><button id="turbiLow" text="减阻" w="60"/></horizontal></vertical></frame>');window.exitOnClose();
window.btn.click(()=>{if (window.btn.getText() != '暂停') {s = 1;window.btn.setText('暂停')} else {s = 0;window.btn.setText('继续')}})
window.speedHigh.click(()=>{speedControl=(speedControl*10+1)/10;window.speed.setText("x"+speedControl)})
window.speedLow.click(()=>{if(speedControl<=0.1){return};speedControl=(speedControl*10-1)/10;window.speed.setText("x"+speedControl)})
window.speed.click(()=>{speedControl=1;window.speed.setText("x"+speedControl)})

window.turbiHigh.click(()=>{if(turbiControl>=(time8/10)){return};turbiControl=(turbiControl*10+1)/10;window.turbidity.setText("x"+turbiControl)})
window.turbiLow.click(()=>{if(turbiControl<=0.1){return};turbiControl=(turbiControl*10-1)/10;window.turbidity.setText("x"+turbiControl)})
window.turbidity.click(()=>{turbiControl=1;window.turbidity.setText("x"+turbiControl)})

window.stop.click(()=>{engines.stopAll()})

var t=0;
var s=1;
var speedControl=1;
var turbiControl=1;
var time1=888;
var time2=444;
var time4=222;
var time8=111;
var time16=55

setScreenMetrics(1080, 2340);
var x=[687,923,1200,1486,1764];
var y=[235,508,774];

function ran(){return Math.random()*36-18}
function duration(){return 10*turbiControl+20}
function c4() {press(x[0]+ran(),y[0]+ran(),duration());t=t+1}
function d4() {press(x[1]+ran(),y[0]+ran(),duration());t=t+1}
function e4() {press(x[2]+ran(),y[0]+ran(),duration());t=t+1}
function f4() {press(x[3]+ran(),y[0]+ran(),duration());t=t+1}
function g4() {press(x[4]+ran(),y[0]+ran(),duration());t=t+1}
function a4() {press(x[0]+ran(),y[1]+ran(),duration());t=t+1}
function b4() {press(x[1]+ran(),y[1]+ran(),duration());t=t+1}
function c5() {press(x[2]+ran(),y[1]+ran(),duration());t=t+1}
function d5() {press(x[3]+ran(),y[1]+ran(),duration());t=t+1}
function e5() {press(x[4]+ran(),y[1]+ran(),duration());t=t+1}
function f5() {press(x[0]+ran(),y[2]+ran(),duration());t=t+1}
function g5() {press(x[1]+ran(),y[2]+ran(),duration());t=t+1}
function a5() {press(x[2]+ran(),y[2]+ran(),duration());t=t+1}
function b5() {press(x[3]+ran(),y[2]+ran(),duration());t=t+1}
function c6() {press(x[4]+ran(),y[2]+ran(),duration());t=t+1}

//t<4
function t1() {while (s != 1) {sleep(100)};if((time1/speedControl)-t*duration()<=0){sleep(10/speedControl);t=0}else{sleep((time1/speedControl)-t*duration());t=0}}//1拍间隔-
function t2() {while (s != 1) {sleep(100)};if((time2/speedControl)-t*duration()<=0){sleep(10/speedControl);t=0}else{sleep((time2/speedControl)-t*duration());t=0}}//1/2拍间隔-
function t4() {while (s != 1) {sleep(100)};if((time4/speedControl)-t*duration()<=0){sleep(10/speedControl);t=0}else{sleep((time4/speedControl)-t*duration());t=0}}//1/4拍间隔-
function t8() {while (s != 1) {sleep(100)};if((time8/speedControl)-t*duration()<=0){sleep(10/speedControl);t=0}else{sleep((time8/speedControl)-t*duration());t=0}}//1/8拍间隔-
function t16() {while (s != 1) {sleep(100)};if((time16/speedControl)-duration()<=0){sleep(10/speedControl);t=0}else{sleep((time16/speedControl))-t*duration();t=0}}//1/16拍间隔-

f4();g5();t4();c5();t4();d5();t4();c5();t4();g4();g5();t4();c5();t4();d5();t4();c5();t4();a4();g5();t4();c5();t4();d5();t4();c5();t4();t2();a4();t4();b4();t4();
c4();f4();c5();t2();b4();t4();c5();t4();t2();g5();t4();d5();t4();d4();g4();t1();t2();e5();t4();d5();t4();
e4();a4();c5();t2();c5();t4();c5();t2();b4();t4();a4();t4();g4();t4();e4();g4();t1();t2();c5();t4();d5();t4();
c4();e4();e5();t2();d5();t4();e5();t4();t2();g5();t2();d4();g4();b5();t4();t2();c6();t4();t2();g5();t2();

e4();a4();e5();t2();d5();t4();c5();t4();t1();e4();g4();t1();t2();a4();t4();b4();t4();
c4();c5();f4();t2();b4();t4();c5();t4();f4();t2();g5();t4();d5();t4();d4();g4();t1();g4();t2();e5();t4();d5();t4();
e4();a4();c5();t2();c5();t4();c5();t4();a4();t4();b4();t4();a4();t4();g4();t4();e4();g4();t1();g4();t4();g4();t4();c5();t4();d5();t4();
c4();e4();e5();t2();d5();t4();e5();t4();e4();t2();g5();t2();d4();g4();b5();t4();t2();c6();t4();g4();t2();g5();t2();

e4();a4();e5();t2();d5();t4();c5();t4();t1();e4();a4();t1();t2();a4();t4();b4();t4();
c4();f4();c5();t2();b4();t4();c5();t4();f4();t2();e5();t4();d5();t4();d4();g4();t1();g4();t2();a4();t4();b4();t4();
e4();a4();c5();t2();b4();t4();c5();t4();a4();t2();g5();t4();d5();t4();e4();g4();t1();g4();t2();c5();t4();d5();t4();
c4();e4();e5();t2();d5();t4();e5();t4();e4();t2();a5();t2();d4();g4();g5();t1();g4();b5();t1();

e4();a4();a5();t1();t1();t1();t1();
t1();c4();e4();a4();c5();t4();t2();e4();a4();t4();t1();a4();t2();b4();t2();
a4();e5();t4();t2();d5();t4();t1();t1();t2();a4();t4();b4();t4();
c4();f4();c5();t2();f4();b4();t4();c5();t4();f4();t2();g5();t4();d5();t4();d4();g4();t2();g4();t2();g4();t2();e5();t4();d5();t4();

e4();a4();c5();t2();a4();c5();t4();c5();t4();a4();t4();b4();t4();a4();t4();g4();t4();e4();g4();t2();g4();t2();g4();t2();c5();t4();d5();t4();
c4();e4();e5();t2();e4();d5();t4();e5();t4();e4();t2();g5();t2();d4();g4();b5();t2();g4();t4();c6();t4();g4();t2();g5();t2();
e4();a4();e5();t2();a4();d5();t4();c5();t4();a4();t1();e4();g4();t2();g4();t2();g4();t2();a4();t4();b4();t4();
c4();f4();c5();t2();f4();b4();t4();c5();t4();c4();f4();t2();g5();t4();d5();t4();d4();g4();t2();g4();t2();d4();g4();t2();e5();t4();d5();t4();

e4();a4();c5();t2();a4();c5();t4();c5();t4();e4();a4();t4();b4();t4();a4();t4();g4();t4();e4();g4();t2();g4();t2();e4();g4();t4();g4();t4();c5();t4();d5();t4();
c4();e4();e5();t2();e4();d5();t4();e5();t4();c4();e4();t2();g5();t2();d4();g4();b5();t2();g4();t4();c6();t4();d4();g4();t2();g5();t2();
e4();a4();e5();t2();a4();d5();t4();c5();t4();e4();a4();t1();e4();g4();t2();g4();t2();e4();g4();t2();a4();t4();b4();t4();
c4();f4();c5();t2();c4();f4();b4();t4();c5();t4();c4();f4();t2();f4();e5();t4();d5();t4();d4();g4();t2();d4();g4();t2();d4();g4();t2();g4();a4();t4();b4();t4();

e4();a4();c5();t2();e4();a4();b4();t4();c5();t4();e4();a4();t2();e4();g5();t4();d5();t4();e4();g4();t2();e4();g4();t2();e4();g4();t2();g4();c5();t4();d5();t4();
c4();e4();e5();t2();c4();e4();d5();t4();e5();t4();c4();e4();t2();e4();a5();t2();d4();g4();g5();t2();d4();g4();t2();d4();g4();b5();t2();g4();t2();
e4();a4();a5();t1();e4();a4();a5();t1();e4();a4();a5();t1();
