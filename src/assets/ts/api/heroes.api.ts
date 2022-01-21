import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://akabab.github.io/superhero-api/api',
});

export default async function all() {
  try {
    const { data } = await axiosClient.get('/all.json');
    return [null, data];
  } catch (err) {
    return [err];
  }
}
