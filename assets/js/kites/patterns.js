function M14() {
  reset();

  let s = new Stepper();
  s.setStart(k, kImg);

  let slideCircle = {
    path: '#slideCircle',
    align: '#slideCircle',
    autoRotate: true,
    alignOrigin: [0.5, 0.35],
    start: 0,
    end: 1,
    offsetX: 3,
    offsetY: 27,
  }

  // #3 walk-it-off
  s.spin('+=30_cw', .3, .5);
  s.spin('-=60_ccw', .3, .5);
  s.spin('+=60_cw', .3, .5);
  s.spin('-=60_ccw', .3, .5);
  s.spin('+=60_cw', .3, .5);
  s.spin('-=30_ccw', .3, .5);
  let walk = s.ptn;
  s.ptn = [];
  
  // #4 launch-snaps
  s.launch(low, .5);
  s.spin(3, .5, .5);
  s.fly(lfIsh, low, 0, .5, 1);
  s.spin(-7, .5, 1);
  let launchSnaps = s.ptn;
  s.ptn = [];

  // #8 don-fox-snap-box 
  s.fly(lfIsh, hiIsh);
  s.innerSpin(1, .9, .1, '<');
  s.fly(rtIsh, hiIsh);
  s.innerSpin(1, .9, .1, '<');
  s.fly(rtIsh, lowIsh);
  s.innerSpin(1, .9, .1, '<');
  s.fly(lfIsh, lowIsh, 0, .5, 1.3);
  let snapBox = s.ptn;
  s.ptn = [];

  // zig zag up
  s.spin('-=225_ccw', .5, 2);
  s.fly(lfIsh + 100, lowIsh - 100, 0, .5, .9);
  s.spin(3, .5, .7);
  s.fly(lfIsh, hiIsh + 30, 0, .5, .9);
  s.innerSpin(-3, .5, .7);
  s.fly(centre, hi, 0, .5, .9);
  s.spin('-=225_ccw', .5, .7);
  let zigZagUp = s.ptn;
  s.ptn = [];

  // #10 shock-circle-snap 
  s.diveStop(low);
  s.path(slideCircle, 6, 4);
  s.spin(-5, .1, .7);
  let shockCircleSnap = s.ptn;
  s.ptn = [];

  // tip turns
  s.fly(centre, low - 45);
  s.spin(-2, 0, 1, '<');
  s.fly(centre, low - 100);
  s.spin(2, 0, 1, '<');
  s.fly(centre, mid);
  s.spin(-2, 0, 1, '<');
  let tipTurns = s.ptn;
  s.ptn = [];

  // #9 snap-clock-snap
  s.fly(lfIsh, mid);
  s.spin(6, .5, 1);
  s.fly(centre, mid);
  s.innerSpin(-4, .5, .7);
  s.spin(1, .5, .3);
  s.spin(1, .5, .3);
  s.spin(1, .5, .3);
  s.spin(1, .5, .3);
  s.spin(-4, .5, .7);
  let snapClockSnap = s.ptn;
  s.ptn = [];

  // #6 go-snap-back-vslide
  s.fly(rtIsh, mid);
  s.spin(4, 0, .7);
  s.fly(centre, mid, 0, .5, 1.2);
  s.spin(-3, 0, .5);
  s.fly(rtIsh, mid, 0, 0, 1.5);
  let goSnapBackV = s.ptn;
  s.ptn = [];

  // #7 v-slide-v
  s.fly(rtIsh, low);
  s.spin(4, 0, .7);
  s.fly(lfIsh, low, 0, 0, 3);
  s.spin(4, 1.2, .7, '<');
  let vSlideV = s.ptn;
  s.ptn = [];

  // tumbleweed up
  s.fly(centre, hi, -4, .5, 6);
  let tumbleweedUp = s.ptn;
  s.ptn = [];

  // #1/#2 shock-snap-tip
  s.diveStop(low, 1);
  s.spin(5, .2, .8);
  s.land();
  s.fly(centre, low, 0, .7);
  s.fly(centre + 60, low, -6, .5, 1.5)
  s.land(1, .5);
  s.fly(centre + 60, low, 0, 1, 1);
  s.fly(centre, low, 3, .5, .8);
  let shockSnap = s.ptn;
  s.ptn = [];

  // #5 shock-clock-snap
  s.fly(centre, hi, 0, .5, 2);
  s.spin(-2, .5, .5);
  s.diveStop(low, .8);
  s.spin('-=45_ccw', .5, .3);
  s.spin('-=45_ccw', .5, .3);
  s.spin('-=45_ccw', .5, .3);
  s.spin('-=45_ccw', .5, .3);
  s.spin('-=45_ccw', .5, .3);
  s.spin('-=45_ccw', .5, .3);
  s.spin('-=45_ccw', .5, .3);
  s.spin('-=45_ccw', .5, .3);
  s.spin(6, .5, 1);
  s.land();
  let shockClockSnap = s.ptn;
  s.ptn = [];

  let flight = [
    ...walk,
    ...launchSnaps,
    ...snapBox,
    ...zigZagUp,
    ...shockCircleSnap,
    ...tipTurns,
    ...snapClockSnap,
    ...goSnapBackV,
    ...vSlideV,
    ...tumbleweedUp,
    ...shockSnap,
    ...shockClockSnap,
  ];
  s.ptn = flight;

  s.doTimeline();
}

