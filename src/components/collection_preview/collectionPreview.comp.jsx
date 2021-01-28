import './collectionsPreview.styles.scss'
import CollectionItem from '../collection-item/collection-item.comp'
import {withRouter} from 'react-router-dom'

const CollectionPreview = ({id,items, title,routeName,history,match})=> (
    <div className='collection-preview' key={id}>
    <div className='title' onClick={()=>history.push(`${match.path}${routeName}`)}
    
    >{title.toUpperCase()}</div>
    <div className='preview'>
    {items.filter((item,indx)=> indx<4).map(({id, ...otherItemProps}) =>(
        <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>

    </div>
)



export default withRouter(CollectionPreview)