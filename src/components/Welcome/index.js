import './index.css'

const Welcome = props => {
  const {name, greeting} = props
  return (
    <h1 className="message">
      {greeting}, {name}
    </h1>
  )
}

// setting default values for the props
// if no props are assigned while using component, default props will be automatically assigned
Welcome.defaultProps = {
  name: 'User',
  greeting: 'Hello',
}

export default Welcome
