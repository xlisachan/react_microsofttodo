import PropTypes from 'prop-types';

const Main = ({query, renderMain}) => {
    return query ? renderMain.searchResults() : renderMain.todoList()
}

Main.propTypes = {
    query: PropTypes.string.isRequired,
    renderMain: PropTypes.object.isRequired
}

export default Main;