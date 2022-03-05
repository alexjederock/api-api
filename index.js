const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const PORT = 3001

const app = express()

const url = 'https://theconversation.com/us/topics/gaming'

axios(url).then((res) => {
  const html = res.data
  const $ = cheerio.load(html)
  const gameData = []
  $('.article--header', html).each(function() {
    const title = $(this).text()
    const link = $(this).find('a').attr('href')
    gameData.push({
      title,
      link
    })
  })
  console.log(gameData)
})

app.listen(PORT, () => {
  console.log('Listening on port 3k+1......')
})
