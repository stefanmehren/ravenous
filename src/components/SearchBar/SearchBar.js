import React from 'React';
import './SearchBar.css';

let sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
}

class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOptions => {
      let sortByOptionValue = sortByOptions[sortByOptions];
    });
  }
}
