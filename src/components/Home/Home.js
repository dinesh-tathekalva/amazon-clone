import React from 'react'
import Product from '../Product/Product'
import './Home.css'


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home-img" />

                <div className="home__row">
                    <Product id={4565432} title={"The lean startup"} price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
                    <Product id={3456543} title={"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with L-beater, Dough Hook and Wgusk, 5 litre Glass Bowl"} price={239.99} image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg" rating={4} />
                </div>

                <div className="home__row">
                    <Product id={2343244} title={"Samsung LCR326457SERF"} price={199.99} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" rating={5} />
                    <Product id={8765456} title={"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"} price={99.99} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" rating={5} />
                    <Product id={3456545} title={"New Appkle iPad Pro (12.9-inch Wi-Fi, 128GB) - Silver (4th Generation)"} price={529.99} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" rating={5} />
                </div>

                <div className="home__row">
                    <Product id={5676543} title={"Samsung LCR326457SERF 49' curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"} price={1099.99} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home
