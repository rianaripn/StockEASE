// =============================================
// DATA AWAL
// =============================================
let supplier = [
    { id: 1, nama: 'PT Sumber Makmur', telp: '081234567890', alamat: 'Bandung' },
    { id: 2, nama: 'CV Berkah Jaya', telp: '089876543210', alamat: 'Jakarta' },
    { id: 3, nama: 'UD Maju Jaya', telp: '082345678901', alamat: 'Surabaya' },
    { id: 4, nama: 'PT Indo Sejahtera', telp: '085678901234', alamat: 'Medan' },
    { id: 5, nama: 'CV Nusa Indah', telp: '087890123456', alamat: 'Semarang' }
];

let produk = [
    { id: 1, nama: 'Indomie Goreng', kategori: 'makanan', satuan: 'dus', stok: 240, harga: 3500, minStok: 50, supplierId: 1 },
    { id: 2, nama: 'Indomie Kuah', kategori: 'makanan', satuan: 'dus', stok: 180, harga: 3500, minStok: 50, supplierId: 1 },
    { id: 3, nama: 'Mie Sedaap Goreng', kategori: 'makanan', satuan: 'dus', stok: 45, harga: 3200, minStok: 50, supplierId: 3 },
    { id: 4, nama: 'Mie Sedaap Kuah', kategori: 'makanan', satuan: 'dus', stok: 120, harga: 3200, minStok: 50, supplierId: 3 },
    { id: 5, nama: 'Chitato Original', kategori: 'makanan', satuan: 'pcs', stok: 80, harga: 12000, minStok: 20, supplierId: 2 },
    { id: 6, nama: 'Chitato Sapi Panggang', kategori: 'makanan', satuan: 'pcs', stok: 65, harga: 12000, minStok: 20, supplierId: 2 },
    { id: 7, nama: 'Biscuit Roma', kategori: 'makanan', satuan: 'dus', stok: 30, harga: 8500, minStok: 20, supplierId: 4 },
    { id: 8, nama: 'Sari Roti Tawar', kategori: 'makanan', satuan: 'pcs', stok: 12, harga: 18000, minStok: 20, supplierId: 4 },
    { id: 9, nama: 'Aqua 600ml', kategori: 'minuman', satuan: 'dus', stok: 8, harga: 4000, minStok: 20, supplierId: 2 },
    { id: 10, nama: 'Aqua 1.5L', kategori: 'minuman', satuan: 'dus', stok: 50, harga: 8000, minStok: 15, supplierId: 2 },
    { id: 11, nama: 'Teh Botol Sosro', kategori: 'minuman', satuan: 'dus', stok: 5, harga: 5000, minStok: 20, supplierId: 1 },
    { id: 12, nama: 'Pocari Sweat 500ml', kategori: 'minuman', satuan: 'pcs', stok: 60, harga: 7000, minStok: 20, supplierId: 1 },
    { id: 13, nama: 'Coca Cola 330ml', kategori: 'minuman', satuan: 'dus', stok: 35, harga: 6500, minStok: 15, supplierId: 5 },
    { id: 14, nama: 'Sprite 330ml', kategori: 'minuman', satuan: 'dus', stok: 28, harga: 6500, minStok: 15, supplierId: 5 },
    { id: 15, nama: 'Teh Pucuk Harum', kategori: 'minuman', satuan: 'dus', stok: 7, harga: 4500, minStok: 20, supplierId: 3 },
    { id: 16, nama: 'Sabun Lifebuoy', kategori: 'kebersihan', satuan: 'pcs', stok: 55, harga: 8500, minStok: 15, supplierId: 2 },
    { id: 17, nama: 'Sabun Dettol', kategori: 'kebersihan', satuan: 'pcs', stok: 40, harga: 12000, minStok: 15, supplierId: 2 },
    { id: 18, nama: 'Rinso Deterjen 800gr', kategori: 'kebersihan', satuan: 'pcs', stok: 30, harga: 15000, minStok: 10, supplierId: 3 },
    { id: 19, nama: 'Molto Pewangi', kategori: 'kebersihan', satuan: 'pcs', stok: 9, harga: 18000, minStok: 15, supplierId: 4 },
    { id: 20, nama: 'Sunlight Pencuci Piring', kategori: 'kebersihan', satuan: 'pcs', stok: 45, harga: 9000, minStok: 10, supplierId: 5 },
    { id: 21, nama: 'Pepsodent 190gr', kategori: 'kebersihan', satuan: 'pcs', stok: 70, harga: 14000, minStok: 20, supplierId: 1 },
    { id: 22, nama: 'Shampo Pantene', kategori: 'kebersihan', satuan: 'pcs', stok: 6, harga: 22000, minStok: 15, supplierId: 5 },
    { id: 23, nama: 'Tisu Paseo', kategori: 'lainnya', satuan: 'pcs', stok: 100, harga: 8000, minStok: 20, supplierId: 4 },
    { id: 24, nama: 'Kantong Plastik 1kg', kategori: 'lainnya', satuan: 'pcs', stok: 200, harga: 5000, minStok: 50, supplierId: 3 },
    { id: 25, nama: 'Korek Api', kategori: 'lainnya', satuan: 'dus', stok: 15, harga: 2000, minStok: 20, supplierId: 2 }
];

