import './App.css'
import CheckoutStepper from './components/CheckoutStepper'

const CHECKOUT_STEPS = [
  {
    label: 'Customer Info',
    components: () => <div>Provide Customer Info</div>,
  },
  {
    label: 'Shipping Info',
    components: () => <div>Provide Shipping Info</div>,
  },
  {
    label: 'Payment',
    components: () => <div>Provide Payment Details</div>,
  },
  {
    label: 'Delivered',
    components: () => <div>Provide Delivery Info</div>,
  },
]

function App() {

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS}/>
    </div>
  )
}

export default App
