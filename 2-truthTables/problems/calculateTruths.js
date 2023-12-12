const { or, and, calculateTruthTable } = require('../../utils/truthTableHelpers');

// Implement the imported helper functions from line 1
//    Read the export file for the explanation of how they work


function Make1()
{

    console.log( "A    B     !A || (A && B))");
    console.log( "--------------------------");

    for(let i=0;i<=1;i++)
    for(let j=0;j<=1;j++)
    {
        let A=!i; let B=i&&j;

        if(!i) A=1; else A=0;

        if(i && j) B=1; else B=0;

        //if(i==0) A=1;
        console.log(i + "    " + j + "     " + or(A,B))

    }
}

function Make2()
{

    // B || !A
    console.log( "A    B     B || !A");
    console.log( "--------------------------");

    for(let i=0;i<=1;i++)
    for(let j=0;j<=1;j++)
    {
        let A=!i; let B=i&&j;

        if(!i) A=1; else A=0;

        if(j) B=1; else B=0;

        //if(i==0) A=1;
        console.log(i + "    " + j + "     " + or(A,B))

    }
}


function Make3()
{

    // B || !A
    console.log( "A    B     !(A && !B)");
    console.log( "--------------------------");

    for(let i=0;i<=1;i++)
    for(let j=0;j<=1;j++)
    {
        let A=!i; let B=i&&j;

        if(!i) A=1; else A=0;

        if(j) B=1; else B=0;

        //if(i==0) A=1;
        console.log(i + "    " + j + "     " + or(A,B))

    }
}

function Make4()
{

    // B || !A
    console.log( "A    B     !(A || !B)");
    console.log( "--------------------------");

    for(let i=0;i<=1;i++)
    for(let j=0;j<=1;j++)
    {
        let ret;

        if( !(i||!j)) ret=1; else ret=0;

        //if(i==0) A=1;
        console.log(i + "    " + j + "     " + ret)

    }
}

function Make5()
{

    // B || !A
    console.log( "A    B     A || !A");
    console.log( "--------------------------");

    for(let i=0;i<=1;i++)
    for(let j=0;j<=1;j++)
    {
        let ret;

        if( i || !i) ret=1; else ret=0;

        //if(i==0) A=1;
        console.log(i + "    " + j + "     " + ret)

    }
}

function Make6()
{

    // B || !A
    console.log( "A    B     B && !B");
    console.log( "--------------------------");

    for(let i=0;i<=1;i++)
    for(let j=0;j<=1;j++)
    {
        let ret;

        if( j && !j) ret=1; else ret=0;

        //if(i==0) A=1;
        console.log(i + "    " + j + "     " + ret)

    }
}

function Make7()
{

    // B || !A
    console.log( "A    B     c    A && B || !C");
    console.log( "--------------------------");

    for(let i=0;i<=1;i++)
    for(let j=0;j<=1;j++)
    for(let k=0;k<=1;k++)
    {
        let ret;

        if( i && j || !k) ret=1; else ret=0;

        //if(i==0) A=1;
        console.log(i + "    " + j + "     " + k + "     " + ret)

    }
}

function Make8()
{

    // B || !A
    console.log( "A    B     c    !A || (B && C)");
    console.log( "--------------------------");

    for(let i=0;i<=1;i++)
    for(let j=0;j<=1;j++)
    for(let k=0;k<=1;k++)
    {
        let ret;

        if( !i || (j&&k)) ret=1; else ret=0;

        //if(i==0) A=1;
        console.log(i + "    " + j + "     " + k + "     " + ret)

    }
}


Make1();
console.log("");
Make2();
console.log("");
Make3();
console.log("");
Make4();
console.log("");
Make5();
console.log("");
Make6();
console.log("");
Make7();


// Example workflow for the problem directly below:
//    A    B     !A || (A && B)
//    -------------------
//    0    1      ?

//    1. !A -> 1
//    2. calculateTruthTable(0, and, 1) -> 0
//    3. calculateTruthTable(1, or, 0) -> 1
//    4. Answer: 1

/******************************************************************************/

// Update arguments to calculate and console.log returned value
//calculateTruthTable(0, and, 1); // 0
//calculateTruthTable(1, or, 0); // 1
