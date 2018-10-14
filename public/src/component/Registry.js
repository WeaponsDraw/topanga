import React, { Component, Fragment } from 'react'
import {
  Image,
  Header,
  Grid,
  GridColumn,
  Divider,
  GridRow
} from 'semantic-ui-react'

class Registry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          name: 'Blender',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51Q8UC+6eQL._AC_US436_QL65_.jpg',
          url: 'https://www.amazon.com/BLACK-DECKER-Counter-Blender-BL1210BG/dp/B0745FCR48/ref=sr_1_1_sspa?s=kitchen&ie=UTF8&qid=1539460482&sr=1-1-spons&keywords=blender&psc=1'
        },
        {
          name: 'Alexa',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41iz5Tw82IL._AC_US218_.jpg',
          url: 'https://www.amazon.com/Amazon-Echo-Dot-Portable-Bluetooth-Speaker-with-Alexa-Black/dp/B01DFKC2SO/ref=ice_ac_b_dpb?s=amazon-devices&ie=UTF8&qid=1539481090&sr=1-2&keywords=alexa'
        },
        {
          name: 'Pillow',
          imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/3235400_fpx.tif?$thumb$&wid=296',
          url:'https://www.macys.com/shop/product/tommy-hilfiger-home-corded-classic-down-alternative-firm-density-standard-queen-pillow-hypoallergenic-supraloft-fiberfill?ID=2578700&CategoryID=28901&tdp=cm_app~zMCOM-NAVAPP~xcm_zone~zHP_ZONE_B~xcm_choiceId~zcidM3IMEX-acfc4016-e4b2-4a1b-9f50-9ae9e2247b07%40H47%40TRENDING%2BNOW%24168342%242578700~xcm_pos~zPos2~xcm_srcCatID~z28901'
        }
      ]
    }
  }
  render() {
    return (
      <Fragment>
     
        <Grid container columns={3}>
          <Grid.Row centered>
          <Header as='h1' centered>Registry</Header>
          </Grid.Row>
          <Grid.Row>
            {this.state.items.map((item, index) => {
              return (
                <Grid.Column>
                  <Image src={item.imageUrl}/>
                </Grid.Column>)
            })}
          </Grid.Row>
          <Grid.Row></Grid.Row>
        </Grid>
      </Fragment>
    )
  }
}

export default Registry;