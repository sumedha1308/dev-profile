/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import './formFieldDevInfo.css';

const FormFieldDevInfo = ({ src, label, name, onChange }) => (
  <div className="form-item">
    <div className="logo-label-input">
      <div className="logo-lable">
        <img src={src} alt="logo" className="logo-img" />
        <div className="label-input">{label}</div>
      </div>
    </div>
    <input name={name} onChange={onChange} className="dev-profile-item" autoComplete="off" />
  </div>
);

export default FormFieldDevInfo;
