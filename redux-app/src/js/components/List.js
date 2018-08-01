import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteArticle } from '../actions/index';

const mapStateToProps = state => {
	return { items: state.articles };
};
const mapDispatchToProps = dispatch => {
	return {
		removeArticles: ID => dispatch(deleteArticle({ ID }))
	};
};

class ConnectedList extends Component {
	render() {
		return (
			<div>
				<ul className="list-group list-group-flush">
					{this.props.items.map((el, index) => (
						<li className="list-group-item" key={el.id}>
							<span>{el.title}</span>
							<button
								key={el.id}
								onClick={() => this.props.removeArticles(index)}
							>
								x
							</button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
{
	/*const ConnectedList = ({ items }) => (
  <ul className="list-group list-group-flush">
    {items.map(el => (
      <li className="list-group-item" key={el.id}>
        <span>{el.title}</span><button key={el.id}>x</button>
      </li>

    ))}
  </ul>
);*/
}
const List = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedList);
export default List;
