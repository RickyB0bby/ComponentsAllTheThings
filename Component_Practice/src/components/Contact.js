import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <aside id="contact">
        <header>
          <h1>Contact Me</h1>
            <p>Feel free to drop a line!</p>
        </header>
      <form action="#" method="post">
        <div class="form-field">
          <label for="user_name">Name</label>
      <br />
          <input type="text" name="user_name"/> required>
        </div>
          <input type="submit" value="Contact Me Now!"/>
      </form>
    </aside>
    )
  }
}

export default Contact;