let transaksi = [];
let aksiKonfirmasi = null;
let editIdSupplier = null;   // null = mode tambah, angka = mode edit
let transaksiProdukId = null; // id produk yang sedang ditransaksikan
let editStokId = null;        // id produk yang sedang diedit

// =============================================
// LOCAL STORAGE
// =============================================
function simpanKeStorage() {
    localStorage.setItem("produk", JSON.stringify(produk));
    localStorage.setItem("supplier", JSON.stringify(supplier));
    localStorage.setItem("transaksi", JSON.stringify(transaksi));
}

function muatDariStorage() {
    const dataProduk = localStorage.getItem("produk");
    const dataSupplier = localStorage.getItem("supplier");
    const dataTransaksi = localStorage.getItem("transaksi");
    if (dataProduk) produk = JSON.parse(dataProduk);
    if (dataSupplier) supplier = JSON.parse(dataSupplier);
    if (dataTransaksi) transaksi = JSON.parse(dataTransaksi);
}

// =============================================
// NAVIGASI SIDEBAR
// =============================================
const semuaSection = [
    document.getElementById('menuDashboard'),
    document.getElementById('menuSemuaProduk'),
    document.getElementById('menuSupplier'),
    document.getElementById('menuManageStok'),
    document.getElementById('menuRiwayat')
];

const semuaLi = ['li-dashboard', 'li-semua', 'li-supplier', 'li-manage-stok', 'li-riwayat'];

function pindahHalaman(indexAktif) {
    // Sembunyikan semua section
    semuaSection.forEach(function (s) {
        s.style.display = 'none';
    });
    // Hapus class active dari semua li
    semuaLi.forEach(function (id) {
        document.getElementById(id).classList.remove('active');
    });
    // Tampilkan section yang dipilih
    semuaSection[indexAktif].style.display = 'flex';
    document.getElementById(semuaLi[indexAktif]).classList.add('active');
}

document.getElementById('linkDashboard').addEventListener('click', function (e) {
    e.preventDefault();
    pindahHalaman(0);
    renderTabelDashboard(produk);
    updateStats(produk);
});

document.getElementById('linkSemuaProduk').addEventListener('click', function (e) {
    e.preventDefault();
    pindahHalaman(1);
    renderTabelSemua(produk);
});

document.getElementById('linkSupplier').addEventListener('click', function (e) {
    e.preventDefault();
    pindahHalaman(2);
    renderTabelSupplier();
});

document.getElementById('linkManageStok').addEventListener('click', function (e) {
    e.preventDefault();
    pindahHalaman(3);
    aktifkanTab('transaksi-baru');
});

document.getElementById('linkRiwayat').addEventListener('click', function (e) {
    e.preventDefault();
    pindahHalaman(4);
    renderTabelRiwayat();
});

// =============================================
// RENDER TABEL DASHBOARD
// =============================================
function renderTabelDashboard(data) {
    const tbody = document.getElementById('tabelBodyDashboard');
    tbody.innerHTML = '';

    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:1.5rem;color:#94a3b8;">Tidak ada data produk</td></tr>';
        return;
    }

    data.forEach(function (item) {
        var namaSupplier = supplier.find(function (s) { return s.id === item.supplierId; });
        var nilaiStok = item.stok * item.harga;
        var stockWarning = item.stok <= item.minStok;

        var baris = '<tr>' +
            '<td>' + item.nama + '</td>' +
            '<td>' + (namaSupplier ? namaSupplier.nama : '-') + '</td>' +
            '<td style="text-transform:capitalize;">' + item.kategori + '</td>' +
            '<td style="color:' + (stockWarning ? '#e53e3e' : '#1a1a2e') + ';font-weight:' + (stockWarning ? '600' : '400') + '">' + item.stok + ' ' + item.satuan + '</td>' +
            '<td>Rp ' + item.harga.toLocaleString('id-ID') + '</td>' +
            '<td>Rp ' + nilaiStok.toLocaleString('id-ID') + '</td>' +
            '</tr>';
        tbody.innerHTML += baris;
    });
}

