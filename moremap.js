// const friends=["tom", "Tony Dadk", "Tupu Dimpua"];

// const fLengths=friends.map(friend => friends.length);

// console.log(fLengths);

const products=[
    {name:'water bottle', price:10, color: "red"},
    {name:'Mobile', price:50, color: "Black"},
    {name:'Watch', price:500, color: "Black"},
];

// const productsName=products.map(product => product.name);

// products.forEach(product => console.log(product))

// console.log(productsName
//     );


    // const expensive = products.filter(product => product.color == "Black");

    // console.log(expensive);

    const blackItem=products.find(product => product.color == "Black");
    console.log(blackItem);

