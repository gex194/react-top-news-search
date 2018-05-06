import React, {Component} from 'react';
import imageNotFound from '../image_not_found.png';


class NewsItem extends Component {
    constructor(props) {
        super(props);
        this.state={title: props.news.title, description: props.news.description, imgUrl: props.news.urlToImage, url:props.news.url};
        if(this.state.imgUrl === "" || this.state.imgUrl === undefined) {
            this.setState({imgUrl:imageNotFound})
        }
    }
    render() {
        return(
            <li className="list-group-item">
                <a href={this.state.url}>
            <div className="newsList">
                <img src={this.state.imgUrl} />
                <div className="newsText">
                <h3>{this.state.title}</h3>
                <p>{this.state.description}</p>
                </div> 
            </div>
            </a>
            </li>
        )
    }
    
}

export default NewsItem;