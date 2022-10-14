// silly
function M94() {
    reset()
    let s = new Stepper()

    s.launch(s.low, .5)
    s.spin(5, .5, 2)
    s.fly(s.lf1, s.low)
    s.spin(-9, .5, .8)
    s.fly(s.lf1, s.hi, 0, .3)
    s.spin(10, .5, .5)
    s.fly(s.rt3, s.hi, 0, .3, 1)
    s.fly(s.lf3 + 40, s.low, -22, 1.3)
    s.fly(s.rt1, s.mid, 0, .1, 2)
    s.spin(40)
    s.fly(-500, s.mid, 0, .1, 2)
    s.fly(s.centre, s.hi - 90, '+=130_cw', .1, .2)
    s.fly(s.lf1, s.hi - 60, '+=130_cw', .1, .2)
    s.fly(s.centre, s.ground - 60, '+=130_cw', .1, .2)
    s.fly(s.rt3 + 150, s.lowIsh, '+=130_cw', .1, .2)
    s.fly(s.centre, s.mid, '-=130_cw', .1, .2)
    s.land()

    s.doTimeline();
}

// paired flight
function team() {
    reset()

    let s = new Stepper(2);

    let mp2 = {
        path: [
            {x: s.lf3, y: s.mid},
            {x: s.lf3, y: s.lowIsh},
            {x: s.rt3, y: s.lowIsh},
            {x: s.rt3, y: s.mid},
            {x: s.rt2, y: s.hi},
            {x: 0, y: s.hi},
        ],
        start: 0,
        end: 1,
        curviness: .7,
    };

    s.launch(s.mid, 2);
    let launch = s.ptn;
    s.ptn = [];

    s.spin(-3, .5, .5);
    s.fly(s.lf3, s.mid, 0, .5, 1.5);
    s.spin(2, 0, .5);
    s.fly(s.rt3, s.mid, 0, 0, 3);
    s.spin(-2, 0, .5);
    s.fly(s.centre, s.mid, 0, 0, 1.5);
    s.spin(4, 0, 1);
    s.fly(s.lf3, s.mid, 0, 0, 1.5);
    s.spin(2, 0, .5);
    s.fly(s.centre, s.mid, 0, 0, 1.5);
    s.spin(-3, 0, .7);
    let bita2 = s.ptn;
    s.ptn = [];

    s.spin(-3, 1, .7);
    s.fly(s.lf2, s.mid, 0, .5, 1);
    s.spin(4, .5, .8);
    s.fly(s.rt2, s.mid, 0, .5, 2);
    s.spin(-1, .5, .3);
    s.spin(-1, .5, .3);
    s.spin(-1, .5, .3);
    s.spin(-1, .5, .3);
    s.spin(-1, .5, .3);
    s.spin(-1, .5, .3);
    s.spin(4, .5, .8);
    s.fly(s.centre, s.mid, 0, .5, 1.5);
    let sorta4 = s.ptn;
    s.ptn = [];

    s.land(.5, 2)
    s.launch(s.mid, 2);
    s.fly(s.centre - 40, s.mid, -2, 0, 1);
    s.land(.5, 2)
    s.launch(s.mid, 2);
    let tipLandings = s.ptn;
    s.ptn = [];

    s.fly(s.lf3, s.mid, 0, .5, 1.5);
    s.path(mp2, 0, .5, 8)
    s.innerSpin(-1, 0, 1, '<+1')
    s.innerSpin(-3, 0, 3, '<+2.6')
    s.spin(3, 0, .7)
    s.diveStop(s.low)
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
    reset()

    let s = new Stepper();

    let slideCircle = {
        path: '#slideCircle',
        align: k,
        autoRotate: false,
        alignOrigin: [0.5, 0.35],
        start: 1,
        end: 0,
    }

    s.fly(s.lf2, s.low, 0, 0, 0);
    s.fly(s.centre, s.low, 0, 0, 2);
    s.path(slideCircle, 0, 0, 6);
    s.fly(s.rt2, s.low, 0, 0, 2);

    s.doTimeline();
}

// ladder up
function MI_02() {
    reset()

    let s = new Stepper();

    s.fly(s.lf2, s.low, 1, 0, 0);
    s.fly(s.centre, s.low, 0, 0, 1);
    s.fly(s.centre, s.lowIsh);
    s.spin(-2, 0, 1, '<');
    s.fly(s.centre, s.mid);
    s.spin(2, 0, 1, '<');
    s.fly(s.centre, s.hiIsh);
    s.spin(-2, 0, 1, '<');
    s.fly(s.centre, s.hi);
    s.spin(2, 0, 1, '<');
    s.fly(s.rt2, s.hi, 0, .5, 1);
    s.doTimeline();
}

