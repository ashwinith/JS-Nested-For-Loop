// Nested For Loop Task 1

document.write("Task 1 </br>");

for(let counter1=0;counter1<4;counter1++)
{
    for(let counter2=0; counter2<4;counter2++)
    {
        document.write(" * ");
    }
    document.write("</br>");
}



// Nested For Loop Task 2

document.write("Task 2 </br>");

for (let i=0;i<4;i++)
{
    for(let j=4;i<j;j--)
    {
        document.write(" * ");

    }
    document.write("</br>");
}

// Nested For Loop Task 3 Star Pyramid

for(let cntr1=0;cntr1<10;cntr1++)
{
    for(let cntr2=0;cntr2<=10-cntr1;cntr2++)
    {
        document.write("&nbsp;");
    }
    for(let cntr3=0; cntr3<=cntr1;cntr3++)
    {
        
        document.write("*\t");
        
    }
    
    document.write("</br>");
}

// Nested For Loop Task 4

for(let star1=0;star1<10;star1++)
{
    for(let star2=0;star2<=10;star2++)
    {
        document.write("&nbsp;");
    }
    for(let star3=0; star3<=star1;star3++)
    {
        
        document.write("*\t");
        
    }
    
    document.write("</br>");
}
