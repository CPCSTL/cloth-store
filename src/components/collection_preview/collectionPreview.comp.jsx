import './collectionsPreview.styles.scss'
import CollectionItem from '../collection-item/collection-item.comp'
import {withRouter} from 'react-router-dom'

const CollectionPreview = ({id,items, title,routeName,history,match})=> (
    <div className='collection-preview' key={id}>
    <div className='title' onClick={()=>history.push(`${match.path}${routeName}`)}
    
    >{title.toUpperCase()}</div>
    <div className='preview'>
    {items.filter((item,idx)=> idx<4).map((item) =>(
        <CollectionItem key={item.id} item={item} />
        ))}
    </div>

    </div>
)



export default CollectionPreview