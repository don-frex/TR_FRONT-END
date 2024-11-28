
module.exports = {
  routes: [
    {
      path: '/game',
      view: async () => {
      await import('../pages/game.js');
      return '<game-page></game-page>';
    }
    },
    {
      path: '/contact',
      view: async () => {
      await import('../pages/contact.js');
      return '<contact-page></contact-page>';
    }
    },
    {
      path: '/hassan',
      view: async () => {
      await import('../pages/hassan.js');
      return '<hassan-page></hassan-page>';
    }
    },
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
