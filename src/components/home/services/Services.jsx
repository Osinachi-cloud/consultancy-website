import React from 'react'
// import Services from './Services';
import "./services.css"

const Services = () => {
  return (
    <div className="services">
        {/* <Services/> */}
        <div className="services-title">
            <h2>Discover Our Services</h2>
        </div>
        <ul className="services-box-container">
            <a className="service-box" href="" >
                <li style={{backgroundImage:'https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg', padding:"60px"}} >
                        <div className="title"><h3>Personal Bank Account Opening </h3></div>
                        <div className="text-body">
                            <p>If you need a bank account for your individual activity or just as safe-heaven to diversify your assets,
                                we can help you to open a personal bank account in several banks, both offshore and onshore.
                            </p> 
                        </div>
                </li>
            </a>
            <a className="service-box cross-background" href="#">
                <li >
                        <div className="title"><h3>Personal Bank Account Opening </h3></div>
                        <div className="text-body">
                            <p>If you need a bank account for your individual activity or just as safe-heaven to diversify your assets,
                                we can help you to open a personal bank account in several banks, both offshore and onshore.
                            </p> 
                        </div>
                </li>
            </a>
            <a className="service-box cross-background" href="#">
                <li >
                        <div className="title"><h3>Personal Bank Account Opening </h3></div>
                        <div className="text-body">
                            <p>If you need a bank account for your individual activity or just as safe-heaven to diversify your assets,
                                we can help you to open a personal bank account in several banks, both offshore and onshore.
                            </p> 
                        </div>
                </li>
            </a>
            <a className="service-box" href="#">
                <li >
                        <div className="title"><h3>Personal Bank Account Opening </h3></div>
                        <div className="text-body">
                            <p>If you need a bank account for your individual activity or just as safe-heaven to diversify your assets,
                                we can help you to open a personal bank account in several banks, both offshore and onshore.
                            </p> 
                        </div>
                </li>
            </a>
            <a className="service-box" href="#">
                <li >
                        <div className="title"><h3>Personal Bank Account Opening </h3></div>
                        <div className="text-body">
                            <p>If you need a bank account for your individual activity or just as safe-heaven to diversify your assets,
                                we can help you to open a personal bank account in several banks, both offshore and onshore.
                            </p> 
                        </div>
                </li>
            </a>
            <a className="service-box cross-background" href="#">
                <li >
                        <div className="title"><h3>Personal Bank Account Opening </h3></div>
                        <div className="text-body">
                            <p>If you need a bank account for your individual activity or just as safe-heaven to diversify your assets,
                                we can help you to open a personal bank account in several banks, both offshore and onshore.
                            </p> 
                        </div>
                </li>
            </a>
        </ul>

    </div>
  )
}

export default Services