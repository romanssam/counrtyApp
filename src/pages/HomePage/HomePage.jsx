import React, {Suspense} from 'react';
import Header from '../../components/Header/Header.jsx'
import Main from '../../components/Main/Main.jsx'
import Controls from '../../components/Controls/Controls.jsx'
import Countries from '../../components/Countries/Countries.jsx'

const HomePage = () => {
    return (
        <>
            <Header/>
            <Main>
                <Controls/>
                <Suspense fallback={<h2>Lol</h2>}>
                    <Countries />
                </Suspense>
            </Main>
        </>
    );
};

export default HomePage;
