// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {

  let IsBinary=true;

  if(str[1]=='x') IsBinary = false;



  let ret =0;

  if(IsBinary)
  {
     for(let i=2;i<str.length ; i++)
     {
       ret = ret*2;
       ret += str[i]-'0';
     }
  }
  else
  {
     for(let i=2;i<str.length;i++)
     {
      ret = ret*16;

      if(str[i]>='0' && str[i]<='9')
      {
        ret+=str[i]-'0';
      }
      else
      {
        if(str[i]=='a') ret += 10;
        if(str[i]=='b') ret += 11;
        if(str[i]=='c') ret += 12;
        if(str[i]=='d') ret += 13;
        if(str[i]=='e') ret += 14;
        if(str[i]=='f') ret += 15;

       // console.log('a'-'a');
        //ret = ret + str[i]-'a';
       // ret = ret+10;

      }
     }
  }

  return ret;

  // Your code here
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
