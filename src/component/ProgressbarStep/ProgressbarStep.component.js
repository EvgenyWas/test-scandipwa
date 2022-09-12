import { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

class ProgressbarStep extends PureComponent {
    static propTypes = {
        stepNumber: PropTypes.number,
        stepTitle: PropTypes.string,
        isActive: PropTypes.bool.isRequired,
        isCompleted: PropTypes.bool.isRequired
    }

    render() {
        const { stepNumber, stepTitle, isActive, isCompleted } = this.props;

        return (
            <div
                block="Progressbar"
                elem="Step"
                mods={{
                    isActive: isActive,
                    isCompleted: isCompleted
                }}
            >
                <div
                    block="Progressbar"
                    elem="Step-number"
                >
                    { stepNumber }
                </div>
                <div
                    block="Progressbar"
                    elem="Step-title"
                >
                    { stepTitle }
                </div>
            </div>
        )
    }

}

export default ProgressbarStep;