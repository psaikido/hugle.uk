// silly
function M94() {
    let s = new Stepper()
        .setStart(k, kImg)
        .launch(low, .5)
        .spin(5, .5, 2)
        .fly(lf2, low)
        .spin(-9, .5, .8)
        .fly(lf2, hi, 0, .3)
        .spin(10, .5, .5)
        .fly(rt4, hi, 0, .3, 1)
        .fly(lf4 + 40, low, -22, 1.3)
        .fly(rt2, mid, 0, .1, 2)
        .spin(40)
        .fly(-500, mid, 0, .1, 2)
        .fly(centre, hi - 90, '+=130_cw', .1, .2)
        .fly(lf2, hi - 60, '+=130_cw', .1, .2)
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
            {x: lf4, y: mid},
            {x: lf4, y: lowIsh},
            {x: rt4, y: lowIsh},
            {x: rt4, y: mid},
            {x: rt2, y: hi},
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
    s.fly(lf4, mid, 0, .5, 1.5);
    s.spin(2, 0, .5);
    s.fly(rt4, mid, 0, 0, 3);
    s.spin(-2, 0, .5);
    s.fly(centre, mid, 0, 0, 1.5);
    s.spin(4, 0, 1);
    s.fly(lf4, mid, 0, 0, 1.5);
    s.spin(2, 0, .5);
    s.fly(centre, mid, 0, 0, 1.5);
    s.spin(-3, 0, .7);
    let bita2 = s.ptn;
    s.ptn = [];

    s.spin(-3, 1, .7);
    s.fly(lf2, mid, 0, .5, .7);
    s.spin(4, .5, .8);
    s.fly(rt2, mid, 0, .5, 2);
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

    s.fly(lf4, mid, 0, .5, 1.5);
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
        offsetX: -3,
        offsetY: 25,
    }

    s.fly(lf2, low, 0, 0, 0);
    s.fly(centre, low, 0, 0, 2);
    s.path(slideCircle, 6, 0);
    s.fly(rt2, low, 0, 0, 2);
    s.doTimeline();
}

// ladder up
function MI_02() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.fly(lf2, low, 1, 0, 0);
    s.fly(centre, low, 0, 0, 1);
    s.fly(centre, lowIsh);
    s.spin(-2, 0, 1, '<');
    s.fly(centre, mid);
    s.spin(2, 0, 1, '<');
    s.fly(centre, hiIsh);
    s.spin(-2, 0, 1, '<');
    s.fly(centre, hi);
    s.spin(2, 0, 1, '<');
    s.fly(rt2, hi, 0, .5, 1);
    s.doTimeline();
}

// steps & turns
function MI_03() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.fly(lf4, hi, 1, 0, 0);
    s.fly(lf2, hi, 0, 1, 1);
    s.spin(1, .5, .5);
    s.fly(lf2, hiIsh, 0, .5, 1);
    s.spin(1, .5, .5);
    s.fly(lf1, hiIsh, 0, .5, 1);
    s.spin(1, .5, .5);
    s.fly(lf1, mid, 0, .5, 1);
    s.spin(1, .5, .5);
    s.fly(centre, mid, 0, .5, 1);
    s.spin(1, .5, .5);
    s.fly(centre, low, 0, .5, 1);
    s.spin(1, .5, .5);
    s.fly(rt4, low, 0, .5, 2);
    s.doTimeline();
}

// two down
function MI_04() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.fly(lf2, hiIsh, 1, .5, 0);
    s.fly(rt2, hiIsh, 0, .5, 2);
    s.fly(rt2, mid, 0, .5, 1);
    s.fly(lf2, mid, 0, .5, 2);
    s.spin(1, .5, .5);
    s.fly(lf2, low, 0, .5, 1);
    s.fly(rt2, low, 0, .5, 2);
    s.doTimeline();
}

