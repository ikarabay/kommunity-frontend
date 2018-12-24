import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const style = {
  common:
    'ui-input inline-block border border-lightBlueGrey w-full px-4 rounded-4 ' +
    'bg-white leading-2xl text-base disabled:bg-paleGrey ' +
    'focus:text-dark focus:bg-white focus:border-primary ' +
    'focus:shadow-input-primary focus:outline-none',
  errorText: 'error-text text-red my-2 leading-base',
  helpText: 'help-text text-blueyGrey leading-base',
  icon: 'h-full w-12 leading-base absolute inline-flex items-center justify-center',
  iconLeft: 'icon-left pin-l',
  iconRight: 'icon-right pin-r',
  label: 'label text-dark block leading-base font-normal',
  state: {
    default: 'text-blueyGrey',
    error: 'text-dark border-red focus:border-red focus:shadow-input-red',
    hasIconLeft: 'pl-12',
    hasIconRight: 'pr-12',
  },
  wrapper: 'wrapper relative',
};

class UIInput extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    // value: this.props.value,
  };

  onChangeHandler(e, onChange) {
    const { value } = e.target;
    this.setState({
      value,
    });
    /* istanbul ignore else */
    if (onChange) {
      onChange(e);
    }
  }

  render() {
    const {
      autoComplete,
      placeholder,
      label,
      helpText,
      errorText,
      disabled,
      type,
      extraClassName,
      onChange,
      iconLeft,
      iconRight,
      id,
      extraWrapperClassName,
      htmlRef,
      required,
      pattern,
      name,
      minLength,
      value,
    } = this.props;

    const wrapperClass = cls(style.wrapper, extraWrapperClassName);
    const inputClass = cls(style.common, extraClassName, {
      [style.state.default]: !errorText,
      [style.state.error]: errorText,
      [style.state.hasIconLeft]: iconLeft,
      [style.state.hasIconRight]: iconRight,
    });

    // TODO: add labelFor
    const labelElem = label ? (
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
    ) : null;
    const iconLeftElem = iconLeft ? (
      <div className={cls(style.icon, style.iconLeft)}>{iconLeft}</div>
    ) : null;
    const iconRightElem = iconRight ? (
      <div className={cls(style.icon, style.iconRight)}>{iconRight}</div>
    ) : null;
    const helpTextElem = helpText ? <div className={style.helpText}>{helpText}</div> : null;
    const errorTextElem = errorText ? <div className={style.errorText}>{errorText}</div> : null;
    return (
      <Fragment>
        {labelElem}
        <div className={wrapperClass}>
          {iconLeftElem}
          <input
            ref={htmlRef}
            placeholder={placeholder}
            type={type}
            className={inputClass}
            autoComplete={autoComplete}
            disabled={disabled}
            value={value}
            onChange={event => this.onChangeHandler(event, onChange)}
            required={required}
            pattern={pattern}
            minLength={minLength}
            name={name}
            /* TODO bariscc:
              giving name as id causes an error on chrome 63+'
              when there are more than one inputs with same name on the page; for example:
              email input for subscriptions in footer conflicts with email input on signup form

              Triaged: id is now a required prop
            */
            id={id}
          />
          {iconRightElem}
        </div>
        {helpTextElem}
        {errorTextElem}
      </Fragment>
    );
  }
}

UIInput.defaultProps = {
  autoComplete: 'off',
  type: 'text',
};

UIInput.propTypes = {
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  errorText: PropTypes.string,
  extraClassName: PropTypes.string,
  extraWrapperClassName: PropTypes.string,
  helpText: PropTypes.string,
  htmlRef: PropTypes.object,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  minLength: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default UIInput;
