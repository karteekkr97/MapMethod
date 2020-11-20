var size = prompt("Enter the size")
var arrayOld =new Array(size)

for(let i=0;i<size;i++)
{
    arrayOld[i]=prompt("Enter the elements")
}
console.log(arrayOld)

var arrayNew = arrayOld.map
(Element => Element*5)
console.log(arrayNew)