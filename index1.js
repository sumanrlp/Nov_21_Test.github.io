
var section1_btn_Ref = document.getElementById('section1_btn')


function fn1() {

    let n = prompt("Enter the no. of lines")
    for(let i=0; i<n; i++) {

        console.log("********")
        console.log("\n")
    }
}

function fn2() {

    let n = prompt("Enter no. of lines")
    for(let i=0; i<n; i++) {
        
        
        for(let j=0; j<=i; j++) {
            console.log("*")
        }
        console.log("\n")
    }
}

function fn3() {

    let n = prompt("Enter no. of lines")
    for(let i=1; i<=n; i++) {
        
        
        for(let j=1; j<=2*i-1; j++) {
            console.log("*")
        }
        console.log("\n")
    }
    for(let i=4; i>0; i--) {
        
        
        for(let j=1; j<=2*i-1; j++) {
            console.log("*")
        }
        console.log("\n")
    }
}