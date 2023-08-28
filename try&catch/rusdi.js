// const json = '{ "age": 20 }';

// try {
//     const user = JSON.parse(json);

//     console.log(user.name); // undefined
//     console.log(user.age);  // 20
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

// Ketika properti user.name tidak memiliki nilai, maka program akan menghasilkan SyntaxError

const json = '{ "age": 20 }';

try {
    const user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}