// swing
function MI_05() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.launch(hiIsh, 2, 0);
    s.fly(centre - 50, hiIsh, 0, .5, 1);
    s.spin(-2, 0, 1, '<');
    s.fly(centre - 50, lowIsh, 0, .5, 1);
    s.fly(centre - 130, lowIsh, 0, .5, 1);
    s.spin(2, 0, 1, '<');
    s.land()

    s.doTimeline();
}

// peak
function MI_06() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.fly(lf2, ground, 0, 0, 0);
    s.fly(lf2, low, 0, 1, .75);
    s.fly(rt1, hi, 0, .5, 2.5);
    s.spin(2, .5, .5); 
    s.fly(rt1, mid, 0, .5, .75);
    s.spin(-1, .5, .5);
    s.fly(rt1, low, 0, .5, .75);
    s.spin(-1, .5, .5);
    s.land();

    s.doTimeline();
}

// arc circle
function MI_07() {
    reset();

    let arch = {
        path: '#slideCircle',
        align: '#slideCircle',
        autoRotate: false,
        alignOrigin: [0.5, 0.35],
        start: .25,
        end: .75,
        offsetX: -80,
        offsetY: -40,
    }

    let slideCircleReverse = {
        path: '#slideCircle2',
        align: '#slideCircle2',
        autoRotate: -90,
        alignOrigin: [.5, .5],
        start: .75,
        end: 1.75,
        offsetX: -78,
        offsetY: 30,
    }

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.fly(lf2, ground, 0, 0, 0);
    s.fly(lf2, mid - 40, 0, 1, 1.5);
    s.path(arch, 2, 0);
    s.fly(centre + 20, mid + 20, 0, 0, 1);
    s.path(slideCircleReverse, 4, -1);
    s.land();

    s.doTimeline();
}

// camel back
function MI_08() {
    reset();

    let camelPath = {
        path: '#camel',
        align: '#camel',
        autoRotate: -90,
        alignOrigin: [0.5, 0.35],
        start: 0,
        end: 1,
        offsetX: 0,
        offsetY: 0,
    }

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.path(camelPath, 8, 0);

    s.doTimeline();
}

// clock tower
function MI_09() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.launch(hiIsh, 1, 0);
    s.fly(centre, mid, 0, .5, 1.5);
    s.spin('+=45_cw', .5, .3);
    s.spin('+=45_cw', .5, .3);
    s.spin('+=45_cw', .5, .3);
    s.spin('+=45_cw', .5, .3);
    s.spin('+=45_cw', .5, .3);
    s.spin('+=45_cw', .5, .3);
    s.spin('+=45_cw', .5, .3);
    s.spin('+=45_cw', .5, .3);
    s.fly(centre, low, 0, .5, 1.5);
    s.spin('-=45_ccw', .5, .3);
    s.spin('-=45_ccw', .5, .3);
    s.spin('-=45_ccw', .5, .3);
    s.spin('-=45_ccw', .5, .3);
    s.spin('-=45_ccw', .5, .3);
    s.spin('-=45_ccw', .5, .3);
    s.spin('-=45_ccw', .5, .3);
    s.spin('-=45_ccw', .5, .3);
    s.land();

    s.doTimeline();
}

// crystal ball
function MI_10() {
    reset();

    let arc1 = {
        path: '#arc1',
        align: '#arc1',
        autoRotate: false,
        alignOrigin: [.5, .5],
        start: 0,
        end: 1,
        offsetX: -90,
        offsetY: 48,
    }

    let slideCircle = {
        path: '#slideCircle',
        align: '#slideCircle',
        autoRotate: false,
        alignOrigin: [0.5, 0.35],
        start: 1.85,
        end: .85,
        offsetX: -120,
        offsetY: -1,
    }

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.fly(lf2 - 100, ground, 2, 0, 0);
    s.fly(lf2, lowIsh, 0, .5, 1.5);
    s.path(arc1, 2, 0);
    s.path(slideCircle, 5, 0);
    s.fly(rt2, ground, 0, 0, 1.5);

    s.doTimeline();
}

