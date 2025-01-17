
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
    }
    },
    {
      path: '/sent',
      view: async () => {
      await import('../pages/sent.js');
      return '<sent-page></sent-page>';
    }
    },
    {
      path: '/404',
      view: async () => {
      await import('../pages/404.js');
      return '<404-page></404-page>';
    }
    },
    {
      path: '/page_404',
      view: async () => {
      await import('../pages/page_404.js');
      return '<page_404-page></page_404-page>';
    },
    }
  ]
  };
