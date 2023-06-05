export const ButtonSubmitBasic = (props) => {
  const { disabled, styles, children } = props;

  return (
    <div className={styles['button-styles']}>
      <button disabled={disabled}>{children}</button>
    </div>
  );
};
