# affa
Server
1.Masuk ke folder server
2.Di dalam terminal ketik command go mod tidy untuk mendownload semua libary
3.Jika belum insall XAMPP install terlebih dahulu
4.setlah terinstal jalnkan dan klik start pada acions Apache dan Mysql
5.klik admin pada bagian Mysql nanti akan diarahkan ke halaman phpmyadmin
6.setelah diarahkan klik new dan isikan nama database sesuai keinginan contohnya affa
7.pada bagian folder pkg/mysql/mysql.go di baris dsn := "root:@tcp(localhost:3306)/affatech?charset=utf8mb4&parseTime=True&loc=Local"
sesuikan setelah (localhost:3306)/ dengan nama yang telah dibuat di databse 
8.jalankan command go run main.go


Client
1.masuk ke folder client
2.di terminal ketikan npm i untuk menginstall semua library
3.setelah semua library terinstal jalankan npm run dev
