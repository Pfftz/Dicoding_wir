// try {
//     console.log("Awal blok try");   // (1)
//     errorCode;                      // (2)
//     console.log("Akhir blok try");  // (3)
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// name: Nama error yang terjadi.
// message : Pesan tentang detail error.
// stack : Informasi urutan kejadian yang menyebabkan error.
// Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang menyebabkan error.

try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log("Baris ini diabaikan");
} finally {
    console.log("Akan tetap dieksekusi");
}