import React from 'react';
import './AccountPage.scss';
import { Link, Switch, Route } from 'react-router-dom';
import PersonalInformationForm from '../PersonalInformationForm/PersonalInformationForm';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

const AccountPage: React.FC = () => {
    return (
        <div className='account-page'>
            <aside className='navigation'>
                <Link to='/account'>Personal Information</Link>
                <Link to='/account/orders'>Order History</Link>
            </aside>

            <section className='content'>
                <Switch>
                    <Route exact path='/account'>
                        <PersonalInformationForm />
                    </Route>
                    <Route path='/account/orders'>
                        <OrderHistoryPage />
                    </Route>
                </Switch>
            </section>
        </div>
    );
};

export default AccountPage;