// steps & turns
function MI_03() {
    reset()

    let s = new Stepper();

    s.fly(s.lf3, s.hiIsh, 1, 0, 0);
    s.fly(s.lf2, s.hiIsh, 0, 1, 1);
    s.spin(1, .5, .5);
    s.fly(s.lf2, s.mid, 0, .5, 1);
    s.spin(1, .5, .5);
    s.fly(s.lf1, s.mid, 0, .5, 1);
    s.spin(1, .5, .5);
    s.fly(s.lf1, s.lowIsh, 0, .5, 1);
    s.spin(1, .5, .5);
    s.fly(s.centre, s.lowIsh, 0, .5, 1);
    s.spin(1, .5, .5);
    s.fly(s.centre, s.low, 0, .5, 1);
    s.spin(1, .5, .5);
    s.fly(s.rt3, s.low, 0, .5, 2);
    s.doTimeline();
}

// two down
function MI_04() {
    reset()

    let s = new Stepper();

    s.fly(s.lf2, s.hi, 1, .5, 0);
    s.fly(s.rt2, s.hi, 0, .5, 2);
    s.fly(s.rt2, s.mid, 0, .5, 1);
    s.fly(s.lf2, s.mid, 0, .5, 2);
    s.spin(1, .5, .5);
    s.fly(s.lf2, s.low, 0, .5, 1);
    s.fly(s.rt2, s.low, 0, .5, 2);
    s.doTimeline();
}

// swing
function MI_05() {
    reset()

    let s = new Stepper();

    s.launch(s.hiIsh, 2, 0);
    s.fly(s.centre - 50, s.hiIsh, 0, .5, 1);
    s.spin(-2, 0, 1, '<');
    s.fly(s.centre - 50, s.lowIsh, 0, .5, 1);
    s.fly(s.centre - 130, s.lowIsh, 0, .5, 1);
    s.spin(2, 0, 1, '<');
    s.land()

    s.doTimeline();
}

// peak
function MI_06() {
    reset()

    let s = new Stepper();

    s.fly(s.lf2, s.ground, 0, 0, 0);
    s.fly(s.lf2, s.low, 0, 1, .75);
    s.fly(s.rt1, s.hi, 0, .5, 2.5);
    s.spin(2, .5, .5); 
    s.fly(s.rt1, s.mid, 0, .5, .75);
    s.spin(-1, .5, .5);
    s.fly(s.rt1, s.low, 0, .5, .75);
    s.spin(-1, .5, .5);
    s.land();

    s.doTimeline();
}

// arc circle
function MI_07() {
    reset()

    let s = new Stepper();

    let arch = {
        path: [
            {x:s.lf1, y:s.mid},
            {x:s.lf1 + (s.colWidth / 2), y:s.hiIsh - 30},
            {x:s.centre, y:s.mid},
        ],
        align: k,
        autoRotate: false,
        alignOrigin: [0.5, 0.35],
        curviness: 2,
        start: 0,
        end: 1,
    }

    MotionPathPlugin.convertToPath('#circle3');

    let circle3 = {
        path: '#circle3',
        align: k,
        autoRotate: -90,
        alignOrigin: [.5, .5],
        start: 0,
        end: 1,
        offsetX: 0,
        offsetY: 0,
    }

    s.fly(s.lf1, s.ground, 0, 0, 0);
    s.fly(s.lf1, s.mid, 0, 1, 1.5);
    s.path(arch, 2, 0);
    s.fly(s.centre, s.lowIsh, 0, 0, 1);
    s.path(circle3, 4, -1);
    s.land();

    s.doTimeline();
}

// camel back
function MI_08() {
    reset()

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

    s.path(camelPath, 0, .5, 8);

    s.doTimeline();
}

