<script setup lang="ts">
/*
Imports
*/

import { ref, reactive, watch } from "vue";
import { userStore } from "@/stores/user";

/*
Use Lotion Store 
*/
const userstore = userStore();

const message = reactive({
  name: "",
  email: "",
  message_content: "",
});

const submit_message = () => {
  if (
    message.name != "" ||
    message.email != "" ||
    message.message_content != ""
  ) {
    userstore.send_message(message)
    message.name = "";
    message.email = "";
    message.message_content = "";
  }
};
</script>

<template>
  <main class="contact-section">
    <form @submit.prevent="submit_message">
      <div class="form-inner">
        <h1 class="form-header">Contact Us</h1>
        <div class="divider"></div>
        <p class="more-info">
          Need more assistance with your order? We're here to help! Please
          browse our frequently asked questions as well. Still can't find what
          you need? Complete the form below.
        </p>
        <div class="divider"></div>

        <div class="form-content">
          <div class="form-group">
            <label>
              <div class="icon">
                <svg
                  class="profile"
                  width="22"
                  height="22"
                  viewBox="-42 0 512 512"
                  fill="currentColor"
                >
                  <path
                    d="M210.4 246.6c33.8 0 63.2-12.1 87.1-36.1 24-24 36.2-53.3 36.2-87.2 0-33.9-12.2-63.2-36.2-87.2-24-24-53.3-36.1-87.1-36.1-34 0-63.3 12.2-87.2 36.1S87 89.4 87 123.3c0 33.9 12.2 63.2 36.2 87.2 24 24 53.3 36.1 87.2 36.1zm-66-189.3a89.1 89.1 0 0166-27.3c26 0 47.5 9 66 27.3a89.2 89.2 0 0127.3 66c0 26-9 47.6-27.4 66a89.1 89.1 0 01-66 27.3c-26 0-47.5-9-66-27.3a89.1 89.1 0 01-27.3-66c0-26 9-47.6 27.4-66zm0 0M426.1 393.7a304.6 304.6 0 00-12-64.9 160.7 160.7 0 00-13.5-30.3c-5.7-10.2-12.5-19-20.1-26.3a88.9 88.9 0 00-29-18.2 100.1 100.1 0 00-37-6.7c-5.2 0-10.2 2.2-20 8.5-6 4-13 8.5-20.9 13.5-6.7 4.3-15.8 8.3-27 11.9a107.3 107.3 0 01-66 0 119.3 119.3 0 01-27-12l-21-13.4c-9.7-6.3-14.8-8.5-20-8.5a100 100 0 00-37 6.7 88.8 88.8 0 00-29 18.2 114.4 114.4 0 00-20.1 26.3 161 161 0 00-13.4 30.3A302.5 302.5 0 001 393.7c-.7 9.8-1 20-1 30.2 0 26.8 8.5 48.4 25.3 64.4C41.8 504 63.6 512 90.3 512h246.5c26.7 0 48.6-8 65.1-23.7 16.8-16 25.3-37.6 25.3-64.4a437 437 0 00-1-30.2zm-44.9 72.8c-11 10.4-25.4 15.5-44.4 15.5H90.3c-19 0-33.4-5-44.4-15.5C35.2 456.3 30 442.4 30 424c0-9.5.3-19 1-28.1A272.9 272.9 0 0141.7 338a131 131 0 0110.9-24.7A84.8 84.8 0 0167.4 294a59 59 0 0119.3-12 69 69 0 0123.6-4.5c1 .5 3 1.6 6 3.6l21 13.6c9 5.6 20.4 10.7 34 15.1a137.3 137.3 0 0084.5 0c13.7-4.4 25.1-9.5 34-15.1a2721 2721 0 0027-17.2 69 69 0 0123.7 4.5 59 59 0 0119.2 12 84.5 84.5 0 0114.9 19.4c4.5 8 8.2 16.3 10.8 24.7a275.2 275.2 0 0110.8 57.8c.6 9 1 18.5 1 28.1 0 18.5-5.3 32.4-16 42.6zm0 0"
                  ></path>
                </svg>
              </div>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              v-model="message.name"
              required
            />
          </div>
          <div class="form-group">
            <label>
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="22"
                  height="22"
                  fill="currentColor"
                >
                  <path
                    d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"
                  />
                </svg>
              </div>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              v-model="message.email"
              required
            />
          </div>
          <textarea
            placeholder="Tell us what's wrong"
            v-model="message.message_content"
            required
          ></textarea>
        </div>
        <div class="btn-box">
          <button class="btn">SEND</button>
        </div>
      </div>
    </form>
  </main>
</template>

<style scoped>
.contact-section {
  max-width: 750px;
  margin: 0 auto;
  padding: 35px 28px;
}
form {
  background: var(--color-primary);
}
.form-inner {
  padding: 40px 32px;
}
.form-header {
  text-align: center;
  font-weight: 700;
  line-height: 1.2;
  font-size: 38px;
  margin-bottom: 16px;
}
.divider {
  border-top: 1px solid rgba(173, 181, 189, 0.5);
  height: 0.16px;
  margin: 26px 0;
  position: relative;
}
.more-info {
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 18px;
}
.form-group {
  display: flex;
  margin: 10px 0;
}
.form-group label {
  background-color: var(--color-background);
  border: 1px solid #ccc;
  border-radius: 3px 0 0 3px;
  padding: 12px;
  color: #ccc;
}
.form-group input {
  width: 100%;
  border: 1px solid #dee2e6;
  outline: 0;
  font-size: 16px;
  padding: 13px 18px;
  border-radius: 0 3px 3px 0;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
textarea {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 3px;
  min-height: 140px;
  resize: vertical;
  padding: 14px 17px;
  outline: none;
}
.btn-box {
  text-align: right;
  margin: 15px;
}
.btn {
  color: var(--color-primary);
  cursor: pointer;
  background-color: #17a98a;

  padding: 10px 18px;
  border-radius: 6px;
  border: none;
}
</style>
