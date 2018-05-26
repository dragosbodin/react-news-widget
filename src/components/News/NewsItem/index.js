import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NewsItem.css';

class NewsItem extends Component {
	render() {
		let article = this.props.article;
		return (
			<li className="newsFeed__item">
				<h3 className="newsFeed__article"><a href={article.url} target="_blank">{article.title}</a></h3>
				<div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-start">
					<p className="newsFeed__date">{article.publishedAt}</p>
					<p className="newsFeed__source">{article.source.name}</p>
				</div>
			</li>
		)
	}
}

NewsItem.propTypes = {
	article: PropTypes.object
};

export default NewsItem;
