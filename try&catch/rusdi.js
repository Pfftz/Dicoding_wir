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

// const json = '{ "age": 20 }';

// try {
//     const user = JSON.parse(json);

//     if (!user.name) {
//         throw new SyntaxError("'name' is required.");
//     }

//     console.log(user.name); // undefined
//     console.log(user.age);  // 20
// } catch (error) {
//     console.log(`JSON Error: ${error.message}`);
// }

const json = '{ "name": "Yoda", "age": 20 }';

try {
    const user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    errorCode;

    console.log(user.name); // Yoda
    console.log(user.age);  // 20
// } catch (error) {
//     console.log(`JSON Error: ${error.message}`);
// }
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}