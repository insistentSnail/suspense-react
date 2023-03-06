export const fetch = (url) => {
  return new Promise((resolve, reject) => {
    switch (url) {
      case '/api/list1':
        setTimeout(() => {
          resolve({
            code: 200,
            data: {
              name: '刘鑫',
              age: 27
            }
          });
        }, 5000);
        break;
      case '/api/list2':
        setTimeout(() => {
          resolve({
            code: 200,
            data: {
              list: ['A', 'B', 'C']
            }
          });
        }, 2000);
        break;
      default:
        break;
    }
  });
};
