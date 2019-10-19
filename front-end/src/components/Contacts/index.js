import React from "react";
import Contact from "./components/Contact";
import styles from "./Contacts.module.css";
import { withMessages } from "@components/MessagesProvider";
class Contacts extends React.Component {
  selectChannel = channel => {
    console.log("channel", channel);
    const { selectChannel } = this.props;
    selectChannel(channel.id);
  };

  render() {
    const { channels, selectedChannel } = this.props;

    return (
      <div className={styles.contactsContainer}>
        {channels.map((channel, key) => (
          <Contact
            selectChannel={() => this.selectChannel(channel)}
            active={channel.id === selectedChannel.id}
            key={key}
            {...channel}
          />
        ))}
      </div>
    );
  }
}

export default withMessages(Contacts);
