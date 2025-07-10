/**
 * Disini anda boleh lihat Jawapan2 yang saya syorkan untuk soalan2 di Topik 11 - Praktis
 * Kod anda tak semestinya sama, terpulang pada cara masing2, asal betul.
 */

/* SOALAN 1 */
let nama = "Ali"
let umur = 20
console.log("Nama saya", nama, "dan saya berumur", umur)


/* SOALAN 2 */
umur = 25 // variable umur telah dicipta diatas, kita guna semula jadi tak perlu "let"

// jawapan salah, console.log masih lihat umur sebagai jenis number
console.log("Umur saya ialah", umur)

// disini kita guna gabungan teks (concatenation), setiap data yang bergabung dengan string
// akan diubah automatik ke jenis string (type coersion)
console.log("Umur saya ialah " + umur)

// disini kita ubah umur secara manual (explicit conversion) guna built-in String()
console.log("Umur saya ialah " + String(umur))


/* SOALAN 3 */
// ++ dihujung variable nombor bermaksud tambah 1 (increment by 1)
// guna -- untuk tolak 1
for (let nombor=1; nombor <= 10; nombor++) {
    if (nombor % 2 != 0) { // kita semak baki modulus, jika ada baki maka nombor ganjil
        console.log(nombor)
    }
}


/* SOALAN 4 */
let buah = [];      // array kosong
buah.push("epal")   // tambah nilai kedalam array
buah.push("oren")
buah.push("pisang")
buah.push("lemon")
console.log( buah.join(",")) // gabung array guna .join()


/* SOALAN 5 */
function tambah(a, b) {
    return a + b            // kembalikan nilai hasil operasi aritmetik
}

console.log( tambah(10, 5) )


/* SOALAN 6 */
function khabar(nama = "Saudara") {  // Nilai default parameter di Topik 13: Ekstra
    return "Apa khabar " + nama + "?"
}

console.log( khabar("Ahmad") )
console.log( khabar() ) // nama tidak diberi maka guna nilai default iaitu "Saudara"


/* SOALAN 7 */
function jumlah(senarai) {
    let hasil = 0
    for (let i=0; i < senarai.length; i++) {
        hasil = hasil + senarai[i]
    }
    console.log("Jumlah nombor ialah", hasil)
}

jumlah( [1, 2, 4, 5, 6, 8] )

// dibawah ialah kod yang lebih advance, tap tak semestinya lebih baik
// sebab kod diatas simple tapi lebih pantas
function jumlah_advance(senarai) {
    console.log("Jumlah nombor ialah", senarai.reduce((a, b) => a + b, 0) )
};

jumlah_advance( [1, 2, 4, 5, 6, 8] )


/* SOALAN 8 */
function jumlah_genap(senarai) {
    let hasil = 0
    for (let i=0; i < senarai.length; i++) {
        if (senarai[i] % 2 == 0) hasil = hasil + senarai[i] // jika hasil modulus tiada baki maka nombor genap
    }
    console.log("Jumlah nombor genap ialah", hasil)
}

jumlah_genap( [1, 2, 4, 5, 6, 8] )


/* SOALAN 9 */
let markah = 80
markah += 10 // += 10 sama dengan (markah = markah + 10)
console.log("Markah akhir ialah", markah)


/* SOALAN 10 */
let pelajar = {
    nama: "Siti",
    bapa: "Abdul", 
    jantina: "perempuan"
}

if (pelajar.jantina == "perempuan") {
    console.log(pelajar.nama, "binti", pelajar.bapa)
} else {
    console.log(pelajar.nama, "bin", pelajar.bapa)
}

// cara lebih advance guna tenary conditional (Topik 13 - Ekstra)
console.log(pelajar.nama, (pelajar.jantina == "perempuan") ? "binti" : "bin", pelajar.bapa)


/* SEKIAN, TERIMA KASIH */