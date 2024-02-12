//break statments with for
for(let i = 1 ; i <= 5 ; i++){
    if(i == 3){
        break
    }
    console.log(i)
}

for(let i = 1 ; i <= 5 ; i++){
    console.log(i)
    if(i==3){
        break
    }
}

for(let i = 5 ; i >= 1 ; i--){
    if(i == 3){
        break
    }
    console.log(i)
}

//continue with for
for(let i = 1 ; i <= 5 ; i++){
    if(i == 2){
        continue
    }
    console.log(i)
}

for(let i = 5 ; i >= 1 ; i--){
    if(i == 2){
        continue
    }
    console.log(i)
}