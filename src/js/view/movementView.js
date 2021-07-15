export const updateCanvasWithMatrix = (matrix, img) => {
    const canvas = document.getElementById('stage');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let blockColor;
    ctx.drawImage(img.background, 0, 0, 250, 420 );
    for (let i = 0; i < 11; i++) {
        for (let j = 4; j < 24; j++) {
            if (matrix[i][j].includes('block') || matrix[i][j].includes('1')) {
                if (matrix[i][j].includes('lightblue')) {
                    blockColor = img.lightblueBlock;
                } else if (matrix[i][j].includes('green')) {
                    blockColor = img.greenBlock;
                } else if (matrix[i][j].includes('blue')) {
                    blockColor = img.blueBlock;
                } else if (matrix[i][j].includes('yellow')) {
                    blockColor = img.yellowBlock;
                } else if (matrix[i][j].includes('red')) {
                    blockColor = img.redBlock;
                } else if (matrix[i][j].includes('purple')) {
                    blockColor = img.purpleBlock;
                } else if (matrix[i][j].includes('orange')) {
                    blockColor = img.orangeBlock;
                }
                ctx.drawImage(blockColor,(i - 1) * 25, (j-4) * 25, 25, 25);
            }
        }
    }
};

export const instantDropGraph = (pos, img) => {
    const canvas = document.getElementById('stage');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img.clearBlock,pos.getXAPixels(), pos.graphA - 100, 25, 25);
    ctx.drawImage(img.clearBlock,pos.getXBPixels(), pos.graphB - 100, 25, 25);
    ctx.drawImage(img.clearBlock,pos.getXCPixels(), pos.graphC - 100, 25, 25);
    ctx.drawImage(img.clearBlock,pos.getXDPixels(), pos.graphD - 100, 25, 25);
};
