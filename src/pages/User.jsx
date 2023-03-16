import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumb';

const User = () => {

    return(
        <DefaultLayout>
            <Breadcrumb  pageName={'user'}/>
            <h1>Ini User ya!</h1>
        </DefaultLayout>


    )
}

export default User