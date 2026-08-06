/**
 * MPK GANESPIC XXV — Interactive Mindmap & Structure
 * Cleaned and refactored logic.
 */

// Data Struktural MPK Ganespic
const dataMPK = {
  ketuaAngkatan: "Danish Mirza",
  fotoKetuaAngkatan: "img/Danish Mirza.png",

  // ================= GEDUNG UTSMAN =================
  utsman: {
    bph: {
      ketua: { nama: "Danish Mirza", foto: "img/Danish Mirza.png" },
      wakil: [
        { nama: "Arfina Tiara Khalisa", foto: "img/Arfina Tiara.png" },
        { nama: "Ahmad Firdaus Al Farizi", foto: "img/ahmad firdaus.png" }
      ],
      sekretaris: [
        { nama: "Ilyas Rasyidin", foto: "img/ilyas.png" },
        { nama: "Jian Kayla Alisyah", foto: "img/jian kayla.png" },
        { nama: "Farras Putri Ardhiyanti ", foto: "img/farras.png" }
      ],
      bendahara: [
        { nama: "Salma Alfu Hasani", foto: "img/salma alfu.png" },
        { nama: "Hanif Abdullah Arsyad", foto: "img/hanif.png" }
      ]
    },
    divisi: [
      {
        id: 1,
        nama: "Divisi Humas",
        menteri: "M Ausa'a Nazhoron ",
        fotoMenteri: "img/m ausa.png", 
        wakil: "Nadia Kholifatun Nisa",
        fotoWakil: "img/nadia kholifatun.png",
        staf: []
      },
      {
        id: 2,
        nama: "Divisi Ekonomi",
        menteri: "Syifa Khoirunnisa",
        fotoMenteri: "img/syifa khoirunnisa.png",
        wakil: "Muhammad Fadhli Akbar",
        fotoWakil: "img/m fadhli.png",
        staf: []
      },
      {
        id: 3,
        nama: "Divisi Peribadatan",
        menteri: "Al Ahmad Fayyadh Abqari",
        fotoMenteri: "img/ahmad.png", 
        wakil: "Hanisa Mulyawati binti",
        fotoWakil: "img/hanisa.png",
        staf: []
      },
      {
        id: 4,
        nama: "Divisi Disterham",
        menteri: "Rafka Hadi Firmansyah ",
        fotoMenteri: "img/rafka.png", 
        wakil: "Futri Amelia Sari binti",
        fotoWakil: "img/futri amelia.png",
        staf: []
      },
      {
        id: 5,
        nama: "Divisi Sora",
        menteri: "Amania Safina Khalisha",
        fotoMenteri: "img/amania safina.png", 
        wakil: "Akmal Kafabi",
        fotoWakil: "img/akmal kafabi.png",
        staf: []
      },
      {
        id: 6,
        nama: "Divisi Ekstrakulikuler",
        menteri: "Muhamad Ibra ",
        fotoMenteri: "img/ibra.png", 
        wakil: "Tia Listiyana Putri",
        fotoWakil: "img/tia.png",
        staf: []
      },
      {
        id: 7,
        nama: "Divisi Gizi Kesehatan",
        menteri: "Irsal Auliya Yustiawan",
        fotoMenteri: "img/irsal.png", 
        wakil: "Fatihah Rizqia Khasanah",
        fotoWakil: "img/fatihah rizqia.png",
        staf: []
      },
      {
        id: 8,
        nama: "Divisi Kepramukaan",
        menteri: "Seswa Adi Wiyana",
        fotoMenteri: "img/seswa.png", 
        wakil: "Keerane Mukti Al Karimah",
        fotoWakil: "img/keerane.png",
        staf: []
      },
      {
        id: 9,
        nama: "Divisi Kebahasaan",
        menteri: "Jihan Mutia Ardhaneswari ",
        fotoMenteri: "img/jihan mutia.png", 
        wakil: "Radit Dwi Rahman",
        fotoWakil: "img/radit.png",
        staf: []
      },
      {
        id: 10,
        nama: "Divisi Informasi Dokumentasi",
        menteri: "Edelweiss Dalila Ayatillah",
        fotoMenteri: "img/edelweiss.png", 
        wakil: "Arsil Ibnu Rosyid",
        fotoWakil: "img/arsil.png",
        staf: []
      }
    ]
  },

  // ================= GEDUNG TANSRI =================
  tansri: {
    bph: {
      ketua: { nama: "Attaya Fikri Rizqullah Sitompul", foto: "img/attaya.png" },
      wakil: [
        { nama: "Maulidha Sophia", foto: "img/maulidha.png" }
      ],
      sekretaris: [
        { nama: "Alif Rizal Ramadhan", foto: "img/alif.png" },
        { nama: "Syafira Khoirun Nissa ", foto:"img/syafira khoirun.png"}
      ],
      bendahara: [
        { nama: "Rahma Dawlati Gemilang", foto: "img/rahma.png" },
        { nama: "Rizqi Muhammad Satria ", foto: "img/risqi m.png"}
      ]
    },
    divisi: [
      {
        id: 1,
        nama: "Divisi Humas",
        menteri: "Ananda Satria Rinjanie ",
        fotoMenteri: "img/ananda satria.png",
        wakil: "Syafa Khusnul Kamila",
        fotoWakil: "img/syafa khusnul.png",
        staf: []
      },
      {
        id: 2,
        nama: "Divisi Ekonomi",
        menteri: "Sulton Hidayat",
        fotoMenteri: "img/sulton.png",
        wakil: "Anugerah Rizky Aulia",
        fotoWakil: "img/aul.png",
        staf: [] 
      },
      {
        id: 3,
        nama: "Divisi Peribadatan",
        menteri: "Nazam Alfarizi",
        fotoMenteri: "img/nazam.png",
        wakil: "Ridha Nurul Muarifah ",
        fotoWakil: "img/ridha.png",
        staf: ["Rafli Adzanur Ramadhan","Amalia Khairani Salsabillah","Afrah Naira Hamna","Ahmad Rifai Akbar","Hafiz Yasin","Genio Abid A.","Dhaniswara T","Aris Zibran Al-Hajj","Fikri Kurniawan","Aulia Azmi","Adila Arifiana","Dennisa Nigella"]
      },
      {
        id: 4,
        nama: "Divisi Disterham",
        menteri: "Zulfikar Albadar",
        fotoMenteri: "img/badar.png",
        wakil: "Putri Aizy Rukhin",
        fotoWakil: "img/Putri aizy.png",
        staf: []
      },
      {
        id: 5,
        nama: "Divisi Sora",
        menteri: "Saskie Gita Anara",
        fotoMenteri: "img/saskie.png",
        wakil: "Bima Gumilang",
        fotoWakil: "img/bima.png",
        staf: []
      },
      {
        id: 6,
        nama: "Divisi Ekstrakulikuler",
        menteri: "Asyraf Khairul Azam",
        fotoMenteri: "img/asyraf.png",
        wakil: "Resqiya Al Farisza Sain",
        fotoWakil: "img/resqiya al.png",
        staf: []
      },
      {
        id: 7,
        nama: "Divisi Gizi kesehatan",
        menteri: "Ilmi Kautsar Averoes",
        fotoMenteri: "img/ilmi.png",
        wakil: "Tazkiyatul Nailal Muna ",
        fotoWakil: "img/tazkiyatul.png",
        staf: []
      },
      {
        id: 8,
        nama: "Divisi Kepramukaan",
        menteri: "Kachla Hutama Nasution",
        fotoMenteri: "img/kachla.png",
        wakil: "Wahyu Sekar Aji",
        fotoWakil: "img/wahyu.png",
        staf: []
      },
      {
        id: 9,
        nama: "Divisi Kebahasaan",
        menteri: "Zaky Fathir Rabbani",
        fotoMenteri: "img/zaky.png",
        wakil: "Atiqa Zivilia Aini ",
        fotoWakil: "img/atiqa.png",
        staf: []
      },
      {
        id: 10,
        nama: "Divisi Informasi Dokumentasi",
        menteri: "Khodad Asidad",
        fotoMenteri: "img/khodad.png",
        wakil: "Madina Sya'bani Rahman ",
        fotoWakil: "img/madina.png",
        staf: ["Rafli Adzanur Ramadhan","Aris Zibran Al-Hajj","Yusuf Hafidhudin"]
      }
    ]
  }
};

