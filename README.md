# Panduan Instalasi - Assesment  PT Affa Technology Indonesia

Ini adalah panduan instalasi untuk proyek XYZ. Panduan ini akan membantu Anda dalam mengatur dan menjalankan bagian server dan client dari proyek ini.

## Server

1. Masuk ke folder server dengan menjalankan perintah berikut di terminal:
cd server

2. Di dalam terminal, ketik perintah berikut untuk mendownload semua library yang diperlukan:
go mod tidy

3. Pastikan Anda telah menginstal XAMPP. Jika belum, instal XAMPP terlebih dahulu.

4. Setelah XAMPP terinstal, jalankan aplikasi XAMPP dan klik tombol "Start" pada bagian Actions untuk Apache dan MySQL.

5. Buka halaman admin MySQL dengan mengklik "Admin" pada bagian MySQL di XAMPP. Anda akan diarahkan ke halaman phpMyAdmin.

6. Setelah diarahkan ke phpMyAdmin, klik tombol "New" dan beri nama database sesuai keinginan, misalnya "affatech".

7. Buka file `pkg/mysql/mysql.go` dan cari baris berikut:

```go
dsn := "root:@tcp(localhost:3306)/affatech?charset=utf8mb4&parseTime=True&loc=Local"
Sesuaikan bagian (localhost:3306)/affatech dengan nama database yang telah Anda buat.
8.Jalankan perintah berikut di terminal untuk menjalankan server:
go run main.go

## Client
1.Masuk ke folder client dengan menjalankan perintah berikut di terminal:
cd client
2.Di terminal, ketik perintah berikut untuk menginstal semua library yang diperlukan:
npm install
3.Setelah semua library terinstal, jalankan aplikasi dengan perintah:
   npm run dev

   

   