// =============================================
// RENDER TABEL SEMUA PRODUK
// =============================================
function renderTabelSemua(data) {
    const tbody = document.getElementById('tabelBodySemua');
    tbody.innerHTML = '';

    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:1.5rem;color:#94a3b8;">Tidak ada data produk</td></tr>';
        return;
    }

    data.forEach(function (item) {
        var namaSupplier = supplier.find(function (s) { return s.id === item.supplierId; });
        var nilaiStok = item.stok * item.harga;
        var stockWarning = item.stok <= item.minStok;

        var baris = '<tr>' +
            '<td>' + item.nama + '</td>' +
            '<td>' + (namaSupplier ? namaSupplier.nama : '-') + '</td>' +
            '<td style="text-transform:capitalize;">' + item.kategori + '</td>' +
            '<td style="color:' + (stockWarning ? '#e53e3e' : '#1a1a2e') + ';font-weight:' + (stockWarning ? '600' : '400') + '">' + item.stok + ' ' + item.satuan + '</td>' +
            '<td>Rp ' + item.harga.toLocaleString('id-ID') + '</td>' +
            '<td>' + item.minStok + ' ' + item.satuan + '</td>' +
            '<td>Rp ' + nilaiStok.toLocaleString('id-ID') + '</td>' +
            '</tr>';
        tbody.innerHTML += baris;
    });
}

// =============================================
// RENDER TABEL SUPPLIER
// =============================================
function renderTabelSupplier() {
    const tbody = document.getElementById('tabelBodySupplier');
    tbody.innerHTML = '';

    if (supplier.length === 0) {
        tbody.innerHTML = `
            <tr><td colspan="5" style="text-align:center;padding:1.5rem;color:#94a3b8;">
            Belum ada data supplier
            </td></tr>`;
        return;
    }

    supplier.forEach(function (s) {
        // Hitung jumlah produk milik supplier ini
        const jumlahProduk = produk.filter(function (p) { return p.supplierId === s.id; }).length;

        const baris = `
        <tr>
            <td>${s.nama}</td>
            <td>${s.telp}</td>
            <td>${s.alamat}</td>
            <td>${jumlahProduk} produk</td>
            <td class="aksi-col">
                <button onclick="bukaEditSupplier(${s.id})" class="btnEdit">Edit</button>
                <button onclick="hapusSupplier(${s.id})" class="btnHapus">Hapus</button>
            </td>
        </tr>`;
        tbody.innerHTML += baris;
    });
}


// =============================================
// UPDATE STATS DASHBOARD
// =============================================
function updateStats(data) {
    const totalProduk = data.length;
    const totalNilaiStok = data.reduce(function (total, item) {
        return total + (item.stok * item.harga);
    }, 0);
    const stockMenipis = data.filter(function (item) {
        return item.stok <= item.minStok;
    }).length;

    document.getElementById('statTotalProduk').textContent = totalProduk;
    document.getElementById('statNilaiStok').textContent = 'Rp ' + totalNilaiStok.toLocaleString('id-ID');
    document.getElementById('statStokMenipis').textContent = stockMenipis + ' Produk';

    const alertStok = document.getElementById('alertStok');
    const teksAlert = document.getElementById('teksAlert');

    if (stockMenipis > 0) {
        alertStok.classList.add('danger');
        teksAlert.textContent = 'Ada ' + stockMenipis + ' produk dengan stok di bawah minimum! Segera lakukan restock.';
    } else {
        alertStok.classList.remove('danger');
        teksAlert.textContent = 'Stok inventaris aman!';
    }
}

