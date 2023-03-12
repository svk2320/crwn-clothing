import { useNavigate } from 'react-router-dom';

import { BackgroundImage, Body, DirectoryitemContainer} from './directory-item.styles.jsx';

const DirectoryItem = ({category:{imageUrl, title, route}}) => {
    const navigate = useNavigate();
    
    const onNavigateHandler = () => navigate(route);

    return(
        <DirectoryitemContainer onClick={onNavigateHandler}>
          <BackgroundImage imageUrl={imageUrl}/>
          <Body>
              <h2>{title}</h2>
              <p>Shop Now</p>
          </Body>
        </DirectoryitemContainer>
    )
};

export default DirectoryItem;