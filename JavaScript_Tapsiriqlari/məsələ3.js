function sum(array) {

    

    let s=0;

    for (let i=0; i<array.length; i++){

      sample_array.forEach(number => s=s+number );

     break ;

     console.log(s);

       

    }

    return s;

}

const sample_array=[1,2,4,6,71,2,4,9,100];

console.log(sum(sample_array));
