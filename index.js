   

//lets solve a js challenge which is an array  of string
let a=['nitant','zebra','kiku','abhishek']
let s='a';


let c=[]
for (let i = 0; i < a.length; i++) {
   if (s<a[i]) {
    s=a[i]
    c.push(a[i])
   }if (s>a[i]) {
    c.unshift(a[i])
   } 
    
}
console.log(c)