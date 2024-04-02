import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronCircleLeft ,faChevronLeft,faChevronRight,fachev} from '@fortawesome/free-solid-svg-icons';
import { faCartShopping, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons';
import Similarproductdetails from './Similarproductdetails';
export default class Similarslider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            similarslideritem: this.props.items
        };
    }
        prevSlide = () => {
            this.setState((prevState) => ({
                position: Math.max(0, prevState.position - 3)
            }));
        };

        nextSlide = () => {
            this.setState((prevState) => ({
                position: Math.min(prevState.position + 3, this.state.similarslideritem.length - 3)
            }));
        };

        render() {
            const { images, position } = this.state;
            return (
                <div className="slider" style={{
                    marginTop: "50px", display: "flex", gap: "30px", justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <div className="arrow" onClick={this.prevSlide} style={{ opacity: position === 0 ? '.4' : '1' }}>
                        <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: "25px" }} />            </div>
                    <div className="slides-container" style={{ display: 'flex', gap: "30px" }}>
                        {this.state.similarslideritem.slice(position, position + 3).map((product, index) => (
    <div className='similar-itemdetails' key={index}>
            <div  style={{width:"100%"}}>
                            <img src={require(`../images/${product.image}`)}  className='item-similar' style={{backgroundSize:'contain',maxWidth:"100%",maxHeight:"100%",height:"190px",width:"100%"}}/>
                                
                                

                                </div>
                                
                                    <div style={{padding:"20px"}}>
                                            <h5 style={{
                                        margin: "10px 0px", textAlign: 'left', fontWeight: 'bold', fontSize: "12px",
                                        textTransform: "uppercase"
                                    }}>{product.name}</h5>
                                        <div  style={{ display: "flex", gap: "20px",alignItems:"flex-end"}}>
                                    <div style={{ }}>
                <div className='newprice'>    <strong>{parseFloat(parseFloat(product.price.replace(/[^\d.-]/g, '')) - parseFloat(product.price.replace(/[^\d.-]/g, '')) * parseFloat(product.discount.replace(/[^\d.-]/g, '')).toFixed(2) / 100).toFixed(2)}
                    
                    
                    </strong>
                    <small>LE</small></div>
                                        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                                            <div>
                    <s className='lastprice'>{product.price}     <small>LE</small></s>
                    <span className='discount'>{product.discount}</span></div>
                
                                        </div>
                                        </div>
                                    <div>
                            <img src={require(`../images/${product.brand}`)}  className='item-similar' width={"80px"} />
                                    </div>
                                
                                </div>
                                    </div>
                            
            
    
      </div>                        ))}
                    </div>

    
                    <div className="arrow" onClick={this.nextSlide} style={{ opacity: position >= this.state.similarslideritem.length - 3 ? '.5' : '1' }}>
                        <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "25px" }} />            </div>
      
                </div>
            );
        }
    }



