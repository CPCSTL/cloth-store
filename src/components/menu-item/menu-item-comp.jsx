import './menu-item-styles.scss'
import {withRouter} from 'react-router-dom';

const MenuItem = ({title , imageUrl, size, history, match,linkUrl}) => (
    <div   className={`${size} menu-item`}
    onClick={()=>history.push(`${match.url}${linkUrl}`)}>
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
export default withRouter(MenuItem);