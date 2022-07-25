// silly
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

// paired flight
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
    s.fly(centre - 40, mid, -2, .5, 1);
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

// circle
function MI_01() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    let slideCircle = {
        path: '#slideCircle',
        align: '#slideCircle',
        autoRotate: false,
        alignOrigin: [0.5, 0.35],
        start: 1,
        end: 0,
        offsetX: 7,
        offsetY: 56,
    }

    s.launch(low, 0);
    s.fly(lfIsh, low, 0, 0, .1);
    s.fly(centre, low, 0, 0, 2);
    s.path(slideCircle, 6, 0);
    s.fly(rtIsh, low, 0, 0, 2);
    s.doTimeline();
}

// ladder up
function MI_02() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.launch(low, 0);
    s.fly(lfIsh, low, 1, 0, .1);
    s.fly(centre, low, 0, 0, 1);
    s.fly(centre, low - 45);
    s.spin(-2, 0, 1, '<');
    s.fly(centre, low - 100);
    s.spin(2, 0, 1, '<');
    s.fly(centre, mid);
    s.spin(-2, 0, 1, '<');
    s.fly(centre, mid - 100);
    s.spin(2, 0, 1, '<');
    s.fly(rtIsh, mid - 100, 0, .5, 1);
    s.doTimeline();
}

// steps & turns
function MI_03() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.launch(low, 0);
    s.fly(lf, hi, 1, 0, .1);
    s.fly(lfIsh, hi, 0, 1, 1.5);
    s.spin(1, .5, .5);
    s.fly(lfIsh, hiIsh + 30, 0, .5, 1);
    s.spin(1, .5, .5);
    s.fly(centre, hiIsh + 30, 0, .5, 1);
    s.spin(1, .5, .5);
    s.fly(centre, mid, 0, .5, 1);
    s.spin(1, .5, .5);
    s.fly(rtIsh, mid, 0, .5, 1);
    s.spin(1, .5, .5);
    s.fly(rtIsh, lowIsh, 0, .5, 1);
    s.spin(1, .5, .5);
    s.fly(rt, lowIsh, 0, .5, 1.5);
    s.doTimeline();
}
