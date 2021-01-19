
import React from 'react'
import './shop-page.styles.scss'
import SHOP_DATA from './SHOP-DATA'
import CollectionPreview from '../../components/collection_preview/collectionPreview.comp'


class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
         collections : SHOP_DATA
        }
    }
    render (){
        const {collections}=this.state
        return (
            <div>
            {collections.map(({id, ...otherCollectionsPreview})=>(
                <CollectionPreview key={id} {...otherCollectionsPreview} />
            ))}
            </div>
        )
    }
}

export default ShopPage