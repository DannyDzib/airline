import Select, { components } from "react-select"
import sx from './styles.module.css'

const MultiSelect = (props) => {
  const DropdownIndicator = (propsDropDown) => {
    return (
      <components.DropdownIndicator {...propsDropDown}>
        <img src={props.icon} alt="icon" />
      </components.DropdownIndicator>
    )
  }
  return (
    <>
      <Select
        {...props}
        components={{ DropdownIndicator }}
        getOptionValue={(option) => option["id"]}
        getOptionLabel={(option) => {
          if (option["origin"]) {
            return option["origin"]
          } else if (option["destination"]) {
            return option["destination"]
          } else {
            return option["name"]
          }
        }}
      />
      <div className={sx.errorText}>
        {props.helperText}
      </div>
    </>
  )
}

export default MultiSelect
