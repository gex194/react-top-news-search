import React, {Component} from 'react';
import axios from 'axios';
import NewsItem from './news-item';

const NEWS_API_KEY = '5e9951a52eb64fd490df26bde36ee43f';

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {newslist: [], country:""}
        
    }

    searchNews() {

    }


    render() {
        return (
            <div>
                <div className="form-group">
                <label htmlFor="countryList">Select news for specific country: </label>
                <select id="countryList" className="form-control" defaultValue="" onChange={(event)=>{
                    this.setState({country: event.target.value})
                    }}>
                    <option value="" disabled hidden>It's time to choose</option>
                    <option value="ru">Russia</option>
                    <option value="us">USA</option>
                    <option value="fr">France</option>
                </select>
                <button onClick={(event)=>{
                    axios.get(`https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=${NEWS_API_KEY}`)
                        .then((response)=>{
                            console.log(response.data.articles);
                        this.setState({newslist:response.data.articles})
                         })
                    }}>Search</button>
                </div>
                <ul className="list-group">
                {this.state.newslist.map((news)=>{return <NewsItem key={news.title} news={news} />})}
                </ul>
            </div>
        )
    }
}

 export default NewsList;