import {Howl} from "howler";

export default class Sounds{
    constructor(){
        this.backgroundMusic = new Howl({
            src: ['../sound/tetrisMusic.mp3'],
            loop: true,
            preload: true,
            volume: 0.8,
        });
        this.backgroundMenuMusic = new Howl({
            src: ["../sound/tetrisMenuMusic.mp3"],
            loop: true,
            preload: true,
            autoplay: true,
            volume: 0.6,
        });
        this.hardDrop = new Howl({
                src: ['../sound/hardDrop.wav'],
                volume: 0.8,
                preload: true
        });
        this.line = new Howl({
                src: ['../sound/line.wav'],
                preload: true
        });
        this.double = new Howl({
                src: ['../sound/double.wav'],
                preload: true
        });
        this.triple = new Howl({
                src: ['../sound/triple.wav'],
                preload: true
        });
        this.quad = new Howl({
                src: ['../sound/quad.wav'],
                preload: true
        });
        this.hold = new Howl({
                src: ['../sound/hold.wav'],
                volume: 0.3,
                preload: true
        });
        this.startTetris = new Howl({
                src: ['../sound/startTetris.wav'],
                preload: true,
                volume: 0.8
        });
        this.restart = new Howl({
                src: ['../sound/restart.wav'],
                volume: 0.8,
                preload: true
        });
        this.quit = new Howl({
                src: ['../sound/quit.wav'],
                volume: 0.8,
                preload: true
        });
        this.drop = new Howl({
                src: ['../sound/drop.wav'],
                volume: 0.4,
                preload: true
        });
        this.setLevel = new Howl({
                src: ['../sound/setLevel.wav'],
                preload: true
        });
        this.move = new Howl({
                src: ['../sound/move.wav'],
                volume: 0.2,
                preload: true
        });
        this.gameOver = new Howl({
                src: ['../sound/gameOver.wav'],
                volume: 0.25,
                preload: true
        });
    }
}