import { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

class ProgressbarLine extends PureComponent {
    static propTypes = {
        isActive: PropTypes.bool.isRequired
    }

    render() {
        const { isActive } = this.props;

        return (
            <div
                block="Progressbar"
                elem="Line"
                mods={{
                    isActive: isActive
                }}
            />
        )
    }
}

export default ProgressbarLine;