function M94() {
  let s = new Stepper()
    .setStart(k, kImg)
    .launch(low, .5)
    .spin(5, .5, 2)
    .fly(lfIsh, low)
    .spin(-9, .5, .8)
    .fly(lfIsh, hi, 0, .3)
    .spin(10, .5, .5)
    .fly(rt, hi, 0, .3, 1)
    .fly(lf + 40, low, -22, 1.3)
    .fly(rtIsh, mid, 0, .1, 2)
    .spin(40)
    .fly(-500, mid, 0, .1, 2)
    .fly(centre, hi - 90, '+=130_cw', .1, .2)
    .fly(lfIsh, hi - 60, '+=130_cw', .1, .2)
    .fly(centre, ground - 60, '+=130_cw', .1, .2)
    .fly(rt + 150, lowIsh, '+=130_cw', .1, .2)
    .fly(centre, mid, '-=130_cw', .1, .2)
    .land()

  s.doTimeline();
}

function team() {
  reset();

  let s = new Stepper();
  s.setStart(k, kImg, 2);

  let mp2 = {
    path: [
      {x: lf, y: mid},
      {x: lf, y: lowIsh},
      {x: rt, y: lowIsh},
      {x: rt, y: mid},
      {x: rtIsh, y: hi},
      {x: 0, y: hi},
    ],
    start: 0,
    end: 1,
    curviness: .7,
  };

  s.launch(mid, 1.5);
  let launch = s.ptn;
  s.ptn = [];

  s.spin(-3, .5, .5);
  s.fly(lf, mid, 0, .5, 1.5);
  s.spin(2, 0, .5);
  s.fly(rt, mid, 0, 0, 3);
  s.spin(-2, 0, .5);
  s.fly(centre, mid, 0, 0, 1.5);
  s.spin(4, 0, 1);
  s.fly(lf, mid, 0, 0, 1.5);
  s.spin(2, 0, .5);
  s.fly(centre, mid, 0, 0, 1.5);
  s.spin(-3, 0, .7);
  let bita2 = s.ptn;
  s.ptn = [];

  s.spin(-3, 1, .7);
  s.fly(lfIsh, mid, 0, .5, .7);
  s.spin(4, .5, .8);
  s.fly(rtIsh, mid, 0, .5, 2);
  s.spin(-1, .5, .3);
  s.spin(-1, .5, .3);
  s.spin(-1, .5, .3);
  s.spin(-1, .5, .3);
  s.spin(-1, .5, .3);
  s.spin(-1, .5, .3);
  s.spin(4, .5, .8);
  s.fly(centre, mid, 0, .5, 1);
  let sorta4 = s.ptn;
  s.ptn = [];

  s.land(2)
  s.launch(mid, 2);
  s.fly(centre - 40, mid, 2, .5, 1);
  s.land(2)
  s.launch(mid, 2);
  let tipLandings = s.ptn;
  s.ptn = [];

  s.fly(lf, mid, 0, .5, 1.5);
  s.path(mp2, 8)
  s.innerSpin(-1, 0, 1, '<+1')
  s.innerSpin(-3, 0, 3, '<+2.6')
  s.spin(3, 0, .7)
  s.diveStop(low)
  s.innerSpin(4, .5)
  s.land()
  let enda4 = s.ptn;
  s.ptn = [];

  let flight = [
    ...launch,
    ...bita2,
    ...sorta4,
    ...tipLandings,
    ...enda4,
  ];
  s.ptn = flight;

  s.doTimeline();
}

