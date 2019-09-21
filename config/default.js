module.exports = {
  port: process.env.PORT || 3000,
  database: {
    url: 'mongodb://localhost:27017/todolist',
  },
};
