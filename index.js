const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const PORT = 3001

const app = express()

const url = 'https://twitter.com/elonmusk/status'

axios(url).then((res) => {
  const html = res.data
  console.log(html)
  const $ = cheerio.load(html)
  const hopefullyTweets = []
  $('css-1dbjc4n', html).each(() => {
    const hopefullyTheTitle = $(this).text()
    hopefullyTweets.push({
      hopefullyTheTitle,
    })
  })
  console.log(hopefullyTweets)
})

app.listen(PORT, () => {
  console.log('Listening on port 3k+1......')
})
