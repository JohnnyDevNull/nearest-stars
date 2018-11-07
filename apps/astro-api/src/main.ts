import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening at http://localhost:${PORT}`);
});
