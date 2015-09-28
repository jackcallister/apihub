export function mapProjectStateToProps(store) {
  return {
    name: store.project.name
  }
}

export function mapPublishedEndpointStateToProps(store) {
  return {
    response: store.publishedEndpoint.response,
  }
}

export function mapDraftEndpointStateToProps(store) {
  return {
    response: store.draftEndpoint.response,
  }
}

export function mapPublishedEndpointFormStateToProps(store) {
  return {
    url: store.publishedEndpoint.url,
    token: store.publishedEndpoint.token,
  }
}
