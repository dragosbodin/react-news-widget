import React, { Component } from 'react';
import axios from 'axios';

import NewsItem from '../NewsItem';

import './NewsWidget.css';

class NewsWidget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			sources: [],
			currentPage: 1,
			selectedSource: ''
		}
	}

	getNews() {
		axios.get(`https://newsapi.org/v2/top-headlines?country=gb&pageSize=5&page=${this.state.currentPage}&apiKey=17fcb50c25f244a59d6a87fda4730bef`)
			.then(res => {
				for (let article of res.data.articles) {
					this.setState(prevState => ({
						articles: [...prevState.articles, article]
					}));
				}
			})
			.catch(err => console.log(err));
	}

	componentWillMount() {
		this.getNews();
	}

	render() {
		let articles;
		if (this.state.articles) {
			articles = this.state.articles.map(article => {
				return (
					<NewsItem key={article.title} article={article} />
				);
			});
		}

		return (
			<div className="newsFeed">
				<div className="newsFeed__heading d-flex flex-row align-items-center justify-content-between">
					<h3 className="newsFeed__title">News</h3>
					<select className="newsFeed__sources">

					</select>
				</div>
				<ul className="newsFeed__list">
					{articles}
				</ul>
				<button className="newsFeed__more btn btn-primary">Show More</button>
				<p className="newsFeed__sponsor">Powered by <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">News API</a>.</p>
			</div>
		)
	}
}

export default NewsWidget;
