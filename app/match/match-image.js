const matchImage = (P, object, eventType, res) => {
    const userSet = object.userSet;
    const bufferSize = userSet.bufferSize;
    // console.log(object)
    const lPC = Math.sqrt((P[0] - object.center[0]) ** 2 + (P[1] - object.center[1]) ** 2);
    if (lPC <= object.width / 2 && lPC <= object.height / 2) {
        if ((eventType === 'mousemove' && !userSet.mouseOverEventEnable) ||
            (eventType === 'mousedown' && !userSet.clickable)) {
            // res.length = 0;
        } else {
            res.push({
                object,
                length: lPC,
            });
        }
    }
};

export default matchImage;