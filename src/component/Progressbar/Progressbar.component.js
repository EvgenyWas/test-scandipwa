import { PureComponent, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import ProgressbarLine from 'Component/ProgressbarLine/ProgressbarLine.component';
import ProgressbarStep from 'Component/ProgressbarStep/ProgressbarStep.component';

import './Progressbar.style.scss';

class Progressbar extends PureComponent {
    static propTypes = {
        steps: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            step: PropTypes.string.isRequired
        })).isRequired,
        currentStep: PropTypes.string.isRequired
    }

    checkIsCompleted(step) {
        const { currentStep, steps } = this.props;
        const conditionSteps = steps.findIndex(item => item.step === step) < steps.findIndex(item => item.step === currentStep);

        if (conditionSteps) {
            return true;
        };

        return false;
    }

    renderSteps() {
        const { steps, currentStep } = this.props;
        const renderingSteps = steps.map(item => {
            const conditionIsActive = item.step === currentStep || this.checkIsCompleted(item.step);

            return (
                <Fragment>
                    <ProgressbarLine 
                        key={item.id} 
                        isActive={conditionIsActive} 
                    />
                    <ProgressbarStep 
                        key={item.id}
                        stepNumber={item.id}
                        stepTitle={item.title}
                        isActive={conditionIsActive}
                        isCompleted={this.checkIsCompleted(item.step)}
                    />
                </Fragment>
            )
        })

        return renderingSteps;
    }

    checkIsLastStep() {
        const { steps, currentStep } = this.props;
        const lastStepsIndex = steps.length - 1
        const lastStep = steps[lastStepsIndex].step;
        const isLastStep = currentStep === lastStep;

        return isLastStep;
    }

    render() {
        return (
            <div block="Progressbar" >
                { this.renderSteps() }
                <ProgressbarLine isActive={this.checkIsLastStep()} />
            </div>
        )
    }
}

export default Progressbar;