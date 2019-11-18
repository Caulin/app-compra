import React, { Component } from 'react';
import "./style.css"
import api from '../../services/api';

export default class Main extends Component {
    state = {
        produtos: [],
        mesagem:[]
    }
    componentDidMount() {
        this.loadProducts();
    }
    loadProducts = async () => {
       
        const response = await api.get('/produtos/lista');
        
        this.setState({ produtos: response.data });
    }
    render() {
        return (
            <div className='product-list'>
                <div className="row">
                    {this.state.produtos.map(produto => (
                        <div className="col-sm-6 col-md-4" key={produto._id}>
                            <div className="thumbnail" >
                                <img src={produto.imgPath} alt='' />
                                <div className="caption">
                                    <h3>{produto.titulo}</h3>
                                    <p>{produto.descricao}</p>
                                    <p>R${produto.preco},00</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}