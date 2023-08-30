/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */
// Import the 'promisify' function from the 'util' module.
import { promisify } from 'util';

// Define the asynchronous function 'getProvinces' which takes a 'countryId' and a 'callback'.
function getProvinces(countryId, callback) {
    // Simulate an asynchronous operation using 'setTimeout'.
    setTimeout(() => {
        // If the 'countryId' is 'id', call the 'callback' with an array of province objects.
        if (countryId === 'id') {
            callback(null, [
                { id: 'id-jk', name: 'Jakarta' },
                { id: 'id-bt', name: 'Banten' },
                { id: 'id-jr', name: 'Jawa Barat' },
            ]);
            return;
        }

        // If the 'countryId' is not 'id', call the 'callback' with an error.
        callback(new Error('Country not found'), null);
    }, 1000); // Set a timeout of 1000 milliseconds (1 second).
}

// Use the 'promisify' function to convert the 'getProvinces' function into a promise-based function.
const getPromise = promisify(getProvinces);

// Call the promise-based 'getPromise' function with the argument "id".
getPromise("id")
    .then(result => console.log(result)) // Log the result (array of province objects) if the promise resolves.
    .catch(err => console.log(err.message)); // Log the error message if the promise rejects.

// Export the promise-based 'getProvinces' function for use in other modules.
export const getProvinces = getPromise;
