const express = require('express');
const app = express();
const port = 8080;

app.get('/biodata', (req, res) => {
  const nama = req.query.nama;
  const tempatLahir = req.query['tempat-lahir'];
  const tanggalLahir = req.query['tanggal-lahir'];
  const alamat = req.query.alamat;

  const biodata = {
    nama,
    'tempat-lahir': tempatLahir,
    'tanggal-lahir': tanggalLahir,
    alamat
  };

  res.json(biodata);

  console.log(biodata);
});

app.listen(port, () => {
  console.log(`Server dijalankan pada port ${port}`);
});