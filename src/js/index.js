import Movement from './models/Movement';
import PiecePosition from './models/PiecePosition';
import StageMatrix from './models/StageMatrix';
import ImageObj from './models/ImageObj';
import Points from './models/Points';
import KeyBinds from "./models/KeyBinds";
import Sounds from "./models/Sounds";
import {checkVCollision, checkHCollision, setPieceToBlock, checkRotationCollision} from './models/Collision';
import {instantDropGraph, updateCanvasWithMatrix} from './view/movementView';
import {reservePieceView ,gameOverView, showScoreAndLevel, clearPieceView, hideShowUi,displaySetLevel} from './view/uiView'

const pieceMovement = new Movement();
let piece = new PiecePosition();
let pieceDefault = new PiecePosition();
let stage = new StageMatrix();
let img = new ImageObj();
let points = new Points();
let keyBinds = new KeyBinds();
let sounds = new Sounds();
let code, set, reserve, starterPiece, oldReserve, nextPiece, nextPiece2, nextPiece3, nextPiece4;
let shiftPress = false;
let shiftCounter = false;
let gameOver = true;
let restartSpam = false;
let switchSpam = false;
keyBinds.setDefault();

const init = function(){
    sounds.backgroundMusic.play();
    gameOver = false;
    stage.setMatrix();
    points.setStart();
    points.gameLevel();
    reserve = 7;
    oldReserve = 7;
    nextPiece = Math.floor(Math.random() * 7);
    nextPiece2 = Math.floor(Math.random() * 7);
    nextPiece3 = Math.floor(Math.random() * 7);
    nextPiece4 = Math.floor(Math.random() * 7);
    clearPieceView();
    clearInterval(set);
    showScoreAndLevel(points);
    updateCanvasWithMatrix(stage.stageMatrix, img);
    gameLoop();
};

const initMenu = function(){
    sounds.backgroundMenuMusic.play();
};


const gameLoop = () => {
    if(!gameOver) {
        if(!shiftPress || oldReserve === 7){
            starterPiece = nextPiece;
            nextPiece = nextPiece2;
            nextPiece2 = nextPiece3;
            nextPiece3 = nextPiece4;
            nextPiece4 = Math.floor(Math.random() * 7);
            reservePieceView(img, nextPiece, shiftPress, 1);
            reservePieceView(img, nextPiece2, shiftPress,2);
            reservePieceView(img, nextPiece3, shiftPress,3);
            reservePieceView(img, nextPiece4, shiftPress,4);
        } else {
            starterPiece = oldReserve;
        }
        shiftPress = false;
        switch (starterPiece) {
            case 0:
                piece.linePiece();
                pieceDefault.linePiece();
                break;
            case 1:
                piece.lPiece();
                pieceDefault.lPiece();
                break;
            case 2:
                piece.jPiece();
                pieceDefault.jPiece();
                break;
            case 3:
                piece.sPiece();
                pieceDefault.sPiece();
                break;
            case 4:
                piece.zPiece();
                pieceDefault.zPiece();
                break;
            case 5:
                piece.tPiece();
                pieceDefault.tPiece();
                break;
            case 6:
                piece.squarePiece();
                pieceDefault.squarePiece();
                break;
        }
        updateCanvasWithMatrix(stage.stageMatrix, img);
        piece = pieceMovement.instantDrop(piece, stage.stageMatrix, true);
        instantDropGraph(piece, img);
        fallLoop();
    } else {
        gameOverView();
    }
};

const fallLoop = () => {
    let endFallLoop = false;
    set = setTimeout(function () {
        const collisionDetect = checkVCollision(piece, stage.stageMatrix);
        if (collisionDetect) {
            sounds.drop.play();
            setPieceToBlock(piece, stage.stageMatrix);
            shiftCounter = false;
            endFallLoop = true;
            clearInterval(set);
            stage.lineCompletion(stage.stageMatrix, points);
            points.scoredPoints(sounds);
            gameOver = stage.isGameOver(stage.stageMatrix,sounds);
            updateCanvasWithMatrix(stage.stageMatrix, img);
            points.gameLevel();
            showScoreAndLevel(points);
            gameLoop();
        } else {
            stage.erasePosition(piece);
            piece = pieceMovement.fallMovement(piece);
            stage.loadPosition(piece);
            reservePieceView(img, nextPiece, shiftPress, 1);
            reservePieceView(img, nextPiece2, shiftPress, 2);
            reservePieceView(img, nextPiece3, shiftPress, 3);
            reservePieceView(img, nextPiece4, shiftPress, 4);
            updateCanvasWithMatrix(stage.stageMatrix, img);
            piece = pieceMovement.instantDrop(piece, stage.stageMatrix, true);
            instantDropGraph(piece, img);
            fallLoop();
        }
    }, points.gameSpeed);
};


