export default class KeyBinds {
    constructor(){
    }
    setDefault(){
        this.left = 'ArrowLeft';
        this.right = 'ArrowRight';
        this.rotate = 'ArrowUp';
        this.softDrop = 'ArrowDown';
        this.hardDrop = 'Space';
        this.hold = 'ShiftLeft';
        this.cancelOthers = false;
        this.id = '';
        this.selectedKey= '';
        this.usedKey = false;
        document.querySelector('#leftBind').textContent = 'Move Left: ArrowLeft';
        document.querySelector('#rightBind').textContent = 'Move Right: ArrowRight' ;
        document.querySelector('#rotateBind').textContent = 'Rotate Piece: ArrowUp';
        document.querySelector('#softDropBind').textContent = 'Soft Drop: ArrowDown';
        document.querySelector('#hardDropBind').textContent = 'Hard Drop: Space';
        document.querySelector('#holdBind').textContent = 'Hold Piece: ShiftLeft';
    }
    setKey(key) {
        if(key === this.left || key === this.right ||key === this.rotate || key === this.softDrop || key === this.hardDrop || key === this.hold){
            document.querySelector(`#${this.id}`).textContent = 'Key is already in use';
            this.usedKey = true;
        } else {
            document.querySelector(`#${this.id}`).style.color = 'white';
            switch (this.id){
                case 'leftBind':
                    this.left = key;
                    document.querySelector(`#${this.id}`).textContent = `Move Left: ${key}`;
                    break;
                case 'rightBind':
                    this.right = key;
                    document.querySelector(`#${this.id}`).textContent = `Move Right: ${key}`;
                    break;
                case 'rotateBind':
                    this.rotate = key;
                    document.querySelector(`#${this.id}`).textContent = `Rotate Piece: ${key}`;
                    break;
                case 'softDropBind':
                    this.softDrop = key;
                    document.querySelector(`#${this.id}`).textContent = `Soft Drop: ${key}`;
                    break;
                case 'hardDropBind':
                    this.hardDrop = key;
                    document.querySelector(`#${this.id}`).textContent = `Hard Drop: ${key}`;
                    break;
                case 'holdBind':
                    this.hold = key;
                    document.querySelector(`#${this.id}`).textContent = `Hold Piece: ${key}`;
                    break;
            }
            this.cancelOthers = false;
        }
    }

    keySetter(keyBind,sounds){
        if(!this.cancelOthers){
            document.querySelector(`#${this.id}`).style.color = 'red';
            if(keyBind.target.matches('#leftBind')){
                document.querySelector(`#${this.id}`).textContent = 'Please set a Left Key';
                this.cancelOthers = true;
            }else if (keyBind.target.matches('#rightBind')){
                document.querySelector(`#${this.id}`).textContent = 'Please set a Right Key';
                this.cancelOthers = true
            }else if (keyBind.target.matches('#rotateBind')){
                document.querySelector(`#${this.id}`).textContent = 'Please set a Rotate Key';
                this.cancelOthers = true
            }else if (keyBind.target.matches('#softDropBind')){
                document.querySelector(`#${this.id}`).textContent = 'Please set a Soft Drop Key';
                this.cancelOthers = true
            }else if (keyBind.target.matches('#hardDropBind')){
                document.querySelector(`#${this.id}`).textContent = 'Please set a Hard Drop Key';
                this.cancelOthers = true
            }else if (keyBind.target.matches('#holdBind')){
                document.querySelector(`#${this.id}`).textContent = 'Please set a Hold Key';
                this.cancelOthers = true
            }else if (keyBind.target.matches('#defaultKeys')){
                sounds.triple.play();
                this.setDefault();
            }
        }
    }
    resetField(){
        document.querySelector(`#${this.id}`).textContent = this.selectedKey;
        document.querySelector(`#${this.id}`).style.color = 'white';
    }
};
