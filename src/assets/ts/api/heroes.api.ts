import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://akabab.github.io/superhero-api/api',
});

export async function all() {
  try {
    const { data } = await axiosClient.get('/all.json');
    return [null, data];
  } catch (err) {
    return [err];
  }
}
export async function id(num:string) {
  try {
    const { data } = await axiosClient.get(`/id/${num}.json`);
    return [null, data];
  } catch (err) {
    return [err];
  }
}
