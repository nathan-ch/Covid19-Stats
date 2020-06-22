import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as Research  } from '../images/research.svg';



const Jumbo = () => {
    
    return(
        <div className="container jumbo">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h1 className="display-4 text-danger"> <FormattedMessage id="home.title" /></h1>
                </div>
                <div className="col-md-6 ">
                    <Research width="500" height="auto" />
                </div>
            </div>
        </div>
    );
};

export default Jumbo