// clock tower
function MI_09() {
    reset()

    let s = new Stepper();

    s.launch(s.hi, 1, 0);
    s.fly(s.centre, s.hiIsh, 0, .5, 1.5);
    s.spin('+=45_cw', .5, .3);
    s.spin('+=45_cw', .5, .3);
    s.spin('+=45_cw', .5, .3);
    s.spin('+=45_cw', .5, .3);
    s.spin('+=45_cw', .5, .3);
    s.spin('+=45_cw', .5, .3);
    s.spin('+=45_cw', .5, .3);
    s.spin('+=45_cw', .5, .3);
    s.fly(s.centre, s.low, 0, .5, 1.5);
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
    reset()


    let s = new Stepper();

    let arch = {
        path: [
            {x:s.lf1, y:s.lowIsh},
            {x:s.lf1 + (s.colWidth / 2), y:s.low - 30},
            {x:s.centre, y:s.lowIsh},
        ],
        align: k,
        autoRotate: false,
        alignOrigin: [0.5, 0.35],
        curviness: 1,
        start: 0,
        end: 1,
    }

    MotionPathPlugin.convertToPath('#circle3');

    let circle3 = {
        path: '#circle3',
        align: k,
        autoRotate: false,
        alignOrigin: [.5, .5],
        start: 1,
        end: 0,
        offsetX: 0,
        offsetY: 0,
    }


    s.fly(s.lf2, s.ground, 2, 0, 0);
    s.fly(s.lf1, s.lowIsh, 0, .5, 1.5);
    s.path(arch, 0, 0, 1.8);
    s.path(circle3, 0, 0, 4);
    s.fly(s.rt1, s.ground, 0, 0, 1.5);

    s.doTimeline();
}

// tip pivots
function MI_11() {
    reset()

    let s = new Stepper();

    s.fly(s.lf3, s.ground, 0, 0, 0);
    s.fly(s.lf3, s.mid, 0, .5, 1);
    s.fly(s.lf2, s.mid, 0, .5, 1);
    s.fly(s.lf1, s.mid, 0, .5, 1);
    s.spin(2, 0, 1, '<'); 
    s.fly(s.centre, s.mid, 0, .5, 1);
    s.spin(2, 0, 1, '<'); 
    s.fly(s.rt1, s.mid, 0, .5, 1);
    s.spin(2, 0, 1, '<'); 
    s.fly(s.rt2, s.mid, 0, .5, 1);
    s.spin(2, 0, 1, '<'); 
    s.fly(s.rt3, s.mid, 0, .5, 1);
    //s.tipTurn('100% 0', s.lf2 - 65, s.mid, 2, .5, 1); 
    //s.tipTurn('0 100%', s.centre, s.mid, 2, .5, 1); 
    s.land();

    s.doTimeline();
}

// martini glass
function MI_12() {
    reset()

    let s = new Stepper();

    s.launch(s.low, .5);
    s.fly(s.lf2, s.hiIsh, 0, .5, 2);
    s.spin(-4, .5, .75);
    s.fly(s.rt2, s.hiIsh, 0, .5, 2.5);
    s.spin(4, .5, .75);
    s.fly(s.centre, s.low, 0, .5, 2);
    s.land();

    s.doTimeline();
}

// z pass
function MI_13() {
    reset()

    let s = new Stepper();

    s.fly(s.lf3, s.hiIsh, 1, 0, 0);
    s.fly(s.rt1, s.hiIsh, 0, .5, 2.5);
    s.fly(s.lf2, s.low, 0, .5, 2.5);
    s.fly(s.rt3, s.low, 0, .5, 2.5);

    s.doTimeline();
}

// pass with upward slide
function MI_14() {
    reset()

    let s = new Stepper();

    s.fly(s.lf3, s.mid, 1, 0, 0);
    s.fly(s.lf1, s.mid, 0, .5, 1.5);
    s.spin(-1, 0, .5);
    s.fly(s.rt1, s.mid, 0, 0, 1.5);
    s.spin(1, 0, .5);
    s.fly(s.rt3, s.mid, 0, 0, 1.5);

    s.doTimeline();
}

// pivots
function MI_15() {
    reset()

    let s = new Stepper();

    s.fly(s.lf2, s.ground, 0, 0, 0);
    s.fly(s.lf2, s.mid, 0, .5, 1);
    s.spin(-2, 0, .5);
    s.fly(s.lf1, s.mid, 0, 0, 1.5);
    s.spin(1, 0, .5);
    s.fly(s.centre, s.mid, 0, 0, 1.5);
    s.spin(1, 0, .5);
    s.fly(s.rt1, s.mid, 0, 0, 1.5);
    s.spin(1, 0, .5);
    s.fly(s.rt2, s.mid, 0, 0, 1.5);
    s.spin(1, 0, .5);
    s.land();

    s.doTimeline();
}


// lollipop
function MI_16() {
    reset()

    let s = new Stepper();

    MotionPathPlugin.convertToPath('#circle3');

    let circle3 = {
        path: '#circle3',
        align: k,
        autoRotate: false,
        alignOrigin: [.5, .5],
        start: .6,
        end: 1.6,
        offsetX: 145,
        offsetY: 47,
    }

    s.fly(s.rt1, s.ground, 2, 0, 0);
    s.fly(s.lf1, s.mid, 0, 1, 2);
    s.path(circle3, 0, .5, 5);
    s.fly(s.rt1, s.ground, 0, .5, 2);

    s.doTimeline();
}