// State gedung aktif
let activeGedung = 'utsman';

// Inline SVG Avatar default yang indah (Gradient Hijau Sage dengan siluet modern)
const DEFAULT_AVATAR = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none'><rect width='100' height='100' rx='50' fill='url(%23gradient)'/><path d='M50 30a14 14 0 1 0 0 28 14 14 0 0 0 0-28zm0 34c-16.57 0-30 8.06-30 18v2h60v-2c0-9.94-13.43-18-30-18z' fill='%23ffffff' opacity='0.85'/><defs><linearGradient id='gradient' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' stop-color='%238caf95'/><stop offset='100%25' stop-color='%234a614e'/></linearGradient></defs></svg>`;

/**
 * Mendapatkan source avatar gambar.
 * Jika kosong, mengembalikan avatar default.
 */
function getAvatarSrc(src) {
  if (!src || src.trim() === "") {
    return DEFAULT_AVATAR;
  }
  // Koreksi path apabila merujuk ke root langsung
  if (src === "Logo_xxvganespic.png") {
    return "img/Logo_xxvganespic.png";
  }
  return src;
}

/**
 * Me-render daftar divisi ke dalam DOM.
 * Staf muncul hanya saat card diklik (toggle panel).
 */
function renderDivisi(elementId, listDivisi) {
  const el = document.getElementById(elementId);
  if (!el) return;

  el.innerHTML = listDivisi.map(div => `
    <div class="div-card" data-divisi-id="${div.id}" tabindex="0" role="button" aria-expanded="false">
      <div class="div-header">
        <span class="div-title">${div.nama}</span>
        <div class="div-header-right">
          <span class="div-badge">#${div.id}</span>
          <span class="div-toggle-icon" aria-hidden="true">▼</span>
        </div>
      </div>

      <div class="div-members-grid">
        <!-- Menteri -->
        <div class="member-box">
          <img src="${getAvatarSrc(div.fotoMenteri)}" alt="${div.menteri}" class="member-avatar">
          <div class="member-label">Menteri</div>
          <div class="member-name">${div.menteri}</div>
        </div>

        <!-- Wakil Menteri -->
        <div class="member-box">
          <img src="${getAvatarSrc(div.fotoWakil)}" alt="${div.wakil}" class="member-avatar">
          <div class="member-label">Wakil Menteri</div>
          <div class="member-name">${div.wakil}</div>
        </div>
      </div>

      <!-- Panel Staf (muncul saat diklik) -->
      <div class="staff-panel" aria-hidden="true">
        <div class="staff-panel-header">
          <span>Daftar Staf / Partner</span>
          <span class="staff-count-badge">${div.staf ? div.staf.length : 0} Orang</span>
        </div>
        <div class="staff-list">
          ${div.staf && div.staf.length > 0
            ? div.staf.map(s => `<div class="staff-item">• ${s}</div>`).join('')
            : '<div class="staff-item staff-empty">Belum ada data staf</div>'
          }
        </div>
      </div>
    </div>
  `).join('');

  // Attach click (dan keyboard) event ke setiap card
  el.querySelectorAll('.div-card').forEach(card => {
    const toggle = () => {
      const isOpen = card.classList.contains('open');
      // Tutup semua card lain dulu
      el.querySelectorAll('.div-card.open').forEach(c => {
        c.classList.remove('open');
        c.setAttribute('aria-expanded', 'false');
        const panel = c.querySelector('.staff-panel');
        if (panel) panel.setAttribute('aria-hidden', 'true');
      });
      // Buka/tutup card ini
      if (!isOpen) {
        card.classList.add('open');
        card.setAttribute('aria-expanded', 'true');
        const panel = card.querySelector('.staff-panel');
        if (panel) panel.setAttribute('aria-hidden', 'false');
      }
    };

    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
}

/**
 * Menghubungkan dua node dalam SVG menggunakan path bezier.
 */
function connectNodes(svgId, node1Id, node2Id) {
  const svg = document.getElementById(svgId);
  const n1 = document.getElementById(node1Id);
  const n2 = document.getElementById(node2Id);

  if (!n1 || !n2 || !svg) return;

  const svgRect = svg.getBoundingClientRect();
  const r1 = n1.getBoundingClientRect();
  const r2 = n2.getBoundingClientRect();

  // Posisi x1, y1 (tengah bawah node 1)
  const x1 = (r1.left + r1.width / 2) - svgRect.left;
  const y1 = r1.bottom - svgRect.top;
  
  // Posisi x2, y2 (tengah atas node 2)
  const x2 = (r2.left + r2.width / 2) - svgRect.left;
  const y2 = r2.top - svgRect.top;

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const d = `M ${x1} ${y1} C ${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`;
  path.setAttribute("d", d);
  svg.appendChild(path);
}

/**
 * Menggambar semua garis penghubung mindmap.
 */
function drawMindmapLines() {
  const svgId = 'mindmap-svg';
  const svg = document.getElementById(svgId);
  if (!svg) return;
  
  svg.innerHTML = '';

  // Hubungkan Root -> Ketua Gedung
  connectNodes(svgId, 'node-root', 'node-ketua');

  const data = dataMPK[activeGedung];
  if (!data) return;

  const roles = [
    { key: 'wakil', idPrefix: 'wakil' },
    { key: 'sekretaris', idPrefix: 'sekretaris' },
    { key: 'bendahara', idPrefix: 'bendahara' }
  ];

  roles.forEach(role => {
    const list = data.bph[role.key];
    if (list && list.length > 0) {
      // Hubungkan Ketua Gedung -> Node Pertama di Kolom ini
      connectNodes(svgId, 'node-ketua', `node-${role.idPrefix}-0`);

      // Hubungkan antar node di dalam kolom secara vertikal
      for (let i = 0; i < list.length - 1; i++) {
        connectNodes(svgId, `node-${role.idPrefix}-${i}`, `node-${role.idPrefix}-${i + 1}`);
      }
    }
  });
}

/**
 * Merender satu kolom BPH (Wakil, Sekretaris, Bendahara) secara dinamis.
 */
function renderBphColumn(columnId, roleLabel, members, idPrefix) {
  const colEl = document.getElementById(columnId);
  if (!colEl) return;

  colEl.innerHTML = members.map((member, idx) => `
    <div class="node" id="node-${idPrefix}-${idx}">
      <img src="${getAvatarSrc(member.foto)}" alt="${roleLabel}" class="node-avatar">
      <div class="role">${roleLabel}</div>
      <div class="name">${member.nama}</div>
    </div>
  `).join('');
}

/**
 * Memuat dan meng-update DOM dengan data gedung terpilih.
 */
function renderGedung(gedungId) {
  const data = dataMPK[gedungId];
  if (!data) return;

  // Render Title Gedung
  const titleText = gedungId === 'utsman' ? 'Struktural Gedung Utsman' : 'Struktural Gedung Tansri';
  document.getElementById('gedung-title').textContent = titleText;

  // Render Ketua Angkatan (Root)
  document.getElementById('ka-img').src = getAvatarSrc(dataMPK.fotoKetuaAngkatan);
  document.getElementById('ka-name').textContent = dataMPK.ketuaAngkatan;

  // Render Ketua Gedung
  document.getElementById('kgedung-img').src = getAvatarSrc(data.bph.ketua.foto);
  document.getElementById('kgedung-name').textContent = data.bph.ketua.nama;
  document.getElementById('kgedung-role').textContent = `Ketua MPK Gedung ${gedungId.charAt(0).toUpperCase() + gedungId.slice(1)}`;

  // Render Wakil, Sekretaris, Bendahara secara dinamis
  renderBphColumn('col-wakil', 'Wakil Ketua', data.bph.wakil, 'wakil');
  renderBphColumn('col-sekretaris', 'Sekretaris', data.bph.sekretaris, 'sekretaris');
  renderBphColumn('col-bendahara', 'Bendahara', data.bph.bendahara, 'bendahara');

  // Render Daftar Divisi
  renderDivisi('list-divisi', data.divisi);

  // Gambar ulang garis setelah DOM selesai me-layout
  setTimeout(drawMindmapLines, 100);
}

// Inisialisasi Event Listener
document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const gedungId = btn.getAttribute('data-gedung');
      if (!gedungId) return;

      // Update state
      activeGedung = gedungId;

      // Ganti class active pada tab button
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Render gedung terpilih
      renderGedung(activeGedung);
    });
  });

  // Load awal data
  renderGedung(activeGedung);
});

// Gambar ulang garis saat resize window
window.addEventListener('resize', drawMindmapLines);

// ===============================================
// DATA TIM PENGEMBANG
// ===============================================
const timPengembang = [
  {
    nama: "Rafli Adzanur Ramadhan",
    kelas: "XA - Pertanian",
    noId: "20230323",
    foto: "img/IMG_20260804_111113_986.jpg",
    portofolio: "https://rafliadzanurramadhan.vercel.app/"
  },
  {
    nama: "",
    kelas: "",
    noId: "",
    foto: "",
    portofolio: ""
  }
];

// ===============================================
// FUNGSI MODAL TIM PENGEMBANG
// ===============================================

/**
 * Membuka modal tim pengembang dan mengisi kartu anggota.
 */
function openTimPengembangModal() {
  const modal = document.getElementById('modal-tim-pengembang');
  const grid = document.getElementById('tim-pengembang-grid');
  if (!modal || !grid) return;

  grid.innerHTML = timPengembang.map(orang => `
    <div class="tim-card">
      <img
        src="${getAvatarSrc(orang.foto)}"
        alt="${orang.nama}"
        class="tim-card-foto"
      >
      <div class="tim-card-nama">${orang.nama}</div>
      <div class="tim-card-kelas">${orang.kelas}</div>
      <div class="tim-card-id">No. ID: ${orang.noId}</div>
      ${orang.portofolio && orang.portofolio !== '#'
        ? `<a href="${orang.portofolio}" target="_blank" rel="noopener noreferrer" class="tim-card-porto-btn">Lihat Portofolio</a>`
        : `<span class="tim-card-porto-btn disabled">Lihat Portofolio</span>`
      }
    </div>
  `).join('');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Menutup modal tim pengembang.
 */
function closeTimPengembangModal() {
  const modal = document.getElementById('modal-tim-pengembang');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Event listener untuk modal (di-attach setelah DOM ready)
document.addEventListener('DOMContentLoaded', () => {
  const btnTimPengembang = document.getElementById('btn-tim-pengembang');
  const modalOverlay = document.getElementById('modal-tim-pengembang');
  const btnTutupModal = document.getElementById('btn-tutup-modal');

  if (btnTimPengembang) {
    btnTimPengembang.addEventListener('click', openTimPengembangModal);
  }

  if (btnTutupModal) {
    btnTutupModal.addEventListener('click', closeTimPengembangModal);
  }

  // Klik di luar modal = tutup
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeTimPengembangModal();
    });
  }

  // Tekan ESC = tutup modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTimPengembangModal();
  });
});

// ===============================================
// DARK MODE TOGGLE
// ===============================================

/**
 * Mengaktifkan atau menonaktifkan dark mode.
 * Hanya warna putih/abu yang berubah — warna hijau tetap.
 */
function setDarkMode(enabled) {
  const btn = document.getElementById('btn-dark-mode');
  if (enabled) {
    document.body.classList.add('dark');
    if (btn) btn.textContent = '☀️ Light Mode';
    localStorage.setItem('darkMode', 'on');
  } else {
    document.body.classList.remove('dark');
    if (btn) btn.textContent = '🌙 Dark Mode';
    localStorage.setItem('darkMode', 'off');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const btnDark = document.getElementById('btn-dark-mode');

  // Terapkan preferensi yang tersimpan
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'on') {
    setDarkMode(true);
  }

  // Klik tombol toggle
  if (btnDark) {
    btnDark.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark');
      setDarkMode(!isDark);
    });
  }
});
