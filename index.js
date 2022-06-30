// 引用env檔案
import 'dotenv/config'

import linebot from 'linebot'
// import axios from 'axios'
// import { distance } from './distance.js'
import data from './data.js'

// data.findCafe()

// 設定機器人
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// 當收到訊息時(有人傳送訊息給Bot時)，event 包含了訊息的類型、文字等
bot.on('message', async event => {
  // event.message.text 為使用者傳送的文字
  // let text = event.message.text
  // event.reply 為回覆訊息
  // event.reply(event.message.text)

  if (event.message.type === 'text') {
    try {
      if (event.message.text.startsWith('找指定咖啡廳 ')) {
        data.findCafe(event)
        // }else if (event.message.type === '找最近的咖啡廳') {
      } else if (event.message.type === '隨機推薦') {
        data.randomCafe(event)
      } else {
        event.reply('需要幫助嗎？請試試以下關鍵字：   隨機推薦    找指定咖啡廳 + ＂您想查的咖啡廳名稱＂ ')
      }
    } catch (error) { event.reply('發生錯誤，請稍後在試一次') }
    console.log(event)
  }
})

// 別人進來的路徑
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
