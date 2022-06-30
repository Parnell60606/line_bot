export default {
  type: 'carousel',
  contents: [
    {
      type: 'bubble',
      header: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'data[i].name',
            wrap: true,
            weight: 'bold',
            size: 'xl'
          }

        ]
      },
      hero: {
        type: 'location',
        title: 'data[i].name',
        address: 'data[i].address',
        latitude: 'data[i].latitude',
        longitude: 'data[i].longitude'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                flex: 1,
                margin: 'none',
                size: 'sm',
                color: '#aaaaaa',
                text: 'address'
              },
              {
                type: 'text',
                text: 'data[i].address',
                flex: 3,
                margin: 'none'
              }
            ]
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                flex: 1,
                margin: 'none',
                size: 'sm',
                color: '#aaaaaa',
                text: 'socket'
              },
              {
                type: 'text',
                text: 'data[i].socket',
                flex: 3,
                margin: 'none'
              }
            ]
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                flex: 1,
                margin: 'none',
                size: 'sm',
                color: '#aaaaaa',
                text: 'limit time'
              },
              {
                type: 'text',
                text: 'data[i].limited_time',
                flex: 3,
                margin: 'none'
              }
            ]
          }
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'button',
            style: 'secondary',
            action: {
              type: 'uri',
              label: 'Website',
              uri: 'data[i].url'
            }
          }
        ]
      }
    }
  ]
}
