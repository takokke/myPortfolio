function windowResized() {
    resizeCanvas(windowWidth, windowHeight,WEBGL);//3Dの場合は引数にWEBGLを忘れずに！
    background(30);//再描画後に背景を再描画する
}

function setup() {
    canvas = createCanvas(windowWidth,windowHeight,WEBGL);
    canvas.position(0,56);//canvasの位置を指定
    canvas.style('z-index','-1');//canvasを後ろに移動する
    background(30);
  }
  function draw() {

    background(255);

    for (var y = 0; y <= 1000; y = y + 500) {
      for (var x = 0; x <= 1000; x = x + 500) {
        noFill();
        stroke(30, 160, 200);
        rotateX(frameCount * 0.003);
        rotateY(frameCount * 0.003);
        box(200, 200, 200);
      }
    }
  }