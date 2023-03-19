const Workdays = () => <p>Go to work.</p>;

const Weekends = () => <p>Get some rest. </p>;

const ErrorComponent = () => <p>Something went wrong</p>;

export const CurrentMessage1 = () => {
  const day = new Date().getDay();
  if (day >= 1 && day <= 5) {
    return <Workdays />;
  }
  return <Weekends />;
};

export const CurrentMessage2 = (props) => {
  if (props.day >= 1 && props.day <= 5) {
    return <Workdays />;
  }
  return <Weekends />;
};

export const CurrentMessage3 = ({ day }) => {
  const weekday = day >= 1 && day <= 5;
  const weekend = day >= 6 && day <= 7;

  let message;
  if (weekday) {
    message = <Workdays />;
  } else if (weekend) {
    message = <Weekends />;
  } else {
    message = <ErrorComponent />;
  }

  return <div>{message}</div>;
};
