// import { Link } from "react-router-dom"
// import NotPageimg from "./../../assets/404.svg"

import { Button, Result } from "antd"

const NotFound = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Uzr, siz qidirayotgan sahifani topa olmadik. yana bir bor qayta urinib ko'rasizmi?"
            extra={<Button type="primary">Back Home</Button>}
        />

    )
}

export default NotFound