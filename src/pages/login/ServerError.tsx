import { Button, Result } from "antd"
const ServerError = () => {
  return (
    <Result
    status="500"
    title="500"
    subTitle="Hozircha, Server xavfsizligini ta'minlash va barcha himoya choralari olib borilmoqda"
    extra={<Button type="primary">Back Home</Button>}
  />
  )
}

export default ServerError 