document.addEventListener('keydown', function(event) {
    code = event.code;
    if(!gameOver){
        if(code === keyBinds.hold && !shiftCounter) {
            sounds.hold.play();
            shiftPress = true;
            shiftCounter = true;
            oldReserve = reserve;
            reserve = starterPiece;
            reservePieceView(img, reserve, shiftPress, 1);
            stage.erasePosition(piece);
            clearInterval(set);
            updateCanvasWithMatrix(stage.stageMatrix, img);
            if (oldReserve === 7){
                shiftPress = false;
            }
            gameLoop()
        }
        if(code === keyBinds.hardDrop && !switchSpam && !restartSpam) {
            sounds.hardDrop.play();
            stage.erasePosition(piece);
            piece = pieceMovement.instantDrop(piece, stage.stageMatrix,false, points);
            stage.loadPosition(piece);
            setPieceToBlock(piece, stage.stageMatrix);
            clearInterval(set);
            stage.lineCompletion(stage.stageMatrix, points);
            points.scoredPoints(sounds);
            gameOver = stage.isGameOver(stage.stageMatrix,sounds);
            shiftCounter = false;
            updateCanvasWithMatrix(stage.stageMatrix, img);
            points.gameLevel();
            showScoreAndLevel(points);
            gameLoop()
        }
        if(code === keyBinds.rotate && piece.type !=='square'){
            if(!checkRotationCollision(piece, stage.stageMatrix)) {
            stage.erasePosition(piece);
            piece = pieceMovement.instantDrop(piece, stage.stageMatrix, true);
            piece = pieceMovement.leftRotation(piece);
            stage.loadPosition(piece);
            updateCanvasWithMatrix(stage.stageMatrix, img);
            instantDropGraph(piece, img);
            }
        }
        if(!checkHCollision(piece, code, stage.stageMatrix, keyBinds) && code !== keyBinds.hardDrop && !switchSpam && !restartSpam) {
            sounds.move.play();
            stage.erasePosition(piece);
            if(code === keyBinds.softDrop && checkVCollision(piece, stage.stageMatrix)){
            } else {piece = pieceMovement.inputMovement(piece,code,keyBinds);}
            piece = pieceMovement.instantDrop(piece, stage.stageMatrix, true);
            stage.loadPosition(piece);
            updateCanvasWithMatrix(stage.stageMatrix, img);
            instantDropGraph(piece, img);
        }
    }
});

document.querySelector('#restart').addEventListener('click', function(){
    if(!switchSpam && !restartSpam){
        restartSpam = true;
        switchSpam = true;
        clearPieceView();
        clearInterval(set);
        sounds.restart.play();
        sounds.backgroundMusic.stop();
        setTimeout(function(){
            init();
            restartSpam = false;
            switchSpam = false;
        }, 1500);
    }
});

document.querySelector('#startGame').addEventListener('click', function(){
    if(!switchSpam && !restartSpam){
        sounds.move.play();
        switchSpam = true;
        hideShowUi('game');
        clearPieceView();
        sounds.startTetris.play();
        sounds.backgroundMenuMusic.stop();
        gameOver = false;
        setTimeout(function(){
            init();
            switchSpam = false;
        }, 1500);
    }
});
document.querySelector('#keyBind').addEventListener('click', function(){
    sounds.move.play();
    hideShowUi('set');
});
document.querySelector('#quit').addEventListener('click', function(){
    if(!switchSpam && !restartSpam){
        switchSpam = true;
        sounds.quit.play();
        sounds.backgroundMusic.stop();
        clearInterval(set);
        hideShowUi('menu');
        setTimeout(function(){
            initMenu();
            switchSpam = false;
        }, 1500);
    }
});
document.querySelector('#arrowUp').addEventListener('click', function(){
    sounds.setLevel.play();
    points.levelSetter++;
    displaySetLevel(points)
});
document.querySelector('#arrowDown').addEventListener('click', function(){
    if (points.levelSetter > 0) {
        sounds.setLevel.play();
        points.levelSetter--;
        displaySetLevel(points)
    }
});
document.querySelector('.keyBind').addEventListener('click', e => {
    if(!keyBinds.cancelOthers) {
        sounds.move.play();
        keyBinds.id = e.target.id;
        keyBinds.selectedKey = document.getElementById(keyBinds.id).textContent;
        keyBinds.keySetter(e,sounds);
    }
});
document.addEventListener('keydown', function(event) {
    if(keyBinds.cancelOthers) {
        keyBinds.setKey(event.code);
        sounds.setLevel.play();
        keyBinds.usedKey? setTimeout(function () {
            keyBinds.resetField();
            keyBinds.cancelOthers = false;
            },1300): keyBinds.usedKey = false;
        keyBinds.usedKey = false;
    }
});
document.querySelector('#backToMenu').addEventListener('click', function(){
    if(!keyBinds.cancelOthers) {
        sounds.move.play();
        hideShowUi('menu');
    }
});
