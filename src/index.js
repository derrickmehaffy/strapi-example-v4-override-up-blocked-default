"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const userAddFunction =
      strapi.plugins["users-permissions"].services.user.add;

    strapi.plugins["users-permissions"].services.user.add = async (values) => {
      if (!values.blocked) {
        values.blocked = true;
      }
      return userAddFunction(values);
    };
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
