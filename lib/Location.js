import { Constants, Location, Permissions } from 'expo'
import geolib from 'geolib'

 class LakeLocation {
  constructor() {
    this.location = {}
    this.lakes = []
  }

  async getLocation() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      // this.setState({
      //   errorMessage: 'Permission to access location was denied',
      // })
      console.log('error')
    }

    let location = await Location.getCurrentPositionAsync({})
    // this.setState({ location })
    this.location = location
  }

  async closestLakes() {
    let closest = []

    await this.getLocation()

    // if (this.state.errorMessage) {
    //   text = this.state.errorMessage
    // } else if (this.state.location) {

    let our_location = this.location.coords

    for (var lake of this.lakes) {
      let lake_latitude = lake.lat
      let lake_longitude = lake.long

      let distance = geolib.getDistance(our_location, {
        latitude: lake_latitude,
        longitude: lake_longitude
      })

      lake.distance = distance
    }

    // FIXME: need to return the lake ID as well (matching the original data structure)

    closest = this.lakes.sort((a, b) => a.distance - b.distance).slice(0, 4)

    return closest
  }
}

module.exports = LakeLocation