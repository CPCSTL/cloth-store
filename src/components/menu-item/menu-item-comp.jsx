import './menu-item-styles.scss'

const MenuItem = ({title , imageUrl, size}) => (
    <div   className={`${size} menu-item`}>
    <div className='backgroundImage' 
    style={{
      backgroundImage : `url(${imageUrl})`
    }}
    />
    <div className='content'>
       <h1 className ='title'>{title.toUpperCase()}</h1>
       <spane className='subtitle'>Shop Now</spane>
    </div>
  </div>
)
export default MenuItem;