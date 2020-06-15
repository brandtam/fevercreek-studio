export default {
  widgets: [
      {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Fevercreek Studio',
            apiId: '521c0a8e-f52d-4f0f-a591-eb99971f3ffd',
            buildHookId: '5ee46f9900c1fe1f0b059e6b',
            name: 'fevercreek-studio',
          },
          {
            title: 'Website',
            apiId: '175e2f8f-3686-4522-9358-ac05b0eb6b05',
            buildHookId: '5ee472c4f21c88e877d01133',
            name: 'gatsby-sanity-fevercreek'
          }
        ]
      }
    }
  ]
}