document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    // 1. JANGAN hapus preventDefault di sini kalau mau pakai cara AJAX (biar nggak pindah halaman)
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const button = form.querySelector('button');
    const originalButtonText = button.innerText;

    // Ubah teks tombol pas lagi loading
    button.innerText = 'Mengirim...';
    button.disabled = true;

    // 2. Proses pengiriman ke Formspree lewat belakang layar (fetch)
    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Kalau berhasil
            alert('Terima kasih! Konfirmasi kamu sudah terkirim.');
            form.reset();
        } else {
            // Kalau ada masalah
            alert('Aduh, ada masalah pas ngirim. Coba lagi ya!');
        }
    }).catch(error => {
        alert('Eror jaringan, pastikan internet kamu aktif ya!');
    }).finally(() => {
        // Balikin tombol ke semula
        button.innerText = originalButtonText;
        button.disabled = false;
    });
});
