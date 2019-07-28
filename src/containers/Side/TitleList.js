import TitleList from '../../components/Side/TitleList';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    lists: state.lists,
})

export default connect(mapStateToProps)(TitleList);