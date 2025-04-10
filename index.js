const cityMap = require('./citiesMap.json');
const express = require('express')
const app = express()
const port = 3000
const Cors = require('cors');
app.use(Cors())
app.get('/getCity/:cityName', (req, res) => {
  let cityName = req.params.cityName;
  let cityKey = Object.keys(cityMap).filter(key => key.includes(cityName));
  let finalCities = [];
  for (let ck of cityKey) {
    finalCities.push(cityMap[ck]);
  }
  res.send(finalCities);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})