// tip pivots
function MI_11() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.fly(lf3, ground, 0, 0, 0);
    s.fly(lf3, mid, 0, .5, 1);
    s.fly(lf2, mid, 0, .5, 1);
    s.fly(lf1, mid, 0, .5, 1);
    s.spin(2, 0, 1, '<'); 
    s.fly(centre, mid, 0, .5, 1);
    s.spin(2, 0, 1, '<'); 
    s.fly(rt1, mid, 0, .5, 1);
    s.spin(2, 0, 1, '<'); 
    s.fly(rt2, mid, 0, .5, 1);
    s.spin(2, 0, 1, '<'); 
    s.fly(rt3, mid, 0, .5, 1);
    //s.tipTurn('100% 0', lf2 - 65, mid, 2, .5, 1); 
    //s.tipTurn('0 100%', centre, mid, 2, .5, 1); 
    s.land();

    s.doTimeline();
}

// martini glass
function MI_12() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.launch(low, .5);
    s.fly(lf2, hiIsh, 0, .5, 1.5);
    s.spin(-4, .5, .75);
    s.fly(rt2, hiIsh, 0, .5, 1.5);
    s.spin(4, .5, .75);
    s.fly(centre, low, 0, .5, 1.5);
    s.land();

    s.doTimeline();
}

// z pass
function MI_13() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.fly(lf4, hiIsh, 1, 0, 0);
    s.fly(centre, hiIsh, 0, .5, 2);
    s.fly(lf2, lowIsh, 0, .5, 1.5);
    s.fly(rt2, lowIsh, 0, .5, 1.5);

    s.doTimeline();
}

// pass with upward slide
function MI_14() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.fly(lf4, mid, 1, 0, 0);
    s.fly(lf2, mid, 0, .5, 1.5);
    s.spin(-1, 0, .5);
    s.fly(rt2, mid, 0, 0, 1.5);
    s.spin(1, 0, .5);
    s.fly(rt4, mid, 0, 0, 1.5);

    s.doTimeline();
}

// pivots
function MI_15() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.fly(lf4, ground, 0, 0, 0);
    s.fly(lf4, lowIsh, 0, .5, 1);
    s.spin(-2, 0, .5);
    s.fly(lf2, lowIsh, 0, 0, 1.5);
    s.spin(1, 0, .5);
    s.fly(centre, lowIsh, 0, 0, 1.5);
    s.spin(1, 0, .5);
    s.fly(rt2, lowIsh, 0, 0, 1.5);
    s.spin(1, 0, .5);
    s.fly(rt4, lowIsh, 0, 0, 1.5);
    s.spin(1, 0, .5);
    s.land();

    s.doTimeline();
}


// lollipop
function MI_16() {
    reset();

    let slideCircle = {
        path: '#slideCircle',
        align: '#slideCircle',
        autoRotate: false,
        alignOrigin: [0.5, 0.35],
        start: .3,
        end: 1.3,
        offsetX: -84,
        offsetY: 31,
    }

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.fly(centre, ground, 2, 0, 0);
    s.fly(lf2, mid, 0, 1, 2);
    s.path(slideCircle, 5, 0);
    s.fly(centre, ground, 0, .5, 2);

    s.doTimeline();
}

// reverse octagon
function MI_17() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.fly(lf2, low, -1, 0, 0);
    s.fly(rt1, low, 0, .5, 2);
    s.spin('-=45_ccw', .5, .3);
    s.fly(rt2, lowIsh, 0, .5, 1);
    s.spin('-=45_ccw', .5, .3);
    s.fly(rt2, mid, 0, .5, 1);
    s.spin('-=45_ccw', .5, .3);
    s.fly(rt1, hiIsh, 0, .5, 1);
    s.spin('-=45_ccw', .5, .3);
    s.fly(lf1, hiIsh, 0, .5, 1);
    s.spin('-=45_ccw', .5, .3);
    s.fly(lf2, mid, 0, .5, 1);
    s.spin('-=45_ccw', .5, .3);
    s.fly(lf2, lowIsh, 0, .5, 1);
    s.spin('-=45_ccw', .5, .3);
    s.fly(lf1, low, 0, .5, 1);
    s.spin('-=45_ccw', .5, .3);
    s.fly(rt3, low, 0, .5, 1.5);

    s.doTimeline();
}

