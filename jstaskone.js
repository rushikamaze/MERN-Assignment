function reverseNumber(num) {
    const numStr = num.toString();
        const reversedStr = numStr.split('').reverse().join('');
        return parseInt(reversedStr, 10);
    }
  
  const x = 32243;
  console.log(reverseNumber(x));