// =============================================
// FILTER DASHBOARD
// =============================================
function filterDanSort(dataSumber, kategori, supplierId, status) {
    let hasil = [...dataSumber];

    if (kategori) {
        hasil = hasil.filter(function (item) { return item.kategori === kategori; });
    }
    if (supplierId) {
        hasil = hasil.filter(function (item) { return item.supplierId === parseInt(supplierId); });
    }
    if (status === 'menipis') {
        hasil = hasil.filter(function (item) { return item.stok <= item.minStok; });
    } else if (status === 'aman') {
        hasil = hasil.filter(function (item) { return item.stok > item.minStok; });
    }

    return hasil;
}

function tampilkanFilterDashboard() {
    const hasil = filterDanSort(
        produk,
        document.getElementById('filterKategori').value,
        document.getElementById('filterSupplier').value,
        document.getElementById('filterStatus').value
    );
    renderTabelDashboard(hasil);
    updateStats(hasil);
}

['filterKategori', 'filterSupplier', 'filterStatus'].forEach(function (id) {
    document.getElementById(id).addEventListener('change', tampilkanFilterDashboard);
});

document.getElementById('btnResetFilter').addEventListener('click', function () {
    ['filterKategori', 'filterSupplier', 'filterStatus'].forEach(function (id) {
        document.getElementById(id).value = '';
    });
    renderTabelDashboard(produk);
    updateStats(produk);
});

// =============================================
// FITUR SEARCH - SEMUA PRODUK
// =============================================
document.getElementById('searchInput').addEventListener('input', function () {
    const keyword = this.value.toLowerCase().trim();
    const hasil = produk.filter(function (item) {
        return item.nama.toLowerCase().includes(keyword);
    });
    renderTabelSemua(hasil);
});

document.getElementById('btnResetSearch').addEventListener('click', function () {
    document.getElementById('searchInput').value = '';
    renderTabelSemua(produk);
});

// =============================================
// ISI DROPDOWN SUPPLIER (filter & form)
// =============================================
function isiDropdownSupplier() {
    var opts = supplier.map(function (s) {
        return '<option value="' + s.id + '">' + s.nama + '</option>';
    }).join('');

    document.getElementById('filterSupplier').innerHTML = '<option value="">Semua Supplier</option>' + opts;
    document.getElementById('tbSupplier').innerHTML = '<option value="">Pilih Supplier</option>' + opts;
    document.getElementById('filterSupplierTS').innerHTML = '<option value="">Semua Supplier</option>' + opts;
    document.getElementById('esSupplier').innerHTML = '<option value="">Pilih Supplier</option>' + opts;
}

function isiDropdownProdukRiwayat() {
    var el = document.getElementById('filterProdukRiwayat');
    el.innerHTML = '<option value="">Semua Produk</option>';
    produk.forEach(function (p) {
        el.innerHTML += '<option value="' + p.id + '">' + p.nama + '</option>';
    });
}

// =============================================
// TOAST NOTIFICATION
// =============================================
function showToast(pesan, tipe) {
    var toast = document.getElementById('toast');
    toast.textContent = pesan;
    toast.className = 'toast toast-' + (tipe || 'sukses') + ' tampil';
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function () {
        toast.classList.remove('tampil');
    }, 2800);
}

// =============================================
// MODAL KONFIRMASI (HAPUS)
// =============================================
function tampilKonfirmasi(pesan, aksi) {
    document.getElementById('modalPesan').innerHTML = pesan;
    aksiKonfirmasi = aksi;
    document.getElementById('modalKonfirmasi').classList.add('aktif');
}

document.getElementById('btnModalYes').addEventListener('click', function () {
    if (aksiKonfirmasi) aksiKonfirmasi();
    aksiKonfirmasi = null;
    document.getElementById('modalKonfirmasi').classList.remove('aktif');
});

document.getElementById('btnModalNo').addEventListener('click', function () {
    aksiKonfirmasi = null;
    document.getElementById('modalKonfirmasi').classList.remove('aktif');
});

// =============================================
// HAPUS SUPPLIER
// =============================================
function hapusSupplier(id) {
    const hapusEl = supplier.find(function (s) { return s.id === id; });
    if (!hapusEl) return;

    const jumlahProduk = produk.filter(function (p) { return p.supplierId === id; }).length;
    let pesanTambahan = '';
    if (jumlahProduk > 0) {
        pesanTambahan = '<br><span style="color:#e53e3e;font-size:0.85rem;">⚠ Supplier ini memiliki ' +
            jumlahProduk + ' produk terdaftar.</span>';
    }

    tampilKonfirmasi(
        'Apakah anda yakin akan menghapus supplier <span style="font-weight:600;color:#e53e3e;">' +
        hapusEl.nama + '</span>?' + pesanTambahan,
        function () {
            supplier = supplier.filter(function (s) { return s.id !== id; });
            simpanKeStorage();
            isiDropdownSupplier();
            renderTabelSupplier();
            showToast('Supplier berhasil dihapus.', 'hapus');
        }
    );
}

