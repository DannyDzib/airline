import sx from "./styles.module.css"

const CustomField = ({ field, form: { touched, errors }, ...props }) => (
  <div>
    <input {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className={sx.errorText}>{errors[field.name]}</div>
    )}
  </div>
)

export default CustomField
