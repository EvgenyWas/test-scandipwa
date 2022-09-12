import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import { BILLING_STEP, DETAILS_STEP, SHIPPING_STEP } from 'Route/Checkout/Checkout.config';
import ContentWrapper from 'Component/ContentWrapper';
import Progressbar from 'Component/Progressbar/Progressbar.component';

import 'SourceRoute/Checkout/Checkout.component';
import './Checkout.override.style.scss';

class Checkout extends SourceCheckout {

    progressbarSteps = [
        {
            id: 1,
            title: 'Shipping',
            step: SHIPPING_STEP
        },
        {
            id: 2,
            title: 'Review & Payments',
            step: BILLING_STEP
        },
        {
            id: 3,
            title: 'Details',
            step: DETAILS_STEP
        }
    ];

    render() {
        const { checkoutStep } = this.props;

        return (
            <main block="Checkout">
                <Progressbar
                  steps={ this.progressbarSteps }
                  currentStep={ checkoutStep }
                />
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
};

export default Checkout;