// reverse octagon
function MI_17() {
    reset()

    let s = new Stepper();

    s.fly(s.lf2, s.low, -1, 0, 0);
    s.fly(s.rt1, s.low, 0, .5, 2);
    s.spin('-=45_ccw', .5, .3);
    s.fly(s.rt2, s.lowIsh, 0, .5, 1);
    s.spin('-=45_ccw', .5, .3);
    s.fly(s.rt2, s.hiIsh, 0, .5, 1);
    s.spin('-=45_ccw', .5, .3);
    s.fly(s.rt1, s.hi, 0, .5, 1);
    s.spin('-=45_ccw', .5, .3);
    s.fly(s.centre, s.hi, 0, .5, 1);
    s.spin('-=45_ccw', .5, .3);
    s.fly(s.lf1, s.hiIsh, 0, .5, 1);
    s.spin('-=45_ccw', .5, .3);
    s.fly(s.lf1, s.lowIsh, 0, .5, 1);
    s.spin('-=45_ccw', .5, .3);
    s.fly(s.centre, s.low, 0, .5, 1);
    s.spin('-=45_ccw', .5, .3);
    s.fly(s.rt3, s.low, 0, .5, 2);

    s.doTimeline();
}

// roman ten
function MI_18() {
    reset()

    let s = new Stepper();

    s.fly(s.lf2, s.low, 0, 0, 0);
    s.fly(s.rt2, s.low, 0, .5, 2.5);
    s.spin('+=45_cw', .5, .3);
    s.fly(s.lf2, s.hi, 0, .5, 2.5);
    s.spin('-=45_ccw', .5, .3);
    s.fly(s.rt2, s.hi, 0, .5, 2.5);
    s.spin('-=45_ccw', .5, .3);
    s.fly(s.lf2, s.low, 0, .5, 2.5);
    s.spin('+=45_cw', .5, .3);
    s.fly(s.rt2, s.low, 0, .5, 2.5);

    s.doTimeline();
}

// bumps
function MI_19() {
    reset()

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

    s.fly(s.lf3, s.ground, 0, 0, 0);
    s.path(bump1, 2);
    s.path(bump2, 2);
    s.path(bump3, 2);

    s.doTimeline();
}

// lift
function MI_20() {
    reset()

    let s = new Stepper();

    s.fly(s.centre, s.ground, 2, 0, 0);
    s.fly(s.centre, s.hi, 0, .5, 3);
    s.fly(s.centre, s.low, 0, 1, 3);
    s.fly(s.centre, s.ground, 0, 1, .75);

    s.doTimeline();
}

// diamond
function MI_21() {
    reset()

    let s = new Stepper();

    s.launch(s.low, .5);
    s.spin('-=45_ccw', .5, .3);
    s.fly(s.lf2, s.mid, 0, .5, 1);
    s.spin('-=270_ccw', .5, .5);
    s.fly(s.centre, s.hi, 0, .5, 1);
    s.spin('-=270_ccw', .5, .5);
    s.fly(s.rt2, s.mid, 0, .5, 1);
    s.spin('+=450_cw', .5, .75);
    s.fly(s.centre, s.low, 0, .5, 1);
    s.spin('+=135_cw', .5, .5);
    s.land();

    s.doTimeline();
}

// the felix
function MI_22() {
    reset()

    let felix1 = {
        path: '#felix1',
        align: k,
        autoRotate: 90,
        alignOrigin: [.5, .5],
        start: 0,
        end: 1,
    }

    let felix2 = {
        path: '#felix2',
        align: k,
        autoRotate: 90,
        alignOrigin: [.5, .5],
        start: 0,
        end: 1,
    }

    let felix3 = {
        path: '#felix3',
        align: k,
        autoRotate: 90,
        alignOrigin: [.5, .5],
        start: 0,
        end: 1,
    }

    let felix4 = {
        path: '#felix4',
        align: k,
        autoRotate: 90,
        alignOrigin: [.5, .5],
        start: 0,
        end: 1,
    }

    let s = new Stepper();

    s.fly(s.centre, s.ground, -1, 0, 0);
    s.fly(s.centre, s.low, 0, .5);
    s.path(felix1, 0, .5, 2);
    s.path(felix2, 0, .5, 2);
    s.spin(2, .5, .5);
    s.path(felix3, 0, .5, 2);
    s.path(felix4, 0, .5, 2);
    s.land();

    s.doTimeline();
}