// roman ten
function MI_18() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.fly(lf2, low, 0, 0, 0);
    s.fly(rt2, low, 0, .5, 2.5);
    s.spin('+=45_cw', .5, .3);
    s.fly(lf2, hi, 0, .5, 2.5);
    s.spin('-=45_ccw', .5, .3);
    s.fly(rt2, hi, 0, .5, 2.5);
    s.spin('-=45_ccw', .5, .3);
    s.fly(lf2, low, 0, .5, 2.5);
    s.spin('+=45_cw', .5, .3);
    s.fly(rt2, low, 0, .5, 2.5);

    s.doTimeline();
}

// bumps
function MI_19() {
    reset();

    let bump1 = {
        path: '#bump1',
        align: '#bump1',
        autoRotate: 90,
        alignOrigin: [.5, .5],
        start: 0,
        end: 1,
        offsetX: -7,
        offsetY: 5,
    }

    let bump2 = {
        path: '#bump2',
        align: '#bump2',
        autoRotate: -90,
        alignOrigin: [.5, .5],
        start: 0,
        end: 1,
        offsetX: -7,
        offsetY: 5,
    }

    let bump3 = {
        path: '#bump3',
        align: '#bump3',
        autoRotate: 90,
        alignOrigin: [.5, .5],
        start: 0,
        end: 1,
        offsetX: -7,
        offsetY: 5,
    }

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.fly(lf4 + 50, ground, 0, 0, 0);
    s.path(bump1, 2);
    s.path(bump2, 2);
    s.path(bump3, 2);

    s.doTimeline();
}

// lift
function MI_20() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.fly(centre, ground, 2, 0, 0);
    s.fly(centre, hi, 0, .5, 3);
    s.fly(centre, low, 0, 1, 3);
    s.fly(centre, ground, 0, 1, .75);

    s.doTimeline();
}

// diamond
function MI_21() {
    reset();

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.launch(low, .5);
    s.spin('-=45_ccw', .5, .3);
    s.fly(lf2, mid, 0, .5, 1);
    s.spin('-=270_ccw', .5, .5);
    s.fly(centre, hi, 0, .5, 1);
    s.spin('-=270_ccw', .5, .5);
    s.fly(rt2, mid, 0, .5, 1);
    s.spin('+=450_cw', .5, .75);
    s.fly(centre, low, 0, .5, 1);
    s.spin('+=135_cw', .5, .5);
    s.land();

    s.doTimeline();
}

// the felix
function MI_22() {
    reset();

    let felix1 = {
        path: '#felix1',
        align: '#felix1',
        autoRotate: 90,
        alignOrigin: [.5, .5],
        start: 0,
        end: 1,
        offsetX: -10,
        offsetY: 20,
    }

    let felix2 = {
        path: '#felix2',
        align: '#felix2',
        autoRotate: 90,
        alignOrigin: [.5, .5],
        start: 0,
        end: 1,
        offsetX: 0,
        offsetY: 0,
    }

    let felix3 = {
        path: '#felix3',
        align: '#felix3',
        autoRotate: 90,
        alignOrigin: [.5, .5],
        start: 0,
        end: 1,
        offsetX: 0,
        offsetY: 0,
    }

    let felix4 = {
        path: '#felix4',
        align: '#felix4',
        autoRotate: 90,
        alignOrigin: [.5, .5],
        start: 0,
        end: 1,
        offsetX: 0,
        offsetY: 0,
    }

    let s = new Stepper();
    s.setStart(k, kImg, 0);

    s.fly(centre, ground, -1, 0, 0);
    s.fly(centre, low, 0, .5, .5);
    s.path(felix1, 2);
    s.path(felix2, 2);
    s.spin(2, .5, .5);
    s.path(felix3, 2);
    s.path(felix4, 2);
    s.land();

    s.doTimeline();
}
