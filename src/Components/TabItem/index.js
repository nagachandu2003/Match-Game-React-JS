import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab} = props
  const {tabId, displayText} = tabDetails
  const onTab = () => {
    onClickTab(tabId)
  }
  return (
    <li className="list-item1">
      <button onClick={onTab} className="button1" type="button">
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
