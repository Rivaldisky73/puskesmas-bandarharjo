// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Validasi sederhana pada form kontak
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Mencegah submit default
  
        // Ambil nilai dari form
        const nama = document.getElementById('nama').value.trim();
        const email = document.getElementById('email').value.trim();
        const pesan = document.getElementById('pesan').value.trim();
  
        if (nama === '' || email === '' || pesan === '') {
          alert('Mohon lengkapi semua data pada formulir!');
          return;
        }
  
        // Proses pengiriman data, misalnya menggunakan AJAX atau menampilkan pesan sukses
        alert('Terima kasih, pesan Anda telah terkirim!');
        // Reset form setelah pengiriman
        contactForm.reset();
      });
    }
  });
  