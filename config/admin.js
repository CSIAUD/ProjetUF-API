module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '761eda6168e2d3111984ad5add56d7c4'),
  },
});
