

import { useParams } from 'react-router';
import useData from '../../Hooks/useData';
import AppDetailCard from './AppDetailCard';

const AppDetails = () => {
    const { id } = useParams();
    console.log(id);
    const { appData } = useData();
    console.log(appData);
    const parseId = parseInt(id);
    const detailsApp = appData.filter(app => app.id === parseId);
    console.log(detailsApp);



    return (
        <div className='container mx-auto'>
            {
                detailsApp.map(appDetails => <AppDetailCard key={appDetails.id} appDetails={appDetails}></AppDetailCard>)
            }
        </div>
    );
};

export default AppDetails;