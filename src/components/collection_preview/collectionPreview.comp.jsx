import './collectionsPreview.styles.scss'
import CollectionItem from '../collection-item/collection-item.comp'

const CollectionPreview = ({id,items, title})=> (
    <div className='collection-preview' key={id}>
    <div className='title'>{title.toUpperCase()}</div>
    <div className='preview'>
    {items.filter((item,indx)=> indx<4).map(({id, ...otherItemProps}) =>(
        <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>

    </div>
)

export default CollectionPreview