let data, promise;

function fetchData() {
  if (data) return data;
  promise = new Promise((resolve) => {
    setTimeout(() => {
      data = 'data fetched';
      resolve();
    }, 3000);
  });
  throw promise;
}

export default function Content() {
  const data = fetchData();
  return <p>{data}</p>;
}
