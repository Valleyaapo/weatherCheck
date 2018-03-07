import { connect } from 'react-redux';
import AppView from './AppView'

const mapStateToProps = (state) => {
    if (state.cities == null) {
        state.cities = []
    }
    return { cities: state.cities, city: state.city } 
};
export default connect(mapStateToProps)(AppView)