// =============================================
// MANAGE STOK — TAB SYSTEM
// =============================================
function aktifkanTab(namaTab) {
    document.querySelectorAll('#menuManageStok .tab-btn').forEach(function (btn) {
        btn.classList.toggle('aktif', btn.dataset.tab === namaTab);
    });
    document.querySelectorAll('#menuManageStok .tab-content').forEach(function (el) {
        el.style.display = 'none';
    });
    document.getElementById('tab-' + namaTab).style.display = 'flex';

    if (namaTab === 'transaksi-stok') renderTabelTS(produk);
    if (namaTab === 'edit-stok') renderTabelES(produk);
}

document.querySelectorAll('#menuManageStok .tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { aktifkanTab(this.dataset.tab); });
});

// --- TAB 1: TRANSAKSI BARU ---
function resetFormTransaksiBaru() {
    ['tbNama', 'tbKategori', 'tbSatuan', 'tbStok', 'tbMinStok', 'tbHarga', 'tbSupplier'].forEach(function (id) {
        document.getElementById(id).value = '';
    });
    document.getElementById('pesanErrorTransaksiBaru').textContent = '';
}

document.getElementById('btnResetTransaksiBaru').addEventListener('click', resetFormTransaksiBaru);

document.getElementById('btnSimpanTransaksiBaru').addEventListener('click', function () {
    var nama = document.getElementById('tbNama').value.trim();
    var kategori = document.getElementById('tbKategori').value;
    var satuan = document.getElementById('tbSatuan').value;
    var stok = parseInt(document.getElementById('tbStok').value);
    var minStok = parseInt(document.getElementById('tbMinStok').value);
    var harga = parseInt(document.getElementById('tbHarga').value);
    var supplierId = parseInt(document.getElementById('tbSupplier').value);
    var pesanError = document.getElementById('pesanErrorTransaksiBaru');

    if (!nama || !kategori || !satuan || isNaN(stok) || isNaN(minStok) || isNaN(harga) || isNaN(supplierId)) {
        pesanError.textContent = 'Semua field harus diisi dengan benar!';
        return;
    }
    if (stok < 0 || harga < 0 || minStok < 0) {
        pesanError.textContent = 'Stok, harga, dan stok minimal tidak boleh negatif!';
        return;
    }

    var idBaru = produk.length > 0 ? Math.max.apply(null, produk.map(function (p) { return p.id; })) + 1 : 1;
    produk.push({ id: idBaru, nama: nama, kategori: kategori, satuan: satuan, stok: stok, harga: harga, minStok: minStok, supplierId: supplierId });

    simpanKeStorage();
    isiDropdownProdukRiwayat();
    renderTabelDashboard(produk);
    renderTabelSemua(produk);
    updateStats(produk);
    resetFormTransaksiBaru();
    showToast('Produk baru berhasil ditambahkan!');
});

// --- TAB 2: TRANSAKSI STOK ---
function renderTabelTS(data) {
    var tbody = document.getElementById('tabelBodyTS');
    tbody.innerHTML = '';
    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:1.5rem;color:#94a3b8;">Tidak ada produk ditemukan</td></tr>';
        return;
    }
    data.forEach(function (item) {
        var namaSupplier = supplier.find(function (s) { return s.id === item.supplierId; });
        var stockWarning = item.stok <= item.minStok;
        var statusLabel = stockWarning
            ? '<span class="badge badge-danger">Menipis</span>'
            : '<span class="badge badge-aman">Aman</span>';
        tbody.innerHTML += '<tr>' +
            '<td>' + item.nama + '</td>' +
            '<td>' + (namaSupplier ? namaSupplier.nama : '-') + '</td>' +
            '<td style="text-transform:capitalize;">' + item.kategori + '</td>' +
            '<td style="color:' + (stockWarning ? '#e53e3e' : '#1a1a2e') + ';font-weight:' + (stockWarning ? '600' : '400') + '">' + item.stok + ' ' + item.satuan + '</td>' +
            '<td>' + item.minStok + ' ' + item.satuan + '</td>' +
            '<td>' + statusLabel + '</td>' +
            '<td><button onclick="bukaTransaksiStok(' + item.id + ')" class="btn-aksi-transaksi">Transaksi</button></td>' +
            '</tr>';
    });
}

