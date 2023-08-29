function getUsers(callback) {
    // simulate network delay
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];
        callback(users);
    }, 3000);
}

function usersCallback(users) {
    console.log(users);
}

getUsers(usersCallback);

// function getUsers(isOffline, callback) {
//     // simulate network delay
//     setTimeout(() => {
//         const users = ['John', 'Jack', 'Abigail'];

//         if (isOffline) {
//             callback(new Error('cannot retrieve users due offline'), null);
//             return;
//         }

//         callback(null, users);
//     }, 3000);
// }