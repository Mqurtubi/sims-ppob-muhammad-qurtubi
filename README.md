# SIMS PPOB

SIMS PPOB adalah aplikasi web **Payment Point Online Bank (PPOB)** berbasis **React + Vite** dengan arsitektur **feature-based**. Aplikasi ini menyediakan alur autentikasi, dashboard layanan, top up saldo, pembayaran, serta riwayat transaksi dengan struktur kode yang rapi dan scalable.

---

## ✨ Fitur Utama

* 🔐 **Authentication**

  * Login & Register
  * Protected Route
  * State management auth

* 🏠 **Home Dashboard**

  * Banner informasi
  * Service menu PPOB

* 👤 **Account / Profile**

  * Lihat & edit profil
  * Upload foto profile
  * Validasi form

* 💰 **Top Up**

  * Input nominal top up
  * Validasi nominal

* 💳 **Payment**

  * Detail pembayaran
  * Ringkasan transaksi

* 📜 **Transaction**

  * Daftar transaksi
  * Empty state

---

## 🧱 Tech Stack

* **React** (Vite)
* **React Router**
* **Redux Toolkit**
* **Axios**
* **MUI (Material UI)**
* **Zod / Validation Schema**

---

## 📁 Struktur Folder

```bash
src/
├── app/
│   ├── router/          # AppRouter & ProtectedRoute
│   └── store/           # Redux store
│
├── components/          # Reusable UI components
│   ├── feedback/
│   ├── form/
│   └── layout/
│
├── features/            # Feature-based modules
│   ├── auth/
│   ├── account/
│   ├── home/
│   ├── topup/
│   ├── payment/
│   └── transaction/
│
├── hooks/               # Shared custom hooks
├── services/            # HTTP & API services
├── utils/               # Helper & utilities
├── App.jsx
└── main.jsx
```

---

## 🚀 Instalasi & Menjalankan Project

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Mqurtubi/sims-ppob.git
cd sims-ppob
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Jalankan Aplikasi

```bash
npm run dev
```

Aplikasi akan berjalan di:

```
http://localhost:5173
```

---

## 🔑 Environment Variable

Buat file `.env`:

```env
VITE_API_BASE_URL=your_api_base_url_here
```

---

## 🧠 Konsep Arsitektur

* **Feature-based architecture** → mudah dikembangkan & scalable
* **Separation of concerns**

  * UI
  * Logic (hooks)
  * API
  * Validation
* **Reusable components** untuk feedback & layout

---

## 📌 Git Commit Convention

Project ini menggunakan pola:

```
feat(scope): description
fix(scope): description
chore(scope): description
refactor(scope): description
```

Contoh:

```bash
feat(auth): add login and register flow
```




---

## 👨‍💻 Author

**Mqurtubi**
GitHub: [https://github.com/Mqurtubi](https://github.com/Mqurtubi)

---

## 📄 License

This project is licensed under the **MIT License**.