function filterTabelTS() {
    var supplierId = document.getElementById('filterSupplierTS').value;
    var keyword = document.getElementById('searchTS').value.toLowerCase().trim();
    var hasil = produk.filter(function (item) {
        var okSupplier = !supplierId || item.supplierId === parseInt(supplierId);
        var okKeyword = !keyword || item.nama.toLowerCase().includes(keyword);
        return okSupplier && okKeyword;
    });
    renderTabelTS(hasil);
}

document.getElementById('filterSupplierTS').addEventListener('change', filterTabelTS);
document.getElementById('searchTS').addEventListener('input', filterTabelTS);

function bukaTransaksiStok(id) {
    var item = produk.find(function (p) { return p.id === id; });
    if (!item) return;
    transaksiProdukId = id;
    document.getElementById('infoTransaksiProduk').textContent =
        item.nama + '  —  Stok saat ini: ' + item.stok + ' ' + item.satuan;
    document.getElementById('transaksiJenis').value = '';
    document.getElementById('transaksiJumlah').value = '';
    document.getElementById('transaksiKeterangan').value = '';
    document.getElementById('pesanErrorTransaksi').textContent = '';
    document.getElementById('modalTransaksi').classList.add('aktif');
}

// --- TAB 3: EDIT STOK ---
function renderTabelES(data) {
    var tbody = document.getElementById('tabelBodyES');
    tbody.innerHTML = '';
    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:1.5rem;color:#94a3b8;">Tidak ada produk ditemukan</td></tr>';
        return;
    }
    data.forEach(function (item) {
        var namaSupplier = supplier.find(function (s) { return s.id === item.supplierId; });
        tbody.innerHTML += '<tr>' +
            '<td>' + item.nama + '</td>' +
            '<td style="text-transform:capitalize;">' + item.kategori + '</td>' +
            '<td>Rp ' + item.harga.toLocaleString('id-ID') + '</td>' +
            '<td>' + item.stok + ' ' + item.satuan + '</td>' +
            '<td>' + item.minStok + ' ' + item.satuan + '</td>' +
            '<td>' + (namaSupplier ? namaSupplier.nama : '-') + '</td>' +
            '<td><button onclick="bukaEditStok(' + item.id + ')" class="btnEdit">Edit</button></td>' +
            '</tr>';
    });
}

document.getElementById('searchES').addEventListener('input', function () {
    var keyword = this.value.toLowerCase().trim();
    renderTabelES(produk.filter(function (item) {
        return item.nama.toLowerCase().includes(keyword);
    }));
});

function bukaEditStok(id) {
    var item = produk.find(function (p) { return p.id === id; });
    if (!item) return;
    editStokId = id;
    document.getElementById('infoEditStok').textContent =
        item.nama + '  —  Stok: ' + item.stok + ' ' + item.satuan + ' (jumlah stok tidak dapat diubah di sini)';
    document.getElementById('esKategori').value = item.kategori;
    document.getElementById('esHarga').value = item.harga;
    document.getElementById('esMinStok').value = item.minStok;
    document.getElementById('esSupplier').value = item.supplierId;
    document.getElementById('pesanErrorEditStok').textContent = '';
    document.getElementById('modalEditStok').classList.add('aktif');
}

// =============================================
// MODAL TAMBAH SUPPLIER
// =============================================
function bukaModalTambahSupplier() {
    editIdSupplier = null;
    document.getElementById('judulModalSupplier').textContent = 'Tambah Supplier';
    document.getElementById('inputNamaSupplier').value = '';
    document.getElementById('inputTelpSupplier').value = '';
    document.getElementById('inputAlamatSupplier').value = '';
    document.getElementById('pesanErrorSupplier').textContent = '';
    document.getElementById('modalTambahSupplier').classList.add('aktif');
}

