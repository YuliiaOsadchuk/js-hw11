const getRandomChinese = async (lenght) => {
    return new Promise((resolve) => {
        let resultStr = '';
        let i = 0;
        for(let i = 0; i < lenght; i++){
            setTimeout(()=>{
                const sign = Date.now().toString().slice(-5);
                resultStr += String.fromCharCode(sign);
                resultStr.split('').length === 5 && resolve(resultStr);
            }, 50*i)
        }
    });
}

const getChineseWord = async () => {
    const chineseWord = await getRandomChinese(5);
    console.log(chineseWord);
}

getChineseWord();
