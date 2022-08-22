import imageUrlBuilder from '@sanity/image-url'
import SanityClient from '@sanity/client'

const client = SanityClient({
  projectId: 'ft6txaqu',
  dataset: 'production',
  apiVersion: '2022-08-15',
  token: 'skvayUkXjOoW1n7OXPNygJLi15zGo0EGtP80rvXbyC3XqwGRtxxmQb1ec4zVFsseYkfJAVyKYz02LPEVmL1PzmCKgTPAVdmjuQbxEDSiuueijDv9qy4Out5BNgzscR01f6yYVtNFXiqHB5OAnoQP59d08NHuxj5IeuRQWMOSuqxx8tN0T2Ho',
  useCdn: true, 
})


const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export { urlFor }
export default client