function bukaEditSupplier(id) {
    var s = supplier.find(function (s) { return s.id === id; });
    if (!s) return;
    editIdSupplier = id;
    document.getElementById('judulModalSupplier').textContent = 'Edit Supplier';
    document.getElementById('inputNamaSupplier').value = s.nama;
    document.getElementById('inputTelpSupplier').value = s.telp;
    document.getElementById('inputAlamatSupplier').value = s.alamat;
    document.getElementById('pesanErrorSupplier').textContent = '';
    document.getElementById('modalTambahSupplier').classList.add('aktif');
}

document.getElementById('btnTambahSupplier').addEventListener('click', bukaModalTambahSupplier);

document.getElementById('btnBatalSupplier').addEventListener('click', function () {
    editIdSupplier = null;
    document.getElementById('modalTambahSupplier').classList.remove('aktif');
});

document.getElementById('btnSimpanSupplier').addEventListener('click', function () {
    var nama = document.getElementById('inputNamaSupplier').value.trim();
    var telp = document.getElementById('inputTelpSupplier').value.trim();
    var alamat = document.getElementById('inputAlamatSupplier').value.trim();
    var pesanError = document.getElementById('pesanErrorSupplier');

    if (!nama || !telp || !alamat) {
        pesanError.textContent = 'Semua field harus diisi!';
        return;
    }

    if (editIdSupplier !== null) {
        // Mode edit
        var index = supplier.findIndex(function (s) { return s.id === editIdSupplier; });
        if (index !== -1) {
            supplier[index].nama = nama;
            supplier[index].telp = telp;
            supplier[index].alamat = alamat;
        }
        editIdSupplier = null;
        showToast('Supplier berhasil diperbarui!');
    } else {
        // Mode tambah
        var idBaru = supplier.length > 0 ? Math.max.apply(null, supplier.map(function (s) { return s.id; })) + 1 : 1;
        supplier.push({ id: idBaru, nama: nama, telp: telp, alamat: alamat });
        showToast('Supplier berhasil ditambahkan!');
    }

    simpanKeStorage();
    isiDropdownSupplier();
    document.getElementById('modalTambahSupplier').classList.remove('aktif');
    renderTabelSupplier();
});

// =============================================
// MODAL TRANSAKSI STOK
// =============================================
document.getElementById('btnBatalTransaksi').addEventListener('click', function () {
    transaksiProdukId = null;
    document.getElementById('modalTransaksi').classList.remove('aktif');
});

document.getElementById('btnSimpanTransaksi').addEventListener('click', function () {
    var jenis = document.getElementById('transaksiJenis').value;
    var jumlah = parseInt(document.getElementById('transaksiJumlah').value);
    var keterangan = document.getElementById('transaksiKeterangan').value.trim();
    var pesanError = document.getElementById('pesanErrorTransaksi');

    if (!jenis || isNaN(jumlah) || jumlah <= 0) {
        pesanError.textContent = 'Jenis transaksi dan jumlah harus diisi dengan benar!';
        return;
    }

    var index = produk.findIndex(function (p) { return p.id === transaksiProdukId; });
    if (index === -1) return;

    var stokSebelum = produk[index].stok;

    if (jenis === 'keluar') {
        if (produk[index].stok < jumlah) {
            pesanError.textContent = 'Stok tidak mencukupi! Stok saat ini: ' + produk[index].stok + ' ' + produk[index].satuan;
            return;
        }
        produk[index].stok -= jumlah;
    } else {
        produk[index].stok += jumlah;
    }

    var idT = transaksi.length > 0 ? Math.max.apply(null, transaksi.map(function (t) { return t.id; })) + 1 : 1;
    transaksi.push({
        id: idT,
        tanggal: new Date().toISOString(),
        produkId: transaksiProdukId,
        namaProduk: produk[index].nama,
        jenis: jenis,
        jumlah: jumlah,
        stokSebelum: stokSebelum,
        stokSesudah: produk[index].stok,
        keterangan: keterangan
    });

    simpanKeStorage();
    document.getElementById('modalTransaksi').classList.remove('aktif');
    filterTabelTS();
    renderTabelDashboard(produk);
    renderTabelSemua(produk);
    updateStats(produk);
    showToast(jenis === 'masuk' ? 'Barang masuk berhasil dicatat!' : 'Barang keluar berhasil dicatat!');
    transaksiProdukId = null;
});

// =============================================
// MODAL EDIT STOK
// =============================================
document.getElementById('btnBatalEditStok').addEventListener('click', function () {
    editStokId = null;
    document.getElementById('modalEditStok').classList.remove('aktif');
});

