// import App from 'ui_components_fe/App';
// import('remote_app/RemoteApp')

import React, {Suspense} from 'react';
const RemoteApp = React.lazy(() => import('ui_components_fe/App'));

export const Demo = () => {

    return(
        <div>
            <h1>Welcome to Host App</h1>


            <Suspense fallback='loading...'>
                 <RemoteApp/>
            </Suspense>

            {/* <App/> */}
           
        </div>
    )
}