const Notification = (props) => {
  const { className, text, icon } = props;
  const notificationContainer = `notifications-container ${className}`;
  return (
    <div class={notificationContainer}>
      <img src={icon} alt="image" />
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div class="main-container">
    <h1 class="heading">Notifications</h1>
    <div class="notifications-main-container">
      <Notification
        className="info-message"
        text="Information Message"
        icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="success-message"
        text="Success Message"
        icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="warning-message"
        text="Warning Message"
        icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="error-message"
        text="Error Message"
        icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
