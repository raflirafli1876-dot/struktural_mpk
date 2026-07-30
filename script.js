const dataMPK = {
            ketuaAngkatan: "Danish Mirza",
  
        // ================= GEDUNG UTSMAN =================
          utsman: {
          bph: { 
          ketua: "Danish Mirza", 
          wakil: "Wakil Utsman", 
      sekretaris: "Sekretaris Utsman", 
      bendahara: "Bendahara Utsman" 
    },
    divisi: [
      {
        id: 1,
        nama: "Divisi Keagamaan",
        menteri: "Ahmad Subarjo",
        wakil: "Budi Santoso",
        staf: ["Caca", "Dedi", "Eka", "Fani", "Gita"]
      },
      {
        id: 2,
        nama: "Divisi Humas",
        menteri: "Hendra",
        wakil: "Indah",
        staf: ["Joko", "Kiki", "Lani"]
      }
      // Tinggal koma (,) lalu tambah divisi ke-3, 4, dst...
    ]
  },

  // ================= GEDUNG TANSRI =================
  tansri: {
    bph: { 
      ketua: "Attaya Fikri Rizqullah Sitompul", 
      wakil: "Maulida", 
      sekretaris: "orang", 
      bendahara: "orang" 
    },
    // SAMA JUGA DI SINI:
    divisi: [
      {
        id: 1,
        nama: "Divisi Bela Negara",
        menteri: "Mita",
        wakil: "Nico",
        staf: ["Oki", "Putri", "Rian"]
      }
    ]
  }
};

    let activeGedung = 'utsman';

    function renderDivisi(elementId, listDivisi) {
      const el = document.getElementById(elementId);
      el.innerHTML = listDivisi.map(div => `
        <div class="div-card">
          <div class="staff-popover">
            <div class="popover-title">
              <span>Daftar Staf / Partner</span>
              <span>${div.staf.length} Orang</span>
            </div>
            <div class="staff-list">
              ${div.staf.map(s => `<div class="staff-item">• ${s}</div>`).join('')}
            </div>
          </div>

          <div class="div-header">
            <span class="div-title">${div.nama}</span>
            <span class="div-badge">#${div.id}</span>
          </div>
          <div class="member-row">
            <span class="member-label">Menteri:</span>
            <span class="member-name">${div.menteri}</span>
          </div>
          <div class="member-row">
            <span class="member-label">Wakil Menteri:</span>
            <span class="member-name">${div.wakil}</span>
          </div>
        </div>
      `).join('');
    }

    function connectNodes(svgId, node1Id, node2Id) {
      const svg = document.getElementById(svgId);
      const n1 = document.getElementById(node1Id);
      const n2 = document.getElementById(node2Id);

      if(!n1 || !n2 || !svg) return;

      const svgRect = svg.getBoundingClientRect();
      const r1 = n1.getBoundingClientRect();
      const r2 = n2.getBoundingClientRect();

      const x1 = (r1.left + r1.width / 2) - svgRect.left;
      const y1 = r1.bottom - svgRect.top;
      const x2 = (r2.left + r2.width / 2) - svgRect.left;
      const y2 = r2.top - svgRect.top;

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const d = `M ${x1} ${y1} C ${x1} ${(y1 + y2)/2}, ${x2} ${(y1 + y2)/2}, ${x2} ${y2}`;
      path.setAttribute("d", d);
      svg.appendChild(path);
    }

    function drawMindmapLines(gedung) {
      const prefix = gedung === 'utsman' ? 'u' : 't';
      const svgId = `svg-${gedung}`;
      const svg = document.getElementById(svgId);
      svg.innerHTML = '';

      connectNodes(svgId, `${prefix}-root`, `${prefix}-ketua`);
      connectNodes(svgId, `${prefix}-ketua`, `${prefix}-wakil`);
      connectNodes(svgId, `${prefix}-ketua`, `${prefix}-sekretaris`);
      connectNodes(svgId, `${prefix}-ketua`, `${prefix}-bendahara`);
    }

    function loadData() {
      document.getElementById('u-ka').textContent = dataMPK.ketuaAngkatan;
      document.getElementById('u-kgedung').textContent = dataMPK.utsman.bph.ketua;
      document.getElementById('u-wakil-name').textContent = dataMPK.utsman.bph.wakil;
      document.getElementById('u-sekretaris-name').textContent = dataMPK.utsman.bph.sekretaris;
      document.getElementById('u-bendahara-name').textContent = dataMPK.utsman.bph.bendahara;
      renderDivisi('list-utsman', dataMPK.utsman.divisi);

      document.getElementById('t-ka').textContent = dataMPK.ketuaAngkatan;
      document.getElementById('t-kgedung').textContent = dataMPK.tansri.bph.ketua;
      document.getElementById('t-wakil-name').textContent = dataMPK.tansri.bph.wakil;
      document.getElementById('t-sekretaris-name').textContent = dataMPK.tansri.bph.sekretaris;
      document.getElementById('t-bendahara-name').textContent = dataMPK.tansri.bph.bendahara;
      renderDivisi('list-tansri', dataMPK.tansri.divisi);

      setTimeout(() => { drawMindmapLines('utsman'); }, 100);
    }

    function switchTab(gedungId, btn) {
      activeGedung = gedungId;
      document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(tb => tb.classList.remove('active'));
      
      document.getElementById(gedungId).classList.add('active');
      btn.classList.add('active');

      setTimeout(() => { drawMindmapLines(gedungId); }, 50);
    }

    window.addEventListener('resize', () => { drawMindmapLines(activeGedung); });
    window.onload = loadData;
