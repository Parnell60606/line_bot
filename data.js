import axios from 'axios'

const findCafe = async (event) => {
  try {
    const { data } = await axios.get('https://cafenomad.tw/api/v1.2/cafes')
    const i = data.findIndex(item => item.name === event.message.text.slice(7))
    if (i >= 0) {
      event.reply([
        {
          type: 'location',
          title: data[i].name,
          address: data[i].address,
          latitude: data[i].latitude,
          longitude: data[i].longitude
        },
        { type: 'text', text: '離最近的捷運站' + data[i].name },
        { type: 'text', text: '網站' + data[i].url }
      ])
    }
  } catch (error) {
    console.log(error)
  }
}

const randomCafe = async (event) => {
  const { data } = await axios.get('https://cafenomad.tw/api/v1.2/cafes')

  const rC = Math.round(Math.random() * data.length)
  event.reply([
    {
      type: 'location',
      title: data[rC].name,
      address: data[rC].address,
      latitude: data[rC].latitude,
      longitude: data[rC].longitude
    },
    { type: 'text', text: '離最近的捷運站： ' + data[rC].name },
    { type: 'text', text: '網站： ' + data[rC].url }
  ])
}

export default {
  findCafe,
  randomCafe

}
