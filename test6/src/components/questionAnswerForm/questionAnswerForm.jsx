import React from "react";

import styles from "./questionAnswerForm.module.scss";

export const QuestionAnswerForm = ({
  question,
  name,
  change,
  disabled,
  pressButtonState,
  value,
  correctValue
}) => {
  let borderColor = pressButtonState
    ? correctValue
      ? "#4595f8"
      : "red"
    : "#c4c4c4";

  return (
    <div className={styles.container}>
      <h3>{question}</h3>
      <input
        disabled={disabled}
        name={name}
        style={{ borderColor: borderColor }}
        type="text"
        value={value}
        onChange={change}
      />
      <div className={styles.error_block}>
        {(pressButtonState && !value && (
          <p>Поле не может быть пустым</p>
        )) ||
          (pressButtonState && !correctValue && (
            <p>Некорректные данные</p>
          ))}
      </div>
    </div>
  );
};
