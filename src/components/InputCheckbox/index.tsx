import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`KaizntreeInputCheckbox-${id}`)

  return (
    <div className="KaizntreeInputCheckbox--container" data-testid={inputId}>
      <label
        // #2: Approve checkbox not working
        htmlFor={inputId}
        className={classNames("KaizntreeInputCheckbox--label", {
          "KaizntreeInputCheckbox--label-checked": checked,
          "KaizntreeInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="KaizntreeInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
    </div>
  )
}
