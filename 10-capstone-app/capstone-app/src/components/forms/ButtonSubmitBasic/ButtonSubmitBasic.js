export const ButtonSubmitBasic = (props) => {
  const { disabled, styles, children } = props;

  return (
    <div className={styles['button-styles']}>
      <button type="submit" disabled={disabled}>
        {children}
      </button>
    </div>
  );
};
