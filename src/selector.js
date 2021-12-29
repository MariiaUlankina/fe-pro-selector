const selector = (obj, keys) => {
    // Ваше решение должно быть здесь

    let newObj = obj;

    keys.forEach((item) => {
        if(newObj[item]){
            newObj = newObj[item];

        }
        else newObj = ' ';  
        
    });

    return newObj;
};

module.exports = selector;
