import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: 'uwzkln7p', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    useCdn: false,
    apiVersion: '2021-08-31' 
  })

