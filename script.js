<section class="rsvp">
    <h3>Konfirmasi Kehadiran</h3>
    <form action="https://formspree.io/f/xgorjrg..." method="POST" style="display: flex; flex-direction: column; gap: 10px;">
        <input type="text" name="Nama" placeholder="Nama Anda" required style="padding: 10px; border-radius: 8px; border: 1px solid #ccc;">
        <input type="email" name="Email" placeholder="Email Anda" required style="padding: 10px; border-radius: 8px; border: 1px solid #ccc;">
        <select name="Kehadiran" required style="padding: 10px; border-radius: 8px; border: 1px solid #ccc;">
            <option value="">Apakah Anda hadir?</option>
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
        </select>
        <button type="submit" style="background-color: #7b1fa2; color: white; padding: 12px; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
            Kirim Konfirmasi
        </button>
    </form>
</section>

// Animasi saat scroll
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Amati elemen dengan kelas tertentu
document.querySelectorAll('.event-details, .rsvp, .couple').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