document.getElementById('btnSimpanEditStok').addEventListener('click', function () {
    var kategori = document.getElementById('esKategori').value;
    var harga = parseInt(document.getElementById('esHarga').value);
    var minStok = parseInt(document.getElementById('esMinStok').value);
    var supplierId = parseInt(document.getElementById('esSupplier').value);
    var pesanError = document.getElementById('pesanErrorEditStok');

    if (!kategori || isNaN(harga) || isNaN(minStok) || isNaN(supplierId)) {
        pesanError.textContent = 'Semua field harus diisi dengan benar!';
        return;
    }
    if (harga < 0 || minStok < 0) {
        pesanError.textContent = 'Harga dan stok minimal tidak boleh negatif!';
        return;
    }

    var index = produk.findIndex(function (p) { return p.id === editStokId; });
    if (index !== -1) {
        produk[index].kategori = kategori;
        produk[index].harga = harga;
        produk[index].minStok = minStok;
        produk[index].supplierId = supplierId;
    }

    simpanKeStorage();
    document.getElementById('modalEditStok').classList.remove('aktif');
    renderTabelES(produk);
    renderTabelDashboard(produk);
    renderTabelSemua(produk);
    updateStats(produk);
    showToast('Data produk berhasil diperbarui!');
    editStokId = null;
});

// =============================================
// RENDER TABEL RIWAYAT TRANSAKSI
// =============================================
function renderTabelRiwayat(data) {
    var sumber = data !== undefined ? data : transaksi;
    var tbody = document.getElementById('tabelBodyRiwayat');
    tbody.innerHTML = '';

    if (sumber.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:1.5rem;color:#94a3b8;">Belum ada riwayat transaksi</td></tr>';
        return;
    }

    var sorted = sumber.slice().reverse();
    sorted.forEach(function (t) {
        var tgl = new Date(t.tanggal).toLocaleString('id-ID', {
            day: '2-digit', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
        var badgeClass = t.jenis === 'masuk' ? 'badge-tambah' : 'badge-kurangi';
        var jenisLabel = t.jenis === 'masuk' ? 'Barang Masuk' : 'Barang Keluar';

        tbody.innerHTML += '<tr>' +
            '<td>' + tgl + '</td>' +
            '<td>' + t.namaProduk + '</td>' +
            '<td><span class="badge ' + badgeClass + '">' + jenisLabel + '</span></td>' +
            '<td>' + t.jumlah + '</td>' +
            '<td>' + t.stokSebelum + '</td>' +
            '<td>' + t.stokSesudah + '</td>' +
            '<td style="color:#64748b;">' + (t.keterangan || '-') + '</td>' +
            '</tr>';
    });
}

function filterRiwayat() {
    var tglDari = document.getElementById('filterTglDari').value;
    var tglSampai = document.getElementById('filterTglSampai').value;
    var produkId = document.getElementById('filterProdukRiwayat').value;
    var jenis = document.getElementById('filterJenisRiwayat').value;

    var hasil = transaksi.filter(function (t) {
        var tglTransaksi = new Date(t.tanggal);
        if (tglDari) {
            var dari = new Date(tglDari);
            dari.setHours(0, 0, 0, 0);
            if (tglTransaksi < dari) return false;
        }
        if (tglSampai) {
            var sampai = new Date(tglSampai);
            sampai.setHours(23, 59, 59, 999);
            if (tglTransaksi > sampai) return false;
        }
        if (produkId && t.produkId !== parseInt(produkId)) return false;
        if (jenis && t.jenis !== jenis) return false;
        return true;
    });

    renderTabelRiwayat(hasil);
}

['filterTglDari', 'filterTglSampai', 'filterProdukRiwayat', 'filterJenisRiwayat'].forEach(function (id) {
    document.getElementById(id).addEventListener('change', filterRiwayat);
});

document.getElementById('btnResetRiwayat').addEventListener('click', function () {
    document.getElementById('filterTglDari').value = '';
    document.getElementById('filterTglSampai').value = '';
    document.getElementById('filterProdukRiwayat').value = '';
    document.getElementById('filterJenisRiwayat').value = '';
    renderTabelRiwayat();
});

// =============================================
// INISIALISASI APLIKASI
// =============================================
muatDariStorage();
isiDropdownSupplier();
isiDropdownProdukRiwayat();
renderTabelDashboard(produk);
updateStats(produk);
