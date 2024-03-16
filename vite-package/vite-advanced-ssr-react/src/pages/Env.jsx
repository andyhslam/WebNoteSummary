export default function Env() {
  let msg = 'default message here';
  try {
    // eslint-disable-next-line no-undef
    msg = process.env.MY_CUSTOM_SECRET || msg;
  } catch {
    return <h1>{msg}</h1>;
  }
}
