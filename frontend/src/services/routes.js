
module.exports = {
  routes: [
    {
      path: '/signin',
      view: async () => {
      await import('../pages/signin.js');
      return '<signin-page></signin-page>';
    }
    },
    {
      path: '/authentification',
      view: async () => {
      await import('../pages/authentification.js');
      return '<authentification-page></authentification-page>';
    }
    },
    {
      path: '/profile',
      view: async () => {
      await import('../pages/profile.js');
      return '<profile-page></profile-page>';
    }
    },
    {
      path: '/settings',
      view: async () => {
      await import('../pages/settings.js');
      return '<settings-page></settings-page>';
    },
    }
  ]
  };
