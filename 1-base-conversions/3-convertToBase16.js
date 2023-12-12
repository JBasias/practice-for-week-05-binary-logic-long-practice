// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase16 = el => {


  let ret = "";

  while(el!=0)
  {
   // ret = ret *16;
   if(el%16==15) ret = 'f' + ret;
   if(el%16==14) ret = 'e' + ret;
   if(el%16==13) ret = 'd' + ret;
   if(el%16==12) ret = 'c' + ret;
   if(el%16==11) ret = 'b' + ret;
   if(el%16==10) ret = 'a' + ret;
   if(el%16==9) ret = '9' + ret;
   if(el%16==8) ret = '8' + ret;
   if(el%16==7) ret = '7' + ret;
   if(el%16==6) ret = '6' + ret;
   if(el%16==5) ret = '5' + ret;
   if(el%16==4) ret = '4' + ret;
   if(el%16==3) ret = '3' + ret;
   if(el%16==2) ret = '2' + ret;
   if(el%16==1) ret = '1' + ret;
   if(el%16==0) ret = '0' + ret;
   /*
    ret+= element%16;*/
    el = (el - el%16)/16;
  }

  return '0x' + ret

  // Your code here
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
